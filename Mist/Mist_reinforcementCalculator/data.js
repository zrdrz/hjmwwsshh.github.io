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
//对照关系:
//    reinforcementGroups:{ 1: '火力元件', 2: '索敌元件', 3: '动力元件', 4: '扩张元件', 5: '防御元件', 6: '装填元件', },
//    activeSkills: { 1: '结晶', },
//    passiveSkills: { 1: '驱逐回路', 2: '巡洋回路', 3: '战列回路', 4: '航母回路', },
//    common: { 1: 'N.P', },
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

////NP消耗
consumptionItemList['common']['Common_NP_star5'] = {//五星船强化组/被动技能NP消耗量
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
}; //为累加值
consumptionItemList['common']['Common_NP_star4'] = {//四星船强化组/被动技能NP消耗量
    0: { 1: { normal: 0,}, },
    1: { 1: { normal: 40,}, },
    2: { 1: { normal: 80,}, },
    3: { 1: { normal: 160,}, },
    4: { 1: { normal: 280,}, },
    5: { 1: { normal: 480,}, },
    6: { 1: { normal: 800,}, },
    7: { 1: { normal: 1320,}, },
    8: { 1: { normal: 2160,}, },
    9: { 1: { normal: 3520,}, },
    10: { 1: { normal: 5720,}, },
};
consumptionItemList['common']['Common_NP_star3'] = {//三星船强化组/被动技能NP消耗量
    0: { 1: { normal: 0,}, },
    1: { 1: { normal: 20,}, },
    2: { 1: { normal: 40,}, },
    3: { 1: { normal: 80,}, },
    4: { 1: { normal: 140,}, },
    5: { 1: { normal: 240,}, },
    6: { 1: { normal: 400,}, },
    7: { 1: { normal: 660,}, },
    8: { 1: { normal: 1080,}, },
    9: { 1: { normal: 1760,}, },
    10: { 1: { normal: 2860,}, },
};
consumptionItemList['common']['Common_NP_star2'] = {//二星船强化组/被动技能NP消耗量
    0: { 1: { normal: 0,}, },
    1: { 1: { normal: 10,}, },
    2: { 1: { normal: 20,}, },
    3: { 1: { normal: 40,}, },
    4: { 1: { normal: 70,}, },
    5: { 1: { normal: 120,}, },
    6: { 1: { normal: 200,}, },
    7: { 1: { normal: 330,}, },
    8: { 1: { normal: 540,}, },
    9: { 1: { normal: 880,}, },
    10: { 1: { normal: 1430,}, },
};
////NP消耗

////强化组消耗
//元件消耗
consumptionItemList['reinforcementGroups']['rein_health_star5'] = { //五星船耐久强化消耗元件
    0:{ //等级0
        4: { rankA: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankA: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //防御元件 
    },
    2:{ //等级2
        4: { rankA: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //防御元件 
    },
    3:{ //等级3
        4: { rankA: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 40, }, //防御元件 
    },
    4:{ //等级4
        4: { rankA: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 70, }, //防御元件 
    },
    5:{ //等级5
        4: { rankA: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 105, }, //防御元件 
    },
    6:{ //等级6
        4: { rankA: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 145, }, //防御元件 
    },
    7:{ //等级7
        4: { rankA: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 145, }, //防御元件 
    },
    8:{ //等级8
        4: {rankA: 15, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 15, rankB: 65, rankC: 120, rankD: 145, }, //防御元件 
    },
    9:{ //等级9
        4: { rankA: 15, rankD: 20, }, //扩张元件
        5: { rankS: 15, rankA: 30, rankB: 85, rankC: 120, rankD: 145, }, //防御元件 
    },
    10:{ //等级10
        4: { rankA: 35, rankD: 20, }, //扩张元件
        5: { rankS: 30, rankA: 30, rankB: 105, rankC: 120, rankD: 145, }, //防御元件 
    },
};
consumptionItemList['reinforcementGroups']['rein_health_star4'] = { //四星船耐久强化消耗元件
    0:{ //等级0
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //防御元件 
    },
    2:{ //等级2
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //防御元件 
    },
    3:{ //等级3
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, //防御元件 
    },
    4:{ //等级4
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, //防御元件 
    },
    5:{ //等级5
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 10, rankC: 35, rankD: 100, }, //防御元件 
    },
    6:{ //等级6
        4: { rankC: 15, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 20, rankC: 35, rankD: 135, }, //防御元件 
    },
    7:{ //等级7
        4: { rankC: 15, }, //扩张元件
        5: { rankS: 0, rankA: 10, rankB: 30, rankC: 55, rankD: 135, }, //防御元件 
    },
    8:{ //等级8
        4: { rankC: 15, }, //扩张元件
        5: { rankS: 0, rankA: 20, rankB: 45, rankC: 75, rankD: 135, }, //防御元件 
    },
    9:{ //等级9
        4: { rankC: 15, }, //扩张元件
        5: { rankS: 10, rankA: 30, rankB: 65, rankC: 75, rankD: 135, }, //防御元件 
    },
    10:{ //等级10
        4: { rankC: 15, }, //扩张元件
        5: { rankS: 20, rankA: 45, rankB: 75, rankC: 75, rankD: 135, }, //防御元件 
    },
};
consumptionItemList['reinforcementGroups']['rein_health_star3'] = { //三星船耐久强化消耗元件
    0:{ //等级0
        4: { rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //防御元件 
    },
    2:{ //等级2
        4: { rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //防御元件 
    },
    3:{ //等级3
        4: { rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, //防御元件 
    },
    4:{ //等级4
        4: { rankC: 5, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 50, }, //防御元件 
    },
    5:{ //等级5
        4: { rankC: 15, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 5, rankC: 5, rankD: 75, }, //防御元件 
    },
    6:{ //等级6
        4: { rankC: 15, rankD: 30, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 10, rankC: 15, rankD: 75, }, //防御元件 
    },
    7:{ //等级7
        4: { rankC: 15, rankD: 30, }, //扩张元件
        5: { rankS: 0, rankA: 5, rankB: 15, rankC: 30, rankD: 75, }, //防御元件 
    },
    8:{ //等级8
        4: { rankC: 15, rankD: 30, }, //扩张元件
        5: { rankS: 0, rankA: 10, rankB: 25, rankC: 45, rankD: 75, }, //防御元件 
    },
    9:{ //等级9
        4: { rankC: 15, rankD: 30, }, //扩张元件
        5: { rankS: 5, rankA: 15, rankB: 35, rankC: 45, rankD: 75, }, //防御元件 
    },
    10:{ //等级10
        4: { rankC: 15, rankD: 30, }, //扩张元件
        5: { rankS: 10, rankA: 25, rankB: 45, rankC: 45, rankD: 75, }, //防御元件 
    },
};
consumptionItemList['reinforcementGroups']['rein_health_star2'] = { //二星船耐久强化消耗元件
    0:{ //等级0
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件 
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //防御元件 
    },
    2:{ //等级2
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, //防御元件 
    },
    3:{ //等级3
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, //防御元件 
    },
    4:{ //等级4
        4: { rankC: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, //防御元件 
    },
    5:{ //等级5
        4: { rankC: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 1, rankC: 2, rankD: 51, }, //防御元件 
    },
    6:{ //等级6
        4: { rankC: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 2, rankC: 7, rankD: 76, }, //防御元件 
    },
    7:{ //等级7
        4: { rankC: 5, }, //扩张元件
        5: { rankS: 0, rankA: 1, rankB: 3, rankC: 17, rankD: 76, }, //防御元件 
    },
    8:{ //等级8
        4: { rankC: 5, }, //扩张元件
        5: { rankS: 0, rankA: 2, rankB: 8, rankC: 27, rankD: 76, }, //防御元件 
    },
    9:{ //等级9
        4: { rankC: 5, }, //扩张元件
        5: { rankS: 1, rankA: 3, rankB: 13, rankC: 27, rankD: 76, }, //防御元件 
    },
    10:{ //等级10
        4: { rankC: 5, }, //扩张元件
        5: { rankS: 2, rankA: 8, rankB: 18, rankC: 27, rankD: 76, }, //防御元件 
    },
};
consumptionItemList['reinforcementGroups']['rein_gunfirepower_star5'] = { //五星船炮击舰爆强化消耗元件
    0:{ //等级0
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 0, rankD: 20, }, //装填元件
    },
    3:{ //等级3
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 40, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 15, rankD: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 0, rankD: 20, }, //装填元件
    },
    4:{ //等级4
        1: { rankA: 0, rankB: 0, rankC: 15, rankD: 40, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 15, rankD: 30, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 0, rankD: 20, }, //装填元件
    },
    5:{ //等级5
        1: { rankA: 0, rankB: 0, rankC: 35, rankD: 75, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 15, rankD: 30, }, //扩张元件
        6: { rankS: 0, rankB: 15, rankC: 0, rankD: 20, }, //装填元件
    },
    6:{ //等级6
        1: { rankA: 0, rankB: 0, rankC: 35, rankD: 115, }, //火力元件
        4: { rankS: 0, rankB: 15, rankC: 15, rankD: 30, }, //扩张元件
        6: { rankS: 0, rankB: 15, rankC: 20, rankD: 20, }, //装填元件
    },
    7:{ //等级7
        1: { rankA: 15, rankB: 15, rankC: 35, rankD: 115, }, //火力元件
        4: { rankS: 0, rankB: 15, rankC: 40, rankD: 30, }, //扩张元件
        6: { rankS: 0, rankB: 15, rankC: 20, rankD: 20, }, //装填元件
    },
    8:{ //等级8
        1: { rankA: 30, rankB: 35, rankC: 35, rankD: 115, }, //火力元件
        4: { rankS: 0, rankB: 15, rankC: 65, rankD: 30, }, //扩张元件
        6: { rankS: 0, rankB: 15, rankC: 20, rankD: 20, }, //装填元件
    },
    9:{ //等级9
        1: { rankA: 45, rankB: 35, rankC: 35, rankD: 115, }, //火力元件
        4: { rankS: 0, rankB: 15, rankC: 65, rankD: 30, }, //扩张元件
        6: { rankS: 15, rankB: 35, rankC: 20, rankD: 20, }, //装填元件
    },
    10:{ //等级10
        1: { rankA: 65, rankB: 35, rankC: 35, rankD: 115, }, //火力元件
        4: { rankS: 15, rankB: 35, rankC: 65, rankD: 30, }, //扩张元件
        6: { rankS: 15, rankB: 35, rankC: 20, rankD: 20, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_gunfirepower_star4'] = { //四星船炮击舰爆强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankA: 0, rankC: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankA: 0, rankC: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 15, }, //扩张元件
        6: { rankA: 0, rankC: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 10, rankD: 35, }, //扩张元件
        6: { rankA: 0, rankC: 0, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 10, rankD: 35, }, //扩张元件
        6: { rankA: 0, rankC: 10, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //火力元件
        4: { rankS: 0, rankB: 10, rankC: 25, rankD: 65, }, //扩张元件
        6: { rankA: 0, rankC: 10, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 10, rankC: 0, rankD: 70, }, //火力元件
        4: { rankS: 0, rankB: 10, rankC: 40, rankD: 65, }, //扩张元件
        6: { rankA: 0, rankC: 10, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 10, rankB: 20, rankC: 0, rankD: 70, }, //火力元件
        4: { rankS: 0, rankB: 10, rankC: 40, rankD: 65, }, //扩张元件
        6: { rankA: 0, rankC: 30, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 10, rankB: 35, rankC: 20, rankD: 70, }, //火力元件
        4: { rankS: 0, rankB: 10, rankC: 40, rankD: 65, }, //扩张元件
        6: { rankA: 10, rankC: 30, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 10, rankA: 20, rankB: 50, rankC: 20, rankD: 70, }, //火力元件
        4: { rankS: 0, rankB: 10, rankC: 40, rankD: 65, }, //扩张元件
        6: { rankA: 10, rankC: 30, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 10, rankA: 35, rankB: 65, rankC: 20, rankD: 70, }, //火力元件
        4: { rankS: 10, rankB: 10, rankC: 40, rankD: 65, }, //扩张元件
        6: { rankA: 10, rankC: 30, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_gunfirepower_star3'] = { //三星船炮击舰爆强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, }, //扩张元件
        6: { rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, }, //扩张元件
        6: { rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, }, //扩张元件
        6: { rankB: 0, rankC: 0, rankD: 10, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, }, //扩张元件
        6: { rankB: 0, rankC: 5, rankD: 10, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 40, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, }, //扩张元件
        6: { rankB: 0, rankC: 5, rankD: 10, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 5, rankC: 15, rankD: 65, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, }, //扩张元件
        6: { rankB: 0, rankC: 5, rankD: 10, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 10, rankC: 25, rankD: 95, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, }, //扩张元件
        6: { rankB: 0, rankC: 5, rankD: 10, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 5, rankB: 15, rankC: 25, rankD: 95, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, }, //扩张元件
        6: { rankB: 0, rankC: 20, rankD: 10, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 10, rankB: 15, rankC: 40, rankD: 95, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, }, //扩张元件
        6: { rankB: 10, rankC: 20, rankD: 10, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 0, rankA: 15, rankB: 15, rankC: 40, rankD: 95, }, //火力元件
        4: { rankS: 5, rankA: 0, rankB: 10, }, //扩张元件
        6: { rankB: 10, rankC: 20, rankD: 10, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 5, rankA: 15, rankB: 25, rankC: 40, rankD: 95, }, //火力元件
        4: { rankS: 5, rankA: 10, rankB: 10, }, //扩张元件
        6: { rankB: 10, rankC: 20, rankD: 10, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_gunfirepower_star2'] = { //二星船炮击舰爆强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 15, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 15, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 36, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 15, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 5, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 1, rankC: 6, rankD: 61, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 1, rankC: 1, rankD: 15, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 5, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 0, rankB: 1, rankC: 16, rankD: 61, }, //火力元件
        4: { rankS: 0, rankA: 1, rankB: 1, rankC: 1, rankD: 15, }, //扩张元件
        6: { rankA: 0, rankB: 1, rankC: 5, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 0, rankB: 1, rankC: 16, rankD: 61, }, //火力元件
        4: { rankS: 0, rankA: 1, rankB: 6, rankC: 11, rankD: 15, }, //扩张元件
        6: { rankA: 1, rankB: 1, rankC: 5, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 1, rankA: 0, rankB: 6, rankC: 16, rankD: 61, }, //火力元件
        4: { rankS: 0, rankA: 2, rankB: 6, rankC: 11, rankD: 15, }, //扩张元件
        6: { rankA: 1, rankB: 1, rankC: 5, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 1, rankA: 5, rankB: 6, rankC: 16, rankD: 61, }, //火力元件
        4: { rankS: 1, rankA: 2, rankB: 11, rankC: 11, rankD: 15, }, //扩张元件
        6: { rankA: 1, rankB: 1, rankC: 5, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_torpedofirepower_star5'] = { //五星船鱼雷舰攻强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //火力元件
        4: { rankS: 0, rankA: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //火力元件
        4: { rankS: 0, rankA: 0, rankC: 0, rankD: 20, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 40, }, //火力元件
        4: { rankS: 0, rankA: 0, rankC: 0, rankD: 20, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 15, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 70, }, //火力元件
        4: { rankS: 0, rankA: 0, rankC: 15, rankD: 20, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 15, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 105, }, //火力元件
        4: { rankS: 0, rankA: 0, rankC: 35, rankD: 20, }, //扩张元件
        6: { rankA: 0, rankB: 15, rankC: 15, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 15, rankC: 0, rankD: 145, }, //火力元件
        4: { rankS: 0, rankA: 0, rankC: 35, rankD: 20, }, //扩张元件
        6: { rankA: 0, rankB: 15, rankC: 35, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 0, rankB: 30, rankC: 0, rankD: 145, }, //火力元件
        4: { rankS: 0, rankA: 0, rankC: 60, rankD: 20, }, //扩张元件
        6: { rankA: 15, rankB: 15, rankC: 35, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 0, rankB: 50, rankC: 25, rankD: 145, }, //火力元件
        4: { rankS: 0, rankA: 15, rankC: 60, rankD: 20, }, //扩张元件
        6: { rankA: 15, rankB: 15, rankC: 35, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 15, rankA: 15, rankB: 70, rankC: 25, rankD: 145, }, //火力元件
        4: { rankS: 0, rankA: 15, rankC: 60, rankD: 20, }, //扩张元件
        6: { rankA: 15, rankB: 15, rankC: 35, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 15, rankA: 15, rankB: 90, rankC: 25, rankD: 145, }, //火力元件
        4: { rankS: 15, rankA: 15, rankC: 60, rankD: 20, }, //扩张元件
        6: { rankA: 35, rankB: 15, rankC: 35, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_torpedofirepower_star4'] = { //四星船鱼雷舰攻强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankS: 0, rankA: 0, rankB: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankB: 0, rankC: 0, rankD: 10, }, //火力元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankS: 0, rankA: 0, rankB: 0, rankD: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankB: 0, rankC: 0, rankD: 25, }, //火力元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankS: 0, rankA: 0, rankB: 0, rankD: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankB: 0, rankC: 0, rankD: 45, }, //火力元件
        4: { rankA: 0, rankB: 0, rankC: 10, }, //扩张元件
        6: { rankS: 0, rankA: 0, rankB: 0, rankD: 0, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankB: 0, rankC: 10, rankD: 70, }, //火力元件
        4: { rankA: 0, rankB: 0, rankC: 10, }, //扩张元件
        6: { rankS: 0, rankA: 0, rankB: 0, rankD: 0, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankB: 0, rankC: 25, rankD: 70, }, //火力元件
        4: { rankA: 0, rankB: 0, rankC: 10, }, //扩张元件
        6: { rankS: 0, rankA: 0, rankB: 10, rankD: 30, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankB: 10, rankC: 40, rankD: 70, }, //火力元件
        4: { rankA: 0, rankB: 0, rankC: 10, }, //扩张元件
        6: { rankS: 0, rankA: 0, rankB: 10, rankD: 65, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankB: 20, rankC: 60, rankD: 70, }, //火力元件
        4: { rankA: 0, rankB: 0, rankC: 10, }, //扩张元件
        6: { rankS: 0, rankA: 10, rankB: 10, rankD: 65, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankB: 20, rankC: 80, rankD: 70, }, //火力元件
        4: { rankA: 10, rankB: 15, rankC: 10, }, //扩张元件
        6: { rankS: 0, rankA: 10, rankB: 10, rankD: 65, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 10, rankB: 20, rankC: 80, rankD: 70, }, //火力元件
        4: { rankA: 10, rankB: 15, rankC: 10, }, //扩张元件
        6: { rankS: 0, rankA: 20, rankB: 25, rankD: 65, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 10, rankB: 35, rankC: 80, rankD: 70, }, //火力元件
        4: { rankA: 10, rankB: 15, rankC: 10, }, //扩张元件
        6: { rankS: 10, rankA: 35, rankB: 25, rankD: 65, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_torpedofirepower_star3'] = { //三星船鱼雷舰攻强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankB: 0, rankC: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //火力元件
        4: { rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankB: 0, rankC: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //火力元件
        4: { rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankB: 0, rankC: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, //火力元件
        4: { rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        6: { rankB: 0, rankC: 0, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 30, }, //火力元件
        4: { rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        6: { rankB: 0, rankC: 0, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 55, }, //火力元件
        4: { rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        6: { rankB: 0, rankC: 0, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 5, rankC: 30, rankD: 85, }, //火力元件
        4: { rankB: 5, rankC: 0, rankD: 20, }, //扩张元件
        6: { rankB: 0, rankC: 0, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 5, rankB: 10, rankC: 30, rankD: 85, }, //火力元件
        4: { rankB: 5, rankC: 15, rankD: 20, }, //扩张元件
        6: { rankB: 0, rankC: 0, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 10, rankB: 20, rankC: 30, rankD: 85, }, //火力元件
        4: { rankB: 5, rankC: 15, rankD: 20, }, //扩张元件
        6: { rankB: 0, rankC: 15, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 5, rankA: 15, rankB: 20, rankC: 30, rankD: 85, }, //火力元件
        4: { rankB: 5, rankC: 15, rankD: 20, }, //扩张元件
        6: { rankB: 10, rankC: 15, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 10, rankA: 25, rankB: 20, rankC: 30, rankD: 85, }, //火力元件
        4: { rankB: 15, rankC: 15, rankD: 20, }, //扩张元件
        6: { rankB: 10, rankC: 15, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_torpedofirepower_star2'] = { //二星船鱼雷舰攻强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankB: 0, rankD: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankB: 0, rankD: 1, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //火力元件
        4: { rankB: 0, rankD: 1, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 15, }, //火力元件
        4: { rankB: 0, rankD: 1, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 30, }, //火力元件
        4: { rankB: 0, rankD: 1, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 1, rankC: 7, rankD: 50, }, //火力元件
        4: { rankB: 0, rankD: 1, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 2, rankC: 12, rankD: 50, }, //火力元件
        4: { rankB: 0, rankD: 26, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 0, rankB: 2, rankC: 22, rankD: 50, }, //火力元件
        4: { rankB: 0, rankD: 26, }, //扩张元件
        6: { rankA: 1, rankB: 1, rankC: 0, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 1, rankB: 2, rankC: 22, rankD: 50, }, //火力元件
        4: { rankB: 5, rankD: 26, }, //扩张元件
        6: { rankA: 1, rankB: 1, rankC: 10, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 1, rankA: 2, rankB: 7, rankC: 22, rankD: 50, }, //火力元件
        4: { rankB: 5, rankD: 26, }, //扩张元件
        6: { rankA: 1, rankB: 1, rankC: 10, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 2, rankA: 2, rankB: 7, rankC: 22, rankD: 50, }, //火力元件
        4: { rankB: 10, rankD: 26, }, //扩张元件
        6: { rankA: 6, rankB: 1, rankC: 10, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_aa_star5'] = { //五星船对空强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        1: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    3:{ //等级3
        1: { rankS: 0, rankB: 0, rankC: 15, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 40, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    4:{ //等级4
        1: { rankS: 0, rankB: 0, rankC: 30, rankD: 30, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 40, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    5:{ //等级5
        1: { rankS: 0, rankB: 15, rankC: 50, rankD: 30, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 75, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    6:{ //等级6
        1: { rankS: 0, rankB: 30, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 75, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 20, rankD: 20, }, //防御元件
    },
    7:{ //等级7
        1: { rankS: 0, rankB: 45, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 0, rankA: 15, rankB: 0, rankC: 0, rankD: 75, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 45, rankD: 20, }, //防御元件
    },
    8:{ //等级8
        1: { rankS: 0, rankB: 45, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 0, rankA: 15, rankB: 0, rankC: 25, rankD: 75, }, //扩张元件
        5: { rankA: 15, rankB: 20, rankC: 45, rankD: 20, }, //防御元件
    },
    9:{ //等级9
        1: { rankS: 15, rankB: 65, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 0, rankA: 15, rankB: 0, rankC: 25, rankD: 75, }, //扩张元件
        5: { rankA: 30, rankB: 20, rankC: 45, rankD: 20, }, //防御元件
    },
    10:{ //等级10
        1: { rankS: 15, rankB: 65, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 15, rankA: 15, rankB: 20, rankC: 25, rankD: 75, }, //扩张元件
        5: { rankA: 50, rankB: 20, rankC: 45, rankD: 20, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_aa_star4'] = { //四星船对空强化消耗元件
    0:{ //等级0
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    3:{ //等级3
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    4:{ //等级4
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 50, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 10, rankD: 20, }, //防御元件
    },
    5:{ //等级5
        1: { rankA: 0, rankB: 10, rankC: 15, rankD: 50, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 30, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 10, rankD: 20, }, //防御元件
    },
    6:{ //等级6
        1: { rankA: 0, rankB: 10, rankC: 30, rankD: 50, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 65, }, //扩张元件
        5: { rankA: 0, rankB: 10, rankC: 10, rankD: 20, }, //防御元件
    },
    7:{ //等级7
        1: { rankA: 0, rankB: 10, rankC: 30, rankD: 50, }, //火力元件
        4: { rankS: 0, rankA: 10, rankB: 10, rankC: 10, rankD: 65, }, //扩张元件
        5: { rankA: 0, rankB: 10, rankC: 30, rankD: 20, }, //防御元件
    },
    8:{ //等级8
        1: { rankA: 0, rankB: 10, rankC: 30, rankD: 50, }, //火力元件
        4: { rankS: 0, rankA: 10, rankB: 10, rankC: 30, rankD: 65, }, //扩张元件
        5: { rankA: 10, rankB: 25, rankC: 30, rankD: 20, }, //防御元件
    },
    9:{ //等级9
        1: { rankA: 10, rankB: 25, rankC: 30, rankD: 50, }, //火力元件
        4: { rankS: 10, rankA: 10, rankB: 10, rankC: 30, rankD: 65, }, //扩张元件
        5: { rankA: 10, rankB: 25, rankC: 30, rankD: 20, }, //防御元件
    },
    10:{ //等级10
        1: { rankA: 25, rankB: 25, rankC: 30, rankD: 50, }, //火力元件
        4: { rankS: 20, rankA: 10, rankB: 25, rankC: 30, rankD: 65, }, //扩张元件
        5: { rankA: 10, rankB: 25, rankC: 30, rankD: 20, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_aa_star3'] = { //三星船对空强化消耗元件
    0:{ //等级0
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //防御元件
    },
    2:{ //等级2
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankD: 10, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //防御元件
    },
    3:{ //等级3
        1: { rankA: 0, rankB: 0, rankC: 5, rankD: 20, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankD: 10, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //防御元件
    },
    4:{ //等级4
        1: { rankA: 0, rankB: 0, rankC: 10, rankD: 40, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankD: 10, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //防御元件
    },
    5:{ //等级5
        1: { rankA: 0, rankB: 5, rankC: 10, rankD: 65, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankD: 10, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, }, //防御元件
    },
    6:{ //等级6
        1: { rankA: 0, rankB: 5, rankC: 20, rankD: 95, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankD: 10, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 5, rankC: 10, }, //防御元件
    },
    7:{ //等级7
        1: { rankA: 5, rankB: 10, rankC: 35, rankD: 95, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankD: 10, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 5, rankC: 10, }, //防御元件
    },
    8:{ //等级8
        1: { rankA: 5, rankB: 10, rankC: 50, rankD: 95, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankD: 10, }, //扩张元件
        5: { rankS: 0, rankA: 5, rankB: 15, rankC: 10, }, //防御元件
    },
    9:{ //等级9
        1: { rankA: 5, rankB: 10, rankC: 50, rankD: 95, }, //火力元件
        4: { rankS: 5, rankA: 5, rankB: 10, rankD: 10, }, //扩张元件
        5: { rankS: 0, rankA: 5, rankB: 15, rankC: 10, }, //防御元件
    },
    10:{ //等级10
        1: { rankA: 5, rankB: 10, rankC: 50, rankD: 95, }, //火力元件
        4: { rankS: 5, rankA: 15, rankB: 10, rankD: 10, }, //扩张元件
        5: { rankS: 5, rankA: 5, rankB: 25, rankC: 10, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_aa_star2'] = { //二星船对空强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 1, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 6, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 6, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 1, rankD: 10, }, //防御元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 1, rankD: 21, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 1, rankD: 10, }, //防御元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 1, rankC: 0, rankD: 20, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 1, rankD: 21, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 6, rankD: 10, }, //防御元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 2, rankC: 5, rankD: 20, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 1, rankD: 21, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 6, rankD: 35, }, //防御元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 1, rankB: 3, rankC: 5, rankD: 20, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 11, rankD: 21, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 6, rankD: 35, }, //防御元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 1, rankB: 3, rankC: 5, rankD: 20, }, //火力元件
        4: { rankS: 0, rankB: 0, rankC: 11, rankD: 21, }, //扩张元件
        5: { rankA: 1, rankB: 5, rankC: 16, rankD: 35, }, //防御元件
    },
    9:{ //等级9
        1: { rankS: 0, rankA: 1, rankB: 3, rankC: 5, rankD: 20, }, //火力元件
        4: { rankS: 1, rankB: 5, rankC: 11, rankD: 21, }, //扩张元件
        5: { rankA: 2, rankB: 5, rankC: 16, rankD: 35, }, //防御元件
    },
    10:{ //等级10
        1: { rankS: 1, rankA: 6, rankB: 8, rankC: 5, rankD: 20, }, //火力元件
        4: { rankS: 1, rankB: 5, rankC: 11, rankD: 21, }, //扩张元件
        5: { rankA: 2, rankB: 5, rankC: 16, rankD: 35, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_atkspeed_star5'] = { //五星船攻速强化消耗元件
    0:{ //等级0
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //装填元件
    },
    2:{ //等级2
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //装填元件
    },
    3:{ //等级3
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 60, }, //装填元件
    },
    4:{ //等级4
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 90, }, //装填元件
    },
    5:{ //等级5
        6: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 125, }, //装填元件
    },
    6:{ //等级6
        6: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 165, }, //装填元件
    },
    7:{ //等级7
        6: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 165, }, //装填元件
    },
    8:{ //等级8
        6: { rankS: 0, rankA: 30, rankB: 65, rankC: 120, rankD: 165, }, //装填元件
    },
    9:{ //等级9
        6: { rankS: 15, rankA: 45, rankB: 85, rankC: 120, rankD: 165, }, //装填元件
    },
    10:{ //等级10
        6: { rankS: 30, rankA: 65, rankB: 105, rankC: 120, rankD: 165, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_atkspeed_star4'] = { //四星船攻速强化消耗元件
    0:{ //等级0
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //装填元件
    },
    2:{ //等级2
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //装填元件
    },
    3:{ //等级3
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, //装填元件
    },
    4:{ //等级4
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, //装填元件
    },
    5:{ //等级5
        6: { rankS: 0, rankA: 0, rankB: 10, rankC: 35, rankD: 100, }, //装填元件
    },
    6:{ //等级6
        6: { rankS: 0, rankA: 0, rankB: 20, rankC: 50, rankD: 135, }, //装填元件
    },
    7:{ //等级7
        6: { rankS: 0, rankA: 10, rankB: 30, rankC: 70, rankD: 135, }, //装填元件
    },
    8:{ //等级8
        6: { rankS: 0, rankA: 20, rankB: 45, rankC: 90, rankD: 135, }, //装填元件
    },
    9:{ //等级9
        6: { rankS: 10, rankA: 30, rankB: 60, rankC: 90, rankD: 135, }, //装填元件
    },
    10:{ //等级10
        6: { rankS: 20, rankA: 45, rankB: 75, rankC: 90, rankD: 135, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_atkspeed_star3'] = { //三星船攻速强化消耗元件
    0:{ //等级0
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //装填元件
    },
    2:{ //等级2
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //装填元件
    },
    3:{ //等级3
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, //装填元件
    },
    4:{ //等级4
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, //装填元件
    },
    5:{ //等级5
        6: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 75, }, //装填元件
    },
    6:{ //等级6
        6: { rankS: 0, rankA: 0, rankB: 10, rankC: 30, rankD: 105, }, //装填元件
    },
    7:{ //等级7
        6: { rankS: 0, rankA: 5, rankB: 15, rankC: 45, rankD: 105, }, //装填元件
    },
    8:{ //等级8
        6: { rankS: 0, rankA: 10, rankB: 25, rankC: 60, rankD: 105, }, //装填元件
    },
    9:{ //等级9
        6: { rankS: 5, rankA: 15, rankB: 35, rankC: 60, rankD: 105, }, //装填元件
    },
    10:{ //等级10
        6: { rankS: 10, rankA: 25, rankB: 45, rankC: 60, rankD: 105, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_atkspeed_star2'] = { //二星船攻速强化消耗元件
    0:{ //等级0
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //装填元件
    },
    2:{ //等级2
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, //装填元件
    },
    3:{ //等级3
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, //装填元件
    },
    4:{ //等级4
        6: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, //装填元件
    },
    5:{ //等级5
        6: { rankS: 0, rankA: 0, rankB: 1, rankC: 7, rankD: 51, }, //装填元件
    },
    6:{ //等级6
        6: { rankS: 0, rankA: 0, rankB: 2, rankC: 12, rankD: 76, }, //装填元件
    },
    7:{ //等级7
        6: { rankS: 0, rankA: 1, rankB: 3, rankC: 22, rankD: 76, }, //装填元件
    },
    8:{ //等级8
        6: { rankS: 0, rankA: 2, rankB: 8, rankC: 32, rankD: 76, }, //装填元件
    },
    9:{ //等级9
        6: { rankS: 1, rankA: 3, rankB: 13, rankC: 32, rankD: 76, }, //装填元件
    },
    10:{ //等级10
        6: { rankS: 2, rankA: 8, rankB: 18, rankC: 32, rankD: 76, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_critcorrection_star5'] = { //五星船暴击补正消耗元件
    0:{ //等级0
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankB: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //索敌元件
        4: { rankB: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //索敌元件
        4: { rankB: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 0, rankD: 20, }, //装填元件
    },
    3:{ //等级3
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankA: 0, rankB: 0, rankC: 0, rankD: 40, }, //索敌元件
        4: { rankB: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 15, rankD: 20, }, //装填元件
    },
    4:{ //等级4
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankA: 0, rankB: 0, rankC: 15, rankD: 70, }, //索敌元件
        4: { rankB: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 15, rankD: 20, }, //装填元件
    },
    5:{ //等级5
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //火力元件
        2: { rankA: 0, rankB: 15, rankC: 15, rankD: 70, }, //索敌元件
        4: { rankB: 0, }, //扩张元件
        6: { rankS: 0, rankB: 0, rankC: 35, rankD: 20, }, //装填元件
    },
    6:{ //等级6
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //火力元件
        2: { rankA: 0, rankB: 15, rankC: 35, rankD: 70, }, //索敌元件
        4: { rankB: 0, }, //扩张元件
        6: { rankS: 0, rankB: 15, rankC: 35, rankD: 60, }, //装填元件
    },
    7:{ //等级7
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //火力元件
        2: { rankA: 15, rankB: 30, rankC: 60, rankD: 70, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankS: 0, rankB: 15, rankC: 35, rankD: 60, }, //装填元件
    },
    8:{ //等级8
        1: { rankA: 0, rankB: 20, rankC: 25, rankD: 35, }, //火力元件
        2: { rankA: 30, rankB: 30, rankC: 60, rankD: 70, }, //索敌元件
        4: { rankB: 0, }, //扩张元件
        6: { rankS: 0, rankB: 15, rankC: 35, rankD: 60, }, //装填元件
    },
    9:{ //等级9
        1: { rankA: 15, rankB: 20, rankC: 25, rankD: 35, }, //火力元件
        2: { rankA: 30, rankB: 50, rankC: 60, rankD: 70, }, //索敌元件
        4: { rankB: 0, }, //扩张元件
        6: { rankS: 15, rankB: 15, rankC: 35, rankD: 60, }, //装填元件
    },
    10:{ //等级10
        1: { rankA: 35, rankB: 20, rankC: 25, rankD: 35, }, //火力元件
        2: { rankA: 30, rankB: 50, rankC: 60, rankD: 70, }, //索敌元件
        4: { rankB: 20, }, //扩张元件
        6: { rankS: 30, rankB: 15, rankC: 35, rankD: 60, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_critcorrection_star4'] = { //四星船暴击补正消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankB: 0, rankD: 0, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankB: 0, rankD: 10, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankB: 0, rankD: 25, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankB: 0, rankD: 25, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 10, rankD: 20, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 25, }, //火力元件
        2: { rankB: 0, rankD: 25, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 10, rankD: 20, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 25, rankD: 25, }, //火力元件
        2: { rankB: 10, rankD: 55, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 10, rankD: 20, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 25, rankD: 60, }, //火力元件
        2: { rankB: 10, rankD: 55, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 10, rankC: 25, rankD: 20, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 25, rankD: 60, }, //火力元件
        2: { rankB: 10, rankD: 55, }, //索敌元件
        4: { rankA: 0, rankC: 20, }, //扩张元件
        6: { rankA: 10, rankB: 20, rankC: 25, rankD: 20, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 10, rankB: 0, rankC: 25, rankD: 60, }, //火力元件
        2: { rankB: 25, rankD: 55, }, //索敌元件
        4: { rankA: 0, rankC: 20, }, //扩张元件
        6: { rankA: 10, rankB: 20, rankC: 45, rankD: 20, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 10, rankA: 10, rankB: 15, rankC: 25, rankD: 60, }, //火力元件
        2: { rankB: 25, rankD: 55, }, //索敌元件
        4: { rankA: 10, rankC: 20, }, //扩张元件
        6: { rankA: 10, rankB: 20, rankC: 45, rankD: 20, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 20, rankA: 10, rankB: 30, rankC: 25, rankD: 60, }, //火力元件
        2: { rankB: 25, rankD: 55, }, //索敌元件
        4: { rankA: 10, rankC: 20, }, //扩张元件
        6: { rankA: 25, rankB: 20, rankC: 45, rankD: 20, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_critcorrection_star3'] = { //三星船暴击补正消耗元件
    0:{ //等级0
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankB: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankB: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankB: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 15, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankB: 0, }, //装填元件
    },
    4:{ //等级4
        1: { rankA: 0, rankB: 0, rankC: 5, rankD: 35, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 15, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankB: 0, }, //装填元件
    },
    5:{ //等级5
        1: { rankA: 0, rankB: 0, rankC: 5, rankD: 35, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 5, rankC: 15, rankD: 40, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankB: 0, }, //装填元件
    },
    6:{ //等级6
        1: { rankA: 0, rankB: 0, rankC: 5, rankD: 35, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 5, rankC: 25, rankD: 70, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankB: 5, }, //装填元件
    },
    7:{ //等级7
        1: { rankA: 0, rankB: 5, rankC: 5, rankD: 35, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 5, rankC: 40, rankD: 70, }, //索敌元件
        4: { rankA: 5, rankB: 0, rankC: 0, }, //扩张元件
        6: { rankB: 5, }, //装填元件
    },
    8:{ //等级8
        1: { rankA: 0, rankB: 5, rankC: 5, rankD: 35, }, //火力元件
        2: { rankS: 0, rankA: 5, rankB: 15, rankC: 40, rankD: 70, }, //索敌元件
        4: { rankA: 5, rankB: 0, rankC: 15, }, //扩张元件
        6: { rankB: 5, }, //装填元件
    },
    9:{ //等级9
        1: { rankA: 5, rankB: 15, rankC: 5, rankD: 35, }, //火力元件
        2: { rankS: 5, rankA: 5, rankB: 15, rankC: 40, rankD: 70, }, //索敌元件
        4: { rankA: 5, rankB: 0, rankC: 15, }, //扩张元件
        6: { rankB: 5, }, //装填元件
    },
    10:{ //等级10
        1: { rankA: 5, rankB: 15, rankC: 5, rankD: 35, }, //火力元件
        2: { rankS: 10, rankA: 5, rankB: 15, rankC: 40, rankD: 70, }, //索敌元件
        4: { rankA: 15, rankB: 10, rankC: 15, }, //扩张元件
        6: { rankB: 5, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_critcorrection_star2'] = { //二星船暴击补正消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //装填元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 1, rankD: 10, }, //装填元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 21, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 0, rankC: 1, rankD: 10, }, //装填元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 6, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 41, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 1, rankC: 1, rankD: 10, }, //装填元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 6, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 66, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
        6: { rankA: 0, rankB: 2, rankC: 6, rankD: 10, }, //装填元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 0, rankB: 1, rankC: 6, }, //火力元件
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 66, }, //索敌元件
        4: { rankC: 10, }, //扩张元件
        6: { rankA: 1, rankB: 2, rankC: 6, rankD: 10, }, //装填元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 0, rankB: 6, rankC: 6, }, //火力元件
        2: { rankS: 0, rankA: 1, rankB: 0, rankC: 10, rankD: 66, }, //索敌元件
        4: { rankC: 10, }, //扩张元件
        6: { rankA: 1, rankB: 2, rankC: 6, rankD: 10, }, //装填元件
    },
    9:{ //等级9
        1: { rankS: 0, rankA: 1, rankB: 6, rankC: 6, }, //火力元件
        2: { rankS: 1, rankA: 1, rankB: 5, rankC: 10, rankD: 66, }, //索敌元件
        4: { rankC: 10, }, //扩张元件
        6: { rankA: 1, rankB: 2, rankC: 6, rankD: 10, }, //装填元件
    },
    10:{ //等级10
        1: { rankS: 1, rankA: 1, rankB: 11, rankC: 6, }, //火力元件
        2: { rankS: 1, rankA: 1, rankB: 5, rankC: 10, rankD: 66, }, //索敌元件
        4: { rankC: 10, }, //扩张元件
        6: { rankA: 6, rankB: 2, rankC: 6, rankD: 10, }, //装填元件
    },
};
consumptionItemList['reinforcementGroups']['rein_critdef_star5'] = { //五星船暴击抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 25, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 65, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 25, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 100, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 25, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 15, rankC: 0, rankD: 100, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 15, rankC: 70, rankD: 65, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 15, rankB: 15, rankC: 25, rankD: 100, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 65, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 15, rankB: 35, rankC: 50, rankD: 100, }, //扩张元件
        5: { rankS: 0, rankA: 15, rankB: 30, rankC: 70, rankD: 65, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 15, rankA: 30, rankB: 55, rankC: 50, rankD: 100, }, //扩张元件
        5: { rankS: 0, rankA: 15, rankB: 30, rankC: 70, rankD: 65, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 15, rankA: 30, rankB: 75, rankC: 50, rankD: 100, }, //扩张元件
        5: { rankS: 15, rankA: 35, rankB: 30, rankC: 70, rankD: 65, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_critdef_star4'] = { //四星船暴击抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 30, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 10, rankD: 15, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 55, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 10, rankD: 15, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 55, }, //扩张元件
        5: { rankA: 0, rankB: 10, rankC: 25, rankD: 45, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 90, }, //扩张元件
        5: { rankA: 0, rankB: 20, rankC: 40, rankD: 45, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 90, }, //扩张元件
        5: { rankA: 10, rankB: 30, rankC: 40, rankD: 45, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 50, rankD: 90, }, //扩张元件
        5: { rankA: 20, rankB: 45, rankC: 40, rankD: 45, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 10, rankA: 0, rankB: 15, rankC: 50, rankD: 90, }, //扩张元件
        5: { rankA: 30, rankB: 45, rankC: 40, rankD: 45, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 20, rankA: 15, rankB: 15, rankC: 50, rankD: 90, }, //扩张元件
        5: { rankA: 30, rankB: 60, rankC: 40, rankD: 45, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_critdef_star3'] = { //三星船暴击抗性消耗元件
    0:{ //等级0
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //防御元件
    },
    3:{ //等级3
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 10, }, //防御元件
    },
    4:{ //等级4
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 40, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 10, }, //防御元件
    },
    5:{ //等级5
        4: { rankA: 0, rankB: 5, rankC: 0, rankD: 65, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 10, }, //防御元件
    },
    6:{ //等级6
        4: { rankA: 0, rankB: 5, rankC: 10, rankD: 95, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 10, }, //防御元件
    },
    7:{ //等级7
        4: { rankA: 0, rankB: 10, rankC: 10, rankD: 95, }, //扩张元件
        5: { rankS: 0, rankA: 5, rankB: 5, rankC: 35, rankD: 10, }, //防御元件
    },
    8:{ //等级8
        4: { rankA: 5, rankB: 20, rankC: 25, rankD: 95, }, //扩张元件
        5: { rankS: 0, rankA: 5, rankB: 5, rankC: 35, rankD: 10, }, //防御元件
    },
    9:{ //等级9
        4: { rankA: 5, rankB: 30, rankC: 25, rankD: 95, }, //扩张元件
        5: { rankS: 5, rankA: 10, rankB: 5, rankC: 35, rankD: 10, }, //防御元件
    },
    10:{ //等级10
        4: { rankA: 15, rankB: 40, rankC: 25, rankD: 95, }, //扩张元件
        5: { rankS: 10, rankA: 10, rankB: 5, rankC: 35, rankD: 10, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_critdef_star2'] = { //二星船暴击抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 1, rankD: 11, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 20, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 1, rankD: 11, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 6, rankD: 20, }, //扩张元件
        5: { rankA: 0, rankB: 1, rankC: 1, rankD: 31, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 1, rankC: 6, rankD: 20, }, //扩张元件
        5: { rankA: 0, rankB: 1, rankC: 6, rankD: 56, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 1, rankB: 1, rankC: 16, rankD: 20, }, //扩张元件
        5: { rankA: 0, rankB: 2, rankC: 6, rankD: 56, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 2, rankB: 6, rankC: 26, rankD: 20, }, //扩张元件
        5: { rankA: 0, rankB: 2, rankC: 6, rankD: 56, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 1, rankA: 2, rankB: 11, rankC: 26, rankD: 20, }, //扩张元件
        5: { rankA: 1, rankB: 2, rankC: 6, rankD: 56, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 2, rankA: 2, rankB: 11, rankC: 26, rankD: 20, }, //扩张元件
        5: { rankA: 6, rankB: 7, rankC: 6, rankD: 56, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_accuracycorrection_star5'] = { //五星船命中补正消耗元件
    0:{ //等级0
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankB: 0, rankD: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankB: 0, rankD: 15, }, //扩张元件
    },
    2:{ //等级2
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //索敌元件
        4: { rankB: 0, rankD: 15, }, //扩张元件
    },
    3:{ //等级3
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 45, }, //索敌元件
        4: { rankB: 0, rankD: 15, }, //扩张元件
    },
    4:{ //等级4
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 75, }, //索敌元件
        4: { rankB: 0, rankD: 15, }, //扩张元件
    },
    5:{ //等级5
        2: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 110, }, //索敌元件
        4: { rankB: 0, rankD: 15, }, //扩张元件
    },
    6:{ //等级6
        2: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 150, }, //索敌元件
        4: { rankB: 0, rankD: 15, }, //扩张元件
    },
    7:{ //等级7
        2: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 150, }, //索敌元件
        4: { rankB: 0, rankD: 15, }, //扩张元件
    },
    8:{ //等级8
        2: { rankS: 0, rankA: 30, rankB: 45, rankC: 120, rankD: 150, }, //索敌元件
        4: { rankB: 20, rankD: 15, }, //扩张元件
    },
    9:{ //等级9
        2: { rankS: 15, rankA: 45, rankB: 65, rankC: 120, rankD: 150, }, //索敌元件
        4: { rankB: 20, rankD: 15, }, //扩张元件
    },
    10:{ //等级10
        2: { rankS: 30, rankA: 65, rankB: 85, rankC: 120, rankD: 150, }, //索敌元件
        4: { rankB: 20, rankD: 15, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_accuracycorrection_star4'] = { //四星船命中补正消耗元件
    0:{ //等级0
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
    },
    2:{ //等级2
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
    },
    3:{ //等级3
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 40, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
    },
    4:{ //等级4
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, //索敌元件
        4: { rankC: 0, }, //扩张元件
    },
    5:{ //等级5
        2: { rankS: 0, rankA: 0, rankB: 10, rankC: 20, rankD: 100, }, //索敌元件
        4: { rankC: 15, }, //扩张元件
    },
    6:{ //等级6
        2: { rankS: 0, rankA: 0, rankB: 20, rankC: 35, rankD: 135, }, //索敌元件
        4: { rankC: 15, }, //扩张元件
    },
    7:{ //等级7
        2: { rankS: 0, rankA: 10, rankB: 30, rankC: 55, rankD: 135, }, //索敌元件
        4: { rankC: 15, }, //扩张元件
    },
    8:{ //等级8
        2: { rankS: 0, rankA: 20, rankB: 45, rankC: 75, rankD: 135, }, //索敌元件
        4: { rankC: 15, }, //扩张元件
    },
    9:{ //等级9
        2: { rankS: 10, rankA: 30, rankB: 60, rankC: 75, rankD: 135, }, //索敌元件
        4: { rankC: 15, }, //扩张元件
    },
    10:{ //等级10
        2: { rankS: 20, rankA: 45, rankB: 75, rankC: 75, rankD: 135, }, //索敌元件
        4: { rankC: 15,}, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_accuracycorrection_star3'] = { //三星船命中补正消耗元件
    0:{ //等级0
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //索敌元件
    },
    2:{ //等级2
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //索敌元件
    },
    3:{ //等级3
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, //索敌元件
    },
    4:{ //等级4
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, //索敌元件
    },
    5:{ //等级5
        2: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 75, }, //索敌元件
    },
    6:{ //等级6
        2: { rankS: 0, rankA: 0, rankB: 10, rankC: 30, rankD: 105, }, //索敌元件
    },
    7:{ //等级7
        2: { rankS: 0, rankA: 5, rankB: 15, rankC: 45, rankD: 105, }, //索敌元件
    },
    8:{ //等级8
        2: { rankS: 0, rankA: 10, rankB: 25, rankC: 60, rankD: 105, }, //索敌元件
    },
    9:{ //等级9
        2: { rankS: 5, rankA: 15, rankB: 35, rankC: 60, rankD: 105, }, //索敌元件
    },
    10:{ //等级10
        2: { rankS: 10, rankA: 25, rankB: 45, rankC: 60, rankD: 105, }, //索敌元件
    },
};
consumptionItemList['reinforcementGroups']['rein_accuracycorrection_star2'] = { //二星船命中补正消耗元件
    0:{ //等级0
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    },
    2:{ //等级2
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    },
    3:{ //等级3
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    },
    4:{ //等级4
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, //索敌元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    },
    5:{ //等级5
        2: { rankS: 0, rankA: 0, rankB: 1, rankC: 2, rankD: 51, }, //索敌元件
        4: { rankA: 0, rankC: 5, }, //扩张元件
    },
    6:{ //等级6
        2: { rankS: 0, rankA: 0, rankB: 2, rankC: 7, rankD: 76, }, //索敌元件
        4: { rankA: 0, rankC: 5, }, //扩张元件
    },
    7:{ //等级7
        2: { rankS: 0, rankA: 1, rankB: 3, rankC: 17, rankD: 76, }, //索敌元件
        4: { rankA: 0, rankC: 5, }, //扩张元件
    },
    8:{ //等级8
        2: { rankS: 0, rankA: 2, rankB: 8, rankC: 27, rankD: 76, }, //索敌元件
        4: { rankA: 0, rankC: 5, }, //扩张元件
    },
    9:{ //等级9
        2: { rankS: 1, rankA: 2, rankB: 13, rankC: 27, rankD: 76, }, //索敌元件
        4: { rankA: 1, rankC: 5, }, //扩张元件
    },
    10:{ //等级10
        2: { rankS: 2, rankA: 7, rankB: 18, rankC: 27, rankD: 76, }, //索敌元件
        4: { rankA: 1, rankC: 5, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_evdcorrection_star5'] = { //五星船闪避补正消耗元件
    0:{ //等级0
        2: { rankA: 0, rankB: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankA: 0, rankB: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //动力元件
    },
    2:{ //等级2
        2: { rankA: 0, rankB: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //动力元件
    },
    3:{ //等级3
        2: { rankA: 0, rankB: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 60, }, //动力元件
    },
    4:{ //等级4
        2: { rankA: 0, rankB: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 90, }, //动力元件
    },
    5:{ //等级5
        2: { rankA: 0, rankB: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 125, }, //动力元件
    },
    6:{ //等级6
        2: { rankA: 0, rankB: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 165, }, //动力元件
    },
    7:{ //等级7
        2: { rankA: 0, rankB: 0, }, //索敌元件
        3: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 165, }, //动力元件
    },
    8:{ //等级8
        2: { rankA: 0, rankB: 0, }, //索敌元件
        3: { rankS: 0, rankA: 30, rankB: 65, rankC: 120, rankD: 165, }, //动力元件
    },
    9:{ //等级9
        2: { rankA: 15, rankB: 0, }, //索敌元件
        3: { rankS: 15, rankA: 30, rankB: 85, rankC: 120, rankD: 165, }, //动力元件
    },
    10:{ //等级10
        2: { rankA: 35, rankB: 20, }, //索敌元件
        3: { rankS: 30, rankA: 30, rankB: 85, rankC: 120, rankD: 165, }, //动力元件
    },
};
consumptionItemList['reinforcementGroups']['rein_evdcorrection_star4'] = { //四星船闪避补正消耗元件
    0:{ //等级0
        2: { rankC: 0, rankD: 0, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankC: 0, rankD: 10, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
    },
    2:{ //等级2
        2: { rankC: 0, rankD: 10, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //动力元件
    },
    3:{ //等级3
        2: { rankC: 10, rankD: 10, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //动力元件
    },
    4:{ //等级4
        2: { rankC: 10, rankD: 10, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 60, }, //动力元件
    },
    5:{ //等级5
        2: { rankC: 10, rankD: 10, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 10, rankC: 25, rankD: 90, }, //动力元件
    },
    6:{ //等级6
        2: { rankC: 10, rankD: 10, }, //索敌元件
        3: { rankS: 0, rankA: 0, rankB: 20, rankC: 40, rankD: 125, }, //动力元件
    },
    7:{ //等级7
        2: { rankC: 10, rankD: 10, }, //索敌元件
        3: { rankS: 0, rankA: 10, rankB: 30, rankC: 60, rankD: 125, }, //动力元件
    },
    8:{ //等级8
        2: { rankC: 10, rankD: 10, }, //索敌元件
        3: { rankS: 0, rankA: 20, rankB: 45, rankC: 80, rankD: 125, }, //动力元件
    },
    9:{ //等级9
        2: { rankC: 10, rankD: 10, }, //索敌元件
        3: { rankS: 10, rankA: 30, rankB: 60, rankC: 80, rankD: 125, }, //动力元件
    },
    10:{ //等级10
        2: { rankC: 10, rankD: 10, }, //索敌元件
        3: { rankS: 20, rankA: 45, rankB: 75, rankC: 80, rankD: 125, }, //动力元件
    },
};
consumptionItemList['reinforcementGroups']['rein_evdcorrection_star3'] = { //三星船闪避补正消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //动力元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //动力元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, //动力元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, //动力元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 75, }, //动力元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 10, rankC: 30, rankD: 105, }, //动力元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 5, rankB: 15, rankC: 45, rankD: 105, }, //动力元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 10, rankB: 25, rankC: 60, rankD: 105, }, //动力元件
    },
    9:{ //等级9
        3: { rankS: 5, rankA: 15, rankB: 35, rankC: 60, rankD: 105, }, //动力元件
    },
    10:{ //等级10
        3: { rankS: 10, rankA: 25, rankB: 45, rankC: 60, rankD: 105, }, //动力元件
    },
};
consumptionItemList['reinforcementGroups']['rein_evdcorrection_star2'] = { //二星船闪避补正消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //动力元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, //动力元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, //动力元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, //动力元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 1, rankC: 7, rankD: 51, }, //动力元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 2, rankC: 12, rankD: 76, }, //动力元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 1, rankB: 3, rankC: 22, rankD: 76, }, //动力元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 2, rankB: 8, rankC: 32, rankD: 76, }, //动力元件
    },
    9:{ //等级9
        3: { rankS: 1, rankA: 3, rankB: 13, rankC: 32, rankD: 76, }, //动力元件
    },
    10:{ //等级10
        3: { rankS: 2, rankA: 8, rankB: 18, rankC: 32, rankD: 76, }, //动力元件
    },
};
consumptionItemList['reinforcementGroups']['rein_flooddef_star5'] = { //五星船浸水抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 15, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 45, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 15, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 75, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 50, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 75, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 30, rankC: 50, rankD: 90, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 75, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 0, rankB: 30, rankC: 50, rankD: 90, }, //扩张元件
        5: { rankS: 0, rankA: 15, rankB: 15, rankC: 45, rankD: 75, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 0, rankB: 30, rankC: 75, rankD: 90, }, //扩张元件
        5: { rankS: 0, rankA: 30, rankB: 35, rankC: 45, rankD: 75, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 0, rankA: 15, rankB: 30, rankC: 75, rankD: 90, }, //扩张元件
        5: { rankS: 15, rankA: 30, rankB: 55, rankC: 45, rankD: 75, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 15, rankA: 35, rankB: 50, rankC: 75, rankD: 90, }, //扩张元件
        5: { rankS: 15, rankA: 30, rankB: 55, rankC: 45, rankD: 75, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_flooddef_star4'] = { //四星船浸水抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 10, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 25, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankB: 0, rankC: 10, rankD: 25, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankB: 0, rankC: 10, rankD: 50, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 20, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankB: 10, rankC: 25, rankD: 50, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankB: 10, rankC: 25, rankD: 50, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 10, rankC: 25, rankD: 85, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankB: 10, rankC: 45, rankD: 50, }, //扩张元件
        5: { rankS: 0, rankA: 10, rankB: 20, rankC: 25, rankD: 85, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankB: 10, rankC: 45, rankD: 50, }, //扩张元件
        5: { rankS: 0, rankA: 20, rankB: 35, rankC: 45, rankD: 85, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 0, rankB: 25, rankC: 45, rankD: 50, }, //扩张元件
        5: { rankS: 10, rankA: 30, rankB: 35, rankC: 45, rankD: 85, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 10, rankB: 40, rankC: 45, rankD: 50, }, //扩张元件
        5: { rankS: 10, rankA: 45, rankB: 35, rankC: 45, rankD: 85, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_flooddef_star3'] = { //三星船浸水抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 45, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 5, rankC: 5, rankD: 70, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 25, rankD: 35, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 10, rankC: 5, rankD: 70, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 25, rankD: 35, }, //扩张元件
        5: { rankS: 0, rankA: 5, rankB: 15, rankC: 20, rankD: 70, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 5, rankB: 10, rankC: 40, rankD: 35, }, //扩张元件
        5: { rankS: 0, rankA: 5, rankB: 15, rankC: 20, rankD: 70, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 5, rankA: 10, rankB: 10, rankC: 40, rankD: 35, }, //扩张元件
        5: { rankS: 0, rankA: 5, rankB: 25, rankC: 20, rankD: 70, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 5, rankA: 10, rankB: 20, rankC: 40, rankD: 35, }, //扩张元件
        5: { rankS: 5, rankA: 15, rankB: 25, rankC: 20, rankD: 70, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_flooddef_star2'] = { //二星船浸水抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 11, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 26, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 5, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 6, rankD: 46, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 1, rankC: 1, rankD: 5, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 6, rankD: 71, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 2, rankC: 6, rankD: 5, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 16, rankD: 71, }, //扩张元件
        5: { rankS: 0, rankA: 1, rankB: 3, rankC: 6, rankD: 5, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 26, rankD: 71, }, //扩张元件
        5: { rankS: 0, rankA: 2, rankB: 8, rankC: 6, rankD: 5, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 0, rankA: 0, rankB: 5, rankC: 26, rankD: 71, }, //扩张元件
        5: { rankS: 1, rankA: 3, rankB: 8, rankC: 6, rankD: 5, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 1, rankA: 5, rankB: 10, rankC: 26, rankD: 71, }, //扩张元件
        5: { rankS: 1, rankA: 3, rankB: 8, rankC: 6, rankD: 5, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_burndef_star5'] = { //五星船燃烧抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 35, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 35, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 55, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 15, rankC: 15, rankD: 70, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 35, rankD: 55, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 30, rankC: 15, rankD: 70, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 55, rankD: 95, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 15, rankB: 45, rankC: 40, rankD: 70, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 55, rankD: 95, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 15, rankB: 65, rankC: 65, rankD: 70, }, //扩张元件
        5: { rankS: 0, rankA: 15, rankB: 0, rankC: 55, rankD: 95, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 0, rankA: 30, rankB: 65, rankC: 65, rankD: 70, }, //扩张元件
        5: { rankS: 15, rankA: 15, rankB: 20, rankC: 55, rankD: 95, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 15, rankA: 50, rankB: 85, rankC: 65, rankD: 70, }, //扩张元件
        5: { rankS: 15, rankA: 15, rankB: 20, rankC: 55, rankD: 95, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_burndef_star4'] = { //四星船燃烧抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankB: 0, rankC: 0, rankD: 30, }, //扩张元件
        5: { rankA: 0, rankB: 10, rankC: 35, rankD: 70, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankB: 10, rankC: 15, rankD: 30, }, //扩张元件
        5: { rankA: 0, rankB: 10, rankC: 35, rankD: 105, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankB: 20, rankC: 35, rankD: 30, }, //扩张元件
        5: { rankA: 10, rankB: 10, rankC: 35, rankD: 105, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankB: 20, rankC: 35, rankD: 30, }, //扩张元件
        5: { rankA: 20, rankB: 25, rankC: 55, rankD: 105, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 10, rankB: 35, rankC: 35, rankD: 30, }, //扩张元件
        5: { rankA: 30, rankB: 25, rankC: 55, rankD: 105, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 20, rankB: 35, rankC: 35, rankD: 30, }, //扩张元件
        5: { rankA: 45, rankB: 40, rankC: 55, rankD: 105, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_burndef_star3'] = { //三星船燃烧抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankB: 0, rankC: 0, rankD: 10, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankB: 0, rankC: 0, rankD: 25, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankB: 0, rankC: 0, rankD: 45, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankB: 0, rankC: 0, rankD: 70, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankB: 5, rankC: 10, rankD: 100, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 5, rankB: 10, rankC: 20, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankB: 5, rankC: 25, rankD: 100, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 10, rankB: 20, rankC: 20, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankB: 5, rankC: 40, rankD: 100, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 5, rankA: 15, rankB: 30, rankC: 20, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankB: 5, rankC: 40, rankD: 100, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 5, rankA: 25, rankB: 40, rankC: 20, rankD: 5, }, //扩张元件
        5: { rankS: 5, rankB: 5, rankC: 40, rankD: 100, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_burndef_star2'] = { //二星船燃烧抗性消耗元件
    0:{ //等级0
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //防御元件
    },
    2:{ //等级2
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //防御元件
    },
    3:{ //等级3
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 11, }, //防御元件
    },
    4:{ //等级4
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 26, }, //防御元件
    },
    5:{ //等级5
        4: { rankS: 0, rankA: 0, rankB: 1, rankC: 2, rankD: 5, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 46, }, //防御元件
    },
    6:{ //等级6
        4: { rankS: 0, rankA: 0, rankB: 1, rankC: 2, rankD: 30, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 1, rankC: 10, rankD: 46, }, //防御元件
    },
    7:{ //等级7
        4: { rankS: 0, rankA: 0, rankB: 2, rankC: 12, rankD: 30, }, //扩张元件
        5: { rankS: 0, rankA: 1, rankB: 1, rankC: 10, rankD: 46, }, //防御元件
    },
    8:{ //等级8
        4: { rankS: 0, rankA: 0, rankB: 7, rankC: 22, rankD: 30, }, //扩张元件
        5: { rankS: 0, rankA: 2, rankB: 1, rankC: 10, rankD: 46, }, //防御元件
    },
    9:{ //等级9
        4: { rankS: 1, rankA: 1, rankB: 12, rankC: 22, rankD: 30, }, //扩张元件
        5: { rankS: 0, rankA: 2, rankB: 1, rankC: 10, rankD: 46, }, //防御元件
    },
    10:{ //等级10
        4: { rankS: 1, rankA: 6, rankB: 17, rankC: 22, rankD: 30, }, //扩张元件
        5: { rankS: 1, rankA: 2, rankB: 1, rankC: 10, rankD: 46, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_movespeed_star5'] = { //五星船移速增强消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 60, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 90, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 125, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, }, //扩张元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 165, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 15, rankC: 20, }, //扩张元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 15, rankB: 30, rankC: 75, rankD: 165, }, //动力元件
        4: { rankS: 0, rankA: 0, rankB: 15, rankC: 20, }, //扩张元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 15, rankB: 30, rankC: 100, rankD: 165, }, //动力元件
        4: { rankS: 0, rankA: 15, rankB: 35, rankC: 20, }, //扩张元件
    },
    9:{ //等级9
        3: { rankS: 0, rankA: 30, rankB: 50, rankC: 100, rankD: 165, }, //动力元件
        4: { rankS: 15, rankA: 15, rankB: 35, rankC: 20, }, //扩张元件
    },
    10:{ //等级10
        3: { rankS: 15, rankA: 50, rankB: 70, rankC: 100, rankD: 165, }, //动力元件
        4: { rankS: 15, rankA: 15, rankB: 35, rankC: 20, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_movespeed_star4'] = { //四星船移速增强消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //动力元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //动力元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, //动力元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, //动力元件
        4: { rankA: 0, rankC: 0, }, //扩张元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 10, rankC: 20, rankD: 100, }, //动力元件
        4: { rankA: 0, rankC: 15, }, //扩张元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 20, rankC: 35, rankD: 135, }, //动力元件
        4: { rankA: 0, rankC: 15, }, //扩张元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 0, rankB: 30, rankC: 55, rankD: 135, }, //动力元件
        4: { rankA: 10, rankC: 15, }, //扩张元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 10, rankB: 45, rankC: 75, rankD: 135, }, //动力元件
        4: { rankA: 10, rankC: 15, }, //扩张元件
    },
    9:{ //等级9
        3: { rankS: 10, rankA: 20, rankB: 60, rankC: 75, rankD: 135, }, //动力元件
        4: { rankA: 10, rankC: 15, }, //扩张元件
    },
    10:{ //等级10
        3: { rankS: 20, rankA: 35, rankB: 75, rankC: 75, rankD: 135, }, //动力元件
        4: { rankA: 10, rankC: 15, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_movespeed_star3'] = { //三星船移速增强消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankD: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //动力元件
        4: { rankD: 0, }, //扩张元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //动力元件
        4: { rankD: 0, }, //扩张元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, //动力元件
        4: { rankD: 0, }, //扩张元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 30, }, //动力元件
        4: { rankD: 20, }, //扩张元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 55, }, //动力元件
        4: { rankD: 20, }, //扩张元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 10, rankC: 30, rankD: 85, }, //动力元件
        4: { rankD: 20, }, //扩张元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 5, rankB: 15, rankC: 45, rankD: 85, }, //动力元件
        4: { rankD: 20, }, //扩张元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 10, rankB: 25, rankC: 60, rankD: 85, }, //动力元件
        4: { rankD: 20, }, //扩张元件
    },
    9:{ //等级9
        3: { rankS: 5, rankA: 15, rankB: 35, rankC: 60, rankD: 85, }, //动力元件
        4: { rankD: 20, }, //扩张元件
    },
    10:{ //等级10
        3: { rankS: 10, rankA: 25, rankB: 45, rankC: 60, rankD: 85, }, //动力元件
        4: { rankD: 20, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_movespeed_star2'] = { //二星船移速增强消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
        4: { rankB: 0, rankC: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //动力元件
        4: { rankB: 0, rankC: 0, }, //扩张元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, //动力元件
        4: { rankB: 0, rankC: 0, }, //扩张元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, //动力元件
        4: { rankB: 0, rankC: 0, }, //扩张元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 31, }, //动力元件
        4: { rankB: 0, rankC: 1, }, //扩张元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 1, rankC: 6, rankD: 51, }, //动力元件
        4: { rankB: 0, rankC: 1, }, //扩张元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 1, rankC: 11, rankD: 76, }, //动力元件
        4: { rankB: 1, rankC: 1, }, //扩张元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 1, rankB: 2, rankC: 21, rankD: 76, }, //动力元件
        4: { rankB: 1, rankC: 1, }, //扩张元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 2, rankB: 7, rankC: 31, rankD: 76, }, //动力元件
        4: { rankB: 1, rankC: 1, }, //扩张元件
    },
    9:{ //等级9
        3: { rankS: 1, rankA: 3, rankB: 12, rankC: 31, rankD: 76, }, //动力元件
        4: { rankB: 1, rankC: 1, }, //扩张元件
    },
    10:{ //等级10
        3: { rankS: 2, rankA: 8, rankB: 12, rankC: 31, rankD: 76, }, //动力元件
        4: { rankB: 6, rankC: 1, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_scouting_star5'] = { //五星船索敌增强消耗元件
    0:{ //等级0
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
    },
    2:{ //等级2
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
    },
    3:{ //等级3
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 40, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
    },
    4:{ //等级4
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 70, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
    },
    5:{ //等级5
        2: { rankS: 0, rankA: 0, rankB: 15, rankC: 30, rankD: 105, }, //索敌元件
        4: { rankA: 0, rankB: 0, rankC: 20, rankD: 20, }, //扩张元件
    },
    6:{ //等级6
        2: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 145, }, //索敌元件
        4: { rankA: 0, rankB: 15, rankC: 20, rankD: 20, }, //扩张元件
    },
    7:{ //等级7
        2: { rankS: 0, rankA: 0, rankB: 30, rankC: 75, rankD: 145, }, //索敌元件
        4: { rankA: 15, rankB: 15, rankC: 20, rankD: 20, }, //扩张元件
    },
    8:{ //等级8
        2: { rankS: 0, rankA: 15, rankB: 50, rankC: 100, rankD: 145, }, //索敌元件
        4: { rankA: 15, rankB: 15, rankC: 20, rankD: 20, }, //扩张元件
    },
    9:{ //等级9
        2: { rankS: 15, rankA: 30, rankB: 70, rankC: 100, rankD: 145, }, //索敌元件
        4: { rankA: 15, rankB: 15, rankC: 20, rankD: 20, }, //扩张元件
    },
    10:{ //等级10
        2: { rankS: 30, rankA: 50, rankB: 90, rankC: 100, rankD: 145, }, //索敌元件
        4: { rankA: 15, rankB: 15, rankC: 20, rankD: 20, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_scouting_star4'] = { //四星船索敌增强消耗元件
    0:{ //等级0
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankC: 0, rankD: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //索敌元件
        4: { rankC: 0, rankD: 0, }, //扩张元件
    },
    2:{ //等级2
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //索敌元件
        4: { rankC: 0, rankD: 0, }, //扩张元件
    },
    3:{ //等级3
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, //索敌元件
        4: { rankC: 0, rankD: 0, }, //扩张元件
    },
    4:{ //等级4
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, //索敌元件
        4: { rankC: 0, rankD: 0, }, //扩张元件
    },
    5:{ //等级5
        2: { rankS: 0, rankA: 0, rankB: 10, rankC: 35, rankD: 100, }, //索敌元件
        4: { rankC: 0, rankD: 0, }, //扩张元件
    },
    6:{ //等级6
        2: { rankS: 0, rankA: 0, rankB: 20, rankC: 50, rankD: 100, }, //索敌元件
        4: { rankC: 0, rankD: 35, }, //扩张元件
    },
    7:{ //等级7
        2: { rankS: 0, rankA: 10, rankB: 30, rankC: 50, rankD: 100, }, //索敌元件
        4: { rankC: 20, rankD: 35, }, //扩张元件
    },
    8:{ //等级8
        2: { rankS: 0, rankA: 20, rankB: 45, rankC: 70, rankD: 100, }, //索敌元件
        4: { rankC: 20, rankD: 35, }, //扩张元件
    },
    9:{ //等级9
        2: { rankS: 10, rankA: 30, rankB: 60, rankC: 70, rankD: 100, }, //索敌元件
        4: { rankC: 20, rankD: 35, }, //扩张元件
    },
    10:{ //等级10
        2: { rankS: 20, rankA: 45, rankB: 75, rankC: 70, rankD: 100, }, //索敌元件
        4: { rankC: 20, rankD: 35, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_scouting_star3'] = { //三星船索敌增强消耗元件
    0:{ //等级0
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankB: 0, rankC: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //索敌元件
        4: { rankB: 0, rankC: 0, }, //扩张元件
    },
    2:{ //等级2
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //索敌元件
        4: { rankB: 0, rankC: 0, }, //扩张元件
    },
    3:{ //等级3
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, //索敌元件
        4: { rankB: 0, rankC: 0, }, //扩张元件
    },
    4:{ //等级4
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, //索敌元件
        4: { rankB: 0, rankC: 0, }, //扩张元件
    },
    5:{ //等级5
        2: { rankS: 0, rankA: 0, rankB: 5, rankC: 10, rankD: 75, }, //索敌元件
        4: { rankB: 0, rankC: 10, }, //扩张元件
    },
    6:{ //等级6
        2: { rankS: 0, rankA: 0, rankB: 10, rankC: 20, rankD: 105, }, //索敌元件
        4: { rankB: 0, rankC: 10, }, //扩张元件
    },
    7:{ //等级7
        2: { rankS: 0, rankA: 5, rankB: 15, rankC: 35, rankD: 105, }, //索敌元件
        4: { rankB: 0, rankC: 10, }, //扩张元件
    },
    8:{ //等级8
        2: { rankS: 0, rankA: 10, rankB: 25, rankC: 50, rankD: 105, }, //索敌元件
        4: { rankB: 0, rankC: 10, }, //扩张元件
    },
    9:{ //等级9
        2: { rankS: 5, rankA: 15, rankB: 25, rankC: 50, rankD: 105, }, //索敌元件
        4: { rankB: 10, rankC: 10, }, //扩张元件
    },
    10:{ //等级10
        2: { rankS: 10, rankA: 25, rankB: 25, rankC: 50, rankD: 105, }, //索敌元件
        4: { rankB: 20, rankC: 10, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_scouting_star2'] = { //二星船索敌增强消耗元件
    0:{ //等级0
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //索敌元件
        4: { rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
    }, //填入的数值为累加值
    1:{ //等级1
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //索敌元件
        4: { rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
    },
    2:{ //等级2
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, //索敌元件
        4: { rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
    },
    3:{ //等级3
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, //索敌元件
        4: { rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
    },
    4:{ //等级4
        2: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, //索敌元件
        4: { rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
    },
    5:{ //等级5
        2: { rankS: 0, rankA: 0, rankB: 1, rankC: 7, rankD: 31, }, //索敌元件
        4: { rankB: 0, rankC: 0, rankD: 20, }, //扩张元件
    },
    6:{ //等级6
        2: { rankS: 0, rankA: 0, rankB: 2, rankC: 7, rankD: 56, }, //索敌元件
        4: { rankB: 0, rankC: 5, rankD: 20, }, //扩张元件
    },
    7:{ //等级7
        2: { rankS: 0, rankA: 1, rankB: 2, rankC: 17, rankD: 56, }, //索敌元件
        4: { rankB: 1, rankC: 5, rankD: 20, }, //扩张元件
    },
    8:{ //等级8
        2: { rankS: 0, rankA: 2, rankB: 7, rankC: 27, rankD: 56, }, //索敌元件
        4: { rankB: 1, rankC: 5, rankD: 20, }, //扩张元件
    },
    9:{ //等级9
        2: { rankS: 1, rankA: 3, rankB: 12, rankC: 27, rankD: 56, }, //索敌元件
        4: { rankB: 1, rankC: 5, rankD: 20, }, //扩张元件
    },
    10:{ //等级10
        2: { rankS: 2, rankA: 8, rankB: 17, rankC: 27, rankD: 56, }, //索敌元件
        4: { rankB: 1, rankC: 5, rankD: 20, }, //扩张元件
    },
};
consumptionItemList['reinforcementGroups']['rein_costup_star5'] = { //五星船负重COST上限消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //动力元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, //动力元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 60, }, //动力元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 90, }, //动力元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 125, }, //动力元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 165, }, //动力元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 165, }, //动力元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 30, rankB: 65, rankC: 120, rankD: 165, }, //动力元件
    },
    9:{ //等级9
        3: { rankS: 15, rankA: 45, rankB: 85, rankC: 120, rankD: 165, }, //动力元件
    },
    10:{ //等级10
        3: { rankS: 30, rankA: 65, rankB: 105, rankC: 120, rankD: 165, }, //动力元件
    },
};
consumptionItemList['reinforcementGroups']['rein_costup_star4'] = { //四星船负重COST上限消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, //动力元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, //动力元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, //动力元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, //动力元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 10, rankC: 35, rankD: 100, }, //动力元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 20, rankC: 50, rankD: 135, }, //动力元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 10, rankB: 30, rankC: 70, rankD: 135, }, //动力元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 20, rankB: 45, rankC: 90, rankD: 135, }, //动力元件
    },
    9:{ //等级9
        3: { rankS: 10, rankA: 30, rankB: 60, rankC: 90, rankD: 135, }, //动力元件
    },
    10:{ //等级10
        3: { rankS: 20, rankA: 45, rankB: 75, rankC: 90, rankD: 135, }, //动力元件
    },
};
consumptionItemList['reinforcementGroups']['rein_costup_star3'] = { //三星船负重COST上限消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, //动力元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //动力元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, //动力元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, //动力元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 75, }, //动力元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 10, rankC: 30, rankD: 105, }, //动力元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 5, rankB: 15, rankC: 45, rankD: 105, }, //动力元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 10, rankB: 25, rankC: 60, rankD: 105, }, //动力元件
    },
    9:{ //等级9
        3: { rankS: 5, rankA: 15, rankB: 35, rankC: 60, rankD: 105, }, //动力元件
    },
    10:{ //等级10
        3: { rankS: 10, rankA: 25, rankB: 45, rankC: 60, rankD: 105, }, //动力元件
    },
};
consumptionItemList['reinforcementGroups']['rein_costup_star2'] = { //二星船负重COST上限消耗元件
    0:{ //等级0
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //动力元件
    }, //填入的数值为累加值
    1:{ //等级1
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, //动力元件
    },
    2:{ //等级2
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, //动力元件
    },
    3:{ //等级3
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, //动力元件
    },
    4:{ //等级4
        3: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, //动力元件
    },
    5:{ //等级5
        3: { rankS: 0, rankA: 0, rankB: 1, rankC: 7, rankD: 51, }, //动力元件
    },
    6:{ //等级6
        3: { rankS: 0, rankA: 0, rankB: 2, rankC: 12, rankD: 76, }, //动力元件
    },
    7:{ //等级7
        3: { rankS: 0, rankA: 1, rankB: 3, rankC: 22, rankD: 76, }, //动力元件
    },
    8:{ //等级8
        3: { rankS: 0, rankA: 2, rankB: 8, rankC: 32, rankD: 76, }, //动力元件
    },
    9:{ //等级9
        3: { rankS: 1, rankA: 3, rankB: 13, rankC: 32, rankD: 76, }, //动力元件
    },
    10:{ //等级10
        3: { rankS: 2, rankA: 8, rankB: 18, rankC: 32, rankD: 76, }, //动力元件
    },
};

//NP消耗
consumptionItemList['common']['rein_health_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船耐久强化消耗NP
consumptionItemList['common']['rein_health_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船耐久强化消耗NP
consumptionItemList['common']['rein_health_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船耐久强化消耗NP
consumptionItemList['common']['rein_health_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船耐久强化消耗NP
consumptionItemList['common']['rein_gunfirepower_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船炮击舰爆强化消耗NP
consumptionItemList['common']['rein_gunfirepower_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船炮击舰爆强化消耗NP
consumptionItemList['common']['rein_gunfirepower_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船炮击舰爆强化消耗NP
consumptionItemList['common']['rein_gunfirepower_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船炮击舰爆强化消耗NP
consumptionItemList['common']['rein_torpedofirepower_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船鱼雷舰攻强化消耗NP
consumptionItemList['common']['rein_torpedofirepower_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船鱼雷舰攻强化消耗NP
consumptionItemList['common']['rein_torpedofirepower_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船鱼雷舰攻强化消耗NP
consumptionItemList['common']['rein_torpedofirepower_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船鱼雷舰攻强化消耗NP
consumptionItemList['common']['rein_aa_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船对空强化消耗NP
consumptionItemList['common']['rein_aa_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船对空强化消耗NP
consumptionItemList['common']['rein_aa_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船对空强化消耗NP
consumptionItemList['common']['rein_aa_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船对空强化消耗NP
consumptionItemList['common']['rein_atkspeed_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船攻速强化消耗NP
consumptionItemList['common']['rein_atkspeed_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船攻速强化消耗NP
consumptionItemList['common']['rein_atkspeed_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船攻速强化消耗NP
consumptionItemList['common']['rein_atkspeed_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船攻速强化消耗NP
consumptionItemList['common']['rein_critcorrection_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船暴击补正消耗NP
consumptionItemList['common']['rein_critcorrection_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船暴击补正消耗NP
consumptionItemList['common']['rein_critcorrection_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船暴击补正消耗NP
consumptionItemList['common']['rein_critcorrection_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船暴击补正消耗NP
consumptionItemList['common']['rein_critdef_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船暴击抗性消耗NP
consumptionItemList['common']['rein_critdef_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船暴击抗性消耗NP
consumptionItemList['common']['rein_critdef_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船暴击抗性消耗NP
consumptionItemList['common']['rein_critdef_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船暴击抗性消耗NP
consumptionItemList['common']['rein_accuracycorrection_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船命中补正消耗NP
consumptionItemList['common']['rein_accuracycorrection_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船命中补正消耗NP
consumptionItemList['common']['rein_accuracycorrection_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船命中补正消耗NP
consumptionItemList['common']['rein_accuracycorrection_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船命中补正消耗NP
consumptionItemList['common']['rein_evdcorrection_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船闪避补正消耗NP
consumptionItemList['common']['rein_evdcorrection_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船闪避补正消耗NP
consumptionItemList['common']['rein_evdcorrection_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船闪避补正消耗NP
consumptionItemList['common']['rein_evdcorrection_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船闪避补正消耗NP
consumptionItemList['common']['rein_flooddef_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船浸水抗性消耗NP
consumptionItemList['common']['rein_flooddef_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船浸水抗性消耗NP
consumptionItemList['common']['rein_flooddef_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船浸水抗性消耗NP
consumptionItemList['common']['rein_flooddef_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船浸水抗性消耗NP
consumptionItemList['common']['rein_burndef_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船燃烧抗性消耗NP
consumptionItemList['common']['rein_burndef_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船燃烧抗性消耗NP
consumptionItemList['common']['rein_burndef_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船燃烧抗性消耗NP
consumptionItemList['common']['rein_burndef_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船燃烧抗性消耗NP
consumptionItemList['common']['rein_movespeed_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船移速增强消耗NP
consumptionItemList['common']['rein_movespeed_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船移速增强消耗NP
consumptionItemList['common']['rein_movespeed_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船移速增强消耗NP
consumptionItemList['common']['rein_movespeed_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船移速增强消耗NP
consumptionItemList['common']['rein_scouting_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船索敌增强消耗NP
consumptionItemList['common']['rein_scouting_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船索敌增强消耗NP
consumptionItemList['common']['rein_scouting_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船索敌增强消耗NP
consumptionItemList['common']['rein_scouting_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船索敌增强消耗NP
consumptionItemList['common']['rein_costup_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船负重COST上限消耗NP
consumptionItemList['common']['rein_costup_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船负重COST上限消耗NP
consumptionItemList['common']['rein_costup_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船负重COST上限消耗NP
consumptionItemList['common']['rein_costup_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船负重COST上限消耗NP




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

//NP消耗//主动技能NP消耗为0
consumptionItemList['common']['act_star5'] = consumptionItemList['common']['0'];
consumptionItemList['common']['act_star4'] = consumptionItemList['common']['0'];
consumptionItemList['common']['act_star3'] = consumptionItemList['common']['0'];
consumptionItemList['common']['act_star2'] = consumptionItemList['common']['0'];
////主动技能消耗

////被动技能消耗
//回路消耗
consumptionItemList['passiveSkills']['passive_cv_star5'] = { //5星cv被动技回路消耗
    0:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, }, //航母回路//填入的数值为累加值
    1:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, },
    2:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, },
    3:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 60, }, },
    4:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 90, }, },
    5:{ 4: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 125, }, },
    6:{ 4: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 165, }, },
    7:{ 4: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 165, }, },
    8:{ 4: { rankS: 0, rankA: 30, rankB: 65, rankC: 120, rankD: 165, }, },
    9:{ 4: { rankS: 15, rankA: 45, rankB: 85, rankC: 120, rankD: 165, }, },
    10:{ 4: { rankS: 30, rankA: 65, rankB: 105, rankC: 120, rankD: 165, }, },
};
consumptionItemList['passiveSkills']['passive_bbbc_star5'] = { //5星战列被动技回路消耗
    0:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, }, 
    1:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, },
    2:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, },
    3:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 60, }, },
    4:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 90, }, },
    5:{ 3: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 125, }, },
    6:{ 3: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 165, }, },
    7:{ 3: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 165, }, },
    8:{ 3: { rankS: 0, rankA: 30, rankB: 65, rankC: 120, rankD: 165, }, },
    9:{ 3: { rankS: 15, rankA: 45, rankB: 85, rankC: 120, rankD: 165, }, },
    10:{ 3: { rankS: 30, rankA: 65, rankB: 105, rankC: 120, rankD: 165, }, },
};
consumptionItemList['passiveSkills']['passive_clca_star5'] = { //5星巡洋被动技回路消耗
    0:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, }, //巡洋回路//填入的数值为累加值
    1:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, },
    2:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, },
    3:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 60, }, },
    4:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 90, }, },
    5:{ 2: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 125, }, },
    6:{ 2: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 165, }, },
    7:{ 2: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 165, }, },
    8:{ 2: { rankS: 0, rankA: 30, rankB: 65, rankC: 120, rankD: 165, }, },
    9:{ 2: { rankS: 15, rankA: 45, rankB: 85, rankC: 120, rankD: 165, }, },
    10:{ 2: { rankS: 30, rankA: 65, rankB: 105, rankC: 120, rankD: 165, }, },
};
consumptionItemList['passiveSkills']['passive_dd_star5'] = { //5星驱逐被动技回路消耗
    0:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, }, 
    1:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, },
    2:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 35, }, },
    3:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 60, }, },
    4:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 90, }, },
    5:{ 1: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 125, }, },
    6:{ 1: { rankS: 0, rankA: 0, rankB: 30, rankC: 70, rankD: 165, }, },
    7:{ 1: { rankS: 0, rankA: 15, rankB: 45, rankC: 95, rankD: 165, }, },
    8:{ 1: { rankS: 0, rankA: 30, rankB: 65, rankC: 120, rankD: 165, }, },
    9:{ 1: { rankS: 15, rankA: 45, rankB: 85, rankC: 120, rankD: 165, }, },
    10:{ 1: { rankS: 30, rankA: 65, rankB: 105, rankC: 120, rankD: 165, }, },
};
//
consumptionItemList['passiveSkills']['passive_cv_star4'] = { //4星cv被动技回路消耗
    0:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, }, //航母回路
    1:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, },
    2:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, },
    3:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, },
    4:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, },
    5:{ 4: { rankS: 0, rankA: 0, rankB: 10, rankC: 35, rankD: 100, }, },
    6:{ 4: { rankS: 0, rankA: 0, rankB: 20, rankC: 50, rankD: 135, }, },
    7:{ 4: { rankS: 0, rankA: 10, rankB: 30, rankC: 70, rankD: 135, }, },
    8:{ 4: { rankS: 0, rankA: 20, rankB: 45, rankC: 90, rankD: 135, }, },
    9:{ 4: { rankS: 10, rankA: 30, rankB: 60, rankC: 90, rankD: 135, }, },
    10:{ 4: { rankS: 20, rankA: 45, rankB: 75, rankC: 90, rankD: 135, }, },
};
consumptionItemList['passiveSkills']['passive_bbbc_star4'] = { //4星战列被动技回路消耗
    0:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, }, 
    1:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, },
    2:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, },
    3:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, },
    4:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, },
    5:{ 3: { rankS: 0, rankA: 0, rankB: 10, rankC: 35, rankD: 100, }, },
    6:{ 3: { rankS: 0, rankA: 0, rankB: 20, rankC: 50, rankD: 135, }, },
    7:{ 3: { rankS: 0, rankA: 10, rankB: 30, rankC: 70, rankD: 135, }, },
    8:{ 3: { rankS: 0, rankA: 20, rankB: 45, rankC: 90, rankD: 135, }, },
    9:{ 3: { rankS: 10, rankA: 30, rankB: 60, rankC: 90, rankD: 135, }, },
    10:{ 3: { rankS: 20, rankA: 45, rankB: 75, rankC: 90, rankD: 135, }, },
};
consumptionItemList['passiveSkills']['passive_clca_star4'] = { //4星巡洋被动技回路消耗
    0:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, }, 
    1:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, },
    2:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, },
    3:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, },
    4:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, },
    5:{ 2: { rankS: 0, rankA: 0, rankB: 10, rankC: 35, rankD: 100, }, },
    6:{ 2: { rankS: 0, rankA: 0, rankB: 20, rankC: 50, rankD: 135, }, },
    7:{ 2: { rankS: 0, rankA: 10, rankB: 30, rankC: 70, rankD: 135, }, },
    8:{ 2: { rankS: 0, rankA: 20, rankB: 45, rankC: 90, rankD: 135, }, },
    9:{ 2: { rankS: 10, rankA: 30, rankB: 60, rankC: 90, rankD: 135, }, },
    10:{ 2: { rankS: 20, rankA: 45, rankB: 75, rankC: 90, rankD: 135, }, },
};
consumptionItemList['passiveSkills']['passive_dd_star4'] = { //4星驱逐被动技回路消耗
    0:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, }, 
    1:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 10, }, },
    2:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 25, }, },
    3:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 45, }, },
    4:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 70, }, },
    5:{ 1: { rankS: 0, rankA: 0, rankB: 10, rankC: 35, rankD: 100, }, },
    6:{ 1: { rankS: 0, rankA: 0, rankB: 20, rankC: 50, rankD: 135, }, },
    7:{ 1: { rankS: 0, rankA: 10, rankB: 30, rankC: 70, rankD: 135, }, },
    8:{ 1: { rankS: 0, rankA: 20, rankB: 45, rankC: 90, rankD: 135, }, },
    9:{ 1: { rankS: 10, rankA: 30, rankB: 60, rankC: 90, rankD: 135, }, },
    10:{ 1: { rankS: 20, rankA: 45, rankB: 75, rankC: 90, rankD: 135, }, },
};
//
consumptionItemList['passiveSkills']['passive_cv_star3'] = { //3星cv被动技回路消耗
    0:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    1:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, },
    2:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, },
    3:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, },
    4:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, },
    5:{ 4: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 75, }, },
    6:{ 4: { rankS: 0, rankA: 0, rankB: 10, rankC: 30, rankD: 105, }, },
    7:{ 4: { rankS: 0, rankA: 5, rankB: 15, rankC: 45, rankD: 105, }, },
    8:{ 4: { rankS: 0, rankA: 10, rankB: 25, rankC: 60, rankD: 105, }, },
    9:{ 4: { rankS: 5, rankA: 15, rankB: 35, rankC: 60, rankD: 105, }, },
    10:{ 4: { rankS: 10, rankA: 25, rankB: 45, rankC: 60, rankD: 105, }, },
};
consumptionItemList['passiveSkills']['passive_bbbc_star3'] = { //3星战列被动技回路消耗
    0:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    1:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, },
    2:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, },
    3:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, },
    4:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, },
    5:{ 3: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 75, }, },
    6:{ 3: { rankS: 0, rankA: 0, rankB: 10, rankC: 30, rankD: 105, }, },
    7:{ 3: { rankS: 0, rankA: 5, rankB: 15, rankC: 45, rankD: 105, }, },
    8:{ 3: { rankS: 0, rankA: 10, rankB: 25, rankC: 60, rankD: 105, }, },
    9:{ 3: { rankS: 5, rankA: 15, rankB: 35, rankC: 60, rankD: 105, }, },
    10:{ 3: { rankS: 10, rankA: 25, rankB: 45, rankC: 60, rankD: 105, }, },
};
consumptionItemList['passiveSkills']['passive_clca_star3'] = { //3星巡洋被动技回路消耗
    0:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    1:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, },
    2:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, },
    3:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, },
    4:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, },
    5:{ 2: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 75, }, },
    6:{ 2: { rankS: 0, rankA: 0, rankB: 10, rankC: 30, rankD: 105, }, },
    7:{ 2: { rankS: 0, rankA: 5, rankB: 15, rankC: 45, rankD: 105, }, },
    8:{ 2: { rankS: 0, rankA: 10, rankB: 25, rankC: 60, rankD: 105, }, },
    9:{ 2: { rankS: 5, rankA: 15, rankB: 35, rankC: 60, rankD: 105, }, },
    10:{ 2: { rankS: 10, rankA: 25, rankB: 45, rankC: 60, rankD: 105, }, },
};
consumptionItemList['passiveSkills']['passive_dd_star3'] = { //3星驱逐被动技回路消耗
    0:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    1:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 5, }, },
    2:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, },
    3:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 5, rankD: 30, }, },
    4:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 10, rankD: 50, }, },
    5:{ 1: { rankS: 0, rankA: 0, rankB: 5, rankC: 20, rankD: 75, }, },
    6:{ 1: { rankS: 0, rankA: 0, rankB: 10, rankC: 30, rankD: 105, }, },
    7:{ 1: { rankS: 0, rankA: 5, rankB: 15, rankC: 45, rankD: 105, }, },
    8:{ 1: { rankS: 0, rankA: 10, rankB: 25, rankC: 60, rankD: 105, }, },
    9:{ 1: { rankS: 5, rankA: 15, rankB: 35, rankC: 60, rankD: 105, }, },
    10:{ 1: { rankS: 10, rankA: 25, rankB: 45, rankC: 60, rankD: 105, }, },
};
//
consumptionItemList['passiveSkills']['passive_cv_star2'] = { //2星cv被动技回路消耗
    0:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    1:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, },
    2:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, },
    3:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, },
    4:{ 4: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, },
    5:{ 4: { rankS: 0, rankA: 0, rankB: 1, rankC: 7, rankD: 51, }, },
    6:{ 4: { rankS: 0, rankA: 0, rankB: 2, rankC: 12, rankD: 76, }, },
    7:{ 4: { rankS: 0, rankA: 1, rankB: 3, rankC: 22, rankD: 76, }, },
    8:{ 4: { rankS: 0, rankA: 2, rankB: 8, rankC: 32, rankD: 76, }, },
    9:{ 4: { rankS: 1, rankA: 3, rankB: 13, rankC: 32, rankD: 76, }, },
    10:{ 4: { rankS: 2, rankA: 8, rankB: 18, rankC: 32, rankD: 76, }, },
};
consumptionItemList['passiveSkills']['passive_bbbc_star2'] = { //2星战列被动技回路消耗
    0:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    1:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, },
    2:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, },
    3:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, },
    4:{ 3: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, },
    5:{ 3: { rankS: 0, rankA: 0, rankB: 1, rankC: 7, rankD: 51, }, },
    6:{ 3: { rankS: 0, rankA: 0, rankB: 2, rankC: 12, rankD: 76, }, },
    7:{ 3: { rankS: 0, rankA: 1, rankB: 3, rankC: 22, rankD: 76, }, },
    8:{ 3: { rankS: 0, rankA: 2, rankB: 8, rankC: 32, rankD: 76, }, },
    9:{ 3: { rankS: 1, rankA: 3, rankB: 13, rankC: 32, rankD: 76, }, },
    10:{ 3: { rankS: 2, rankA: 8, rankB: 18, rankC: 32, rankD: 76, }, },
};
consumptionItemList['passiveSkills']['passive_clca_star2'] = { //2星巡洋被动技回路消耗
    0:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    1:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, },
    2:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, },
    3:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, },
    4:{ 2: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, },
    5:{ 2: { rankS: 0, rankA: 0, rankB: 1, rankC: 7, rankD: 51, }, },
    6:{ 2: { rankS: 0, rankA: 0, rankB: 2, rankC: 12, rankD: 76, }, },
    7:{ 2: { rankS: 0, rankA: 1, rankB: 3, rankC: 22, rankD: 76, }, },
    8:{ 2: { rankS: 0, rankA: 2, rankB: 8, rankC: 32, rankD: 76, }, },
    9:{ 2: { rankS: 1, rankA: 3, rankB: 13, rankC: 32, rankD: 76, }, },
    10:{ 2: { rankS: 2, rankA: 8, rankB: 18, rankC: 32, rankD: 76, }, },
};
consumptionItemList['passiveSkills']['passive_dd_star2'] = { //2星驱逐被动技回路消耗
    0:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, },
    1:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 1, }, },
    2:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 6, }, },
    3:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 1, rankD: 16, }, },
    4:{ 1: { rankS: 0, rankA: 0, rankB: 0, rankC: 2, rankD: 31, }, },
    5:{ 1: { rankS: 0, rankA: 0, rankB: 1, rankC: 7, rankD: 51, }, },
    6:{ 1: { rankS: 0, rankA: 0, rankB: 2, rankC: 12, rankD: 76, }, },
    7:{ 1: { rankS: 0, rankA: 1, rankB: 3, rankC: 22, rankD: 76, }, },
    8:{ 1: { rankS: 0, rankA: 2, rankB: 8, rankC: 32, rankD: 76, }, },
    9:{ 1: { rankS: 1, rankA: 3, rankB: 13, rankC: 32, rankD: 76, }, },
    10:{ 1: { rankS: 2, rankA: 8, rankB: 18, rankC: 32, rankD: 76, }, },
};
//NP消耗//
consumptionItemList['common']['passive_cv_star5'] = consumptionItemList['common']['Common_NP_star5'] //被动技能NP消耗
consumptionItemList['common']['passive_bbbc_star5'] = consumptionItemList['common']['Common_NP_star5'] 
consumptionItemList['common']['passive_clca_star5'] = consumptionItemList['common']['Common_NP_star5'] 
consumptionItemList['common']['passive_dd_star5'] = consumptionItemList['common']['Common_NP_star5'] 
//
consumptionItemList['common']['passive_cv_star4'] = consumptionItemList['common']['Common_NP_star4'] 
consumptionItemList['common']['passive_bbbc_star4'] = consumptionItemList['common']['Common_NP_star4'] 
consumptionItemList['common']['passive_clca_star4'] = consumptionItemList['common']['Common_NP_star4'] 
consumptionItemList['common']['passive_dd_star4'] = consumptionItemList['common']['Common_NP_star4'] 
//
consumptionItemList['common']['passive_cv_star3'] = consumptionItemList['common']['Common_NP_star3'] 
consumptionItemList['common']['passive_bbbc_star3'] = consumptionItemList['common']['Common_NP_star3'] 
consumptionItemList['common']['passive_clca_star3'] = consumptionItemList['common']['Common_NP_star3'] 
consumptionItemList['common']['passive_dd_star3'] = consumptionItemList['common']['Common_NP_star3'] 
//
consumptionItemList['common']['passive_cv_star2'] = consumptionItemList['common']['Common_NP_star2'] 
consumptionItemList['common']['passive_bbbc_star2'] = consumptionItemList['common']['Common_NP_star2'] 
consumptionItemList['common']['passive_clca_star2'] = consumptionItemList['common']['Common_NP_star2'] 
consumptionItemList['common']['passive_dd_star2'] = consumptionItemList['common']['Common_NP_star2'] 
////被动技能消耗

////////////////////////////////////////////////
//shiptypeid : { 0: '无', 1: '驱逐', 2: '轻巡', 3: '重巡', 4: '战巡', 5: '战列', 6: '航母', },
//shipstars : { 0: '无', 2: '2星', 3: '3星', 4: '4星', 5: '5星', },
var shipdata = {};
shipdata[1] = {
    id: 1,
    name: '夏雾',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 25, consumptionID: 'rein_torpedofirepower_star4',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        3: { name: '索敌', initvalue: 6, consumptionID: 'rein_scouting_star4',},
        4: { name: '耐久', initvalue: 47, consumptionID: 'rein_health_star4',},
        5: { name: '炮击', initvalue: 7, consumptionID: 'rein_gunfirepower_star4',},
    },
    activeSkills: {
        1:{ name: '散射雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '鱼雷再装填', consumptionID: 'passive_dd_star4',},
        2: { name: '一心一意', consumptionID: 'passive_dd_star4',},
    },
};
shipdata[2] = {
    id: 2,
    name: '岛风',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 28, consumptionID: 'rein_torpedofirepower_star5',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star5',},
        3: { name: '索敌', initvalue: 8, consumptionID: 'rein_scouting_star5',},
        4: { name: '耐久', initvalue: 50, consumptionID: 'rein_health_star5',},
        5: { name: '移速', initvalue: 30, consumptionID: 'rein_movespeed_star5',},
        6: { name: '负重', initvalue: 1, consumptionID: 'rein_costup_star5',},
    },
    activeSkills: {
        1:{ name: '集中雷击?连发', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '萬朶山樱', consumptionID: 'passive_dd_star5',},
        2: { name: '最强驱逐舰', consumptionID: 'passive_dd_star5',},
    },
};
shipdata[3] = {
    id: 3,
    name: '岚',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 25, consumptionID: 'rein_torpedofirepower_star4',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        3: { name: '索敌', initvalue: 6, consumptionID: 'rein_scouting_star4',},
        4: { name: '耐久', initvalue: 47, consumptionID: 'rein_health_star4',},
        5: { name: '炮击', initvalue: 7, consumptionID: 'rein_gunfirepower_star4',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '友军支援优先', consumptionID: 'passive_dd_star4',},
        2: { name: '宛若风暴', consumptionID: 'passive_dd_star4',},
    },
};
shipdata[4] = {
    id: 4,
    name: '白露',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 23, consumptionID: 'rein_torpedofirepower_star3',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        3: { name: '索敌', initvalue: 4, consumptionID: 'rein_scouting_star3',},
        4: { name: '耐久', initvalue: 43, consumptionID: 'rein_health_star3',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '次发装填', consumptionID: 'passive_dd_star3',},
        2: { name: '雷击强化', consumptionID: 'passive_dd_star3',},
    },
};
shipdata[5] = {
    id: 5,
    name: '村雨',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 23, consumptionID: 'rein_torpedofirepower_star3',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        3: { name: '索敌', initvalue: 4, consumptionID: 'rein_scouting_star3',},
        4: { name: '耐久', initvalue: 43, consumptionID: 'rein_health_star3',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '雷击强化', consumptionID: 'passive_dd_star3',},
        2: { name: '敏感的青春期', consumptionID: 'passive_dd_star3',},
    },
};
shipdata[6] = {
    id: 6,
    name: '夕立',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 25, consumptionID: 'rein_torpedofirepower_star4',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        3: { name: '索敌', initvalue: 6, consumptionID: 'rein_scouting_star4',},
        4: { name: '耐久', initvalue: 46, consumptionID: 'rein_health_star4',},
        5: { name: '炮击', initvalue: 7, consumptionID: 'rein_gunfirepower_star4',},
    },
    activeSkills: {
        1:{ name: '散射雷击?乱射', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '所罗门的斗犬', consumptionID: 'passive_dd_star4',},
        2: { name: '野生直觉', consumptionID: 'passive_dd_star4',},
    },
};
shipdata[7] = {
    id: 7,
    name: '吹雪',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 23, consumptionID: 'rein_torpedofirepower_star3',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        3: { name: '索敌', initvalue: 4, consumptionID: 'rein_scouting_star3',},
        4: { name: '耐久', initvalue: 43, consumptionID: 'rein_health_star3',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '特型驱逐舰', consumptionID: 'passive_dd_star3',},
        2: { name: '水雷战队', consumptionID: 'passive_dd_star3',},
    },
};
shipdata[8] = {
    id: 8,
    name: '白雪',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 23, consumptionID: 'rein_torpedofirepower_star3',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        3: { name: '索敌', initvalue: 4, consumptionID: 'rein_scouting_star3',},
        4: { name: '耐久', initvalue: 43, consumptionID: 'rein_health_star3',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '追随姐姐的背影', consumptionID: 'passive_dd_star3',},
        2: { name: '特型驱逐舰', consumptionID: 'passive_dd_star3',},
    },
};
shipdata[14] = {
    id: 14,
    name: '西格斯比',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 23, consumptionID: 'rein_torpedofirepower_star4',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        3: { name: '索敌', initvalue: 6, consumptionID: 'rein_scouting_star4',},
        4: { name: '炮击', initvalue: 7, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '对空', initvalue: 9, consumptionID: 'rein_aa_star4',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '海洋观测', consumptionID: 'passive_dd_star4',},
        2: { name: '友军支援优先', consumptionID: 'passive_dd_star4',},
    },
};
shipdata[15] = {
    id: 15,
    name: '撒切尔',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 23, consumptionID: 'rein_torpedofirepower_star4',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        3: { name: '索敌', initvalue: 6, consumptionID: 'rein_scouting_star4',},
        4: { name: '炮击', initvalue: 7, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '对空', initvalue: 9, consumptionID: 'rein_aa_star4',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '小海狸', consumptionID: 'passive_dd_star4',},
        2: { name: '被动式声呐探测', consumptionID: 'passive_dd_star4',},
    },
};
shipdata[17] = {
    id: 17,
    name: '沙利文',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 23, consumptionID: 'rein_torpedofirepower_star4',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        3: { name: '索敌', initvalue: 6, consumptionID: 'rein_scouting_star4',},
        4: { name: '炮击', initvalue: 7, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '对空', initvalue: 9, consumptionID: 'rein_aa_star4',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '守护英雄之人', consumptionID: 'passive_dd_star4',},
        2: { name: '英灵的庇护', consumptionID: 'passive_dd_star4',},
    },
};
shipdata[22] = {
    id: 22,
    name: '马汉',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 19, consumptionID: 'rein_torpedofirepower_star2',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
        3: { name: '索敌', initvalue: 2, consumptionID: 'rein_scouting_star2',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '雷达扫描', consumptionID: 'passive_dd_star2',},
        2: { name: '火力支援', consumptionID: 'passive_dd_star2',},
    },
};
shipdata[23] = {
    id: 23,
    name: '库欣',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 19, consumptionID: 'rein_torpedofirepower_star2',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
        3: { name: '索敌', initvalue: 2, consumptionID: 'rein_scouting_star2',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '禁止通行', consumptionID: 'passive_dd_star2',},
        2: { name: '铁底湾之魂', consumptionID: 'passive_dd_star2',},
    },
};
shipdata[24] = {
    id: 24,
    name: '波特',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 19, consumptionID: 'rein_torpedofirepower_star2',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
        3: { name: '索敌', initvalue: 2, consumptionID: 'rein_scouting_star2',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '火力支援', consumptionID: 'passive_dd_star2',},
        2: { name: '友军救援', consumptionID: 'passive_dd_star2',},
    },
};
shipdata[26] = {
    id: 26,
    name: '旁遮普',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 22, consumptionID: 'rein_torpedofirepower_star3',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        3: { name: '索敌', initvalue: 4, consumptionID: 'rein_scouting_star3',},
        4: { name: '对空', initvalue: 9, consumptionID: 'rein_aa_star3',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '雷达扫描', consumptionID: 'passive_dd_star3',},
        2: { name: '火力支援', consumptionID: 'passive_dd_star3',},
    },
};
shipdata[27] = {
    id: 27,
    name: 'Z 24',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 21, consumptionID: 'rein_torpedofirepower_star3',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        3: { name: '索敌', initvalue: 4, consumptionID: 'rein_scouting_star3',},
        4: { name: '耐久', initvalue: 44, consumptionID: 'rein_health_star3',},
    },
    activeSkills: {
        1:{ name: '散射雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '睡美人', consumptionID: 'passive_dd_star3',},
        2: { name: '水雷铺设', consumptionID: 'passive_dd_star3',},
    },
};
shipdata[28] = {
    id: 28,
    name: 'Z 28',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 21, consumptionID: 'rein_torpedofirepower_star3',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        3: { name: '索敌', initvalue: 4, consumptionID: 'rein_scouting_star3',},
        4: { name: '耐久', initvalue: 44, consumptionID: 'rein_health_star3',},
    },
    activeSkills: {
        1:{ name: '散射雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '跳马作战', consumptionID: 'passive_dd_star3',},
        2: { name: '不成熟的冲动', consumptionID: 'passive_dd_star3',},
    },
};
shipdata[30] = {
    id: 30,
    name: 'Z 21',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 20, consumptionID: 'rein_torpedofirepower_star2',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
        3: { name: '索敌', initvalue: 2, consumptionID: 'rein_scouting_star2',},
    },
    activeSkills: {
        1:{ name: '散射雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: 'Z之印', consumptionID: 'passive_dd_star2',},
        2: { name: '水雷铺设', consumptionID: 'passive_dd_star2',},
    },
};
shipdata[32] = {
    id: 32,
    name: 'Z 16',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 20, consumptionID: 'rein_torpedofirepower_star2',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
        3: { name: '索敌', initvalue: 2, consumptionID: 'rein_scouting_star2',},
    },
    activeSkills: {
        1:{ name: '散射雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '水雷铺设', consumptionID: 'passive_dd_star2',},
        2: { name: '破交行动·驱逐舰', consumptionID: 'passive_dd_star2',},
    },
};
shipdata[37] = {
    id: 37,
    name: '安东尼奥·达·诺利',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 22, consumptionID: 'rein_torpedofirepower_star3',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        3: { name: '索敌', initvalue: 4, consumptionID: 'rein_scouting_star3',},
        4: { name: '炮击', initvalue: 6, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '水雷铺设', consumptionID: 'passive_dd_star3',},
        2: { name: '友军救援', consumptionID: 'passive_dd_star3',},
    },
};
shipdata[38] = {
    id: 38,
    name: '乌戈利尼·维瓦尔迪',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 22, consumptionID: 'rein_torpedofirepower_star3',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        3: { name: '索敌', initvalue: 4, consumptionID: 'rein_scouting_star3',},
        4: { name: '炮击', initvalue: 6, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '任性的本意', consumptionID: 'passive_dd_star3',},
        2: { name: '宛如阵风', consumptionID: 'passive_dd_star3',},
    },
};
shipdata[39] = {
    id: 39,
    name: '空想',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 25, consumptionID: 'rein_torpedofirepower_star5',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star5',},
        3: { name: '索敌', initvalue: 8, consumptionID: 'rein_scouting_star5',},
        4: { name: '炮击', initvalue: 8, consumptionID: 'rein_gunfirepower_star5',},
        5: { name: '负重', initvalue: 1, consumptionID: 'rein_costup_star5',},
        6: { name: '耐久', initvalue: 52, consumptionID: 'rein_health_star5',},
    },
    activeSkills: {
        1:{ name: '集中雷击?机炮扫射', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '猫捉老鼠', consumptionID: 'passive_dd_star5',},
        2: { name: '最速幻想', consumptionID: 'passive_dd_star5',},
    },
};
shipdata[46] = {
    id: 46,
    name: '仁淀',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 11, consumptionID: 'rein_scouting_star5',},
        2: { name: '对空', initvalue: 26, consumptionID: 'rein_aa_star5',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star5',},
        4: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star5',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star5',},
        6: { name: '耐久', initvalue: 62, consumptionID: 'rein_health_star5',},
    },
    activeSkills: {
        1:{ name: '乱射', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '窈窕教官', consumptionID: 'passive_clca_star5',},
        2: { name: '战况把握', consumptionID: 'passive_clca_star5',},
    },
};
shipdata[47] = {
    id: 47,
    name: '夕张',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 9, consumptionID: 'rein_scouting_star4',},
        2: { name: '对空', initvalue: 23, consumptionID: 'rein_aa_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '雷击', initvalue: 12, consumptionID: 'rein_torpedofirepower_star4',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
    },
    activeSkills: {
        1:{ name: '散射雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '疯狂科学家', consumptionID: 'passive_clca_star4',},
        2: { name: '一体化水平装甲', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[48] = {
    id: 48,
    name: '天龙',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 5, consumptionID: 'rein_scouting_star2',},
        2: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '散射雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '火力支援', consumptionID: 'passive_clca_star2',},
        2: { name: '驱逐队旗舰', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[49] = {
    id: 49,
    name: '龙田',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 5, consumptionID: 'rein_scouting_star2',},
        2: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '散射雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '舰队护卫', consumptionID: 'passive_clca_star2',},
        2: { name: '第十一水雷战队', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[51] = {
    id: 51,
    name: '法戈',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 11, consumptionID: 'rein_scouting_star5',},
        2: { name: '对空', initvalue: 26, consumptionID: 'rein_aa_star5',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star5',},
        4: { name: '炮击', initvalue: 9, consumptionID: 'rein_gunfirepower_star5',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star5',},
        6: { name: '耐久', initvalue: 67, consumptionID: 'rein_health_star5',},
    },
    activeSkills: {
        1:{ name: '乱射', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '小巧干练', consumptionID: 'passive_clca_star5',},
        2: { name: '财政恶魔', consumptionID: 'passive_clca_star5',},
    },
};
shipdata[52] = {
    id: 52,
    name: '亚特兰大',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 9, consumptionID: 'rein_scouting_star4',},
        2: { name: '对空', initvalue: 25, consumptionID: 'rein_aa_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '炮击', initvalue: 8, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
    },
    activeSkills: {
        1:{ name: '乱射?散射雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '防空巡洋舰', consumptionID: 'passive_clca_star4',},
        2: { name: '英雄的斗志', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[53] = {
    id: 53,
    name: '朱诺',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 7, consumptionID: 'rein_scouting_star3',},
        2: { name: '对空', initvalue: 24, consumptionID: 'rein_aa_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '炮击', initvalue: 8, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '乱射?散射雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '五兄弟', consumptionID: 'passive_clca_star3',},
        2: { name: '天空的劫火', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[54] = {
    id: 54,
    name: '圣地亚哥',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 7, consumptionID: 'rein_scouting_star3',},
        2: { name: '对空', initvalue: 24, consumptionID: 'rein_aa_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '炮击', initvalue: 8, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '乱射?散射雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '功勋舰', consumptionID: 'passive_clca_star3',},
        2: { name: '对空援护', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[55] = {
    id: 55,
    name: '圣胡安',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 7, consumptionID: 'rein_scouting_star3',},
        2: { name: '对空', initvalue: 24, consumptionID: 'rein_aa_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '炮击', initvalue: 8, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '乱射?散射雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '实现目标', consumptionID: 'passive_clca_star3',},
        2: { name: '要帮助大家啊！', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[58] = {
    id: 58,
    name: '海伦娜',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 9, consumptionID: 'rein_scouting_star4',},
        2: { name: '对空', initvalue: 25, consumptionID: 'rein_aa_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '炮击', initvalue: 8, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
    },
    activeSkills: {
        1:{ name: '乱射', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '情报分析', consumptionID: 'passive_clca_star4',},
        2: { name: '新型索敌雷达', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[59] = {
    id: 59,
    name: '布鲁克林',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 7, consumptionID: 'rein_scouting_star3',},
        2: { name: '对空', initvalue: 24, consumptionID: 'rein_aa_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '炮击', initvalue: 8, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '乱射', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '救援家', consumptionID: 'passive_clca_star3',},
        2: { name: '艺术爱好者', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[60] = {
    id: 60,
    name: '奥马哈',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 5, consumptionID: 'rein_scouting_star2',},
        2: { name: '对空', initvalue: 21, consumptionID: 'rein_aa_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '集中雷击?机炮扫射', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: 'Ms.巡逻员', consumptionID: 'passive_clca_star2',},
        2: { name: '警备队长', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[62] = {
    id: 62,
    name: '林仙',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 5, consumptionID: 'rein_scouting_star2',},
        2: { name: '对空', initvalue: 21, consumptionID: 'rein_aa_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '散射雷击?穿甲乱射', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '月光守护', consumptionID: 'passive_clca_star2',},
        2: { name: '舰队护卫', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[69] = {
    id: 69,
    name: '莱比锡',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 7, consumptionID: 'rein_scouting_star3',},
        2: { name: '对空', initvalue: 22, consumptionID: 'rein_aa_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '炮击', initvalue: 7, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '集中雷击?穿甲速射', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '舰队训练', consumptionID: 'passive_clca_star3',},
        2: { name: '对空机枪', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[70] = {
    id: 70,
    name: '纽伦堡',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 7, consumptionID: 'rein_scouting_star3',},
        2: { name: '对空', initvalue: 22, consumptionID: 'rein_aa_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '炮击', initvalue: 7, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '集中雷击?穿甲速射', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '水雷铺设', consumptionID: 'passive_clca_star3',},
        2: { name: '舰队训练', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[71] = {
    id: 71,
    name: '柯尼斯堡',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 5, consumptionID: 'rein_scouting_star2',},
        2: { name: '对空', initvalue: 20, consumptionID: 'rein_aa_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '散射雷击?穿甲乱射', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '破交行动·巡洋舰', consumptionID: 'passive_clca_star2',},
        2: { name: '威瑟演习行动', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[72] = {
    id: 72,
    name: '卡尔斯鲁厄',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 5, consumptionID: 'rein_scouting_star2',},
        2: { name: '对空', initvalue: 20, consumptionID: 'rein_aa_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '散射雷击?穿甲乱射', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '战术家的骄傲', consumptionID: 'passive_clca_star2',},
        2: { name: '方略就是力量', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[73] = {
    id: 73,
    name: '科隆',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 5, consumptionID: 'rein_scouting_star2',},
        2: { name: '对空', initvalue: 20, consumptionID: 'rein_aa_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '散射雷击?穿甲乱射', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '舰队训练', consumptionID: 'passive_clca_star2',},
        2: { name: '威瑟演习行动', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[75] = {
    id: 75,
    name: '高尔基',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 9, consumptionID: 'rein_scouting_star4',},
        2: { name: '对空', initvalue: 24, consumptionID: 'rein_aa_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '炮击', initvalue: 9, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
    },
    activeSkills: {
        1:{ name: '穿甲乱射?散射雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '海燕之歌', consumptionID: 'passive_clca_star4',},
        2: { name: '文豪之魂', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[77] = {
    id: 77,
    name: '摩尔曼斯克',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 5, consumptionID: 'rein_scouting_star2',},
        2: { name: '对空', initvalue: 21, consumptionID: 'rein_aa_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '集中雷击?机炮扫射', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '舰队护卫', consumptionID: 'passive_clca_star2',},
        2: { name: '友军救援', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[78] = {
    id: 78,
    name: '德格拉斯',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 11, consumptionID: 'rein_scouting_star5',},
        2: { name: '对空', initvalue: 28, consumptionID: 'rein_aa_star5',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star5',},
        4: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star5',},
        5: { name: '炮击', initvalue: 9, consumptionID: 'rein_gunfirepower_star5',},
        6: { name: '耐久', initvalue: 63, consumptionID: 'rein_health_star5',},
    },
    activeSkills: {
        1:{ name: '乱射?集中雷击', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '抵抗组织', consumptionID: 'passive_clca_star5',},
        2: { name: '忘我的秘书舰', consumptionID: 'passive_clca_star5',},
    },
};
shipdata[83] = {
    id: 83,
    name: '宁海',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 5, consumptionID: 'rein_scouting_star2',},
        2: { name: '对空', initvalue: 20, consumptionID: 'rein_aa_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '散射雷击?穿甲乱射', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '对空援护', consumptionID: 'passive_clca_star2',},
        2: { name: '舰队训练', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[87] = {
    id: 87,
    name: '最上',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 77, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 11, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '对空', initvalue: 20, consumptionID: 'rein_aa_star4',},
        4: { name: '雷击', initvalue: 12, consumptionID: 'rein_torpedofirepower_star4',},
        5: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
    },
    activeSkills: {
        1:{ name: '顺次射击?集中雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '多面手', consumptionID: 'passive_clca_star4',},
        2: { name: '超远距鱼雷', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[88] = {
    id: 88,
    name: '三隈',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 71, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star3',},
        4: { name: '雷击', initvalue: 11, consumptionID: 'rein_torpedofirepower_star3',},
    },
    activeSkills: {
        1:{ name: '顺次射击?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '巡洋舰杀手', consumptionID: 'passive_clca_star3',},
        2: { name: '我将给予敌人最后一击', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[89] = {
    id: 89,
    name: '铃谷',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 71, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star3',},
        4: { name: '雷击', initvalue: 11, consumptionID: 'rein_torpedofirepower_star3',},
    },
    activeSkills: {
        1:{ name: '顺次射击?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '火力支援', consumptionID: 'passive_clca_star3',},
        2: { name: '再装填', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[90] = {
    id: 90,
    name: '熊野',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 71, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star3',},
        4: { name: '雷击', initvalue: 11, consumptionID: 'rein_torpedofirepower_star3',},
    },
    activeSkills: {
        1:{ name: '顺次射击?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '思念亲人', consumptionID: 'passive_clca_star3',},
        2: { name: '明日的归心', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[91] = {
    id: 91,
    name: '高雄',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 71, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star3',},
        4: { name: '雷击', initvalue: 11, consumptionID: 'rein_torpedofirepower_star3',},
    },
    activeSkills: {
        1:{ name: '高速扫射?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '鱼雷再装填', consumptionID: 'passive_clca_star3',},
        2: { name: '领航舰', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[92] = {
    id: 92,
    name: '爱宕',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 71, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star3',},
        4: { name: '雷击', initvalue: 11, consumptionID: 'rein_torpedofirepower_star3',},
    },
    activeSkills: {
        1:{ name: '高速扫射?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '舰队训练', consumptionID: 'passive_clca_star3',},
        2: { name: '爱宕信仰', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[96] = {
    id: 96,
    name: '青叶',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 65, consumptionID: 'rein_health_star2',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star2',},
        3: { name: '对空', initvalue: 17, consumptionID: 'rein_aa_star2',},
    },
    activeSkills: {
        1:{ name: '齐射?散射雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '重巡特攻', consumptionID: 'passive_clca_star2',},
        2: { name: '我是青叶', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[97] = {
    id: 97,
    name: '衣笠',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 65, consumptionID: 'rein_health_star2',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star2',},
        3: { name: '对空', initvalue: 17, consumptionID: 'rein_aa_star2',},
    },
    activeSkills: {
        1:{ name: '高速扫射?散射雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '火力支援', consumptionID: 'passive_clca_star2',},
        2: { name: '所罗门之魂', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[98] = {
    id: 98,
    name: '古鹰',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 64, consumptionID: 'rein_health_star2',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star2',},
        3: { name: '对空', initvalue: 17, consumptionID: 'rein_aa_star2',},
    },
    activeSkills: {
        1:{ name: '齐射?散射雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '分类A', consumptionID: 'passive_clca_star2',},
        2: { name: '最后的供奉舰(古鹰)', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[99] = {
    id: 99,
    name: '加古',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 64, consumptionID: 'rein_health_star2',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star2',},
        3: { name: '对空', initvalue: 17, consumptionID: 'rein_aa_star2',},
    },
    activeSkills: {
        1:{ name: '高速扫射?散射雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '水族馆', consumptionID: 'passive_clca_star2',},
        2: { name: '最后的供奉舰(加古)', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[100] = {
    id: 100,
    name: '得梅因',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 84, consumptionID: 'rein_health_star5',},
        2: { name: '炮击', initvalue: 12, consumptionID: 'rein_gunfirepower_star5',},
        3: { name: '对空', initvalue: 24, consumptionID: 'rein_aa_star5',},
        4: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star5',},
        5: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star5',},
        6: { name: '负重', initvalue: 1, consumptionID: 'rein_costup_star5',},
    },
    activeSkills: {
        1:{ name: '穿甲弹速射', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '豪放的大姐头', consumptionID: 'passive_clca_star5',},
        2: { name: '超高速自动装填', consumptionID: 'passive_clca_star5',},
    },
};
shipdata[102] = {
    id: 102,
    name: '梅肯',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 76, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 11, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '对空', initvalue: 22, consumptionID: 'rein_aa_star4',},
        4: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
        5: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
    },
    activeSkills: {
        1:{ name: '高速扫射', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '王子的预言', consumptionID: 'passive_clca_star4',},
        2: { name: '为大家献上祝福', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[106] = {
    id: 106,
    name: '旧金山',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 76, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 11, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '对空', initvalue: 21, consumptionID: 'rein_aa_star4',},
        4: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
        5: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
    },
    activeSkills: {
        1:{ name: '榴弹速射', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '冰山美人', consumptionID: 'passive_clca_star4',},
        2: { name: '雷达捕捉', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[107] = {
    id: 107,
    name: '昆西',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 76, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 11, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '对空', initvalue: 21, consumptionID: 'rein_aa_star4',},
        4: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
        5: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
    },
    activeSkills: {
        1:{ name: '顺次射击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '第四舰队的偶像', consumptionID: 'passive_clca_star4',},
        2: { name: '重巡特攻', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[113] = {
    id: 113,
    name: '彭萨科拉',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 65, consumptionID: 'rein_health_star2',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star2',},
        3: { name: '对空', initvalue: 18, consumptionID: 'rein_aa_star2',},
    },
    activeSkills: {
        1:{ name: '高速扫射', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '火力支援', consumptionID: 'passive_clca_star2',},
        2: { name: '灰色幽灵', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[117] = {
    id: 117,
    name: '诺福克',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 76, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 11, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '对空', initvalue: 21, consumptionID: 'rein_aa_star4',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        5: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
    },
    activeSkills: {
        1:{ name: '穿甲速射?集中雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '跟踪狂！', consumptionID: 'passive_clca_star4',},
        2: { name: '我的世界', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[118] = {
    id: 118,
    name: '伦敦',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 64, consumptionID: 'rein_health_star2',},
        2: { name: '炮击', initvalue: 9, consumptionID: 'rein_gunfirepower_star2',},
        3: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star2',},
    },
    activeSkills: {
        1:{ name: '穿甲速射?集中雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '舰队护卫', consumptionID: 'passive_clca_star2',},
        2: { name: '过度击穿', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[119] = {
    id: 119,
    name: '肯特',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 63, consumptionID: 'rein_health_star2',},
        2: { name: '炮击', initvalue: 9, consumptionID: 'rein_gunfirepower_star2',},
        3: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star2',},
    },
    activeSkills: {
        1:{ name: '穿甲速射?集中雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '过度击穿', consumptionID: 'passive_clca_star2',},
        2: { name: '吉祥物行动', consumptionID: 'passive_clca_star2',},
    },
};
shipdata[121] = {
    id: 121,
    name: '希佩尔海军上将',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 74, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star3',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star3',},
    },
    activeSkills: {
        1:{ name: '穿甲速射?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '内线搏杀', consumptionID: 'passive_clca_star3',},
        2: { name: '战斗大师', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[122] = {
    id: 122,
    name: '布吕歇尔',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 74, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 10, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '对空', initvalue: 19, consumptionID: 'rein_aa_star3',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star3',},
    },
    activeSkills: {
        1:{ name: '穿甲速射?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '无所畏惧', consumptionID: 'passive_clca_star3',},
        2: { name: '迷之自信', consumptionID: 'passive_clca_star3',},
    },
};
shipdata[125] = {
    id: 125,
    name: '金刚',
    shiptypeid: 4,
    shiptypename: '战巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '炮击', initvalue: 20, consumptionID: 'rein_gunfirepower_star3',},
        2: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击?暴击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '高速战列舰', consumptionID: 'passive_bbbc_star3',},
        2: { name: '头脑派', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[126] = {
    id: 126,
    name: '比叡',
    shiptypeid: 4,
    shiptypename: '战巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '炮击', initvalue: 20, consumptionID: 'rein_gunfirepower_star3',},
        2: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击?暴击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '顽强的胆小者', consumptionID: 'passive_bbbc_star3',},
        2: { name: '高速战列舰', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[127] = {
    id: 127,
    name: '榛名',
    shiptypeid: 4,
    shiptypename: '战巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '炮击', initvalue: 20, consumptionID: 'rein_gunfirepower_star3',},
        2: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击?暴击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '高速战列舰', consumptionID: 'passive_bbbc_star3',},
        2: { name: '未来的基石', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[128] = {
    id: 128,
    name: '雾岛',
    shiptypeid: 4,
    shiptypename: '战巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '炮击', initvalue: 20, consumptionID: 'rein_gunfirepower_star3',},
        2: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击?暴击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '第三次所罗门海战', consumptionID: 'passive_bbbc_star3',},
        2: { name: '高速战列舰', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[131] = {
    id: 131,
    name: '胡德',
    shiptypeid: 4,
    shiptypename: '战巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '炮击', initvalue: 22, consumptionID: 'rein_gunfirepower_star4',},
        2: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
        5: { name: '耐久', initvalue: 87, consumptionID: 'rein_health_star4',},
    },
    activeSkills: {
        1:{ name: '精准射击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: 'HMS的荣光', consumptionID: 'passive_bbbc_star4',},
        2: { name: '帝国巡游', consumptionID: 'passive_bbbc_star4',},
    },
};
shipdata[132] = {
    id: 132,
    name: '声望',
    shiptypeid: 4,
    shiptypename: '战巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '炮击', initvalue: 19, consumptionID: 'rein_gunfirepower_star3',},
        2: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '29节的纳尔逊', consumptionID: 'passive_bbbc_star3',},
        2: { name: '最后的荣光', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[136] = {
    id: 136,
    name: '克劳塞维茨',
    shiptypeid: 4,
    shiptypename: '战巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '炮击', initvalue: 21, consumptionID: 'rein_gunfirepower_star4',},
        2: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '耐久', initvalue: 93, consumptionID: 'rein_health_star4',},
        5: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
    },
    activeSkills: {
        1:{ name: '精准射击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '战争论', consumptionID: 'passive_bbbc_star4',},
        2: { name: '战时补给', consumptionID: 'passive_bbbc_star4',},
    },
};
shipdata[139] = {
    id: 139,
    name: '毛奇',
    shiptypeid: 4,
    shiptypename: '战巡',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '炮击', initvalue: 19, consumptionID: 'rein_gunfirepower_star3',},
        2: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '耐久', initvalue: 83, consumptionID: 'rein_health_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '最优的忧愁', consumptionID: 'passive_bbbc_star3',},
        2: { name: '未出鞘之剑', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[141] = {
    id: 141,
    name: '长门',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 98, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 22, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star4',},
        4: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
        5: { name: '水抗', initvalue: 40, consumptionID: 'rein_flooddef_star4',},
    },
    activeSkills: {
        1:{ name: '贯穿射击?极', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: 'Big Seven', consumptionID: 'passive_bbbc_star4',},
        2: { name: '人体平衡仪', consumptionID: 'passive_bbbc_star4',},
    },
};
shipdata[145] = {
    id: 145,
    name: '扶桑',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 92, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 20, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star3',},
        4: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '观测设计', consumptionID: 'passive_bbbc_star3',},
        2: { name: '柱岛舰队', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[147] = {
    id: 147,
    name: '密苏里',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 108, consumptionID: 'rein_health_star5',},
        2: { name: '炮击', initvalue: 24, consumptionID: 'rein_gunfirepower_star5',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star5',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star5',},
        5: { name: '火抗', initvalue: 40, consumptionID: 'rein_burndef_star5',},
        6: { name: '负重', initvalue: 1, consumptionID: 'rein_costup_star5',},
    },
    activeSkills: {
        1:{ name: '贯穿射击?极', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: 'Mighty Beast', consumptionID: 'passive_bbbc_star5',},
        2: { name: '最后的调停者', consumptionID: 'passive_bbbc_star5',},
    },
};
shipdata[152] = {
    id: 152,
    name: '田纳西',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 92, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 20, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star3',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '最后的T字战', consumptionID: 'passive_bbbc_star3',},
        2: { name: '苏里高复仇者', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[153] = {
    id: 153,
    name: '加利福尼亚',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 92, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 20, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star3',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '苏里高复仇者', consumptionID: 'passive_bbbc_star3',},
        2: { name: '炮术E', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[154] = {
    id: 154,
    name: '狮',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 106, consumptionID: 'rein_health_star5',},
        2: { name: '炮击', initvalue: 24, consumptionID: 'rein_gunfirepower_star5',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star5',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star5',},
        5: { name: '水抗', initvalue: 40, consumptionID: 'rein_flooddef_star5',},
        6: { name: '移速', initvalue: 30, consumptionID: 'rein_movespeed_star5',},
    },
    activeSkills: {
        1:{ name: '贯穿射击', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '光荣之狮', consumptionID: 'passive_bbbc_star5',},
        2: { name: '炮弹防御', consumptionID: 'passive_bbbc_star5',},
    },
};
shipdata[157] = {
    id: 157,
    name: '威尔士亲王',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 99, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 21, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star4',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        5: { name: '水抗', initvalue: 40, consumptionID: 'rein_flooddef_star4',},
    },
    activeSkills: {
        1:{ name: '贯穿射击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '大西洋宪章', consumptionID: 'passive_bbbc_star4',},
        2: { name: 'Force Z', consumptionID: 'passive_bbbc_star4',},
    },
};
shipdata[159] = {
    id: 159,
    name: '纳尔逊',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 100, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 22, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star4',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        5: { name: '水抗', initvalue: 40, consumptionID: 'rein_flooddef_star4',},
    },
    activeSkills: {
        1:{ name: '精准射击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '英式笑话', consumptionID: 'passive_bbbc_star4',},
        2: { name: 'Big Seven', consumptionID: 'passive_bbbc_star4',},
    },
};
shipdata[160] = {
    id: 160,
    name: '罗德尼',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 100, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 22, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star4',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        5: { name: '水抗', initvalue: 40, consumptionID: 'rein_flooddef_star4',},
    },
    activeSkills: {
        1:{ name: '贯穿射击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: 'Big Seven', consumptionID: 'passive_bbbc_star4',},
        2: { name: '复仇', consumptionID: 'passive_bbbc_star4',},
    },
};
shipdata[164] = {
    id: 164,
    name: '兴登堡',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 114, consumptionID: 'rein_health_star5',},
        2: { name: '炮击', initvalue: 24, consumptionID: 'rein_gunfirepower_star5',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star5',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star5',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star5',},
        6: { name: '水抗', initvalue: 40, consumptionID: 'rein_flooddef_star5',},
    },
    activeSkills: {
        1:{ name: '贯穿射击?极', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '冷酷队长', consumptionID: 'passive_bbbc_star5',},
        2: { name: '羁绊', consumptionID: 'passive_bbbc_star5',},
    },
};
shipdata[165] = {
    id: 165,
    name: '俾斯麦',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 104, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 22, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star4',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
    },
    activeSkills: {
        1:{ name: '贯穿射击?极', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '不沉战舰', consumptionID: 'passive_bbbc_star4',},
        2: { name: '旗舰杀手', consumptionID: 'passive_bbbc_star4',},
    },
};
shipdata[166] = {
    id: 166,
    name: '提尔比茨',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 104, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 21, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star4',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
    },
    activeSkills: {
        1:{ name: '贯穿射击?极', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '北海的孤独女王', consumptionID: 'passive_bbbc_star4',},
        2: { name: '存在舰队', consumptionID: 'passive_bbbc_star4',},
    },
};
shipdata[167] = {
    id: 167,
    name: '德意志',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 73, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 18, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star3',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '袖珍战列舰的骄傲', consumptionID: 'passive_bbbc_star3',},
        2: { name: '破交行动·战列舰', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[168] = {
    id: 168,
    name: '舍尔海军上将',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 73, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 18, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star3',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '高分得主', consumptionID: 'passive_bbbc_star3',},
        2: { name: '小小猎手', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[169] = {
    id: 169,
    name: '斯佩伯爵海军上将',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 73, consumptionID: 'rein_health_star3',},
        2: { name: '炮击', initvalue: 18, consumptionID: 'rein_gunfirepower_star3',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star3',},
        4: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star3',},
    },
    activeSkills: {
        1:{ name: '精准射击?集中雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '拉普拉塔海战', consumptionID: 'passive_bbbc_star3',},
        2: { name: '苦涩的决断', consumptionID: 'passive_bbbc_star3',},
    },
};
shipdata[170] = {
    id: 170,
    name: '阿尔萨斯',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 107, consumptionID: 'rein_health_star5',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star5',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star5',},
        4: { name: '炮击', initvalue: 23, consumptionID: 'rein_gunfirepower_star5',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star5',},
        6: { name: '移速', initvalue: 30, consumptionID: 'rein_movespeed_star5',},
    },
    activeSkills: {
        1:{ name: '贯穿射击', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '精密射击', consumptionID: 'passive_bbbc_star5',},
        2: { name: '精锐部队', consumptionID: 'passive_bbbc_star5',},
    },
};
shipdata[171] = {
    id: 171,
    name: '黎塞留',
    shiptypeid: 5,
    shiptypename: '战列',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 93, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 22, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star4',},
        4: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
        5: { name: '火抗', initvalue: 40, consumptionID: 'rein_burndef_star4',},
    },
    activeSkills: {
        1:{ name: '贯穿射击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '坚定的精神', consumptionID: 'passive_bbbc_star4',},
        2: { name: '胸甲骑兵', consumptionID: 'passive_bbbc_star4',},
    },
};
shipdata[178] = {
    id: 178,
    name: '隼鹰',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 60, consumptionID: 'rein_health_star3',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '舰攻', initvalue: 22, consumptionID: 'rein_torpedofirepower_star3',},
    },
    activeSkills: {
        1:{ name: '集束雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '孤独的奋战者', consumptionID: 'passive_cv_star3',},
        2: { name: '支援复兴的客船', consumptionID: 'passive_cv_star3',},
    },
};
shipdata[181] = {
    id: 181,
    name: '龙骧',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 60, consumptionID: 'rein_health_star3',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '舰攻', initvalue: 21, consumptionID: 'rein_torpedofirepower_star3',},
    },
    activeSkills: {
        1:{ name: '集束雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '魔鬼教官', consumptionID: 'passive_cv_star3',},
        2: { name: '老兵的智慧', consumptionID: 'passive_cv_star3',},
    },
};
shipdata[184] = {
    id: 184,
    name: '凤翔',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 55, consumptionID: 'rein_health_star2',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '地毯式雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '开端与终焉的见证人', consumptionID: 'passive_cv_star2',},
        2: { name: '海军航空兵的摇篮', consumptionID: 'passive_cv_star2',},
    },
};
shipdata[186] = {
    id: 186,
    name: '瓜达卡纳尔',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 57, consumptionID: 'rein_health_star2',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '地毯式轰炸', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: 'PUC', consumptionID: 'passive_cv_star2',},
        2: { name: '钓鱼达人', consumptionID: 'passive_cv_star2',},
    },
};
shipdata[188] = {
    id: 188,
    name: '兰利',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 54, consumptionID: 'rein_health_star2',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '地毯式轰炸', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '头顶的闪光', consumptionID: 'passive_cv_star2',},
        2: { name: '流浪的探险家', consumptionID: 'passive_cv_star2',},
    },
};
shipdata[190] = {
    id: 190,
    name: '独角兽',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 59, consumptionID: 'rein_health_star3',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '舰攻', initvalue: 21, consumptionID: 'rein_torpedofirepower_star3',},
    },
    activeSkills: {
        1:{ name: '集束雷击', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '花园的守护者', consumptionID: 'passive_cv_star3',},
        2: { name: '竖琴之音', consumptionID: 'passive_cv_star3',},
    },
};
shipdata[192] = {
    id: 192,
    name: '百眼巨人',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 2,
    reinforcementGroupNum: 3,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 53, consumptionID: 'rein_health_star2',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star2',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star2',},
    },
    activeSkills: {
        1:{ name: '集束雷击', consumptionID: 'act_star2', },
    },
    passiveSkills: {
        1: { name: '平板身材', consumptionID: 'passive_cv_star2',},
        2: { name: '针线盒', consumptionID: 'passive_cv_star2',},
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
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star5',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star5',},
        4: { name: '舰攻', initvalue: 25, consumptionID: 'rein_torpedofirepower_star5',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star5',},
        6: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star5',},
    },
    activeSkills: {
        1:{ name: '远距集束雷击', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '海上补给', consumptionID: 'passive_cv_star5',},
        2: { name: '海上要塞', consumptionID: 'passive_cv_star5',},
    },
};
shipdata[195] = {
    id: 195,
    name: '信浓',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 99, consumptionID: 'rein_health_star5',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star5',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star5',},
        4: { name: '舰攻', initvalue: 22, consumptionID: 'rein_torpedofirepower_star5',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star5',},
        6: { name: '韧性', initvalue: 10, consumptionID: 'rein_critdef_star5',},
    },
    activeSkills: {
        1:{ name: '远距集束雷击', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '心如止水', consumptionID: 'passive_cv_star5',},
        2: { name: '奇思妙想', consumptionID: 'passive_cv_star5',},
    },
};
shipdata[199] = {
    id: 199,
    name: '赤城',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 63, consumptionID: 'rein_health_star4',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '舰攻', initvalue: 22, consumptionID: 'rein_torpedofirepower_star4',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
    },
    activeSkills: {
        1:{ name: '远距地毯式雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '一心一意的教导', consumptionID: 'passive_cv_star4',},
        2: { name: '奇袭的心得', consumptionID: 'passive_cv_star4',},
    },
};
shipdata[200] = {
    id: 200,
    name: '加贺',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 64, consumptionID: 'rein_health_star4',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '舰攻', initvalue: 22, consumptionID: 'rein_torpedofirepower_star4',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
    },
    activeSkills: {
        1:{ name: '远距地毯式雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '一心一意的心得', consumptionID: 'passive_cv_star4',},
        2: { name: '佐雍得尝', consumptionID: 'passive_cv_star4',},
    },
};
shipdata[203] = {
    id: 203,
    name: '埃塞克斯',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 64, consumptionID: 'rein_health_star4',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '舰爆', initvalue: 23, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
    },
    activeSkills: {
        1:{ name: '远距地毯式轰炸', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: 'VF-15的王牌', consumptionID: 'passive_cv_star4',},
        2: { name: '猎鸟的航空管制术', consumptionID: 'passive_cv_star4',},
    },
};
shipdata[204] = {
    id: 204,
    name: '复仇',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 64, consumptionID: 'rein_health_star4',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '舰爆', initvalue: 23, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
    },
    activeSkills: {
        1:{ name: '远距地毯式轰炸', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '复仇之炎', consumptionID: 'passive_cv_star4',},
        2: { name: '蛇的忠告', consumptionID: 'passive_cv_star4',},
    },
};
shipdata[205] = {
    id: 205,
    name: '卡伯特',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 70, consumptionID: 'rein_health_star5',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star5',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star5',},
        4: { name: '舰爆', initvalue: 25, consumptionID: 'rein_gunfirepower_star5',},
        5: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star5',},
        6: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star5',},
    },
    activeSkills: {
        1:{ name: '远距地毯式轰炸', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '蓝色幽灵', consumptionID: 'passive_cv_star5',},
        2: { name: '复仇者', consumptionID: 'passive_cv_star5',},
    },
};
shipdata[207] = {
    id: 207,
    name: '黄蜂',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 59, consumptionID: 'rein_health_star3',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '舰爆', initvalue: 21, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '远距机群突袭', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: '狂蜂', consumptionID: 'passive_cv_star3',},
        2: { name: '女王蜂的教诲', consumptionID: 'passive_cv_star3',},
    },
};
shipdata[208] = {
    id: 208,
    name: '列克星敦',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 63, consumptionID: 'rein_health_star4',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '舰爆', initvalue: 22, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
    },
    activeSkills: {
        1:{ name: '远距地毯式轰炸', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: 'Lady Lex', consumptionID: 'passive_cv_star4',},
        2: { name: '航空战术先驱者', consumptionID: 'passive_cv_star4',},
    },
};
shipdata[209] = {
    id: 209,
    name: '萨拉托加',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 63, consumptionID: 'rein_health_star4',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '舰爆', initvalue: 22, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
    },
    activeSkills: {
        1:{ name: '远距地毯式轰炸', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '航空战术先驱者', consumptionID: 'passive_cv_star4',},
        2: { name: 'Sister Sara', consumptionID: 'passive_cv_star4',},
    },
};
shipdata[212] = {
    id: 212,
    name: '贝亚恩',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 3,
    reinforcementGroupNum: 4,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 58, consumptionID: 'rein_health_star3',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star3',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star3',},
        4: { name: '舰爆', initvalue: 19, consumptionID: 'rein_gunfirepower_star3',},
    },
    activeSkills: {
        1:{ name: '远距地毯式轰炸', consumptionID: 'act_star3', },
    },
    passiveSkills: {
        1: { name: 'un pour tous', consumptionID: 'passive_cv_star3',},
        2: { name: 'tous pour un', consumptionID: 'passive_cv_star3',},
    },
};
shipdata[213] = {
    id: 213,
    name: '帝国',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 67, consumptionID: 'rein_health_star4',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '舰爆', initvalue: 20, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
    },
    activeSkills: {
        1:{ name: '远距地毯式轰炸', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '帝国十字', consumptionID: 'passive_cv_star4',},
        2: { name: 'Big Sister', consumptionID: 'passive_cv_star4',},
    },
};
shipdata[214] = {
    id: 214,
    name: '光荣',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 9, consumptionID: 'rein_scouting_star4',},
        2: { name: '对空', initvalue: 23, consumptionID: 'rein_aa_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '攻速', initvalue: 10, consumptionID: 'rein_atkspeed_star4',},
        5: { name: '炮击', initvalue: 8, consumptionID: 'rein_gunfirepower_star4',},
    },
    activeSkills: {
        1:{ name: '乱射?集中雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '黑白条纹', consumptionID: 'passive_clca_star4',},
        2: { name: '心无旁骛', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[217] = {
    id: 217,
    name: '克利奥帕特拉',
    shiptypeid: 2,
    shiptypename: '轻巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '索敌', initvalue: 9, consumptionID: 'rein_scouting_star4',},
        2: { name: '对空', initvalue: 26, consumptionID: 'rein_aa_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        5: { name: '炮击', initvalue: 8, consumptionID: 'rein_gunfirepower_star4',},
    },
    activeSkills: {
        1:{ name: '集中雷击?机炮扫射', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '心存荣耀', consumptionID: 'passive_clca_star4',},
        2: { name: '先驱者', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[219] = {
    id: 219,
    name: '多塞特郡',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 76, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 11, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '对空', initvalue: 21, consumptionID: 'rein_aa_star4',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        5: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
    },
    activeSkills: {
        1:{ name: '穿甲速射?集中雷击', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '莱茵切断', consumptionID: 'passive_clca_star4',},
        2: { name: '苦心劳形', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[220] = {
    id: 220,
    name: '滩风',
    shiptypeid: 1,
    shiptypename: '驱逐',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '雷击', initvalue: 28, consumptionID: 'rein_torpedofirepower_star5',},
        2: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star5',},
        3: { name: '索敌', initvalue: 8, consumptionID: 'rein_scouting_star5',},
        4: { name: '耐久', initvalue: 50, consumptionID: 'rein_health_star5',},
        5: { name: '移速', initvalue: 30, consumptionID: 'rein_movespeed_star5',},
        6: { name: '负重', initvalue: 1, consumptionID: 'rein_costup_star5',},
    },
    activeSkills: {
        1:{ name: '集中雷击?连发', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '风之子', consumptionID: 'passive_dd_star5',},
        2: { name: '雪色之心', consumptionID: 'passive_dd_star5',},
    },
};
shipdata[221] = {
    id: 221,
    name: '鞍马',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 5,
    reinforcementGroupNum: 6,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 82, consumptionID: 'rein_health_star5',},
        2: { name: '炮击', initvalue: 12, consumptionID: 'rein_gunfirepower_star5',},
        3: { name: '对空', initvalue: 23, consumptionID: 'rein_aa_star5',},
        4: { name: '雷击', initvalue: 13, consumptionID: 'rein_torpedofirepower_star5',},
        5: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star5',},
        6: { name: '移速', initvalue: 30, consumptionID: 'rein_movespeed_star5',},
    },
    activeSkills: {
        1:{ name: '顺次射击?集中雷击', consumptionID: 'act_star5', },
    },
    passiveSkills: {
        1: { name: '怕热体质', consumptionID: 'passive_clca_star5',},
        2: { name: '隐藏的力量', consumptionID: 'passive_clca_star5',},
    },
};
shipdata[223] = {
    id: 223,
    name: '什罗普郡',
    shiptypeid: 3,
    shiptypename: '重巡',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 76, consumptionID: 'rein_health_star4',},
        2: { name: '炮击', initvalue: 11, consumptionID: 'rein_gunfirepower_star4',},
        3: { name: '对空', initvalue: 22, consumptionID: 'rein_aa_star4',},
        4: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        5: { name: '暴击', initvalue: 10, consumptionID: 'rein_critcorrection_star4',},
    },
    activeSkills: {
        1:{ name: '高爆弹速射', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '红色蔷薇', consumptionID: 'passive_clca_star4',},
        2: { name: 'Your Maid', consumptionID: 'passive_clca_star4',},
    },
};
shipdata[240] = {
    id: 240,
    name: '突击者',
    shiptypeid: 6,
    shiptypename: '航母',
    shipstars: 4,
    reinforcementGroupNum: 5,
    reinforcementGroups: {
        1: { name: '耐久', initvalue: 63, consumptionID: 'rein_health_star4',},
        2: { name: '命中', initvalue: 10, consumptionID: 'rein_accuracycorrection_star4',},
        3: { name: '闪避', initvalue: 10, consumptionID: 'rein_evdcorrection_star4',},
        4: { name: '舰爆', initvalue: 22, consumptionID: 'rein_gunfirepower_star4',},
        5: { name: '水抗', initvalue: 40, consumptionID: 'rein_flooddef_star4',},
    },
    activeSkills: {
        1:{ name: '远距地毯式轰炸', consumptionID: 'act_star4', },
    },
    passiveSkills: {
        1: { name: '战场应援团', consumptionID: 'passive_cv_star4',},
        2: { name: '死而后已', consumptionID: 'passive_cv_star4',},
    },
};
