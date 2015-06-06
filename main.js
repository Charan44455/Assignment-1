(function($) {
	$.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
       return this;
    };
}(jQuery));

$('#popupbutton').click(function(){
	alert("Pop up message.");
});
$('#bgbutton').click(function(){
	$('#para1').toggleClass("bgChange");
});
$('#hidebutton').clickToggle(function(){
	$('#para2').hide('slow');
	$(this).text('Unhide');
},function(){
	$('#para2').show('slow');
	$(this).text('Hide');
});	