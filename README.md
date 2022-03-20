# React-Router

- 删除了 Switch, v5版本的 Switch 可有可无, 匹配到第一个路由时就不会继续向下匹配

  - 使用 Routes 替代了 Switch , 但是现在必须在 Route 外层必须包裹 Routes, 其他的不变
  - caseSensitive 严格区分路由的大小写, 默认: false

    ```react
    <Routes>
        <Route caseSensitive path='about' element={<About />} />
        <Route path='home' element={<Home />} />
    </Routes>
    ```

- 删除了 Redirect

  - 使用 Navigator 替代 Redirect, Navigator 必传属性 to, 跳转的地址, replace 表示替换还是压路由(push)

    ```react
    <Routes>
        <Route path='about' element={<About />} />
        <Route path='home' element={<Home />} />
        <Route path='*' element={<Navigate to="about" replace={true}/>} />
    </Routes>
    ```