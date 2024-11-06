// 특정 API에 GET요청을 보내고 응답을 받아보자.

import { useState, useEffect } from "react";

// useFetch 훅을 호출할 때 url을 전달 받겠다.
export const UseFetch = url => {
    const [data,setData] = useState(null);
    const [error, setError] = useState(null);
    const [inProgress, setInProgress] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setInProgress(true);
            const res = await fetch(url); // url에 비동기 통신 요청을(default get 방식)
            const result = await res.json(); // fetch를 통해 얻어온 데이터는 json 형식으로 변환해야 함
            if(res.ok){
                setData(result);
                setError(null);
            }else{
                throw result;
            }
        } catch (error) {
            setError(error);
        }finally{
            setInProgress(false);
        }
    }//fetch data
    fetchData(); // fetchData() 호출
    },[])
    return {data, error, inProgress};
}
// 빌드 도구, gradle, 의존성관리가 필요한 이유, 프로젝트 빌드, 배포가 무엇