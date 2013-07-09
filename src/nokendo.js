(function($, data) {
	var colWidth = ko.observable(100);
	var itemsToShow = _.first(data, 30);
	var schema = getSchema();
	var keyValues = [];
	_.each(itemsToShow, function(item) {
		var keyVal = getKeyValues(item);
		_.extend(item, {
			colWidth: colWidth,
			cells: keyVal
		});
	});

	ko.applyBindings({
		itemsToShow: itemsToShow,
		itemTemplate: function() {
			return "defaultItemTemplate";
		}
	});

	function getSchema() {
		return [{
			dataField: "Fornavn",
			cellWidth: ko.observable(80)
		}, {
			dataField: "Etternavn",
			cellWidth: ko.observable(80)
		}, {
			dataField: "Kjonn",
			cellWidth: ko.observable(60)
		}, {
			dataField: "Alder",
			cellWidth: ko.observable(50)
		}, {
			dataField: "ArbStedNr",
			cellWidth: ko.observable(80)
		}, {
			dataField: "Arbeidsted",
			cellWidth: ko.observable(200)
		}, {
			dataField: "KravTilbut",
			cellWidth: ko.observable(40)
		}];
	}

	function getKeyValues(jsonObj) {
		var keys = [];
		for (var i in jsonObj) {
			var cell = {
				propKey: i,
				propValue: jsonObj[i]
			};
			var col = _.find(schema, isCorrectCol, i);
			if (col) {
				_.extend(cell, col);
				_.extend(cell, {cellTemplate: cellTemplate});
				keys.push(cell);
			}
		}
		return keys;
	}

	function isCorrectCol(col) {
		return col.dataField == this;
	}

	function cellTemplate(col){
		return col.template || "defaultCellTemplate";
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