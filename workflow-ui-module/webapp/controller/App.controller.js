sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("bparoleassignmentui.workflowuimodule.controller.App", {
      onInit() {

// will need to remove credentials and store in .env file. Need to figure out correct syntax to get them in controller
        const odataUrl = "https://s4hana2022.mindsetconsulting.com:44301/sap/opu/odata/sap/ZB_USER_ASSIGNMENT/profilesVH";
        const username = "BPA_TECH_USE";
        const password = "Mindset1";
        var oModel = new JSONModel();
        this.getView().setModel(oModel); // Set the model with a name

        var that = this;
        $.ajax({
          url: odataUrl,
          type: 'GET',
          dataType: 'json',
          beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
          },
          success: function (data) {
            oModel.setData(data);
            var oComboBox = that.getView().byId("profileDropDown"); // Get your comboBox
            oComboBox.bindItems({
              path: "/d/results",
              template: new sap.ui.core.ListItem({
                key: "{ProfileName}",
                text: "{ProfileName}"
              })

            });
          },

          error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching OData:", textStatus, errorThrown);
          }
        });


      }
    });
  }
);
