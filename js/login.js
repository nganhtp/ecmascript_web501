let apiUser = "http://localhost:3000/user";

// Đăng nhập
const username = document.querySelector(".input-login-username");
const password = document.querySelector(".input-login-password");
const bntLogin = document.querySelector(".login__signInButton");

// Lấy thông tin người dùng
const getUser = async () => {
  try {
    const response = await fetch(apiUser);
    if (!response.ok) {
      throw new Error('Phản hồi mạng không thành công ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Có vấn đề xảy ra khi thực hiện yêu cầu:', error);
    alert("Không thể lấy dữ liệu người dùng.");
  }
};

// Đăng nhập
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Vui lòng nhập tên đăng nhập và mật khẩu của bạn");
  } else {
    getUser().then((data) => {
      if (!data) {
        return;
      }
      const user = data.find(
        (user) =>
          user.username === username.value.trim() && user.password === password.value.trim()
      );
      if (user) {
        alert("Đăng nhập thành công");
        window.location.href = "index.html";
      } else {
        alert("Đăng nhập thất bại");
      }
    }).catch((error) => {
      console.error('Lỗi trong quá trình đăng nhập:', error);
      alert("Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại.");
    });
  }
});
