var SteamCommunity = require("steamcommunity");
var SteamTotp = require("steam-totp");
var fs = require("fs");
var client = new SteamCommunity(this.options);
//var code = SteamTotp.generateAuthCode('myshared secret');
var logOnOptions = {
    "accountName": "",
    "password": "",
    //"twoFactorCode": code
    //"twoFactorCode": ""
};
change_avatar();
function change_avatar() {
    console.log("Logging into Steam...");
    client.login(logOnOptions, function(err, sessionID, cookies, steamguard) {
        if (err) {
            console.log("We have an error: " + err);
        }

        //console.log("We logged in with " + logOnOptions.accountName);
        client.loggedIn(function(err, loggedIn) {
            if (err) {
                console.log("An error occured");
            }
            console.log("Logged In! " + loggedIn);

            const adjectives = ["alive", "better", "careful", "clever", "dead", "easy", "famous", "gifted", "hallowed", "helpful", "important", "inexpensive", "mealy", "mushy", "odd", "poor", "powerful", "rich", "shy", "tender", "unimportant", "uninterested", "vast", "wrong", "aggressive", "agreeable", "ambitious", "brave", "calm", "delightful", "eager", "faithful", "gentle", "happy", "jolly", "kind", "lively", "nice", "obedient", "polite", "proud", "silly", "thankful", "victorious", "witty", "wonderful", "zealous", "able", "abnormal", "above average", "absent-minded", "adventurous", "affectionate", "agile", "agreeable", "alert", "amazing", "ambitious", "amiable", "amusing", "analytical", "angelic", "apathetic", "apprehensive", "ardent", "artificial", "artistic", "assertive", "attentive", "average", "awesome", "awful", "balanced", "beautiful", "below average", "beneficent", "blue", "blunt", "boisterous", "brave", "bright", "brilliant", "buff", "callous", "candid", "cantankerous", "capable", "careful", "careless", "caustic", "cautious", "charming", "cheerful", "chic", "childish", "childlike", "churlish", "circumspect", "civil", "clean", "clever", "clumsy", "coherent", "cold", "competent", "composed", "conceited", "condescending", "confident", "confused", "conscientious", "considerate", "content", "cool", "cool-headed", "cooperative", "cordial", "courageous", "cowardly", "crabby", "crafty", "cranky", "crass", "critical", "cruel", "curious", "cynical", "dainty", "decisive", "deep", "deferential", "deft", "delicate", "delightful", "demonic", "demure", "dependent", "depressed", "devoted", "dextrous", "diligent", "direct", "dirty", "disagreeable", "discerning", "discreet", "disruptive", "distant", "distraught", "distrustful", "dowdy", "dramatic", "dreary", "drowsy", "drugged", "drunk", "dull", "dutiful", "eager", "earnest", "easy-going", "efficient", "egotistical", "elfin", "emotional", "energetic", "enterprising", "enthusiastic", "evasive", "even-tempered", "exacting", "excellent", "excitable", "experienced", "fabulous", "fastidious", "ferocious", "fervent", "fiery", "flabby", "flaky", "flashy", "frank", "friendly", "funny", "fussy", "generous", "gentle", "gloomy", "gluttonous", "good", "grave", "great", "groggy", "grouchy", "guarded", "hateful", "hearty", "helpful", "hesitant", "hot-headed", "hypercritical", "hysterical", "idiotic", "idle", "illogical", "imaginative", "immature", "immodest", "impatient", "imperturbable", "impetuous", "impractical", "impressionable", "impressive", "impulsive", "inactive", "incisive", "incompetent", "inconsiderate", "inconsistent", "indefatigable", "independent", "indiscreet", "indolent", "industrious", "inexperienced", "insensitive", "inspiring", "intelligent", "interesting", "intolerant", "inventive", "irascible", "irritable", "irritating", "jocular", "jovial", "joyous", "judgmental", "keen", "kind", "lame", "lazy", "lean", "leery", "lethargic", "level-headed", "listless", "lithe", "lively", "local", "logical", "long-winded", "lovable", "love-lorn", "lovely", "maternal", "mature", "mean", "meddlesome", "mercurial", "methodical", "meticulous", "mild", "miserable", "modest", "moronic", "morose", "motivated", "musical", "naive", "nasty", "natural", "naughty", "negative", "nervous", "noisy", "normal", "nosy", "numb", "obliging", "obnoxious", "old-fashioned", "one-sided", "orderly", "ostentatious", "outgoing", "outspoken", "passionate", "passive", "paternal", "paternalistic", "patient", "peaceful", "peevish", "pensive", "persevering", "persnickety", "petulant", "picky", "plain", "plain-speaking", "playful", "pleasant", "plucky", "polite", "popular", "positive", "powerful", "practical", "prejudiced", "pretty", "proficient", "proud", "provocative", "prudent", "punctual", "quarrelsome", "querulous", "quick", "quick-tempered", "quiet", "realistic", "reassuring", "reclusive", "reliable", "reluctant", "resentful", "reserved", "resigned", "resourceful", "respected", "respectful", "responsible", "restless", "revered", "ridiculous", "sad", "sassy", "saucy", "sedate", "self-assured", "selfish", "sensible", "sensitive", "sentimental", "serene", "serious", "sharp", "short-tempered", "shrewd", "shy", "silly", "sincere", "sleepy", "slight", "sloppy", "slothful", "slovenly", "slow", "smart", "snazzy", "sneering", "snobby", "sober", "somber", "sophisticated", "soulful", "soulless", "sour", "spirited", "spiteful", "stable", "staid", "steady", "stern", "stoic", "striking", "strong", "stupid", "sturdy", "subtle", "sulky", "sullen", "supercilious", "superficial", "surly", "suspicious", "sweet", "tactful", "tactless", "talented", "testy", "thinking", "thoughtful", "thoughtless", "timid", "tired", "tolerant", "touchy", "tranquil", "ugly", "unaffected", "unbalanced", "uncertain", "uncooperative", "undependable", "unemotional", "unfriendly", "unguarded", "unhelpful", "unimaginative", "unmotivated", "unpleasant", "unpopular", "unreliable", "unsophisticated", "unstable", "unsure", "unthinking", "unwilling", "venal", "versatile", "vigilant", "volcanic", "vulnerable", "warm", "warmhearted", "wary", "watchful", "weak", "well-behaved", "well-developed", "well-intentioned", "well-respected", "well-rounded", "willing", "wonderful", "zealous", "adaptable", "adventurous", "affectionate", "ambitious", "amiable", "compassionate", "considerate", "courageous", "courteous", "diligent", "empathetic", "exuberant", "frank", "generous", "gregarious", "impartial", "intuitive", "inventive", "passionate", "persistent", "philosophical", "practical", "rational", "reliable", "resourceful", "sensible", "sincere", "sympathetic", "unassuming", "witty", "affectionate", "agreeable", "amiable", "bright", "charming", "creative", "determined", "energetic", "friendly", "funny", "generous", "imaginative", "polite", "likable", "gregarious", "diplomatic", "sincere", "helpful", "giving", "kind", "hardworking", "diligent", "patient", "dynamic", "loyal", "brave", "self-confident", "sensible", "sincere", "thoughtful", "warmhearted", "willing", "proficient", "romantic", "powerful", "persistent", "passionate", "loving", "faithful", "nice", "optimistic", "plucky", "philosophical", "humorous", "frank", "fearless", "considerate", "courageous", "marvelous", "capable", "accomplished", "knowledgeable", "adept", "expert", "engaging", "amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "gorgeous", "incredible", "unique", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "rousing", "spectacular", "splendid", "stellar", "stupendous", "super", "upbeat", "stunning", "wondrous", "ample", "bountiful", "glistening", "dazzling", "twinkling", "lustrous", "vivid", "vibrant", "vivacious", "glowing", "gleaming", "sparkling", "shimmering", "glimmering", "glittering", "brilliant", "elegant", "sleek", "alluring", "enchanting", "ravishing", "magnificent", "captivating", "lovely", "glowing", "flexible", "independent", "insightful", "open-minded", "productive", "adventurous", "articulate", "charismatic", "competitive", "confident", "devoted", "educated", "inquisitive", "organized", "relaxed", "responsible", "technological", "resourceful", "ambitious", "approachable", "qualified", "focused", "honest", "efficient", "personable", "indefatigable"]

            const random = Math.floor(Math.random() * adjectives.length);
            console.log("[NEW NAME] SEED: " + random + "\n[NEW NAME] WORD: " + adjectives[random]);

            var steamprofilesttngs = {
                "name": "Killa is " + adjectives[random],
            };
            client.editProfile(steamprofilesttngs, function(err) {
                if (err) {
                    console.log(err);
                }
            });
            // client.uploadAvatar('https://i.imgur.com/huA0EwD.png', function(err) {
            //     if (err) {
            //         console.log(err);
            //     }


            // });
        });
    });
};
