var shipdata = {}
var shiptypeid = {
    1: '驱逐',
    2: '轻巡',
    3: '重巡',
    4: '战巡',
    5: '战列',
    6: '航母',
};
var skilltypeid = {
    1: { typetext: '主动技能' , cost: 'crystal' },
    2: { typetext: '被动技能' , cost: 'NP'},
};
shipdata = {
    194: {
        name: '大凤',
        shiptypeid: 6,
        stars: 5,
        reinforcementGroupNum: 6,
        reinforcementGroups: {
            1: {
                name: '耐久强化',
                initvalue: 71,
            },
            2: {
                name: '命中强化',
                initvalue: 10,
            },
            3: {
                name: '闪避强化',
                initvalue: 10,
            },
            4: {
                name: '舰攻火力强化',
                initvalue: 25,
            },
            5: {
                name: '攻速强化',
                initvalue: 10,
            },
            6: {
                name: '韧性强化',
                initvalue: 10,
            },
        },
        skills: {
            1: {
                name: '远距集束雷击',
                skilltypeid: 1,
            },
            2: {
                name: '海上补给',
                skilltypeid: 2,
            },
            3: {
                name: '海上要塞',
                skilltypeid: 2,
            },
        },
    },

};