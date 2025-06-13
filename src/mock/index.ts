// 所有的接口文件都放在这个文件中
import Mock from "mockjs";

Mock.mock("http://www.demo.com/login", "post", (options: any) => {
  return {
    code: 200,
    message: "登录成功",
    data: {
      username: "Dave",
      token: "mocktoken123456admin",
    },
  };
});
