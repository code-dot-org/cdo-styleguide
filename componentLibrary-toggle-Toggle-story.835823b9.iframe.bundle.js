"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[2087],{"./src/componentLibrary/toggle/Toggle.story.tsx":function(__unused_webpack_module,exports,__webpack_require__){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SizesOfToggleGroup=exports.DisabledToggleGroup=exports.DefaultToggleGroup=exports.DefaultToggle=void 0;var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),index_1=__importDefault(__webpack_require__("./src/componentLibrary/toggle/index.ts"));exports.default={title:"DesignSystem/Toggle",component:index_1.default.type};var MultipleTemplate=function(args){var _a;return react_1.default.createElement(react_1.default.Fragment,null,null===(_a=args.components)||void 0===_a?void 0:_a.map((function(componentArg){return react_1.default.createElement(index_1.default,__assign({key:componentArg.name},componentArg))})))};exports.DefaultToggle=function(args){return react_1.default.createElement(index_1.default,__assign({},args))}.bind({}),exports.DefaultToggle.args={name:"controlled_toggle",label:"Toggle Label"},exports.DefaultToggleGroup=MultipleTemplate.bind({}),exports.DefaultToggleGroup.args={components:[{name:"test-left",label:"Toggle left",checked:!1,onChange:function(){return null}},{name:"test-right",label:"Toggle right",position:"right",checked:!1,onChange:function(){return null}}]},exports.DisabledToggleGroup=MultipleTemplate.bind({}),exports.DisabledToggleGroup.args={components:[{name:"test-disabled",label:"Disabled toggle",disabled:!0,checked:!1,onChange:function(){return null}},{name:"test-disabled-checked",label:"Disabled checked toggle",checked:!0,disabled:!0,onChange:function(){return null}}]},exports.SizesOfToggleGroup=MultipleTemplate.bind({}),exports.SizesOfToggleGroup.args={components:[{name:"test-xs",label:"Label - XS",size:"xs",checked:!1,onChange:function(){return null}},{name:"test-s",label:"Label - S",size:"s",checked:!1,onChange:function(){return null}},{name:"test-m",label:"Label - M",size:"m",checked:!1,onChange:function(){return null}},{name:"test-l",label:"Label - L",size:"l",checked:!1,onChange:function(){return null}}]}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50TGlicmFyeS10b2dnbGUtVG9nZ2xlLXN0b3J5LmFkNWNmYmI2LmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ind0QkFBQSxrRkFHQSx1RkFFQSxnQkFBZSxDQUNiQSxNQUFPLHNCQVNQQyxVQUFXLGdCQUFPQyxNQVFwQixJQUVNQyxpQkFBeUQsU0FBQUMsTSxPQUFRLE9BQ3JFLDREQUNrQixRQUFmLEdBQUFBLEtBQUtDLGtCQUFVLGlCQUFFQyxLQUFJLFNBQUFDLGNBQWdCLE9BQ3BDLDhCQUFDLGdCQUFNLFVBQUNDLElBQUtELGFBQWFFLE1BQVVGLGNBREEsSSxFQU03QixRQUFBRyxjQVZnQyxTQUFBTixNQUFRLHFDQUFDLGdCQUFNLFlBQUtBLE1BQVosRUFVVE8sS0FBSyxDQUFDLEdBQ2xELFFBQUFELGNBQUEsS0FBcUIsQ0FDbkJELEtBQU0sb0JBQ05HLE1BQU8sZ0JBR0ksUUFBQUMsbUJBQXFCVixpQkFBaUJRLEtBQUssQ0FBQyxHQUN6RCxRQUFBRSxtQkFBQSxLQUEwQixDQUN4QlIsV0FBWSxDQUNWLENBQ0VJLEtBQU0sWUFDTkcsTUFBTyxjQUNQRSxTQUFTLEVBQ1RDLFNBQVUsV0FBTSxjQUVsQixDQUNFTixLQUFNLGFBQ05HLE1BQU8sZUFDUEksU0FBVSxRQUNWRixTQUFTLEVBQ1RDLFNBQVUsV0FBTSxnQkFLVCxRQUFBRSxvQkFBc0JkLGlCQUFpQlEsS0FBSyxDQUFDLEdBQzFELFFBQUFNLG9CQUFBLEtBQTJCLENBQ3pCWixXQUFZLENBQ1YsQ0FDRUksS0FBTSxnQkFDTkcsTUFBTyxrQkFDUE0sVUFBVSxFQUNWSixTQUFTLEVBQ1RDLFNBQVUsV0FBTSxjQUVsQixDQUNFTixLQUFNLHdCQUNORyxNQUFPLDBCQUNQRSxTQUFTLEVBQ1RJLFVBQVUsRUFDVkgsU0FBVSxXQUFNLGdCQUtULFFBQUFJLG1CQUFxQmhCLGlCQUFpQlEsS0FBSyxDQUFDLEdBQ3pELFFBQUFRLG1CQUFBLEtBQTBCLENBQ3hCZCxXQUFZLENBQ1YsQ0FDRUksS0FBTSxVQUNORyxNQUFPLGFBQ1BRLEtBQU0sS0FDTk4sU0FBUyxFQUNUQyxTQUFVLFdBQU0sY0FFbEIsQ0FDRU4sS0FBTSxTQUNORyxNQUFPLFlBQ1BRLEtBQU0sSUFDTk4sU0FBUyxFQUNUQyxTQUFVLFdBQU0sY0FFbEIsQ0FDRU4sS0FBTSxTQUNORyxNQUFPLFlBQ1BRLEtBQU0sSUFDTk4sU0FBUyxFQUNUQyxTQUFVLFdBQU0sY0FFbEIsQ0FDRU4sS0FBTSxTQUNORyxNQUFPLFlBQ1BRLEtBQU0sSUFDTk4sU0FBUyxFQUNUQyxTQUFVLFdBQU0sZSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrbHktbW9vYy8uL3NyYy9jb21wb25lbnRMaWJyYXJ5L3RvZ2dsZS9Ub2dnbGUuc3RvcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge01ldGEsIFN0b3J5Rm59IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuXG5pbXBvcnQgVG9nZ2xlLCB7VG9nZ2xlUHJvcHN9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnRGVzaWduU3lzdGVtL1RvZ2dsZScsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgc3Rvcnlib29rL25vLXRpdGxlLXByb3BlcnR5LWluLW1ldGFcbiAgLyoqXG4gICAqIFN0b3J5Ym9vayBEb2NzIEdlbmVyYXRpb24gZG9lc24ndCB3b3JrIHByb3Blcmx5IChhcyBvZiAwNy4xOS4yMDIzKS5cbiAgICogVGhpcyB3b3JrYXJvdW5kIChjb21wb25lbnQ6IENvbXBvbmVudC50eXBlIGluc3RlYWQgb2YgY29tcG9uZW50OiBDb21wb25lbnQpIGlzIHRha2VuIGZyb21cbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3N0b3J5Ym9va2pzL3N0b3J5Ym9vay9pc3N1ZXMvMTgxMzYjaXNzdWUtMTIyNTY5Mjc1MVxuICAgKiBGZWVsIGZyZWUgdG8gcmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCB3aGVuIHN0b3J5Ym9vayBmaXhlcyB0aGlzIGlzc3VlLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlLW5leHQtbGluZVxuICBjb21wb25lbnQ6IFRvZ2dsZS50eXBlLFxufSBhcyBNZXRhO1xuXG4vL1xuLy8gVEVNUExBVEVcbi8vXG4vLyBUaGlzIGlzIG5lZWRlZCB0byBmaXggY2hpbGRyZW4gdHlwZSBlcnJvciAocGFzc2luZyBzdHJpbmcgaW5zdGVhZCBvZiBSZWFjdC5SZWFjdE5vZGUgdHlwZSlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc3QgU2luZ2xlVGVtcGxhdGU6IFN0b3J5Rm48VG9nZ2xlUHJvcHM+ID0gYXJncyA9PiA8VG9nZ2xlIHsuLi5hcmdzfSAvPjtcblxuY29uc3QgTXVsdGlwbGVUZW1wbGF0ZTogU3RvcnlGbjx7Y29tcG9uZW50czogVG9nZ2xlUHJvcHNbXX0+ID0gYXJncyA9PiAoXG4gIDw+XG4gICAge2FyZ3MuY29tcG9uZW50cz8ubWFwKGNvbXBvbmVudEFyZyA9PiAoXG4gICAgICA8VG9nZ2xlIGtleT17Y29tcG9uZW50QXJnLm5hbWV9IHsuLi5jb21wb25lbnRBcmd9IC8+XG4gICAgKSl9XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRUb2dnbGUgPSBTaW5nbGVUZW1wbGF0ZS5iaW5kKHt9KTtcbkRlZmF1bHRUb2dnbGUuYXJncyA9IHtcbiAgbmFtZTogJ2NvbnRyb2xsZWRfdG9nZ2xlJyxcbiAgbGFiZWw6ICdUb2dnbGUgTGFiZWwnLFxufTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRUb2dnbGVHcm91cCA9IE11bHRpcGxlVGVtcGxhdGUuYmluZCh7fSk7XG5EZWZhdWx0VG9nZ2xlR3JvdXAuYXJncyA9IHtcbiAgY29tcG9uZW50czogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd0ZXN0LWxlZnQnLFxuICAgICAgbGFiZWw6ICdUb2dnbGUgbGVmdCcsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIG9uQ2hhbmdlOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3Rlc3QtcmlnaHQnLFxuICAgICAgbGFiZWw6ICdUb2dnbGUgcmlnaHQnLFxuICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIG9uQ2hhbmdlOiAoKSA9PiBudWxsLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgY29uc3QgRGlzYWJsZWRUb2dnbGVHcm91cCA9IE11bHRpcGxlVGVtcGxhdGUuYmluZCh7fSk7XG5EaXNhYmxlZFRvZ2dsZUdyb3VwLmFyZ3MgPSB7XG4gIGNvbXBvbmVudHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAndGVzdC1kaXNhYmxlZCcsXG4gICAgICBsYWJlbDogJ0Rpc2FibGVkIHRvZ2dsZScsXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndGVzdC1kaXNhYmxlZC1jaGVja2VkJyxcbiAgICAgIGxhYmVsOiAnRGlzYWJsZWQgY2hlY2tlZCB0b2dnbGUnLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgb25DaGFuZ2U6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBjb25zdCBTaXplc09mVG9nZ2xlR3JvdXAgPSBNdWx0aXBsZVRlbXBsYXRlLmJpbmQoe30pO1xuU2l6ZXNPZlRvZ2dsZUdyb3VwLmFyZ3MgPSB7XG4gIGNvbXBvbmVudHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAndGVzdC14cycsXG4gICAgICBsYWJlbDogJ0xhYmVsIC0gWFMnLFxuICAgICAgc2l6ZTogJ3hzJyxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndGVzdC1zJyxcbiAgICAgIGxhYmVsOiAnTGFiZWwgLSBTJyxcbiAgICAgIHNpemU6ICdzJyxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndGVzdC1tJyxcbiAgICAgIGxhYmVsOiAnTGFiZWwgLSBNJyxcbiAgICAgIHNpemU6ICdtJyxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndGVzdC1sJyxcbiAgICAgIGxhYmVsOiAnTGFiZWwgLSBMJyxcbiAgICAgIHNpemU6ICdsJyxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6ICgpID0+IG51bGwsXG4gICAgfSxcbiAgXSxcbn07XG4iXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJ0eXBlIiwiTXVsdGlwbGVUZW1wbGF0ZSIsImFyZ3MiLCJjb21wb25lbnRzIiwibWFwIiwiY29tcG9uZW50QXJnIiwia2V5IiwibmFtZSIsIkRlZmF1bHRUb2dnbGUiLCJiaW5kIiwibGFiZWwiLCJEZWZhdWx0VG9nZ2xlR3JvdXAiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJwb3NpdGlvbiIsIkRpc2FibGVkVG9nZ2xlR3JvdXAiLCJkaXNhYmxlZCIsIlNpemVzT2ZUb2dnbGVHcm91cCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9