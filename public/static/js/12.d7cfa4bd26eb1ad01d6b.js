webpackJsonp([12],{NJal:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={name:"basetable",data:function(){return{url:"./static/vuetable.json",pagesize:5,tableData:[],total:0,cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{id:"",title:"",content:"",created_at:""},idx:-1,rules:{title:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:3,max:55,message:"长度在 3 到 55 个字符",trigger:"blur"}],content:[{required:!0,message:"请输入文章内容",trigger:"blur"},{min:5,message:"长度不能小于5字符",trigger:"blur"}],created_at:[{type:"string",required:!0,message:"请选择日期",trigger:"blur"}]}}},created:function(){this.getData(1)},computed:{data:function(){}},methods:{getData:function(t){var e=this,i={pagenum:t,pagesize:this.pagesize,select_word:this.select_word};this.get("/acticleList",i).then(function(t){0==t.code&&(e.total=t.data.total,e.tableData=t.data.list)})},search:function(){this.getData(1)},formatter:function(t,e){return t.address},filterTag:function(t,e){return e.tag===t},articleAdd:function(){this.form={id:"",title:"",content:"",created_at:""},this.editVisible=!0},handleEdit:function(t,e){this.idx=t;var i=this.tableData[t];this.form={title:i.title,content:i.content,id:i.id,created_at:i.created_at},this.editVisible=!0},handleDelete:function(t,e){this.idx=e.id,this.delVisible=!0},delAll:function(){var t=this.multipleSelection.length,e="";this.del_list=this.del_list.concat(this.multipleSelection);for(var i=0;i<t;i++)e+=this.multipleSelection[i].name+" ";this.$message.error("删除了"+e),this.multipleSelection=[]},handleSelectionChange:function(t){this.multipleSelection=t,console.log(t)},saveEdit:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.form.id?e.post("/articleEdit",e.form).then(function(t){0==t.code?(e.editVisible=!1,e.$message.success("修改第 "+(e.idx+1)+" 行成功"),e.getData(1)):-1==t.code&&e.$message.error("修改第 "+(e.idx+1)+" 行失败")}):e.post("/articleAdd",e.form).then(function(t){0==t.code?(e.editVisible=!1,e.$message.success("修改第 "+(e.idx+1)+" 行成功"),e.getData(1)):e.$message.error("修改第 "+(e.idx+1)+" 行失败")})})},resetForm:function(t){this.editVisible=!1,this.$refs[t].resetFields()},handleClose:function(){this.$refs.form.resetFields()},deleteRow:function(){var t=this;this.$axios.post("/api/articleDel",{id:this.idx}).then(function(e){console.log(e),e&&(t.$message.success("删除成功"),t.delVisible=!1)})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-button",{attrs:{type:"success",icon:"el-icon-plus",plain:""},on:{click:t.articleAdd}},[t._v("添加")]),t._v(" "),i("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"},on:{click:t.delAll}},[t._v("批量删除")]),t._v(" "),i("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),i("el-table-column",{attrs:{prop:"id",label:"ID",sortable:"",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"title",label:"标题",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"content",label:"内容"}}),t._v(" "),i("el-table-column",{attrs:{prop:"created_at",label:"创建时间",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small"},on:{click:function(i){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:t.total,"page-size":t.pagesize},on:{"size-change":t.getData,"current-change":t.getData}})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e},close:t.handleClose}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"50px",rules:t.rules}},[i("el-form-item",{attrs:{label:"日期",prop:"created_at"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.form.created_at,callback:function(e){t.$set(t.form,"created_at",e)},expression:"form.created_at"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"标题",prop:"title"}},[i("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"内容",prop:"content"}},[i("el-input",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.saveEdit("form")}}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[i("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var s=i("VU/8")(l,a,!1,function(t){i("fXdR")},"data-v-35f5433d",null);e.default=s.exports},fXdR:function(t,e){}});