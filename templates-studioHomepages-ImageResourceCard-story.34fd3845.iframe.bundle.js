/*! For license information please see templates-studioHomepages-ImageResourceCard-story.34fd3845.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[3884],{"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/redux-thunk/lib/index.js":(__unused_webpack_module,exports)=>{"use strict";function createThunkMiddleware(extraArgument){return function(_ref){var dispatch=_ref.dispatch,getState=_ref.getState;return function(next){return function(action){return"function"==typeof action?action(dispatch,getState,extraArgument):next(action)}}}}exports.__esModule=!0;var thunk=createThunkMiddleware();thunk.withExtraArgument=createThunkMiddleware,exports.default=thunk},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/templates/studioHomepages/ImageResourceCard.story.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_reactRedux=__webpack_require__("./node_modules/react-redux/es/index.js"),_decorators=__webpack_require__("./.storybook/decorators.js"),_ImageResourceCard=_interopRequireDefault(__webpack_require__("./src/templates/studioHomepages/ImageResourceCard.jsx"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.default={component:_ImageResourceCard.default};(exports.Default=function Template(args){return _react.default.createElement(_reactRedux.Provider,{store:(0,_decorators.reduxStore)()},_react.default.createElement(_ImageResourceCard.default,args))}.bind({})).args={title:"Teacher Community",description:"Ask questions about curriculum, share ideas from your lessons, and get help from other teachers",image:"teachercommunity.png",buttonText:"Connect Today",link:"link to teacher community"}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLXN0dWRpb0hvbWVwYWdlcy1JbWFnZVJlc291cmNlQ2FyZC1zdG9yeS5kNjhmZTkwYS5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7d0lBQUEsbUNBT0MsV0FDQSxhQUVBLElBQUlBLE9BQVMsQ0FBQyxFQUFFQyxlQUdoQixTQUFTQyxhQUdSLElBRkEsSUFBSUMsUUFBVSxHQUVMQyxFQUFJLEVBQUdBLEVBQUlDLFVBQVVDLE9BQVFGLElBQUssQ0FDMUMsSUFBSUcsSUFBTUYsVUFBVUQsR0FDcEIsR0FBS0csSUFBTCxDQUVBLElBQUlDLGVBQWlCRCxJQUVyQixHQUFnQixXQUFaQyxTQUFvQyxXQUFaQSxRQUMzQkwsUUFBUU0sS0FBS0YsVUFDUCxHQUFJRyxNQUFNQyxRQUFRSixNQUN4QixHQUFJQSxJQUFJRCxPQUFRLENBQ2YsSUFBSU0sTUFBUVYsV0FBV1csTUFBTSxLQUFNTixLQUMvQkssT0FDSFQsUUFBUU0sS0FBS0csTUFFZixPQUNNLEdBQWdCLFdBQVpKLFFBQXNCLENBQ2hDLEdBQUlELElBQUlPLFdBQWFDLE9BQU9DLFVBQVVGLFdBQWFQLElBQUlPLFNBQVNBLFdBQVdHLFNBQVMsaUJBQWtCLENBQ3JHZCxRQUFRTSxLQUFLRixJQUFJTyxZQUNqQixRQUNELENBRUEsSUFBSyxJQUFJSSxPQUFPWCxJQUNYUCxPQUFPbUIsS0FBS1osSUFBS1csTUFBUVgsSUFBSVcsTUFDaENmLFFBQVFNLEtBQUtTLElBR2hCLENBeEJrQixDQXlCbkIsQ0FFQSxPQUFPZixRQUFRaUIsS0FBSyxJQUNyQixDQUVxQ0MsT0FBT0MsU0FDM0NwQixXQUFXcUIsUUFBVXJCLFdBQ3JCbUIsT0FBT0MsUUFBVXBCLGlCQUtoQixLQUZ3Qiw4QkFBRixXQUN0QixPQUFPQSxVQUNQLGdCQUZvQixPQUVwQiw2Q0FJSCxDQXBEQSwwRUNEQW1CLE9BQU9DLFFBQVUsU0FBVUUsd0JBQ3pCLElBQUlDLEtBQU8sR0E2RlgsT0EzRkFBLEtBQUtYLFNBQVcsU0FBU0EsV0FDdkIs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YkssTUFBTyxvQkFDUEMsWUFDRSxrR0FDRkMsTUFBTyx1QkFDUEMsV0FBWSxnQkFDWkMsS0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy90ZW1wbGF0ZXMvc3R1ZGlvSG9tZXBhZ2VzL0ltYWdlUmVzb3VyY2VDYXJkLnN0b3J5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cdHZhciBuYXRpdmVDb2RlU3RyaW5nID0gJ1tuYXRpdmUgY29kZV0nO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKGV4dHJhQXJndW1lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaDtcbiAgICB2YXIgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG52YXIgdGh1bmsgPSBjcmVhdGVUaHVua01pZGRsZXdhcmUoKTtcbnRodW5rLndpdGhFeHRyYUFyZ3VtZW50ID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB0aHVuazsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHtyZWR1eFN0b3JlfSBmcm9tICdAY2RvL3N0b3J5Ym9vay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IEltYWdlUmVzb3VyY2VDYXJkIGZyb20gJy4vSW1hZ2VSZXNvdXJjZUNhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogSW1hZ2VSZXNvdXJjZUNhcmQsXG59O1xuXG5jb25zdCBUZW1wbGF0ZSA9IGFyZ3MgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmUoKX0+XG4gICAgPEltYWdlUmVzb3VyY2VDYXJkIHsuLi5hcmdzfSAvPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHQgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkRlZmF1bHQuYXJncyA9IHtcbiAgdGl0bGU6ICdUZWFjaGVyIENvbW11bml0eScsXG4gIGRlc2NyaXB0aW9uOlxuICAgICdBc2sgcXVlc3Rpb25zIGFib3V0IGN1cnJpY3VsdW0sIHNoYXJlIGlkZWFzIGZyb20geW91ciBsZXNzb25zLCBhbmQgZ2V0IGhlbHAgZnJvbSBvdGhlciB0ZWFjaGVycycsXG4gIGltYWdlOiAndGVhY2hlcmNvbW11bml0eS5wbmcnLFxuICBidXR0b25UZXh0OiAnQ29ubmVjdCBUb2RheScsXG4gIGxpbms6ICdsaW5rIHRvIHRlYWNoZXIgY29tbXVuaXR5Jyxcbn07XG4iXSwibmFtZXMiOlsiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmciLCJhcmdUeXBlIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImlubmVyIiwiYXBwbHkiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsImluY2x1ZGVzIiwia2V5IiwiY2FsbCIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJjcmVhdGVUaHVua01pZGRsZXdhcmUiLCJleHRyYUFyZ3VtZW50IiwiX3JlZiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiYWN0aW9uIiwiX19lc01vZHVsZSIsInRodW5rIiwid2l0aEV4dHJhQXJndW1lbnQiLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydEJ5U2VsZWN0b3IiLCJpbnNlcnQiLCJzdHlsZSIsInRhcmdldCIsImdldFRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsInJlbW92ZVN0eWxlRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcmVhY3RSZWR1eCIsIl9kZWNvcmF0b3JzIiwiX0ltYWdlUmVzb3VyY2VDYXJkIiwiY29tcG9uZW50IiwiSW1hZ2VSZXNvdXJjZUNhcmQiLCJUZW1wbGF0ZSIsImFyZ3MiLCJQcm92aWRlciIsInN0b3JlIiwicmVkdXhTdG9yZSIsImJpbmQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJidXR0b25UZXh0IiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=