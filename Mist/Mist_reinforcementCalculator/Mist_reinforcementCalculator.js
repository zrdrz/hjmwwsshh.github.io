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
    2: 'label_star2',
    3: 'label_star3',
    4: 'label_star4',
    5: 'label_star5',
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
            attributes: {
                class: "label1 label3",
                style: "padding-left:0px;"
            },
            innerHTMLPre: "[",
            innerHTMLPost: "]",
            bindData: "id", //绑定shipdata里的数据
            bindClass: "shipstars", //根据shipdata里的某个数据来绑定额外的css class样式
        },
        element2: { 
            type: "label",
            attributes: {
                class: "label1 label3",
                style: "padding-left:0px;"
            },
            innerHTMLPre: "[",
            innerHTMLPost: "]",
            bindData: "shiptypename", 
            bindClass: "shipstars", 
        },
        element3: { 
            type: "label",
            attributes: {
                class: "label1 label3",
                style: "padding-left:5px;padding-right:5px;"
            },
            innerHTMLPre: "",
            innerHTMLPost: "",
            bindData: "name",
            bindClass: "shipstars",
        },
        element4: { 
            type: "button",
            id: "btn_add",
            attributes: {
                class: "button button2",
                onclick: "createShiplistBox(this.getAttribute('shipid'));removeSearchBox(getParentNodeId(this.id))",
                templatename: "searchbox1",
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
            id: "shiplistbox_child_div1_",
            attributes: {
                class: "shiplistbox_div",
                style: "width:50px;"
            },
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
            id: "shiplistbox_child_div2_",
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
            id: "shiplistbox_child_div3_",
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
            id: "shiplistbox_child_div4_",
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
            id: "shiplistbox_child_div5_",
            attributes: { class: "shiplistbox_div shiplistbox_div_reinforce", style: "width:100px;" },
            childElements:{
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
////////
function createShiplistBox(shipid){ //创建强化组box
    //alert(shipid);
    var count = shiplistBox_template.box_count;  //获取box的id的计数
    var mainboxid = shiplistBox_template.mainbox.id + count; //确定id
    createShiplistBox_Mainbox(shipid,mainboxid,shiplistBox_template);    //生成的主div
    createShiplistBox_Child(mainboxid,shipid,shiplistBox_template);    //生成子元素//第一层子元素为div
    count = Number(count) + 1;
    shiplistBox_template.box_count = count; //box计数加1
};
function createShiplistBox_Mainbox(shipid,parentid,obj){ //创建强化组的mainbox
    var mainbox = document.createElement(obj.mainbox.type); //生成mainbox
    var container = document.getElementById(obj.mainbox.parentid); //确定父元素
    container.appendChild(mainbox); //添加mainbox
    mainbox.setAttribute("id",parentid); //设置属性
    for ( attr in obj.mainbox.attributes ){//设置属性
        mainbox.setAttribute(attr,obj.mainbox.attributes[attr]); 
    };
};
function createShiplistBox_Child(parentid,shipid,obj){ 
    var childtype = "";  //子元素类型
    var childid = "";    //子元素id
    for ( childname in obj.childElements ){  //遍历模板里的childElements对象
        childtype = obj.childElements[childname].type; //确定子元素类型
        switch (childtype){ //根据子元素类型创建子元素
            case 'div':
                var childid = obj.childElements[childname].id + obj.box_count;  //确定子元素id
                createDiv(parentid,childid,obj.childElements[childname]);
                createShiplistBox_Child(childid,shipid,obj.childElements[childname])
                break;
            case 'label':
                createLabel(parentid,shipid,obj.childElements[childname]);
                break;
        };
    };
};
function createDiv(parentid,childid,obj){ //创建div类元素
    var newchild = document.createElement('div');
    var container = document.getElementById(parentid);
    newchild.setAttribute("id", childid);
    container.appendChild(newchild);
    for ( attr in obj.attributes ){  //遍历赋值元素的属性
        var attrValue = obj.attributes[attr];
        newchild.setAttribute(attr,attrValue);
    };
};
////////
function createSearchBox(shipid,obj){
    var count = obj.box_count;  //获取box的id的计数
    var mainboxid = obj.mainbox.id + count; //确定id
    createSearchBox_Mainbox(obj);    //生成的主div
    createSearchBox_Child(shipid,obj);    //生成子元素
    count = Number(count) + 1;
    obj.box_count = count; //box计数加1
};
function createSearchBox_Mainbox(obj){
    var mainbox = document.createElement(obj.mainbox.type); //生成mainbox
    var mainboxid = obj.mainbox.id + obj.box_count; //确定id
    var container = document.getElementById(obj.mainbox.parentid); //确定父元素
    container.appendChild(mainbox); //添加mainbox
    mainbox.setAttribute("id",mainboxid); //设置属性
    for ( attr in obj.mainbox.attributes ){//设置属性
        mainbox.setAttribute(attr,obj.mainbox.attributes[attr]); 
    };
};
function createSearchBox_Child(shipid,obj){  //创建子元素
    var childtype = "";  //子元素类型
    var childid = "";    //子元素id
    var mainboxid = obj.mainbox.id + obj.box_count; //bufferbox的mainbox的id
    for ( childname in obj.childElements ){  //遍历模板里的childElements对象
        childtype = obj.childElements[childname].type; //确定子元素类型
        childid = obj.childElements[childname].id + obj.box_count;  //确定子元素id
        switch (childtype){ //根据子元素类型创建子元素
            case 'label':
                createLabel(mainboxid,shipid,obj.childElements[childname]);
                break;
            case 'button':
                createButton(childid,shipid,mainboxid,obj.childElements[childname]);
                break;
        };
    };
};
////////
function createLabel(parentid,shipid,obj){ //创建label类元素
    var newchild = document.createElement('label');
    search_shiptypeid = shipid;
    var container = document.getElementById(parentid);
    newchild.innerHTML = obj.innerHTMLPre + shipdata[shipid][obj.bindData] + obj.innerHTMLPost //设置元素的innerHTML,一般为文字
    container.appendChild(newchild);
    for ( attr in obj.attributes ){  //遍历赋值元素的属性
        //绑定额外的css样式的代码
        var attrValue = obj.attributes[attr];
        if ( attr == 'class' & obj.bindClass != '' ){
            var classid = shipdata[shipid][obj.bindClass];
            var bindclassname = shipbindclass[classid];
            attrValue = attrValue + ' ' + bindclassname;
        }; //绑定额外的css样式的代码
        newchild.setAttribute(attr,attrValue);
    };
};
function createButton(childid,shipid,parentid,obj){
    var newchild = document.createElement('button');
    var container = document.getElementById(parentid);
    newchild.setAttribute("id", childid);
    newchild.setAttribute("shipid", shipid);
    newchild.setAttribute("value", parentid); //button类元素需增加value属性
    newchild.innerHTML = obj.innerHTML
    container.appendChild(newchild);
    for ( attr in obj.attributes ){
        newchild.setAttribute(attr,obj.attributes[attr]);
    };
};
////////
function loadselectbox(elementid,obj){ //通过一个obj里的内容来加载下拉框,key值对应元素的value,value值对应元素显示的文字
    for ( keys in obj ){
        var value = obj[keys];
        document.getElementById(elementid).options.add(new Option(value,keys));
    }
};
function loadshipdataintocache(){
    for ( methods in searchtype ){ 
        searchcache[methods] = {}; //初始化searchcache[methods]为空对象
        for ( ships in shipdata ){ //将shipdata里的相关内容根据搜索方式缓存到searchcache中
            searchcache[methods][shipdata[ships][methods]] = {};
            searchcache[methods][shipdata[ships][methods]].id = shipdata[ships].id;
        };
    };
};
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

function getParentNodeId(childid) {
    var parentid = document.getElementById(childid).parentNode.id;
    return parentid;
};
function removeSearchBox(elementid) {
    var childelement = document.getElementById(elementid);
    childelement.remove(); //删除div
};