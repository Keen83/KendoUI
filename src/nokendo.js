(function($, data) {
	var colWidth = ko.observable(100);
	_.each(data, function(item){
		_.extend(item, {colWidth: colWidth});
	});

	ko.applyBindings({
		itemsToShow: data,
		itemTemplate: function(){
			return "defaultItemTemplate";
		}
     });
})($, arbeidsforholdData);

$(function() {
	$("#search_result").selectable();
	$("#arf_sort").buttonset();
	/*$(".l-cell").resizable({
		minHeight: 20,
		maxHeight: 20,
		minWidth: 20
	})*/
});