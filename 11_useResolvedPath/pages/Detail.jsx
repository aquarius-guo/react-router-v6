import React from 'react';
import { useLocation, useResolvedPath } from 'react-router-dom';

export default function Detail() {
    const { state: { id, title, content }, pathname } = useLocation();
    console.log(useLocation());
    console.log(id, title, content);
    console.log(useResolvedPath(pathname));
    return (
        <div>
            <h1>Detail</h1>
        </div>
    )
}
