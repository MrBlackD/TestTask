import fetch from "isomorphic-fetch";

export function get(url){
    return fetch(url).then((res)=>{
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }).catch((err)=>{
        console.error(err);
    });
} 