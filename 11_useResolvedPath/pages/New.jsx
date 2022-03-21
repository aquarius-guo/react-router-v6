import React from 'react';
import { useResolvedPath } from "react-router-dom";

function News() {
    const {pathname, search, hash} = useResolvedPath("/user/123?id=001&name=zhangsan");
    return (
        <div>
            News
        </div>
    )
}

export default News
