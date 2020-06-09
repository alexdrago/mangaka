webpackJsonp([3],{

/***/ "./assets/css/login.css":
/*!******************************!*\
  !*** ./assets/css/login.css ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/js/login.js":
/*!****************************!*\
  !*** ./assets/js/login.js ***!
  \****************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_login_css__ = __webpack_require__(/*! ../css/login.css */ "./assets/css/login.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_login_css__);





__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-recommended-login').on('click', '.js-show-login', function (e) {
        e.preventDefault();

        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-recommended-login-details').toggle();
    });

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.js-login-field-username').on('keydown', function (e) {
        var $usernameInput = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget);
        // remove any existing warnings
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.login-long-username-warning').remove();

        if ($usernameInput.val().length >= 20) {
            var $warning = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<div class="login-long-username-warning">This is a really long username - are you sure that is right?</div>');
            $usernameInput.before($warning);
        }
    });
});

/***/ })

},["./assets/js/login.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2xvZ2luLmNzcz82MGU0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwiJHVzZXJuYW1lSW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwicmVtb3ZlIiwidmFsIiwibGVuZ3RoIiwiJHdhcm5pbmciLCJiZWZvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlDOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFhOztBQUViO0FBQ0E7O0FBRUFBLDhDQUFDQSxDQUFDQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QkYsa0RBQUNBLENBQUMsdUJBQUYsRUFBMkJHLEVBQTNCLENBQThCLE9BQTlCLEVBQXVDLGdCQUF2QyxFQUF5RCxVQUFTQyxDQUFULEVBQVk7QUFDakVBLFVBQUVDLGNBQUY7O0FBRUFMLHNEQUFDQSxDQUFDLCtCQUFGLEVBQW1DTSxNQUFuQztBQUNILEtBSkQ7O0FBTUFOLGtEQUFDQSxDQUFDLDBCQUFGLEVBQThCRyxFQUE5QixDQUFpQyxTQUFqQyxFQUE0QyxVQUFTQyxDQUFULEVBQVk7QUFDcEQsWUFBTUcsaUJBQWlCUCw4Q0FBQ0EsQ0FBQ0ksRUFBRUksYUFBSixDQUF2QjtBQUNBO0FBQ0FSLHNEQUFDQSxDQUFDLDhCQUFGLEVBQWtDUyxNQUFsQzs7QUFFQSxZQUFJRixlQUFlRyxHQUFmLEdBQXFCQyxNQUFyQixJQUErQixFQUFuQyxFQUF1QztBQUNuQyxnQkFBTUMsV0FBV1osOENBQUNBLENBQUMsNkdBQUYsQ0FBakI7QUFDQU8sMkJBQWVNLE1BQWYsQ0FBc0JELFFBQXRCO0FBQ0g7QUFDSixLQVREO0FBVUgsQ0FqQkQsRSIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY3NzL2xvZ2luLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9hc3NldHMvY3NzL2xvZ2luLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJy4uL2Nzcy9sb2dpbi5jc3MnO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKCcuanMtcmVjb21tZW5kZWQtbG9naW4nKS5vbignY2xpY2snLCAnLmpzLXNob3ctbG9naW4nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCcuanMtcmVjb21tZW5kZWQtbG9naW4tZGV0YWlscycpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmpzLWxvZ2luLWZpZWxkLXVzZXJuYW1lJykub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0ICR1c2VybmFtZUlucHV0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAvLyByZW1vdmUgYW55IGV4aXN0aW5nIHdhcm5pbmdzXG4gICAgICAgICQoJy5sb2dpbi1sb25nLXVzZXJuYW1lLXdhcm5pbmcnKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoJHVzZXJuYW1lSW5wdXQudmFsKCkubGVuZ3RoID49IDIwKSB7XG4gICAgICAgICAgICBjb25zdCAkd2FybmluZyA9ICQoJzxkaXYgY2xhc3M9XCJsb2dpbi1sb25nLXVzZXJuYW1lLXdhcm5pbmdcIj5UaGlzIGlzIGEgcmVhbGx5IGxvbmcgdXNlcm5hbWUgLSBhcmUgeW91IHN1cmUgdGhhdCBpcyByaWdodD88L2Rpdj4nKTtcbiAgICAgICAgICAgICR1c2VybmFtZUlucHV0LmJlZm9yZSgkd2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2xvZ2luLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==