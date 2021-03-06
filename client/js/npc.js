
define(['character'], function(Character) {

    var NpcTalk = {
        "guard": [
            "你好",
            "我昨天去玩唐唐了 好开心 好满足",
            "真的不要钱 别提钱的事",
            "今天要排队 你要预约需要去扫码"
        ],
    
        "king": [
            "你好 我是教授路彦峰",
            "我头发很多",
            "我长得帅 头发多",
            "我跟唐唐是老相好",
            "我会意大利吊灯式",
            "我曾经去日本发展过",
            "我拍的片子 都是最受好评的",
            "我一天没事就打酱油",
            "你知道么 用霸王洗头发能生发",
            "头发少 也是一种炫耀的资本",
            "我就这么骚 你打我呀 你打我呀"
        ],
    
        "villagegirl": [
            "Hi 我叫小洁!",
            "我能歌善舞",
            "周豪不是好东西 整天黑我",
            "刘佳也不是好东西 整天黑我",
            "袁琛更不是好东西",
        ],
    
        "villager": [
            "hi 我是周豪 我壮如牛",
            "别走 晚上吃鸡",
            "昨天又没吃上鸡,都怪正南个垃圾",
            "我睡觉不打呼噜可安静了",
            "我才不喜欢唐唐这个破鞋.",
            "请上天赐我一个精壮的男人阿利亚多",
            "昨天晚上回去被一个人劫色 好满足 好害羞."
        ],
    
        "agent": [
            "我叫刘佳 你干嘛跟我说话",
            "我想请大家吃饭 你同意不",
            "我好骚情 好骚情 好骚情",
            "我昨天买了一个充气娃娃 纯进口的 优秀员工的钱全砸进去了."
        ],
    
        "rick": [
            "hi 我是杨戈 我不缺牙",
            "我从不喝酒 我不会喝酒",
            "唐唐 我每天都要睡 要不我们一起来三P",
            "在游戏里面我是土豪你要充值你给我说 ",
            "我 人傻 人丑 钱多",
            "给你说个秘密 我住在袁琛隔壁",
            "我从来不看小黄片 因为都没有我演的好",
            "来刷抖音",
            "我喜欢大胸妹 和 大胸弟",
            "一见女人哭 我就操了 我也跟着哭",
            "我喜欢别我大的女人 最好15岁以上的那种",
            "西安的按摩场子我熟 报我名字8折"
        ],
        
        "scientist": [
            "Hi 看我帅不 我叫山城.",
            "我擅长耍流氓 我最帅 我最帅.",
            "昨天一个百万富婆想包养我 我应不应该同意呢？",
            "顺便 说一下我旁边有两个药瓶 一个是威哥 一个是印度神油",
            "你要不要试试啊",
            "我到底要不要被包养 。。。。。。。。。。。",
            "别跟我说话 我要好好想想"
        ],
    
        "nyan": [
            "滚滚滚",
            "滚滚滚滚滚滚滚滚滚",
            "滚滚滚",
            "滚滚滚"
        ],
        
        "beachnpc": [
            "我是张鑫锐 ",
            "我想去裸泳 但是XX太大 怕吓到他们"
        ],
        
        "forestnpc": [
            "我是尹鸿钧 我正在找我掉落的鸡鸡",
            "我的鸡鸡快出来"
        ],
        
        "desertnpc": [
            "我是袁琛 1+1*1 = 3",
            "问你一个题 如果我是傻X 那么你是不是傻X"
        ],
        
        "lavanpc": [
            "好热 我是付飞虎 我想脱",
            "明天去相亲 我要好好表现"
        ],
    
        "priest": [
            "我是唐永志 我最近信教.",
            "智慧就是一切.",
            "你看起来胸肌很大啊",
            "你屁股上的肉肉好结实.",
            "人家好喜欢.",
            "明天换个女仆装.",
            "今天的牧师装 都没有汉子来勾搭我.",
            "每次看到杨戈我都流口水.",
            "我觉得周亚雄 也不错",
            "今天晚上到底陪谁呢？."
        ],
        
        "sorcerer": [
            "我是张丹.",
            "来我给你算个命",
            "你的星座不好 你是处男座",
            "你属驴 这个还可以",
            "想算命我来找我啊."
        ],
        
        "octocat": [
            "欢迎来玩唐唐!",
            "喜欢女仆装?",
        ],
        
        "coder": [
            "我是帅哥鲁力源",
            "我是最正常的一个",
            "体验游戏吧 觉得不好也不好给我说 因为我会给你说一个字 “滚”"
        ],
    
        "beachnpc": [
            "我是小敏 我内心是个爷们.",
            "今天晚上想吃鲍鱼",
            "好无聊.",
            "放个屁让你听听？"
        ],
        
        "desertnpc": [
            "My name is 周亚雄",
            "唐唐总是跟我抢男人 我好讨厌他.",
            "其实我暗恋的是小虎",
            "昨天晚上遇到一个女人 她想睡我 我拼命反抗。。。。。。",
            "最后脱掉假发 一看是周豪 我就从了"
        ],
    
        "othernpc": [
            "关系太乱",
            "关系太乱"
        ]
    };

    var Npc = Character.extend({
        init: function(id, kind) {
            this._super(id, kind, 1);
            this.itemKind = Types.getKindAsString(this.kind);
            this.talkCount = NpcTalk[this.itemKind].length;
            this.talkIndex = 0;
        },
    
        talk: function() {
            var msg = null;
        
            if(this.talkIndex > this.talkCount) {
                this.talkIndex = 0;
            }
            if(this.talkIndex < this.talkCount) {
                msg = NpcTalk[this.itemKind][this.talkIndex];
            }
            this.talkIndex += 1;
            
            return msg;
        }
    });
    
    return Npc;
});