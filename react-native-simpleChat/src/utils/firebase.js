import {initializeApp} from 'firebase/app'
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth';
import config from '../../firebase.json'
import { getStorage,uploadBytes,ref, getDownloadURL} from 'firebase/storage';
import { getFirestore,doc,collection,setDoc } from 'firebase/firestore';


//initializeApp()메서드
//firebase는 전달된 설정을 기반으로 객체를 생성한다.
//이후 app을 통해서 firebase의 인증, 데이터베이스, 스토리지등의 서비스를 이용할 것이다.
const app = initializeApp(config);

const auth = getAuth(app);

const uploadImage = async uri => {

    // 만약 uri가 https로 시작하는 웹 url이면 업로드 하지 않고 그대로 반환
    if (uri.startsWith('https')) {
        return URL;
    }

// 로컬 파일인 경우 fetch를 통해 이미지 데이터를 불러오고 blob형태로 변환
const response = await fetch (uri);
const blob = await response.blob();
// 현재 로그인된 사용자의 아이디(uid)를 가져온다
const {uid} = auth.currentUser;
// firefbase의 storage인스턴스를 가져오고ㅡ, 저장할 파일의 참조를 생성
const storage = getStorage(app);
const storageRef = ref(storage, `/profile/${uid}/person.png`);
// 지정한 참조에 blob 데이터를 image/png헝식으로 업로드
await uploadBytes(storageRef, blob, {
    contentType: 'image/png',
});
// 업로드된 파일의 다운로드 URL을 가져와 반환
return await getDownloadURL(storageRef)
}
//signInWithEmailAndPassword
//이메일과 비밀번호를 이용해 인증받는 함수
export const login = async({email, password}) => {
    const {user} = await signInWithEmailAndPassword(auth,email, password);

    return user;
}

//회원가입 함수
export const signup = async({name, email, password, photoUrl}) => {

    // 이메일과 비밀번호로 사용자 추가
    const {user} = await createUserWithEmailAndPassword(auth, email, password);

    // 주어진 photoUrl 에서 uri를 반환해서 저장
    const PhotoUrl = await uploadImage(photoUrl);

    // photoUrl 을 firebase 스토리지에 업로드
    await updateProfile(auth.currentUser, {displayName : name, photoURL:PhotoUrl})
    return user;
}

export const logout = async () => {
    await signOut(auth);
    return {};
}

//현재 로그인한 유저의 정보를 불러오는 함수
export const getCurrentUser = () => {
    const {uid, displayName, email, photoURL} = auth.currentUser;
    return {uid, displayName, email, photoURL};
}

// 다른 사진을 업로드 할 수 있게 수정해주는 함수
export const updateUserInfo = async photo => {
    const photoUrl = await uploadImage(photo);
    await updateProfile(auth.currentUser, {photoUrl})
    return photoUrl;
}

export const db = getFirestore(app);


//새로운 채널을 생성하는 함수
export const createChannel = async({title, description}) => {
    
    // Firestore에서 'channel' 컬렉션을 참조
    // collection(db, 'channels');
    // 데이터베이스 객체 db와 컬렉션 이름으로 사용할 channels를 입력받아 특정 컬렉션을 가리킨다
    const channelCollection = collection(db, 'channels');
    
    // 새 문서 참조 생성(랜덤ID가 자동으로 할당됨)
    // doc(channelCollection);
    // 컬렉션에서 새로운 문서를 위한 참조를 생성
    // 이렇게 생성된 참조는 아직 데이터베이스에 저장되지 않은 상태
    const newChannelRef = doc(channelCollection);
    
    // 새 문서의 Id를 추출한다.
    const id = newChannelRef.id;
   
    // 새 채널 데이터를 객체로 구성
    const newChannel = {
        id, // 채널 제목
        title, // 채널 제목
        description, // 채널 설명
        createAt:Date.now(), // 생성 시간(현재 타임스탬프)
    };
    // FireStore에 새 문서를 생성하고 데이터 저장
    // await setDoc(newChannelRef, newChannel)
    // newChannelRef가 가리키는 경로에 newChannel 객체를 저장
    await setDoc(newChannelRef, newChannel);
    // 생성된 문서의 ID를 반환
    return id;
}

export const createMessage = async ({channelId, text}) => {
    // 특정 채널의 메시지 컬렉션 안에 새로운 메시지 문서의 레퍼런스를 생성
    const docRef = doc(db, `channels/${channelId}/messages`,text);
    
    // 생성된 문서 레퍼런스에 메시지 데이터를 저장
    // 기존 메시지 객체의 모든 속성을 복사하고
    // createAt 필드를 현재의 시간으로 추가
    await setDoc(docRef, {...text, createAt: Date.now()});
}