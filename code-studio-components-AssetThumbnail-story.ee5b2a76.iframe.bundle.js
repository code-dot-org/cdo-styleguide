"use strict";(self.webpackChunkblockly_mooc=self.webpackChunkblockly_mooc||[]).push([[8141],{"./src/code-studio/components/AssetThumbnail.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.styles=exports.default=void 0;var _Class,_Class2,_Class3,_propTypes=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_clientApi=__webpack_require__("./src/clientApi.js"),_color=_interopRequireDefault(__webpack_require__("./src/util/color.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultIcons={image:"fa fa-picture-o",audio:"fa fa-music",video:"fa fa-video-camera",pdf:"fa fa-file-pdf-o",doc:"fa fa-file-text-o",unknown:"fa fa-question"},assetThumbnailStyle={width:"auto",maxWidth:"100%",height:"auto",maxHeight:"100%",marginTop:"50%",transform:"translateY(-50%)",msTransform:"translateY(-50%)",WebkitTransform:"translateY(-50%)"},assetIconStyle={margin:"15px 0",fontSize:"32px"},styles=exports.styles={wrapper:{width:60,height:60,margin:"10px auto"},background:{background:"#eee",border:"1px solid #ccc",textAlign:"center"},audioIcon:{color:_color.default.purple,marginLeft:"auto",marginRight:"auto",display:"block"},audioWrapper:{display:"flex"}},AssetThumbnail=function(_React$Component){function AssetThumbnail(props){var _this;_defineProperty(_this=_React$Component.call(this,props)||this,"clickSoundControl",(function(){_this.state.isPlayingAudio&&_this.props.soundPlayer?(_this.setState({isPlayingAudio:!1}),_this.props.soundPlayer.stopPlayingURL(_this.srcPath)):_this.props.soundPlayer&&(_this.setState({isPlayingAudio:!0}),_this.props.soundPlayer.play(_this.srcPath,{onEnded:function onEnded(){_this.setState({isPlayingAudio:!1})}}))}));var api=_this.props.api||_clientApi.assets;_this.props.levelName?api=api.withLevelName(_this.props.levelName):_this.props.projectId&&(api=api.withProjectId(_this.props.projectId));var basePath=api.basePath(_this.props.name),cacheBustSuffix="";if(_this.props.timestamp){var date=new Date(_this.props.timestamp);cacheBustSuffix="?t=".concat(date.valueOf())}return _this.srcPath="".concat(basePath).concat(cacheBustSuffix),"audio"===_this.props.type&&_this.props.soundPlayer&&_this.props.soundPlayer.register({id:_this.srcPath,mp3:_this.srcPath}),_this.state={isPlayingAudio:!1},_this}return _inheritsLoose(AssetThumbnail,_React$Component),AssetThumbnail.prototype.render=function render(){var _this$props=this.props,type=_this$props.type,iconStyle=_this$props.iconStyle,style=_this$props.style;return _react.default.createElement("div",{className:"assetThumbnail"},"audio"===type?_react.default.createElement(AudioThumbnail,{clickSoundControl:this.clickSoundControl,isPlaying:this.state.isPlayingAudio}):_react.default.createElement("div",{style:_objectSpread(_objectSpread(_objectSpread({},styles.wrapper),style),styles.background)},"image"===type?_react.default.createElement(ImageThumbnail,{src:this.srcPath}):_react.default.createElement(DefaultThumbnail,{type,iconStyle})))},AssetThumbnail}(_react.default.Component);_defineProperty(AssetThumbnail,"propTypes",{name:_propTypes.default.string.isRequired,timestamp:_propTypes.default.string,type:_propTypes.default.oneOf(["image","audio","video","pdf","doc"]).isRequired,style:_propTypes.default.object,iconStyle:_propTypes.default.object,api:_propTypes.default.object,projectId:_propTypes.default.string,levelName:_propTypes.default.string,soundPlayer:_propTypes.default.object});exports.default=AssetThumbnail;var AudioThumbnail=(_Class=function(_React$Component2){function AudioThumbnail(){return _React$Component2.apply(this,arguments)||this}return _inheritsLoose(AudioThumbnail,_React$Component2),AudioThumbnail.prototype.render=function render(){var playIcon=this.props.isPlaying?"fa-pause-circle":"fa-play-circle";return _react.default.createElement("div",{style:_objectSpread(_objectSpread({},styles.wrapper),styles.audioWrapper)},_react.default.createElement("i",{onClick:this.props.clickSoundControl,className:"fa "+playIcon+" fa-4x",style:styles.audioIcon}))},AudioThumbnail}(_react.default.Component),_defineProperty(_Class,"propTypes",{clickSoundControl:_propTypes.default.func,isPlaying:_propTypes.default.bool}),_Class),ImageThumbnail=(_Class2=function(_React$Component3){function ImageThumbnail(){return _React$Component3.apply(this,arguments)||this}return _inheritsLoose(ImageThumbnail,_React$Component3),ImageThumbnail.prototype.render=function render(){return _react.default.createElement("a",{href:this.props.src,target:"_blank",rel:"noopener noreferrer"},_react.default.createElement("img",{src:this.props.src,style:assetThumbnailStyle,id:"ui-image-thumbnail",alt:""}))},ImageThumbnail}(_react.default.Component),_defineProperty(_Class2,"propTypes",{src:_propTypes.default.string}),_Class2),DefaultThumbnail=(_Class3=function(_React$Component4){function DefaultThumbnail(){return _React$Component4.apply(this,arguments)||this}return _inheritsLoose(DefaultThumbnail,_React$Component4),DefaultThumbnail.prototype.render=function render(){return _react.default.createElement("i",{className:defaultIcons[this.props.type]||defaultIcons.unknown,style:_objectSpread(_objectSpread({},assetIconStyle),this.props.iconStyle)})},DefaultThumbnail}(_react.default.Component),_defineProperty(_Class3,"propTypes",{type:_propTypes.default.oneOf(["image","audio","video","pdf","doc"]).isRequired,iconStyle:_propTypes.default.object}),_Class3)},"./src/code-studio/components/AssetThumbnail.story.jsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.VideoThumbnail=exports.PDFThumbnail=exports.ImageThumbnail=exports.DocThumbnail=exports.AudioThumbnail=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_AssetThumbnail=_interopRequireDefault(__webpack_require__("./src/code-studio/components/AssetThumbnail.jsx"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}exports.default={component:_AssetThumbnail.default};var Template=function Template(args){return _react.default.createElement("div",{style:{width:800}},_react.default.createElement(_AssetThumbnail.default,_extends({name:"AudioTest",useFilesApi:!0,projectId:"123"},args)))};(exports.ImageThumbnail=Template.bind({})).args={type:"image"},(exports.AudioThumbnail=Template.bind({})).args={type:"audio"},(exports.VideoThumbnail=Template.bind({})).args={type:"video"},(exports.DocThumbnail=Template.bind({})).args={type:"doc"},(exports.PDFThumbnail=Template.bind({})).args={type:"pdf"}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1zdHVkaW8tY29tcG9uZW50cy1Bc3NldFRodW1ibmFpbC1zdG9yeS4xNDBlMGJlOS5pZnJhbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJvU0FBQSxJQUl5Q0EsT0FBQUMsUUFBQUMsUUFKekNDLFdBQUFDLHVCQUFBQyxvQkFBQSx1Q0FDQUMsT0FBQUYsdUJBQUFDLG9CQUFBLGtDQUVBRSxXQUFBRixvQkFBQSxzQkFDQUcsT0FBQUosdUJBQUFDLG9CQUFBLHdCQUF5QyxTQUFBRCx1QkFBQUssS0FBQSxPQUFBQSxLQUFBQSxJQUFBQyxXQUFBRCxJQUFBLFNBQUFBLElBQUEsVUFBQUUsUUFBQUMsR0FBQSxPQUFBRCxRQUFBLG1CQUFBRSxRQUFBLGlCQUFBQSxPQUFBQyxTQUFBLFNBQUFGLEdBQUEsY0FBQUEsQ0FBQSxXQUFBQSxHQUFBLE9BQUFBLEdBQUEsbUJBQUFDLFFBQUFELEVBQUFHLGNBQUFGLFFBQUFELElBQUFDLE9BQUFHLFVBQUEsZ0JBQUFKLENBQUEsRUFBQUQsUUFBQUMsRUFBQSxVQUFBSyxRQUFBQyxFQUFBQyxHQUFBLElBQUFDLEVBQUFDLE9BQUFDLEtBQUFKLEdBQUEsR0FBQUcsT0FBQUUsc0JBQUEsS0FBQVgsRUFBQVMsT0FBQUUsc0JBQUFMLEdBQUFDLElBQUFQLEVBQUFBLEVBQUFZLFFBQUEsU0FBQUwsR0FBQSxPQUFBRSxPQUFBSSx5QkFBQVAsRUFBQUMsR0FBQU8sVUFBQSxLQUFBTixFQUFBTyxLQUFBQyxNQUFBUixFQUFBUixFQUFBLFFBQUFRLENBQUEsVUFBQVMsY0FBQVgsR0FBQSxRQUFBQyxFQUFBLEVBQUFBLEVBQUFXLFVBQUFDLE9BQUFaLElBQUEsS0FBQUMsRUFBQSxNQUFBVSxVQUFBWCxHQUFBVyxVQUFBWCxHQUFBLEdBQUFBLEVBQUEsRUFBQUYsUUFBQUksT0FBQUQsSUFBQSxHQUFBWSxTQUFBLFNBQUFiLEdBQUFjLGdCQUFBZixFQUFBQyxFQUFBQyxFQUFBRCxHQUFBLElBQUFFLE9BQUFhLDBCQUFBYixPQUFBYyxpQkFB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QSxPQUFBQSxTQUFBbkksT0FBQW9JLE9BQUFwSSxPQUFBb0ksT0FBQTdHLE9BQUEsU0FBQXVHLFFBQUEsUUFBQWxHLEVBQUEsRUFBQUEsRUFBQW5CLFVBQUFDLE9BQUFrQixJQUFBLEtBQUF5RyxPQUFBNUgsVUFBQW1CLEdBQUEsUUFBQUgsT0FBQTRHLE9BQUFySSxPQUFBTCxVQUFBMkksZUFBQXZHLEtBQUFzRyxPQUFBNUcsT0FBQXFHLE9BQUFyRyxLQUFBNEcsT0FBQTVHLEtBQUEsUUFBQXFHLE1BQUEsRUFBQUssU0FBQTVILE1BQUEsS0FBQUUsVUFBQSxDQUFBZ0QsUUFBQUEsUUFFL0IsQ0FDYjhFLFVBQVdsRSxnQkFBQUEsU0FIaUMsSUFPeENtRSxTQUFXLFNBQVhBLFNBQVdDLE1BQUksT0FDbkJ4SixPQUFBLFFBQUF1SCxjQUFBLE9BQUtELE1BQU8sQ0FBQzFELE1BQU8sTUFDbEI1RCxPQUFBLFFBQUF1SCxjQUFDMEIsZ0JBQUEsUUFBY0MsU0FBQSxDQUNiM0MsS0FBSyxZQUNMa0QsYUFBYSxFQUNickQsVUFBVSxPQUNOb0QsT0FFRixHQUltQmhGLFFBQUFBLGVBQUcrRSxTQUFTakgsS0FBSyxDQUFDLElBQzlCa0gsS0FBTyxDQUNwQjFDLEtBQU0sVUFHbUJ0QyxRQUFBQSxlQUFHK0UsU0FBU2pILEtBQUssQ0FBQyxJQUM5QmtILEtBQU8sQ0FDcEIxQyxLQUFNLFVBR21CdEMsUUFBQUEsZUFBRytFLFNBQVNqSCxLQUFLLENBQUMsSUFDOUJrSCxLQUFPLENBQ3BCMUMsS0FBTSxVQUdpQnRDLFFBQUFBLGFBQUcrRSxTQUFTakgsS0FBSyxDQUFDLElBQzlCa0gsS0FBTyxDQUNsQjFDLEtBQU0sUUFHaUJ0QyxRQUFBQSxhQUFHK0UsU0FBU2pILEtBQUssQ0FBQyxJQUM5QmtILEtBQU8sQ0FDbEIxQyxLQUFNLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja2x5LW1vb2MvLi9zcmMvY29kZS1zdHVkaW8vY29tcG9uZW50cy9Bc3NldFRodW1ibmFpbC5qc3giLCJ3ZWJwYWNrOi8vYmxvY2tseS1tb29jLy4vc3JjL2NvZGUtc3R1ZGlvL2NvbXBvbmVudHMvQXNzZXRUaHVtYm5haWwuc3RvcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge2Fzc2V0cyBhcyBhc3NldHNBcGl9IGZyb20gJ0BjZG8vYXBwcy9jbGllbnRBcGknO1xuaW1wb3J0IGNvbG9yIGZyb20gJ0BjZG8vYXBwcy91dGlsL2NvbG9yJztcblxuY29uc3QgZGVmYXVsdEljb25zID0ge1xuICBpbWFnZTogJ2ZhIGZhLXBpY3R1cmUtbycsXG4gIGF1ZGlvOiAnZmEgZmEtbXVzaWMnLFxuICB2aWRlbzogJ2ZhIGZhLXZpZGVvLWNhbWVyYScsXG4gIHBkZjogJ2ZhIGZhLWZpbGUtcGRmLW8nLFxuICBkb2M6ICdmYSBmYS1maWxlLXRleHQtbycsXG4gIHVua25vd246ICdmYSBmYS1xdWVzdGlvbicsXG59O1xuXG5jb25zdCBhc3NldFRodW1ibmFpbFN0eWxlID0ge1xuICB3aWR0aDogJ2F1dG8nLFxuICBtYXhXaWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICdhdXRvJyxcbiAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gIG1hcmdpblRvcDogJzUwJScsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICBtc1RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICBXZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcbn07XG5cbmNvbnN0IGFzc2V0SWNvblN0eWxlID0ge1xuICBtYXJnaW46ICcxNXB4IDAnLFxuICBmb250U2l6ZTogJzMycHgnLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgd3JhcHBlcjoge1xuICAgIHdpZHRoOiA2MCxcbiAgICBoZWlnaHQ6IDYwLFxuICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gIH0sXG4gIGJhY2tncm91bmQ6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2VlZScsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gIGF1ZGlvSWNvbjoge1xuICAgIGNvbG9yOiBjb2xvci5wdXJwbGUsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgfSxcbiAgYXVkaW9XcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxufTtcblxuY2xhc3MgQXNzZXRUaHVtYm5haWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0aW1lc3RhbXA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nLCAncGRmJywgJ2RvYyddKS5pc1JlcXVpcmVkLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGljb25TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhcGk6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcHJvamVjdElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxldmVsTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzb3VuZFBsYXllcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgYXBpID0gdGhpcy5wcm9wcy5hcGkgfHwgYXNzZXRzQXBpOyAvLyBGYWxsYmFjayB0byBhc3NldHNBcGkuXG4gICAgaWYgKHRoaXMucHJvcHMubGV2ZWxOYW1lKSB7XG4gICAgICBhcGkgPSBhcGkud2l0aExldmVsTmFtZSh0aGlzLnByb3BzLmxldmVsTmFtZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnByb2plY3RJZCkge1xuICAgICAgYXBpID0gYXBpLndpdGhQcm9qZWN0SWQodGhpcy5wcm9wcy5wcm9qZWN0SWQpO1xuICAgIH1cbiAgICBjb25zdCBiYXNlUGF0aCA9IGFwaS5iYXNlUGF0aCh0aGlzLnByb3BzLm5hbWUpO1xuICAgIGxldCBjYWNoZUJ1c3RTdWZmaXggPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lc3RhbXApIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLnRpbWVzdGFtcCk7XG4gICAgICBjYWNoZUJ1c3RTdWZmaXggPSBgP3Q9JHtkYXRlLnZhbHVlT2YoKX1gO1xuICAgIH1cblxuICAgIHRoaXMuc3JjUGF0aCA9IGAke2Jhc2VQYXRofSR7Y2FjaGVCdXN0U3VmZml4fWA7XG5cbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnYXVkaW8nICYmIHRoaXMucHJvcHMuc291bmRQbGF5ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuc291bmRQbGF5ZXIucmVnaXN0ZXIoe2lkOiB0aGlzLnNyY1BhdGgsIG1wMzogdGhpcy5zcmNQYXRofSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc1BsYXlpbmdBdWRpbzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNsaWNrU291bmRDb250cm9sID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzUGxheWluZ0F1ZGlvICYmIHRoaXMucHJvcHMuc291bmRQbGF5ZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzUGxheWluZ0F1ZGlvOiBmYWxzZX0pO1xuICAgICAgdGhpcy5wcm9wcy5zb3VuZFBsYXllci5zdG9wUGxheWluZ1VSTCh0aGlzLnNyY1BhdGgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zb3VuZFBsYXllcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNQbGF5aW5nQXVkaW86IHRydWV9KTtcbiAgICAgIHRoaXMucHJvcHMuc291bmRQbGF5ZXIucGxheSh0aGlzLnNyY1BhdGgsIHtcbiAgICAgICAgb25FbmRlZDogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzUGxheWluZ0F1ZGlvOiBmYWxzZX0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dHlwZSwgaWNvblN0eWxlLCBzdHlsZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXRUaHVtYm5haWxcIj5cbiAgICAgICAge3R5cGUgPT09ICdhdWRpbycgPyAoXG4gICAgICAgICAgPEF1ZGlvVGh1bWJuYWlsXG4gICAgICAgICAgICBjbGlja1NvdW5kQ29udHJvbD17dGhpcy5jbGlja1NvdW5kQ29udHJvbH1cbiAgICAgICAgICAgIGlzUGxheWluZz17dGhpcy5zdGF0ZS5pc1BsYXlpbmdBdWRpb31cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3suLi5zdHlsZXMud3JhcHBlciwgLi4uc3R5bGUsIC4uLnN0eWxlcy5iYWNrZ3JvdW5kfX0+XG4gICAgICAgICAgICB7dHlwZSA9PT0gJ2ltYWdlJyA/IChcbiAgICAgICAgICAgICAgPEltYWdlVGh1bWJuYWlsIHNyYz17dGhpcy5zcmNQYXRofSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPERlZmF1bHRUaHVtYm5haWwgdHlwZT17dHlwZX0gaWNvblN0eWxlPXtpY29uU3R5bGV9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc3NldFRodW1ibmFpbDtcblxuY29uc3QgQXVkaW9UaHVtYm5haWwgPSBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xpY2tTb3VuZENvbnRyb2w6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzUGxheWluZzogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBsYXlJY29uID0gdGhpcy5wcm9wcy5pc1BsYXlpbmdcbiAgICAgID8gJ2ZhLXBhdXNlLWNpcmNsZSdcbiAgICAgIDogJ2ZhLXBsYXktY2lyY2xlJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7Li4uc3R5bGVzLndyYXBwZXIsIC4uLnN0eWxlcy5hdWRpb1dyYXBwZXJ9fT5cbiAgICAgICAgPGlcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrU291bmRDb250cm9sfVxuICAgICAgICAgIGNsYXNzTmFtZT17J2ZhICcgKyBwbGF5SWNvbiArICcgZmEtNHgnfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYXVkaW9JY29ufVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgSW1hZ2VUaHVtYm5haWwgPSBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5zcmN9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAge1xuICAgICAgICAgIC8vIFRPRE86IEExMXkyNzkgKGh0dHBzOi8vY29kZWRvdG9yZy5hdGxhc3NpYW4ubmV0L2Jyb3dzZS9BMTFZLTI3OSlcbiAgICAgICAgICAvLyBWZXJpZnkgb3IgdXBkYXRlIHRoaXMgYWx0LXRleHQgYXMgbmVjZXNzYXJ5XG4gICAgICAgIH1cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5zcmN9XG4gICAgICAgICAgc3R5bGU9e2Fzc2V0VGh1bWJuYWlsU3R5bGV9XG4gICAgICAgICAgaWQ9XCJ1aS1pbWFnZS10aHVtYm5haWxcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgRGVmYXVsdFRodW1ibmFpbCA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydpbWFnZScsICdhdWRpbycsICd2aWRlbycsICdwZGYnLCAnZG9jJ10pLmlzUmVxdWlyZWQsXG4gICAgaWNvblN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGlcbiAgICAgICAgY2xhc3NOYW1lPXtkZWZhdWx0SWNvbnNbdGhpcy5wcm9wcy50eXBlXSB8fCBkZWZhdWx0SWNvbnMudW5rbm93bn1cbiAgICAgICAgc3R5bGU9e3suLi5hc3NldEljb25TdHlsZSwgLi4udGhpcy5wcm9wcy5pY29uU3R5bGV9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFzc2V0VGh1bWJuYWlsIGZyb20gJy4vQXNzZXRUaHVtYm5haWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogQXNzZXRUaHVtYm5haWwsXG59O1xuXG4vLyBUZW1wbGF0ZVxuY29uc3QgVGVtcGxhdGUgPSBhcmdzID0+IChcbiAgPGRpdiBzdHlsZT17e3dpZHRoOiA4MDB9fT5cbiAgICA8QXNzZXRUaHVtYm5haWxcbiAgICAgIG5hbWU9XCJBdWRpb1Rlc3RcIlxuICAgICAgdXNlRmlsZXNBcGk9e3RydWV9XG4gICAgICBwcm9qZWN0SWQ9XCIxMjNcIlxuICAgICAgey4uLmFyZ3N9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG4vLyBTdG9yaWVzXG5leHBvcnQgY29uc3QgSW1hZ2VUaHVtYm5haWwgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkltYWdlVGh1bWJuYWlsLmFyZ3MgPSB7XG4gIHR5cGU6ICdpbWFnZScsXG59O1xuXG5leHBvcnQgY29uc3QgQXVkaW9UaHVtYm5haWwgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkF1ZGlvVGh1bWJuYWlsLmFyZ3MgPSB7XG4gIHR5cGU6ICdhdWRpbycsXG59O1xuXG5leHBvcnQgY29uc3QgVmlkZW9UaHVtYm5haWwgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcblZpZGVvVGh1bWJuYWlsLmFyZ3MgPSB7XG4gIHR5cGU6ICd2aWRlbycsXG59O1xuXG5leHBvcnQgY29uc3QgRG9jVGh1bWJuYWlsID0gVGVtcGxhdGUuYmluZCh7fSk7XG5Eb2NUaHVtYm5haWwuYXJncyA9IHtcbiAgdHlwZTogJ2RvYycsXG59O1xuXG5leHBvcnQgY29uc3QgUERGVGh1bWJuYWlsID0gVGVtcGxhdGUuYmluZCh7fSk7XG5QREZUaHVtYm5haWwuYXJncyA9IHtcbiAgdHlwZTogJ3BkZicsXG59O1xuIl0sIm5hbWVzIjpbIl9DbGFzcyIsIl9DbGFzczIiLCJfQ2xhc3MzIiwiX3Byb3BUeXBlcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2NsaWVudEFwaSIsIl9jb2xvciIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJvd25LZXlzIiwiZSIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfaW5oZXJpdHNMb29zZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsIl9zZXRQcm90b3R5cGVPZiIsInAiLCJzZXRQcm90b3R5cGVPZiIsImJpbmQiLCJfX3Byb3RvX18iLCJrZXkiLCJ2YWx1ZSIsIl90b1Byb3BlcnR5S2V5IiwiaSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmYXVsdEljb25zIiwiaW1hZ2UiLCJhdWRpbyIsInZpZGVvIiwicGRmIiwiZG9jIiwidW5rbm93biIsImFzc2V0VGh1bWJuYWlsU3R5bGUiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0IiwibWFyZ2luVG9wIiwidHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJXZWJraXRUcmFuc2Zvcm0iLCJhc3NldEljb25TdHlsZSIsIm1hcmdpbiIsImZvbnRTaXplIiwic3R5bGVzIiwiZXhwb3J0cyIsIndyYXBwZXIiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwidGV4dEFsaWduIiwiYXVkaW9JY29uIiwiY29sb3IiLCJwdXJwbGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwiYXVkaW9XcmFwcGVyIiwiQXNzZXRUaHVtYm5haWwiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsInN0YXRlIiwiaXNQbGF5aW5nQXVkaW8iLCJzb3VuZFBsYXllciIsInNldFN0YXRlIiwic3RvcFBsYXlpbmdVUkwiLCJzcmNQYXRoIiwicGxheSIsIm9uRW5kZWQiLCJhcGkiLCJhc3NldHNBcGkiLCJsZXZlbE5hbWUiLCJ3aXRoTGV2ZWxOYW1lIiwicHJvamVjdElkIiwid2l0aFByb2plY3RJZCIsImJhc2VQYXRoIiwibmFtZSIsImNhY2hlQnVzdFN1ZmZpeCIsInRpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiY29uY2F0IiwidmFsdWVPZiIsInR5cGUiLCJyZWdpc3RlciIsImlkIiwibXAzIiwicmVuZGVyIiwiX3RoaXMkcHJvcHMiLCJ0aGlzIiwiaWNvblN0eWxlIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQXVkaW9UaHVtYm5haWwiLCJjbGlja1NvdW5kQ29udHJvbCIsImlzUGxheWluZyIsIkltYWdlVGh1bWJuYWlsIiwic3JjIiwiRGVmYXVsdFRodW1ibmFpbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwib2JqZWN0IiwiX1JlYWN0JENvbXBvbmVudDIiLCJwbGF5SWNvbiIsIm9uQ2xpY2siLCJmdW5jIiwiYm9vbCIsIl9SZWFjdCRDb21wb25lbnQzIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImFsdCIsIl9SZWFjdCRDb21wb25lbnQ0IiwiX0Fzc2V0VGh1bWJuYWlsIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbXBvbmVudCIsIlRlbXBsYXRlIiwiYXJncyIsInVzZUZpbGVzQXBpIl0sInNvdXJjZVJvb3QiOiIifQ==