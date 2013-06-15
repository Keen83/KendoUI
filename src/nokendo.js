(function($, data) {
	ko.applyBindings({arfData: data});
})($, arbeidsforholdData);

$(function() {
	$("#search_result").selectable();
	$("#arf_sort").buttonset();
});