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
consumptionItemList['reinforcementGroups']['0'] = {
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
consumptionItemList['common']['0'] = {
    0: {
        1: { normal: 0,}, //NP
    },
    1: {
        1: { normal: 0,},
    },
    2: {
        1: { normal: 0,},
    },
    3: {
        1: { normal: 0,}, 
    },
    4: {
        1: { normal: 0,}, 
    },
    5: {
        1: { normal: 0,}, 
    },
    6: {
        1: { normal: 0,}, 
    },
    7: {
        1: { normal: 0,}, 
    },
    8: {
        1: { normal: 0,}, 
    },
    9: {
        1: { normal: 0,}, 
    },
    10: {
        1: { normal: 0,}, 
    },
};
consumptionItemList['common']['star5'] = {
    0: {
        1: { normal: 0,}, //NP
    },
    1: {
        1: { normal: 80,}, //NP
    },
    2: {
        1: { normal: 160,}, //NP
    },
    3: {
        1: { normal: 320,}, //NP
    },
    4: {
        1: { normal: 560,}, //NP
    },
    5: {
        1: { normal: 960,}, //NP
    },
    6: {
        1: { normal: 1600,}, //NP
    },
    7: {
        1: { normal: 2640,}, //NP
    },
    8: {
        1: { normal: 4320,}, //NP
    },
    9: {
        1: { normal: 7040,}, //NP
    },
    10: {
        1: { normal: 11440,}, //NP
    },
};
consumptionItemList['reinforcementGroups']['health_5'] = { //五星船耐久强化消耗元件
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
consumptionItemList['common']['health_5'] = consumptionItemList['common']['star5'] //五星船耐久强化消耗NP

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
            6: { name: '耐久', initvalue: 67, consumptionID: 'health_5',},
        },
        activeSkills: {
            1: { name: '乱射',  },
        },
        passiveSkills: {
            1: { name: '小巧干练',  },
            2: { name: '财政恶魔',  },
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
            1: { name: '耐久', initvalue: 71, consumptionID: 'health_5',},
            2: { name: '命中', initvalue: 10, consumptionID: '0',},
            3: { name: '闪避', initvalue: 10, consumptionID: '0',},
            4: { name: '舰攻', initvalue: 25, consumptionID: '0',},
            5: { name: '攻速', initvalue: 10, consumptionID: '0',},
            6: { name: '韧性', initvalue: 10, consumptionID: '0',},
        },
        activeSkills: {
            1: { name: '远距集束雷击',  },
        },
        passiveSkills: {
            1: { name: '海上补给',  },
            2: { name: '海上要塞',  },
        },
};