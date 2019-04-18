var searchmethod = { //搜索方法对应的页面元素的id,和值
    searchtype: { elementid: 'CMB_searchtype', value: ''},
    shiptypeid: { elementid: 'CMB_shiptypefilter', value: ''},
    shipstars: { elementid: 'CMB_shipstars', value: ''},
};
var shipfilters = {
    shiptypeid : { 0: '无', 1: '驱逐', 2: '轻巡', 3: '重巡', 4: '战巡', 5: '战列', 6: '航母', },
    shipstars : { 0: '无', 2: '2星', 3: '3星', 4: '4星', 5: '5星', },
};
var shipbindclass = {
    shipstars:{
        2: 'label_star2',
        3: 'label_star3',
        4: 'label_star4',
        5: 'label_star5',
    },
};
var shiplistbox_mainboxID = {}; //存放mainbox的id,用于删除元素
var searchbox_mainboxID = {};

var shipReinforcementGroupsID = {
    //$shipid: {
    //    1: { labelID: "",currentlevelID:"", finallevelID: "",}, 强化组标签id,当前等级对应的下拉框的id,最终等级对应的下拉框的id
    //    2: { ... },
    //};
};
var shipSkillGroupsID = {
};
var searchResultBox_template = { //存放模板
    mainbox: {  //主框架
        parentid: "searchbox", //父元素的id
        type: "div",
        id: "searchbox_child",
        attributes: {  //元素的属性
            class: "searchbox",
            //onclick: "alert(this.id)",
        },
    },
    childElements: { //子元素
        element1: { 
            type: "label",
            attributes: { class: "label1 label3", style: "padding-left:0px;" },
            innerHTMLPre: "[",
            innerHTMLPost: "]",
            bindData: "id", //绑定shipdata里的数据
            bindClass: "shipstars", //根据shipdata里的某个数据来绑定额外的css class样式
        },
        element2: { 
            type: "label",
            attributes: { class: "label1 label3", style: "padding-left:0px;" },
            innerHTMLPre: "[",
            innerHTMLPost: "]",
            bindData: "shiptypename", 
            bindClass: "shipstars", 
        },
        element3: { 
            type: "label",
            attributes: { class: "label1 label3", style: "padding-left:5px;padding-right:5px;" },
            innerHTMLPre: "",
            innerHTMLPost: "",
            bindData: "name",
            bindClass: "shipstars",
        },
        element4: { 
            type: "button",
            id: "_btnAdd",
            attributes: {
                class: "button button2",
                onclick: "createShiplistBox(this.getAttribute('shipid'));",
            },
            innerHTML: "添加",
        },
    },
    box_count: 1, //用于给新生成的searchbox的id后缀添加计数
};
var shiplistBox_template = {
    mainbox: {  //主框架
        parentid: "shiplistbox", //父元素的id
        type: "div",
        id: "shiplistbox_child",
        attributes: {  //元素的属性
            class: "shiplistbox",
            style: "clear:both;border:none;",
            //onclick: "alert(this.id)",
        },
    },
    childElements: { //子元素
        element1: { 
            type: "div", //第一层子元素为div
            id: "_div1",
            attributes: { class: "shiplistbox_div", style: "width:50px;" },
            childElements:{
                element1: {
                    type: "label",
                    attributes: { class: "label1 label3", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "id",
                    bindClass: "shipstars",
                },
            },
        },
        element2: { 
            type: "div", 
            id: "_div2",
            attributes: { class: "shiplistbox_div", style: "width:114px;" },
            childElements:{
                element1: {
                    type: "label",
                    attributes: { class: "label1 label3", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "name",
                    bindClass: "shipstars",
                },
            },
        },
        element3: { 
            type: "div", 
            id: "_div3",
            attributes: { class: "shiplistbox_div", style: "width:50px;" },
            childElements:{
                element1: {
                    type: "label",
                    attributes: { class: "label1 label3", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "shiptypename",
                    bindClass: "shipstars",
                },
            },
        },
        element4: { 
            type: "div", 
            id: "_div4",
            attributes: { class: "shiplistbox_div", style: "width:30px;" },
            childElements:{
                element1: {
                    type: "label",
                    attributes: { class: "label1 label3", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "shipstars",
                    bindClass: "shipstars",
                },
            },
        },
        element5: { 
            type: "div", 
            id: "_reinforceGroup1",
            attributes: { class: "shiplistbox_div shiplistbox_div_reinforce", style: "width:100px;" },
            childElements:{
                element1: {
                    id: "_label",
                    type: "reinGrouplabel",
                    attributes: { class: "label1", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "reinforcementGroups",
                    bindDataID: 1,
                    bindClass: "",
                    bindID: "labelID",
                },
                element2: { type: "br", },
                element3: {
                    id: "_select1",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 1,
                    bindID: "currentlevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
                element4: {
                    id: "_select2",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 1,
                    bindID: "finallevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
            },
        },
        element6: { 
            type: "div", 
            id: "_reinforceGroup2",
            attributes: { class: "shiplistbox_div shiplistbox_div_reinforce", style: "width:100px;" },
            childElements:{
                element1: {
                    id: "_label",
                    type: "reinGrouplabel",
                    attributes: { class: "label1", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "reinforcementGroups",
                    bindDataID: 2,
                    bindClass: "",
                    bindID: "labelID",
                },
                element2: { type: "br", },
                element3: {
                    id: "_select1",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 2,
                    bindID: "currentlevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
                element4: {
                    id: "_select2",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 2,
                    bindID: "finallevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
            },
        },
        element7: { 
            type: "div", 
            id: "_reinforceGroup3",
            attributes: { class: "shiplistbox_div shiplistbox_div_reinforce", style: "width:100px;" },
            childElements:{
                element1: {
                    id: "_label",
                    type: "reinGrouplabel",
                    attributes: { class: "label1", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "reinforcementGroups",
                    bindDataID: 3,
                    bindClass: "",
                    bindID: "labelID",
                },
                element2: { type: "br", },
                element3: {
                    id: "_select1",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 3,
                    bindID: "currentlevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
                element4: {
                    id: "_select2",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 3,
                    bindID: "finallevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
            },
        },
        element8: { 
            type: "div", 
            id: "_reinforceGroup4",
            attributes: { class: "shiplistbox_div shiplistbox_div_reinforce", style: "width:100px;" },
            childElements:{
                element1: {
                    id: "_label",
                    type: "reinGrouplabel",
                    attributes: { class: "label1", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "reinforcementGroups",
                    bindDataID: 4,
                    bindClass: "",
                    bindID: "labelID",
                },
                element2: { type: "br", },
                element3: {
                    id: "_select1",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 4,
                    bindID: "currentlevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
                element4: {
                    id: "_select2",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 4,
                    bindID: "finallevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
            },
        },
        element9: { 
            type: "div", 
            id: "_reinforceGroup5",
            attributes: { class: "shiplistbox_div shiplistbox_div_reinforce", style: "width:100px;" },
            childElements:{
                element1: {
                    id: "_label",
                    type: "reinGrouplabel",
                    attributes: { class: "label1", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "reinforcementGroups",
                    bindDataID: 5,
                    bindClass: "",
                    bindID: "labelID",
                },
                element2: { type: "br", },
                element3: {
                    id: "_select1",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 5,
                    bindID: "currentlevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
                element4: {
                    id: "_select2",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 5,
                    bindID: "finallevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
            },
        },
        element10: { 
            type: "div", 
            id: "_reinforceGroup6",
            attributes: { class: "shiplistbox_div shiplistbox_div_reinforce", style: "width:100px;" },
            childElements:{
                element1: {
                    id: "_label",
                    type: "reinGrouplabel",
                    attributes: { class: "label1", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "reinforcementGroups",
                    bindDataID: 6,
                    bindClass: "",
                    bindID: "labelID",
                },
                element2: { type: "br", },
                element3: {
                    id: "_select1",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 6,
                    bindID: "currentlevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
                element4: {
                    id: "_select2",
                    type: "reinGroupselect",
                    bindData: "reinforcementGroups",
                    bindDataID: 6,
                    bindID: "finallevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_reinGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
            },
        },
        element11: { 
            type: "div", 
            id: "_skillGroup1",
            attributes: { class: "shiplistbox_div shiplistbox_div_actskill", style: "width:100px;" },
            childElements:{
                element1: {
                    id: "_label",
                    type: "skillGrouplabel",
                    attributes: { class: "label1", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "skills",
                    bindDataID: 1,
                    bindClass: "",
                    bindID: "labelID",
                },
                element2: { type: "br", },
                element3: {
                    id: "_select1",
                    type: "skillGroupselect",
                    bindData: "skills",
                    bindDataID: 1,
                    bindID: "currentlevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_skillGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
                element4: {
                    id: "_select2",
                    type: "skillGroupselect",
                    bindData: "skills",
                    bindDataID: 1,
                    bindID: "finallevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_skillGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
            },
        },
        element12: { 
            type: "div", 
            id: "_skillGroup2",
            attributes: { class: "shiplistbox_div shiplistbox_div_passiveskill", style: "width:100px;" },
            childElements:{
                element1: {
                    id: "_label",
                    type: "skillGrouplabel",
                    attributes: { class: "label1", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "skills",
                    bindDataID: 2,
                    bindClass: "",
                    bindID: "labelID",
                },
                element2: { type: "br", },
                element3: {
                    id: "_select1",
                    type: "skillGroupselect",
                    bindData: "skills",
                    bindDataID: 2,
                    bindID: "currentlevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_skillGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
                element4: {
                    id: "_select2",
                    type: "skillGroupselect",
                    bindData: "skills",
                    bindDataID: 2,
                    bindID: "finallevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_skillGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
            },
        },
        element13: { 
            type: "div", 
            id: "_skillGroup3",
            attributes: { class: "shiplistbox_div shiplistbox_div_passiveskill", style: "width:100px;" },
            childElements:{
                element1: {
                    id: "_label",
                    type: "skillGrouplabel",
                    attributes: { class: "label1", },
                    innerHTMLPre: "",
                    innerHTMLPost: "",
                    bindData: "skills",
                    bindDataID: 3,
                    bindClass: "",
                    bindID: "labelID",
                },
                element2: { type: "br", },
                element3: {
                    id: "_select1",
                    type: "skillGroupselect",
                    bindData: "skills",
                    bindDataID: 3,
                    bindID: "currentlevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_skillGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
                element4: {
                    id: "_select2",
                    type: "skillGroupselect",
                    bindData: "skills",
                    bindDataID: 3,
                    bindID: "finallevelID",
                    attributes: { class: "select4", onchange:"shiplistbox_selectboxChanged_skillGroup(this.getAttribute('shipid'),this.getAttribute('groupid'));" },
                    options: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",},
                },
            },
        },
        element14: { 
            type: "div", 
            id: "_div5",
            attributes: { class: "shiplistbox_div ", style: "width:80px;" },
            childElements:{
                element1: {
                    id: "_btnRemove",
                    type: "deleteButton",
                    attributes: {
                        class: "button button3",
                        onclick: "removeShiplistBox(this.getAttribute('shipid'));",
                    },
                    innerHTML: "移除",
                },
            },
        },
        box_count: 1,
    },
    box_count: 1,
};
loadselectbox('CMB_searchtype',searchtype); //加载搜索方法的下拉框
loadselectbox('CMB_shiptypefilter',shipfilters.shiptypeid);
loadselectbox('CMB_shipstars',shipfilters.shipstars);
loadshipdataintocache();
////////////////////////////////////
//界面创建相关//开始
function setSimpleAttr(elemt,attrs){
    for ( attr in attrs ) {
        elemt.setAttribute(attr,attrs[attr]);
    };
    return elemt;
};
function createShiplistBox(shipid){ //创建强化组box,若创建成功则移除对应的searchbox
    if ( typeof shipReinforcementGroupsID[shipid] != 'undefined' ){
        alert("已存在!");
    }else{
        var count = shiplistBox_template.box_count;  //获取box的id的计数
        var mainboxid = shiplistBox_template.mainbox.id + count; //确定id
        createShiplistBox_Mainbox(mainboxid,shipid,shiplistBox_template);    //生成的主div
        createShiplistBox_Child(mainboxid,shipid,shiplistBox_template);    //生成子元素//第一层子元素为div
        count = Number(count) + 1;
        shiplistBox_template.box_count = count; //box计数加1
        removeSearchBox(shipid); //创建成功后移除对应的searchbox
        for ( groupid in shipReinforcementGroupsID[shipid] ){ //初始化强化组label文字
            shiplistbox_selectboxChanged_reinGroup(shipid,groupid);
        };
    };
};
function createShiplistBox_Mainbox(mainboxid,shipid,obj){ //创建强化组的mainbox
    var mainbox = document.createElement(obj.mainbox.type); //生成mainbox
    var container = document.getElementById(obj.mainbox.parentid); //确定父元素
    container.appendChild(mainbox); //添加mainbox
    mainbox.setAttribute("id",mainboxid); //设置属性
    //mainbox.setAttribute("shipid",shipid); //设置属性
    shiplistbox_mainboxID[shipid] = mainboxid; //存放mainbox的id
    shipReinforcementGroupsID[shipid] = {}; //存放强化组数据
    shipSkillGroupsID[shipid] = {}; //存放技能组数据
    mainbox = setSimpleAttr(mainbox,obj.mainbox.attributes); //设置属性

};
function createShiplistBox_Child(parentid,shipid,obj){ 
    var childtype = "";  //子元素类型
    var childid = "";    //子元素id
    for ( childname in obj.childElements ){  //遍历模板里的childElements对象
        childtype = obj.childElements[childname].type; //确定子元素类型
        switch (childtype){ //根据子元素类型创建子元素
            case 'div':
                childid = parentid + obj.childElements[childname].id;  //确定子元素id
                createDiv(parentid,childid,obj.childElements[childname]);
                createShiplistBox_Child(childid,shipid,obj.childElements[childname])
                break;
            case 'label':
                createLabel(parentid,shipid,obj.childElements[childname]);
                break;
            case 'reinGrouplabel':
                createReinGrouplabel(parentid,shipid,obj.childElements[childname]);
                logReinGroupID(shipid,obj.childElements[childname].bindID,parentid + obj.childElements[childname].id,obj.childElements[childname].bindDataID);
                break;
            case 'reinGroupselect':
                createReinGroupSelect(parentid,shipid,obj.childElements[childname]);
                logReinGroupID(shipid,obj.childElements[childname].bindID,parentid + obj.childElements[childname].id,obj.childElements[childname].bindDataID);
                break;
            case 'skillGrouplabel':
                createReinGrouplabel(parentid,shipid,obj.childElements[childname]);
                logSkillGroupID(shipid,obj.childElements[childname].bindID,parentid + obj.childElements[childname].id,obj.childElements[childname].bindDataID);
                break;
            case 'skillGroupselect':
                createReinGroupSelect(parentid,shipid,obj.childElements[childname]);
                logSkillGroupID(shipid,obj.childElements[childname].bindID,parentid + obj.childElements[childname].id,obj.childElements[childname].bindDataID);
                break;
            case 'br':
                createBR(parentid);
                break;
            case 'deleteButton':
                createButton(parentid,shipid,obj.childElements[childname]);
                break;
        };
    };
};
////////
function createSearchBox(shipid,obj){
    var count = obj.box_count;  //获取box的id的计数
    var mainboxid = obj.mainbox.id + count; //确定id
    createSearchBox_Mainbox(mainboxid,shipid,obj);    //生成的主div
    createSearchBox_Child(mainboxid,shipid,obj);    //生成子元素
    count = Number(count) + 1;
    obj.box_count = count; //box计数加1
};
function createSearchBox_Mainbox(mainboxid,shipid,obj){
    var mainbox = document.createElement(obj.mainbox.type); //生成mainbox
    var container = document.getElementById(obj.mainbox.parentid); //确定父元素
    container.appendChild(mainbox); //添加mainbox
    mainbox.setAttribute("id",mainboxid); //设置属性
    mainbox = setSimpleAttr(mainbox,obj.mainbox.attributes);
    searchbox_mainboxID[shipid] = mainboxid;
};
function createSearchBox_Child(parentid,shipid,obj){  //创建子元素
    var childtype = "";  //子元素类型
    var childid = "";    //子元素id
    for ( childname in obj.childElements ){  //遍历模板里的childElements对象
        childtype = obj.childElements[childname].type; //确定子元素类型
        childid = obj.childElements[childname].id + obj.box_count;  //确定子元素id
        switch (childtype){ //根据子元素类型创建子元素
            case 'label':
                createLabel(parentid,shipid,obj.childElements[childname]);
                break;
            case 'button':
                createButton(parentid,shipid,obj.childElements[childname]);
                break;
        };
    };
};
////////
function createDiv(parentid,childid,obj){ //创建div类元素
    var newchild = document.createElement('div');
    var container = document.getElementById(parentid);
    newchild.setAttribute("id", childid);
    container.appendChild(newchild);
    newchild = setSimpleAttr(newchild,obj.attributes);
};
function createReinGroupSelect(parentid,shipid,obj){ //创建强化组的下拉框
    if ( typeof shipdata[shipid][obj.bindData][obj.bindDataID] != 'undefined' ) { //若shipdata里没有对应序号的强化组,则不创建
        var newchild = document.createElement('select');
        var container = document.getElementById(parentid);
        var childid = parentid + obj.id;
        newchild.setAttribute("id", childid);
        newchild.setAttribute("shipid", shipid);
        newchild.setAttribute("groupid",obj.bindDataID);
        container.appendChild(newchild);
        setSimpleAttr(newchild,obj.attributes);
        loadselectbox(childid,obj.options); //加载下拉框
    };
};
function createReinGrouplabel(parentid,shipid,obj){ //创建强化组的label类元素
    if ( typeof shipdata[shipid][obj.bindData][obj.bindDataID] != 'undefined' ) {
        var newchild = document.createElement('label');
        var container = document.getElementById(parentid);
        newchild.innerHTML = obj.innerHTMLPre + shipdata[shipid][obj.bindData][obj.bindDataID].name + obj.innerHTMLPost //设置元素的innerHTML,一般为文字
        newchild.setAttribute("id", parentid + obj.id); //给label设置id
        container.appendChild(newchild);
        for ( attr in obj.attributes ){  //遍历赋值元素的属性
            //绑定额外的css样式的代码
            var attrValue = obj.attributes[attr];
            if ( attr == 'class' & obj.bindClass != '' ){
                var classid = shipdata[shipid][obj.bindClass];
                var bindclassname = shipbindclass[obj.bindClass][classid];
                attrValue = attrValue + ' ' + bindclassname;
            }; //绑定额外的css样式的代码
            newchild.setAttribute(attr,attrValue);
        };
    };
};
function createBR(parentid) { //创建<br>
    var newchild = document.createElement("br");
    var container = document.getElementById(parentid);
    container.appendChild(newchild);
};
function createLabel(parentid,shipid,obj){ //创建label类元素
    var newchild = document.createElement('label');
    var container = document.getElementById(parentid);
    newchild.innerHTML = obj.innerHTMLPre + shipdata[shipid][obj.bindData] + obj.innerHTMLPost //设置元素的innerHTML,一般为文字
    container.appendChild(newchild);
    for ( attr in obj.attributes ){  //遍历赋值元素的属性
        //绑定额外的css样式的代码
        var attrValue = obj.attributes[attr];
        if ( attr == 'class' & obj.bindClass != '' ){
            var classid = shipdata[shipid][obj.bindClass];
            var bindclassname = shipbindclass[obj.bindClass][classid];
            attrValue = attrValue + ' ' + bindclassname;
        }; //绑定额外的css样式的代码
        newchild.setAttribute(attr,attrValue);
    };
};
function createButton(parentid,shipid,obj){
    var newchild = document.createElement('button');
    var container = document.getElementById(parentid);
    newchild.setAttribute("id", parentid + obj.id);
    newchild.setAttribute("shipid", shipid);
    newchild.innerHTML = obj.innerHTML
    container.appendChild(newchild);
    newchild = setSimpleAttr(newchild,obj.attributes);
};
function loadselectbox(elementid,obj){ //通过一个obj里的内容来加载下拉框,key值对应元素的value,value值对应元素显示的文字
    for ( keys in obj ){
        var value = obj[keys];
        document.getElementById(elementid).options.add(new Option(value,keys));
    }
};
//界面创建相关//结束
//////////////////////////////////
//缓存相关
function loadshipdataintocache(){
    for ( methods in searchtype ){ 
        searchcache[methods] = {}; //初始化searchcache[methods]为空对象
        for ( ships in shipdata ){ //将shipdata里的相关内容根据搜索方式缓存到searchcache中
            searchcache[methods][shipdata[ships][methods]] = {};
            searchcache[methods][shipdata[ships][methods]].id = shipdata[ships].id;
        };
    };
};
///////////////
//搜索相关
function getSearchVars(){ //获取搜索方式
    for ( keys in searchmethod ) {
        var elementid = searchmethod[keys].elementid;
        searchmethod[keys].value = document.getElementById(elementid).value;
    };
};
function search(){
    getSearchVars();
    document.getElementById('searchbox').innerText="";
    var searchinputs = document.getElementById('searchinput').value;
    var searchtype = searchmethod.searchtype.value;
    var searchresult = []; //暂存结果
    var i = 0;
    if ( searchinputs == "" ) { //如果未输入任何字符
        searchinputs=/[\s\S]*/i //则用正则表达式匹配任意字符
    };
    for ( keys in searchcache[searchtype] ){
        var str = keys;
        var result = str.search(searchinputs); //搜索
        if ( result != '-1' ){ //根据搜索方式找到匹配结果
            var shipid = searchcache[searchtype][keys].id; //找到shipid
            var filterresult = filter(shipid); //根据过滤器对shipid进行过滤
            if ( filterresult == 1 ) {
                searchresult[i] = shipid; //如果通过过滤筛选,则返回id值
                i = i + 1;
            };
        };
    };
    searchresult.sort(function(a,b){return a-b}); //结果升序排序
    for ( var i=0,len = searchresult.length;i<len;i++ ){
        createSearchBox(searchresult[i],searchResultBox_template);
    };
};
function filter(shipid) { //过滤器,接收ship的id作为参数
    var result = 1;
    for ( filters in shipfilters ){ //根据定义的过滤器对shipid进行筛选
        var filtervalue = searchmethod[filters].value; //当前过滤器定义的值
        if ( filtervalue != 0 ){ //过滤器的值若为0则表示不进行过滤,其他值则要进行过滤
            var shipvalue = shipdata[shipid][filters]; //shipid对应的相关属性的值
            if ( filtervalue != shipvalue ){ //检查shipvalue与过滤器定义的值是否相等,若不相等则返回0
                result = 0;
            };
        };
    };
    return result; //返回结果值,0为不通过,1为通过
};
////////////////
//记录元素id相关
function logReinGroupID(shipid,type,value,index){ //记录某船的某个强化组的label和下拉框的元素id
    if ( typeof shipReinforcementGroupsID[shipid][index] == 'undefined' ){
        shipReinforcementGroupsID[shipid][index] = {};
    };
    shipReinforcementGroupsID[shipid][index][type] = value;
};
function logSkillGroupID(shipid,type,value,index){ //记录某船的某个技能组的label和下拉框的元素id
    if ( typeof shipSkillGroupsID[shipid][index] == 'undefined' ){
        shipSkillGroupsID[shipid][index] = {};
    };
    shipSkillGroupsID[shipid][index][type] = value;
};
///////////////
function getParentNodeId(childid) {
    var parentid = document.getElementById(childid).parentNode.id;
    return parentid;
};
///////////////
//移除元素相关
function removeSearchBox(shipid) {
    var childelement = document.getElementById(searchbox_mainboxID[shipid]);
    childelement.remove(); //删除div
    delete searchbox_mainboxID[shipid];
};
function removeShiplistBox(shipid) {
    var childelement = document.getElementById(shiplistbox_mainboxID[shipid]);
    childelement.remove(); //删除div
    //后续需增加删除相应数据结构的代码
    delete shipReinforcementGroupsID[shipid];
    delete shipSkillGroupsID[shipid];
    delete shiplistbox_mainboxID[shipid];
};
///////////////

function shiplistbox_selectboxChanged_reinGroup(shipid,groupid) {  //强化组下拉框变动后
    var currentlevel = document.getElementById(shipReinforcementGroupsID[shipid][groupid].currentlevelID).value; //当前等级
    var finallevel = document.getElementById(shipReinforcementGroupsID[shipid][groupid].finallevelID).value;  //目标等级
    var level = Math.max(currentlevel,finallevel);  //取等级的最大值
    var initvalue = shipdata[shipid].reinforcementGroups[groupid].initvalue; //拿到初始值
    var str = shipdata[shipid].reinforcementGroups[groupid].name + ": +" + initvalue * level; //计算并显示最终值
    var elementid = shipReinforcementGroupsID[shipid][groupid].labelID;
    document.getElementById(elementid).innerHTML = str;
}
function shiplistbox_selectboxChanged_skillGroup(shipid,groupid) {  //技能组下拉框变动后
    //var currentlevel = document.getElementById(shipSkillGroupsID[shipid][groupid].currentlevelID).value;
    //var finallevel = document.getElementById(shipSkillGroupsID[shipid][groupid].finallevelID).value;
}

function calConsumption(){
    
};