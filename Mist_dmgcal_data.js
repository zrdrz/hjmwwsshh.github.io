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
    vsLightArmor: 0.00,
    vsMediumArmor: 0.00,
    vsHeavyArmor: 0.00,
    equipmentefficiency: 0,
    critdmg_base: 0,
    additional_crit: 0,
    overpene_dmg: 0,
    moderate_dmg: 0,
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
    }
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
    additional_crit: "additional_crit",
};
const Dict_var_element_bind_selectbox = {
    barrels: "CMB_barrels",
    shiptype: "CMB_ship_type",
    weapontype: "CMB_weapon_type"
};
//
const Dict_barrels = {
    1: "舰炮:单装/鱼雷管:3联",
    2: "舰炮:双联/鱼雷管:4联",
    3: "舰炮:三联/鱼雷管:5联",
};//联装数
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
        barrels: [ "2","3" ] //可用的联装数
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
        barrels: [ "2","3" ] 
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
        barrels: [ "1","2","3" ] 
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
        barrels: [ "1","2" ] 
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
        barrels: [ "2","3" ] 
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
        barrels: [ "2","3" ] 
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
        barrels: [ "1","2","3" ] 
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
        barrels: [ "1","2" ] 
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
        barrels: [ "1","2","3" ] 
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
        barrels: [ "3" ] 
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
        barrels: [ "3" ] 
    }
};
const Dict_shiptype_data = {  //ship数据
    dd: {
        name: "驱逐舰", //显示名
        can_use_weapon: [ "AP_Small","HE_Small","Torpedo" ],  //可用weapon
        weapon_type_efficiency: { //使用各项weapon的效率
            AP_Small: 1.25,
            HE_Small: 1.25,
            Torpedo: 0.20
        }
    },
    cl: {
        name: "轻巡",
        can_use_weapon: [ "AP_Medium","HE_Medium","AP_Small","HE_Small","Torpedo" ],
        weapon_type_efficiency: {
            AP_Medium: 1.25,
            HE_Medium: 1.25,
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
    cal_singledmgoverpene: "dmgcal_singledmg_overpene()",
    cal_singledmgmoderate: "dmgcal_singledmg_moderate()",
    cal_singledmg: "dmgcal_singledmg()",
    cal_singledmgcrit: "dmgcal_singdmg_crit()",
    printline: "printSeparateline()",
    cal_dpm: "dmgcal_dpm()",
    
};
function printSeparateline() {
    var str = "------" + '\n'
    return str;
};
function dmgcal_info() {
    var str = "舰船类型:" + Dict_shiptype_data[global.shiptype].name + '\t' + "武器类型:" + Dict_weapon_data[global.weapontype].name + '\n' + "面板总火力:" + global.firepower + '\t' + "火力补正:" + global.fp_correction + '\n' + "装填时间:" + global.reload_time + "s" + '\t' + "联装数:" + global.barrels + '\n'; 
    str = str + '-------------------------------------------------------' + '\n';
    str = str + '\t\t' + "vs轻甲" + '\t\t' + "vs中甲" + '\t\t' + "vs重甲" + '\n';
    return str;
};
function dmgcal_singledmg_overpene(){
    var str = "单发过穿" + '\t';
    for ( varname in result.singledmg_overpene ){ 
        result.singledmg_overpene[varname] = Math.ceil(global.firepower * global.fp_correction * global[varname] * global.equipmentefficiency * global.overpene_dmg * global.reload_time / global.barrels / 5 / 100);
        str = str + result.singledmg_overpene[varname] + '\t\t';
    };
    str = str + '\n';
    return str;
};
function dmgcal_singledmg_moderate(){
    var str = "单发半伤" + '\t';
    for ( varname in result.singledmg_moderate ){ 
        result.singledmg_moderate[varname] = Math.ceil(global.firepower * global.fp_correction * global[varname] * global.equipmentefficiency * global.moderate_dmg * global.reload_time / global.barrels / 5 / 100);
        str = str + result.singledmg_moderate[varname] + '\t\t';
    };
    str = str + '\n';
    return str;
};
function dmgcal_singledmg(){
    var str = "单发标伤" + '\t';
    for ( varname in result.singledmg ){ //varname即为vsLightArmor,vsMediumArmor和vsHeavyArmor三个效率系数
        result.singledmg[varname] = Math.ceil(global.firepower * global.fp_correction * global[varname] * global.equipmentefficiency * global.reload_time / global.barrels / 5 / 100);
        str = str + result.singledmg[varname] + '\t\t';
    };
    str = str + '\n';
    return str;
};
function dmgcal_singdmg_crit(){
    var str = "单发暴伤" + '\t';
    for ( varname in result.singledmgcrit ){
        result.singledmgcrit[varname] = Math.ceil(global.firepower * global.fp_correction * global[varname] * global.equipmentefficiency * global.reload_time * ( global.critdmg_base * 100 + Number(global.additional_crit)) / global.barrels / 5 / 100 / 100);
        str = str + result.singledmgcrit[varname] + '\t\t';
    };
    str = str + '\n';
    return str;
};
function dmgcal_dpm() {
    var str = "DPM标伤" + '\t\t' ;
    for ( varname in result.dpm ){
        result.dpm[varname] = Math.ceil(global.firepower * global.fp_correction * global[varname] * global.equipmentefficiency * 12 / 100);
        str = str + result.dpm[varname] + '\t\t'
    };
    str = str + '\n';
    return str;
};