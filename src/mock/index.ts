// 所有的接口文件都放在这个文件中
import Mock from "mockjs";
// 模拟网络请求延时
Mock.setup({
  timeout: "200-600",
});

Mock.mock("http://www.demo.com/login", "post", (options: any) => {
  // console.log("options", options.body);
  const { username, password } = JSON.parse(options.body);
  console.log(username, password);

  // 条件判断，当用户名和密码与数据一致时，才能返回登录成功
  if (username === "admin" && password === "admin123123") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        username: "Dave",
        token: "mocktoken123456admin",
      },
    };
  } else if (username === "manager" && password === "manager123123") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        username: "manager",
        token: "mocktoken123456manager",
      },
    };
  } else if (username === "user" && password === "user123123") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        username: "user",
        token: "mocktoken123456user",
      },
    };
  } else {
    return {
      code: 401,
      message: "用户名或密码有误",
      data: {},
    };
  }
});
