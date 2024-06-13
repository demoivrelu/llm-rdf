"use strict";(self["webpackChunkvue_demo"]=self["webpackChunkvue_demo"]||[]).push([[900],{26900:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"p-main"},[t("el-row",[t("el-col",{attrs:{span:5}},[t("div",{staticClass:"grid-content"},[e.isShowPrev(e.active)?t("a",{on:{click:function(t){return e.chooseStep(e.active,"left")}}},[t("div",{staticClass:"prev el-icon-arrow-left"})]):e._e()])]),t("div",[t("el-col",{attrs:{span:14}},[t("div",{staticClass:"grid-content",staticStyle:{"font-size":"35px","margin-top":"2%"}},[e._v(e._s(e.screenerTitle))]),t("el-divider"),t("div",{attrs:{span:10}},[t("el-steps",{attrs:{active:e.active,"finish-status":"success","align-center":""}},[t("el-step",{attrs:{title:e.stepList[0]}}),t("el-step",{attrs:{title:e.stepList[1]}}),t("el-step",{attrs:{title:e.stepList[2]}})],1)],1),t("el-tabs",{ref:"tabs",model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"Step 1",name:"first"}},[t("div",{staticClass:"tab1style"},[e._v(e._s(e.GPTTitle[0]))]),t("el-input",{attrs:{type:"textarea",rows:8,resize:"none",placeholder:e.placeholderSynthesis},model:{value:e.textSynthesis,callback:function(t){e.textSynthesis=t},expression:"textSynthesis"}}),t("div",{staticClass:"tab1style"},[e._v(e._s(e.GPTTitle[1]))]),t("el-input",{staticStyle:{"margin-bottom":"32px"},attrs:{type:"textarea",rows:8,resize:"none",placeholder:e.placeholderVariableRange},model:{value:e.textVariableRange,callback:function(t){e.textVariableRange=t},expression:"textVariableRange"}}),t("div",[t("a",{on:{click:e.transfer}},[t("div",{staticClass:"gpt",staticStyle:{"font-size":"medium"},attrs:{align:"center"}},[t("i",{staticClass:"iconfont icon-send-fill"})])])])],1),t("el-tab-pane",{attrs:{label:"Step 2",name:"second"}},[t("div",{staticStyle:{height:"500px"}},[e.isShowNoteOfSteps(e.stepData)?t("div",[t("h1",{staticStyle:{"font-size":"20px",width:"90%","margin-left":"5%"}},[e._v(" 　"+e._s(e.stepsHint)+" ")])]):e._e(),t("el-scrollbar",{staticStyle:{height:"435px"},attrs:{"wrap-style":"overflow-x:hidden;",align:"center"}},[e._l(e.stepData,(function(i,a){return t("div",{key:a,staticStyle:{"margin-top":"0px"}},[t("el-row",[t("el-row",[t("h1",{staticStyle:{"margin-left":"0%",float:"left","font-size":"20px"}},[e._v(" "+e._s(e.stepTitle)+" "+e._s(a+1)+" ")]),t("el-link",{staticStyle:{"font-size":"18px","margin-right":"4%",float:"right"},attrs:{icon:"el-icon-circle-plus-outline",title:e.iconBind[1]},on:{click:function(t){return e.insertCurrentStep(a)}}}),t("el-link",{staticStyle:{"font-size":"18px","margin-right":"4%",float:"right"},attrs:{icon:"el-icon-delete",title:e.iconBind[0]},on:{click:function(t){return e.deleteCurrentStep(a)}}})],1),t("el-row",[t("el-col",{attrs:{span:8}},[t("el-row",[t("div",[e._v(e._s(e.stepHeader[0]))]),t("div",{staticClass:"grid-content"},[t("el-input",{staticClass:"input-common",staticStyle:{width:"65%"},attrs:{placeholder:"choose"},model:{value:i["reagent"],callback:function(t){e.$set(i,"reagent","string"===typeof t?t.trim():t)},expression:"item['reagent']"}})],1),t("div",{staticStyle:{"margin-left":"-32%"}},[t("el-checkbox",{on:{change:function(t){return e.handleCheckReagent(a,i)}},model:{value:i["checkParameter"],callback:function(t){e.$set(i,"checkParameter","string"===typeof t?t.trim():t)},expression:"item['checkParameter']"}},[e._v(e._s(e.variableCheck))])],1)])],1),t("el-col",{attrs:{span:8}},[t("div",[e._v(e._s(e.stepHeader[1]))]),t("div",{staticClass:"grid-content"},[t("el-input-number",{staticClass:"input-common",staticStyle:{width:"65%"},attrs:{precision:2,step:.1,min:0,max:5e3,label:"description"},on:{change:function(t){return e.handleChangeQuantity(a)}},model:{value:i["parameter"],callback:function(t){e.$set(i,"parameter","string"===typeof t?t.trim():t)},expression:"item['parameter']"}})],1)]),t("el-col",{attrs:{span:8}},[t("div",[e._v(e._s(e.stepHeader[2]))]),t("div",{staticClass:"grid-content"},[t("el-select",{staticClass:"input-common",staticStyle:{width:"65%"},attrs:{placeholder:"choose"},model:{value:i["unit"],callback:function(t){e.$set(i,"unit","string"===typeof t?t.trim():t)},expression:"item['unit']"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.label}})})),1)],1)])],1)],1),t("el-divider")],1)})),t("el-link",{staticStyle:{"font-size":"18px","margin-right":"4%",float:"right"},attrs:{icon:"el-icon-circle-plus-outline",title:e.iconBind[2]},on:{click:function(t){return e.insertBottomStep()}}})],2)],1)]),t("el-tab-pane",{attrs:{label:"Step 3",name:"third"}},[t("el-scrollbar",{staticClass:"infinite-list",staticStyle:{height:"500px","margin-top":"0px"},attrs:{"wrap-style":"overflow-x:hidden;"}},[e.isShowNoteOfSpace(e.spaceData)?t("div",[t("h1",{staticStyle:{"font-size":"20px"}},[e._v(" "+e._s(e.spaceHint)+" ")])]):e._e(),t("div",{staticStyle:{overflow:"auto"}},e._l(e.spaceData,(function(i,a){return t("div",{key:a,staticStyle:{"margin-top":"10px"},attrs:{align:"center"}},[e.isShowCategoricalVar(i)?t("div",{staticStyle:{width:"88.5%"}},[t("el-collapse",{class:e.chooseClass(a),attrs:{"show-border":"false"},on:{change:function(t){return e.changeClickedStatus(a)}}},[t("el-collapse-item",{attrs:{name:"1",align:"left"}},[t("template",{slot:"title"},[t("div",{staticStyle:{"margin-left":"2%"}},[e._v(" "+e._s(i["name"])+e._s(" (")+e._s(i["range"].length)+e._s(")")+" ")])]),e._l(i["range"],(function(s,n){return t("div",{key:n},[t("div",{staticStyle:{"margin-top":"1%"}},[t("el-input",{staticStyle:{"margin-left":"2%",width:"20%"},model:{value:i["range"][n],callback:function(t){e.$set(i["range"],n,"string"===typeof t?t.trim():t)},expression:"item['range'][ind]"}}),t("el-link",{staticStyle:{"margin-right":"4%",float:"right","font-size":"18px"},attrs:{icon:"el-icon-delete",title:e.iconBind[0]},on:{click:function(t){return e.reduceCategory(a,n)}}})],1)])}))],2)],1),t("el-row",[t("el-link",{staticStyle:{"font-size":"18px","margin-right":"3.8%","margin-top":"1%","margin-bottom":"4%",float:"right"},attrs:{icon:"el-icon-circle-plus-outline",title:e.iconBind[2]},on:{click:function(t){return e.addCategory(a)}}})],1)],1):e._e()])})),0)]),t("el-dialog",{staticStyle:{"border-radius":"10px"},attrs:{title:e.savePart[0],visible:e.finishTableVisible},on:{"update:visible":function(t){e.finishTableVisible=t}}},[t("div",[t("el-form",{ref:"ruleProjectForm",attrs:{"label-width":"120px",model:e.project_form,rules:e.project_rules},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:e.savePart[1],prop:"project_name"}},[t("el-input",{staticClass:"input-common",nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.finishStep("ruleProjectForm")}},model:{value:e.project_form.project_name,callback:function(t){e.$set(e.project_form,"project_name",t)},expression:"project_form.project_name"}})],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("div",{staticStyle:{"margin-left":"88%"}},[t("a",{on:{click:function(t){return e.finishStep("ruleProjectForm")}}},[t("div",{staticClass:"submit"},[e._v(" "+e._s(e.savePart[4])+" ")])])])])]),t("div",[t("a",{on:{click:function(t){e.finishTableVisible=!0}}},[t("div",{staticClass:"gpt",staticStyle:{"font-size":"medium","font-weight":"700"}},[e._v(e._s(e.finishBtn)+" ")])])])],1)],1)],1)],1),t("el-col",{attrs:{span:5}},[t("div",{staticClass:"grid-content"},[e.isShowRight(e.active)?t("a",{on:{click:function(t){return e.chooseStep(e.active,"right")}}},[t("div",{staticClass:"next el-icon-arrow-right"})]):e._e()])])],1)],1)},s=[],n=(i(44114),i(75344)),r=i(50737),l=i.n(r),o=i(42332),c=i.n(o),h={data(){return{ratioHeight:window.screen.height,ratioWidth:window.screen.width,fixWidth:window.screen.width,fixHeight:window.screen.height,url:l().backend_url,valueLights:!0,screenerTitle:"Screener",activeName:"first",active:-1,stepList:["GPT","Steps","Space"],GPTTitle:["Synthesis","Screen variables & range"],iconBind:["remove","insert","add"],stepOperation:["remove","insert"],spaceOperation:["remove","add"],step1:"GPT",step2:"Steps",step3:"Space",textSynthesis:"To a solution of alcohol (0.25 mmol) in DMSO (0.25 mL) in a reactor was added sequentially a solution of (1) Cu catalyst (0.25 mL,0.05M), (2) bpy(0.25 mL,0.05M), (3) TEMPO (0.25 mL, 0.05M), and (4) Base (0.25 mL,0.10M).",textVariableRange:"I want to screen four variables: 1. alcohol: alcohol_1, alcohol_2, alcohol_3, alcohol_4, alcohol_5, alcohol_6, 2. Cu catalyst: CuBr2, CuCl2, Cu(OTf)2, Cu(BF4)2 3. Base type: NMI, DBU.",placeholderSynthesis:"Please input the synthesis of the screener...",placeholderVariableRange:"Please input the variables and range of the screener...",nextBtn:"Next",prevBtn:"Prev",finishBtn:"Check All",transferBtn:"Trans",getGPTAlarm:["Get Data from GPT!","SUCCESS","Cancel","OK"],stepData:[],stepsHint:"There is no screen steps. Please turn back to previous step and type some steps tobe inserted. Or you can insert some steps press the insert button.",spaceData:[],actionData:[],code:"",spaceHint:"There is no screen variable selected. Please turn back to previous step and choose some screen variables.",spaceClickedList:[],countSteps:100,stepHeader:["Reagent","Parameter","Unit"],stepTitle:"Step",variableCheck:"screen variable",options:[{value:"choice1",label:"ml"},{value:"choice2",label:"mg"},{value:"choice3",label:"min"},{value:"choice4",label:"rpm"},{value:"choice5",label:"℃"}],finishTableVisible:!1,savePart:["Save Project","Project Name","Please input project name","Cancel","Submit"],project_rules:{project_name:[{required:!0,message:"Please input project name",trigger:"blur"}]},project_form:{project_name:""}}},methods:{isLightsOff(){return 0==this.valueLights?"#313131":"#f4f5f6"},isColorWhite(){return 0==this.valueLights?"#ffffff":"#000000"},chooseStep(e,t){if(console.log(e),"right"==t)switch(e){case 0:this.goStep2();break;case 1:this.goStep3();break}if("left"==t)switch(e){case 1:this.retStep1();break;case 2:this.retStep2();break}},isShowPrev(e){return e>0&&e<3},isShowRight(e){return e>-1&&e<2},goStep2(){this.active=1,this.activeName="second"},retStep1(){this.active=0,this.activeName="first"},goStep3(){this.active=2,this.activeName="third",console.log("-----",this.stepData),console.log("******",this.spaceData)},retStep2(){this.active=1,this.activeName="second"},finishStep(e){this.$refs[e].validate((e=>{e&&(console.log("---- stepsData",this.stepData,"spaceData",this.spaceData),c().post(this.url+"/input-screen/create-project",{para:{code:this.code,space:this.spaceData,name:this.project_form.project_name}}).then((e=>{this.$router.push({name:"display-screener",params:{backgroundColor:this.valueLights,createdID:e.data}}),this.$message({showClose:!0,message:"Create Success!",type:"success"})}),(e=>{this.$message({showClose:!0,message:"Error, Pls Check Previous Info",type:"error"})})))}))},transfer(){c().post(this.url+"/input-screen/nlp2action",{nlp:this.textSynthesis}).then((e=>{this.actionData=e["data"]["action"],c().post(this.url+"/input-screen/nlp2space",{nlp:this.textVariableRange,action:this.actionData}).then((e=>{this.stepData=e["data"]["action"];let t=e["data"]["space"];const a=i(82522);this.spaceData=a.cloneDeep(t);let s=this.stepData.length;this.spaceClickedList=0!=this.spaceClickedList.length?this.spaceClickedList:Array(s).fill(!1),c().post(this.url+"/input-screen/nlp2code",{nlp:this.textSynthesis+" "+this.textVariableRange}).then((e=>{this.code=e["data"],this.$message({message:this.getGPTAlarm[0],type:"success"})}))}))})),this.active=0},getSynthesis(){console.log("get synthesis from backend")},getRange(){console.log("get range from backend")},isShowNoteOfSteps(e){if(0==e.length)return!0},deleteCurrentStep(e){this.stepData[e]["checkParameter"]=!1,this.handleCheckReagent(e,this.stepData[e]),this.$set(this,"stepData",[...this.stepData]),this.stepData.splice(e,1)},insertCurrentStep(e){let t={reagent:"",parameter:0,unit:"ml",checkParameter:!1};this.$set(this,"stepData",[...this.stepData]),this.stepData.splice(e,0,t)},insertBottomStep(){this.$set(this,"stepData",[...this.stepData]),this.stepData.splice(this.stepData.length,0,{reagent:"",parameter:0,unit:"ml",checkParameter:!1})},handleChangeQuantity(){},handleCheckReagent(e,t){if(console.log("------stepdata: ",this.stepData),console.log("------spacedata: ",this.spaceData),0==t.checkParameter)for(let i=0;i<this.spaceData.length;i++)t.reagent==this.spaceData[i].name&&this.spaceData.splice(i,1);1==t.checkParameter&&(0==this.spaceData.length&&this.spaceData.push({name:this.stepData[0].reagent,type:"categorical",range:[]}),this.stepData.forEach((e=>{if(1==e.checkParameter)for(let t=0;t<this.spaceData.length;t++){if(e.reagent==this.spaceData[t].name)break;t==this.spaceData.length-1&&this.spaceData.push({name:e.reagent,type:"categorical",range:[]})}})))},changeClickedStatus(e){this.spaceClickedList[e]=!this.spaceClickedList[e],this.$forceUpdate()},chooseClass(e){return this.spaceClickedList[e]?"rounded-collapse":"rounded-collapse-shut"},isShowNoteOfSpace(){return 0==this.spaceData.length},isShowCategoricalVar(e){return!0},addCategory(e){this.spaceData[e].range.splice(this.spaceData[e].range.length,0,"")},reduceCategory(e,t){this.spaceData[e].range.splice(t,1)},initRatio(){let e=document.querySelector(":root");e.style.setProperty("--ratio-width",window.screen.width),e.style.setProperty("--ratio-height",window.screen.height),e.style.setProperty("--fixed-width",window.screen.width),e.style.setProperty("--fixed-height",window.screen.height),window.devicePixelRatio<1&&(this.ratioHeight=this.ratioHeight/window.devicePixelRatio,this.ratioWidth=this.ratioWidth/window.devicePixelRatio),this.ratioHeight=window.screen.height,this.ratioWidth=window.screen.width,this.fixWidth=window.screen.width,this.fixHeight=window.screen.height},handleRatio(){let e=document.querySelector(":root");console.log(getComputedStyle(e).getPropertyValue("--ratio-width"));let t=new n.A;t._addHandler(window,"resize",(function(){window.devicePixelRatio<1&&(this.ratioHeight=this.ratioHeight/window.devicePixelRatio,this.ratioWidth=this.ratioWidth/window.devicePixelRatio)}))}},mounted(){this.$refs.tabs.$children[0].$el.style.display="none",this.initRatio(),this.handleRatio();let e=document.querySelector(":root");e.style.setProperty("--main-height",window.screen.height+"px"),window.addEventListener("message",(e=>{if("background-color"==e.data.type){this.valueLights=e.data.message.bool;let t=document.querySelector(":root");0==this.valueLights?(t.style.setProperty("--main-color","#313131"),t.style.setProperty("--main-font-color","#ffffff")):(t.style.setProperty("--main-color","#f4f5f6"),t.style.setProperty("--main-font-color","#000000"))}"language-sig"==e.data.type&&("En"==e.data.message.language&&(this.screenerTitle="Screener",this.stepList=["GPT","Steps","Space"],this.GPTTitle=["Synthesis","Screen variables & range"],this.getGPTAlarm=["Get Data from GPT!","SUCCESS","Cancel","OK"],this.stepTitle="Step",this.stepHeader=["Reagent","Parameter","Unit"],this.variableCheck="screen variable",this.iconBind=["remove","insert","add"],this.savePart=["Save Project","Project Name","Please input project name","Cancel","Submit"],this.finishBtn="Check All",this.stepsHint="There is no screen steps. Please turn back to previous step and type some steps tobe inserted. Or you can insert some steps press the insert button.",this.spaceHint="There is no screen variable selected. Please turn back to previous step and choose some screen variables.",this.project_rules.project_name[0].message="Please input project name"),"Cn"==e.data.message.language&&(this.screenerTitle="自动筛选",this.stepList=["生成式预训练模型","步骤","空间"],this.GPTTitle=["合成","筛选变量以及范围"],this.getGPTAlarm=["成功获取到数据!","成功","取消","确认"],this.stepTitle="步骤",this.stepHeader=["反应物","参数","单位"],this.variableCheck="筛选变量",this.iconBind=["移除","插入","添加"],this.savePart=["保存项目","项目名称","请输入项目名称","取消","提交"],this.finishBtn="检查所有",this.stepsHint="当前没有筛选步骤。 请返回上一步骤并输入筛选步骤。 或者你也可以插入筛选步骤按插入按钮。",this.spaceHint="当前没有筛选变量。 请返回上一步骤并选择筛选变量。",this.project_rules.project_name[0].message="请输入项目名称"))}))}},p=h,d=i(845),u=(0,d.A)(p,a,s,!1,null,null,null),g=u.exports}}]);
//# sourceMappingURL=900.bad12073.js.map