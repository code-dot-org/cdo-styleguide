"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[3251],{"./src/componentLibrary/button/Button.story.tsx":function(__unused_webpack_module,exports,__webpack_require__){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.GroupOfSizesOfButtons=exports.GroupOfColorsOfButtons=exports.IconButton=exports.ButtonWithIcons=exports.PendingButton=exports.DisabledButton=exports.DefaultButton=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),Button_1=__importStar(__webpack_require__("./src/componentLibrary/button/Button.tsx"));exports.default={title:"DesignSystem/Button/Button",component:Button_1.default.type};var SingleTemplate=function(args){return react_1.default.createElement(Button_1.default,__assign({},args))},MultipleTemplate=function(args){var _a;return react_1.default.createElement("div",{style:{display:"flex",flexFlow:"wrap",alignItems:"flex-start",gap:"20px"}},null===(_a=args.components)||void 0===_a?void 0:_a.map((function(componentArg){return react_1.default.createElement(Button_1.default,__assign({key:"".concat(componentArg.size,"-").concat(componentArg.text)},componentArg))})))};exports.DefaultButton=SingleTemplate.bind({}),exports.DefaultButton.args={text:"Button",onClick:function(){return null},size:"m"},exports.DisabledButton=SingleTemplate.bind({}),exports.DisabledButton.args={text:"Button",onClick:function(){return null},disabled:!0,size:"m"},exports.PendingButton=SingleTemplate.bind({}),exports.PendingButton.args={text:"Button",onClick:function(){return null},isPending:!0,size:"m"},exports.ButtonWithIcons=SingleTemplate.bind({}),exports.ButtonWithIcons.args={text:"Button",onClick:function(){return null},iconLeft:{iconName:"house",iconStyle:"solid"},iconRight:{iconName:"smile",iconStyle:"solid"},size:"m"},exports.IconButton=SingleTemplate.bind({}),exports.IconButton.args={icon:{iconName:"smile",iconStyle:"solid"},type:"primary",isIconOnly:!0,onClick:function(){return null},size:"m"},exports.GroupOfColorsOfButtons=MultipleTemplate.bind({}),exports.GroupOfColorsOfButtons.args={components:[{text:"Button Primary Purple",color:Button_1.buttonColors.purple,size:"m",onClick:function(){return null}},{text:"Button Primary Black",color:Button_1.buttonColors.black,size:"m",onClick:function(){return null}},{text:"Button Primary White",color:Button_1.buttonColors.white,size:"m",onClick:function(){return null}},{text:"Button Secondary Purple",color:Button_1.buttonColors.purple,type:"secondary",size:"m",onClick:function(){return null}},{text:"Button Secondary Black",color:Button_1.buttonColors.black,type:"secondary",size:"m",onClick:function(){return null}},{text:"Button Secondary White",color:Button_1.buttonColors.white,type:"secondary",size:"m",onClick:function(){return null}},{text:"Button Tertiary Purple",color:Button_1.buttonColors.purple,type:"tertiary",size:"m",onClick:function(){return null}},{text:"Button Tertiary Black",color:Button_1.buttonColors.black,type:"tertiary",size:"m",onClick:function(){return null}},{text:"Button Tertiary White",color:Button_1.buttonColors.white,type:"tertiary",size:"m",onClick:function(){return null}},{icon:{iconName:"smile",iconStyle:"solid"},color:Button_1.buttonColors.purple,type:"primary",isIconOnly:!0,size:"m",onClick:function(){return null}},{icon:{iconName:"smile",iconStyle:"solid"},color:Button_1.buttonColors.black,type:"primary",isIconOnly:!0,size:"m",onClick:function(){return null}},{icon:{iconName:"smile",iconStyle:"solid"},color:Button_1.buttonColors.white,type:"primary",isIconOnly:!0,size:"m",onClick:function(){return null}},{icon:{iconName:"smile",iconStyle:"solid"},color:Button_1.buttonColors.purple,type:"secondary",isIconOnly:!0,size:"m",onClick:function(){return null}},{icon:{iconName:"smile",iconStyle:"solid"},color:Button_1.buttonColors.black,type:"secondary",isIconOnly:!0,size:"m",onClick:function(){return null}},{icon:{iconName:"smile",iconStyle:"solid"},color:Button_1.buttonColors.white,type:"secondary",isIconOnly:!0,size:"m",onClick:function(){return null}},{icon:{iconName:"smile",iconStyle:"solid"},color:Button_1.buttonColors.purple,type:"tertiary",isIconOnly:!0,size:"m",onClick:function(){return null}},{icon:{iconName:"smile",iconStyle:"solid"},color:Button_1.buttonColors.black,type:"tertiary",isIconOnly:!0,size:"m",onClick:function(){return null}},{icon:{iconName:"smile",iconStyle:"solid"},color:Button_1.buttonColors.white,type:"tertiary",isIconOnly:!0,size:"m",onClick:function(){return null}}]},exports.GroupOfSizesOfButtons=MultipleTemplate.bind({}),exports.GroupOfSizesOfButtons.args={components:[{text:"Button xs",size:"xs",onClick:function(){return null}},{text:"Button s",size:"s",onClick:function(){return null}},{text:"Button m",size:"m",onClick:function(){return null}},{text:"Button l",size:"l",onClick:function(){return null}}]}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50TGlicmFyeS1idXR0b24tQnV0dG9uLXN0b3J5LmNmNGI3ZWFmLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6IjJpREFDQSxrRkFFQSx1RkFFQSxnQkFBZSxDQUNiQSxNQUFPLDZCQUdQQyxVQUFXLGlCQUFPQyxNQU1wQixJQUFNQyxlQUF1QyxTQUFBQyxNQUFRLHFDQUFDLGlCQUFNLFlBQUtBLE1BQVosRUFFL0NDLGlCQUVELFNBQUFELE0sT0FBUSxPQUNYLHFDQUNFRSxNQUFPLENBQ0xDLFFBQVMsT0FDVEMsU0FBVSxPQUNWQyxXQUFZLGFBQ1pDLElBQUssU0FHUyxRQUFmLEdBQUFOLEtBQUtPLGtCQUFVLGlCQUFFQyxLQUFJLFNBQUFDLGNBQWdCLE9BQ3BDLDhCQUFDLGlCQUFNLFVBQ0xDLElBQUssVUFBR0QsYUFBYUUsS0FBSSxZQUFJRixhQUFhRyxPQUN0Q0gsY0FIOEIsSSxFQVM3QixRQUFBSSxjQUFnQmQsZUFBZWUsS0FBSyxDQUFDLEdBQ2xELFFBQUFELGNBQUEsS0FBcUIsQ0FDbkJELEtBQU0sU0FDTkcsUUFBUyxXQUFNLGFBQ2ZKLEtBQU0sS0FHSyxRQUFBSyxlQUFpQmpCLGVBQWVlLEtBQUssQ0FBQyxHQUNuRCxRQUFBRSxlQUFBLEtBQXNCLENBQ3BCSixLQUFNLFNBQ05HLFFBQVMsV0FBTSxhQUNmRSxVQUFVLEVBQ1ZOLEtBQU0sS0FHSyxRQUFBTyxjQUFnQm5CLGVBQWVlLEtBQUssQ0FBQyxHQUNsRCxRQUFBSSxjQUFBLEtBQXFCLENBQ25CTixLQUFNLFNBQ05HLFFBQVMsV0FBTSxhQUNmSSxXQUFXLEVBQ1hSLEtBQU0sS0FHSyxRQUFBUyxnQkFBa0JyQixlQUFlZSxLQUFLLENBQUMsR0FDcEQsUUFBQU0sZ0JBQUEsS0FBdUIsQ0FDckJSLEtBQU0sU0FDTkcsUUFBUyxXQUFNLGFBQ2ZNLFNBQVUsQ0FBQ0MsU0FBVSxRQUFTQyxVQUFXLFNBQ3pDQyxVQUFXLENBQUNGLFNBQVUsUUFBU0MsVUFBVyxTQUMxQ1osS0FBTSxLQUdL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QyxLQUFNLFdBQ042QixZQUFZLEVBQ1poQixLQUFNLElBQ05JLFFBQVMsV0FBTSxjQUVqQixDQUNFVyxLQUFNLENBQUNKLFNBQVUsUUFBU0MsVUFBVyxTQUNyQ00sTUFBTyxTQUFBQyxhQUFhRyxNQUNwQm5DLEtBQU0sV0FDTjZCLFlBQVksRUFDWmhCLEtBQU0sSUFDTkksUUFBUyxXQUFNLGdCQUtSLFFBQUFtQixzQkFBd0JqQyxpQkFBaUJhLEtBQUssQ0FBQyxHQUM1RCxRQUFBb0Isc0JBQUEsS0FBNkIsQ0FDM0IzQixXQUFZLENBQ1YsQ0FDRUssS0FBTSxZQUNORCxLQUFNLEtBQ05JLFFBQVMsV0FBTSxjQUVqQixDQUNFSCxLQUFNLFdBQ05ELEtBQU0sSUFDTkksUUFBUyxXQUFNLGNBRWpCLENBQ0VILEtBQU0sV0FDTkQsS0FBTSxJQUNOSSxRQUFTLFdBQU0sY0FFakIsQ0FDRUgsS0FBTSxXQUNORCxLQUFNLElBQ05JLFFBQVMsV0FBTSxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL2NvbXBvbmVudExpYnJhcnkvYnV0dG9uL0J1dHRvbi5zdG9yeS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXRhLCBTdG9yeUZufSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24sIHtCdXR0b25Qcm9wcywgYnV0dG9uQ29sb3JzfSBmcm9tICcuL0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdEZXNpZ25TeXN0ZW0vQnV0dG9uL0J1dHRvbicsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgc3Rvcnlib29rL25vLXRpdGxlLXByb3BlcnR5LWluLW1ldGFcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlLW5leHQtbGluZVxuICBjb21wb25lbnQ6IEJ1dHRvbi50eXBlLFxufSBhcyBNZXRhO1xuXG4vL1xuLy8gVEVNUExBVEVcbi8vXG5jb25zdCBTaW5nbGVUZW1wbGF0ZTogU3RvcnlGbjxCdXR0b25Qcm9wcz4gPSBhcmdzID0+IDxCdXR0b24gey4uLmFyZ3N9IC8+O1xuXG5jb25zdCBNdWx0aXBsZVRlbXBsYXRlOiBTdG9yeUZuPHtcbiAgY29tcG9uZW50czogQnV0dG9uUHJvcHNbXTtcbn0+ID0gYXJncyA9PiAoXG4gIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleEZsb3c6ICd3cmFwJyxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgIGdhcDogJzIwcHgnLFxuICAgIH19XG4gID5cbiAgICB7YXJncy5jb21wb25lbnRzPy5tYXAoY29tcG9uZW50QXJnID0+IChcbiAgICAgIDxCdXR0b25cbiAgICAgICAga2V5PXtgJHtjb21wb25lbnRBcmcuc2l6ZX0tJHtjb21wb25lbnRBcmcudGV4dH1gfVxuICAgICAgICB7Li4uY29tcG9uZW50QXJnfVxuICAgICAgLz5cbiAgICApKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdEJ1dHRvbiA9IFNpbmdsZVRlbXBsYXRlLmJpbmQoe30pO1xuRGVmYXVsdEJ1dHRvbi5hcmdzID0ge1xuICB0ZXh0OiAnQnV0dG9uJyxcbiAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgc2l6ZTogJ20nLFxufTtcblxuZXhwb3J0IGNvbnN0IERpc2FibGVkQnV0dG9uID0gU2luZ2xlVGVtcGxhdGUuYmluZCh7fSk7XG5EaXNhYmxlZEJ1dHRvbi5hcmdzID0ge1xuICB0ZXh0OiAnQnV0dG9uJyxcbiAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgZGlzYWJsZWQ6IHRydWUsXG4gIHNpemU6ICdtJyxcbn07XG5cbmV4cG9ydCBjb25zdCBQZW5kaW5nQnV0dG9uID0gU2luZ2xlVGVtcGxhdGUuYmluZCh7fSk7XG5QZW5kaW5nQnV0dG9uLmFyZ3MgPSB7XG4gIHRleHQ6ICdCdXR0b24nLFxuICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICBpc1BlbmRpbmc6IHRydWUsXG4gIHNpemU6ICdtJyxcbn07XG5cbmV4cG9ydCBjb25zdCBCdXR0b25XaXRoSWNvbnMgPSBTaW5nbGVUZW1wbGF0ZS5iaW5kKHt9KTtcbkJ1dHRvbldpdGhJY29ucy5hcmdzID0ge1xuICB0ZXh0OiAnQnV0dG9uJyxcbiAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgaWNvbkxlZnQ6IHtpY29uTmFtZTogJ2hvdXNlJywgaWNvblN0eWxlOiAnc29saWQnfSxcbiAgaWNvblJpZ2h0OiB7aWNvbk5hbWU6ICdzbWlsZScsIGljb25TdHlsZTogJ3NvbGlkJ30sXG4gIHNpemU6ICdtJyxcbn07XG5cbmV4cG9ydCBjb25zdCBJY29uQnV0dG9uID0gU2luZ2xlVGVtcGxhdGUuYmluZCh7fSk7XG5JY29uQnV0dG9uLmFyZ3MgPSB7XG4gIGljb246IHtpY29uTmFtZTogJ3NtaWxlJywgaWNvblN0eWxlOiAnc29saWQnfSxcbiAgdHlwZTogJ3ByaW1hcnknLFxuICBpc0ljb25Pbmx5OiB0cnVlLFxuICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICBzaXplOiAnbScsXG59O1xuXG5leHBvcnQgY29uc3QgR3JvdXBPZkNvbG9yc09mQnV0dG9ucyA9IE11bHRpcGxlVGVtcGxhdGUuYmluZCh7fSk7XG5Hcm91cE9mQ29sb3JzT2ZCdXR0b25zLmFyZ3MgPSB7XG4gIGNvbXBvbmVudHM6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQnV0dG9uIFByaW1hcnkgUHVycGxlJyxcbiAgICAgIGNvbG9yOiBidXR0b25Db2xvcnMucHVycGxlLFxuICAgICAgc2l6ZTogJ20nLFxuICAgICAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdXR0b24gUHJpbWFyeSBCbGFjaycsXG4gICAgICBjb2xvcjogYnV0dG9uQ29sb3JzLmJsYWNrLFxuICAgICAgc2l6ZTogJ20nLFxuICAgICAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdXR0b24gUHJpbWFyeSBXaGl0ZScsXG4gICAgICBjb2xvcjogYnV0dG9uQ29sb3JzLndoaXRlLFxuICAgICAgc2l6ZTogJ20nLFxuICAgICAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdXR0b24gU2Vjb25kYXJ5IFB1cnBsZScsXG4gICAgICBjb2xvcjogYnV0dG9uQ29sb3JzLnB1cnBsZSxcbiAgICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgICAgc2l6ZTogJ20nLFxuICAgICAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdXR0b24gU2Vjb25kYXJ5IEJsYWNrJyxcbiAgICAgIGNvbG9yOiBidXR0b25Db2xvcnMuYmxhY2ssXG4gICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICAgIHNpemU6ICdtJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQnV0dG9uIFNlY29uZGFyeSBXaGl0ZScsXG4gICAgICBjb2xvcjogYnV0dG9uQ29sb3JzLndoaXRlLFxuICAgICAgdHlwZTogJ3NlY29uZGFyeScsXG4gICAgICBzaXplOiAnbScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1dHRvbiBUZXJ0aWFyeSBQdXJwbGUnLFxuICAgICAgY29sb3I6IGJ1dHRvbkNvbG9ycy5wdXJwbGUsXG4gICAgICB0eXBlOiAndGVydGlhcnknLFxuICAgICAgc2l6ZTogJ20nLFxuICAgICAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdXR0b24gVGVydGlhcnkgQmxhY2snLFxuICAgICAgY29sb3I6IGJ1dHRvbkNvbG9ycy5ibGFjayxcbiAgICAgIHR5cGU6ICd0ZXJ0aWFyeScsXG4gICAgICBzaXplOiAnbScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1dHRvbiBUZXJ0aWFyeSBXaGl0ZScsXG4gICAgICBjb2xvcjogYnV0dG9uQ29sb3JzLndoaXRlLFxuICAgICAgdHlwZTogJ3RlcnRpYXJ5JyxcbiAgICAgIHNpemU6ICdtJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiB7aWNvbk5hbWU6ICdzbWlsZScsIGljb25TdHlsZTogJ3NvbGlkJ30sXG4gICAgICBjb2xvcjogYnV0dG9uQ29sb3JzLnB1cnBsZSxcbiAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgIGlzSWNvbk9ubHk6IHRydWUsXG4gICAgICBzaXplOiAnbScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjoge2ljb25OYW1lOiAnc21pbGUnLCBpY29uU3R5bGU6ICdzb2xpZCd9LFxuICAgICAgY29sb3I6IGJ1dHRvbkNvbG9ycy5ibGFjayxcbiAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgIGlzSWNvbk9ubHk6IHRydWUsXG4gICAgICBzaXplOiAnbScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjoge2ljb25OYW1lOiAnc21pbGUnLCBpY29uU3R5bGU6ICdzb2xpZCd9LFxuICAgICAgY29sb3I6IGJ1dHRvbkNvbG9ycy53aGl0ZSxcbiAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgIGlzSWNvbk9ubHk6IHRydWUsXG4gICAgICBzaXplOiAnbScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjoge2ljb25OYW1lOiAnc21pbGUnLCBpY29uU3R5bGU6ICdzb2xpZCd9LFxuICAgICAgY29sb3I6IGJ1dHRvbkNvbG9ycy5wdXJwbGUsXG4gICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICAgIGlzSWNvbk9ubHk6IHRydWUsXG4gICAgICBzaXplOiAnbScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjoge2ljb25OYW1lOiAnc21pbGUnLCBpY29uU3R5bGU6ICdzb2xpZCd9LFxuICAgICAgY29sb3I6IGJ1dHRvbkNvbG9ycy5ibGFjayxcbiAgICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgICAgaXNJY29uT25seTogdHJ1ZSxcbiAgICAgIHNpemU6ICdtJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiB7aWNvbk5hbWU6ICdzbWlsZScsIGljb25TdHlsZTogJ3NvbGlkJ30sXG4gICAgICBjb2xvcjogYnV0dG9uQ29sb3JzLndoaXRlLFxuICAgICAgdHlwZTogJ3NlY29uZGFyeScsXG4gICAgICBpc0ljb25Pbmx5OiB0cnVlLFxuICAgICAgc2l6ZTogJ20nLFxuICAgICAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IHtpY29uTmFtZTogJ3NtaWxlJywgaWNvblN0eWxlOiAnc29saWQnfSxcbiAgICAgIGNvbG9yOiBidXR0b25Db2xvcnMucHVycGxlLFxuICAgICAgdHlwZTogJ3RlcnRpYXJ5JyxcbiAgICAgIGlzSWNvbk9ubHk6IHRydWUsXG4gICAgICBzaXplOiAnbScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjoge2ljb25OYW1lOiAnc21pbGUnLCBpY29uU3R5bGU6ICdzb2xpZCd9LFxuICAgICAgY29sb3I6IGJ1dHRvbkNvbG9ycy5ibGFjayxcbiAgICAgIHR5cGU6ICd0ZXJ0aWFyeScsXG4gICAgICBpc0ljb25Pbmx5OiB0cnVlLFxuICAgICAgc2l6ZTogJ20nLFxuICAgICAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IHtpY29uTmFtZTogJ3NtaWxlJywgaWNvblN0eWxlOiAnc29saWQnfSxcbiAgICAgIGNvbG9yOiBidXR0b25Db2xvcnMud2hpdGUsXG4gICAgICB0eXBlOiAndGVydGlhcnknLFxuICAgICAgaXNJY29uT25seTogdHJ1ZSxcbiAgICAgIHNpemU6ICdtJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBjb25zdCBHcm91cE9mU2l6ZXNPZkJ1dHRvbnMgPSBNdWx0aXBsZVRlbXBsYXRlLmJpbmQoe30pO1xuR3JvdXBPZlNpemVzT2ZCdXR0b25zLmFyZ3MgPSB7XG4gIGNvbXBvbmVudHM6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQnV0dG9uIHhzJyxcbiAgICAgIHNpemU6ICd4cycsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1dHRvbiBzJyxcbiAgICAgIHNpemU6ICdzJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQnV0dG9uIG0nLFxuICAgICAgc2l6ZTogJ20nLFxuICAgICAgb25DbGljazogKCkgPT4gbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdCdXR0b24gbCcsXG4gICAgICBzaXplOiAnbCcsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gIF0sXG59O1xuIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwidHlwZSIsIlNpbmdsZVRlbXBsYXRlIiwiYXJncyIsIk11bHRpcGxlVGVtcGxhdGUiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RmxvdyIsImFsaWduSXRlbXMiLCJnYXAiLCJjb21wb25lbnRzIiwibWFwIiwiY29tcG9uZW50QXJnIiwia2V5Iiwic2l6ZSIsInRleHQiLCJEZWZhdWx0QnV0dG9uIiwiYmluZCIsIm9uQ2xpY2siLCJEaXNhYmxlZEJ1dHRvbiIsImRpc2FibGVkIiwiUGVuZGluZ0J1dHRvbiIsImlzUGVuZGluZyIsIkJ1dHRvbldpdGhJY29ucyIsImljb25MZWZ0IiwiaWNvbk5hbWUiLCJpY29uU3R5bGUiLCJpY29uUmlnaHQiLCJJY29uQnV0dG9uIiwiaWNvbiIsImlzSWNvbk9ubHkiLCJHcm91cE9mQ29sb3JzT2ZCdXR0b25zIiwiY29sb3IiLCJidXR0b25Db2xvcnMiLCJwdXJwbGUiLCJibGFjayIsIndoaXRlIiwiR3JvdXBPZlNpemVzT2ZCdXR0b25zIl0sInNvdXJjZVJvb3QiOiIifQ==