"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[5873],{"./src/componentLibrary/fontAwesomeV6Icon/FontAwesomeV6Icon.tsx":function(__unused_webpack_module,exports,__webpack_require__){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var classnames_1=__importDefault(__webpack_require__("./node_modules/classnames/index.js")),react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),FontAwesomeV6Icon=function(_a){var iconStyle=_a.iconStyle,iconFamily=_a.iconFamily,iconName=_a.iconName,className=_a.className,title=_a.title,animationType=_a.animationType,HTMLAttributes=__rest(_a,["iconStyle","iconFamily","iconName","className","title","animationType"]);return react_1.default.createElement("i",__assign({"data-testid":"font-awesome-v6-icon",className:(0,classnames_1.default)(iconFamily&&"fa-".concat(iconFamily),iconStyle&&"fa-".concat(iconStyle),iconName&&"fa-".concat(iconName),!iconFamily&&!iconStyle&&"fa-solid",animationType&&"fa-".concat(animationType),className),title},HTMLAttributes))};exports.default=FontAwesomeV6Icon;try{FontAwesomeV6Icon.displayName="FontAwesomeV6Icon",FontAwesomeV6Icon.__docgenInfo={description:"### Production-ready Checklist:\n* (✔) implementation of component approved by design team;\n* (✔) has storybook, covered with stories and documentation;\n* (✔) has tests: test every prop, every state and every interaction that's js related;\n* (see apps/test/unit/componentLibrary/FontAwesomeV6IconTest.jsx)\n* (?) passes accessibility checks;\n\n###  Status: ```Ready for dev```\n\nDesign System: FontAwesomeV6Icon Component.\nSimple shortcut for FontAwesomeV6 icons. Requires FontAwesomeV6 to be installed.\nNot a part of Design System in Figma initially, but is used in some of Design System components.\nCan can be used in any component in/out of the scope of Design System.",displayName:"FontAwesomeV6Icon",props:{iconStyle:{defaultValue:null,description:"Icon style.\nStyle vs Figma font-weight:\n * solid - 900\n * regular - 400\n * light - 300\n * thin - 100",name:"iconStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"thin"'},{value:'"light"'},{value:'"regular"'}]}},iconFamily:{defaultValue:null,description:"Icon family\n  * brands - for FA brand icons\n  * duotone - for FA duotone icons\n  * kit - for our custom FA kit icons",name:"iconFamily",required:!1,type:{name:"enum",value:[{value:'"brands"'},{value:'"duotone"'},{value:'"kit"'}]}},iconName:{defaultValue:null,description:"Icon name",name:"iconName",required:!0,type:{name:"string"}},animationType:{defaultValue:null,description:"FontAwesome V6 Animation type to use (use it if we want/need to animate icon)",name:"animationType",required:!1,type:{name:"enum",value:[{value:'"flip"'},{value:'"beat"'},{value:'"beat-fade"'},{value:'"bounce"'},{value:'"fade"'},{value:'"shake"'},{value:'"spin"'},{value:'"spin-pulse"'}]}},title:{defaultValue:null,description:"Icon title.\nTitle should be used for semantic icons. If not given, the screenreader will not read the icon\nSee https://fontawesome.com/docs/web/dig-deeper/accessibility#icons-used-as-semantic-elements",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom className",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/componentLibrary/fontAwesomeV6Icon/FontAwesomeV6Icon.tsx#FontAwesomeV6Icon"]={docgenInfo:FontAwesomeV6Icon.__docgenInfo,name:"FontAwesomeV6Icon",path:"src/componentLibrary/fontAwesomeV6Icon/FontAwesomeV6Icon.tsx#FontAwesomeV6Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/componentLibrary/fontAwesomeV6Icon/index.ts":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var FontAwesomeV6Icon_1=__webpack_require__("./src/componentLibrary/fontAwesomeV6Icon/FontAwesomeV6Icon.tsx");Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return __importDefault(FontAwesomeV6Icon_1).default}})},"./src/componentLibrary/closeButton/CloseButton.story.tsx":function(__unused_webpack_module,exports,__webpack_require__){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.GroupOfSizesOfCloseButton=exports.GroupOfColorsOfCloseButton=exports.DefaultCloseButton=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),index_1=__importDefault(__webpack_require__("./src/componentLibrary/closeButton/index.ts"));exports.default={title:"DesignSystem/CloseButton",component:index_1.default};var MultipleTemplate=function(args){var _a;return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("p",null,"* Margins on this screen do not represent Component's margins, and are only added to improve storybook view *"),react_1.default.createElement("p",null,"Multiple CloseButtons:"),react_1.default.createElement("div",{style:{display:"flex",gap:"20px"}},null===(_a=args.components)||void 0===_a?void 0:_a.map((function(componentArg,index){return react_1.default.createElement(index_1.default,__assign({key:index},componentArg))}))))};exports.DefaultCloseButton=function(args){return react_1.default.createElement(index_1.default,__assign({},args))}.bind({}),exports.DefaultCloseButton.args={onClick:function(){return null},"aria-label":"Close"},exports.GroupOfColorsOfCloseButton=MultipleTemplate.bind({}),exports.GroupOfColorsOfCloseButton.args={components:[{onClick:function(){return null},color:"light","aria-label":"Close light"},{onClick:function(){return null},color:"dark","aria-label":"Close dark"}]},exports.GroupOfSizesOfCloseButton=MultipleTemplate.bind({}),exports.GroupOfSizesOfCloseButton.args={components:[{onClick:function(){return null},size:"xs","aria-label":"Close xs"},{onClick:function(){return null},size:"s","aria-label":"Close s"},{onClick:function(){return null},size:"m","aria-label":"Close m"},{onClick:function(){return null},size:"l","aria-label":"Close l"}]}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50TGlicmFyeS1jbG9zZUJ1dHRvbi1DbG9zZUJ1dHRvbi1zdG9yeS44ODE1MTdkZS5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI2OUJBQUEsNEZBQ0EsOEVBc0RNQSxrQkFBcUUsU0FBQyxJQUMxRSxJQUFBQyxVQUFTLGFBQ1RDLFdBQVUsY0FDVkMsU0FBUSxZQUNSQyxVQUFTLGFBQ1RDLE1BQUssU0FDTEMsY0FBYSxpQkFDVkMsZUFBYyxVQVB5RCwyRUFRdEUsT0FDSiwwREFDYyx1QkFDWkgsV0FBVyx3QkFDVEYsWUFBYyxhQUFNQSxZQUNwQkQsV0FBYSxhQUFNQSxXQUNuQkUsVUFBWSxhQUFNQSxXQUVqQkQsYUFBZUQsV0FBYSxXQUM3QkssZUFBaUIsYUFBTUEsZUFDdkJGLFdBRUZDLE9BQ0lFLGdCLEVBSVIsZ0JBQWVQLGtCLHd6RkMvRWYsOEdBQVEsa0hBQUFRLE9BQU8sRywrbkJDQWYsa0ZBRUEsNEZBRUEsZ0JBQWUsQ0FDYkgsTUFBTywyQkFDUEksVUFBVyxpQkFNYixJQUlNQyxpQkFFRCxTQUFBQyxNLE9BQVEsT0FDWCw0REFDRSx3SkFJQSxpRUFDQSxxQ0FBS0MsTUFBTyxDQUFDQyxRQUFTLE9BQVFDLElBQUssU0FDakIsUUFBZixHQUFBSCxLQUFLSSxrQkFBVSxpQkFBRUMsS0FBSSxTQUFDQyxhQUFjQyxPQUFVLE9BQzdDLDhCQUFDLGdCQUFXLFVBQUNDLElBQUtELE9BQVdELGNBRGdCLEssRUFPeEMsUUFBQUcsbUJBckJxQyxTQUFBVCxNQUFRLE9BQ3hELDhCQUFDLGdCQUFXLFlBQUtBLE1BRHVDLEVBcUJUVSxLQUFLLENBQUMsR0FDdkQsUUFBQUQsbUJBQUEsS0FBMEIsQ0FDeEJFLFFBQVMsV0FBTSxhQUNmLGFBQWMsU0FHSCxRQUFBQywyQkFBNkJiLGlCQUFpQlcsS0FBSyxDQUFDLEdBQ2pFLFFBQUFFLDJCQUFBLEtBQWtDLENBQ2hDUixXQUFZLENBQ1YsQ0FBQ08sUUFBUyxXQUFNLGFBQU1FLE1BQU8sUUFBUyxhQUFjLGVBQ3BELENBQUNGLFFBQVMsV0FBTSxhQUFNRSxNQUFPLE9BQVEsYUFBYyxnQkFJMUMsUUFBQUMsMEJBQTRCZixpQkFBaUJXLEtBQUssQ0FBQyxHQUNoRSxRQUFBSSwwQkFBQSxLQUFpQyxDQUMvQlYsV0FBWSxDQUNWLENBQUNPLFFBQVMsV0FBTSxhQUFNSSxLQUFNLEtBQU0sYUFBYyxZQUNoRCxDQUFDSixRQUFTLFdBQU0sYUFBTUksS0FBTSxJQUFLLGFBQWMsV0FDL0MsQ0FBQ0osUUFBUyxXQUFNLGFBQU1JLEtBQU0sSUFBSyxhQUFjLFdBQy9DLENBQUNKLFFBQVMsV0FBTSxhQUFNSSxLQUFNLElBQUssYUFBYyxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL2NvbXBvbmVudExpYnJhcnkvZm9udEF3ZXNvbWVWNkljb24vRm9udEF3ZXNvbWVWNkljb24udHN4Iiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy9jb21wb25lbnRMaWJyYXJ5L2ZvbnRBd2Vzb21lVjZJY29uL2luZGV4LnRzIiwid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy9jb21wb25lbnRMaWJyYXJ5L2Nsb3NlQnV0dG9uL0Nsb3NlQnV0dG9uLnN0b3J5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwge0hUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9udEF3ZXNvbWVWNkljb25Qcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBJY29uIHN0eWxlLlxuICAgKiBTdHlsZSB2cyBGaWdtYSBmb250LXdlaWdodDpcbiAgICogICogc29saWQgLSA5MDBcbiAgICogICogcmVndWxhciAtIDQwMFxuICAgKiAgKiBsaWdodCAtIDMwMFxuICAgKiAgKiB0aGluIC0gMTAwXG4gICAqICovXG4gIGljb25TdHlsZT86ICdzb2xpZCcgfCAncmVndWxhcicgfCAnbGlnaHQnIHwgJ3RoaW4nO1xuICAvKiogSWNvbiBmYW1pbHlcbiAgICogICAgKiBicmFuZHMgLSBmb3IgRkEgYnJhbmQgaWNvbnNcbiAgICogICAgKiBkdW90b25lIC0gZm9yIEZBIGR1b3RvbmUgaWNvbnNcbiAgICogICAgKiBraXQgLSBmb3Igb3VyIGN1c3RvbSBGQSBraXQgaWNvbnNcbiAgICogKi9cbiAgaWNvbkZhbWlseT86ICdicmFuZHMnIHwgJ2R1b3RvbmUnIHwgJ2tpdCc7XG4gIC8qKiBJY29uIG5hbWUgKi9cbiAgaWNvbk5hbWU6IHN0cmluZztcbiAgLyoqIEZvbnRBd2Vzb21lIFY2IEFuaW1hdGlvbiB0eXBlIHRvIHVzZSAodXNlIGl0IGlmIHdlIHdhbnQvbmVlZCB0byBhbmltYXRlIGljb24pKi9cbiAgYW5pbWF0aW9uVHlwZT86XG4gICAgfCAnYmVhdCdcbiAgICB8ICdiZWF0LWZhZGUnXG4gICAgfCAnYm91bmNlJ1xuICAgIHwgJ2ZhZGUnXG4gICAgfCAnZmxpcCdcbiAgICB8ICdzaGFrZSdcbiAgICB8ICdzcGluJ1xuICAgIHwgJ3NwaW4tcHVsc2UnO1xuICAvKipcbiAgICogIEljb24gdGl0bGUuXG4gICAqICBUaXRsZSBzaG91bGQgYmUgdXNlZCBmb3Igc2VtYW50aWMgaWNvbnMuIElmIG5vdCBnaXZlbiwgdGhlIHNjcmVlbnJlYWRlciB3aWxsIG5vdCByZWFkIHRoZSBpY29uXG4gICAqICBTZWUgaHR0cHM6Ly9mb250YXdlc29tZS5jb20vZG9jcy93ZWIvZGlnLWRlZXBlci9hY2Nlc3NpYmlsaXR5I2ljb25zLXVzZWQtYXMtc2VtYW50aWMtZWxlbWVudHMqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqIEN1c3RvbSBjbGFzc05hbWUgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqICMjIyBQcm9kdWN0aW9uLXJlYWR5IENoZWNrbGlzdDpcbiAqICogKOKclCkgaW1wbGVtZW50YXRpb24gb2YgY29tcG9uZW50IGFwcHJvdmVkIGJ5IGRlc2lnbiB0ZWFtO1xuICogKiAo4pyUKSBoYXMgc3Rvcnlib29rLCBjb3ZlcmVkIHdpdGggc3RvcmllcyBhbmQgZG9jdW1lbnRhdGlvbjtcbiAqICogKOKclCkgaGFzIHRlc3RzOiB0ZXN0IGV2ZXJ5IHByb3AsIGV2ZXJ5IHN0YXRlIGFuZCBldmVyeSBpbnRlcmFjdGlvbiB0aGF0J3MganMgcmVsYXRlZDtcbiAqICogKHNlZSBhcHBzL3Rlc3QvdW5pdC9jb21wb25lbnRMaWJyYXJ5L0ZvbnRBd2Vzb21lVjZJY29uVGVzdC5qc3gpXG4gKiAqICg/KSBwYXNzZXMgYWNjZXNzaWJpbGl0eSBjaGVja3M7XG4gKlxuICogIyMjICBTdGF0dXM6IGBgYFJlYWR5IGZvciBkZXZgYGBcbiAqXG4gKiBEZXNpZ24gU3lzdGVtOiBGb250QXdlc29tZVY2SWNvbiBDb21wb25lbnQuXG4gKiBTaW1wbGUgc2hvcnRjdXQgZm9yIEZvbnRBd2Vzb21lVjYgaWNvbnMuIFJlcXVpcmVzIEZvbnRBd2Vzb21lVjYgdG8gYmUgaW5zdGFsbGVkLlxuICogTm90IGEgcGFydCBvZiBEZXNpZ24gU3lzdGVtIGluIEZpZ21hIGluaXRpYWxseSwgYnV0IGlzIHVzZWQgaW4gc29tZSBvZiBEZXNpZ24gU3lzdGVtIGNvbXBvbmVudHMuXG4gKiBDYW4gY2FuIGJlIHVzZWQgaW4gYW55IGNvbXBvbmVudCBpbi9vdXQgb2YgdGhlIHNjb3BlIG9mIERlc2lnbiBTeXN0ZW0uXG4gKi9cbmNvbnN0IEZvbnRBd2Vzb21lVjZJY29uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxGb250QXdlc29tZVY2SWNvblByb3BzPiA9ICh7XG4gIGljb25TdHlsZSxcbiAgaWNvbkZhbWlseSxcbiAgaWNvbk5hbWUsXG4gIGNsYXNzTmFtZSxcbiAgdGl0bGUsXG4gIGFuaW1hdGlvblR5cGUsXG4gIC4uLkhUTUxBdHRyaWJ1dGVzXG59KSA9PiAoXG4gIDxpXG4gICAgZGF0YS10ZXN0aWQ9XCJmb250LWF3ZXNvbWUtdjYtaWNvblwiXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgaWNvbkZhbWlseSAmJiBgZmEtJHtpY29uRmFtaWx5fWAsXG4gICAgICBpY29uU3R5bGUgJiYgYGZhLSR7aWNvblN0eWxlfWAsXG4gICAgICBpY29uTmFtZSAmJiBgZmEtJHtpY29uTmFtZX1gLFxuICAgICAgLy8gRGVmYXVsdCBpY29uIHN0eWxlIGlzIHNvbGlkLCBidXQgb25seSB3aGVuIG5vIGljb25GYW1pbHkgcHJvcCBpcyBwcm92aWRlZFxuICAgICAgIWljb25GYW1pbHkgJiYgIWljb25TdHlsZSAmJiAnZmEtc29saWQnLFxuICAgICAgYW5pbWF0aW9uVHlwZSAmJiBgZmEtJHthbmltYXRpb25UeXBlfWAsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHRpdGxlPXt0aXRsZX1cbiAgICB7Li4uSFRNTEF0dHJpYnV0ZXN9XG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb250QXdlc29tZVY2SWNvbjtcbiIsImV4cG9ydCB0eXBlIHtGb250QXdlc29tZVY2SWNvblByb3BzfSBmcm9tICcuL0ZvbnRBd2Vzb21lVjZJY29uJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWZhdWx0fSBmcm9tICcuL0ZvbnRBd2Vzb21lVjZJY29uJztcbiIsImltcG9ydCB7TWV0YSwgU3RvcnlGbn0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2xvc2VCdXR0b24sIHtDbG9zZUJ1dHRvblByb3BzfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0Rlc2lnblN5c3RlbS9DbG9zZUJ1dHRvbicsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgc3Rvcnlib29rL25vLXRpdGxlLXByb3BlcnR5LWluLW1ldGFcbiAgY29tcG9uZW50OiBDbG9zZUJ1dHRvbixcbn0gYXMgTWV0YTtcblxuLy9cbi8vIFRFTVBMQVRFXG4vL1xuY29uc3QgU2luZ2xlVGVtcGxhdGU6IFN0b3J5Rm48Q2xvc2VCdXR0b25Qcm9wcz4gPSBhcmdzID0+IChcbiAgPENsb3NlQnV0dG9uIHsuLi5hcmdzfSAvPlxuKTtcblxuY29uc3QgTXVsdGlwbGVUZW1wbGF0ZTogU3RvcnlGbjx7XG4gIGNvbXBvbmVudHM6IENsb3NlQnV0dG9uUHJvcHNbXTtcbn0+ID0gYXJncyA9PiAoXG4gIDw+XG4gICAgPHA+XG4gICAgICAqIE1hcmdpbnMgb24gdGhpcyBzY3JlZW4gZG8gbm90IHJlcHJlc2VudCBDb21wb25lbnQncyBtYXJnaW5zLCBhbmQgYXJlXG4gICAgICBvbmx5IGFkZGVkIHRvIGltcHJvdmUgc3Rvcnlib29rIHZpZXcgKlxuICAgIDwvcD5cbiAgICA8cD5NdWx0aXBsZSBDbG9zZUJ1dHRvbnM6PC9wPlxuICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnfX0+XG4gICAgICB7YXJncy5jb21wb25lbnRzPy5tYXAoKGNvbXBvbmVudEFyZywgaW5kZXgpID0+IChcbiAgICAgICAgPENsb3NlQnV0dG9uIGtleT17aW5kZXh9IHsuLi5jb21wb25lbnRBcmd9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdENsb3NlQnV0dG9uID0gU2luZ2xlVGVtcGxhdGUuYmluZCh7fSk7XG5EZWZhdWx0Q2xvc2VCdXR0b24uYXJncyA9IHtcbiAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgJ2FyaWEtbGFiZWwnOiAnQ2xvc2UnLFxufTtcblxuZXhwb3J0IGNvbnN0IEdyb3VwT2ZDb2xvcnNPZkNsb3NlQnV0dG9uID0gTXVsdGlwbGVUZW1wbGF0ZS5iaW5kKHt9KTtcbkdyb3VwT2ZDb2xvcnNPZkNsb3NlQnV0dG9uLmFyZ3MgPSB7XG4gIGNvbXBvbmVudHM6IFtcbiAgICB7b25DbGljazogKCkgPT4gbnVsbCwgY29sb3I6ICdsaWdodCcsICdhcmlhLWxhYmVsJzogJ0Nsb3NlIGxpZ2h0J30sXG4gICAge29uQ2xpY2s6ICgpID0+IG51bGwsIGNvbG9yOiAnZGFyaycsICdhcmlhLWxhYmVsJzogJ0Nsb3NlIGRhcmsnfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBjb25zdCBHcm91cE9mU2l6ZXNPZkNsb3NlQnV0dG9uID0gTXVsdGlwbGVUZW1wbGF0ZS5iaW5kKHt9KTtcbkdyb3VwT2ZTaXplc09mQ2xvc2VCdXR0b24uYXJncyA9IHtcbiAgY29tcG9uZW50czogW1xuICAgIHtvbkNsaWNrOiAoKSA9PiBudWxsLCBzaXplOiAneHMnLCAnYXJpYS1sYWJlbCc6ICdDbG9zZSB4cyd9LFxuICAgIHtvbkNsaWNrOiAoKSA9PiBudWxsLCBzaXplOiAncycsICdhcmlhLWxhYmVsJzogJ0Nsb3NlIHMnfSxcbiAgICB7b25DbGljazogKCkgPT4gbnVsbCwgc2l6ZTogJ20nLCAnYXJpYS1sYWJlbCc6ICdDbG9zZSBtJ30sXG4gICAge29uQ2xpY2s6ICgpID0+IG51bGwsIHNpemU6ICdsJywgJ2FyaWEtbGFiZWwnOiAnQ2xvc2UgbCd9LFxuICBdLFxufTtcbiJdLCJuYW1lcyI6WyJGb250QXdlc29tZVY2SWNvbiIsImljb25TdHlsZSIsImljb25GYW1pbHkiLCJpY29uTmFtZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiYW5pbWF0aW9uVHlwZSIsIkhUTUxBdHRyaWJ1dGVzIiwiZGVmYXVsdCIsImNvbXBvbmVudCIsIk11bHRpcGxlVGVtcGxhdGUiLCJhcmdzIiwic3R5bGUiLCJkaXNwbGF5IiwiZ2FwIiwiY29tcG9uZW50cyIsIm1hcCIsImNvbXBvbmVudEFyZyIsImluZGV4Iiwia2V5IiwiRGVmYXVsdENsb3NlQnV0dG9uIiwiYmluZCIsIm9uQ2xpY2siLCJHcm91cE9mQ29sb3JzT2ZDbG9zZUJ1dHRvbiIsImNvbG9yIiwiR3JvdXBPZlNpemVzT2ZDbG9zZUJ1dHRvbiIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9