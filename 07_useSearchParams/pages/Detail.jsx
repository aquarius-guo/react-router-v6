import React from 'react';
import { useSearchParams, useLocation } from "react-router-dom"

export default function Detail() {
    const [search, setSearch] = useSearchParams();
    const id = search.get("id");
    const title = search.get("title");
    const content = search.get("content");
    
    return (
        <div>
            <h1>Detail --- {id} --- {title} --- {content}</h1>
            <button onClick={() => setSearch("id=002&title=标题&content=helloworld", {
                replace: true,
                state: "123=hellofuck"
            })}>修改Search</button>
        </div>
    )
}
