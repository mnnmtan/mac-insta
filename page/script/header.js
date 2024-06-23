// Header
function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
        <div class="logo">
          <a href="index.html">
        <img
            src="https://macinsta.vn/wp-content/uploads/2023/06/logo2_trang_web.png"
            alt="logo" />
          </a>
        </div>
        <nav>
          <div class="phone-number">
            <p>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTE5LjIzIDE1LjI2bC0yLjU0LS4yOWExLjk5IDEuOTkgMCAwIDAtMS42NC41N2wtMS44NCAxLjg0YTE1LjA0NSAxNS4wNDUgMCAwIDEtNi41OS02LjU5bDEuODUtMS44NWMuNDMtLjQzLjY0LTEuMDMuNTctMS42NGwtLjI5LTIuNTJhMi4wMDEgMi4wMDEgMCAwIDAtMS45OS0xLjc3SDUuMDNjLTEuMTMgMC0yLjA3Ljk0LTIgMi4wN2MuNTMgOC41NCA3LjM2IDE1LjM2IDE1Ljg5IDE1Ljg5YzEuMTMuMDcgMi4wNy0uODcgMi4wNy0ydi0xLjczYy4wMS0xLjAxLS43NS0xLjg2LTEuNzYtMS45OCIvPjwvc3ZnPg==" width="20px"
                alt="phone-icon" />
              0904 322 326
            </p>
          </div>
          <div class="header-devider"></div>
          <div class="header-search">
            <img  onclick="showSearchModal()"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0yMSAyMWwtNC4zNDMtNC4zNDNtMCAwQTggOCAwIDEgMCA1LjM0MyA1LjM0M2E4IDggMCAwIDAgMTEuMzE0IDExLjMxNCIvPjwvc3ZnPg==" width="20px" 
              alt="search-icon" />
          </div>
          <div class="header-account">
            <img onclick="showLoginModal()"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDRhNCA0IDAgMCAxIDQgNGE0IDQgMCAwIDEtNCA0YTQgNCAwIDAgMS00LTRhNCA0IDAgMCAxIDQtNG0wIDEwYzQuNDIgMCA4IDEuNzkgOCA0djJINHYtMmMwLTIuMjEgMy41OC00IDgtNCIvPjwvc3ZnPg==" width="20px" 
              alt="account-icon" />
          </div>
          <div class="header-fovourite">
            <img onclick="switchToFavouritePage()"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTEyLjEgMTguNTVsLS4xLjFsLS4xMS0uMUM3LjE0IDE0LjI0IDQgMTEuMzkgNCA4LjVDNCA2LjUgNS41IDUgNy41IDVjMS41NCAwIDMuMDQgMSAzLjU3IDIuMzZoMS44NkMxMy40NiA2IDE0Ljk2IDUgMTYuNSA1YzIgMCAzLjUgMS41IDMuNSAzLjVjMCAyLjg5LTMuMTQgNS43NC03LjkgMTAuMDVNMTYuNSAzYy0xLjc0IDAtMy40MS44MS00LjUgMi4wOEMxMC45MSAzLjgxIDkuMjQgMyA3LjUgM0M0LjQyIDMgMiA1LjQxIDIgOC41YzAgMy43NyAzLjQgNi44NiA4LjU1IDExLjUzTDEyIDIxLjM1bDEuNDUtMS4zMkMxOC42IDE1LjM2IDIyIDEyLjI3IDIyIDguNUMyMiA1LjQxIDE5LjU4IDMgMTYuNSAzIi8+PC9zdmc+" width="20px" 
              alt="fovourite-icon" />
          </div>
          <div class="header-devider"></div>
          <div class="header-cart">
            <img  onclick="switchToCartPage()"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjE5ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTY2NCAxNDA4Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02NDAgMTI4MHEwIDUyLTM4IDkwdC05MCAzOHQtOTAtMzh0LTM4LTkwdDM4LTkwdDkwLTM4dDkwIDM4dDM4IDkwbTg5NiAwcTAgNTItMzggOTB0LTkwIDM4dC05MC0zOHQtMzgtOTB0MzgtOTB0OTAtMzh0OTAgMzh0MzggOTBtMTI4LTEwODh2NTEycTAgMjQtMTYuNSA0Mi41VDE2MDcgNzY4TDU2MyA4OTBxMTMgNjAgMTMgNzBxMCAxNi0yNCA2NGg5MjBxMjYgMCA0NSAxOXQxOSA0NXQtMTkgNDV0LTQ1IDE5SDQ0OHEtMjYgMC00NS0xOXQtMTktNDVxMC0xMSA4LTMxLjV0MTYtMzZ0MjEuNS00MFQ0NDUgOTUxTDI2OCAxMjhINjRxLTI2IDAtNDUtMTlUMCA2NHQxOS00NVQ2NCAwaDI1NnExNiAwIDI4LjUgNi41VDM2OCAyMnQxMyAyNC41dDggMjZ0NS41IDI5LjV0NC41IDI2aDEyMDFxMjYgMCA0NSAxOXQxOSA0NSIvPjwvc3ZnPg==" width="15px" 
              alt="cart-icon" />
          </div>
        </nav>
  `;
  return header;
}
document.body.prepend(Header());
