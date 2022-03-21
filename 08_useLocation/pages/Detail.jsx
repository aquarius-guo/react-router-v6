import React from 'react';
import { useLocation } from "react-router-dom"

export default function Detail() {
    const { state: {id, title, content, a} } = useLocation();
    console.log(id, title, content, a);
    return (
        <div>
            <h1>Detail</h1>
        </div>
    )
}
