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
console.log("hola");
__WEBPACK_IMPORTED_MODULE_0_jquery___default()("#manga_Portada").change(function () {
    console.log("adios");
    var checkImage = this.value;
    var ext = checkImage.substring(checkImage.lastIndexOf('.') + 1).toLowerCase();
    if (ext === "gif" || ext === "png" || ext === "jpg" || ext === "jpeg") {
        change(this);
        var file = document.getElementById('manga_Portada').files[0];
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
        url: 'http://mangaka.studio:8000/servicios/media_objects/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvVXBsb2FkSW1nLmpzIl0sIm5hbWVzIjpbImkiLCJkYXRhSW1hZ2UiLCJBcnJheSIsImRhdGFQb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCIkIiwiY2hhbmdlIiwiY2hlY2tJbWFnZSIsInZhbHVlIiwiZXh0Iiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJ0b0xvd2VyQ2FzZSIsImZpbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmlsZXMiLCJodG1sX3Byb2dyZXNzIiwiYXBwZW5kIiwiYWxlcnQiLCJpbnB1dCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwiYWRkSW1hZ2UiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwidXBsb2FkIiwiZGF0YSIsInBvc2l0aW9uIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImlkIiwiYWpheFNldHVwIiwiaGVhZGVycyIsImF0dHIiLCJhamF4IiwidHlwZSIsInVybCIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJwcm9jZXNzRGF0YSIsImNhY2hlIiwieGhyIiwid2luZG93IiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRDb21wbGV0ZSIsImxvYWRlZCIsInRvdGFsIiwicGFyc2VJbnQiLCJzcGxpY2UiLCJ0ZXh0IiwiY3NzIiwic3VjY2VzcyIsInN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJrIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVJLElBQUlBLElBQUUsQ0FBTjtBQUNBLElBQUlDLFlBQVksSUFBSUMsS0FBSixFQUFoQjtBQUNBLElBQUlDLGVBQWUsSUFBSUQsS0FBSixFQUFuQjtBQUNBRSxRQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBQyw4Q0FBQ0EsQ0FBQyxnQkFBRixFQUFvQkMsTUFBcEIsQ0FBMkIsWUFBVTtBQUNqQ0gsWUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQSxRQUFJRyxhQUFhLEtBQUtDLEtBQXRCO0FBQ0EsUUFBSUMsTUFBTUYsV0FBV0csU0FBWCxDQUFxQkgsV0FBV0ksV0FBWCxDQUF1QixHQUF2QixJQUE4QixDQUFuRCxFQUFzREMsV0FBdEQsRUFBVjtBQUNBLFFBQUlILFFBQVEsS0FBUixJQUFpQkEsUUFBUSxLQUF6QixJQUFrQ0EsUUFBUSxLQUExQyxJQUFtREEsUUFBUSxNQUEvRCxFQUNBO0FBQ0lILGVBQU8sSUFBUDtBQUNBLFlBQUlPLE9BQU9DLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNDLEtBQXpDLENBQStDLENBQS9DLENBQVg7QUFDQWhCLGtCQUFVRCxDQUFWLElBQWFjLElBQWIsQ0FISixDQUd1QjtBQUNuQlgscUJBQWFILENBQWIsSUFBZ0JBLENBQWhCLENBSkosQ0FJd0I7QUFDcEI7QUFDQSxZQUFJa0IsZ0JBQWdCLDZGQUEyRmxCLENBQTNGLEdBQTZGLGdIQUFqSDtBQUNBTSxzREFBQ0EsQ0FBQyxnQkFBRixFQUFvQmEsTUFBcEIsQ0FBMkJELGFBQTNCO0FBQ0FsQjtBQUNILEtBVkQsTUFZSW9CLE1BQU0sOERBQU47QUFDUCxDQWpCRDtBQWtCQSxJQUFJYixTQUFTLFNBQVRBLE1BQVMsQ0FBU2MsS0FBVCxFQUFlO0FBQ3hCLFFBQUlBLE1BQU1KLEtBQU4sSUFBZUksTUFBTUosS0FBTixDQUFZLENBQVosQ0FBbkIsRUFBbUM7QUFDL0IsWUFBSUssU0FBUyxJQUFJQyxVQUFKLEVBQWI7QUFDQUQsZUFBT0UsTUFBUCxHQUFnQixVQUFVQyxDQUFWLEVBQWE7QUFDekIsZ0JBQUlDLFdBQVcsb0NBQWtDRCxFQUFFRSxNQUFGLENBQVNDLE1BQTNDLEdBQWtELFNBQWpFOztBQUVBO0FBQ0F0QiwwREFBQ0EsQ0FBQyxZQUFGLEVBQWdCYSxNQUFoQixDQUF1Qk8sUUFBdkI7QUFDSCxTQUxEO0FBTUFKLGVBQU9PLGFBQVAsQ0FBcUJSLE1BQU1KLEtBQU4sQ0FBWSxDQUFaLENBQXJCO0FBQ0g7QUFDSixDQVhEO0FBWUEsSUFBSWEsU0FBUyxTQUFUQSxNQUFTLENBQVNDLElBQVQsRUFBY0MsUUFBZCxFQUF1QjtBQUNoQyxRQUFJQyxXQUFXLElBQUlDLFFBQUosRUFBZjtBQUNBO0FBQ0FELGFBQVNkLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBd0JZLElBQXhCO0FBQ0EsUUFBSUksS0FBS0gsUUFBVDtBQUNBMUIsa0RBQUNBLENBQUM4QixTQUFGLENBQVk7QUFDUkMsaUJBQVM7QUFDTCw0QkFBZ0IvQiw4Q0FBQ0EsQ0FBQyx5QkFBRixFQUE2QmdDLElBQTdCLENBQWtDLFNBQWxDO0FBRFg7QUFERCxLQUFaO0FBS0FoQyxrREFBQ0EsQ0FBQ2lDLElBQUYsQ0FBTztBQUNIQyxjQUFLLE1BREY7QUFFSEMsYUFBSSxxREFGRDtBQUdIVixjQUFLRSxRQUhGO0FBSUhTLHFCQUFhLEtBSlY7QUFLSEMsa0JBQVMsTUFMTjtBQU1IQyxxQkFBYSxLQU5WO0FBT0hDLGVBQU0sS0FQSDtBQVFIQyxhQUFLLGVBQVk7QUFDYjFDLG9CQUFRQyxHQUFSLENBQVk4QixFQUFaO0FBQ0EsZ0JBQUlXLE1BQU0sSUFBSUMsT0FBT0MsY0FBWCxFQUFWO0FBQ0FGLGdCQUFJaEIsTUFBSixDQUFXbUIsZ0JBQVgsQ0FBNEIsVUFBNUIsRUFBd0MsVUFBVUMsR0FBVixFQUFlO0FBQ25ELG9CQUFJQSxJQUFJQyxnQkFBUixFQUEwQjtBQUN0Qix3QkFBSUMsa0JBQWtCRixJQUFJRyxNQUFKLEdBQWFILElBQUlJLEtBQXZDO0FBQ0FGLHNDQUFrQkcsU0FBU0gsa0JBQWtCLEdBQTNCLENBQWxCO0FBQ0Esd0JBQUdBLG1CQUFpQixHQUFwQixFQUF3QjtBQUNwQm5ELGtDQUFVdUQsTUFBVixDQUFpQnJCLEVBQWpCLEVBQXFCLENBQXJCO0FBQ0FoQyxxQ0FBYXFELE1BQWIsQ0FBb0JyQixFQUFwQixFQUF3QixDQUF4QjtBQUNIO0FBQ0Q3QixrRUFBQ0EsQ0FBQyxlQUFhNkIsRUFBZixFQUFtQnNCLElBQW5CLENBQXdCTCxrQkFBa0IsR0FBMUM7QUFDQTlDLGtFQUFDQSxDQUFDLGVBQWE2QixFQUFmLEVBQW1CdUIsR0FBbkIsQ0FBdUIsT0FBdkIsRUFBZ0NOLGtCQUFrQixHQUFsRDtBQUNIO0FBQ0osYUFYRCxFQVdHLEtBWEg7QUFZQSxtQkFBT04sR0FBUDtBQUNILFNBeEJFO0FBeUJIYSxpQkFBUSxpQkFBUzVCLElBQVQsRUFBYztBQUNsQjNCLG9CQUFRQyxHQUFSLENBQVkwQixJQUFaO0FBQ0g7O0FBM0JFLEtBQVA7QUE4QkgsQ0F4Q0Q7O0FBMENBekIsOENBQUNBLENBQUMsYUFBRixFQUFpQnNELE1BQWpCLENBQXdCLFVBQVVDLEtBQVYsRUFBa0I7QUFDdENBLFVBQU1DLGNBQU47QUFDQSxRQUFJQyxJQUFFLENBQU47QUFDQSxTQUFJQSxJQUFFLENBQU4sRUFBU0EsSUFBRTlELFVBQVUrRCxNQUFyQixFQUE0QkQsR0FBNUIsRUFBZ0M7O0FBRTVCOzs7OztBQUtBakMsZUFBTzdCLFVBQVU4RCxDQUFWLENBQVAsRUFBb0I1RCxhQUFhNEQsQ0FBYixDQUFwQjtBQUNIO0FBQ0osQ0FaRCxFIiwiZmlsZSI6IlVwbG9hZEltZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4gICAgdmFyIGk9MDtcclxuICAgIHZhciBkYXRhSW1hZ2UgPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBkYXRhUG9zaXRpb24gPSBuZXcgQXJyYXkoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiaG9sYVwiKTtcclxuICAgICQoXCIjbWFuZ2FfUG9ydGFkYVwiKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkaW9zXCIpO1xyXG4gICAgICAgIHZhciBjaGVja0ltYWdlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB2YXIgZXh0ID0gY2hlY2tJbWFnZS5zdWJzdHJpbmcoY2hlY2tJbWFnZS5sYXN0SW5kZXhPZignLicpICsgMSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoZXh0ID09PSBcImdpZlwiIHx8IGV4dCA9PT0gXCJwbmdcIiB8fCBleHQgPT09IFwianBnXCIgfHwgZXh0ID09PSBcImpwZWdcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuZ2FfUG9ydGFkYScpLmZpbGVzWzBdO1xyXG4gICAgICAgICAgICBkYXRhSW1hZ2VbaV09ZmlsZTsgLy9hZGQgcHVzaCB0byBhcnJheSBkYXRhSW1hZ2VcclxuICAgICAgICAgICAgZGF0YVBvc2l0aW9uW2ldPWk7ICAvL2FkZCBwdXNoIHBvc2l0aW9uIHRvIGRhdGFQb3NpdGlvblxyXG4gICAgICAgICAgICAvL2NyZWF0ZWQgaHRtbCBwcm9ncmVzc1xyXG4gICAgICAgICAgICB2YXIgaHRtbF9wcm9ncmVzcyA9ICc8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206NXB4O1wiPjxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBpZD1cInByb2dyZXNzLScraSsnXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDogMCU7XCIgYXJpYS12YWx1ZW5vdz1cIjBcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj4wJTwvZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgICAgICQoXCIuc2hvdy1wcm9ncmVzc1wiKS5hcHBlbmQoaHRtbF9wcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBhbGVydChcIlBvciBmYXZvciwgc2VsZWNjaW9uZSBlbCBhcmNoaXZvIGRlIGltYWdlbiAoanBnLCBqcGVnLCBwbmcpLlwiKVxyXG4gICAgfSk7XHJcbiAgICB2YXIgY2hhbmdlID0gZnVuY3Rpb24oaW5wdXQpe1xyXG4gICAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkSW1hZ2UgPSAnPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGltZyBzcmM9JytlLnRhcmdldC5yZXN1bHQrJz48L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRkIGltYWdlIHRvIGRpdj1cInNob3dJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAkKFwiI3Nob3dJbWFnZVwiKS5hcHBlbmQoYWRkSW1hZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgdXBsb2FkID0gZnVuY3Rpb24oZGF0YSxwb3NpdGlvbil7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgLy9hcHBlbmQgZGF0YSB0byBmb3JtZGF0YVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLGRhdGEpO1xyXG4gICAgICAgIHZhciBpZCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICQuYWpheFNldHVwKHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6J1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6J2h0dHA6Ly9tYW5nYWthLnN0dWRpbzo4MDAwL3NlcnZpY2lvcy9tZWRpYV9vYmplY3RzLycsXHJcbiAgICAgICAgICAgIGRhdGE6Zm9ybURhdGEsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6J2pzb24nLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhY2hlOmZhbHNlLFxyXG4gICAgICAgICAgICB4aHI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50Q29tcGxldGUgPSBldnQubG9hZGVkIC8gZXZ0LnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50Q29tcGxldGUgPSBwYXJzZUludChwZXJjZW50Q29tcGxldGUgKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwZXJjZW50Q29tcGxldGU9PTEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSW1hZ2Uuc3BsaWNlKGlkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQb3NpdGlvbi5zcGxpY2UoaWQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZ3Jlc3MtXCIraWQpLnRleHQocGVyY2VudENvbXBsZXRlICsgJyUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9ncmVzcy1cIitpZCkuY3NzKCd3aWR0aCcsIHBlcmNlbnRDb21wbGV0ZSArICclJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHhocjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCJmb3JtI3VwbG9hZFwiKS5zdWJtaXQoZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGs9MDtcclxuICAgICAgICBmb3Ioaz0wOyBrPGRhdGFJbWFnZS5sZW5ndGg7aysrKXtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBGdW5jdGlvbiBVcGxvYWRcclxuICAgICAgICAgICAgICogcGFyYW1zIDE6IGRhdGEgaW1hZ2VcclxuICAgICAgICAgICAgICogcGFyYW1zIDI6IHBvc2l0aW9uWyBwcm9ncmVzc2Jhci0xIG9yIHByb2dyZXNzYmFyLTIsLi4uXVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdXBsb2FkKGRhdGFJbWFnZVtrXSxkYXRhUG9zaXRpb25ba10pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvVXBsb2FkSW1nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==