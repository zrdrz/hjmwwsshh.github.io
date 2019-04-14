var searchtype = {
    id: "ID",
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
var shiptypeid = {
    0: '无',
    1: '驱逐',
    2: '轻巡',
    3: '重巡',
    4: '战巡',
    5: '战列',
    6: '航母',
};
var shipstars = {
    0: '无',
    2: '2星',
    3: '3星',
    4: '4星',
    5: '5星',
};
var skilltypeid = {
    1: { typetext: '主动技能' , cost: 'crystal' },
    2: { typetext: '被动技能' , cost: 'NP'},
};
shipdata[51] = {
        id: 51,
        name: '法戈',
        shiptypeid: 2,
        shipstars: 5,
        reinforcementGroupNum: 6,
        reinforcementGroups: {
            1: { name: '索敌强化', initvalue: 11, },
            2: { name: '对空强化', initvalue: 26, },
            3: { name: '闪避强化', initvalue: 10, },
            4: { name: '炮击强化', initvalue: 9, },
            5: { name: '攻速强化', initvalue: 10, },
            6: { name: '耐久强化', initvalue: 67, },
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
        shipstars: 5,
        reinforcementGroupNum: 6,
        reinforcementGroups: {
            1: { name: '耐久强化', initvalue: 71, },
            2: { name: '命中强化', initvalue: 10, },
            3: { name: '闪避强化', initvalue: 10, },
            4: { name: '舰攻火力强化', initvalue: 25, },
            5: { name: '攻速强化', initvalue: 10, },
            6: { name: '韧性强化', initvalue: 10, },
        },
        skills: {
            1: { name: '远距集束雷击', skilltypeid: 1, },
            2: { name: '海上补给', skilltypeid: 2, },
            3: { name: '海上要塞', skilltypeid: 2, },
        },
};