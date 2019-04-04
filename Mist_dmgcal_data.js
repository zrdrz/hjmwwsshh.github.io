//存放数据
//若要扩充weapon类型,armor类型或是ship类型都十分方便
//
//增加新公式的步骤:
//1.确定要用到的变量,增加到global{}里面
//2.在result{}中写好存放结果的object
//3.若要新增武器效率系数,则写入到Dict_weapon_data[weapontype].efficiency里面
//4.若新增的系数需要展示,则需要在Dict_var_element_bind_inputbox_readonly里绑定html页面上对应的元素id
//5.写好新公式的function,并加入到Dict_funtions内,便可调用
//
//修改shiptype和weapontype,直接对Dict_shiptype_data和Dict_weapon_data进行操作即可
//
//全局变量
var global = { 
    shiptype: "",
    weapontype: "",
    firepower: 0,
    fp_correction: 0, //百分数
    reload_time: 0,
    barrels: 0,
    vsLightArmor: 0.00,  //作战效率
    vsMediumArmor: 0.00,  //作战效率
    vsHeavyArmor: 0.00,  //作战效率
    equipmentefficiency: 0, //装备效率
    critdmg_base: 0,
    overpene_dmg: 0,
    moderate_dmg: 0,
};
var global_buff = {  //存放全局buff
    additional_crit: 0, //额外的暴击伤害系数(百分数); additional_crit = buff1 + buff2 + buff3...
    additional_firepower: 0, //额外火力百分比(百分数),多个为加法, firepower = firepower * ( 1 + additional_firepower ); additional_firepower = buff1 + buff2 + buff3 ...
    additional_damage: 100, //最终伤害系数百分比(百分数),多个为乘法 dmg = dmg * additional_damage; additional_damage =  (100 + buff1)/100 * (100 + buff2)/100 * (1 + buff3)/100
    additional_reloadspeed: 0, //额外装填速度百分比(百分数): time = t / ( 1 + buff% ); DPM = DPM * (1 + %)
};
var result = { //计算结果存放处
    singledmg_overpene: {
        vsLightArmor: 0.00,
        vsMediumArmor: 0.00,
        vsHeavyArmor: 0.00
    },
    singledmg_moderate: {
        vsLightArmor: 0.00,
        vsMediumArmor: 0.00,
        vsHeavyArmor: 0.00
    },
    singledmg: {
        vsLightArmor: 0.00,
        vsMediumArmor: 0.00,
        vsHeavyArmor: 0.00
    },
    singledmgcrit: {
        vsLightArmor: 0.00,
        vsMediumArmor: 0.00,
        vsHeavyArmor: 0.00
    },
    dpm: {
        vsLightArmor: 0.00,
        vsMediumArmor: 0.00,
        vsHeavyArmor: 0.0
    },
    dpmcrit: {
        vsLightArmor: 0.00,
        vsMediumArmor: 0.00,
        vsHeavyArmor: 0.0
    },
};
//
//存放html页面对应元素的id,key值要与global中的key值相同
const Dict_var_element_bind_inputbox_readonly = { 
//部分key值与Dict_weapon_data[weapontype].efficiency的key值绑定,value为页面的elementid
    vsLightArmor: "WeaponvsLightArmor",
    vsMediumArmor: "WeaponvsMediumArmor",
    vsHeavyArmor: "WeaponvsHeavyArmor",
    equipmentefficiency: "equipmentefficiency",
    critdmg_base: "critdmg_base",
    moderate_dmg: "moderate_dmg",
    overpene_dmg: "overpene_dmg",
};
const Dict_var_element_bind_inputbox_readwrite = {
    firepower: "firepower",
    fp_correction: "fp_correction",
    reload_time: "reload_time",
};
const Dict_var_element_bind_selectbox = {
    barrels: "CMB_barrels",
    shiptype: "CMB_ship_type",
    weapontype: "CMB_weapon_type"
};
////
var bufferbox_template = { //存放bufferbox的模板
    bufferbox1: {
        mainbox: {  //主框架
            parentid: "bufferbox", //父元素的id
            type: "div",
            id: "bufferbox_child",
            attributes: {  //元素的属性
                style: "padding-left:5px;",
            },
        },
        childElements: { //子元素
            element1: { 
                type: "label",
                attributes: {
                    class: "label1",
                },
                innerHTML: "类型: ",
            },
            element2: { 
                type: "select",
                id: "CMB_buffer",
                attributes: {
                    class: "select3",
                },
                options: {
                    buff_firepower: "火力提升",
                    buff_finaldmg: "终伤提升",
                    buff_additionalcritdmg: "额外爆伤",
                    buff_reloadspeed: "装填速度提升",
                },
                innerHTML: "",
            },
            element3: {
                type: "input",
                id: "Input_buffer",
                attributes: {
                    class: "input3",
                    oninput: "value=value.replace(/[^\\d.-]/g,'')",
                    value: "0",
                },
                innerHTML: "",
            },
            element4: { 
                type: "label",
                attributes: {
                    class: "label1",
                },
                innerHTML: " %",
            },
            element5: { 
                type: "button",
                id: "btn_remove",
                attributes: {
                    class: "button2",
                    onclick: "removeChildElement(this.value,this.getAttribute('templatename'))",
                    templatename: "bufferbox1",
                },
                innerHTML: "移除buff",
            },
        },
        bufferbox_count: 1, //用于给新生成的bufferbox的id后缀添加计数
        bufferbox_data: {  //存放各个bufferbox的数据
            //bufferbox_child1: {
            //    buffer_type: "buff_firepower",
            //    buffer_value: "24",
            //  },
            //bufferbox_child2: {
            //    buffer_type: "buff_finaldmg",
            //    buffer_value: "15",
            //},
        },
        bufferbox_id: {  //存放页面里新生成的bufferbox的元素id
            //bufferbox_child1: {
            //    childElements:{
            //        1: {
            //            type: "select",
            //            id: "CMB_buffer1",
            //        },
            //        2: {
            //            type: "input",
            //            id: "Input_buffer1",
            //        },
            //    },
            //},
            //bufferbox_child2: {
            //    childElements:{
            //    
            //    },
            //},
        },
        buff_map: { //与全局变量对应的关系
            buff_firepower: "additional_firepower",
            buff_finaldmg: "additional_damage",
            buff_additionalcritdmg: "additional_crit",
            buff_reloadspeed: "additional_reloadspeed",
        },
        buff_var_tmp:{ //存放临时计算的结果
            buff_firepower: 0,  //buff1 + buff2 + buff3 ...
            buff_finaldmg: 0,  //(100+buff1)/100 * (100+buff2)/100)...
            buff_additionalcritdmg: 0, //buff1 + buff2 + buff3
            buff_reloadspeed: 0, //buff1 + buff2 + buff3
        },
        buff_var_default: { //buff的默认值
            buff_firepower: 0,
            buff_finaldmg: 100,
            buff_additionalcritdmg: 0,
            buff_reloadspeed: 0,
        },
    },
};
////
const Dict_barrels = {  //联装数
    1: "舰炮:单装/鱼雷管:3联",
    2: "舰炮:双联/鱼雷管:4联",
    3: "舰炮:三联/鱼雷管:5联",
};
const Dict_weapon_data = { //weapon数据
    AP_ExBig: {
        name: "超大AP",  //显示名
        efficiency: { //各项效率
            vsLightArmor: 0.35, 
            vsMediumArmor: 1.00,
            vsHeavyArmor: 0.75,
            critdmg_base: 2.00, //暴击系数也放在这里面了
            moderate_dmg: 0.50, //半伤系数
            overpene_dmg: 0.25, //过穿伤害系数
        },
        barrels: [ "2","3" ], //可用的联装数
        specialDamage: { //特殊伤害
            name: "无", 
            type: "none", 
        },
    },
    AP_Big: {
        name: "大AP",
        efficiency: {
            vsLightArmor: 1.00,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 0.30,
            critdmg_base: 2.00,
            moderate_dmg: 0.50,
            overpene_dmg: 0.25,
        },
        barrels: [ "2","3" ], 
        specialDamage: { 
            name: "无", 
            type: "none", 
        },
    },
    AP_Medium: {
        name: "中AP",
        efficiency: {
            vsLightArmor: 0.70,
            vsMediumArmor: 0.50,
            vsHeavyArmor: 0.25,
            critdmg_base: 2.00,
            moderate_dmg: 0.50,
            overpene_dmg: 0.25,
        },
        barrels: [ "1","2","3" ],
        specialDamage: { 
            name: "无", 
            type: "none", 
        },
    },
    AP_Small: {
        name: "小AP",
        efficiency: {
            vsLightArmor: 0.55,
            vsMediumArmor: 0.35,
            vsHeavyArmor: 0.25,
            critdmg_base: 2.00,
            moderate_dmg: 0.50,
            overpene_dmg: 0.25,
        },
        barrels: [ "1","2" ], 
        specialDamage: { 
            name: "无", 
            type: "none", 
        },
    },
    HE_ExBig: {
        name: "超大HE",
        efficiency: {
            vsLightArmor: 0.50,
            vsMediumArmor: 1.00,
            vsHeavyArmor: 0.50,
            critdmg_base: 1.50,
            moderate_dmg: 0.67,
            overpene_dmg: 0.25,
        },
        barrels: [ "2","3" ], 
        specialDamage: { 
            name: "起火伤害", 
            type: "firedmg", 
        },
    },
    HE_Big: {
        name: "大HE",
        efficiency: {
            vsLightArmor: 1.00,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 0.40,
            critdmg_base: 1.50,
            moderate_dmg: 0.67,
            overpene_dmg: 0.25,
        },
        barrels: [ "2","3" ],
        specialDamage: { 
            name: "起火伤害", 
            type: "firedmg", 
        },
    },
    HE_Medium: {
        name: "中HE",
        efficiency: {
            vsLightArmor: 0.70,
            vsMediumArmor: 0.50,
            vsHeavyArmor: 0.25,
            critdmg_base: 1.50,
            moderate_dmg: 0.67,
            overpene_dmg: 0.25,
        },
        barrels: [ "1","2","3" ], 
        specialDamage: { 
            name: "起火伤害", 
            type: "firedmg", 
        },
    },
    HE_Small: {
        name: "小HE",
        efficiency: {
            vsLightArmor: 0.55,
            vsMediumArmor: 0.35,
            vsHeavyArmor: 0.25,
            critdmg_base: 1.50,
            moderate_dmg: 0.67,
            overpene_dmg: 0.25,
        },
        barrels: [ "1","2" ], 
        specialDamage: { 
            name: "起火伤害", 
            type: "firedmg", 
        },
    },
    Torpedo: {
        name: "舰载鱼雷",
        efficiency: {
            vsLightArmor: 0.40,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 1.50,
            critdmg_base: 2.00,
            moderate_dmg: 0.50,
            overpene_dmg: 0.25,
        },
        barrels: [ "1","2","3" ], 
        specialDamage: { 
            name: "进水伤害", 
            type: "flooddmg", 
        },
    },
    DiveBomber: {
        name: "舰爆",
        efficiency: {
            vsLightArmor: 0.75,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 0.75,
            critdmg_base: 1.50,
            moderate_dmg: 0.67,
            overpene_dmg: 0.25,
        },
        barrels: [ "3" ], 
        specialDamage: { 
            name: "起火伤害", 
            type: "firedmg", 
        },
    },
    TorpedoBomber: {
        name: "舰攻",
        efficiency: {
            vsLightArmor: 0.40,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 1.00,
            critdmg_base: 2.00,
            moderate_dmg: 0.50,
            overpene_dmg: 0.25,
        },
        barrels: [ "3" ], 
        specialDamage: { 
            name: "进水伤害", 
            type: "flooddmg", 
        },
    }
};
const Dict_shiptype_data = {  //ship数据
    dd: {
        name: "驱逐舰", //显示名
        can_use_weapon: [ "AP_Small","HE_Small","Torpedo" ],  //可用weapon
        weapon_type_efficiency: { //使用各项weapon的效率
            AP_Small: 1.20,
            HE_Small: 1.20,
            Torpedo: 0.20
        }
    },
    cl: {
        name: "轻巡",
        can_use_weapon: [ "AP_Medium","HE_Medium","AP_Small","HE_Small","Torpedo" ],
        weapon_type_efficiency: {
            AP_Medium: 1.20,
            HE_Medium: 1.20,
            AP_Small: 0.80,
            HE_Small: 0.80,
            Torpedo: 0.25
        }
    },
    ca: {
        name: "重巡",
        can_use_weapon: [ "AP_Big","HE_Big","AP_Small","HE_Small","Torpedo" ],
        weapon_type_efficiency: {
            AP_Big: 1.00,
            HE_Big: 1.00,
            AP_Small: 0.40,
            HE_Small: 0.40,
            Torpedo: 0.20
        }
    },
    bc: {
        name: "战巡",
        can_use_weapon: [ "AP_ExBig","HE_ExBig","AP_Medium","HE_Medium","AP_Small","HE_Small","Torpedo" ],
        weapon_type_efficiency: {
            AP_ExBig: 1.00,
            HE_ExBig: 1.00,
            AP_Medium: 0.10,
            HE_Medium: 0.10,
            AP_Small: 0.08,
            HE_Small: 0.08,
            Torpedo: 0.20
        }
    },
    bb: {
        name: "战列",
        can_use_weapon: [ "AP_ExBig","HE_ExBig","AP_Medium","HE_Medium","AP_Small","HE_Small","Torpedo" ],
        weapon_type_efficiency: {
            AP_ExBig: 1.00,
            HE_ExBig: 1.00,
            AP_Medium: 0.10,
            HE_Medium: 0.10,
            AP_Small: 0.08,
            HE_Small: 0.08,
            Torpedo: 0.20
        }
    },
    cv: {
        name: "航母",
        can_use_weapon: [ "DiveBomber","TorpedoBomber" ],
        weapon_type_efficiency: {
            DiveBomber: 0.25,
            TorpedoBomber: 0.25,
        }
    }
};

//存放要调用的计算的函数名:
Dict_funtions = {
    init_calinfo: "dmgcal_info()",
    printline1: "printSeparateline(40,'-')",
    init_buffinfo: "buff_info()",
    printline2: "printSeparateline(40,'-')",
    printtxt1: "printTextline('不计buff:')",
    printArmor1: "printArmorTypeline()",
    cal_singledmgoverpene1: "dmgcal_singledmg_overpene(0)",
    cal_singledmgmoderate1: "dmgcal_singledmg_moderate(0)",
    cal_singledmg1: "dmgcal_singledmg(0)",
    cal_singledmgcrit1: "dmgcal_singdmg_crit(0)",
    printline3: "printSeparateline(8,'-')",
    cal_dpm1: "dmgcal_dpm(0)",
    cal_dpm_crit1: "dmgcal_dpm_crit(0)",
    printline4: "printSeparateline(40,'=')",
    printtxt2: "printTextline('计入buff:')",
    printArmor2: "printArmorTypeline()",
    cal_singledmgoverpene2: "dmgcal_singledmg_overpene(1)",
    cal_singledmgmoderate2: "dmgcal_singledmg_moderate(1)",
    cal_singledmg2: "dmgcal_singledmg(1)",
    cal_singledmgcrit2: "dmgcal_singdmg_crit(1)",
    printline5: "printSeparateline(8,'-')",
    cal_dpm2: "dmgcal_dpm(1)",
    cal_dpm_crit2: "dmgcal_dpm_crit(1)",
    printline6: "printSeparateline(40,'=')",
    printtxt3: "printTextline('不计buff:')",
    cal_sepcialdmg1: "dmgcal_specialdmg(0)",
    printtxt4: "printTextline('计入buff:')",
    cal_sepcialdmg2: "dmgcal_specialdmg(1)",
};
Dict_specialdmgfunctions = { //特殊伤害计算
    firedmg: "dmgcal_specialdmg_firedmg()",
    flooddmg: "dmgcal_specialdmg_flooddmg()",
};
function printSeparateline(num,separator) { //插入一行指定数量和字符的分隔线
    var str = "";
    for ( var i=0;i<num;i++ ){
        str = str + separator;
    }
    str = str + '\n'
    return str;
};
function printTextline(strings){  //插入一行文字
    var str = strings + '\n';
    return str;
};
function printArmorTypeline() {
    var str = '\t\t' + "vs轻甲" + '\t\t' + "vs中甲" + '\t\t' + "vs重甲" + '\n';
    return str;
};
function dmgcal_info() {
    var str = "舰船类型:" + Dict_shiptype_data[global.shiptype].name + '\t\t' + "武器类型:" + Dict_weapon_data[global.weapontype].name + '\n' + "面板总火力:" + global.firepower + '\t\t' + "火力补正:" + global.fp_correction + '%\n' + "装备装填时间:" + global.reload_time + "s" + '\t\t' + "联装数:" + global.barrels + '\n'; 
    return str;
};
function buff_info() {
    var str = "当前buff效果:" + '\n' + "火力提升:" + global_buff.additional_firepower + '%\t\t' + "最终伤害:" + global_buff.additional_damage + '%\t\t' + '\n' + "额外暴伤:" + global_buff.additional_crit + '%\t\t' +  "装填速度提升:" + global_buff.additional_reloadspeed + '%\t\t' + '\n';
    return str;
};
function dmgcal_singledmg_overpene(is_buffed){
    var str = "单发过穿" + '\t';
    for ( varname in result.singledmg_overpene ){ 
        var base = (global.firepower * (global.fp_correction / 100) * global[varname] * global.equipmentefficiency * global.overpene_dmg * global.reload_time / global.barrels / 5);
        var buff = (100 + Number(global_buff.additional_firepower)) / 100 * (global_buff.additional_damage / 100);
        result.singledmg_overpene[varname] = Math.ceil(base * (buff * is_buffed + 1 * !is_buffed));
        str = str + result.singledmg_overpene[varname] + '\t\t';
    };
    str = str + '\n';
    return str;
};
function dmgcal_singledmg_moderate(is_buffed){
    var str = "单发半伤" + '\t';
    for ( varname in result.singledmg_moderate ){ 
        var base = (global.firepower * (global.fp_correction / 100) * global[varname] * global.equipmentefficiency * global.moderate_dmg * global.reload_time / global.barrels / 5);
        var buff = (100 + Number(global_buff.additional_firepower)) / 100 * (global_buff.additional_damage / 100);
        result.singledmg_moderate[varname] = Math.ceil(base * (buff * is_buffed + 1 * !is_buffed));
        str = str + result.singledmg_moderate[varname] + '\t\t';
    };
    str = str + '\n';
    return str;
};
function dmgcal_singledmg(is_buffed){
    var str = "单发标伤" + '\t';
    for ( varname in result.singledmg ){ //varname即为vsLightArmor,vsMediumArmor和vsHeavyArmor三个效率系数
        var base = (global.firepower * (global.fp_correction / 100) * global[varname] * global.equipmentefficiency * global.reload_time / global.barrels / 5);
        var buff = (100 + Number(global_buff.additional_firepower)) / 100 * (global_buff.additional_damage / 100);
        result.singledmg[varname] = Math.ceil(base * (buff * is_buffed + 1 * !is_buffed));
        str = str + result.singledmg[varname] + '\t\t';
    };
    str = str + '\n';
    return str;
};
function dmgcal_singdmg_crit(is_buffed){
    var str = "单发暴伤" + '\t';
    for ( varname in result.singledmgcrit ){
        var base = (global.firepower * (global.fp_correction / 100) * global[varname] * global.equipmentefficiency * global.reload_time / global.barrels / 5);
        var buff = (100 + Number(global_buff.additional_firepower)) / 100 * (global_buff.additional_damage / 100);
        var crit = ((global.critdmg_base * 100 + Number(global_buff.additional_crit) * is_buffed) / 100);
        result.singledmgcrit[varname] = Math.ceil(base * (buff * is_buffed + 1 * !is_buffed) * crit);
        str = str + result.singledmgcrit[varname] + '\t\t';
    };
    str = str + '\n';
    return str;
};
function dmgcal_dpm(is_buffed) {
    var str = "DPM标伤" + '\t\t' ;
    for ( varname in result.dpm ){
        var base = (global.firepower * (global.fp_correction / 100) * global[varname] * global.equipmentefficiency * 12);
        var buff = (100 + Number(global_buff.additional_firepower)) / 100 * (global_buff.additional_damage / 100) * ((100 + Number(global_buff.additional_reloadspeed) * is_buffed) / 100);
        result.dpm[varname] = Math.ceil(base * (buff * is_buffed + 1 * !is_buffed));
        str = str + result.dpm[varname] + '\t\t'
    };
    str = str + '\n';
    return str;
};
function dmgcal_dpm_crit(is_buffed) {
    var str = "DPM暴伤" + '\t\t' ;
    for ( varname in result.dpm ){
        var base = (global.firepower * (global.fp_correction / 100) * global[varname] * global.equipmentefficiency * 12);
        var buff = (100 + Number(global_buff.additional_firepower)) / 100 * (global_buff.additional_damage / 100) * ((100 + Number(global_buff.additional_reloadspeed) * is_buffed) / 100);
        var crit = ((global.critdmg_base * 100 + Number(global_buff.additional_crit) * is_buffed) / 100);
        result.dpmcrit[varname] = Math.ceil(base * (buff * is_buffed + 1 * !is_buffed) * crit);
        str = str + result.dpmcrit[varname] + '\t\t'
    };
    str = str + '\n';
    return str;
};
function dmgcal_specialdmg(is_buffed) {
    var specialdmgtype = Dict_weapon_data[global.weapontype].specialDamage.type;
    var specialdmgname = Dict_weapon_data[global.weapontype].specialDamage.name;
    var str = "特殊伤害类型:" + specialdmgname + '\n';
    if ( specialdmgtype != "none" ){
        var dmg = eval(Dict_specialdmgfunctions[specialdmgtype]);
        var buff = (100 + Number(global_buff.additional_firepower)) / 100 * (global_buff.additional_damage / 100);
        var result = Math.ceil(dmg * (buff * is_buffed + 1 * !is_buffed));
        str = str + "单次伤害:" + result + '\n';
    };
    return str;
};
function dmgcal_specialdmg_firedmg() {
    var result = (global.firepower * global.equipmentefficiency * (global.fp_correction / 100) * global.reload_time)/(global.barrels * 25);
    return result;
};
function dmgcal_specialdmg_flooddmg(){
    return 0;
};
//
//bufferbox相关函数
Dict_bufferbox_funtions = {
    createElement: {
        insertbufferbox1: "createbufferbox('bufferbox1')",
    },
    readElementValue: {
        readbufferbox1: "readbufferbox1('bufferbox1')",
        readbufferbox2: "readbufferbox2('bufferbox1')",
        readbufferbox3: "readbufferbox3('bufferbox1')",
    },
};
function createbufferbox(templateName){
    var number = getObjectKeysCount(bufferbox_template[templateName].bufferbox_id); //获取页面上bufferbox的数量
    if ( number <= 7 ) {  //限制bufferbox数量不大于七个
        var count = bufferbox_template[templateName].bufferbox_count;  //获取bufferbox的id的计数
        var mainboxid = bufferbox_template[templateName].mainbox.id + bufferbox_template[templateName].bufferbox_count; //确定id
        createMainbox(bufferbox_template[templateName]);    //生成buffbox的主div
        createChild(bufferbox_template[templateName]);    //生成子元素
        count = Number(count) + 1;
        bufferbox_template[templateName].bufferbox_count = count; //bufferbox计数加1
    } else { 
        alert("暂时只支持最多7个buff");
    };
};
function readbufferbox1(templateName) { //从模板创建的bufferbox中读取表单数据,并写入到bufferbox_data里面
    var obj_readfrom = bufferbox_template[templateName].bufferbox_id;
    var obj_writeinto = bufferbox_template[templateName].bufferbox_data;
    for ( boxname in obj_readfrom ){
        for ( child in obj_readfrom[boxname].childElements ){ //按元素类型读取数据
            var childtype = obj_readfrom[boxname].childElements[child].type;
            var childid = obj_readfrom[boxname].childElements[child].id;
            switch (childtype) {
                case 'select':  //从select元素读取buff类型数据
                    obj_writeinto[boxname].buffer_type = document.getElementById(childid).value
                    break;
                case 'input':  //从input元素读取数值数据
                    obj_writeinto[boxname].buffer_value = document.getElementById(childid).value
                    break;
            };
        };
    };
};
function readbufferbox2(templateName) { //从bufferbox_data里读取各个buff数据,然后分类写入到buff_var_tmp里面
    var obj_readfrom = bufferbox_template[templateName].bufferbox_data;
    var obj_writeinto = bufferbox_template[templateName].buff_var_tmp;
    for ( buff in obj_writeinto ) { //读取前先还原数值为默认值
        obj_writeinto[buff] = bufferbox_template[templateName].buff_var_default[buff];
    };
    for ( boxname in obj_readfrom ){
        var buffer_type = obj_readfrom[boxname].buffer_type;
        var buffer_value = obj_readfrom[boxname].buffer_value;
        switch (buffer_type) {
            case 'buff_firepower':
                obj_writeinto[buffer_type] = Number(obj_writeinto[buffer_type]) + Number(buffer_value);
                break;
            case 'buff_finaldmg':
                obj_writeinto[buffer_type] = Number(obj_writeinto[buffer_type]) * ( 100 + Number(buffer_value)) / 100;
                break;
            case 'buff_additionalcritdmg':
                obj_writeinto[buffer_type] = Number(obj_writeinto[buffer_type]) + Number(buffer_value);
                break;
            case 'buff_reloadspeed':
                obj_writeinto[buffer_type] = Number(obj_writeinto[buffer_type]) + Number(buffer_value);
                break;
        };
    };
};
function readbufferbox3(templateName) {  //将buff_var_tmp里的数据根据buff_map的映射关系,写入到global_buff
    var obj_readfrom = bufferbox_template[templateName].buff_var_tmp;
    var obj_map = bufferbox_template[templateName].buff_map;
    var obj_writeinto = global_buff;
    for ( buff in obj_readfrom ) {
        obj_writeinto[obj_map[buff]] = obj_readfrom[buff];
    };
};
function createMainbox(obj){
    var mainbox = document.createElement(obj.mainbox.type); //生成mainbox
    var mainboxid = obj.mainbox.id + obj.bufferbox_count; //确定id
    var container = document.getElementById(obj.mainbox.parentid); //确定父元素
    container.appendChild(mainbox); //添加mainbox
    mainbox.setAttribute("id",mainboxid); //设置属性
    for ( attr in obj.mainbox.attributes ){//设置属性
        mainbox.setAttribute(attr,obj.mainbox.attributes[attr]); 
    };
    obj.bufferbox_id[mainboxid] = {}; //把元素id添加到bufferbox_id对象中
    obj.bufferbox_id[mainboxid].childElements = {};
    obj.bufferbox_data[mainboxid] = {}; //初始化数据存放的obj
    obj.bufferbox_data[mainboxid].buffer_type = "";
    obj.bufferbox_data[mainboxid].buffer_value = "";
};
function createChild(obj){  //创建子元素
    var childtype = "";  //子元素类型
    var childid = "";    //子元素id
    var mainboxid = obj.mainbox.id + obj.bufferbox_count; //bufferbox的mainbox的id
    //
    for ( childname in obj.childElements ){  //遍历模板里的childElements对象
        childtype = obj.childElements[childname].type; //确定子元素类型
        childid = obj.childElements[childname].id + obj.bufferbox_count;  //确定子元素id
        var j = getObjectKeysCount(obj.bufferbox_id[mainboxid].childElements); //确定bufferbox里的子元素的数量
        switch (childtype){ //根据子元素类型创建子元素
            case 'label':
                createLabel(mainboxid,obj.childElements[childname]);
                break;
            case 'select':
                createSelect(childid,mainboxid,obj.childElements[childname]);
                logChildElementId(childid,j,mainboxid,childtype,obj); //存放子元素的id到模板的bufferbox_id对象中
                break;
            case 'input':
                createInput(childid,mainboxid,obj.childElements[childname]);
                logChildElementId(childid,j,mainboxid,childtype,obj);
                break;
            case 'button':
                createButton(childid,mainboxid,obj.childElements[childname]);
                logChildElementId(childid,j,mainboxid,childtype,obj);
                break;
        };
    };
};
function createLabel(parentid,obj){ //创建label类元素
    var newchild = document.createElement('label');
    var container = document.getElementById(parentid);
    newchild.innerHTML = obj.innerHTML  //设置元素的innerHTML,一般为文字
    container.appendChild(newchild);
    for ( attr in obj.attributes ){  //遍历赋值元素的属性
        newchild.setAttribute(attr,obj.attributes[attr]);
    };
};
function createSelect(childid,parentid,obj){
    var newchild = document.createElement('select');
    var container = document.getElementById(parentid);
    newchild.setAttribute("id", childid);
    container.appendChild(newchild);
    for ( attr in obj.attributes ){
        newchild.setAttribute(attr,obj.attributes[attr]);
    };
    for ( optname in obj.options ) { //select类元素遍历增加下拉框
        var getData = obj.options[optname];
        document.getElementById(childid).options.add(new Option(getData,optname));
    };
};
function createInput(childid,parentid,obj){
    var newchild = document.createElement('input');
    var container = document.getElementById(parentid);
    newchild.setAttribute("id", childid);
    newchild.innerHTML = obj.innerHTML
    container.appendChild(newchild);
    for ( attr in obj.attributes ){
        newchild.setAttribute(attr,obj.attributes[attr]);
    };
};
function createButton(childid,parentid,obj){
    var newchild = document.createElement('button');
    var container = document.getElementById(parentid);
    newchild.setAttribute("id", childid);
    newchild.setAttribute("value", parentid); //button类元素需增加value属性
    newchild.innerHTML = obj.innerHTML
    container.appendChild(newchild);
    for ( attr in obj.attributes ){
        newchild.setAttribute(attr,obj.attributes[attr]);
    };
};
function logChildElementId(childid,j,parentid,childtype,obj){ //将子元素的id存放到模板的bufferbox_id对象中
    obj.bufferbox_id[parentid].childElements[j] = {};
    obj.bufferbox_id[parentid].childElements[j].type = childtype;
    obj.bufferbox_id[parentid].childElements[j].id = childid;
};

function removeChildElement(elementid,templatename) {
    var childelement = document.getElementById(elementid);
    childelement.remove(); //删除div
    delete bufferbox_template[templatename].bufferbox_id[elementid]; //删除存放对应元素id的obj
    delete bufferbox_template[templatename].bufferbox_data[elementid]; //删除存放对应数据的obj
};
function getParentNodeId(childid) {
    var parentid = document.getElementById(childid).parentNode.id;
    return parentid;
};
function getObjectKeysCount(obj){ //获取一个obj内对象的数量
    var counts = Number(Object.keys(obj).length + 1);
    return counts;
}