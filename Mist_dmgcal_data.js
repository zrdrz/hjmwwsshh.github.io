//存放数据
//若要扩充weapon类型,armor类型或是ship类型都十分方便
//
//全局变量
var global = { 
    shiptype: "",
    weapontype: "",
    firepower: 0,
    fp_correction: 0,
    weaponefficiency: { //存放全局weapon效率系数
        vsLightArmor: 0.00,
        vsMediumArmor: 0.00,
        vsHeavyArmor: 0.00
    },
    equipmentefficiency: 0
};

//
const Dict_var_element_bind_weapon = { //存放html页面对应元素的id,与Dict_weapon_data[weapontype].efficiency绑定
    vsLightArmor: "WeaponvsLightArmor",
    vsMediumArmor: "WeaponvsMediumArmor",
    vsHeavyArmor: "WeaponvsHeavyArmor",
};
const Dict_barrels = [ 1,2,3 ]; //联装数
const Dict_weapon_data = { //weapon数据
    AP_ExBig: {
        name: "超大AP",  //显示名
        efficiency: {
            vsLightArmor: 0.35, //各项效率
            vsMediumArmor: 1.00,
            vsHeavyArmor: 0.75 
        }
    },
    AP_Big: {
        name: "大AP",
        efficiency: {
            vsLightArmor: 1.00,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 0.30
        }
    },
    AP_Medium: {
        name: "中AP",
        efficiency: {
            vsLightArmor: 0.70,
            vsMediumArmor: 0.50,
            vsHeavyArmor: 0.25
        }
    },
    AP_Small: {
        name: "小AP",
        efficiency: {
            vsLightArmor: 0.55,
            vsMediumArmor: 0.35,
            vsHeavyArmor: 0.25
        }
    },
    HE_ExBig: {
        name: "超大HE",
        efficiency: {
            vsLightArmor: 0.50,
            vsMediumArmor: 1.00,
            vsHeavyArmor: 0.50
        }
    },
    HE_Big: {
        name: "大HE",
        efficiency: {
            vsLightArmor: 1.00,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 0.40
        }
    },
    HE_Medium: {
        name: "中HE",
        efficiency: {
            vsLightArmor: 0.70,
            vsMediumArmor: 0.50,
            vsHeavyArmor: 0.25
        }
    },
    HE_Small: {
        name: "小HE",
        efficiency: {
            vsLightArmor: 0.55,
            vsMediumArmor: 0.35,
            vsHeavyArmor: 0.25
        }
    },
    Torpedo: {
        name: "舰载鱼雷",
        efficiency: {
            vsLightArmor: 0.40,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 1.50
        }
    },
    DiveBomber: {
        name: "舰爆",
        efficiency: {
            vsLightArmor: 0.75,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 0.75
        }
    },
    TorpedoBomber: {
        name: "舰攻",
        efficiency: {
            vsLightArmor: 0.40,
            vsMediumArmor: 0.75,
            vsHeavyArmor: 1.00
        }
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