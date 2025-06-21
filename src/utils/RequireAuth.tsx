import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Iprops {
  allowed: boolean;
  redirectTo: string;
  children: React.ReactNode;
}

// 封装成一个组件，并在这个组件中进行判断，如果成功登录了之后，点击返回，不会返回到登录页；在未登录之前，输入路径，也不会跳转到home页面
function RequireAuth({ allowed, redirectTo, children }: Iprops) {
  const navigate = useNavigate();
  // 判断是否登录成功的依据是判断有无token
  // 先用useSelector拿到token
  const { token } = useSelector((state: any) => state.authSlice);
  const isLogin = token ? true : false;

  //一进入页面就判断一下，这个页面需要登录吗
  useEffect(() => {
    // allowed表示当前路由是否需要登录，isLogin表示用户是否登录
    if (allowed !== isLogin) {
      navigate(redirectTo);
    }
  }, [allowed, isLogin, redirectTo]);

  return allowed === isLogin ? <>{children}</> : <></>;
}

export default RequireAuth;
