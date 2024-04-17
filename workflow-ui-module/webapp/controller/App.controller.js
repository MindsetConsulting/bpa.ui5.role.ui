sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("bparoleassignmentui.workflowuimodule.controller.App", {
      onInit() {

      },
      handleSelectionChange: function(oEvent) {
        var changedItem = oEvent.getParameter("changedItem");
        var isSelected = oEvent.getParameter("selected");
  
        var state = "Selected";
        if (!isSelected) {
          state = "Deselected";
        }
  
        MessageToast.show("Event 'selectionChange': " + state + " '" + changedItem.getText() + "'", {
          width: "auto"
        });
      },
      handleSelectionFinish: function(oEvent) {
        var selectedItems = oEvent.getParameter("selectedItems");
        var messageText = "Event 'selectionFinished': [";
  
        for (var i = 0; i < selectedItems.length; i++) {
          messageText += "'" + selectedItems[i].getText() + "'";
          if (i != selectedItems.length - 1) {
            messageText += ",";
          }
        }
  
        messageText += "]";
  
        MessageToast.show(messageText, {
          width: "auto"
        });
      }
    });
  }
);
