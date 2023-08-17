import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal } )
            .then( res => res.json() )
            .then( resData => {
                setData(resData);
                setIsLoading(false);
            } ).catch( err => {
                if(err.name === "AbortError") console.log("fetch aborted");
            })
        ;

        return () => abortCont.abort();
    }, [url] );

    return [data, isLoading];
}

export default useFetch;