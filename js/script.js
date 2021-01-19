$(function() {

    console.log('we in script.js');
    
    //FancyBox.initFancybox();

    $('#popupbutton').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,

    });



    $("#form-feedback").submit(function(event) {

        if ($('#name').val() == "")
        {
            $('#bthrow_error_name').fadeIn(1000).html('Представьтесь, пожалуйста.');
        }
        else if ($('#phone').val() == "")
        {
            $('#bthrow_error_name').empty();
            $('#bthrow_error_phone').fadeIn(1000).html('Как с Вами связаться?');
        }
        else
        {
            var postForm = {
                'Имя'  : $('#name').val(),
                'Телефон'  : $('#phone').val(),
                'source'  : $('#source').val(),
                'medium'  : $('#medium').val(),
                'campaign'  : $('#campaign').val(),
                'content'  : $('#content').val(),
                'term'  : $('#term').val()
            };

            $.ajax({
                type        : 'POST',
                url         : 'feedback.php',
                data        : postForm,
                dataType    : 'json',
                success     : function(data)
                {
                    if (!data.success)
                    {
                        if (data.errors.name)
                        {
                            $('.throw_error').fadeIn(1000).html(data.errors.name);
                        }
                    }
                    else
                    {
                        $('#form-feedback').fadeIn(1000).html('<p>' + data.posted + '</p>');
                    }
                }
            });
        }

        event.preventDefault();
        return false; 
    });





    $('#popupbutton2').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 310

    });



    $("#form-feedback2").submit(function(event) {

        if ($('#name2').val() == "")
        {
            $('#bthrow_error_name2').fadeIn(1000).html('Представьтесь, пожалуйста.');
        }
        else if ($('#phone2').val() == "")
        {
            $('#bthrow_error_name2').empty();
            $('#bthrow_error_phone2').fadeIn(1000).html('Как с Вами связаться?');
        }
        else
        {
            var postForm = {
                'Площадь'  : $('#area').val(),
                'Фактура'  : $('#texture').val(),
                'Углы'  : $('#corners').val(),
                'Трубы'  : $('#tube').val(),
                'Люстры'  : $('#chandelier-hook').val(),
                'Светильники'  : $('#lamp').val(),
                'Телефон'  : $('#phone2').val()
            };

            $.ajax({
                type        : 'POST',
                url         : 'feedback2.php',
                data        : postForm,
                dataType    : 'json',
                success     : function(data)
                {
                    if (!data.success)
                    {
                        if (data.errors.name)
                        {
                            $('.throw_error2').fadeIn(1000).html(data.errors.name);
                        }
                    }
                    else
                    {
                        $('#form-feedback2').fadeIn(1000).html('<p>' + data.posted + '</p>');
                        yaCounter51359320.reachGoal ('calculation');
                    }
                }
            });
        }

        event.preventDefault();

    });





    $('#popupbutton3').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 310

    });


    $("#form-feedback3").submit(function(event) {

        if ($('#name3').val() == "")
        {
            $('#bthrow_error_name3').fadeIn(1000).html('Представьтесь, пожалуйста.');
        }
        else if ($('#phone3').val() == "")
        {
            $('#bthrow_error_name3').empty();
            $('#bthrow_error_phone3').fadeIn(1000).html('Как с Вами связаться?');
        }
        else
        {
            var postForm = {
                'Имя'  : $('#name3').val(),
                'Телефон'  : $('#phone3').val(),
                'source'  : $('#source').val(),
                'medium'  : $('#medium').val(),
                'campaign'  : $('#campaign').val(),
                'content'  : $('#content').val(),
                'term'  : $('#term').val()
            };

            $.ajax({
                type        : 'POST',
                url         : 'feedback3.php',
                data        : postForm,
                dataType    : 'json',
                success     : function(data)
                {
                    if (!data.success)
                    {
                        if (data.errors.name)
                        {
                            $('.throw_error3').fadeIn(1000).html(data.errors.name);
                        }
                    }
                    else
                    {
                        $('#form-feedback3').fadeIn(1000).html('<p>' + data.posted + '</p>');
                    }
                }
            });
        }

        event.preventDefault();

    });





    $('#popupbutton4').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 210

    });


    $("#form-feedback4").submit(function(event) {

        if ($('#name4').val() == "")
        {
            $('#bthrow_error_name4').fadeIn(1000).html('Представьтесь, пожалуйста.');
        }
        else if ($('#phone4').val() == "")
        {
            $('#bthrow_error_name4').empty();
            $('#bthrow_error_phone4').fadeIn(1000).html('Как с Вами связаться?');
        }
        else
        {
            var postForm = {
                'Имя'  : $('#name4').val(),
                'Телефон'  : $('#phone4').val(),
                'source'  : $('#source').val(),
                'medium'  : $('#medium').val(),
                'campaign'  : $('#campaign').val(),
                'content'  : $('#content').val(),
                'term'  : $('#term').val()
            };

            $.ajax({
                type        : 'POST',
                url         : 'feedback4.php',
                data        : postForm,
                dataType    : 'json',
                success     : function(data)
                {
                    if (!data.success)
                    {
                        if (data.errors.name)
                        {
                            $('.throw_error4').fadeIn(1000).html(data.errors.name);
                        }
                    }
                    else
                    {
                        $('#form-feedback4').fadeIn(1000).html('<p>' + data.posted + '</p>');
                    }
                }
            });
        }

        event.preventDefault();

    });



    $('#popupbutton5').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 310

    });


    $("#form-feedback5").submit(function(event) {

        if ($('#name5').val() == "")
        {
            $('#bthrow_error_name5').fadeIn(1000).html('Представьтесь, пожалуйста.');
        }
        else if ($('#phone5').val() == "")
        {
            $('#bthrow_error_name5').empty();
            $('#bthrow_error_phone5').fadeIn(1000).html('Как с Вами связаться?');
        }
        else
        {
            var postForm = {
                'name5'  : $('#name5').val(),
                'Телефон'  : $('#phone5').val(),
                'source'  : $('#source').val(),
                'medium'  : $('#medium').val(),
                'campaign'  : $('#campaign').val(),
                'content'  : $('#content').val(),
                'term'  : $('#term').val()
            };

            $.ajax({
                type        : 'POST',
                url         : 'feedback5.php',
                data        : postForm,
                dataType    : 'json',
                success     : function(data)
                {
                    if (!data.success)
                    {
                        if (data.errors.name)
                        {
                            $('.throw_error5').fadeIn(1000).html(data.errors.name);
                        }
                    }
                    else
                    {
                        $('#form-feedback5').fadeIn(1000).html('<p>' + data.posted + '</p>');
                    }
                }
            });
        }

        event.preventDefault();

    });



    $('#popupbutton6').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 210

    });

    $('#popupsuccess').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 300,
        'minHeight': 140

    });

    $("#form-feedback6").submit(function(event) {

        if ($('#name6').val() == "")
        {
            $('#bthrow_error_name6').fadeIn(1000).html('Представьтесь, пожалуйста.');
        }
        else if ($('#phone6').val() == "")
        {
            $('#bthrow_error_name6').empty();
            $('#bthrow_error_phone6').fadeIn(1000).html('Как с Вами связаться?');
        }
        else
        {
            var postForm = {
                'Имя'  : $('#name6').val(),
                'Телефон'  : $('#phone6').val(),
                'source'  : $('#source').val(),
                'medium'  : $('#medium').val(),
                'campaign'  : $('#campaign').val(),
                'content'  : $('#content').val(),
                'term'  : $('#term').val()
            };

            $.ajax({
                type        : 'POST',
                url         : 'feedback6.php',
                data        : postForm,
                dataType    : 'json',
                success     : function(data)
                {
                    if (!data.success)
                    {
                        if (data.errors.name)
                        {
                            $('.throw_error6').fadeIn(1000).html(data.errors.name);
                        }
                    }
                    else
                    {
                        $('#form-feedback6').fadeIn(1000).html('<p>' + data.posted + '</p>');
                    }
                }
            });
        }

        event.preventDefault();

    });


    $('#popupbutton7').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 210

    });

    $("#form-feedback7").submit(function(event) {

        if ($('#name7').val() == "")
        {
            $('#bthrow_error_name7').fadeIn(1000).html('Представьтесь, пожалуйста.');
        }
        else if ($('#phone7').val() == "")
        {
            $('#bthrow_error_name7').empty();
            $('#bthrow_error_phone7').fadeIn(1000).html('Как с Вами связаться?');
        }
        else
        {
            var postForm = {
                'Имя'  : $('#name7').val(),
                'Телефон'  : $('#phone7').val(),
                'Комментарий'  : $('#comment').val(),
                'source'  : $('#source').val(),
                'medium'  : $('#medium').val(),
                'campaign'  : $('#campaign').val(),
                'content'  : $('#content').val(),
                'term'  : $('#term').val()
            };

            $.ajax({
                type        : 'POST',
                url         : 'feedback7.php',
                data        : postForm,
                dataType    : 'json',
                success     : function(data)
                {
                    if (!data.success)
                    {
                        if (data.errors.name)
                        {
                            $('.throw_error7').fadeIn(1000).html(data.errors.name);
                        }
                    }
                    else
                    {
                        $('#form-feedback7').fadeIn(1000).html('<p>' + data.posted + '</p>');
                    }
                }
            });
        }

        event.preventDefault();

    });

    /** другие всплывающие формы **/



    $('#politika2').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 600,
        'minHeight': 410

    });




    $('#garantiya2').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 600,

    });




    $('#moreinfo2').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 800,
        'minHeight': 510

    });


    $('[data-toggle="popover"]').popover()

    $('#form-feedback,#form-feedback2,#form-feedback4,#form-feedback5,#form-feedback7')
        .on('submit', function(e){

        $(this).trigger('reset'); 

        $('#popupsuccess').click();

        e.preventDefault();
        return false; 
    });

    var curr_year = (new Date()).getFullYear();
    $('.s_year').html(curr_year);

});