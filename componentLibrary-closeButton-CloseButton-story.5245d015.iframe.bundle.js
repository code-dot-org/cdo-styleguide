"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[5873],{"./src/componentLibrary/common/helpers.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.updatePositionedElementStyles=exports.calculatePositionedElementStyles=exports.getAriaPropsFromProps=void 0;exports.getAriaPropsFromProps=function(props){var ariaProps={};return Object.keys(props).forEach((function(key){key.startsWith("aria-")&&(ariaProps[key]=props[key])})),ariaProps};exports.calculatePositionedElementStyles=function(_a){var nodePosition=_a.nodePosition,positionedElementRef=_a.positionedElementRef,direction=_a.direction,tailOffset=_a.tailOffset,tailLength=_a.tailLength,_b=_a.isPositionFixed,isPositionFixed=void 0!==_b&&_b,styles={};if(nodePosition&&positionedElementRef.current&&"none"!==direction){var rect=nodePosition.getBoundingClientRect(),tooltipRect=positionedElementRef.current.getBoundingClientRect(),scrollY=isPositionFixed?0:window.scrollY,scrollX=isPositionFixed?0:window.scrollX,isLtr="ltr"===(document.documentElement.dir||"ltr"),verticalMiddlePosition=rect.top+scrollY+rect.height/2-tooltipRect.height/2,verticalTopPosition=rect.top+scrollY-tooltipRect.height-tailOffset-tailLength,verticalBottomPosition=rect.top+rect.height+scrollY+tailOffset+tailLength,horizontalMiddlePosition=rect.left+scrollX+rect.width/2-tooltipRect.width/2,horizontalLeftPosition=rect.left+scrollX-tooltipRect.width-tailOffset-tailLength,horizontalRightPosition=rect.right+scrollX+tailOffset+tailLength;switch(direction){case"onRight":styles.top=verticalMiddlePosition,styles.left=isLtr?horizontalRightPosition:horizontalLeftPosition;break;case"onBottom":styles.top=verticalBottomPosition,styles.left=horizontalMiddlePosition;break;case"onLeft":styles.top=verticalMiddlePosition,styles.left=isLtr?horizontalLeftPosition:horizontalRightPosition;break;default:styles.top=verticalTopPosition,styles.left=horizontalMiddlePosition}}return styles};exports.updatePositionedElementStyles=function(_a){var nodePosition=_a.nodePosition,positionedElementRef=_a.positionedElementRef,direction=_a.direction,setPositionedElementStyles=_a.setPositionedElementStyles,tailOffset=_a.tailOffset,tailLength=_a.tailLength,_b=_a.isPositionFixed,isPositionFixed=void 0!==_b&&_b;setPositionedElementStyles((0,exports.calculatePositionedElementStyles)({nodePosition,positionedElementRef,direction,tailOffset,tailLength,isPositionFixed}))}},"./src/componentLibrary/fontAwesomeV6Icon/FontAwesomeV6Icon.tsx":function(__unused_webpack_module,exports,__webpack_require__){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var classnames_1=__importDefault(__webpack_require__("./node_modules/classnames/index.js")),react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),helpers_1=__webpack_require__("./src/componentLibrary/common/helpers.ts"),FontAwesomeV6Icon=function(_a){var iconStyle=_a.iconStyle,iconFamily=_a.iconFamily,iconName=_a.iconName,className=_a.className,title=_a.title,animationType=_a.animationType,rest=__rest(_a,["iconStyle","iconFamily","iconName","className","title","animationType"]),ariaProps=(0,helpers_1.getAriaPropsFromProps)(rest);return react_1.default.createElement("i",__assign({"data-testid":"font-awesome-v6-icon",className:(0,classnames_1.default)(iconFamily&&"fa-".concat(iconFamily),iconStyle&&"fa-".concat(iconStyle),iconName&&"fa-".concat(iconName),!iconFamily&&!iconStyle&&"fa-solid",animationType&&"fa-".concat(animationType),className),title},ariaProps))};exports.default=FontAwesomeV6Icon;try{FontAwesomeV6Icon.displayName="FontAwesomeV6Icon",FontAwesomeV6Icon.__docgenInfo={description:"### Production-ready Checklist:\n* (✔) implementation of component approved by design team;\n* (✔) has storybook, covered with stories and documentation;\n* (✔) has tests: test every prop, every state and every interaction that's js related;\n* (see apps/test/unit/componentLibrary/FontAwesomeV6IconTest.jsx)\n* (?) passes accessibility checks;\n\n###  Status: ```Ready for dev```\n\nDesign System: FontAwesomeV6Icon Component.\nSimple shortcut for FontAwesomeV6 icons. Requires FontAwesomeV6 to be installed.\nNot a part of Design System in Figma initially, but is used in some of Design System components.\nCan can be used in any component in/out of the scope of Design System.",displayName:"FontAwesomeV6Icon",props:{iconStyle:{defaultValue:null,description:"Icon style.\nStyle vs Figma font-weight:\n * solid - 900\n * regular - 400\n * light - 300\n * thin - 100",name:"iconStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"thin"'},{value:'"light"'},{value:'"regular"'}]}},iconFamily:{defaultValue:null,description:"Icon family\n  * brands - for FA brand icons\n  * duotone - for FA duotone icons\n  * kit - for our custom FA kit icons",name:"iconFamily",required:!1,type:{name:"enum",value:[{value:'"brands"'},{value:'"duotone"'},{value:'"kit"'}]}},iconName:{defaultValue:null,description:"Icon name",name:"iconName",required:!0,type:{name:"string"}},animationType:{defaultValue:null,description:"FontAwesome V6 Animation type to use (use it if we want/need to animate icon)",name:"animationType",required:!1,type:{name:"enum",value:[{value:'"flip"'},{value:'"beat"'},{value:'"beat-fade"'},{value:'"bounce"'},{value:'"fade"'},{value:'"shake"'},{value:'"spin"'},{value:'"spin-pulse"'}]}},title:{defaultValue:null,description:"Icon title.\nTitle should be used for semantic icons. If not given, the screenreader will not read the icon\nSee https://fontawesome.com/docs/web/dig-deeper/accessibility#icons-used-as-semantic-elements",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/componentLibrary/fontAwesomeV6Icon/FontAwesomeV6Icon.tsx#FontAwesomeV6Icon"]={docgenInfo:FontAwesomeV6Icon.__docgenInfo,name:"FontAwesomeV6Icon",path:"src/componentLibrary/fontAwesomeV6Icon/FontAwesomeV6Icon.tsx#FontAwesomeV6Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/componentLibrary/fontAwesomeV6Icon/index.ts":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var FontAwesomeV6Icon_1=__webpack_require__("./src/componentLibrary/fontAwesomeV6Icon/FontAwesomeV6Icon.tsx");Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return __importDefault(FontAwesomeV6Icon_1).default}})},"./src/componentLibrary/closeButton/CloseButton.story.tsx":function(__unused_webpack_module,exports,__webpack_require__){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.GroupOfSizesOfCloseButton=exports.GroupOfColorsOfCloseButton=exports.DefaultCloseButton=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),index_1=__importDefault(__webpack_require__("./src/componentLibrary/closeButton/index.ts"));exports.default={title:"DesignSystem/CloseButton",component:index_1.default};var MultipleTemplate=function(args){var _a;return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("p",null,"* Margins on this screen do not represent Component's margins, and are only added to improve storybook view *"),react_1.default.createElement("p",null,"Multiple CloseButtons:"),react_1.default.createElement("div",{style:{display:"flex",gap:"20px"}},null===(_a=args.components)||void 0===_a?void 0:_a.map((function(componentArg,index){return react_1.default.createElement(index_1.default,__assign({key:index},componentArg))}))))};exports.DefaultCloseButton=function(args){return react_1.default.createElement(index_1.default,__assign({},args))}.bind({}),exports.DefaultCloseButton.args={onClick:function(){return null},"aria-label":"Close"},exports.GroupOfColorsOfCloseButton=MultipleTemplate.bind({}),exports.GroupOfColorsOfCloseButton.args={components:[{onClick:function(){return null},color:"light","aria-label":"Close light"},{onClick:function(){return null},color:"dark","aria-label":"Close dark"}]},exports.GroupOfSizesOfCloseButton=MultipleTemplate.bind({}),exports.GroupOfSizesOfCloseButton.args={components:[{onClick:function(){return null},size:"m","aria-label":"Close m"},{onClick:function(){return null},size:"l","aria-label":"Close l"}]}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50TGlicmFyeS1jbG9zZUJ1dHRvbi1DbG9zZUJ1dHRvbi1zdG9yeS43MjE3YzQ2My5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJ1VkFhYSxRQUFBQSxzQkFBd0IsU0FBQ0MsT0FHcEMsSUFBTUMsVUFBNkMsQ0FBQyxFQU9wRCxPQU5BQyxPQUFPQyxLQUFLSCxPQUFPSSxTQUFRLFNBQUFDLEtBQ3JCQSxJQUFJQyxXQUFXLFdBQ2pCTCxVQUFVSSxLQUFPTCxNQUFNSyxLQUUzQixJQUVPSixTQUNULEVBYWEsUUFBQU0saUNBQW1DLFNBQUMsSSxJQUMvQ0MsYUFBWSxnQkFDWkMscUJBQW9CLHdCQUNwQkMsVUFBUyxhQUNUQyxXQUFVLGNBQ1ZDLFdBQVUsY0FDVixNQUFBQyxnQkFBQUEscUJBQWUsSUFBRyxJQUFLLEdBU2pCQyxPQUE4QixDQUFDLEVBRXJDLEdBQUlOLGNBQWdCQyxxQkFBcUJNLFNBQXlCLFNBQWRMLFVBQXNCLENBQ3hFLElBQU1NLEtBQU9SLGFBQWFTLHdCQUNwQkMsWUFBY1QscUJBQXFCTSxRQUFRRSx3QkFDM0NFLFFBQVVOLGdCQUFrQixFQUFJTyxPQUFPRCxRQUN2Q0UsUUFBVVIsZ0JBQWtCLEVBQUlPLE9BQU9DLFFBRXZDQyxNQUEwQixTQURWQyxTQUFTQyxnQkFBZ0JDLEtBQU8sT0FHaERDLHVCQUNKVixLQUFLVyxJQUFNUixRQUFVSCxLQUFLWSxPQUFTLEVBQUlWLFlBQVlVLE9BQVMsRUFDeERDLG9CQUNKYixLQUFLVyxJQUFNUixRQUFVRCxZQUFZVSxPQUFTakIsV0FBYUMsV0FDbkRrQix1QkFDSmQsS0FBS1csSUFBTVgsS0FBS1ksT0FBU1QsUUFBVVIsV0FBYUMsV0FFNUNtQix5QkFDSmYsS0FBS2dCLEtBQU9YLFFBQVVMLEtBQUtpQixNQUFRLEVBQUlmLFlBQVllLE1BQVEsRUFDdkRDLHVCQUNKbEIsS0FBS2dCLEtBQU9YLFFBQVVILFlBQVllLE1BQVF0QixXQUFhQyxXQUNuRHVCLHdCQUNKbkIsS0FBS29CLE1BQVFmLFFBQVVWLFdBQWFDLFdBR3RDLE9BQVFGLFdBQ04sSUFBSyxVQUNISSxPQUFPYSxJQUFNRCx1QkFDYlosT0FBT2tCLEtBQU9WLE1BQVFhLHdCQUEwQkQsdUJBQ2hELE1BQ0YsSUFBSyxXQUNIcEIsT0FBT2EsSUFBTUcsdUJBQ2JoQixPQUFPa0IsS0FBT0QseUJBQ2QsTUFDRixJQUFLLFNBQ0hqQixPQUFPYSxJQUFNRCx1QkFDYlosT0FBT2tCLEtBQU9WLE1BQVFZLHVCQUF5QkMsd0JBQy9DLE1BRUYsUUFDRXJCLE9BQU9hLElBQU1FLG9CQUNiZixPQUFPa0IsS0FBT0QseUJBR3BCLENBRUEsT0FBT2pCLE1BQ1QsRUFhYSxRQUFBdUIsOEJBQWdDLFNBQUMsSSxJQUM1QzdCLGFBQVksZ0JBQ1pDLHFCQUFvQix3QkFDcEJDLFVBQVMsYUFDVDRCLDJCQUEwQiw4QkFDMUIzQixXQUFVLGNBQ1ZDLFdBQVUsY0FDVixNQUFBQyxnQkFBQUEscUJBQWUsSUFBRyxJQUFLLEdBWXZCeUIsNEJBQ0UsVUFBQS9CLGtDQUFpQyxDQUMvQkMsYUFDQUMscUJBQ0FDLFVBQ0FDLFdBQ0FDLFdBQ0FDLGtCQUdOLEMsazRCQzdJQSw0RkFDQSw4RUFFQSwwRUFzRE0wQixrQkFBcUUsU0FBQyxJQUMxRSxJQUFBQyxVQUFTLGFBQ1RDLFdBQVUsY0FDVkMsU0FBUSxZQUNSQyxVQUFTLGFBQ1RDLE1BQUssU0FDTEMsY0FBYSxpQkFDVkMsS0FBSSxVQVBtRSwyRUFTcEU3QyxXQUFZLFlBQUFGLHVCQUFzQitDLE1BRXhDLE9BQ0UsMERBQ2MsdUJBQ1pILFdBQVcsd0JBQ1RGLFlBQWMsYUFBTUEsWUFDcEJELFdBQWEsYUFBTUEsV0FDbkJFLFVBQVksYUFBTUEsV0FFakJELGFBQWVELFdBQWEsV0FDN0JLLGVBQWlCLGFBQU1BLGVBQ3ZCRixXQUVGQyxPQUNJM0MsV0FHVixFQUVBLGdCQUFlc0Msa0Isd3pGQ3JGZiw4R0FBUSxrSEFBQVEsT0FBTyxHLCtuQkNBZixrRkFFQSw0RkFFQSxnQkFBZSxDQUNiSCxNQUFPLDJCQUNQSSxVQUFXLGlCQU1iLElBSU1DLGlCQUVELFNBQUFDLE0sT0FBUSxPQUNYLDREQUNFLHdKQUlBLGlFQUNBLHFDQUFLQyxNQUFPLENBQUNDLFFBQVMsT0FBUUMsSUFBSyxTQUNqQixRQUFmLEdBQUFILEtBQUtJLGtCQUFVLGlCQUFFQyxLQUFJLFNBQUNDLGFBQWNDLE9BQVUsT0FDN0MsOEJBQUMsZ0JBQVcsVUFBQ3BELElBQUtvRCxPQUFXRCxjQURnQixLLEVBT3hDLFFBQUFFLG1CQXJCcUMsU0FBQVIsTUFBUSxPQUN4RCw4QkFBQyxnQkFBVyxZQUFLQSxNQUR1QyxFQXFCVFMsS0FBSyxDQUFDLEdBQ3ZELFFBQUFELG1CQUFBLEtBQTBCLENBQ3hCRSxRQUFTLFdBQU0sYUFDZixhQUFjLFNBR0gsUUFBQUMsMkJBQTZCWixpQkFBaUJVLEtBQUssQ0FBQyxHQUNqRSxRQUFBRSwyQkFBQSxLQUFrQyxDQUNoQ1AsV0FBWSxDQUNWLENBQUNNLFFBQVMsV0FBTSxhQUFNRSxNQUFPLFFBQVMsYUFBYyxlQUNwRCxDQUFDRixRQUFTLFdBQU0sYUFBTUUsTUFBTyxPQUFRLGFBQWMsZ0JBSTFDLFFBQUFDLDBCQUE0QmQsaUJBQWlCVSxLQUFLLENBQUMsR0FDaEUsUUFBQUksMEJBQUEsS0FBaUMsQ0FDL0JULFdBQVksQ0FDVixDQUFDTSxRQUFTLFdBQU0sYUFBTUksS0FBTSxJQUFLLGFBQWMsV0FDL0MsQ0FBQ0osUUFBUyxXQUFNLGFBQU1JLEtBQU0sSUFBSyxhQUFjLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvY29tcG9uZW50TGlicmFyeS9jb21tb24vaGVscGVycy50cyIsIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvY29tcG9uZW50TGlicmFyeS9mb250QXdlc29tZVY2SWNvbi9Gb250QXdlc29tZVY2SWNvbi50c3giLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL2NvbXBvbmVudExpYnJhcnkvZm9udEF3ZXNvbWVWNkljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL2NvbXBvbmVudExpYnJhcnkvY2xvc2VCdXR0b24vQ2xvc2VCdXR0b24uc3RvcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0FyaWFBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7Q29tcG9uZW50UGxhY2VtZW50RGlyZWN0aW9ufSBmcm9tICdAY2RvL2FwcHMvY29tcG9uZW50TGlicmFyeS9jb21tb24vdHlwZXMnO1xuXG50eXBlIFByaW1pdGl2ZVZhbHVlID1cbiAgfCBzdHJpbmdcbiAgfCBudW1iZXJcbiAgfCBiaWdpbnRcbiAgfCBib29sZWFuXG4gIHwgc3ltYm9sXG4gIHwgbnVsbFxuICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGdldEFyaWFQcm9wc0Zyb21Qcm9wcyA9IChwcm9wczoge1xuICBba2V5OiBzdHJpbmddOiBQcmltaXRpdmVWYWx1ZTtcbn0pID0+IHtcbiAgY29uc3QgYXJpYVByb3BzOiB7W2tleTogc3RyaW5nXTogUHJpbWl0aXZlVmFsdWV9ID0ge307XG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKCdhcmlhLScpKSB7XG4gICAgICBhcmlhUHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJpYVByb3BzIGFzIEFyaWFBdHRyaWJ1dGVzO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBwb3NpdGlvbmVkIGVsZW1lbnQgc3R5bGVzIGJhc2VkIG9uIHRoZSBub2RlKHJlbGF0aXZlIGVsZW1lbnQpXG4gKiBwb3NpdGlvbiBhbmQgdGhlIGRpcmVjdGlvbiBvZiB0aGUgcG9zaXRpb25lZCBlbGVtZW50LiBDYW4gYmUgdXNlZCB0byBjYWxjdWxhdGUgc3R5bGVzXG4gKiBmb3IgYm90aCBwb3NpdGlvbjogZml4ZWQgYW5kIHBvc2l0aW9uOiBhYnNvbHV0ZS5cbiAqIEBwYXJhbSBub2RlUG9zaXRpb25cbiAqIEBwYXJhbSBwb3NpdGlvbmVkRWxlbWVudFJlZlxuICogQHBhcmFtIGRpcmVjdGlvblxuICogQHBhcmFtIHRhaWxPZmZzZXRcbiAqIEBwYXJhbSB0YWlsTGVuZ3RoXG4gKiBAcGFyYW0gaXNQb3NpdGlvbkZpeGVkXG4gKi9cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQb3NpdGlvbmVkRWxlbWVudFN0eWxlcyA9ICh7XG4gIG5vZGVQb3NpdGlvbixcbiAgcG9zaXRpb25lZEVsZW1lbnRSZWYsXG4gIGRpcmVjdGlvbixcbiAgdGFpbE9mZnNldCxcbiAgdGFpbExlbmd0aCxcbiAgaXNQb3NpdGlvbkZpeGVkID0gZmFsc2UsXG59OiB7XG4gIG5vZGVQb3NpdGlvbjogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwb3NpdGlvbmVkRWxlbWVudFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50IHwgbnVsbD47XG4gIGRpcmVjdGlvbj86IENvbXBvbmVudFBsYWNlbWVudERpcmVjdGlvbiB8ICdub25lJztcbiAgdGFpbE9mZnNldDogbnVtYmVyO1xuICB0YWlsTGVuZ3RoOiBudW1iZXI7XG4gIGlzUG9zaXRpb25GaXhlZD86IGJvb2xlYW47XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlczogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9O1xuXG4gIGlmIChub2RlUG9zaXRpb24gJiYgcG9zaXRpb25lZEVsZW1lbnRSZWYuY3VycmVudCAmJiBkaXJlY3Rpb24gIT09ICdub25lJykge1xuICAgIGNvbnN0IHJlY3QgPSBub2RlUG9zaXRpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdG9vbHRpcFJlY3QgPSBwb3NpdGlvbmVkRWxlbWVudFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjcm9sbFkgPSBpc1Bvc2l0aW9uRml4ZWQgPyAwIDogd2luZG93LnNjcm9sbFk7XG4gICAgY29uc3Qgc2Nyb2xsWCA9IGlzUG9zaXRpb25GaXhlZCA/IDAgOiB3aW5kb3cuc2Nyb2xsWDtcbiAgICBjb25zdCB0ZXh0RGlyZWN0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciB8fCAnbHRyJzsgLy8gRGVmYXVsdCB0byAnbHRyJyBpZiBub3Qgc3BlY2lmaWVkXG4gICAgY29uc3QgaXNMdHIgPSB0ZXh0RGlyZWN0aW9uID09PSAnbHRyJztcblxuICAgIGNvbnN0IHZlcnRpY2FsTWlkZGxlUG9zaXRpb24gPVxuICAgICAgcmVjdC50b3AgKyBzY3JvbGxZICsgcmVjdC5oZWlnaHQgLyAyIC0gdG9vbHRpcFJlY3QuaGVpZ2h0IC8gMjtcbiAgICBjb25zdCB2ZXJ0aWNhbFRvcFBvc2l0aW9uID1cbiAgICAgIHJlY3QudG9wICsgc2Nyb2xsWSAtIHRvb2x0aXBSZWN0LmhlaWdodCAtIHRhaWxPZmZzZXQgLSB0YWlsTGVuZ3RoO1xuICAgIGNvbnN0IHZlcnRpY2FsQm90dG9tUG9zaXRpb24gPVxuICAgICAgcmVjdC50b3AgKyByZWN0LmhlaWdodCArIHNjcm9sbFkgKyB0YWlsT2Zmc2V0ICsgdGFpbExlbmd0aDtcblxuICAgIGNvbnN0IGhvcml6b250YWxNaWRkbGVQb3NpdGlvbiA9XG4gICAgICByZWN0LmxlZnQgKyBzY3JvbGxYICsgcmVjdC53aWR0aCAvIDIgLSB0b29sdGlwUmVjdC53aWR0aCAvIDI7XG4gICAgY29uc3QgaG9yaXpvbnRhbExlZnRQb3NpdGlvbiA9XG4gICAgICByZWN0LmxlZnQgKyBzY3JvbGxYIC0gdG9vbHRpcFJlY3Qud2lkdGggLSB0YWlsT2Zmc2V0IC0gdGFpbExlbmd0aDtcbiAgICBjb25zdCBob3Jpem9udGFsUmlnaHRQb3NpdGlvbiA9XG4gICAgICByZWN0LnJpZ2h0ICsgc2Nyb2xsWCArIHRhaWxPZmZzZXQgKyB0YWlsTGVuZ3RoO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSB0b29sdGlwIHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGl0cyB0YWlsIGxlbmd0aFxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdvblJpZ2h0JzpcbiAgICAgICAgc3R5bGVzLnRvcCA9IHZlcnRpY2FsTWlkZGxlUG9zaXRpb247XG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gaXNMdHIgPyBob3Jpem9udGFsUmlnaHRQb3NpdGlvbiA6IGhvcml6b250YWxMZWZ0UG9zaXRpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb25Cb3R0b20nOlxuICAgICAgICBzdHlsZXMudG9wID0gdmVydGljYWxCb3R0b21Qb3NpdGlvbjtcbiAgICAgICAgc3R5bGVzLmxlZnQgPSBob3Jpem9udGFsTWlkZGxlUG9zaXRpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb25MZWZ0JzpcbiAgICAgICAgc3R5bGVzLnRvcCA9IHZlcnRpY2FsTWlkZGxlUG9zaXRpb247XG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gaXNMdHIgPyBob3Jpem9udGFsTGVmdFBvc2l0aW9uIDogaG9yaXpvbnRhbFJpZ2h0UG9zaXRpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb25Ub3AnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3R5bGVzLnRvcCA9IHZlcnRpY2FsVG9wUG9zaXRpb247XG4gICAgICAgIHN0eWxlcy5sZWZ0ID0gaG9yaXpvbnRhbE1pZGRsZVBvc2l0aW9uO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8qKlxuICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdXBkYXRlIFJlYWN0IHN0YXRlIGZvciB0aGUgcG9zaXRpb25lZCBlbGVtZW50IHN0eWxlcyBiYXNlZCBvbiB0aGUgbm9kZSBwb3NpdGlvblxuICogKHJlbGF0aXZlIGVsZW1lbnQpIHBvc2l0aW9uIGFuZCB0aGUgZGlyZWN0aW9uIG9mIHRoZSBwb3NpdGlvbmVkIGVsZW1lbnQuXG4gKiBGb3IgbW9yZSBjb250ZXh0IHNlZSBjYWxjdWxhdGVQb3NpdGlvbmVkRWxlbWVudFN0eWxlcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSBub2RlUG9zaXRpb25cbiAqIEBwYXJhbSBwb3NpdGlvbmVkRWxlbWVudFJlZlxuICogQHBhcmFtIGRpcmVjdGlvblxuICogQHBhcmFtIHNldFBvc2l0aW9uZWRFbGVtZW50U3R5bGVzXG4gKiBAcGFyYW0gdGFpbE9mZnNldFxuICogQHBhcmFtIHRhaWxMZW5ndGhcbiAqIEBwYXJhbSBpc1Bvc2l0aW9uRml4ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBvc2l0aW9uZWRFbGVtZW50U3R5bGVzID0gKHtcbiAgbm9kZVBvc2l0aW9uLFxuICBwb3NpdGlvbmVkRWxlbWVudFJlZixcbiAgZGlyZWN0aW9uLFxuICBzZXRQb3NpdGlvbmVkRWxlbWVudFN0eWxlcyxcbiAgdGFpbE9mZnNldCxcbiAgdGFpbExlbmd0aCxcbiAgaXNQb3NpdGlvbkZpeGVkID0gZmFsc2UsXG59OiB7XG4gIG5vZGVQb3NpdGlvbjogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBwb3NpdGlvbmVkRWxlbWVudFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50IHwgbnVsbD47XG4gIGRpcmVjdGlvbj86IENvbXBvbmVudFBsYWNlbWVudERpcmVjdGlvbiB8ICdub25lJztcbiAgc2V0UG9zaXRpb25lZEVsZW1lbnRTdHlsZXM6IFJlYWN0LkRpc3BhdGNoPFxuICAgIFJlYWN0LlNldFN0YXRlQWN0aW9uPFJlYWN0LkNTU1Byb3BlcnRpZXM+XG4gID47XG4gIHRhaWxPZmZzZXQ6IG51bWJlcjtcbiAgdGFpbExlbmd0aDogbnVtYmVyO1xuICBpc1Bvc2l0aW9uRml4ZWQ/OiBib29sZWFuO1xufSkgPT4ge1xuICBzZXRQb3NpdGlvbmVkRWxlbWVudFN0eWxlcyhcbiAgICBjYWxjdWxhdGVQb3NpdGlvbmVkRWxlbWVudFN0eWxlcyh7XG4gICAgICBub2RlUG9zaXRpb24sXG4gICAgICBwb3NpdGlvbmVkRWxlbWVudFJlZixcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIHRhaWxPZmZzZXQsXG4gICAgICB0YWlsTGVuZ3RoLFxuICAgICAgaXNQb3NpdGlvbkZpeGVkLFxuICAgIH0pXG4gICk7XG59O1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHtBcmlhQXR0cmlidXRlc30gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge2dldEFyaWFQcm9wc0Zyb21Qcm9wc30gZnJvbSAnQGNkby9hcHBzL2NvbXBvbmVudExpYnJhcnkvY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvbnRBd2Vzb21lVjZJY29uUHJvcHMgZXh0ZW5kcyBBcmlhQXR0cmlidXRlcyB7XG4gIC8qKlxuICAgKiBJY29uIHN0eWxlLlxuICAgKiBTdHlsZSB2cyBGaWdtYSBmb250LXdlaWdodDpcbiAgICogICogc29saWQgLSA5MDBcbiAgICogICogcmVndWxhciAtIDQwMFxuICAgKiAgKiBsaWdodCAtIDMwMFxuICAgKiAgKiB0aGluIC0gMTAwXG4gICAqICovXG4gIGljb25TdHlsZT86ICdzb2xpZCcgfCAncmVndWxhcicgfCAnbGlnaHQnIHwgJ3RoaW4nO1xuICAvKiogSWNvbiBmYW1pbHlcbiAgICogICAgKiBicmFuZHMgLSBmb3IgRkEgYnJhbmQgaWNvbnNcbiAgICogICAgKiBkdW90b25lIC0gZm9yIEZBIGR1b3RvbmUgaWNvbnNcbiAgICogICAgKiBraXQgLSBmb3Igb3VyIGN1c3RvbSBGQSBraXQgaWNvbnNcbiAgICogKi9cbiAgaWNvbkZhbWlseT86ICdicmFuZHMnIHwgJ2R1b3RvbmUnIHwgJ2tpdCc7XG4gIC8qKiBJY29uIG5hbWUgKi9cbiAgaWNvbk5hbWU6IHN0cmluZztcbiAgLyoqIEZvbnRBd2Vzb21lIFY2IEFuaW1hdGlvbiB0eXBlIHRvIHVzZSAodXNlIGl0IGlmIHdlIHdhbnQvbmVlZCB0byBhbmltYXRlIGljb24pKi9cbiAgYW5pbWF0aW9uVHlwZT86XG4gICAgfCAnYmVhdCdcbiAgICB8ICdiZWF0LWZhZGUnXG4gICAgfCAnYm91bmNlJ1xuICAgIHwgJ2ZhZGUnXG4gICAgfCAnZmxpcCdcbiAgICB8ICdzaGFrZSdcbiAgICB8ICdzcGluJ1xuICAgIHwgJ3NwaW4tcHVsc2UnO1xuICAvKipcbiAgICogIEljb24gdGl0bGUuXG4gICAqICBUaXRsZSBzaG91bGQgYmUgdXNlZCBmb3Igc2VtYW50aWMgaWNvbnMuIElmIG5vdCBnaXZlbiwgdGhlIHNjcmVlbnJlYWRlciB3aWxsIG5vdCByZWFkIHRoZSBpY29uXG4gICAqICBTZWUgaHR0cHM6Ly9mb250YXdlc29tZS5jb20vZG9jcy93ZWIvZGlnLWRlZXBlci9hY2Nlc3NpYmlsaXR5I2ljb25zLXVzZWQtYXMtc2VtYW50aWMtZWxlbWVudHMqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqIEN1c3RvbSBjbGFzc05hbWUgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqICMjIyBQcm9kdWN0aW9uLXJlYWR5IENoZWNrbGlzdDpcbiAqICogKOKclCkgaW1wbGVtZW50YXRpb24gb2YgY29tcG9uZW50IGFwcHJvdmVkIGJ5IGRlc2lnbiB0ZWFtO1xuICogKiAo4pyUKSBoYXMgc3Rvcnlib29rLCBjb3ZlcmVkIHdpdGggc3RvcmllcyBhbmQgZG9jdW1lbnRhdGlvbjtcbiAqICogKOKclCkgaGFzIHRlc3RzOiB0ZXN0IGV2ZXJ5IHByb3AsIGV2ZXJ5IHN0YXRlIGFuZCBldmVyeSBpbnRlcmFjdGlvbiB0aGF0J3MganMgcmVsYXRlZDtcbiAqICogKHNlZSBhcHBzL3Rlc3QvdW5pdC9jb21wb25lbnRMaWJyYXJ5L0ZvbnRBd2Vzb21lVjZJY29uVGVzdC5qc3gpXG4gKiAqICg/KSBwYXNzZXMgYWNjZXNzaWJpbGl0eSBjaGVja3M7XG4gKlxuICogIyMjICBTdGF0dXM6IGBgYFJlYWR5IGZvciBkZXZgYGBcbiAqXG4gKiBEZXNpZ24gU3lzdGVtOiBGb250QXdlc29tZVY2SWNvbiBDb21wb25lbnQuXG4gKiBTaW1wbGUgc2hvcnRjdXQgZm9yIEZvbnRBd2Vzb21lVjYgaWNvbnMuIFJlcXVpcmVzIEZvbnRBd2Vzb21lVjYgdG8gYmUgaW5zdGFsbGVkLlxuICogTm90IGEgcGFydCBvZiBEZXNpZ24gU3lzdGVtIGluIEZpZ21hIGluaXRpYWxseSwgYnV0IGlzIHVzZWQgaW4gc29tZSBvZiBEZXNpZ24gU3lzdGVtIGNvbXBvbmVudHMuXG4gKiBDYW4gY2FuIGJlIHVzZWQgaW4gYW55IGNvbXBvbmVudCBpbi9vdXQgb2YgdGhlIHNjb3BlIG9mIERlc2lnbiBTeXN0ZW0uXG4gKi9cbmNvbnN0IEZvbnRBd2Vzb21lVjZJY29uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxGb250QXdlc29tZVY2SWNvblByb3BzPiA9ICh7XG4gIGljb25TdHlsZSxcbiAgaWNvbkZhbWlseSxcbiAgaWNvbk5hbWUsXG4gIGNsYXNzTmFtZSxcbiAgdGl0bGUsXG4gIGFuaW1hdGlvblR5cGUsXG4gIC4uLnJlc3Rcbn0pID0+IHtcbiAgY29uc3QgYXJpYVByb3BzID0gZ2V0QXJpYVByb3BzRnJvbVByb3BzKHJlc3QpO1xuXG4gIHJldHVybiAoXG4gICAgPGlcbiAgICAgIGRhdGEtdGVzdGlkPVwiZm9udC1hd2Vzb21lLXY2LWljb25cIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICBpY29uRmFtaWx5ICYmIGBmYS0ke2ljb25GYW1pbHl9YCxcbiAgICAgICAgaWNvblN0eWxlICYmIGBmYS0ke2ljb25TdHlsZX1gLFxuICAgICAgICBpY29uTmFtZSAmJiBgZmEtJHtpY29uTmFtZX1gLFxuICAgICAgICAvLyBEZWZhdWx0IGljb24gc3R5bGUgaXMgc29saWQsIGJ1dCBvbmx5IHdoZW4gbm8gaWNvbkZhbWlseSBwcm9wIGlzIHByb3ZpZGVkXG4gICAgICAgICFpY29uRmFtaWx5ICYmICFpY29uU3R5bGUgJiYgJ2ZhLXNvbGlkJyxcbiAgICAgICAgYW5pbWF0aW9uVHlwZSAmJiBgZmEtJHthbmltYXRpb25UeXBlfWAsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIHsuLi5hcmlhUHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRBd2Vzb21lVjZJY29uO1xuIiwiZXhwb3J0IHR5cGUge0ZvbnRBd2Vzb21lVjZJY29uUHJvcHN9IGZyb20gJy4vRm9udEF3ZXNvbWVWNkljb24nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRlZmF1bHR9IGZyb20gJy4vRm9udEF3ZXNvbWVWNkljb24nO1xuIiwiaW1wb3J0IHtNZXRhLCBTdG9yeUZufSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDbG9zZUJ1dHRvbiwge0Nsb3NlQnV0dG9uUHJvcHN9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnRGVzaWduU3lzdGVtL0Nsb3NlQnV0dG9uJywgLy8gZXNsaW50LWRpc2FibGUtbGluZSBzdG9yeWJvb2svbm8tdGl0bGUtcHJvcGVydHktaW4tbWV0YVxuICBjb21wb25lbnQ6IENsb3NlQnV0dG9uLFxufSBhcyBNZXRhO1xuXG4vL1xuLy8gVEVNUExBVEVcbi8vXG5jb25zdCBTaW5nbGVUZW1wbGF0ZTogU3RvcnlGbjxDbG9zZUJ1dHRvblByb3BzPiA9IGFyZ3MgPT4gKFxuICA8Q2xvc2VCdXR0b24gey4uLmFyZ3N9IC8+XG4pO1xuXG5jb25zdCBNdWx0aXBsZVRlbXBsYXRlOiBTdG9yeUZuPHtcbiAgY29tcG9uZW50czogQ2xvc2VCdXR0b25Qcm9wc1tdO1xufT4gPSBhcmdzID0+IChcbiAgPD5cbiAgICA8cD5cbiAgICAgICogTWFyZ2lucyBvbiB0aGlzIHNjcmVlbiBkbyBub3QgcmVwcmVzZW50IENvbXBvbmVudCdzIG1hcmdpbnMsIGFuZCBhcmVcbiAgICAgIG9ubHkgYWRkZWQgdG8gaW1wcm92ZSBzdG9yeWJvb2sgdmlldyAqXG4gICAgPC9wPlxuICAgIDxwPk11bHRpcGxlIENsb3NlQnV0dG9uczo8L3A+XG4gICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCd9fT5cbiAgICAgIHthcmdzLmNvbXBvbmVudHM/Lm1hcCgoY29tcG9uZW50QXJnLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2xvc2VCdXR0b24ga2V5PXtpbmRleH0gey4uLmNvbXBvbmVudEFyZ30gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0Q2xvc2VCdXR0b24gPSBTaW5nbGVUZW1wbGF0ZS5iaW5kKHt9KTtcbkRlZmF1bHRDbG9zZUJ1dHRvbi5hcmdzID0ge1xuICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAnYXJpYS1sYWJlbCc6ICdDbG9zZScsXG59O1xuXG5leHBvcnQgY29uc3QgR3JvdXBPZkNvbG9yc09mQ2xvc2VCdXR0b24gPSBNdWx0aXBsZVRlbXBsYXRlLmJpbmQoe30pO1xuR3JvdXBPZkNvbG9yc09mQ2xvc2VCdXR0b24uYXJncyA9IHtcbiAgY29tcG9uZW50czogW1xuICAgIHtvbkNsaWNrOiAoKSA9PiBudWxsLCBjb2xvcjogJ2xpZ2h0JywgJ2FyaWEtbGFiZWwnOiAnQ2xvc2UgbGlnaHQnfSxcbiAgICB7b25DbGljazogKCkgPT4gbnVsbCwgY29sb3I6ICdkYXJrJywgJ2FyaWEtbGFiZWwnOiAnQ2xvc2UgZGFyayd9LFxuICBdLFxufTtcblxuZXhwb3J0IGNvbnN0IEdyb3VwT2ZTaXplc09mQ2xvc2VCdXR0b24gPSBNdWx0aXBsZVRlbXBsYXRlLmJpbmQoe30pO1xuR3JvdXBPZlNpemVzT2ZDbG9zZUJ1dHRvbi5hcmdzID0ge1xuICBjb21wb25lbnRzOiBbXG4gICAge29uQ2xpY2s6ICgpID0+IG51bGwsIHNpemU6ICdtJywgJ2FyaWEtbGFiZWwnOiAnQ2xvc2UgbSd9LFxuICAgIHtvbkNsaWNrOiAoKSA9PiBudWxsLCBzaXplOiAnbCcsICdhcmlhLWxhYmVsJzogJ0Nsb3NlIGwnfSxcbiAgXSxcbn07XG4iXSwibmFtZXMiOlsiZ2V0QXJpYVByb3BzRnJvbVByb3BzIiwicHJvcHMiLCJhcmlhUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInN0YXJ0c1dpdGgiLCJjYWxjdWxhdGVQb3NpdGlvbmVkRWxlbWVudFN0eWxlcyIsIm5vZGVQb3NpdGlvbiIsInBvc2l0aW9uZWRFbGVtZW50UmVmIiwiZGlyZWN0aW9uIiwidGFpbE9mZnNldCIsInRhaWxMZW5ndGgiLCJpc1Bvc2l0aW9uRml4ZWQiLCJzdHlsZXMiLCJjdXJyZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvb2x0aXBSZWN0Iiwic2Nyb2xsWSIsIndpbmRvdyIsInNjcm9sbFgiLCJpc0x0ciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZGlyIiwidmVydGljYWxNaWRkbGVQb3NpdGlvbiIsInRvcCIsImhlaWdodCIsInZlcnRpY2FsVG9wUG9zaXRpb24iLCJ2ZXJ0aWNhbEJvdHRvbVBvc2l0aW9uIiwiaG9yaXpvbnRhbE1pZGRsZVBvc2l0aW9uIiwibGVmdCIsIndpZHRoIiwiaG9yaXpvbnRhbExlZnRQb3NpdGlvbiIsImhvcml6b250YWxSaWdodFBvc2l0aW9uIiwicmlnaHQiLCJ1cGRhdGVQb3NpdGlvbmVkRWxlbWVudFN0eWxlcyIsInNldFBvc2l0aW9uZWRFbGVtZW50U3R5bGVzIiwiRm9udEF3ZXNvbWVWNkljb24iLCJpY29uU3R5bGUiLCJpY29uRmFtaWx5IiwiaWNvbk5hbWUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImFuaW1hdGlvblR5cGUiLCJyZXN0IiwiZGVmYXVsdCIsImNvbXBvbmVudCIsIk11bHRpcGxlVGVtcGxhdGUiLCJhcmdzIiwic3R5bGUiLCJkaXNwbGF5IiwiZ2FwIiwiY29tcG9uZW50cyIsIm1hcCIsImNvbXBvbmVudEFyZyIsImluZGV4IiwiRGVmYXVsdENsb3NlQnV0dG9uIiwiYmluZCIsIm9uQ2xpY2siLCJHcm91cE9mQ29sb3JzT2ZDbG9zZUJ1dHRvbiIsImNvbG9yIiwiR3JvdXBPZlNpemVzT2ZDbG9zZUJ1dHRvbiIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9