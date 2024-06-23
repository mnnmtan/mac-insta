// Information
function Information() {
  const information = document.createElement("div");
  information.classList.add("information");
  information.innerHTML = `
    <div class="hotline">
      <div class="logo-info">
        <img src="https://macinsta.vn/wp-content/uploads/2024/01/logo_black.png" alt="logo" />
      </div>
      <span>macinsta.vn là kênh mua sắm đồ công nghệ cao cấp</span>
      <p>Hotline 1: 0904 322 326</p>
      <p>Hotline 2: 0904 322 335</p>
      <p>CSKH: 0901 536 388</p>
      <span>Copyright © 2016 Macinsta.vn</span>
    </div>
    <div class="take-care-customers">
      <p>
         <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTE5LjIzIDE1LjI2bC0yLjU0LS4yOWExLjk5IDEuOTkgMCAwIDAtMS42NC41N2wtMS44NCAxLjg0YTE1LjA0NSAxNS4wNDUgMCAwIDEtNi41OS02LjU5bDEuODUtMS44NWMuNDMtLjQzLjY0LTEuMDMuNTctMS42NGwtLjI5LTIuNTJhMi4wMDEgMi4wMDEgMCAwIDAtMS45OS0xLjc3SDUuMDNjLTEuMTMgMC0yLjA3Ljk0LTIgMi4wN2MuNTMgOC41NCA3LjM2IDE1LjM2IDE1Ljg5IDE1Ljg5YzEuMTMuMDcgMi4wNy0uODcgMi4wNy0ydi0xLjczYy4wMS0xLjAxLS43NS0xLjg2LTEuNzYtMS45OCIvPjwvc3ZnPg=="
                alt="phone-icon" />
              0904 322 326
            </p>
            <span>(8:00 - 19:00, từ thứ hai đến chủ nhật)</span>
            <p>HỖ TRỢ KHÁCH HÀNG</p>
            <p>Câu hỏi thường gặp (FAQ)</p>
            <p>Hướng dẫn mua hàng</p>
            <p>Chính sách giao hàng</p>
            <p>Chính sách đổi trả</p>
            <p>Chính sách bảo hành</p>
            <p>Điều khoản bảo mật</p>
          </div>
          <div class="about-us">
            <p> Email: info@macinsta.vn</p>
            <p>VỀ MACINSTA</p>
            <p>Giới thiệu về MacInsta</p>
            <p>Quy trình tư vấn</p>
            <p>Ưu đãi khách hàng thân thiết</p>
            <p>Sản phẩm ở MacInsta</p>
            <p>Vì sao chọn MacInsta?</p>
            <p>Tuyển dụng</p>
          </div>
          <div class="payment">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyA3LjAwN0E0LjAwNyA0LjAwNyAwIDAgMSA3LjAwNyAzaDQxLjk4NkE0LjAwNyA0LjAwNyAwIDAgMSA1MyA3LjAwN3Y0MS45ODZBNC4wMDcgNC4wMDcgMCAwIDEgNDguOTkzIDUzSDcuMDA3QTQuMDA3IDQuMDA3IDAgMCAxIDMgNDguOTkzek0zNy4yOCA1MVYzMS44NDJoNi40ODZsLjk3MS03LjQ2NkgzNy4yOHYtNC43NjdjMC0yLjE2Mi42MDUtMy42MzUgMy43MzItMy42MzVMNDUgMTUuOTcyVjkuMjk0QzQ0LjMxIDkuMjA0IDQxLjk0MyA5IDM5LjE4OSA5Yy01Ljc1IDAtOS42ODYgMy40OC05LjY4NiA5Ljg3djUuNTA2SDIzdjcuNDY2aDYuNTAzVjUxeiIvPjwvc3ZnPg==" width="50px"  alt="facebook-icon">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy40NjUgMS4wNjZDOC42MzggMS4wMTIgOS4wMTIgMSAxMiAxYzIuOTg4IDAgMy4zNjIuMDEzIDQuNTM0LjA2NmMxLjE3Mi4wNTMgMS45NzIuMjQgMi42NzIuNTExYy43MzMuMjc3IDEuMzk4LjcxIDEuOTQ4IDEuMjdjLjU2LjU0OS45OTIgMS4yMTMgMS4yNjggMS45NDdjLjI3Mi43LjQ1OCAxLjUuNTEyIDIuNjdDMjIuOTg4IDguNjM5IDIzIDkuMDEzIDIzIDEyYzAgMi45ODgtLjAxMyAzLjM2Mi0uMDY2IDQuNTM1Yy0uMDUzIDEuMTctLjI0IDEuOTctLjUxMiAyLjY3YTUuMzk2IDUuMzk2IDAgMCAxLTEuMjY4IDEuOTQ5Yy0uNTUuNTYtMS4yMTUuOTkyLTEuOTQ4IDEuMjY4Yy0uNy4yNzItMS41LjQ1OC0yLjY3LjUxMmMtMS4xNzQuMDU0LTEuNTQ4LjA2Ni00LjUzNi4wNjZjLTIuOTg4IDAtMy4zNjItLjAxMy00LjUzNS0uMDY2Yy0xLjE3LS4wNTMtMS45Ny0uMjQtMi42Ny0uNTEyYTUuMzk3IDUuMzk3IDAgMCAxLTEuOTQ5LTEuMjY4YTUuMzkyIDUuMzkyIDAgMCAxLTEuMjY5LTEuOTQ4Yy0uMjcxLS43LS40NTctMS41LS41MTEtMi42N0MxLjAxMiAxNS4zNjEgMSAxNC45ODcgMSAxMmMwLTIuOTg4LjAxMy0zLjM2Mi4wNjYtNC41MzRjLjA1My0xLjE3Mi4yNC0xLjk3Mi41MTEtMi42NzJhNS4zOTYgNS4zOTYgMCAwIDEgMS4yNy0xLjk0OGE1LjM5MiA1LjM5MiAwIDAgMSAxLjk0Ny0xLjI2OWMuNy0uMjcxIDEuNS0uNDU3IDIuNjctLjUxMW04Ljk4IDEuOThjLTEuMTYtLjA1My0xLjUwOC0uMDY0LTQuNDQ1LS4wNjRjLTIuOTM3IDAtMy4yODUuMDExLTQuNDQ1LjA2NGMtMS4wNzMuMDQ5LTEuNjU1LjIyOC0yLjA0My4zNzljLS41MTMuMi0uODguNDM3LTEuMjY1LjgyMmEzLjQxMiAzLjQxMiAwIDAgMC0uODIyIDEuMjY1Yy0uMTUxLjM4OC0uMzMuOTctLjM3OSAyLjA0M2MtLjA1MyAxLjE2LS4wNjQgMS41MDgtLjA2NCA0LjQ0NWMwIDIuOTM3LjAxMSAzLjI4NS4wNjQgNC40NDVjLjA0OSAxLjA3My4yMjggMS42NTUuMzc5IDIuMDQzYy4xNzYuNDc3LjQ1Ny45MS44MjIgMS4yNjVjLjM1NS4zNjUuNzg4LjY0NiAxLjI2NS44MjJjLjM4OC4xNTEuOTcuMzMgMi4wNDMuMzc5YzEuMTYuMDUzIDEuNTA3LjA2NCA0LjQ0NS4wNjRjMi45MzggMCAzLjI4NS0uMDExIDQuNDQ1LS4wNjRjMS4wNzMtLjA0OSAxLjY1NS0uMjI4IDIuMDQzLS4zNzljLjUxMy0uMi44OC0uNDM3IDEuMjY1LS44MjJjLjM2NS0uMzU1LjY0Ni0uNzg4LjgyMi0xLjI2NWMuMTUxLS4zODguMzMtLjk3LjM3OS0yLjA0M2MuMDUzLTEuMTYuMDY0LTEuNTA4LjA2NC00LjQ0NWMwLTIuOTM3LS4wMTEtMy4yODUtLjA2NC00LjQ0NWMtLjA0OS0xLjA3My0uMjI4LTEuNjU1LS4zNzktMi4wNDNjLS4yLS41MTMtLjQzNy0uODgtLjgyMi0xLjI2NWEzLjQxMyAzLjQxMyAwIDAgMC0xLjI2NS0uODIyYy0uMzg4LS4xNTEtLjk3LS4zMy0yLjA0My0uMzc5bS01Ljg1IDEyLjM0NWEzLjY2OSAzLjY2OSAwIDAgMCA0LTUuOTg2YTMuNjcgMy42NyAwIDEgMC00IDUuOTg2TTguMDAyIDguMDAyYTUuNjU0IDUuNjU0IDAgMSAxIDcuOTk2IDcuOTk2YTUuNjU0IDUuNjU0IDAgMCAxLTcuOTk2LTcuOTk2bTEwLjkwNi0uODE0YTEuMzM3IDEuMzM3IDAgMSAwLTEuODktMS44OWExLjMzNyAxLjMzNyAwIDAgMCAxLjg5IDEuODkiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="  width="50px" alt="instagram-icon">
            <br/>
            <br/>
              <span>Được chứng nhận</span>
            <br/>
            <img
              src="https://macinsta.vn/wp-content/uploads/2018/09/siteseal.png"
              alt="logo" />
            <br/>
            <br/>
            <span>Cách thức thanh toán</span>
            <br/>
            <img src="https://macinsta.vn/wp-content/uploads/2018/09/visa.png" width="150px" height="50px" alt="payment">
            <br/>
            <br/>
                        <img
              src="https://macinsta.vn/wp-content/uploads/2018/09/siteseal.png"
              alt="logo" />

              </div> 
  `;
  return information;
}

document.body.appendChild(Information());
