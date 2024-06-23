// sidebar
function Sidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.innerHTML = `
          <nav>
          <ul>
            <li>
              <a href="index.html">Trang chủ</a>
            </li>
            <li>
              <a onclick="switchToProductPage()" href="#">Sản phẩm</a>
            </li>
            <li>
              <a onclick="switchToProductWePage()" href="#" >Product We
                <img style="  display: inline-block; vertical-align: middle;"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPjxwYXRoIGZpbGw9IiNkZDJlNDQiIGQ9Ik0zNS44ODUgMTEuODMzYzAtNS40NS00LjQxOC05Ljg2OC05Ljg2Ny05Ljg2OGMtMy4zMDggMC02LjIyNyAxLjYzMy04LjAxOCA0LjEyOWMtMS43OTEtMi40OTYtNC43MS00LjEyOS04LjAxNy00LjEyOWMtNS40NSAwLTkuODY4IDQuNDE3LTkuODY4IDkuODY4YzAgLjc3Mi4wOTggMS41Mi4yNjYgMi4yNDFDMS43NTEgMjIuNTg3IDExLjIxNiAzMS41NjggMTggMzQuMDM0YzYuNzgzLTIuNDY2IDE2LjI0OS0xMS40NDcgMTcuNjE3LTE5Ljk1OWMuMTctLjcyMS4yNjgtMS40NjkuMjY4LTIuMjQyIi8+PC9zdmc+"
                  alt="heart-icon" />
              </a>
            </li>
            <li>
              <a onclick="switchToBlogPage()" href="#">Blog</a>
            </li>
            <li>
              <a onclick="switchToContactPage()" href="#">Liên hệ</a>
            </li>
          </ul>
        </nav>
  `;
  return sidebar;
}
document.body.prepend(Sidebar());
