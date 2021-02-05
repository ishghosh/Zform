sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.form.Zform.controller.View1", {
		onInit: function () {
			/*	(for one time load in runtime) */
			/*	var oModel = new sap.ui.model.json.JSONModel(sap.ui.require.toUrl("com/form/Zform/model") + "/products.json");*/
			this.DATA = {
				"Column": [{
					"Name": "Ishan",
					"ID": "167273",
					"Address": "117 S.C.ROAD"
				}, {
					"Name": "RAVI",
					"ID": "127733894",
					"Address": "123 MGBV.ROAD"
				}, {
					"Name": "Ganesh",
					"ID": "123674",
					"Address": "113 M.G.ROAD"
				}]
			};

			var jsonmodel = new sap.ui.model.json.JSONModel(this.DATA.Column);
			var jsonmodel1 = new sap.ui.model.json.JSONModel(this.DATA);
			this.getView().setModel(jsonmodel1);
			this.getView().byId("idTable").setModel(jsonmodel);
		},
		onRowPress: function (EV) {

			var oCtx, oItem;
			oItem = EV.getSource();
			oCtx = oItem.getBindingContextPath().substr(1);
			var oView = this.getView();
			var pathh = "/Column/" + oCtx + "";
			//	var jsonmodel = new sap.ui.model.json.JSONModel(arr);
			this.getView().byId("idform").bindElement({
				path: pathh,
				events: {

					dataRequested: function (oR) {
						oView.setBusy(true);
					},
					dataReceived: function (oR) {
						oView.setBusy(false);

					}
				}
			});

		},
		handleEditPress: function () {

			this.byId("save").setVisible(true);
			this.byId("cancel").setVisible(true);
			this.byId("edit").setVisible(false);
			this.byId("name").setEditable(true);
			this.byId("name").setVisible(true);

			this.byId("nametext").setVisible(false);
			this.byId("id").setVisible(true);
			this.byId("id").setEditable(true);

			this.byId("idtext").setVisible(false);
			this.byId("address").setVisible(true);
			this.byId("address").setEditable(true);
			this.byId("addtext").setVisible(false);

		},
		handleCancelPress: function () {
			this.byId("save").setVisible(false);
			this.byId("cancel").setVisible(false);
			this.byId("edit").setVisible(true);
			this.byId("name").setVisible(false);
			this.byId("id").setVisible(false);
			this.byId("address").setVisible(false);
			this.byId("nametext").setVisible(true);
			this.byId("idtext").setVisible(true);
			this.byId("addtext").setVisible(true);
		},

		handleSavePress: function (flag) {

			this.byId("save").setVisible(false);
			this.byId("cancel").setVisible(false);
			this.byId("edit").setVisible(true);
			this.byId("name").setVisible(false);
			this.byId("nametext").setVisible(true);
			this.byId("nametext").setText(this.byId("name").getValue());
			this.byId("id").setVisible(false);
			this.byId("idtext").setVisible(true);
			this.byId("idtext").setText(this.byId("id").getValue());

			this.byId("address").setVisible(false);
			this.byId("addtext").setVisible(true);
			this.byId("addtext").setText(this.byId("address").getValue());

		}

	});
});