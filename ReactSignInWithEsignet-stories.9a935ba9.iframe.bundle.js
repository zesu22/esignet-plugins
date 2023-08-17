/*! For license information please see ReactSignInWithEsignet-stories.9a935ba9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_examples=self.webpackChunkstorybook_examples||[]).push([[98],{"./stories/ReactSignInWithEsignet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StandardButton:()=>StandardButton,StandardButtonWithCustomDesign:()=>StandardButtonWithCustomDesign,StandardIconButton:()=>StandardIconButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactSignInWithEsignet_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const esignet_logo_namespaceObject=__webpack_require__.p+"static/media/esignet_logo.2eeb84ee.png";var validResponseTypes=["code"],validDisplays=["page","popup","touch","wap"],validPrompt=["none","login","consent","select_account"],defaultThemes_outline="outline",defaultThemes_filledOrange="filled_orange",defaultThemes_filledBlack="filled_black",defaultThemes_custom="custom",defaultShapes_sharpEdges="sharp_edges",defaultShapes_softEdges="soft_edges",defaultShapes_roundedEdges="rounded_edges",buttonTypes_standard="standard",buttonTypes_icon="icon",injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SignInWithEsignet_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../react-sign-in-with-esignet/src/lib/SignInWithEsignet/SignInWithEsignet.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SignInWithEsignet_module.Z,options);const SignInWithEsignet_SignInWithEsignet_module=SignInWithEsignet_module.Z&&SignInWithEsignet_module.Z.locals?SignInWithEsignet_module.Z.locals:void 0;var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function buildButtonStyles(baseStyle,buttonConfig){return(null==buttonConfig?void 0:buttonConfig.width)&&(baseStyle.width=buttonConfig.width),(null==buttonConfig?void 0:buttonConfig.background)&&(baseStyle.background=buttonConfig.background),(null==buttonConfig?void 0:buttonConfig.textColor)&&(baseStyle.color=buttonConfig.textColor),(null==buttonConfig?void 0:buttonConfig.borderWidth)&&(baseStyle.borderWidth=buttonConfig.borderWidth),(null==buttonConfig?void 0:buttonConfig.borderColor)&&(baseStyle.borderColor=buttonConfig.borderColor),baseStyle}var SignInWithEsignet=function(_a){var _b,_c,props=__rest(_a,[]),oidcConfig=props.oidcConfig,buttonConfig=props.buttonConfig,baseStyle=props.style||{},errorObj=function validateInput(oidcConfig){return oidcConfig&&oidcConfig.authorizeUri&&oidcConfig.redirect_uri&&oidcConfig.client_id&&oidcConfig.scope?oidcConfig.response_type&&!validResponseTypes.includes(oidcConfig.response_type)?"Invalid Response Type":oidcConfig.display&&!validDisplays.includes(oidcConfig.display)?"Invalid display value":oidcConfig.prompt&&!validPrompt.includes(oidcConfig.prompt)?"Invalid prompt value":"":"Required parameter is missing"}(oidcConfig),urlToNavigate="#";errorObj||(urlToNavigate=function buildRedirectURL(oidcConfig){var urlToNavigate=null==oidcConfig?void 0:oidcConfig.authorizeUri;return(null==oidcConfig?void 0:oidcConfig.nonce)&&(urlToNavigate+="?nonce="+oidcConfig.nonce),(null==oidcConfig?void 0:oidcConfig.state)?urlToNavigate+="&state="+oidcConfig.state:urlToNavigate+="&state="+window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(5),(null==oidcConfig?void 0:oidcConfig.client_id)&&(urlToNavigate+="&client_id="+oidcConfig.client_id),(null==oidcConfig?void 0:oidcConfig.redirect_uri)&&(urlToNavigate+="&redirect_uri="+oidcConfig.redirect_uri),(null==oidcConfig?void 0:oidcConfig.scope)&&(urlToNavigate+="&scope="+oidcConfig.scope),(null==oidcConfig?void 0:oidcConfig.response_type)?urlToNavigate+="&response_type="+oidcConfig.response_type:urlToNavigate+="&response_type=code",(null==oidcConfig?void 0:oidcConfig.acr_values)&&(urlToNavigate+="&acr_values="+(null==oidcConfig?void 0:oidcConfig.acr_values)),(null==oidcConfig?void 0:oidcConfig.claims)&&(urlToNavigate+="&claims="+encodeURI(JSON.stringify(oidcConfig.claims))),(null==oidcConfig?void 0:oidcConfig.claims_locales)&&(urlToNavigate+="&claims_locales="+oidcConfig.claims_locales),(null==oidcConfig?void 0:oidcConfig.display)&&(urlToNavigate+="&display="+oidcConfig.display),(null==oidcConfig?void 0:oidcConfig.prompt)&&(urlToNavigate+="&state="+oidcConfig.prompt),(null==oidcConfig?void 0:oidcConfig.max_age)&&(urlToNavigate+="&max_age="+oidcConfig.max_age),(null==oidcConfig?void 0:oidcConfig.ui_locales)&&(urlToNavigate+="&ui_locales="+oidcConfig.ui_locales),urlToNavigate}(oidcConfig)),buttonConfig||(buttonConfig={type:buttonTypes_standard,theme:defaultThemes_outline,labelText:"Sign in with e-Signet",shape:defaultShapes_sharpEdges});var label=null!==(_b=buttonConfig.labelText)&&void 0!==_b?_b:"Sign in with e-Signet",logoPath=null!==(_c=buttonConfig.logoPath)&&void 0!==_c?_c:esignet_logo_namespaceObject,buttonCustomStyle=null,buttonClasses=null,buttonStyle={};return buttonConfig.customStyle?buttonCustomStyle=function buildButtonCustomStyles(baseStyle,buttonConfig){if(!buttonConfig.customStyle)return{};var outerDiv=buttonConfig.type==buttonTypes_icon?buttonConfig.customStyle.outerDivStyleIcon:buttonConfig.customStyle.outerDivStyleStandard;return Object.assign(baseStyle,outerDiv),{outerDivStyle:buildButtonStyles(baseStyle,buttonConfig),logoDivStyle:buttonConfig.customStyle.logoDivStyle,logoImgStyle:buttonConfig.customStyle.logoImgStyle,labelSpanStyle:buttonConfig.customStyle.labelSpanStyle}}(baseStyle,buttonConfig):(buttonClasses=function buildButtonClasses(buttonConfig){var outerDivClasses="",logoDivClasses="",logoImgClasses="",labelSpanClasses=SignInWithEsignet_SignInWithEsignet_module.textbox;if(buttonConfig.theme==defaultThemes_custom)return{outerDivClasses:outerDivClasses=buttonConfig.type==buttonTypes_icon?"sign-in-outer-div-container-icon":"sign-in-outer-div-container-standard",logoDivClasses:"sign-in-logo-div-container",logoImgClasses:"sign-in-logo-img",labelSpanClasses:"sign-in-label-span"};switch(buttonConfig.shape){case defaultShapes_sharpEdges:outerDivClasses=buttonConfig.type==buttonTypes_icon?SignInWithEsignet_SignInWithEsignet_module.sharpRectIcon:SignInWithEsignet_SignInWithEsignet_module.sharpRectBox,logoDivClasses=SignInWithEsignet_SignInWithEsignet_module.sharpLogoBox,logoImgClasses=SignInWithEsignet_SignInWithEsignet_module.sharpLogo;break;case defaultShapes_softEdges:outerDivClasses=buttonConfig.type==buttonTypes_icon?SignInWithEsignet_SignInWithEsignet_module.softRectIcon:SignInWithEsignet_SignInWithEsignet_module.softRectBox,logoDivClasses=SignInWithEsignet_SignInWithEsignet_module.softLogoBox,logoImgClasses=SignInWithEsignet_SignInWithEsignet_module.softLogo;break;case defaultShapes_roundedEdges:outerDivClasses=buttonConfig.type==buttonTypes_icon?SignInWithEsignet_SignInWithEsignet_module.roundedRectIcon:SignInWithEsignet_SignInWithEsignet_module.roundedRectBox,logoDivClasses=SignInWithEsignet_SignInWithEsignet_module.roundedLogoBox,logoImgClasses=SignInWithEsignet_SignInWithEsignet_module.roundedLogo;break;default:outerDivClasses=buttonConfig.type==buttonTypes_icon?SignInWithEsignet_SignInWithEsignet_module.sharpRectIcon:SignInWithEsignet_SignInWithEsignet_module.sharpRectBox,logoDivClasses=SignInWithEsignet_SignInWithEsignet_module.sharpLogoBox,logoImgClasses=SignInWithEsignet_SignInWithEsignet_module.sharpLogo}switch(buttonConfig.theme){case defaultThemes_outline:outerDivClasses+=" "+SignInWithEsignet_SignInWithEsignet_module.standardOutline;break;case defaultThemes_filledOrange:outerDivClasses+=" "+SignInWithEsignet_SignInWithEsignet_module.filledOrange;break;case defaultThemes_filledBlack:outerDivClasses+=" "+SignInWithEsignet_SignInWithEsignet_module.filledBlack;break;default:outerDivClasses+=" "+SignInWithEsignet_SignInWithEsignet_module.standardOutline}return{outerDivClasses,logoDivClasses,logoImgClasses,labelSpanClasses}}(buttonConfig),buttonStyle=buildButtonStyles(baseStyle,buttonConfig)),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[errorObj&&(0,jsx_runtime.jsx)("span",__assign({style:{color:"red",fontSize:"14px"}},{children:errorObj+". Please report to site admin"})),!buttonCustomStyle&&buttonClasses&&(0,jsx_runtime.jsx)("a",__assign({href:urlToNavigate,style:{textDecoration:"none"}},{children:(0,jsx_runtime.jsxs)("div",__assign({className:buttonClasses.outerDivClasses,style:buttonStyle},{children:[(0,jsx_runtime.jsx)("div",__assign({className:buttonClasses.logoDivClasses},{children:(0,jsx_runtime.jsx)("img",{className:buttonClasses.logoImgClasses,src:logoPath})})),buttonConfig.type!=buttonTypes_icon&&(0,jsx_runtime.jsx)("span",__assign({className:buttonClasses.labelSpanClasses},{children:label}))]}))})),buttonCustomStyle&&(0,jsx_runtime.jsx)("a",__assign({href:urlToNavigate,style:{textDecoration:"none"}},{children:(0,jsx_runtime.jsxs)("div",__assign({style:buttonCustomStyle.outerDivStyle},{children:[(0,jsx_runtime.jsx)("div",__assign({style:buttonCustomStyle.logoDivStyle},{children:(0,jsx_runtime.jsx)("img",{style:buttonCustomStyle.logoImgStyle,src:logoPath})})),buttonConfig.type!=buttonTypes_icon&&(0,jsx_runtime.jsx)("span",__assign({style:buttonCustomStyle.labelSpanStyle},{children:label}))]}))}))]})};const SignInWithEsignet_SignInWithEsignet=SignInWithEsignet;try{SignInWithEsignet.displayName="SignInWithEsignet",SignInWithEsignet.__docgenInfo={description:"",displayName:"SignInWithEsignet",props:{oidcConfig:{defaultValue:null,description:"",name:"oidcConfig",required:!0,type:{name:"OidcConfigProp"}},buttonConfig:{defaultValue:null,description:"",name:"buttonConfig",required:!0,type:{name:"ButtonConfigProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../react-sign-in-with-esignet/src/lib/SignInWithEsignet/SignInWithEsignet.tsx#SignInWithEsignet"]={docgenInfo:SignInWithEsignet.__docgenInfo,name:"SignInWithEsignet",path:"../react-sign-in-with-esignet/src/lib/SignInWithEsignet/SignInWithEsignet.tsx#SignInWithEsignet"})}catch(__react_docgen_typescript_loader_error){}function ReactSignInWithEsignet(args){return(0,jsx_runtime.jsx)("div",{style:{width:"100%",background:"#f6f6f2"},children:(0,jsx_runtime.jsx)("div",{style:{margin:"auto",width:"50%",border:"3px solid #d8d8d8",padding:"50px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,jsx_runtime.jsx)(SignInWithEsignet_SignInWithEsignet,{...args})})})}ReactSignInWithEsignet.displayName="ReactSignInWithEsignet",ReactSignInWithEsignet.__docgenInfo={description:"",methods:[],displayName:"ReactSignInWithEsignet"};var _a,_b,_c,_d,_e,_f,_g,_h,_j,ReactSignInWithEsignet_stories_assign=function(){return ReactSignInWithEsignet_stories_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},ReactSignInWithEsignet_stories_assign.apply(this,arguments)},oidcConfig={authorizeUri:"https://esignet.dev.mosip.net/authorize",redirect_uri:"https://healthservices.dev.mosip.net/userprofile",client_id:"88Vjt34c5Twz1oJ",scope:"openid profile",nonce:"ere973eieljznge2311",state:"eree2311",acr_values:"mosip:idp:acr:generated-code mosip:idp:acr:biometrics mosip:idp:acr:static-code",claims_locales:"en",display:"page",prompt:"consent",max_age:21,ui_locales:"en"};const ReactSignInWithEsignet_stories={title:"React/Sign In With Esignet",tags:["autodocs"],component:ReactSignInWithEsignet,argTypes:{oidcConfig:{control:"object",description:"Open Id connect configurations",table:{defaultValue:{detail:JSON.stringify(oidcConfig,null,"  "),summary:"oidcConfig"},type:{detail:'{\r\n  authorizeUri: "string",\r\n  redirect_uri: "string",\r\n  client_id: "string",\r\n  scope: "string",\r\n  nonce: "string",\r\n  state: "string",\r\n  acr_values: "string",\r\n  claims_locales: "string",\r\n  ui_locales: "string",\r\n  display: "page" | "popup" | "touch" | "wap",\r\n  max_age: "number",\r\n  prompt: "none" | "login" | "consent" | "select_account",\r\n}',summary:"OidcConfigType"}}},buttonConfig:{control:"object",description:"Configuration for sign in button",table:{defaultValue:{detail:JSON.stringify({type:"standard",theme:"outline",shape:"sharp_edges",labelText:"Sign in with e-Signet"},null,"  "),summary:"buttonConfig"},type:{detail:'{\r\n  type: "standard" | "icon",\r\n  theme: "outline" | "filled_orange" | "filled_black" | "custom",\r\n  shape: "sharp_edges" | "soft_edges" | "rounded_edges",\r\n  labelText: "string",\r\n  logoPath: "string",\r\n  width: "string",\r\n  background: "string",\r\n  textColor: "string",\r\n  borderColor: "string",\r\n  borderWidth: "string",\r\n  font: "string",\r\n  fontFamily: "string",\r\n  customStyle: "Json-Object",\r\n}',summary:"ButtonConfigProp"}}}},parameters:{layout:"fullscreen"}};var StandardButton={args:{oidcConfig,buttonConfig:{type:"standard",theme:"filled_orange",shape:"soft_edges",labelText:"Sign in with e-Signet"}}},StandardIconButton={args:{oidcConfig,buttonConfig:{type:"icon",theme:"filled_orange",shape:"soft_edges",labelText:"Sign in with e-Signet"}}},StandardButtonWithCustomDesign={args:{oidcConfig,buttonConfig:{labelText:"Sign in with e-Signet",customStyle:{outerDivStyleStandard:{position:"relative",width:"250px",border:"1px solid #0E3572",background:"#0E3572",padding:"0.625rem 1.25rem",display:"flex","border-radius":"0.375rem","text-decoration":"none",color:"white","align-items":"center"},logoDivStyle:{border:"1px solid #0E3572","border-radius":"18px",background:"white",position:"absolute",display:"inline-block",alignItems:"center",verticalAlign:"middle",width:"30px",height:"30px",right:"8px"},logoImgStyle:{width:"29px",height:"29px","object-fit":"contain"},labelSpanStyle:{display:"inline-block","vertical-align":"middle","font-weight":"600","font-size":"0.875rem","line-height":"1.25rem"}}}}};StandardButton.parameters=ReactSignInWithEsignet_stories_assign(ReactSignInWithEsignet_stories_assign({},StandardButton.parameters),{docs:ReactSignInWithEsignet_stories_assign(ReactSignInWithEsignet_stories_assign({},null===(_a=StandardButton.parameters)||void 0===_a?void 0:_a.docs),{source:ReactSignInWithEsignet_stories_assign({originalSource:'{\n  args: {\n    oidcConfig,\n    buttonConfig: {\n      type: "standard",\n      theme: "filled_orange",\n      shape: "soft_edges",\n      labelText: "Sign in with e-Signet"\n    }\n  }\n}'},null===(_c=null===(_b=StandardButton.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),StandardIconButton.parameters=ReactSignInWithEsignet_stories_assign(ReactSignInWithEsignet_stories_assign({},StandardIconButton.parameters),{docs:ReactSignInWithEsignet_stories_assign(ReactSignInWithEsignet_stories_assign({},null===(_d=StandardIconButton.parameters)||void 0===_d?void 0:_d.docs),{source:ReactSignInWithEsignet_stories_assign({originalSource:'{\n  args: {\n    oidcConfig,\n    buttonConfig: {\n      type: "icon",\n      theme: "filled_orange",\n      shape: "soft_edges",\n      labelText: "Sign in with e-Signet"\n    }\n  }\n}'},null===(_f=null===(_e=StandardIconButton.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),StandardButtonWithCustomDesign.parameters=ReactSignInWithEsignet_stories_assign(ReactSignInWithEsignet_stories_assign({},StandardButtonWithCustomDesign.parameters),{docs:ReactSignInWithEsignet_stories_assign(ReactSignInWithEsignet_stories_assign({},null===(_g=StandardButtonWithCustomDesign.parameters)||void 0===_g?void 0:_g.docs),{source:ReactSignInWithEsignet_stories_assign({originalSource:'{\n  args: {\n    oidcConfig,\n    buttonConfig: {\n      labelText: "Sign in with e-Signet",\n      customStyle: {\n        outerDivStyleStandard: {\n          position: "relative",\n          width: "250px",\n          border: "1px solid #0E3572",\n          background: "#0E3572",\n          padding: "0.625rem 1.25rem",\n          display: "flex",\n          "border-radius": "0.375rem",\n          "text-decoration": "none",\n          color: "white",\n          "align-items": "center"\n        },\n        logoDivStyle: {\n          border: "1px solid #0E3572",\n          "border-radius": "18px",\n          background: "white",\n          position: "absolute",\n          display: "inline-block",\n          alignItems: "center",\n          verticalAlign: "middle",\n          width: "30px",\n          height: "30px",\n          right: "8px"\n        },\n        logoImgStyle: {\n          width: "29px",\n          height: "29px",\n          "object-fit": "contain"\n        },\n        labelSpanStyle: {\n          display: "inline-block",\n          "vertical-align": "middle",\n          "font-weight": "600",\n          "font-size": "0.875rem",\n          "line-height": "1.25rem"\n        }\n      }\n    }\n  }\n}'},null===(_j=null===(_h=StandardButtonWithCustomDesign.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})});const __namedExportsOrder=["StandardButton","StandardIconButton","StandardButtonWithCustomDesign"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../react-sign-in-with-esignet/src/lib/SignInWithEsignet/SignInWithEsignet.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_examples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_storybook_examples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_storybook_examples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_storybook_examples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_storybook_examples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_storybook_examples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* Theme specific css */\n.wIM4PNCPv8ntELOEIANV {\n  border: 2px solid #d8d8d8;\n  background-color: #ffffff;\n  color: black;\n}\n\n.ON3028ZsR0kLueWg_jI8 {\n  border: 2px solid #eb6f2d;\n  background-color: #eb6f2d;\n  color: white;\n}\n\n.gJx95miqN9rDKB5lnzAP {\n  border: 2px solid #333333;\n  background-color: #333333;\n  color: white;\n}\n\n/* Common css */\n.Ji_HNVyqCNxFPLFEetX7 {\n  width: 400px;\n  height: 48px;\n  border-width: 2px;\n  display: flex;\n  align-items: center;\n}\n\n.ET30kQWpCBeLRAQydF_i {\n  width: 400px;\n  height: 48px;\n  border-width: 2px;\n  display: flex;\n  align-items: center;\n  border-radius: 6px;\n}\n\n.MzKF6Ce0tvdugWYLRGwR {\n  width: 400px;\n  height: 48px;\n  border-width: 2px;\n  display: flex;\n  align-items: center;\n  border-radius: 46px;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.uQ81cBIHouVdX17x2o9F {\n  border-width: 2px;\n  display: inline-block;\n}\n\n.tUkPq6TWL4jv5pAUV3cQ {\n  border-width: 2px;\n  display: inline-block;\n  border-radius: 6px;\n}\n\n.fHPnUMkpa80vzXiwJF42 {\n  border-width: 2px;\n  display: inline-block;\n  border-radius: 46px;\n}\n\n.q6tCD1jUQxpFvb5maIYp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  background-color: white;\n}\n\n.SOlwymVIRMM6S5Bib37A {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  background-color: white;\n  border-radius: 6px;\n}\n\n.birmJAGP7j7itc8oGhCg {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 38px;\n  height: 38px;\n  background-color: white;\n  border-radius: 36px;\n}\n\n.Uv51IYHZVRvfbAWnK45Q {\n  width: 38px;\n  height: 38px;\n  object-fit: contain;\n}\n\n.u9zm_jWhJYQTAb5Svdmw {\n  width: 38px;\n  height: 38px;\n  object-fit: contain;\n}\n\n.A7z90ysOfyKCsjng4oZJ {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n}\n\n.qXRc1ifdCbxTAv8iixBj {\n  vertical-align: middle;\n  font: normal normal 600 14px/17px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n","",{version:3,sources:["webpack://./../react-sign-in-with-esignet/src/lib/SignInWithEsignet/SignInWithEsignet.module.css"],names:[],mappings:"AAAA,uBAAuB;AACvB;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;AACd;;AAEA,eAAe;AACf;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,kBAAkB;EAClB,mBAAmB;AACrB",sourcesContent:["/* Theme specific css */\r\n.standardOutline {\r\n  border: 2px solid #d8d8d8;\r\n  background-color: #ffffff;\r\n  color: black;\r\n}\r\n\r\n.filledOrange {\r\n  border: 2px solid #eb6f2d;\r\n  background-color: #eb6f2d;\r\n  color: white;\r\n}\r\n\r\n.filledBlack {\r\n  border: 2px solid #333333;\r\n  background-color: #333333;\r\n  color: white;\r\n}\r\n\r\n/* Common css */\r\n.sharpRectBox {\r\n  width: 400px;\r\n  height: 48px;\r\n  border-width: 2px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.softRectBox {\r\n  width: 400px;\r\n  height: 48px;\r\n  border-width: 2px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n}\r\n\r\n.roundedRectBox {\r\n  width: 400px;\r\n  height: 48px;\r\n  border-width: 2px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-radius: 46px;\r\n  padding-left: 3px;\r\n  padding-right: 3px;\r\n}\r\n\r\n.sharpRectIcon {\r\n  border-width: 2px;\r\n  display: inline-block;\r\n}\r\n\r\n.softRectIcon {\r\n  border-width: 2px;\r\n  display: inline-block;\r\n  border-radius: 6px;\r\n}\r\n\r\n.roundedRectIcon {\r\n  border-width: 2px;\r\n  display: inline-block;\r\n  border-radius: 46px;\r\n}\r\n\r\n.sharpLogoBox {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 44px;\r\n  height: 44px;\r\n  background-color: white;\r\n}\r\n\r\n.softLogoBox {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 44px;\r\n  height: 44px;\r\n  background-color: white;\r\n  border-radius: 6px;\r\n}\r\n\r\n.roundedLogoBox {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 38px;\r\n  height: 38px;\r\n  background-color: white;\r\n  border-radius: 36px;\r\n}\r\n\r\n.sharpLogo {\r\n  width: 38px;\r\n  height: 38px;\r\n  object-fit: contain;\r\n}\r\n\r\n.softLogo {\r\n  width: 38px;\r\n  height: 38px;\r\n  object-fit: contain;\r\n}\r\n\r\n.roundedLogo {\r\n  width: 28px;\r\n  height: 28px;\r\n  object-fit: contain;\r\n}\r\n\r\n.textbox {\r\n  vertical-align: middle;\r\n  font: normal normal 600 14px/17px;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n}\r\n\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={standardOutline:"wIM4PNCPv8ntELOEIANV",filledOrange:"ON3028ZsR0kLueWg_jI8",filledBlack:"gJx95miqN9rDKB5lnzAP",sharpRectBox:"Ji_HNVyqCNxFPLFEetX7",softRectBox:"ET30kQWpCBeLRAQydF_i",roundedRectBox:"MzKF6Ce0tvdugWYLRGwR",sharpRectIcon:"uQ81cBIHouVdX17x2o9F",softRectIcon:"tUkPq6TWL4jv5pAUV3cQ",roundedRectIcon:"fHPnUMkpa80vzXiwJF42",sharpLogoBox:"q6tCD1jUQxpFvb5maIYp",softLogoBox:"SOlwymVIRMM6S5Bib37A",roundedLogoBox:"birmJAGP7j7itc8oGhCg",sharpLogo:"Uv51IYHZVRvfbAWnK45Q",softLogo:"u9zm_jWhJYQTAb5Svdmw",roundedLogo:"A7z90ysOfyKCsjng4oZJ",textbox:"qXRc1ifdCbxTAv8iixBj"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);