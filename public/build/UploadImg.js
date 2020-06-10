webpackJsonp([2],{

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
    if (ext === "gif" || ext === "png" || ext === "jpg" || ext === "jpeg") {
        change(this);
        var file = document.getElementById('images').files[0];
        dataImage[i] = file; //add push to array dataImage
        dataPosition[i] = i; //add push position to dataPosition
        //created html progress
        var html_progress = '<div class="progress" style="margin-bottom:5px;"><div class="progress-bar" id="progress-' + i + '" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div></div>';
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".show-progress").append(html_progress);
        i++;
    } else alert("Por favor, seleccione el archivo de imagen (jpg, jpeg, png).");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvVXBsb2FkSW1nLmpzIl0sIm5hbWVzIjpbImkiLCJkYXRhSW1hZ2UiLCJBcnJheSIsImRhdGFQb3NpdGlvbiIsIiQiLCJjaGFuZ2UiLCJjaGVja0ltYWdlIiwidmFsdWUiLCJleHQiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInRvTG93ZXJDYXNlIiwiZmlsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWxlcyIsImh0bWxfcHJvZ3Jlc3MiLCJhcHBlbmQiLCJhbGVydCIsImlucHV0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJhZGRJbWFnZSIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJ1cGxvYWQiLCJkYXRhIiwicG9zaXRpb24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaWQiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsImFqYXgiLCJ0eXBlIiwidXJsIiwiY29udGVudFR5cGUiLCJkYXRhVHlwZSIsInByb2Nlc3NEYXRhIiwiY2FjaGUiLCJ4aHIiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRDb21wbGV0ZSIsImxvYWRlZCIsInRvdGFsIiwicGFyc2VJbnQiLCJzcGxpY2UiLCJ0ZXh0IiwiY3NzIiwic3VjY2VzcyIsInN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVJLElBQUlBLElBQUUsQ0FBTjtBQUNBLElBQUlDLFlBQVksSUFBSUMsS0FBSixFQUFoQjtBQUNBLElBQUlDLGVBQWUsSUFBSUQsS0FBSixFQUFuQjs7QUFFQUUsOENBQUNBLENBQUMsU0FBRixFQUFhQyxNQUFiLENBQW9CLFlBQVU7QUFDMUIsUUFBSUMsYUFBYSxLQUFLQyxLQUF0QjtBQUNBLFFBQUlDLE1BQU1GLFdBQVdHLFNBQVgsQ0FBcUJILFdBQVdJLFdBQVgsQ0FBdUIsR0FBdkIsSUFBOEIsQ0FBbkQsRUFBc0RDLFdBQXRELEVBQVY7QUFDQSxRQUFJSCxRQUFRLEtBQVIsSUFBaUJBLFFBQVEsS0FBekIsSUFBa0NBLFFBQVEsS0FBMUMsSUFBbURBLFFBQVEsTUFBL0QsRUFDQTtBQUNJSCxlQUFPLElBQVA7QUFDQSxZQUFJTyxPQUFPQyxTQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQyxDQUF3QyxDQUF4QyxDQUFYO0FBQ0FkLGtCQUFVRCxDQUFWLElBQWFZLElBQWIsQ0FISixDQUd1QjtBQUNuQlQscUJBQWFILENBQWIsSUFBZ0JBLENBQWhCLENBSkosQ0FJd0I7QUFDcEI7QUFDQSxZQUFJZ0IsZ0JBQWdCLDZGQUEyRmhCLENBQTNGLEdBQTZGLGdIQUFqSDtBQUNBSSxzREFBQ0EsQ0FBQyxnQkFBRixFQUFvQmEsTUFBcEIsQ0FBMkJELGFBQTNCO0FBQ0FoQjtBQUNILEtBVkQsTUFZSWtCLE1BQU0sOERBQU47QUFDUCxDQWhCRDtBQWlCQSxJQUFJYixTQUFTLFNBQVRBLE1BQVMsQ0FBU2MsS0FBVCxFQUFlO0FBQ3hCLFFBQUlBLE1BQU1KLEtBQU4sSUFBZUksTUFBTUosS0FBTixDQUFZLENBQVosQ0FBbkIsRUFBbUM7QUFDL0IsWUFBSUssU0FBUyxJQUFJQyxVQUFKLEVBQWI7QUFDQUQsZUFBT0UsTUFBUCxHQUFnQixVQUFVQyxDQUFWLEVBQWE7QUFDekIsZ0JBQUlDLFdBQVcsb0NBQWtDRCxFQUFFRSxNQUFGLENBQVNDLE1BQTNDLEdBQWtELFNBQWpFOztBQUVBO0FBQ0F0QiwwREFBQ0EsQ0FBQyxZQUFGLEVBQWdCYSxNQUFoQixDQUF1Qk8sUUFBdkI7QUFDSCxTQUxEO0FBTUFKLGVBQU9PLGFBQVAsQ0FBcUJSLE1BQU1KLEtBQU4sQ0FBWSxDQUFaLENBQXJCO0FBQ0g7QUFDSixDQVhEO0FBWUEsSUFBSWEsU0FBUyxTQUFUQSxNQUFTLENBQVNDLElBQVQsRUFBY0MsUUFBZCxFQUF1QjtBQUNoQyxRQUFJQyxXQUFXLElBQUlDLFFBQUosRUFBZjtBQUNBO0FBQ0FELGFBQVNkLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBd0JZLElBQXhCO0FBQ0EsUUFBSUksS0FBS0gsUUFBVDtBQUNBMUIsa0RBQUNBLENBQUM4QixTQUFGLENBQVk7QUFDUkMsaUJBQVM7QUFDTCw0QkFBZ0IvQiw4Q0FBQ0EsQ0FBQyx5QkFBRixFQUE2QmdDLElBQTdCLENBQWtDLFNBQWxDO0FBRFg7QUFERCxLQUFaO0FBS0FoQyxrREFBQ0EsQ0FBQ2lDLElBQUYsQ0FBTztBQUNIQyxjQUFLLE1BREY7QUFFSEMsYUFBSSxtQ0FGRDtBQUdIVixjQUFLRSxRQUhGO0FBSUhTLHFCQUFhLEtBSlY7QUFLSEMsa0JBQVMsTUFMTjtBQU1IQyxxQkFBYSxLQU5WO0FBT0hDLGVBQU0sS0FQSDtBQVFIQyxhQUFLLGVBQVk7QUFDYkMsb0JBQVFDLEdBQVIsQ0FBWWIsRUFBWjtBQUNBLGdCQUFJVyxNQUFNLElBQUlHLE9BQU9DLGNBQVgsRUFBVjtBQUNBSixnQkFBSWhCLE1BQUosQ0FBV3FCLGdCQUFYLENBQTRCLFVBQTVCLEVBQXdDLFVBQVVDLEdBQVYsRUFBZTtBQUNuRCxvQkFBSUEsSUFBSUMsZ0JBQVIsRUFBMEI7QUFDdEIsd0JBQUlDLGtCQUFrQkYsSUFBSUcsTUFBSixHQUFhSCxJQUFJSSxLQUF2QztBQUNBRixzQ0FBa0JHLFNBQVNILGtCQUFrQixHQUEzQixDQUFsQjtBQUNBLHdCQUFHQSxtQkFBaUIsR0FBcEIsRUFBd0I7QUFDcEJuRCxrQ0FBVXVELE1BQVYsQ0FBaUJ2QixFQUFqQixFQUFxQixDQUFyQjtBQUNBOUIscUNBQWFxRCxNQUFiLENBQW9CdkIsRUFBcEIsRUFBd0IsQ0FBeEI7QUFDSDtBQUNEN0Isa0VBQUNBLENBQUMsZUFBYTZCLEVBQWYsRUFBbUJ3QixJQUFuQixDQUF3Qkwsa0JBQWtCLEdBQTFDO0FBQ0FoRCxrRUFBQ0EsQ0FBQyxlQUFhNkIsRUFBZixFQUFtQnlCLEdBQW5CLENBQXVCLE9BQXZCLEVBQWdDTixrQkFBa0IsR0FBbEQ7QUFDSDtBQUNKLGFBWEQsRUFXRyxLQVhIO0FBWUEsbUJBQU9SLEdBQVA7QUFDSCxTQXhCRTtBQXlCSGUsaUJBQVEsaUJBQVM5QixJQUFULEVBQWM7QUFDbEJnQixvQkFBUUMsR0FBUixDQUFZakIsSUFBWjtBQUNIOztBQTNCRSxLQUFQO0FBOEJILENBeENEOztBQTBDQXpCLDhDQUFDQSxDQUFDLGFBQUYsRUFBaUJ3RCxNQUFqQixDQUF3QixVQUFVQyxLQUFWLEVBQWtCO0FBQ3RDQSxVQUFNQyxjQUFOO0FBQ0EsUUFBSUMsSUFBRSxDQUFOO0FBQ0EsU0FBSUEsSUFBRSxDQUFOLEVBQVNBLElBQUU5RCxVQUFVK0QsTUFBckIsRUFBNEJELEdBQTVCLEVBQWdDOztBQUU1Qjs7Ozs7QUFLQW5DLGVBQU8zQixVQUFVOEQsQ0FBVixDQUFQLEVBQW9CNUQsYUFBYTRELENBQWIsQ0FBcEI7QUFDSDtBQUNKLENBWkQsRSIsImZpbGUiOiJVcGxvYWRJbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuICAgIHZhciBpPTA7XHJcbiAgICB2YXIgZGF0YUltYWdlID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgZGF0YVBvc2l0aW9uID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgJChcIiNpbWFnZXNcIikuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGNoZWNrSW1hZ2UgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHZhciBleHQgPSBjaGVja0ltYWdlLnN1YnN0cmluZyhjaGVja0ltYWdlLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChleHQgPT09IFwiZ2lmXCIgfHwgZXh0ID09PSBcInBuZ1wiIHx8IGV4dCA9PT0gXCJqcGdcIiB8fCBleHQgPT09IFwianBlZ1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZXMnKS5maWxlc1swXTtcclxuICAgICAgICAgICAgZGF0YUltYWdlW2ldPWZpbGU7IC8vYWRkIHB1c2ggdG8gYXJyYXkgZGF0YUltYWdlXHJcbiAgICAgICAgICAgIGRhdGFQb3NpdGlvbltpXT1pOyAgLy9hZGQgcHVzaCBwb3NpdGlvbiB0byBkYXRhUG9zaXRpb25cclxuICAgICAgICAgICAgLy9jcmVhdGVkIGh0bWwgcHJvZ3Jlc3NcclxuICAgICAgICAgICAgdmFyIGh0bWxfcHJvZ3Jlc3MgPSAnPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjVweDtcIj48ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgaWQ9XCJwcm9ncmVzcy0nK2krJ1wiIHJvbGU9XCJwcm9ncmVzc2JhclwiIHN0eWxlPVwid2lkdGg6IDAlO1wiIGFyaWEtdmFsdWVub3c9XCIwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCI+MCU8L2Rpdj48L2Rpdj4nO1xyXG4gICAgICAgICAgICAkKFwiLnNob3ctcHJvZ3Jlc3NcIikuYXBwZW5kKGh0bWxfcHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgYWxlcnQoXCJQb3IgZmF2b3IsIHNlbGVjY2lvbmUgZWwgYXJjaGl2byBkZSBpbWFnZW4gKGpwZywganBlZywgcG5nKS5cIilcclxuICAgIH0pO1xyXG4gICAgdmFyIGNoYW5nZSA9IGZ1bmN0aW9uKGlucHV0KXtcclxuICAgICAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZEltYWdlID0gJzxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxpbWcgc3JjPScrZS50YXJnZXQucmVzdWx0Kyc+PC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FkZCBpbWFnZSB0byBkaXY9XCJzaG93SW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgJChcIiNzaG93SW1hZ2VcIikuYXBwZW5kKGFkZEltYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHVwbG9hZCA9IGZ1bmN0aW9uKGRhdGEscG9zaXRpb24pe1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIC8vYXBwZW5kIGRhdGEgdG8gZm9ybWRhdGFcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJyxkYXRhKTtcclxuICAgICAgICB2YXIgaWQgPSBwb3NpdGlvbjtcclxuICAgICAgICAkLmFqYXhTZXR1cCh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOidQT1NUJyxcclxuICAgICAgICAgICAgdXJsOidodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9ybS91cGxvYWQnLFxyXG4gICAgICAgICAgICBkYXRhOmZvcm1EYXRhLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOidqc29uJyxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYWNoZTpmYWxzZSxcclxuICAgICAgICAgICAgeGhyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudENvbXBsZXRlID0gZXZ0LmxvYWRlZCAvIGV2dC50b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudENvbXBsZXRlID0gcGFyc2VJbnQocGVyY2VudENvbXBsZXRlICogMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGVyY2VudENvbXBsZXRlPT0xMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUltYWdlLnNwbGljZShpZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUG9zaXRpb24uc3BsaWNlKGlkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb2dyZXNzLVwiK2lkKS50ZXh0KHBlcmNlbnRDb21wbGV0ZSArICclJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZ3Jlc3MtXCIraWQpLmNzcygnd2lkdGgnLCBwZXJjZW50Q29tcGxldGUgKyAnJScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4aHI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiZm9ybSN1cGxvYWRcIikuc3VibWl0KGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBrPTA7XHJcbiAgICAgICAgZm9yKGs9MDsgazxkYXRhSW1hZ2UubGVuZ3RoO2srKyl7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRnVuY3Rpb24gVXBsb2FkXHJcbiAgICAgICAgICAgICAqIHBhcmFtcyAxOiBkYXRhIGltYWdlXHJcbiAgICAgICAgICAgICAqIHBhcmFtcyAyOiBwb3NpdGlvblsgcHJvZ3Jlc3NiYXItMSBvciBwcm9ncmVzc2Jhci0yLC4uLl1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHVwbG9hZChkYXRhSW1hZ2Vba10sZGF0YVBvc2l0aW9uW2tdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL1VwbG9hZEltZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=