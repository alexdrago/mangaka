import $ from 'jquery';

    var i=0;
    var dataImage = new Array();
    var dataPosition = new Array();

    $("#images").change(function(){
        var checkImage = this.value;
        var ext = checkImage.substring(checkImage.lastIndexOf('.') + 1).toLowerCase();
        if (ext == "gif" || ext == "png" || ext == "jpg" || ext == "jpeg")
        {
            change(this);
            var file = document.getElementById('images').files[0];
            dataImage[i]=file; //add push to array dataImage
            dataPosition[i]=i;  //add push position to dataPosition
            //created html progress
            var html_progress = '<div class="progress" style="margin-bottom:5px;"><div class="progress-bar" id="progress-'+i+'" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div></div>';
            $(".show-progress").append(html_progress);
            i++;
        }
        else
            alert("Please select image file (jpg, jpeg, png).")
    });
    var change = function(input){
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var addImage = '<div class="col-md-3"><img src='+e.target.result+'></div>';

                //add image to div="showImage"
                $("#showImage").append(addImage);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    var upload = function(data,position){
        var formData = new FormData();
        //append data to formdata
        formData.append('image',data);
        var id = position;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type:'POST',
            url:'http://localhost:8000/form/upload',
            data:formData,
            contentType: false,
            dataType:'json',
            processData: false,
            cache:false,
            xhr: function () {
                console.log(id);
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100);
                        if(percentComplete==100){
                            dataImage.splice(id, 1);
                            dataPosition.splice(id, 1);
                        }
                        $("#progress-"+id).text(percentComplete + '%');
                        $("#progress-"+id).css('width', percentComplete + '%');
                    }
                }, false);
                return xhr;
            },
            success:function(data){
                console.log(data);
            }

        });
    }

    $("form#upload").submit(function( event ) {
        event.preventDefault();
        var k=0;
        for(k=0; k<dataImage.length;k++){

            /**
             * Function Upload
             * params 1: data image
             * params 2: position[ progressbar-1 or progressbar-2,...]
             */
            upload(dataImage[k],dataPosition[k]);
        }
    });
