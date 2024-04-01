sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("bparoleassignmentui.workflowuimodule.controller.App", {
        onInit() {
          var sServiceUrl = "https://s4hana2022.mindsetconsulting.com:44301/sap/opu/odata/sap/ZB_USER_ASSIGNMENT/";
          var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl);
          this.getView().setModel(oModel); 
      
        }
      });
    }
  );
  