// <div class="postTitle" id="postTitle"></div>

$.get('/api/posts/')
    .done(function(postTitles) {
        renderPosts(postTitles);
    }).fail(function(error) {

    });

function renderPosts(data) {
    $(document).ready(function() {
        var fragment = $(document.createDocumentFragment('<div>List of Posts:<br/><br/></div>'));

        for (var i = 0; i < data.length; i++) {
            fragment.append('<a href="' + '/posts/' + data[i].pid + '" class="postTitle" id="postTitle">' + data[i].title + '</a>');
        }

        $('#postList').append(fragment);
        
    });

}

function clearForm(form) {
        form.find("input, textarea").val("");
        form.find(".checkbox:not([data-default=checked]), .radiobutton:not([data-default=checked])").removeClass("checked");
        form.find(".checkbox[data-default=checked], .radiobutton[data-default=checked]").addClass("checked");
    }

    $(".clear").click(function() {
        clearForm($(this).parent());
    });

$(document).ready(function() {
$(".participant_outer .participant_add .submit").click(function() {
        if (!$(this).hasClass("disabled")) {
            $(this).addClass("disabled");
            var username = $(this).parent().find("#name").val();
            var title = $(this).parent().find("#caseid").val();
            var post = $(this).parent().find("#points").val();
        
            var button = $(this);
            $.post("/api/posts/", {
                    username: username,
                    title: title,
                    post: post,
            }).done(function(result) {
                alert("Success!");
                clearForm(button.parent());
            }).fail(function(error) {
                alert("Operation Failed. Reason: " + (error.message || "Unknown Error"));
            }).always(function() {
                button.removeClass("disabled");
            });
        }
    });
});