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

  - 使用 Navigate  替代 Redirect, Navigate  必传属性 to, 跳转的地址, replace 表示替换还是压路由(push)

    ```react
    <Routes>
        <Route path='about' element={<About />} />
        <Route path='home' element={<Home />} />
        <Route path='*' element={<Navigate to="about" replace={true}/>} />
    </Routes>
    ```
- 删除 activeClassName 属性(修改 NavLink 高亮时的 class 名)

  - 使用 className={函数} 替代: 该函数首次渲染执行一次, 之后每次路由发生变化都会执行一次(不管是不是当前的 NavLink)

  - 该函数接收一个参数, 参数是一个对象, 对象有 isActive 属性, 当前路由是对应的 to 则属性值为 true

  - 根据函数的返回值去替换 className 名

    ```react
    <NavLink className={({isActived}) => isActive ? "aquarius" : "no-aquarius" to="/about">
      about
    </NavLink>
    ```

- 新增 useRoutes 来映射路由

  - 可以将路由表抽离成单独的文件, 更加方便管理

    ```react
    import { Navigate } from "react-router-dom";
    import Home from "../pages/Home";
    import About from "../pages/About";
    export default [
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "*",
            element: <Navigate to="/home" />
        }
    ]
    
    // 此时的 element 就是 Routes 内部嵌套 Route
    const element = useRoutes(routes);
    ```
  