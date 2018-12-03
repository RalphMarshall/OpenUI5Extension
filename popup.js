// popup.js

sap.ui.define([
	'sap/ui/core/Core'
], function(
    Core
) {

    sap.ui.getCore().attachInit(function() {
        new sap.m.Button({
            text: "Say 'Hello'",
            press: function() {
                sap.m.MessageToast.show("Hello, world!");
            }
        }).placeAt("content");
    });
});
