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

$("<p>This is:</p>").insertBefore("p");



