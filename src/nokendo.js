(function($, data) {
	var colWidth = ko.observable(100);
	var itemsToShow = _.first(data, 30);
	var keyValues = [];
	_.each(itemsToShow, function(item) {
		_.extend(item, {
			colWidth: colWidth
		});
		keyValues.push(getKeyValues(item));
	});
	ko.applyBindings({
		itemsToShow: itemsToShow,
		itemTemplate: function() {
			return "defaultItemTemplate";
		}
	});

	function getKeyValues(jsonObj) {
		var keys = [];
		for (var i in jsonObj) {
			keys.push({
				propKey: i,
				propValue: jsonObj[i]
			});
		}
		return keys;
	}
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