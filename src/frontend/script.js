var pid = window.location.href.split('?')[0].split('posts/')[1];

$.get('/api/posts/' + pid)
	.done(function(postData) {
		renderPost(postData);
	}).fail(function(error) {

	});

$.get('/api/comments/' + pid)
	.done(function(postComments) {
		renderPostComments(postComments);
	}).fail(function(error) {

	});

function renderPost(data) {
	$(document).ready(function() {
		$(".post > #pid").text('Post #: ' + pid);

		$(".post > #title").text('Title: ' + data.title);

		$(".post > #username").text('Posted by ' + data.username);

		$(".post > #text").text(data.post);
	});
}

function renderPostComments(data) {
	$(document).ready(function() {
// added
		var fragmented = $(document.createDocumentFragment('<div>List of Comments:<br/><br/></div>'));

       for (var i = 0; i < data.length; i++) {
            fragmented.append('<div class="commentsListSectionHere" id="commentsList">' + data[i].comment + ' says ' + data[i].username + '</div>');
        }

        $('#commentsList').append(fragmented);
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
            var comment = $(this).parent().find("#caseid").val();
        
            var button = $(this);
            $.post("/api/comments/" + pid, {
            		pid: pid,
                    username: username,
                    comment: comment,
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