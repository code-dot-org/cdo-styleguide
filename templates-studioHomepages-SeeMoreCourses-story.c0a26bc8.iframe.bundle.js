/*! For license information please see templates-studioHomepages-SeeMoreCourses-story.c0a26bc8.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[311],{"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */"),sourceURLs=cssMapping.sources.map((function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||"").concat(source," */")}));return[content].concat(sourceURLs).concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/redux-thunk/lib/index.js":(__unused_webpack_module,exports)=>{"use strict";function createThunkMiddleware(extraArgument){return function(_ref){var dispatch=_ref.dispatch,getState=_ref.getState;return function(next){return function(action){return"function"==typeof action?action(dispatch,getState,extraArgument):next(action)}}}}exports.__esModule=!0;var thunk=createThunkMiddleware();thunk.withExtraArgument=createThunkMiddleware,exports.default=thunk},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/templates/studioHomepages/SeeMoreCourses.story.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.SeeMoreCoursesExamples=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_SeeMoreCourses=_interopRequireDefault(__webpack_require__("./src/templates/studioHomepages/SeeMoreCourses.jsx")),_reactRedux=__webpack_require__("./node_modules/react-redux/es/index.js"),_decorators=__webpack_require__("./.storybook/decorators.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var courses=[{title:"Play Lab",description:"Create a story or make a game with Play Lab!",link:"https://code.org/playlab"},{title:"CSP Unit 2 - Digital Information",description:"Explore how more complex digital information is represented and manipulated through computation and visualization",link:"https://curriculum.code.org/csp/unit2/"},{title:"CSP Unit 2 - Digital Information",description:"Explore how more complex digital information is represented and manipulated through computation and visualization",link:"https://curriculum.code.org/csp/unit2/"}],_default={component:_SeeMoreCourses.default};exports.default=_default;var SeeMoreCoursesExamples=function Template(args){return _react.default.createElement(_reactRedux.Provider,{store:(0,_decorators.reduxStore)()},_react.default.createElement(_SeeMoreCourses.default,{courses}))}.bind({});exports.SeeMoreCoursesExamples=SeeMoreCoursesExamples}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLXN0dWRpb0hvbWVwYWdlcy1TZWVNb3JlQ291cnNlcy1zdG9yeS45NzFhZmMxNy5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7dUlBQUEsbUNBT0MsV0FDQSxhQUVBLElBQUlBLE9BQVMsQ0FBQyxFQUFFQyxlQUdoQixTQUFTQyxhQUdSLElBRkEsSUFBSUMsUUFBVSxHQUVMQyxFQUFJLEVBQUdBLEVBQUlDLFVBQVVDLE9BQVFGLElBQUssQ0FDMUMsSUFBSUcsSUFBTUYsVUFBVUQsR0FDcEIsR0FBS0csSUFBTCxDQUVBLElBQUlDLGVBQWlCRCxJQUVyQixHQUFnQixXQUFaQyxTQUFvQyxXQUFaQSxRQUMzQkwsUUFBUU0sS0FBS0YsVUFDUCxHQUFJRyxNQUFNQyxRQUFRSixNQUN4QixHQUFJQSxJQUFJRCxPQUFRLENBQ2YsSUFBSU0sTUFBUVYsV0FBV1csTUFBTSxLQUFNTixLQUMvQkssT0FDSFQsUUFBUU0sS0FBS0csTUFFZixPQUNNLEdBQWdCLFdBQVpKLFFBQXNCLENBQ2hDLEdBQUlELElBQUlPLFdBQWFDLE9BQU9DLFVBQVVGLFdBQWFQLElBQUlPLFNBQVNBLFdBQVdHLFNBQVMsaUJBQWtCLENBQ3JHZCxRQUFRTSxLQUFLRixJQUFJTyxZQUNqQixRQUNELENBRUEsSUFBSyxJQUFJSSxPQUFPWCxJQUNYUCxPQUFPbUIsS0FBS1osSUFBS1csTUFBUVgsSUFBSVcsTUFDaENmLFFBQVFNLEtBQUtTLElBR2hCLENBeEJrQixDQXlCbkIsQ0FFQSxPQUFPZixRQUFRaUIsS0FBSyxJQUNyQixDQUVxQ0MsT0FBT0MsU0FDM0NwQixXQUFXcUIsUUFBVXJCLFdBQ3JCbUIsT0FBT0MsUUFBVXBCLGlCQUtoQixLQUZ3Qiw4QkFBRixXQUN0QixPQUFPQSxVQUNQLGdCQUZvQixPQUVwQiw2Q0FJSCxDQXBEQSwwRUNEQW1CLE9BQU9DLFFBQVUsU0FBVUUsd0JBQ3pCLElBQUlDLEtBQU8sR0E2RlgsT0EzRkFBLEtBQUtYLFNBQVcsU0FBU0EsV0FDdkIsT0FB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ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL3RlbXBsYXRlcy9zdHVkaW9Ib21lcGFnZXMvU2VlTW9yZUNvdXJzZXMuc3RvcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIG5hdGl2ZUNvZGVTdHJpbmcgPSAnW25hdGl2ZSBjb2RlXSc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nICYmICFhcmcudG9TdHJpbmcudG9TdHJpbmcoKS5pbmNsdWRlcygnW25hdGl2ZSBjb2RlXScpKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoO1xuICAgIHZhciBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpO1xudGh1bmsud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHRodW5rOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlZU1vcmVDb3Vyc2VzIGZyb20gJy4vU2VlTW9yZUNvdXJzZXMnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtyZWR1eFN0b3JlfSBmcm9tICdAY2RvL3N0b3J5Ym9vay9kZWNvcmF0b3JzJztcblxuY29uc3QgY291cnNlcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnUGxheSBMYWInLFxuICAgIGRlc2NyaXB0aW9uOiAnQ3JlYXRlIGEgc3Rvcnkgb3IgbWFrZSBhIGdhbWUgd2l0aCBQbGF5IExhYiEnLFxuICAgIGxpbms6ICdodHRwczovL2NvZGUub3JnL3BsYXlsYWInLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDU1AgVW5pdCAyIC0gRGlnaXRhbCBJbmZvcm1hdGlvbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRXhwbG9yZSBob3cgbW9yZSBjb21wbGV4IGRpZ2l0YWwgaW5mb3JtYXRpb24gaXMgcmVwcmVzZW50ZWQgYW5kIG1hbmlwdWxhdGVkIHRocm91Z2ggY29tcHV0YXRpb24gYW5kIHZpc3VhbGl6YXRpb24nLFxuICAgIGxpbms6ICdodHRwczovL2N1cnJpY3VsdW0uY29kZS5vcmcvY3NwL3VuaXQyLycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0NTUCBVbml0IDIgLSBEaWdpdGFsIEluZm9ybWF0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdFeHBsb3JlIGhvdyBtb3JlIGNvbXBsZXggZGlnaXRhbCBpbmZvcm1hdGlvbiBpcyByZXByZXNlbnRlZCBhbmQgbWFuaXB1bGF0ZWQgdGhyb3VnaCBjb21wdXRhdGlvbiBhbmQgdmlzdWFsaXphdGlvbicsXG4gICAgbGluazogJ2h0dHBzOi8vY3VycmljdWx1bS5jb2RlLm9yZy9jc3AvdW5pdDIvJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBTZWVNb3JlQ291cnNlcyxcbn07XG5cbmNvbnN0IFRlbXBsYXRlID0gYXJncyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlKCl9PlxuICAgICAgPFNlZU1vcmVDb3Vyc2VzIGNvdXJzZXM9e2NvdXJzZXN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBTZWVNb3JlQ291cnNlc0V4YW1wbGVzID0gVGVtcGxhdGUuYmluZCh7fSk7XG4iXSwibmFtZXMiOlsiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmciLCJhcmdUeXBlIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImlubmVyIiwiYXBwbHkiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsImluY2x1ZGVzIiwia2V5IiwiY2FsbCIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJjcmVhdGVUaHVua01pZGRsZXdhcmUiLCJleHRyYUFyZ3VtZW50IiwiX3JlZiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiYWN0aW9uIiwiX19lc01vZHVsZSIsInRodW5rIiwid2l0aEV4dHJhQXJndW1lbnQiLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydEJ5U2VsZWN0b3IiLCJpbnNlcnQiLCJzdHlsZSIsInRhcmdldCIsImdldFRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsInJlbW92ZVN0eWxlRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiY291cnNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwiY29tcG9uZW50IiwiU2VlTW9yZUNvdXJzZXMiLCJTZWVNb3JlQ291cnNlc0V4YW1wbGVzIiwiVGVtcGxhdGUiLCJhcmdzIiwiUHJvdmlkZXIiLCJzdG9yZSIsInJlZHV4U3RvcmUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==