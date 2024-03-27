/*global QUnit*/

sap.ui.define([
	"bparoleassignmentui/workflow-ui-module/controller/bpa_role_assigment_ui.controller"
], function (Controller) {
	"use strict";

	QUnit.module("bpa_role_assigment_ui Controller");

	QUnit.test("I should test the bpa_role_assigment_ui controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
