!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"),require("dojo/aspect"),require("dijit/registry"),require("dojo/_base/connect"));else if("function"==typeof define&&define.amd)define(["react","dojo/aspect","dijit/registry","dojo/_base/connect"],e);else{var r="object"==typeof exports?e(require("react"),require("dojo/aspect"),require("dijit/registry"),require("dojo/_base/connect")):e(t.react,t["dojo/aspect"],t["dijit/registry"],t["dojo/_base/connect"]);for(var i in r)("object"==typeof exports?exports:t)[i]=r[i]}}(window,(function(t,e,r,i){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=17)}([function(e,r){e.exports=t},function(t,e,r){var i;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var o=typeof i;if("string"===o||"number"===o)t.push(i);else if(Array.isArray(i)&&i.length){var a=n.apply(null,i);a&&t.push(a)}else if("object"===o)for(var s in i)r.call(i,s)&&i[s]&&t.push(s)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(i=function(){return n}.apply(e,[]))||(t.exports=i)}()},function(t,e,r){var i;void 0===(i=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SharedUtils=void 0;var r=function(){function t(){}return t.parseStyle=function(t){void 0===t&&(t="");try{return t.split(";").reduce((function(t,e){var r=e.split(":");2===r.length&&(t[r[0].trim().replace(/(-.)/g,(function(t){return t[1].toUpperCase()}))]=r[1].trim());return t}),{})}catch(e){window.console.log("Failed to parse style",t,e)}return{}},t.validateCompatibility=function(t){var e=t.listViewEntity,r=t.targetListView,i=r&&r.datasource&&r.datasource.type;if(!r){var n="This widget is unable to find a list view ";return n+=e?"with the supplied entity '"+e+"'":"to connect"}return i&&"database"!==i&&"xpath"!==i?"This widget is only compatible with list view data source type 'Database' and 'XPath'":r&&r._datasource&&r._entity&&r.update?r._entity&&void 0!==e&&e!==r._entity?'The supplied entity "'+t.listViewEntity+'" does not belong to list view data source':"":"This widget version is not compatible with this Mendix version"},t.findTargetNode=function(t){for(var e=null;!e&&t&&!((e=t.querySelectorAll(".mx-listview")[0])||t.isEqualNode(document)||!t.classList||t.classList.contains("mx-incubator")||t.classList.contains("mx-offscreen"));)t=t.parentNode;return e},t.delay=function(t,e,r){return void 0===r&&(r=500),setTimeout((function i(){e()?t():setTimeout(i,r)}),r)},t}();e.SharedUtils=r}.apply(e,[r,e]))||(t.exports=i)},function(t,e,r){var i,n;i=[r,e,r(8)],void 0===(n=function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SharedContainerUtils=void 0;var i=function(){function t(){}return t.findTargetListView=function(t,e){for(var i;t;){for(var n=t.querySelectorAll(".mx-listview"),o=0;o<n.length;o++){if((i=r.byNode(n.item(o)))&&!e)return i;if(i&&i._entity===e)return i}if(t.isEqualNode(document)||!t.classList||t.classList.contains("mx-incubator")||t.classList.contains("mx-offscreen"))break;t=t.parentNode}return i},t}();e.SharedContainerUtils=i}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},o=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))((function(n,o){function a(t){try{u(i.next(t))}catch(t){o(t)}}function s(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((i=i.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};void 0===(i=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getTranslations=e.mxTranslation=e.hideLoader=e.showLoader=e.setListNodeToEmpty=e.getListNode=e.persistListViewHeight=e.resetListViewHeight=e.showLoadMoreButton=e.hideLoadMoreButton=void 0,e.hideLoadMoreButton=function(t){t&&t.classList.add("hide-load-more")},e.showLoadMoreButton=function(t){t&&t.domNode.classList.remove("hide-load-more")},e.resetListViewHeight=function(t){var e=t.querySelector("ul");e.style.removeProperty("height"),e.style.removeProperty("overflow")},e.persistListViewHeight=function(t){var e=t.querySelector("ul");e.offsetHeight>0&&(e.style.height=e.offsetHeight+"px",e.style.overflow="hidden")},e.getListNode=function(t){return t.querySelector("ul")},e.setListNodeToEmpty=function(t){mx.logger.debug("setListNodeToEmpty");for(var e=t.querySelector("ul");e.firstChild;)e.removeChild(e.firstChild)},e.showLoader=function(t){mx.logger.debug("showLoader"),t.domNode.classList.add("widget-pagination-loading")},e.hideLoader=function(t){mx.logger.debug("hideLoader"),t.domNode.classList.remove("widget-pagination-loading")},e.mxTranslation=function(t,e,r,i,n){var o=null!=n?n:"[No translation]";return i?window.__widgets_translations&&(o=window.__widgets_translations[t+"."+e]||n||"[No translation]"):o=mx.session.getConfig("uiconfig.translations."+t+"."+e)||window.mx.session.getConfig("uiconfig.translations")[t+"."+e]||n||"[No translation]",r.reduce((function(t,e,r){return t.split("{"+(r+1)+"}").join(e)}),o)},e.getTranslations=function(){return o(void 0,void 0,void 0,(function(){var t,e,r,i;return a(this,(function(o){switch(o.label){case 0:return t=window.mx.session.getConfig("locale.code"),[4,fetch("/metamodel.json")];case 1:return[4,o.sent().json()];case 2:return(e=o.sent())&&e.systemTexts?(r=e.systemTexts,i=e.languages.indexOf(t),window.__widgets_translations=Object.keys(r).reduce((function(t,e){var o;return n(n({},t),((o={})[e]=r[e][i],o))}),{})):mx.logger.error("Error while loading translations"),[2]}}))}))}}.apply(e,[r,e]))||(t.exports=i)},function(t,r){t.exports=e},function(t,e,r){var i,n;i=[r,e,r(0),r(1)],void 0===(n=function(t,e,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Alert=void 0,e.Alert=function(t){var e=t.bootstrapStyle,n=t.className,o=t.children;return o?r.createElement("div",{className:i("alert alert-"+e,n)},o):null},e.Alert.displayName="Alert",e.Alert.defaultProps={bootstrapStyle:"danger"}}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n,o=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var i=Array(t),n=0;for(e=0;e<r;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,n++)i[n]=o[a];return i};i=[r,e,r(5),r(2),r(3),r(4),r(9),r(35)],void 0===(n=function(t,e,r,i,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DataSourceHelper=void 0;var s=function(){function t(t){this.initialLoad=!0,this.delay=50,this.store={constraints:{_none:{}},sorting:{}},this.updateInProgress=!1,this.requiresUpdate=!1,this.sorting=[],this.constraints=[],this.widget=t,this.originalSort=window.mx.isOffline()?this.widget._datasource._sort:this.widget._datasource._sorting,r.after(t,"storeState",(function(e){(mx.logger.debug("after storeState"),t.__customWidgetDataSourceHelper)&&(e("lvcSorting",t.__customWidgetDataSourceHelper.sorting.length>0?t.__customWidgetDataSourceHelper.sorting:t.__customWidgetDataSourceHelper.originalSort),e("lvcConstraints",t.__customWidgetDataSourceHelper.constraints),e("lvcPaging",t.__customWidgetDataSourceHelper.paging))}),!0)}return t.getInstance=function(e,r){var o=e&&e.parentElement,a=n.SharedContainerUtils.findTargetListView(o,r),s=i.SharedUtils.validateCompatibility({listViewEntity:r,targetListView:a});if(!s&&a)return a.__customWidgetDataSourceHelper||(a.__customWidgetDataSourceHelper=new t(a)),a.getState("lvcPersistState",!1)||this.hideContent(a.domNode),a.__customWidgetDataSourceHelper;throw new Error(s)},t.prototype.setSorting=function(t,e,r){void 0===r&&(r=!1),this.store.sorting={},this.store.sorting[t]=e,this.registerUpdate(r)},t.prototype.setConstraint=function(t,e,r,i){var n;void 0===r&&(r="_none"),void 0===i&&(i=!1);var o=r.trim()||"_none";this.store.constraints[o]?this.store.constraints[o][t]=e:this.store.constraints[o]=((n={})[t]=e,n),this.registerUpdate(i)},t.prototype.getListView=function(){return this.widget},t.prototype.registerUpdate=function(t){var e=this;mx.logger.debug("DataSourceHelper .registerUpdate"),this.timeoutHandle&&window.clearTimeout(this.timeoutHandle),this.updateInProgress?this.requiresUpdate=!0:this.timeoutHandle=window.setTimeout((function(){mx.logger.debug("DataSourceHelper .execute"),e.updateInProgress=!0,e.iterativeUpdateDataSource(t)}),this.delay)},t.prototype.iterativeUpdateDataSource=function(t){var e=this;this.updateDataSource((function(){e.requiresUpdate?(e.requiresUpdate=!1,e.iterativeUpdateDataSource(t)):e.updateInProgress=!1}),t)},t.prototype.updateDataSource=function(e,r){var i,n,a,s,u,c=this,l=Object.keys(this.store.sorting).map((function(t){return c.store.sorting[t]})).filter((function(t){return t[0]&&t[1]}));if(l.length||(l=this.originalSort),window.mx.isOffline()){for(var d=Object.keys(this.store.constraints._none).map((function(t){return c.store.constraints._none[t]})),p=d.filter((function(t){return t.value})),f=d.filter((function(t){return t.operator})),h=[],g=0,v=Object.keys(this.store.constraints).filter((function(t){return"_none"!==t}));g<v.length;g++){for(var y=v[g],w=[],m=0,_=Object.keys(this.store.constraints[y]);m<_.length;m++){var b=_[m],S=this.store.constraints[y][b];S&&S.value&&w.push(S)}w.length&&h.push({constraints:w,operator:"or"})}a=o(p,f,h)}else{p=Object.keys(this.store.constraints._none).map((function(t){return c.store.constraints._none[t]})).join(""),h=Object.keys(this.store.constraints).filter((function(t){return"_none"!==t})).map((function(t){return"["+Object.keys(c.store.constraints[t]).map((function(e){return c.store.constraints[t][e]})).filter((function(t){return t})).map((function(t){return t.trim().substr(1,t.trim().length-2)})).join(" or ")+"]"})).join("").replace(/\[]/g,"");var x=this.widget._datasource._searchPaths,O=this.widget.hasSearch?null===(n=(i=this.widget)._getSearchText)||void 0===n?void 0:n.call(i):void 0;a=(u=O,(s=x)&&u&&""!==u.trim()?"["+s.map((function(t){return"contains("+t+",'"+O+"')"})).join(" or ")+"]":"")+p+h}if(this.sorting=l,this.constraints=a,r)t.showContent(this.widget.domNode),this.hideLoader(),this.initialLoad=!1,e();else{this.widget._datasource._constraints=a,window.mx.isOffline()?this.widget._datasource._sort=l:this.widget._datasource._sorting=l,mx.logger.debug("DataSourceHelper .set sort and constraint");var L=this.widget._datasource.getOffset(),P=this.widget._datasource.getPageSize();!this.widget.__lvcPagingEnabled&&L>0&&(mx.logger.debug("reset offset"),this.widget._datasource.setOffset(0),this.widget._datasource.setPageSize(P+L)),this.initialLoad||this.showLoader(),this.widget.update(null,(function(){mx.logger.debug("DataSourceHelper .updated"),!c.widget.__lvcPagingEnabled&&L>0&&(mx.logger.debug("restore offset"),c.widget._datasource.setOffset(L),c.widget._datasource.setPageSize(P)),c.hideLoader(),c.initialLoad=!1,e()}))}},t.prototype.showLoader=function(){this.widget.domNode.classList.add("widget-data-source-helper-loading")},t.hideContent=function(t){t&&t.classList.add("widget-data-source-helper-initial-loading")},t.showContent=function(t){t&&t.classList.remove("widget-data-source-helper-initial-loading")},t.prototype.hideLoader=function(){this.widget.domNode.classList.remove("widget-data-source-helper-loading"),t.showContent(this.widget.domNode)},t.prototype.setPaging=function(t,e){var r=this,i=this.widget._datasource;if(!this.widget.__customWidgetPagingLoading){var n=!1;void 0!==t&&t!==i.getOffset()&&(this.widget.__customWidgetPagingOffset=t,i.setOffset(t),n=!0),void 0!==e&&e!==i.getPageSize()&&(i.setPageSize(e),n=!0),this.paging={pageSize:void 0!==e?e:i.getPageSize(),offset:void 0!==t?t:i.getOffset()},n&&(mx.logger.debug(".updateDatasource changed",t,e),this.widget.__customWidgetPagingLoading=!0,this.showLoader(),this.widget.sequence(["_sourceReload","_renderData"],(function(){r.widget.__customWidgetPagingLoading=!1,a.resetListViewHeight(r.widget.domNode),mx.logger.debug(".updateDatasource updated"),r.hideLoader()})))}},t}();e.DataSourceHelper=s}.apply(e,i))||(t.exports=n)},function(t,e){t.exports=r},function(t,e,r){var i,n;i=[r,e,r(12)],void 0===(n=function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(){var t=mxui.widget.ListView;function e(t){if(!(!t||"database"===t.datasource.type||"xpath"===t.datasource.type))return!1;var e=!!(t&&("database"===t.datasource.type||"xpath"===t.datasource.type)&&t._datasource&&t._datasource.reload&&t._datasource.setOffset&&t._datasource.setPageSize&&void 0!==t._datasource._constraints&&(t._datasource._sorting||t._datasource._sort)&&t._datasource.getSetSize&&t._datasource.getOffset);return e||mx.logger.error("This Mendix version is not compatible with list view controls. The List view controls use is limited."),e}!t.prototype.__lvcPrototypeUpdated&&function(t){var e=!!(t&&t.postCreate&&t._loadData&&t.getState&&t._onLoad&&t._renderData);e||mx.logger.error("This Mendix version is not compatible with list view controls. The List view prototype could not be updated.");return e}(t.prototype)?(t.prototype.__lvcPrototypeUpdated=!0,t.prototype.__postCreateOriginal=t.prototype.postCreate,t.prototype.postCreate=function(){if(mx.logger.debug("list view control, overwrites postCreate prototype"),this.__postCreateOriginal(),e(this)){var t=this.getState("lvcPaging");t&&(void 0!==t.offset&&this._datasource.setOffset(t.offset),void 0!==t.pageSize&&this._datasource.setPageSize(t.pageSize));var r=this.getState("lvcSorting");r&&(this._datasource._sorting=r);var i=this.getState("lvcConstraints");i&&(this._datasource._constraints=i)}},t.prototype.__loadDataOriginal=t.prototype._loadData,t.prototype._loadData=function(t){var i=this;if(mx.logger.debug("List view control, overwrites _loadData prototype"),e(this)){var n=this._lastLoadId=r.v4();this.__lvcPagingEnabled&&this._datasource.setOffset(0),this._datasource.reload((function(){if(i._lastLoadId===n){var e=i._datasource.getOffset();if(e&&i._datasource.getSetSize()<=e)return i._datasource.setOffset(0),void i._loadData(t);i._renderData((function(){i._onLoad(),t&&t()}))}else t&&t()}))}else this.__loadDataOriginal(t)}):mx.logger.debug("Prototype update called unexpected again")}()}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n;i=[r,e,r(11)],void 0===(n=function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FormViewState=void 0;var i=function(){function t(t,e,i){this.form=t,this.widgetId=e,this.persistHandle=r.connect(t,"onPersistViewState",null,(function(t){var r=t[e]||(t[e]={});i(r)}))}return t.prototype.getPageState=function(t,e){var r=this.form,i=r&&r.viewState?r.viewState[this.widgetId]:void 0,n=i&&void 0!==i[t]?i[t]:e;return mx.logger.debug("getPageState",this.widgetId,t,e,n),n},t.prototype.destroy=function(){r.disconnect(this.persistHandle)},t}();e.FormViewState=i}.apply(e,i))||(t.exports=n)},function(t,e){t.exports=i},function(t,e,r){"use strict";var i;r.r(e);var n=new Uint8Array(16);function o(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(n)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(t){return"string"==typeof t&&a.test(t)},u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));var l,d,p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!s(r))throw TypeError("Stringified UUID is invalid");return r},f=0,h=0;var g=function(t,e,r){var i=e&&r||0,n=e||new Array(16),a=(t=t||{}).node||l,s=void 0!==t.clockseq?t.clockseq:d;if(null==a||null==s){var u=t.random||(t.rng||o)();null==a&&(a=l=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==s&&(s=d=16383&(u[6]<<8|u[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),g=void 0!==t.nsecs?t.nsecs:h+1,v=c-f+(g-h)/1e4;if(v<0&&void 0===t.clockseq&&(s=s+1&16383),(v<0||c>f)&&void 0===t.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=c,h=g,d=s;var y=(1e4*(268435455&(c+=122192928e5))+g)%4294967296;n[i++]=y>>>24&255,n[i++]=y>>>16&255,n[i++]=y>>>8&255,n[i++]=255&y;var w=c/4294967296*1e4&268435455;n[i++]=w>>>8&255,n[i++]=255&w,n[i++]=w>>>24&15|16,n[i++]=w>>>16&255,n[i++]=s>>>8|128,n[i++]=255&s;for(var m=0;m<6;++m)n[i+m]=a[m];return e||p(n)};var v=function(t){if(!s(t))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};var y=function(t,e,r){function i(t,i,n,o){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"==typeof i&&(i=v(i)),16!==i.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+t.length);if(a.set(i),a.set(t,i.length),(a=r(a))[6]=15&a[6]|e,a[8]=63&a[8]|128,n){o=o||0;for(var s=0;s<16;++s)n[o+s]=a[s];return n}return p(a)}try{i.name=t}catch(t){}return i.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",i.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",i};function w(t){return 14+(t+64>>>9<<4)+1}function m(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}function _(t,e,r,i,n,o){return m((a=m(m(e,t),m(i,o)))<<(s=n)|a>>>32-s,r);var a,s}function b(t,e,r,i,n,o,a){return _(e&r|~e&i,t,e,n,o,a)}function S(t,e,r,i,n,o,a){return _(e&i|r&~i,t,e,n,o,a)}function x(t,e,r,i,n,o,a){return _(e^r^i,t,e,n,o,a)}function O(t,e,r,i,n,o,a){return _(r^(e|~i),t,e,n,o,a)}var L=y("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var r=0;r<e.length;++r)t[r]=e.charCodeAt(r)}return function(t){for(var e=[],r=32*t.length,i=0;i<r;i+=8){var n=t[i>>5]>>>i%32&255,o=parseInt("0123456789abcdef".charAt(n>>>4&15)+"0123456789abcdef".charAt(15&n),16);e.push(o)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[w(e)-1]=e;for(var r=1732584193,i=-271733879,n=-1732584194,o=271733878,a=0;a<t.length;a+=16){var s=r,u=i,c=n,l=o;r=b(r,i,n,o,t[a],7,-680876936),o=b(o,r,i,n,t[a+1],12,-389564586),n=b(n,o,r,i,t[a+2],17,606105819),i=b(i,n,o,r,t[a+3],22,-1044525330),r=b(r,i,n,o,t[a+4],7,-176418897),o=b(o,r,i,n,t[a+5],12,1200080426),n=b(n,o,r,i,t[a+6],17,-1473231341),i=b(i,n,o,r,t[a+7],22,-45705983),r=b(r,i,n,o,t[a+8],7,1770035416),o=b(o,r,i,n,t[a+9],12,-1958414417),n=b(n,o,r,i,t[a+10],17,-42063),i=b(i,n,o,r,t[a+11],22,-1990404162),r=b(r,i,n,o,t[a+12],7,1804603682),o=b(o,r,i,n,t[a+13],12,-40341101),n=b(n,o,r,i,t[a+14],17,-1502002290),i=b(i,n,o,r,t[a+15],22,1236535329),r=S(r,i,n,o,t[a+1],5,-165796510),o=S(o,r,i,n,t[a+6],9,-1069501632),n=S(n,o,r,i,t[a+11],14,643717713),i=S(i,n,o,r,t[a],20,-373897302),r=S(r,i,n,o,t[a+5],5,-701558691),o=S(o,r,i,n,t[a+10],9,38016083),n=S(n,o,r,i,t[a+15],14,-660478335),i=S(i,n,o,r,t[a+4],20,-405537848),r=S(r,i,n,o,t[a+9],5,568446438),o=S(o,r,i,n,t[a+14],9,-1019803690),n=S(n,o,r,i,t[a+3],14,-187363961),i=S(i,n,o,r,t[a+8],20,1163531501),r=S(r,i,n,o,t[a+13],5,-1444681467),o=S(o,r,i,n,t[a+2],9,-51403784),n=S(n,o,r,i,t[a+7],14,1735328473),i=S(i,n,o,r,t[a+12],20,-1926607734),r=x(r,i,n,o,t[a+5],4,-378558),o=x(o,r,i,n,t[a+8],11,-2022574463),n=x(n,o,r,i,t[a+11],16,1839030562),i=x(i,n,o,r,t[a+14],23,-35309556),r=x(r,i,n,o,t[a+1],4,-1530992060),o=x(o,r,i,n,t[a+4],11,1272893353),n=x(n,o,r,i,t[a+7],16,-155497632),i=x(i,n,o,r,t[a+10],23,-1094730640),r=x(r,i,n,o,t[a+13],4,681279174),o=x(o,r,i,n,t[a],11,-358537222),n=x(n,o,r,i,t[a+3],16,-722521979),i=x(i,n,o,r,t[a+6],23,76029189),r=x(r,i,n,o,t[a+9],4,-640364487),o=x(o,r,i,n,t[a+12],11,-421815835),n=x(n,o,r,i,t[a+15],16,530742520),i=x(i,n,o,r,t[a+2],23,-995338651),r=O(r,i,n,o,t[a],6,-198630844),o=O(o,r,i,n,t[a+7],10,1126891415),n=O(n,o,r,i,t[a+14],15,-1416354905),i=O(i,n,o,r,t[a+5],21,-57434055),r=O(r,i,n,o,t[a+12],6,1700485571),o=O(o,r,i,n,t[a+3],10,-1894986606),n=O(n,o,r,i,t[a+10],15,-1051523),i=O(i,n,o,r,t[a+1],21,-2054922799),r=O(r,i,n,o,t[a+8],6,1873313359),o=O(o,r,i,n,t[a+15],10,-30611744),n=O(n,o,r,i,t[a+6],15,-1560198380),i=O(i,n,o,r,t[a+13],21,1309151649),r=O(r,i,n,o,t[a+4],6,-145523070),o=O(o,r,i,n,t[a+11],10,-1120210379),n=O(n,o,r,i,t[a+2],15,718787259),i=O(i,n,o,r,t[a+9],21,-343485551),r=m(r,s),i=m(i,u),n=m(n,c),o=m(o,l)}return[r,i,n,o]}(function(t){if(0===t.length)return[];for(var e=8*t.length,r=new Uint32Array(w(e)),i=0;i<e;i+=8)r[i>>5]|=(255&t[i/8])<<i%32;return r}(t),8*t.length))}));var P=function(t,e,r){var i=(t=t||{}).random||(t.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){r=r||0;for(var n=0;n<16;++n)e[r+n]=i[n];return e}return p(i)};function j(t,e,r,i){switch(t){case 0:return e&r^~e&i;case 1:return e^r^i;case 2:return e&r^e&i^r&i;case 3:return e^r^i}}function C(t,e){return t<<e|t>>>32-e}var D=y("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var i=unescape(encodeURIComponent(t));t=[];for(var n=0;n<i.length;++n)t.push(i.charCodeAt(n))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var o=t.length/4+2,a=Math.ceil(o/16),s=new Array(a),u=0;u<a;++u){for(var c=new Uint32Array(16),l=0;l<16;++l)c[l]=t[64*u+4*l]<<24|t[64*u+4*l+1]<<16|t[64*u+4*l+2]<<8|t[64*u+4*l+3];s[u]=c}s[a-1][14]=8*(t.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(t.length-1)&4294967295;for(var d=0;d<a;++d){for(var p=new Uint32Array(80),f=0;f<16;++f)p[f]=s[d][f];for(var h=16;h<80;++h)p[h]=C(p[h-3]^p[h-8]^p[h-14]^p[h-16],1);for(var g=r[0],v=r[1],y=r[2],w=r[3],m=r[4],_=0;_<80;++_){var b=Math.floor(_/20),S=C(g,5)+j(b,v,y,w)+m+e[b]+p[_]>>>0;m=w,w=y,y=C(v,30)>>>0,v=g,g=S}r[0]=r[0]+g>>>0,r[1]=r[1]+v>>>0,r[2]=r[2]+y>>>0,r[3]=r[3]+w>>>0,r[4]=r[4]+m>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}));var V=function(t){if(!s(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)};r.d(e,"v1",(function(){return g})),r.d(e,"v3",(function(){return L})),r.d(e,"v4",(function(){return P})),r.d(e,"v5",(function(){return D})),r.d(e,"NIL",(function(){return"00000000-0000-0000-0000-000000000000"})),r.d(e,"version",(function(){return V})),r.d(e,"validate",(function(){return s})),r.d(e,"stringify",(function(){return p})),r.d(e,"parse",(function(){return v}))},,,,,function(t,e,r){var i,n,o,a=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});i=[r,e,r(0),r(1),r(6),r(7),r(2),r(18),r(19),r(3),r(10),r(43)],void 0===(n=function(t,e,r,i,n,o,s,u,c,l,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var p=function(t){function e(e){var r=t.call(this,e)||this;return r.widgetDom=null,r.retriesFind=0,r.applyFilter=r.applyFilter.bind(r),r.viewStateManager=new d.FormViewState(r.props.mxform,r.props.uniqueid,(function(t){t.selectedOption=r.state.selectedOption})),r.state={alertMessage:u.Validate.validateProps(r.props),listViewAvailable:!1,selectedOption:r.getInitialStateSelectedOption()},r}return a(e,t),e.prototype.render=function(){var t=this;return r.createElement("div",{className:i("widget-drop-down-filter",this.props.class),ref:function(e){return t.widgetDom=e},style:s.SharedUtils.parseStyle(this.props.style)},this.renderAlert(),this.renderDropDownFilter())},e.prototype.componentDidMount=function(){s.SharedUtils.delay(this.connectToListView.bind(this),this.checkListViewAvailable.bind(this),20)},e.prototype.componentWillReceiveProps=function(t){this.state.listViewAvailable&&this.setState({alertMessage:u.Validate.validateProps(t)})},e.prototype.componentDidUpdate=function(t,e){if(this.state.listViewAvailable&&!e.listViewAvailable){var r=this.checkRestoreState();this.applyFilter(this.state.selectedOption,r)}else if(this.state.listViewAvailable&&this.props.mxObject!==t.mxObject){-1!==this.state.selectedOption.constraint.indexOf("'[%CurrentObject%]'")&&this.applyFilter(this.state.selectedOption)}},e.prototype.componentWillUnmount=function(){this.viewStateManager.destroy()},e.prototype.checkListViewAvailable=function(){return!!this.widgetDom&&(this.retriesFind++,this.retriesFind>25||!!l.SharedContainerUtils.findTargetListView(this.widgetDom.parentElement,this.props.entity))},e.prototype.renderAlert=function(){return r.createElement(n.Alert,{className:"widget-checkbox-filter-alert"},this.state.alertMessage)},e.prototype.renderDropDownFilter=function(){var t=this;if(!this.state.alertMessage){var e=this.state.selectedOption&&this.state.selectedOption.caption,i=this.props.filters.map((function(t){return t.caption})).indexOf(e),n=JSON.parse(JSON.stringify(this.props.filters));return this.props.mxObject&&n.forEach((function(e){return e.constraint=e.constraint.replace(/\[%CurrentObject%\]/g,t.props.mxObject.getGuid())})),r.createElement(c.DropDownFilter,{defaultFilterIndex:i,filters:n,handleChange:this.applyFilter})}return null},e.prototype.checkRestoreState=function(){return void 0!==this.viewStateManager.getPageState("selectedOption")},e.prototype.getInitialStateSelectedOption=function(){var t=this.props.filters.filter((function(t){return t.isDefault}))[0]||this.props.filters[0];return this.viewStateManager.getPageState("selectedOption",t)},e.prototype.applyFilter=function(t,e){void 0===e&&(e=!1);var r=this.getConstraint(t);this.dataSourceHelper&&(mx.logger.debug(this.props,this.props.uniqueid,"applyFilter",r),this.dataSourceHelper.setConstraint(this.props.uniqueid,r,void 0,e)),this.setState({selectedOption:t})},e.prototype.getConstraint=function(t){var e=this.state.targetListView,r=t.attribute,i=t.filterBy,n=t.constraint,o=t.attributeValue;if(e){var a=this.props.mxObject?this.props.mxObject.getGuid():"",s=-1!==n.indexOf("'[%CurrentObject%]'");if("XPath"===i&&s&&a)return n.replace(/\'\[%CurrentObject%\]\'/g,a);if("XPath"===i&&!s)return n;if("attribute"===i&&o)return this.getAttributeConstraint(r,o)}return""},e.prototype.getAttributeConstraint=function(t,e){var r=this.state.targetListView;if(window.mx.isOffline())return{attribute:t,operator:"contains",path:this.props.entity,value:e};if(r&&r._datasource&&e){var i=mx.meta.getEntity(this.props.entity);return i.isEnum(t)?"["+t+"='"+e+"']":i.isBoolean(t)?"["+t+" = '"+e.toLowerCase()+"']":"[contains("+t+",'"+e+"')]"}return""},e.prototype.connectToListView=function(){var t,e="";try{this.dataSourceHelper=o.DataSourceHelper.getInstance(this.widgetDom,this.props.entity),t=this.dataSourceHelper.getListView()}catch(t){e=t.message}e&&t&&o.DataSourceHelper.showContent(t.domNode),this.setState({alertMessage:e||u.Validate.validateProps(this.props),listViewAvailable:!!t,targetListView:t})},e}(r.Component);e.default=p}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n;i=[r,e,r(0)],void 0===(n=function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Validate=void 0;var i=function(){function t(){}return t.validateProps=function(t){var e=[];return t.filters.forEach((function(r,i){!t.isWebModeler&&window.mx.isOffline()||"XPath"!==r.filterBy||r.constraint||e.push("Filter position: {"+(i+1)+"} is missing XPath constraint"),"attribute"!==r.filterBy||r.attribute||e.push("Filter position: {"+(i+1)+"} 'Attribute' is required"),"attribute"!==r.filterBy||r.attributeValue||e.push("Filter position: {"+(i+1)+"} 'Attribute value' is required"),!t.isWebModeler&&window.mx.isOffline()||t.isWebModeler||"XPath"!==r.filterBy||!(r.constraint.indexOf("[%CurrentObject%]'")>-1)||t.mxObject||e.push("Filter position: {"+(i+1)+"} is XPath constraint, requires a context object"),!t.isWebModeler&&window.mx.isOffline()&&("attribute"===r.filterBy&&r.attribute&&r.attribute.indexOf("/")>-1&&e.push("Filter position: {"+(i+1)+"} 'Attribute' over reference is not supported in offline mode"),"XPath"===r.filterBy&&e.push("Filter position: {"+(i+1)+"}: 'Filter' on 'XPath' is not supported in offline mode"))})),t.filters.filter((function(t){return t.isDefault})).length>1&&e.push("Should only have one filter set as default"),e.length?r.createElement("div",{},"Configuration error in widget:",e.map((function(t,e){return r.createElement("p",{key:e},t)}))):""},t}();e.Validate=i}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n,o,a=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=this&&this.__assign||function(){return(s=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};i=[r,e,r(0)],void 0===(n=function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DropDownFilter=void 0;var i=function(t){function e(e){var r=t.call(this,e)||this;return r.state={selectedValue:e.defaultFilterIndex<0?"0":""+e.defaultFilterIndex},r.handleOnChange=r.handleOnChange.bind(r),r.filters=r.props.filters.map((function(t,e){return s(s({},t),{selectedValue:""+e})})),r}return a(e,t),e.prototype.render=function(){return r.createElement("select",{className:"form-control",onChange:this.handleOnChange,value:this.state.selectedValue},this.createOptions())},e.prototype.componentWillReceiveProps=function(t){var e=t.defaultFilterIndex<0?"0":""+t.defaultFilterIndex;this.state.selectedValue!==e&&this.setState({selectedValue:e})},e.prototype.createOptions=function(){return this.filters.map((function(t,e){return r.createElement("option",{className:"",key:e,label:t.caption,value:t.selectedValue},t.caption)}))},e.prototype.handleOnChange=function(t){this.setState({selectedValue:t.currentTarget.value});var e=this.filters.find((function(e){return e.selectedValue===t.currentTarget.value}));this.props.handleChange(e)},e}(r.Component);e.DropDownFilter=i}.apply(e,i))||(t.exports=n)},,,,,,,,,,,,,,,,function(t,e){},,,,,,,,function(t,e){}])}));