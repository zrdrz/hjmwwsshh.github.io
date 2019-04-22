var searchtype = {
    id: "序号",
    name: "名字",
};
var searchcache = {
    //method1: {
    //    shipdata[id1].method1 : { id : shipdata[id1].id},
    //    shipdata[id2].method1 : { id : shipdata[id2].id},
    //}
    //method2: {
    //    shipdata[id1].method2 : { id : shipdata[id1].id},
    //    shipdata[id2].method2 : { id : shipdata[id2].id},
    //}
};
////////////////////////////////////////////////
var consumptionItemList = {
    reinforcementGroups : { //$consumptionID : {} },
    },
    activeSkills : {},
    passiveSkills : {},
    common: {},
};
////默认值开始
consumptionItemList['reinforcementGroups']['0'] = { //强化组0值
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
};
consumptionItemList['activeSkills']['0'] = { //主动技0值
    0:{ //等级0
        1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //同位结晶
    },
    1:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    2:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    3:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    4:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    5:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    6:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    7:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    8:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    9:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    10:{ 1:{ rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
}
consumptionItemList['passiveSkills']['0'] = { //被动技0值
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
    9:{ //等级9
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
    10:{ //等级10
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //驱逐回路
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //巡洋回路
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //战列回路
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //航母回路
    },
};
consumptionItemList['common']['0'] = { //NP0值
    0: {
        1: { normal: 0,}, //NP
    },
    1: { 1: { normal: 0,}, },
    2: { 1: { normal: 0,}, },
    3: { 1: { normal: 0,}, },
    4: { 1: { normal: 0,}, },
    5: { 1: { normal: 0,}, },
    6: { 1: { normal: 0,}, },
    7: { 1: { normal: 0,}, },
    8: { 1: { normal: 0,}, },
    9: { 1: { normal: 0,}, },
    10: { 1: { normal: 0,}, },
};
////默认值结束
////强化组消耗
//元件消耗
consumptionItemList['reinforcementGroups']['rein_health_star5'] = { //五星船耐久强化消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //防御元件 
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //防御元件 
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 40, }, //防御元件 
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 70, }, //防御元件 
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 105, }, //防御元件 
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 145, }, //防御元件 
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 145, }, //防御元件 
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 15, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 15, rankB: 65, rankC: 120, rankD: 145, }, //防御元件 
    },
    9:{ //等级9
        4: { rankS: 0, rankA: 15, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 15, rankA: 30, rankB: 85, rankC: 120, rankD: 145, }, //防御元件 
    },
    10:{ //等级10
        4: { rankS: 0, rankA: 35, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 30, rankA: 30, rankB: 105, rankC: 120, rankD: 145, }, //防御元件 
    },
};
//NP消耗
consumptionItemList['common']['reinGroup_star5'] = {//五星船强化组NP消耗量
    0: { 1: { normal: 0,}, },
    1: { 1: { normal: 80,}, },
    2: { 1: { normal: 160,}, },
    3: { 1: { normal: 320,}, },
    4: { 1: { normal: 560,}, },
    5: { 1: { normal: 960,}, },
    6: { 1: { normal: 1600,}, },
    7: { 1: { normal: 2640,}, },
    8: { 1: { normal: 4320,}, },
    9: { 1: { normal: 7040,}, },
    10: { 1: { normal: 11440,}, },
};
consumptionItemList['common']['rein_health_star5'] = consumptionItemList['common']['reinGroup_star5'] //五星船耐久强化消耗NP
////强化组消耗

////主动技能消耗
//结晶消耗
consumptionItemList['activeSkills']['act_star5'] = { //五星船主动技能消耗
    0:{ 1:{ rankS: 0, }, },
    1:{ 1:{ rankS: 1, }, },
    2:{ 1:{ rankS: 2, }, },
    3:{ 1:{ rankS: 4, }, },
    4:{ 1:{ rankS: 6, }, },
    5:{ 1:{ rankS: 9, }, },
    6:{ 1:{ rankS: 12, }, },
    7:{ 1:{ rankS: 16, }, },
    8:{ 1:{ rankS: 20, }, },
    9:{ 1:{ rankS: 25, }, },
    10:{ 1:{ rankS: 30, }, },
};
consumptionItemList['activeSkills']['act_star4'] = { //四星船主动技能消耗
    0:{ 1:{ rankA: 0, }, },
    1:{ 1:{ rankA: 1, }, },
    2:{ 1:{ rankA: 2, }, },
    3:{ 1:{ rankA: 4, }, },
    4:{ 1:{ rankA: 6, }, },
    5:{ 1:{ rankA: 9, }, },
    6:{ 1:{ rankA: 12, }, },
    7:{ 1:{ rankA: 16, }, },
    8:{ 1:{ rankA: 20, }, },
    9:{ 1:{ rankA: 25, }, },
    10:{ 1:{ rankA: 30, }, },
};
consumptionItemList['activeSkills']['act_star3'] = { //三星船主动技能消耗
    0:{ 1:{ rankB: 0, }, },
    1:{ 1:{ rankB: 1, }, },
    2:{ 1:{ rankB: 2, }, },
    3:{ 1:{ rankB: 4, }, },
    4:{ 1:{ rankB: 6, }, },
    5:{ 1:{ rankB: 9, }, },
    6:{ 1:{ rankB: 12, }, },
    7:{ 1:{ rankB: 16, }, },
    8:{ 1:{ rankB: 20, }, },
    9:{ 1:{ rankB: 25, }, },
    10:{ 1:{ rankB: 30, }, },
};
consumptionItemList['activeSkills']['act_star2'] = { //二星船主动技能消耗
    0:{ 1:{ rankC: 0, }, },
    1:{ 1:{ rankC: 1, }, },
    2:{ 1:{ rankC: 2, }, },
    3:{ 1:{ rankC: 4, }, },
    4:{ 1:{ rankC: 6, }, },
    5:{ 1:{ rankC: 9, }, },
    6:{ 1:{ rankC: 12, }, },
    7:{ 1:{ rankC: 16, }, },
    8:{ 1:{ rankC: 20, }, },
    9:{ 1:{ rankC: 25, }, },
    10:{ 1:{ rankC: 30, }, },
};
//NP消耗
consumptionItemList['common']['act_star5'] = consumptionItemList['common']['0'];
consumptionItemList['common']['act_star4'] = consumptionItemList['common']['0'];
consumptionItemList['common']['act_star3'] = consumptionItemList['common']['0'];
consumptionItemList['common']['act_star2'] = consumptionItemList['common']['0'];
////主动技能消耗
////被动技能消耗
////////////////////////////////////////////////
var shipdata = {};
shipdata[51] = {
        id: 51,
        name: '法戈',
        shiptypeid: 2,
        shiptypename: '轻巡',
        shipstars: 5,
        reinforcementGroupNum: 6,
        reinforcementGroups: {
            1: { name: '索敌', initvalue: 11, consumptionID: '0',},
            2: { name: '对空', initvalue: 26, consumptionID: '0',},
            3: { name: '闪避', initvalue: 10, consumptionID: '0',},
            4: { name: '炮击', initvalue: 9, consumptionID: '0',},
            5: { name: '攻速', initvalue: 10, consumptionID: '0',},
            6: { name: '耐久', initvalue: 67, consumptionID: 'rein_health_star5',},
        },
        activeSkills: {
            1: { name: '乱射', consumptionID: 'act_star5', },
        },
        passiveSkills: {
            1: { name: '小巧干练', consumptionID: '0', },
            2: { name: '财政恶魔', consumptionID: '0', },
        },
};
shipdata[194] = {
        id: 194,
        name: '大凤',
        shiptypeid: 6,
        shiptypename: '航母',
        shipstars: 5,
        reinforcementGroupNum: 6,
        reinforcementGroups: {
            1: { name: '耐久', initvalue: 71, consumptionID: 'rein_health_star5',},
            2: { name: '命中', initvalue: 10, consumptionID: '0',},
            3: { name: '闪避', initvalue: 10, consumptionID: '0',},
            4: { name: '舰攻', initvalue: 25, consumptionID: '0',},
            5: { name: '攻速', initvalue: 10, consumptionID: '0',},
            6: { name: '韧性', initvalue: 10, consumptionID: '0',},
        },
        activeSkills: {
            1: { name: '远距集束雷击', consumptionID: 'act_star5',},
        },
        passiveSkills: {
            1: { name: '海上补给', consumptionID: '0',},
            2: { name: '海上要塞', consumptionID: '0',},
        },
};