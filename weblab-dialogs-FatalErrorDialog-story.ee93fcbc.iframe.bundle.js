"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[185],{"./src/templates/SafeMarkdown.jsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _propTypes=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_redactableMarkdown=_interopRequireDefault(__webpack_require__("./node_modules/@code-dot-org/redactable-markdown/dist/main.js")),_remarkPlugins=__webpack_require__("./node_modules/@code-dot-org/remark-plugins/src/index.js"),_remarkRehype=_interopRequireDefault(__webpack_require__("./node_modules/remark-rehype/index.js")),_rehypeRaw=_interopRequireDefault(__webpack_require__("./node_modules/rehype-raw/index.js")),_rehypeSanitize=_interopRequireDefault(__webpack_require__("./node_modules/rehype-sanitize/index.js")),_rehypeReact=_interopRequireDefault(__webpack_require__("./node_modules/rehype-react/index.js")),_github=_interopRequireDefault(__webpack_require__("./node_modules/hast-util-sanitize/lib/github.json")),_externalLinks=_interopRequireDefault(__webpack_require__("./src/templates/plugins/externalLinks.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}var SafeMarkdown=function(_React$Component){function SafeMarkdown(){return _React$Component.apply(this,arguments)||this}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(SafeMarkdown,_React$Component),SafeMarkdown.prototype.render=function render(){var rendered=(this.props.openExternalLinksInNewTab?markdownToReactExternalLinks:markdownToReact).processSync(this.props.markdown).contents,markdownProps={};return this.props.className&&(markdownProps.className=this.props.className),rendered&&"div"===rendered.type&&!Object.keys(markdownProps).length?rendered:_react.default.createElement("div",markdownProps,rendered)},SafeMarkdown}(_react.default.Component);!function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(SafeMarkdown,"propTypes",{markdown:_propTypes.default.string.isRequired,openExternalLinksInNewTab:_propTypes.default.bool,className:_propTypes.default.string});var schema=Object.assign({},_github.default);schema.attributes.img.push("height","width"),schema.tagNames.push("span"),schema.attributes.span=["dataUrl","className"],schema.attributes["*"].push("style","className"),schema.attributes.b=["dataId"],schema.clobber=[];var blocklyTags=["block","functional_input","mutation","next","statement","title","field","value","xml"];schema.tagNames=schema.tagNames.concat(blocklyTags);var blocklyComponentWrappers={};blocklyTags.forEach((function(tag){schema.attributes[tag]=["block_text","id","inline","name","type"],blocklyComponentWrappers[tag]=function(props){var BlocklyElement=tag;return _react.default.createElement(BlocklyElement,_extends({is:tag},props))}}));var markdownToReact=_redactableMarkdown.default.create().getParser().use([_remarkPlugins.clickableText,_remarkPlugins.expandableImages,_remarkPlugins.visualCodeBlock,_remarkPlugins.xmlAsTopLevelBlock,_remarkPlugins.details]).use(_remarkRehype.default,{allowDangerousHTML:!0}).use(_rehypeRaw.default).use(_rehypeSanitize.default,schema).use(_rehypeReact.default,{createElement:_react.default.createElement,components:blocklyComponentWrappers}),markdownToReactExternalLinks=markdownToReact().use(_externalLinks.default,{links:"all"}),_default=SafeMarkdown;exports.default=_default,module.exports=exports.default},"./src/templates/plugins/externalLinks.js":(__unused_webpack_module,exports)=>{function isExternalLink(url){return!/https?:\/\/([^.]+\.)*code.org(:[0-9]+)?\//.test(function fullyQualified(path){return(a=a||document.createElement("a")).href=path,a.href}(url))}var a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function externalLinks(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},tokenizers=this.Parser.prototype.inlineTokenizers,original=tokenizers.link,all="all"===options.links;tokenizers.link=function(eat,value,silent){var link=original.call(this,eat,value,silent);if(link&&"link"===link.type&&(all||isExternalLink(link.url))){link.data=link.data||{},link.data.hProperties=link.data.hProperties||{};var props=link.data.hProperties;props.target=props.target||"_blank",props.rel="noreferrer noopener"}return link},tokenizers.link.locator=original.locator},exports.isExternalLink=isExternalLink},"./src/weblab/SupportArticleMarkdown.jsx":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function SupportArticleMarkdown(){return _react.default.createElement(_SafeMarkdown.default,{markdown:_locale.default.troubleshootingSupport({url:_constants.SUPPORT_ARTICLE_URL}),openExternalLinksInNewTab:!0})};var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_locale=_interopRequireDefault(__webpack_require__("./src/weblab/locale-do-not-import.js")),_SafeMarkdown=_interopRequireDefault(__webpack_require__("./src/templates/SafeMarkdown.jsx")),_constants=__webpack_require__("./src/weblab/constants.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=exports.default},"./src/weblab/constants.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SUPPORT_ARTICLE_URL=exports.FatalErrorType=exports.FILE_SYSTEM_ERROR=exports.BRAMBLE_READY_STATE=void 0;var _utils=__webpack_require__("./src/utils.js");exports.SUPPORT_ARTICLE_URL="https://support.code.org/hc/en-us/articles/360016804871";var FatalErrorType=(0,_utils.makeEnum)("Default","LoadFailure","ResetFailure");exports.FatalErrorType=FatalErrorType;exports.FILE_SYSTEM_ERROR="EFILESYSTEMERROR";exports.BRAMBLE_READY_STATE="bramble:readyToMount"},"./src/weblab/dialogs/FatalErrorDialog.jsx":(module,exports,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=FatalErrorDialog;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_propTypes=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_locale=_interopRequireDefault(__webpack_require__("./src/util/locale-do-not-import.js")),_locale2=_interopRequireDefault(__webpack_require__("./src/weblab/locale-do-not-import.js")),_StylizedBaseDialog=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./src/componentLibrary/StylizedBaseDialog.jsx")),_SupportArticleMarkdown=_interopRequireDefault(__webpack_require__("./src/weblab/SupportArticleMarkdown.jsx")),_utils=__webpack_require__("./src/utils.js"),_excluded=["isOpen","errorMessage","handleClose","handleResetProject"];function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FatalErrorDialog(_ref){var isOpen=_ref.isOpen,errorMessage=_ref.errorMessage,handleClose=_ref.handleClose,handleResetProject=_ref.handleResetProject,props=_objectWithoutProperties(_ref,_excluded),body=_react.default.createElement("div",null,_react.default.createElement("p",null,errorMessage),_react.default.createElement(_SupportArticleMarkdown.default,null)),footerButtons=[_react.default.createElement(_StylizedBaseDialog.FooterButton,{text:_locale.default.tryAgain(),onClick:_utils.reload,key:"cancel",type:"cancel"}),_react.default.createElement(_StylizedBaseDialog.FooterButton,{text:_locale2.default.reset(),onClick:handleResetProject,key:"reset",color:"red"}),_react.default.createElement(_StylizedBaseDialog.FooterButton,{text:_locale.default.dismiss(),onClick:handleClose,key:"confirm",type:"confirm"})];return _react.default.createElement(_StylizedBaseDialog.default,_extends({},props,{isOpen,title:_locale.default.errorOccurredTitle(),body,handleClose,renderFooter:function renderFooter(){return footerButtons}}))}FatalErrorDialog.propTypes={isOpen:_propTypes.default.bool.isRequired,errorMessage:_propTypes.default.string.isRequired,handleClose:_propTypes.default.func.isRequired,handleResetProject:_propTypes.default.func.isRequired},module.exports=exports.default},"./src/weblab/dialogs/FatalErrorDialog.story.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Basic=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_FatalErrorDialog=_interopRequireDefault(__webpack_require__("./src/weblab/dialogs/FatalErrorDialog.jsx"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={component:_FatalErrorDialog.default};exports.default=_default;exports.Basic=function Basic(){return _react.default.createElement(_FatalErrorDialog.default,{isOpen:!0,errorMessage:"Web Lab failed to load",handleClose:(0,_addonActions.action)("close"),handleResetProject:(0,_addonActions.action)("resetting project"),hideBackdrop:!0})}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VibGFiLWRpYWxvZ3MtRmF0YWxFcnJvckRpYWxvZy1zdG9yeS41ZGNiMGUyNC5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJvUEFBQSxpR0FDQSxvRkFFQSxpSUFFQSwrRkFRQSxtR0FDQSw2RkFDQSx1R0FDQSxpR0FDQSx5R0FFQSx1Ryw2aUJBT01BLGFBQUFBLFNBQUFBLGtCLDJUQU9KQyxPQUFBLFNBQUFBLFNBS0UsSUFJTUMsVUFKU0MsS0FBS0MsTUFBTUMsMEJBQ3RCQyw2QkFDQUMsaUJBRW9CQyxZQUFZTCxLQUFLQyxNQUFNSyxVQUFVQyxTQUVuREMsY0FBZ0IsQ0FBQyxFQVF2QixPQVBJUixLQUFLQyxNQUFNUSxZQUNiRCxjQUFjQyxVQUFZVCxLQUFLQyxNQUFNUSxXQU9yQ1YsVUFDa0IsUUFBbEJBLFNBQVNXLE9BQ1JDLE9BQU9DLEtBQUtKLGVBQWVLLE9BRXJCZCxTQUVBLG1DQUFTUyxjQUFnQlQsU0FFbkMsRSxhQW5DR0YsQ0FBcUJpQixPQUFBQSxRQUFNQyxZLCtKQUEzQmxCLGFBQUFBLFlBQ2UsQ0FDakJTLFNBQVVVLFdBQUFBLFFBQVVDLE9BQU9DLFdBQzNCaEIsMEJBQTJCYyxXQUFBQSxRQUFVRyxLQUNyQ1YsVUFBV08sV0FBQUEsUUFBVUMsU0FxQ3pCLElBQU1HLE9BQVNULE9BQU9VLE9BQU8sQ0FBQyxFQUFHQyxRQUFBQSxTQUlqQ0YsT0FBT0csV0FBV0MsSUFBSUMsS0FBSyxTQUFVLFNBR3JDTCxPQUFPTSxTQUFTRCxLQUFLLFFBQ3JCTCxPQUFPRyxXQUFXSSxLQUFPLENBQUMsVUFBVyxhQUtyQ1AsT0FBT0csV0FBVyxLQUFLRSxLQUFLLFFBQVMsYUFHckNMLE9BQU9HLFdBQVAsRUFBeUIsQ0FBQyxVQUcxQkgsT0FBT1EsUUFBVSxHQUNqQixJQUFNQyxZQUFjLENBQ2xCLFFBQ0EsbUJBQ0EsV0FDQSxPQUNBLFlBQ0EsUUFDQSxRQUNBLFFBQ0EsT0FFRlQsT0FBT00sU0FBV04sT0FBT00sU0FBU0ksT0FBT0QsYUFDekMsSUFBSUUs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QUFELENBQ0VDLEtBQU1DLFFBQUFBLFFBQVdPLFVBQ2pCTCxRQUFTUixZQUNUVSxJQUFJLFVBQ0p2RixLQUFLLGFBSVQsT0FDRSw2QkFBQyw0QkFBRCxZQUNNVCxNQUROLENBRUVvRixPQUNBZ0IsTUFBT1IsUUFBQUEsUUFBV1MscUJBQ2xCYixLQUNBRixZQUNBZ0IsYUFBYywrQkFBTWIsYUFBTixJQUduQixDQUVETixpQkFBaUJvQixVQUFZLENBQzNCbkIsT0FBUXJFLFdBQUFBLFFBQVVHLEtBQUtELFdBQ3ZCb0UsYUFBY3RFLFdBQUFBLFFBQVVDLE9BQU9DLFdBQy9CcUUsWUFBYXZFLFdBQUFBLFFBQVV5RixLQUFLdkYsV0FDNUJzRSxtQkFBb0J4RSxXQUFBQSxRQUFVeUYsS0FBS3ZGLFkscU9DN0RyQyx3RkFDQSwyRkFDQSwyRywrRkFFZSxDQUNid0YsVUFBV3RCLGtCQUFBQSxTLHVDQUdRLFNBQVJ1QixRQUFRLE9BQ25CLDZCQUFDLDBCQUFELENBQ0V0QixRQUFNLEVBQ05DLGFBQWEseUJBQ2JDLGFBQWEsRUFBQXFCLGNBQUFBLFFBQU8sU0FDcEJwQixvQkFBb0IsRUFBQW9CLGNBQUFBLFFBQU8scUJBQzNCQyxjQUFZLEdBTkssQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy90ZW1wbGF0ZXMvU2FmZU1hcmtkb3duLmpzeCIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvdGVtcGxhdGVzL3BsdWdpbnMvZXh0ZXJuYWxMaW5rcy5qcyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvd2VibGFiL1N1cHBvcnRBcnRpY2xlTWFya2Rvd24uanN4Iiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy93ZWJsYWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy93ZWJsYWIvZGlhbG9ncy9GYXRhbEVycm9yRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvd2VibGFiL2RpYWxvZ3MvRmF0YWxFcnJvckRpYWxvZy5zdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhcnNlciBmcm9tICdAY29kZS1kb3Qtb3JnL3JlZGFjdGFibGUtbWFya2Rvd24nO1xuXG5pbXBvcnQge1xuICBkZXRhaWxzLFxuICBjbGlja2FibGVUZXh0LFxuICBleHBhbmRhYmxlSW1hZ2VzLFxuICB2aXN1YWxDb2RlQmxvY2ssXG4gIHhtbEFzVG9wTGV2ZWxCbG9jayxcbn0gZnJvbSAnQGNvZGUtZG90LW9yZy9yZW1hcmstcGx1Z2lucyc7XG5cbmltcG9ydCByZW1hcmtSZWh5cGUgZnJvbSAncmVtYXJrLXJlaHlwZSc7XG5pbXBvcnQgcmVoeXBlUmF3IGZyb20gJ3JlaHlwZS1yYXcnO1xuaW1wb3J0IHJlaHlwZVNhbml0aXplIGZyb20gJ3JlaHlwZS1zYW5pdGl6ZSc7XG5pbXBvcnQgcmVoeXBlUmVhY3QgZnJvbSAncmVoeXBlLXJlYWN0JztcbmltcG9ydCBkZWZhdWx0U2FuaXRpemF0aW9uU2NoZW1hIGZyb20gJ2hhc3QtdXRpbC1zYW5pdGl6ZS9saWIvZ2l0aHViLmpzb24nO1xuXG5pbXBvcnQgZXh0ZXJuYWxMaW5rcyBmcm9tICcuL3BsdWdpbnMvZXh0ZXJuYWxMaW5rcyc7XG5cbi8qKlxuICogQmFzaWMgY29tcG9uZW50IGZvciByZW5kZXJpbmcgYSBtYXJrZG93biBzdHJpbmcgYXMgSFRNTCwgd2l0aCBzYW5pdGl6YXRpb24uXG4gKiBDYW4gc2FmZWx5IHJlbmRlciBtYXJrZG93biBldmVuIGZyb20gdW50cnVzdGVkIHNvdXJjZXMsIHdpdGhvdXQgcG90ZW50aWFsbHlcbiAqIGV4cG9zaW5nIHVzIHRvIGFuIFhTUyBpbmplY3Rpb24uXG4gKi9cbmNsYXNzIFNhZmVNYXJrZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbWFya2Rvd246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvcGVuRXh0ZXJuYWxMaW5rc0luTmV3VGFiOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIFdlIG9ubHkgb3BlbiBleHRlcm5hbCBsaW5rcyBpbiBhIG5ldyB0YWIgaWYgaXQncyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgIC8vIHRoYXQgd2UgZG8gc287IHRoaXMgaXMgYWJzb2x1dGVseSBub3Qgc29tZXRoaW5nIHdlIHdhbnQgdG8gZG8gYXMgYVxuICAgIC8vIGdlbmVyYWwgcHJhY3RpY2UsIGJ1dCB1bmZvcnR1bmF0ZWx5IHRoZXJlIGFyZSBzb21lIHNpdHVhdGlvbnMgaW4gd2hpY2hcbiAgICAvLyBpdCBpcyBjdXJyZW50bHkgYSByZXF1aXJlbWVudC5cbiAgICBjb25zdCBwYXJzZXIgPSB0aGlzLnByb3BzLm9wZW5FeHRlcm5hbExpbmtzSW5OZXdUYWJcbiAgICAgID8gbWFya2Rvd25Ub1JlYWN0RXh0ZXJuYWxMaW5rc1xuICAgICAgOiBtYXJrZG93blRvUmVhY3Q7XG5cbiAgICBjb25zdCByZW5kZXJlZCA9IHBhcnNlci5wcm9jZXNzU3luYyh0aGlzLnByb3BzLm1hcmtkb3duKS5jb250ZW50cztcblxuICAgIGNvbnN0IG1hcmtkb3duUHJvcHMgPSB7fTtcbiAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgIG1hcmtkb3duUHJvcHMuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgfVxuICAgIC8vIHJlaHlwZS1yZWFjdCB3aWxsIG9ubHkgd3JhcCB0aGUgY29tcGlsZWQgbWFya2Rvd24gaW4gYSA8ZGl2PiB0YWdcbiAgICAvLyBpZiBpdCBuZWVkcyB0byAoaWUsIGlmIHRoZXJlIHdvdWxkIG90aGVyd2lzZSBiZSBtdWx0aXBsZSBlbGVtZW50c1xuICAgIC8vIHJldHVybmVkKSBvciB3ZSdyZSBhc3NpZ25pbmcgcHJvcHMuIFdlIHByZWZlciBjb25zaXN0ZW5jeSBvdmVyIGZsZXhpYmlsaXR5LFxuICAgIC8vIHNvIGhlcmUgd2Ugd3JhcCB0aGUgcmVzdWx0IGluIGEgZGl2IGlmIGl0IHdhc24ndCBhbHJlYWR5XG4gICAgaWYgKFxuICAgICAgcmVuZGVyZWQgJiZcbiAgICAgIHJlbmRlcmVkLnR5cGUgPT09ICdkaXYnICYmXG4gICAgICAhT2JqZWN0LmtleXMobWFya2Rvd25Qcm9wcykubGVuZ3RoXG4gICAgKSB7XG4gICAgICByZXR1cm4gcmVuZGVyZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2IHsuLi5tYXJrZG93blByb3BzfT57cmVuZGVyZWR9PC9kaXY+O1xuICAgIH1cbiAgfVxufVxuXG4vLyBjcmVhdGUgY3VzdG9tIHNhbml0aXphdGlvbiBzY2hlbWEgYXMgcGVyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ludGF4LXRyZWUvaGFzdC11dGlsLXNhbml0aXplI3NjaGVtYVxuLy8gdG8gc3VwcG9ydCBvdXIgY3VzdG9tIHN5bnRheGVzXG5jb25zdCBzY2hlbWEgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U2FuaXRpemF0aW9uU2NoZW1hKTtcblxuLy8gV2UgdXNlIGEgX2xvdF8gb2YgaW1hZ2UgZm9ybWF0dGluZyBzdHVmZiBpbiBvdXJcbi8vIGluc3RydWN0aW9ucywgcGFydGljdWxhcmx5IGluIENTUFxuc2NoZW1hLmF0dHJpYnV0ZXMuaW1nLnB1c2goJ2hlaWdodCcsICd3aWR0aCcpO1xuXG4vLyBBZGQgc3VwcG9ydCBmb3IgZXhwYW5kYWJsZUltYWdlc1xuc2NoZW1hLnRhZ05hbWVzLnB1c2goJ3NwYW4nKTtcbnNjaGVtYS5hdHRyaWJ1dGVzLnNwYW4gPSBbJ2RhdGFVcmwnLCAnY2xhc3NOYW1lJ107XG5cbi8vIEFkZCBzdXBwb3J0IGZvciBpbmxpbmUgc3R5bGVzIChncm9zcylcbi8vIFRPRE8gcmVwbGFjZSBhbGwgaW5saW5lIHN0eWxlcyBpbiBvdXIgY3VycmljdWx1bSBjb250ZW50IHdpdGhcbi8vIHNlbWFudGljYWxseS1zaWduaWZpY2FudCBjb250ZW50XG5zY2hlbWEuYXR0cmlidXRlc1snKiddLnB1c2goJ3N0eWxlJywgJ2NsYXNzTmFtZScpO1xuXG4vLyBDbGlja2FibGVUZXh0IHVzZXMgZGF0YS1pZCBvbiBhIGJvbGQgdGFnLlxuc2NoZW1hLmF0dHJpYnV0ZXNbJ2InXSA9IFsnZGF0YUlkJ107XG5cbi8vIEFkZCBzdXBwb3J0IGZvciBCbG9ja2x5IFhNTFxuc2NoZW1hLmNsb2JiZXIgPSBbXTtcbmNvbnN0IGJsb2NrbHlUYWdzID0gW1xuICAnYmxvY2snLFxuICAnZnVuY3Rpb25hbF9pbnB1dCcsXG4gICdtdXRhdGlvbicsXG4gICduZXh0JyxcbiAgJ3N0YXRlbWVudCcsXG4gICd0aXRsZScsXG4gICdmaWVsZCcsXG4gICd2YWx1ZScsXG4gICd4bWwnLFxuXTtcbnNjaGVtYS50YWdOYW1lcyA9IHNjaGVtYS50YWdOYW1lcy5jb25jYXQoYmxvY2tseVRhZ3MpO1xubGV0IGJsb2NrbHlDb21wb25lbnRXcmFwcGVycyA9IHt9O1xuYmxvY2tseVRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICBzY2hlbWEuYXR0cmlidXRlc1t0YWddID0gWydibG9ja190ZXh0JywgJ2lkJywgJ2lubGluZScsICduYW1lJywgJ3R5cGUnXTtcblxuICAvLyBDcmVhdGUgYSBSZWFjdCBjb21wb25lbnQgdG8gd3JhcCBlYWNoIEJsb2NrbHkgdGFnLiBTaW5jZSB0aGVzZSBlbGVtZW50cyB1bHRpbWF0ZWx5XG4gIC8vIHJlbmRlciBhcyBSZWFjdCBjb21wb25lbnRzLCBjcmVhdGluZyBhIHdyYXBwZXIgbWFrZXMgdGhlbSB2YWxpZCAod2hlcmVhcyA8eG1sPlxuICAvLyBpcyBub3QgYSB2YWxpZCBSZWFjdCB0YWcpLlxuICBibG9ja2x5Q29tcG9uZW50V3JhcHBlcnNbdGFnXSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGNvbnN0IEJsb2NrbHlFbGVtZW50ID0gdGFnO1xuICAgIC8vIFRoZSBcImlzXCIgYXR0cmlidXRlIHByZXZlbnRzIFJlYWN0IGZyb20gd2FybmluZyBhYm91dCB1bnJlY29nbml6ZWQgdGFnczpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzExMTg0I2lzc3VlY29tbWVudC0zMzU5NDI0MzlcbiAgICByZXR1cm4gPEJsb2NrbHlFbGVtZW50IGlzPXt0YWd9IHsuLi5wcm9wc30gLz47XG4gIH07XG59KTtcblxuY29uc3QgbWFya2Rvd25Ub1JlYWN0ID0gUGFyc2VyLmNyZWF0ZSgpXG4gIC5nZXRQYXJzZXIoKVxuICAvLyBpbmNsdWRlIGN1c3RvbSBwbHVnaW5zXG4gIC51c2UoW1xuICAgIGNsaWNrYWJsZVRleHQsXG4gICAgZXhwYW5kYWJsZUltYWdlcyxcbiAgICB2aXN1YWxDb2RlQmxvY2ssXG4gICAgeG1sQXNUb3BMZXZlbEJsb2NrLFxuICAgIGRldGFpbHMsXG4gIF0pXG4gIC8vIGNvbnZlcnQgbWFya2Rvd24gdG8gYW4gSFRNTCBBYnN0cmFjdCBTeW50YXggVHJlZSAoSEFTVClcbiAgLnVzZShyZW1hcmtSZWh5cGUsIHtcbiAgICAvLyBpbmNsdWRlIGFueSByYXcgSFRNTCBpbiB0aGUgbWFya2Rvd24gYXMgcmF3IEhUTUwgbm9kZXMgaW4gdGhlIEhBU1RcbiAgICBhbGxvd0Rhbmdlcm91c0hUTUw6IHRydWUsXG4gIH0pXG4gIC8vIHBhcnNlIHRoZSByYXcgSFRNTCBub2RlcyBpbiB0aGUgSEFTVCB0byBhY3R1YWwgSEFTVCBub2Rlc1xuICAudXNlKHJlaHlwZVJhdylcbiAgLy8gc2FuaXRpemUgdGhlIEhBU1RcbiAgLnVzZShyZWh5cGVTYW5pdGl6ZSwgc2NoZW1hKVxuICAvLyBjb252ZXJ0IHRoZSBIQVNUIHRvIFJlYWN0XG4gIC51c2UocmVoeXBlUmVhY3QsIHtcbiAgICBjcmVhdGVFbGVtZW50OiBSZWFjdC5jcmVhdGVFbGVtZW50LFxuICAgIC8vIFVzZSBSZWFjdCBjb21wb25lbnQgd3JhcHBlcnMgZm9yIEJsb2NrbHkgWE1MIGVsZW1lbnRzIHRvIHByZXZlbnRcbiAgICAvLyBSZWFjdCBmcm9tIHdhcm5pbmcgdXMgYWJvdXQgaW52YWxpZCBjb21wb25lbnRzLlxuICAgIGNvbXBvbmVudHM6IGJsb2NrbHlDb21wb25lbnRXcmFwcGVycyxcbiAgfSk7XG5cbmNvbnN0IG1hcmtkb3duVG9SZWFjdEV4dGVybmFsTGlua3MgPSBtYXJrZG93blRvUmVhY3QoKS51c2UoZXh0ZXJuYWxMaW5rcywge1xuICBsaW5rczogJ2FsbCcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZU1hcmtkb3duO1xuIiwiLyoqXG4gKiBPcGVuIGV4dGVybmFsIGxpbmtzIGluIGEgbmV3IHRhYi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXh0ZXJuYWxMaW5rcyhvcHRpb25zID0ge30pIHtcbiAgY29uc3QgUGFyc2VyID0gdGhpcy5QYXJzZXI7XG4gIGNvbnN0IHRva2VuaXplcnMgPSBQYXJzZXIucHJvdG90eXBlLmlubGluZVRva2VuaXplcnM7XG4gIGNvbnN0IG9yaWdpbmFsID0gdG9rZW5pemVycy5saW5rO1xuICBjb25zdCBhbGwgPSBvcHRpb25zLmxpbmtzID09PSAnYWxsJztcblxuICB0b2tlbml6ZXJzLmxpbmsgPSBmdW5jdGlvbiAoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gICAgY29uc3QgbGluayA9IG9yaWdpbmFsLmNhbGwodGhpcywgZWF0LCB2YWx1ZSwgc2lsZW50KTtcbiAgICBpZiAobGluayAmJiBsaW5rLnR5cGUgPT09ICdsaW5rJyAmJiAoYWxsIHx8IGlzRXh0ZXJuYWxMaW5rKGxpbmsudXJsKSkpIHtcbiAgICAgIGxpbmsuZGF0YSA9IGxpbmsuZGF0YSB8fCB7fTtcbiAgICAgIGxpbmsuZGF0YS5oUHJvcGVydGllcyA9IGxpbmsuZGF0YS5oUHJvcGVydGllcyB8fCB7fTtcblxuICAgICAgY29uc3QgcHJvcHMgPSBsaW5rLmRhdGEuaFByb3BlcnRpZXM7XG4gICAgICBwcm9wcy50YXJnZXQgPSBwcm9wcy50YXJnZXQgfHwgJ19ibGFuayc7XG4gICAgICBwcm9wcy5yZWwgPSAnbm9yZWZlcnJlciBub29wZW5lcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbms7XG4gIH07XG4gIHRva2VuaXplcnMubGluay5sb2NhdG9yID0gb3JpZ2luYWwubG9jYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXh0ZXJuYWxMaW5rKHVybCkge1xuICByZXR1cm4gIS9odHRwcz86XFwvXFwvKFteLl0rXFwuKSpjb2RlLm9yZyg6WzAtOV0rKT9cXC8vLnRlc3QoZnVsbHlRdWFsaWZpZWQodXJsKSk7XG59XG5cbmxldCBhO1xuZnVuY3Rpb24gZnVsbHlRdWFsaWZpZWQocGF0aCkge1xuICBhID0gYSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuaHJlZiA9IHBhdGg7XG4gIHJldHVybiBhLmhyZWY7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdlYmxhYkkxOG4gZnJvbSAnQGNkby93ZWJsYWIvbG9jYWxlJztcbmltcG9ydCBTYWZlTWFya2Rvd24gZnJvbSAnQGNkby9hcHBzL3RlbXBsYXRlcy9TYWZlTWFya2Rvd24nO1xuaW1wb3J0IHtTVVBQT1JUX0FSVElDTEVfVVJMfSBmcm9tICdAY2RvL2FwcHMvd2VibGFiL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1cHBvcnRBcnRpY2xlTWFya2Rvd24oKSB7XG4gIHJldHVybiAoXG4gICAgPFNhZmVNYXJrZG93blxuICAgICAgbWFya2Rvd249e3dlYmxhYkkxOG4udHJvdWJsZXNob290aW5nU3VwcG9ydCh7dXJsOiBTVVBQT1JUX0FSVElDTEVfVVJMfSl9XG4gICAgICBvcGVuRXh0ZXJuYWxMaW5rc0luTmV3VGFiXG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCB7bWFrZUVudW19IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRfQVJUSUNMRV9VUkwgPVxuICAnaHR0cHM6Ly9zdXBwb3J0LmNvZGUub3JnL2hjL2VuLXVzL2FydGljbGVzLzM2MDAxNjgwNDg3MSc7XG5cbmV4cG9ydCBjb25zdCBGYXRhbEVycm9yVHlwZSA9IG1ha2VFbnVtKFxuICAnRGVmYXVsdCcsXG4gICdMb2FkRmFpbHVyZScsXG4gICdSZXNldEZhaWx1cmUnXG4pO1xuXG5leHBvcnQgY29uc3QgRklMRV9TWVNURU1fRVJST1IgPSAnRUZJTEVTWVNURU1FUlJPUic7XG5leHBvcnQgY29uc3QgQlJBTUJMRV9SRUFEWV9TVEFURSA9ICdicmFtYmxlOnJlYWR5VG9Nb3VudCc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjb21tb25JMThuIGZyb20gJ0BjZG8vbG9jYWxlJztcbmltcG9ydCB3ZWJsYWJJMThuIGZyb20gJ0BjZG8vd2VibGFiL2xvY2FsZSc7XG5pbXBvcnQgU3R5bGl6ZWRCYXNlRGlhbG9nLCB7XG4gIEZvb3RlckJ1dHRvbixcbn0gZnJvbSAnQGNkby9hcHBzL2NvbXBvbmVudExpYnJhcnkvU3R5bGl6ZWRCYXNlRGlhbG9nJztcbmltcG9ydCBTdXBwb3J0QXJ0aWNsZU1hcmtkb3duIGZyb20gJ0BjZG8vYXBwcy93ZWJsYWIvU3VwcG9ydEFydGljbGVNYXJrZG93bic7XG5pbXBvcnQge3JlbG9hZH0gZnJvbSAnQGNkby9hcHBzL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmF0YWxFcnJvckRpYWxvZyh7XG4gIGlzT3BlbixcbiAgZXJyb3JNZXNzYWdlLFxuICBoYW5kbGVDbG9zZSxcbiAgaGFuZGxlUmVzZXRQcm9qZWN0LFxuICAuLi5wcm9wc1xufSkge1xuICBjb25zdCBib2R5ID0gKFxuICAgIDxkaXY+XG4gICAgICA8cD57ZXJyb3JNZXNzYWdlfTwvcD5cbiAgICAgIDxTdXBwb3J0QXJ0aWNsZU1hcmtkb3duIC8+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgZm9vdGVyQnV0dG9ucyA9IFtcbiAgICA8Rm9vdGVyQnV0dG9uXG4gICAgICB0ZXh0PXtjb21tb25JMThuLnRyeUFnYWluKCl9XG4gICAgICBvbkNsaWNrPXtyZWxvYWR9XG4gICAgICBrZXk9XCJjYW5jZWxcIlxuICAgICAgdHlwZT1cImNhbmNlbFwiXG4gICAgLz4sXG4gICAgPEZvb3RlckJ1dHRvblxuICAgICAgdGV4dD17d2VibGFiSTE4bi5yZXNldCgpfVxuICAgICAgb25DbGljaz17aGFuZGxlUmVzZXRQcm9qZWN0fVxuICAgICAga2V5PVwicmVzZXRcIlxuICAgICAgY29sb3I9XCJyZWRcIlxuICAgIC8+LFxuICAgIDxGb290ZXJCdXR0b25cbiAgICAgIHRleHQ9e2NvbW1vbkkxOG4uZGlzbWlzcygpfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICBrZXk9XCJjb25maXJtXCJcbiAgICAgIHR5cGU9XCJjb25maXJtXCJcbiAgICAvPixcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsaXplZEJhc2VEaWFsb2dcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgdGl0bGU9e2NvbW1vbkkxOG4uZXJyb3JPY2N1cnJlZFRpdGxlKCl9XG4gICAgICBib2R5PXtib2R5fVxuICAgICAgaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgcmVuZGVyRm9vdGVyPXsoKSA9PiBmb290ZXJCdXR0b25zfVxuICAgIC8+XG4gICk7XG59XG5cbkZhdGFsRXJyb3JEaWFsb2cucHJvcFR5cGVzID0ge1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGVycm9yTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYW5kbGVDbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlUmVzZXRQcm9qZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2FjdGlvbn0gZnJvbSAnQHN0b3J5Ym9vay9hZGRvbi1hY3Rpb25zJztcbmltcG9ydCBGYXRhbEVycm9yRGlhbG9nIGZyb20gJy4vRmF0YWxFcnJvckRpYWxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBGYXRhbEVycm9yRGlhbG9nLFxufTtcblxuZXhwb3J0IGNvbnN0IEJhc2ljID0gKCkgPT4gKFxuICA8RmF0YWxFcnJvckRpYWxvZ1xuICAgIGlzT3BlblxuICAgIGVycm9yTWVzc2FnZT1cIldlYiBMYWIgZmFpbGVkIHRvIGxvYWRcIlxuICAgIGhhbmRsZUNsb3NlPXthY3Rpb24oJ2Nsb3NlJyl9XG4gICAgaGFuZGxlUmVzZXRQcm9qZWN0PXthY3Rpb24oJ3Jlc2V0dGluZyBwcm9qZWN0Jyl9XG4gICAgaGlkZUJhY2tkcm9wXG4gIC8+XG4pO1xuIl0sIm5hbWVzIjpbIlNhZmVNYXJrZG93biIsInJlbmRlciIsInJlbmRlcmVkIiwidGhpcyIsInByb3BzIiwib3BlbkV4dGVybmFsTGlua3NJbk5ld1RhYiIsIm1hcmtkb3duVG9SZWFjdEV4dGVybmFsTGlua3MiLCJtYXJrZG93blRvUmVhY3QiLCJwcm9jZXNzU3luYyIsIm1hcmtkb3duIiwiY29udGVudHMiLCJtYXJrZG93blByb3BzIiwiY2xhc3NOYW1lIiwidHlwZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIiwic2NoZW1hIiwiYXNzaWduIiwiZGVmYXVsdFNhbml0aXphdGlvblNjaGVtYSIsImF0dHJpYnV0ZXMiLCJpbWciLCJwdXNoIiwidGFnTmFtZXMiLCJzcGFuIiwiY2xvYmJlciIsImJsb2NrbHlUYWdzIiwiY29uY2F0IiwiYmxvY2tseUNvbXBvbmVudFdyYXBwZXJzIiwiZm9yRWFjaCIsInRhZyIsIkJsb2NrbHlFbGVtZW50IiwiaXMiLCJQYXJzZXIiLCJjcmVhdGUiLCJnZXRQYXJzZXIiLCJ1c2UiLCJjbGlja2FibGVUZXh0IiwiZXhwYW5kYWJsZUltYWdlcyIsInZpc3VhbENvZGVCbG9jayIsInhtbEFzVG9wTGV2ZWxCbG9jayIsImRldGFpbHMiLCJyZW1hcmtSZWh5cGUiLCJhbGxvd0Rhbmdlcm91c0hUTUwiLCJyZWh5cGVSYXciLCJyZWh5cGVTYW5pdGl6ZSIsInJlaHlwZVJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudHMiLCJleHRlcm5hbExpbmtzIiwibGlua3MiLCJpc0V4dGVybmFsTGluayIsInVybCIsInRlc3QiLCJmdWxseVF1YWxpZmllZCIsInBhdGgiLCJhIiwiZG9jdW1lbnQiLCJocmVmIiwib3B0aW9ucyIsInRva2VuaXplcnMiLCJwcm90b3R5cGUiLCJpbmxpbmVUb2tlbml6ZXJzIiwib3JpZ2luYWwiLCJsaW5rIiwiYWxsIiwiZWF0IiwidmFsdWUiLCJzaWxlbnQiLCJjYWxsIiwiZGF0YSIsImhQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicmVsIiwibG9jYXRvciIsIlN1cHBvcnRBcnRpY2xlTWFya2Rvd24iLCJ3ZWJsYWJJMThuIiwidHJvdWJsZXNob290aW5nU3VwcG9ydCIsIlNVUFBPUlRfQVJUSUNMRV9VUkwiLCJGYXRhbEVycm9yVHlwZSIsIm1ha2VFbnVtIiwiRmF0YWxFcnJvckRpYWxvZyIsImlzT3BlbiIsImVycm9yTWVzc2FnZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlUmVzZXRQcm9qZWN0IiwiYm9keSIsImZvb3RlckJ1dHRvbnMiLCJGb290ZXJCdXR0b24iLCJ0ZXh0IiwiY29tbW9uSTE4biIsInRyeUFnYWluIiwib25DbGljayIsInJlbG9hZCIsImtleSIsInJlc2V0IiwiY29sb3IiLCJkaXNtaXNzIiwidGl0bGUiLCJlcnJvck9jY3VycmVkVGl0bGUiLCJyZW5kZXJGb290ZXIiLCJwcm9wVHlwZXMiLCJmdW5jIiwiY29tcG9uZW50IiwiQmFzaWMiLCJhY3Rpb24iLCJoaWRlQmFja2Ryb3AiXSwic291cmNlUm9vdCI6IiJ9