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
var shipdata = {};

var skilltypeid = {
    1: { typetext: '主动技能' , cost: 'crystal' },
    2: { typetext: '被动技能' , cost: 'NP'},
};
shipdata[51] = {
        id: 51,
        name: '法戈',
        shiptypeid: 2,
        shiptypename: '轻巡',
        shipstars: 5,
        reinforcementGroupNum: 6,
        reinforcementGroups: {
            1: { name: '索敌', initvalue: 11, },
            2: { name: '对空', initvalue: 26, },
            3: { name: '闪避', initvalue: 10, },
            4: { name: '炮击', initvalue: 9, },
            5: { name: '攻速', initvalue: 10, },
            6: { name: '耐久', initvalue: 67, },
        },
        skills: {
            1: { name: '乱射', skilltypeid: 1, },
            2: { name: '小巧干练', skilltypeid: 2, },
            3: { name: '财政恶魔', skilltypeid: 2, },
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
            1: { name: '耐久', initvalue: 71, },
            2: { name: '命中', initvalue: 10, },
            3: { name: '闪避', initvalue: 10, },
            4: { name: '舰攻', initvalue: 25, },
            5: { name: '攻速', initvalue: 10, },
            6: { name: '韧性', initvalue: 10, },
        },
        skills: {
            1: { name: '远距集束雷击', skilltypeid: 1, },
            2: { name: '海上补给', skilltypeid: 2, },
            3: { name: '海上要塞', skilltypeid: 2, },
        },
};