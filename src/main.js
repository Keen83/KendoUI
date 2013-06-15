$(document).ready(function() {
	$("#grid").kendoGrid({
		selectable: "multiple row",
		resizable: true,
		dataSource: {
			data: arbeidsforholdData,
			schema: {
				model: {
					fields: {
						Id: {
							type: "number"
						},
						Fornavn: {
							type: "string"
						},
						Etternavn: {
							type: "string"
						},
						Kjonn: {
							type: "string"
						},
						Alder: {
							type: "number"
						},
						ArbStedNr: {
							type: "string"
						},
						Arbeidsted: {
							type: "string"
						},
						ArbfNr: {
							type: "number"
						},
						Ansattforhold: {
							type: "string"
						},
						Stillingskode: {
							type: "string"
						},
						Stillingsbeskrivelse: {
							type: "string"
						},
						ArsLonn: {
							type: "number"
						},
						TilleggsSum: {
							type: "number"
						},
						LonnProsent: {
							type: "number"
						},
						KravTilbut: {
							type: "boolean"
						}
					}
				}
			},
			pageSize: 20
		},
		height: 430,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [{
				field: "Fornavn",
				width: "80px"
			}, {
				field: "Etternavn",
				width: "90px"
			}, {
				field: "Kjonn",
				width: "70px"
			}, {
				field: "Alder",
				width: "70px"
			}, {
				field: "ArbStedNr",
				width: "100px"
			}, {
				field: "Arbeidsted",
				width: "100px"
			}, {
				field: "ArbfNr",
				width: "100px"
			}, {
				field: "Ansattforhold",
				width: "100px"
			}, {
				field: "Stillingskode",
				width: "100px"
			}, {
				field: "Stillingsbeskrivelse",
				width: "100px"
			}, {
				field: "ArsLonn",
				width: "100px"
			}, {
				field: "TilleggsSum",
				width: "100px"
			}, {
				field: "LonnProsent",
				width: "100px"
			}, {
				field: "KravTilbut",
				width: "100px"
			}

			/*            { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "130px" },
			{ field: "UnitsInStock", title: "Units In Stock", width: "130px" },
			{ field: "Discontinued", width: "130px" }*/
		],
		detailTemplate: "<div class='div-bordered'><div>Stillingskode: #: Stillingskode #</div><div>Stillingsbeskrivelse: #: Stillingsbeskrivelse #</div></div>"
	});


});