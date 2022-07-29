define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",


], function (declare, _WidgetBase, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, lang, dojoText, dojoHtml, dojoEvent) {
    "use strict";

    return declare("Refresh.widget.Refresh", [ _WidgetBase ], {

        constructor: function () {
          this._handles = [];
        },

        postCreate: function () {
          //logger.debug(this.id + ".postCreate");
            location.reload();
        },

        update: function (obj, callback) {
          //logger.debug(this.id + ".update");

        },

        resize: function (box) {
          //logger.debug(this.id + ".resize");
        },

        uninitialize: function () {
          //logger.debug(this.id + ".uninitialize");
        }
    });
});

require(["Refresh/widget/Refresh"]);
