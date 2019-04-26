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
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 15, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 15, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 40, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 30, rankD: 30, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 40, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 15, rankC: 50, rankD: 30, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 75, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 20, }, //防御元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 30, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 75, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 20, rankD: 20, }, //防御元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 0, rankB: 45, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 0, rankA: 15, rankB: 0, rankC: 0, rankD: 75, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 45, rankD: 20, }, //防御元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 0, rankB: 45, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 0, rankA: 15, rankB: 0, rankC: 25, rankD: 75, }, //扩张元件
        5: { rankS: 0, rankA: 15, rankB: 20, rankC: 45, rankD: 20, }, //防御元件
    },
    9:{ //等级9
        1: { rankS: 15, rankA: 0, rankB: 65, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 0, rankA: 15, rankB: 0, rankC: 25, rankD: 75, }, //扩张元件
        5: { rankS: 0, rankA: 30, rankB: 20, rankC: 45, rankD: 20, }, //防御元件
    },
    10:{ //等级10
        1: { rankS: 15, rankA: 0, rankB: 65, rankC: 50, rankD: 70, }, //火力元件
        4: { rankS: 15, rankA: 15, rankB: 20, rankC: 25, rankD: 75, }, //扩张元件
        5: { rankS: 0, rankA: 50, rankB: 20, rankC: 45, rankD: 20, }, //防御元件
    },
};
consumptionItemList['reinforcementGroups']['rein_aa_star4'] = { //四星船对空强化消耗元件
    0:{ //等级0
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    }, //填入的数值为累加值
    1:{ //等级1
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    2:{ //等级2
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    3:{ //等级3
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    4:{ //等级4
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    5:{ //等级5
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    6:{ //等级6
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    7:{ //等级7
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    8:{ //等级8
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    9:{ //等级9
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
    10:{ //等级10
        1: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //火力元件
        4: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //扩张元件
        5: { rankS: 0, rankA: 0, rankB: 0, rankC: 0, rankD: 0, }, //防御元件
    },
};

//NP消耗
consumptionItemList['common']['rein_health_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船耐久强化消耗NP
consumptionItemList['common']['rein_health_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船耐久强化消耗NP
consumptionItemList['common']['rein_health_star3'] = consumptionItemList['common']['Common_NP_star3']; //四星船耐久强化消耗NP
consumptionItemList['common']['rein_health_star2'] = consumptionItemList['common']['Common_NP_star2']; //四星船耐久强化消耗NP
consumptionItemList['common']['rein_gunfirepower_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船炮击舰爆强化消耗NP
consumptionItemList['common']['rein_gunfirepower_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船炮击舰爆强化消耗NP
consumptionItemList['common']['rein_gunfirepower_star3'] = consumptionItemList['common']['Common_NP_star3']; //三星船炮击舰爆强化消耗NP
consumptionItemList['common']['rein_gunfirepower_star2'] = consumptionItemList['common']['Common_NP_star2']; //二星船炮击舰爆强化消耗NP
consumptionItemList['common']['rein_torpedofirepower_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船鱼雷舰攻强化消耗NP
consumptionItemList['common']['rein_torpedofirepower_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船鱼雷舰攻强化消耗NP
consumptionItemList['common']['rein_torpedofirepower_star3'] = consumptionItemList['common']['Common_NP_star3']; //五星船鱼雷舰攻强化消耗NP
consumptionItemList['common']['rein_torpedofirepower_star2'] = consumptionItemList['common']['Common_NP_star2']; //四星船鱼雷舰攻强化消耗NP
consumptionItemList['common']['rein_aa_star5'] = consumptionItemList['common']['Common_NP_star5']; //五星船对空强化消耗NP
consumptionItemList['common']['rein_aa_star4'] = consumptionItemList['common']['Common_NP_star4']; //四星船对空强化消耗NP


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
consumptionItemList['activeSkills']['act_star4'] = consumptionItemList['activeSkills']['act_star5']; //四星船主动技能消耗
consumptionItemList['activeSkills']['act_star3'] = consumptionItemList['activeSkills']['act_star5']; //三星船主动技能消耗
consumptionItemList['activeSkills']['act_star2'] = consumptionItemList['activeSkills']['act_star5']; //二星船主动技能消耗

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
            4: { name: '炮击', initvalue: 9, consumptionID: 'rein_gunfirepower_star5',},
            5: { name: '攻速', initvalue: 10, consumptionID: '0',},
            6: { name: '耐久', initvalue: 67, consumptionID: 'rein_health_star5',},
        },
        activeSkills: {
            1: { name: '乱射', consumptionID: 'act_star5', },
        },
        passiveSkills: {
            1: { name: '小巧干练', consumptionID: 'passive_clca_star5', },
            2: { name: '财政恶魔', consumptionID: 'passive_clca_star5', },
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
            4: { name: '舰攻', initvalue: 25, consumptionID: 'rein_torpedofirepower_star5',},
            5: { name: '攻速', initvalue: 10, consumptionID: '0',},
            6: { name: '韧性', initvalue: 10, consumptionID: '0',},
        },
        activeSkills: {
            1: { name: '远距集束雷击', consumptionID: 'act_star5',},
        },
        passiveSkills: {
            1: { name: '海上补给', consumptionID: 'passive_cv_star5',},
            2: { name: '海上要塞', consumptionID: 'passive_cv_star5',},
        },
};