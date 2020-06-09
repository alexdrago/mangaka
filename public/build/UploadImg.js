webpackJsonp([4],{

/***/ "./assets/js/UploadImg.js":
/*!********************************!*\
  !*** ./assets/js/UploadImg.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


var i = 0;
var dataImage = new Array();
var dataPosition = new Array();

__WEBPACK_IMPORTED_MODULE_0_jquery___default()("#images").change(function () {
    var checkImage = this.value;
    var ext = checkImage.substring(checkImage.lastIndexOf('.') + 1).toLowerCase();
    if (ext == "gif" || ext == "png" || ext == "jpg" || ext == "jpeg") {
        change(this);
        var file = document.getElementById('images').files[0];
        dataImage[i] = file; //add push to array dataImage
        dataPosition[i] = i; //add push position to dataPosition
        //created html progress
        var html_progress = '<div class="progress" style="margin-bottom:5px;"><div class="progress-bar" id="progress-' + i + '" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div></div>';
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".show-progress").append(html_progress);
        i++;
    } else alert("Please select image file (jpg, jpeg, png).");
});
var change = function change(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var addImage = '<div class="col-md-3"><img src=' + e.target.result + '></div>';

            //add image to div="showImage"
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#showImage").append(addImage);
        };
        reader.readAsDataURL(input.files[0]);
    }
};
var upload = function upload(data, position) {
    var formData = new FormData();
    //append data to formdata
    formData.append('image', data);
    var id = position;
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': __WEBPACK_IMPORTED_MODULE_0_jquery___default()('meta[name="csrf-token"]').attr('content')
        }
    });
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
        type: 'POST',
        url: 'http://localhost:8000/form/upload',
        data: formData,
        contentType: false,
        dataType: 'json',
        processData: false,
        cache: false,
        xhr: function xhr() {
            console.log(id);
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);
                    if (percentComplete == 100) {
                        dataImage.splice(id, 1);
                        dataPosition.splice(id, 1);
                    }
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#progress-" + id).text(percentComplete + '%');
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#progress-" + id).css('width', percentComplete + '%');
                }
            }, false);
            return xhr;
        },
        success: function success(data) {
            console.log(data);
        }

    });
};

__WEBPACK_IMPORTED_MODULE_0_jquery___default()("form#upload").submit(function (event) {
    event.preventDefault();
    var k = 0;
    for (k = 0; k < dataImage.length; k++) {

        /**
         * Function Upload
         * params 1: data image
         * params 2: position[ progressbar-1 or progressbar-2,...]
         */
        upload(dataImage[k], dataPosition[k]);
    }
});

/***/ })

},["./assets/js/UploadImg.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvVXBsb2FkSW1nLmpzIl0sIm5hbWVzIjpbImkiLCJkYXRhSW1hZ2UiLCJBcnJheSIsImRhdGFQb3NpdGlvbiIsIiQiLCJjaGFuZ2UiLCJjaGVja0ltYWdlIiwidmFsdWUiLCJleHQiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInRvTG93ZXJDYXNlIiwiZmlsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWxlcyIsImh0bWxfcHJvZ3Jlc3MiLCJhcHBlbmQiLCJhbGVydCIsImlucHV0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhZGRJbWFnZSIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJ1cGxvYWQiLCJkYXRhIiwicG9zaXRpb24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaWQiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsImFqYXgiLCJ0eXBlIiwidXJsIiwiY29udGVudFR5cGUiLCJkYXRhVHlwZSIsInByb2Nlc3NEYXRhIiwiY2FjaGUiLCJ4aHIiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRDb21wbGV0ZSIsImxvYWRlZCIsInRvdGFsIiwicGFyc2VJbnQiLCJzcGxpY2UiLCJ0ZXh0IiwiY3NzIiwic3VjY2VzcyIsInN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVJLElBQUlBLElBQUUsQ0FBTjtBQUNBLElBQUlDLFlBQVksSUFBSUMsS0FBSixFQUFoQjtBQUNBLElBQUlDLGVBQWUsSUFBSUQsS0FBSixFQUFuQjs7QUFFQUUsOENBQUNBLENBQUMsU0FBRixFQUFhQyxNQUFiLENBQW9CLFlBQVU7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ZixFQUFtQnlCLEdBQW5CLENBQXVCLE9BQXZCLEVBQWdDTixrQkFBa0IsR0FBbEQ7QUFDSDtBQUNKLGFBWEQsRUFXRyxLQVhIO0FBWUEsbUJBQU9SLEdBQVA7QUFDSCxTQXhCRTtBQXlCSGUsaUJBQVEsaUJBQVM5QixJQUFULEVBQWM7QUFDbEJnQixvQkFBUUMsR0FBUixDQUFZakIsSUFBWjtBQUNIOztBQTNCRSxLQUFQO0FBOEJILENBeENEOztBQTBDQXpCLDhDQUFDQSxDQUFDLGFBQUYsRUFBaUJ3RCxNQUFqQixDQUF3QixVQUFVQyxLQUFWLEVBQWtCO0FBQ3RDQSxVQUFNQyxjQUFOO0FBQ0EsUUFBSUMsSUFBRSxDQUFOO0FBQ0EsU0FBSUEsSUFBRSxDQUFOLEVBQVNBLElBQUU5RCxVQUFVK0QsTUFBckIsRUFBNEJELEdBQTVCLEVBQWdDOztBQUU1Qjs7Ozs7QUFLQW5DLGVBQU8zQixVQUFVOEQsQ0FBVixDQUFQLEVBQW9CNUQsYUFBYTRELENBQWIsQ0FBcEI7QUFDSDtBQUNKLENBWkQsRSIsImZpbGUiOiJVcGxvYWRJbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuICAgIHZhciBpPTA7XHJcbiAgICB2YXIgZGF0YUltYWdlID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgZGF0YVBvc2l0aW9uID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgJChcIiNpbWFnZXNcIikuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGNoZWNrSW1hZ2UgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHZhciBleHQgPSBjaGVja0ltYWdlLnN1YnN0cmluZyhjaGVja0ltYWdlLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChleHQgPT0gXCJnaWZcIiB8fCBleHQgPT0gXCJwbmdcIiB8fCBleHQgPT0gXCJqcGdcIiB8fCBleHQgPT0gXCJqcGVnXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlcycpLmZpbGVzWzBdO1xyXG4gICAgICAgICAgICBkYXRhSW1hZ2VbaV09ZmlsZTsgLy9hZGQgcHVzaCB0byBhcnJheSBkYXRhSW1hZ2VcclxuICAgICAgICAgICAgZGF0YVBvc2l0aW9uW2ldPWk7ICAvL2FkZCBwdXNoIHBvc2l0aW9uIHRvIGRhdGFQb3NpdGlvblxyXG4gICAgICAgICAgICAvL2NyZWF0ZWQgaHRtbCBwcm9ncmVzc1xyXG4gICAgICAgICAgICB2YXIgaHRtbF9wcm9ncmVzcyA9ICc8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4O1wiPjxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBpZD1cInByb2dyZXNzLScraSsnXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDogMCU7XCIgYXJpYS12YWx1ZW5vdz1cIjBcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj4wJTwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgICAgICQoXCIuc2hvdy1wcm9ncmVzc1wiKS5hcHBlbmQoaHRtbF9wcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgaW1hZ2UgZmlsZSAoanBnLCBqcGVnLCBwbmcpLlwiKVxyXG4gICAgfSk7XHJcbiAgICB2YXIgY2hhbmdlID0gZnVuY3Rpb24oaW5wdXQpe1xyXG4gICAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkSW1hZ2UgPSAnPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGltZyBzcmM9JytlLnRhcmdldC5yZXN1bHQrJz48L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRkIGltYWdlIHRvIGRpdj1cInNob3dJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAkKFwiI3Nob3dJbWFnZVwiKS5hcHBlbmQoYWRkSW1hZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgdXBsb2FkID0gZnVuY3Rpb24oZGF0YSxwb3NpdGlvbil7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgLy9hcHBlbmQgZGF0YSB0byBmb3JtZGF0YVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLGRhdGEpO1xyXG4gICAgICAgIHZhciBpZCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6J1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6J2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb3JtL3VwbG9hZCcsXHJcbiAgICAgICAgICAgIGRhdGE6Zm9ybURhdGEsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6J2pzb24nLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhY2hlOmZhbHNlLFxyXG4gICAgICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSBldnQubG9hZGVkIC8gZXZ0LnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50Q29tcGxldGUgPSBwYXJzZUludChwZXJjZW50Q29tcGxldGUgKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwZXJjZW50Q29tcGxldGU9PTEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSW1hZ2Uuc3BsaWNlKGlkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQb3NpdGlvbi5zcGxpY2UoaWQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZ3Jlc3MtXCIraWQpLnRleHQocGVyY2VudENvbXBsZXRlICsgJyUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9ncmVzcy1cIitpZCkuY3NzKCd3aWR0aCcsIHBlcmNlbnRDb21wbGV0ZSArICclJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHhocjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCJmb3JtI3VwbG9hZFwiKS5zdWJtaXQoZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGs9MDtcclxuICAgICAgICBmb3Ioaz0wOyBrPGRhdGFJbWFnZS5sZW5ndGg7aysrKXtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBGdW5jdGlvbiBVcGxvYWRcclxuICAgICAgICAgICAgICogcGFyYW1zIDE6IGRhdGEgaW1hZ2VcclxuICAgICAgICAgICAgICogcGFyYW1zIDI6IHBvc2l0aW9uWyBwcm9ncmVzc2Jhci0xIG9yIHByb2dyZXNzYmFyLTIsLi4uXVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdXBsb2FkKGRhdGFJbWFnZVtrXSxkYXRhUG9zaXRpb25ba10pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvVXBsb2FkSW1nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==