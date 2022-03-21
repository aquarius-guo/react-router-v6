import React from 'react';
import { useParams, useMatch } from "react-router-dom"

export default function Detail() {
    const params = useParams();
    const x = useMatch("/home/message/detail/:id/:title/:content");
    console.log(x.params);
    const { id, title, content } = params;
    return (
        <div>Detail --- {id} --- {title} --- {content}</div>
    )
}
