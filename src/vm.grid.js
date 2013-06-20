var gridViewModel = function(data){
	var itemTemplate = ko.observable();
	var itemsToShow = ko.observableCollection();

	function setSchema(){

	}

	return {
		setSchema: setSchema,
		itemTemplate: itemTemplate
	};
};