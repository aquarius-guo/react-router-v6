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
- 新增 Outlet 与 useRoutes 配合使用

  - 在之前没有 useRoutes 时, 路由需要一步步配置, 当有 useRoutes 时, 修改了子路由的渲染方式

    ```react
    {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "/home/news",	// 可以直接写成 news, 但是不能写成 /news, 因为子路由必须在父路由后面
                element: <News />
            },
            {
                path: "/home/message",
                element: <Message />
            }
        ]
    }
    
    // Home 组件的子组件渲染位置由 Outlet 代替
    <div>
        Home
        // NavLink 的 to 属性有三种书写方式: ①: /news, 跳转到根路由, ②: ./news 在父路由下的子路由, ③: news 与 ② 相同
        // 并且 NavLink 拥有 end 属性, 子路由渲染父路由不渲染
        <NavLink to="news">home-news</NavLink>	
        <NavLink to="message">home-message</NavLink>
        <Outlet />
    </div>
    ```
- 新增 useParams 方法

  - 之前函数组件无法获取 Params 参数, 现在使用 useParams 方法获取 Params 参数

    ```react
    // 传参方式
    <NavLink to={`detail/${message.id}/${message.title}/${message.content}`}>detail</NavLink>
    
    // useRoutes 获取 Params 参数写法
    {
    	path: "message",
    	element: <Message />,
    	children: [
    		{
    			path: "detail/:id/:title/:content",
    			element: <Detail />
    		}
    	]
    }
    
    // 使用 useParams 方法获取 Params 参数
    const params = useParams();
    const { id, title, content } = params;
    // 或者
    const x = useMatch("/home/message/detail/:id/:title/:content");
    const { id, title, content } = x.params
    ```

    


  