# React-Router

- 删除了 Switch, v5版本的 Switch 可有可无, 匹配到第一个路由时就不会继续向下匹配

  - 使用 Routes 替代了 Switch , 但是现在必须在 Route 外层必须包裹 Routes, 其他的不变

    ```react
    <Routes>
        <Route path='about' element={<About />} />
        <Route path='home' element={<Home />} />
    </Routes>
    ```

    