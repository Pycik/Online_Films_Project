$(function(){
	$(".row_kino .col-md-2.first").click(function(){
		alert("Go watch this film,open another page");
	});
});

$(function(){
	$(".para").addClass("example");
});

$(function(){
	$(".col-md-2.second").click(function(){
		$(this).hide("slow").show("slow");
	});
});


$(function(){
	$(".col-md-2.thirty").click(function(){
		$(this).fadeOut(2000).fadeIn(2000);
	});
});

$(function(){
	$(".col-md-2.fourty").click(function(){
		$(this).fadeTo("slow", 0.2);
	});
});

$(function(){
	$(".col-md-2.fiverty").click(function(){
		$(this).animate({"opacity":"0"});
		$(this).animate({"opacity":"0.2"});
		$(this).animate({"opacity":"0"});
		$(this).animate({"opacity":"1"});			
		});			
});



$(".row_kino").clone().appendTo(".row_kino2");
// $(".row_first_kino").clone().appendTo(".row_kino2");
// $(".row_first_kino").clone().appendTo(".row_kino3");
$(".row_kino2").clone().appendTo(".row_kino3");
$(".col-md-2.first").clone().appendTo(".row_kino4");
$(".col-md-2.second").clone().appendTo(".row_kino4");



var bottom_btn;
$(".bottom_btn").click(function(){
	if(bottom_btn) {
		bottom_btn.appendTo(".foot");
		bottom_btn = null;
	}
	else {
		bottom_btn = $(".para").detach();
	}
});

$(function(){
	$(".second").find("img").replaceWith("<img src='img/comedy2.jpg' alt=''>")
});
// $(function(){	
// 	$(".first").find("img").replaceWith("<img src='img/mehanik.jpg' alt=''>")	
// });

$(function(){
	$(".first").find("a").replaceWith("<a href='#'><img src='img/mehanik.jpg' alt=''></a>");
});
$(function(){
	$(".thirty").find("a").replaceWith("<a href='#'><img src='img/comedy3.jpg' alt=''></a>");
});
$(function(){
	$(".fourty").find("a").replaceWith("<a href='#'><img src='img/comedy1.jpg' alt=''></a>");
});
$(function(){
	$(".fiverty").find("a").replaceWith("<a href='#'><img src='img/comedy4.jpg' alt=''></a>");
});
$(function(){
	$(".sixtrty").find("a").replaceWith("<a href='#'><img src='img/comedy5.jpg' alt=''></a>");
});

$("<p>This is: Click image</p>").insertAfter("#main0");

$(function(){
	$(".row_kino3").find(".first a").replaceWith("<a href='#'><img src='img/odaryonnaya.jpg' alt=''></a>");
});

var hide_btn;
$(".bottom_hide").click(function(){
	if(hide_btn) {
		hide_btn.show();
		hide_btn = null;
	}
	else {
		hide_btn = $(".para2para").hide();
	}
});


var hide_row;
$(".row_hide").click(function(){
	if(hide_row) {
		hide_row.show();
		hide_row = null;
	}
	else {
		hide_row = $(".row_kino4").hide();
	}
});