
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
            "Greetings.",
            "I am the inventor of these two potions.",
            "The red one will replenish your health points...",
            "The orange one will turn you into a firefox and make you invincible...",
            "But it only lasts for a short while.",
            "So make good use of it!",
            "Now if you'll excuse me, I need to get back to my experiments..."
        ],
    
        "nyan": [
            "nyan nyan nyan nyan nyan",
            "nyan nyan nyan nyan nyan nyan nyan",
            "nyan nyan nyan nyan nyan nyan",
            "nyan nyan nyan nyan nyan nyan nyan nyan"
        ],
        
        "beachnpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],
        
        "forestnpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],
        
        "desertnpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],
        
        "lavanpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],
    
        "priest": [
            "Oh, hello, young man.",
            "Wisdom is everything, so I'll share a few guidelines with you.",
            "You are free to go wherever you like in this world",
            "but beware of the many foes that await you.",
            "You can find many weapons and armors by killing enemies.",
            "The tougher the enemy, the higher the potential rewards.",
            "You can also unlock achievements by exploring and hunting.",
            "Click on the small cup icon to see a list of all the achievements.",
            "Please stay a while and enjoy the many surprises of BrowserQuest",
            "Farewell, young friend."
        ],
        
        "sorcerer": [
            "Ah... I had foreseen you would come to see me.",
            "Well? How do you like my new staff?",
            "Pretty cool, eh?",
            "Where did I get it, you ask?",
            "I understand. It's easy to get envious.",
            "I actually crafted it myself, using my mad wizard skills.",
            "But let me tell you one thing...",
            "There are lots of items in this game.",
            "Some more powerful than others.",
            "In order to find them, exploration is key.",
            "Good luck."
        ],
        
        "octocat": [
            "欢迎来玩唐唐!",
            "喜欢女仆装?",
        ],
        
        "coder": [
            "Hi! Do you know that you can also play BrowserQuest on your tablet or mobile?",
            "That's the beauty of HTML5!",
            "Give it a try..."
        ],
    
        "beachnpc": [
            "Don't mind me, I'm just here on vacation.",
            "I have to say...",
            "These giant crabs are somewhat annoying.",
            "Could you please get rid of them for me?"
        ],
        
        "desertnpc": [
            "One does not simply walk into these mountains...",
            "An ancient undead lord is said to dwell here.",
            "Nobody knows exactly what he looks like...",
            "...for none has lived to tell the tale.",
            "It's not too late to turn around and go home, kid."
        ],
    
        "othernpc": [
            "lorem ipsum",
            "lorem ipsum"
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