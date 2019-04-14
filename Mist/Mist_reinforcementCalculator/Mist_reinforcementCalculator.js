var searchmethod = { //搜索方法对应的页面元素的id,和值
    searchtype: { elementid: 'CMB_searchtype', value: ''},
    shiptypeid: { elementid: 'CMB_shiptypefilter', value: ''},
    shipstars: { elementid: 'CMB_shipstars', value: ''},
};

loadselectbox('CMB_searchtype',searchtype); //加载搜索方法的下拉框
loadselectbox('CMB_shiptypefilter',shiptypeid);
loadselectbox('CMB_shipstars',shipstars);
loadshipdataintocache();
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
    var searchinputs = document.getElementById('searchinput').value;
    var searchtype = searchmethod.searchtype.value;
    var searchresult = [];
    var i = 0;
    if ( searchinputs == "" ) { //如果未输入任何字符
        searchinputs=/[\s\S]*/i //则用正则表达式匹配任意字符
    };
    for ( keys in searchcache[searchtype] ){
        var str = keys;
        var result = str.search(searchinputs); //搜索
        if ( result != '-1' ){ 
            var shipid = searchcache[searchtype][keys].id;
            searchresult[i] = shipid; //返回id值
            i = i + 1;
        };
    };
    searchresult.sort(function(a,b){return a-b}); //升序排序
    alert(searchresult);
};

function filter() {
};