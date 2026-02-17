// ==========================================
// SHLOKAS DATA — Bhagavad Gita Verses
// ==========================================

const SHLOKAS = {
    1: [
        {
            id: "1.1", chapter: 1, verse: 1,
            sanskrit: "धृतराष्ट्र उवाच\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥",
            telugu: "ధృతరాష్ట్ర ఉవాచ\nధర్మక్షేత్రే కురుక్షేత్రే సమవేతా యుయుత్సవః।\nమామకాః పాణ్డవాశ్చైవ కిమకుర్వత సఞ్జయ॥",
            transliteration: "dhṛtarāśhtra uvācha\ndharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāśhchaiva kim akurvata sañjaya",
            wordMeanings: [
                { word: "धर्मक्षेत्रे", meaning: "holy field" },
                { word: "कुरुक्षेत्रे", meaning: "Kurukshetra" },
                { word: "समवेताः", meaning: "assembled" },
                { word: "युयुत्सवः", meaning: "desiring to fight" }
            ],
            translation: "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the sacred field of Kurukshetra, eager to fight?",
            storyContext: "The blind king Dhritarashtra asks his advisor Sanjaya about the battlefield. His anxiety reveals his inner conflict — he knows his sons are wrong, yet he supports them.",
            modernInterpretation: "This is the voice of every leader who knows something is wrong but asks 'what happened?' instead of 'what should I do?' It represents the human tendency to seek information while avoiding responsibility.",
            takeaway: "Awareness without action is just anxiety.",
            memoryAid: "Think of a CEO asking 'How's the market?' when they already know their company is heading the wrong direction.",
            realLifeApplication: "When you find yourself constantly asking others for updates instead of taking charge — recognize your inner Dhritarashtra.",
            category: "leadership"
        },
        {
            id: "1.2", chapter: 1, verse: 2,
            sanskrit: "सञ्जय उवाच\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।\nआचार्यमुपसंगम्य राजा वचनमब्रवीत्॥",
            telugu: "సఞ్జయ ఉవాచ\nదృష్ట్వా తు పాణ్డవానీకం వ్యూఢం దుర్యోధనస్తదా।\nఆచార్యముపసంగమ్య రాజా వచనమబ్రవీత్॥",
            transliteration: "sañjaya uvācha\ndṛṣṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā\nāchāryam upasaṅgamya rājā vachanam abravīt",
            wordMeanings: [
                { word: "दृष्ट्वा", meaning: "seeing" },
                { word: "पाण्डवानीकम्", meaning: "Pandava army" },
                { word: "आचार्यम्", meaning: "teacher (Drona)" },
                { word: "राजा", meaning: "king (Duryodhana)" }
            ],
            translation: "Sanjaya said: Seeing the Pandava army arrayed in battle formation, King Duryodhana approached his teacher Dronacharya and spoke these words.",
            storyContext: "Duryodhana sees the Pandava army and immediately runs to his teacher — not for wisdom, but to manipulate him into fighting harder.",
            modernInterpretation: "When insecure people feel threatened, they seek validation from authority figures. Duryodhana doesn't want guidance — he wants reassurance.",
            takeaway: "Insecurity seeks validation, not truth.",
            memoryAid: "Like running to your boss not for advice but to make sure they're still on your side.",
            realLifeApplication: "Notice when you seek someone's opinion only to hear what you already want to hear.",
            category: "anxiety"
        },
        {
            id: "1.3", chapter: 1, verse: 3,
            sanskrit: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्।\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता॥",
            telugu: "పశ్యైతాం పాణ్డుపుత్రాణామాచార్య మహతీం చమూమ్।\nవ్యూఢాం ద్రుపదపుత్రేణ తవ శిష్యేణ ధీమతా॥",
            transliteration: "paśhyaitāṁ pāṇḍu-putrāṇām āchārya mahatīṁ chamūm\nvyūḍhāṁ drupada-putreṇa tava śhiṣhyeṇa dhīmatā",
            wordMeanings: [
                { word: "पश्य", meaning: "behold" },
                { word: "महतीम्", meaning: "great" },
                { word: "चमूम्", meaning: "army" },
                { word: "शिष्येण", meaning: "by your disciple" }
            ],
            translation: "Behold, O Teacher, this mighty army of the sons of Pandu, arranged in formation by your own intelligent disciple, the son of Drupada.",
            storyContext: "Duryodhana cleverly reminds Drona that the opposing army commander was trained by Drona himself — a subtle emotional manipulation.",
            modernInterpretation: "This is passive-aggressive communication at its finest. Instead of directly asking for help, Duryodhana guilt-trips his teacher.",
            takeaway: "Manipulation reveals weakness, not strength.",
            memoryAid: "Like telling your mentor: 'The competitor who's beating us? Yeah, YOU trained them.'",
            realLifeApplication: "When you catch yourself guilt-tripping someone into helping you, pause and ask directly instead.",
            category: "leadership"
        },
        {
            id: "1.4", chapter: 1, verse: 4,
            sanskrit: "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि।\nयुयुधानो विराटश्च द्रुपदश्च महारथः॥",
            telugu: "అత్ర శూరా మహేష్వాసా భీమార్జునసమా యుధి।\nయుయుధానో విరాటశ్చ ద్రుపదశ్చ మహారథః॥",
            transliteration: "atra śhūrā maheṣhvāsā bhīmārjuna-samā yudhi\nyuyudhāno virāṭaśhcha drupadaśhcha mahā-rathaḥ",
            wordMeanings: [
                { word: "शूराः", meaning: "heroes" },
                { word: "महेष्वासाः", meaning: "mighty bowmen" },
                { word: "भीमार्जुनसमाः", meaning: "equal to Bhima and Arjuna" }
            ],
            translation: "Here are heroes and mighty archers equal in battle to Bhima and Arjuna — great warriors like Yuyudhana, Virata, and Drupada.",
            storyContext: "Duryodhana begins listing enemy warriors to alarm Drona and motivate his army through fear of the enemy's strength.",
            modernInterpretation: "When we feel threatened, we often obsessively catalog our competitors' strengths. This is born from insecurity, not strategy.",
            takeaway: "Obsessing over others' strengths reveals your own insecurity.",
            memoryAid: "Like scrolling through a competitor's LinkedIn profile at 2 AM.",
            realLifeApplication: "Stop comparing yourself to others' highlight reels. Focus on your own preparation instead.",
            category: "anxiety"
        },
        {
            id: "1.5", chapter: 1, verse: 5,
            sanskrit: "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्।\nपुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः॥",
            telugu: "ధృష్టకేతుశ్చేకితానః కాశిరాజశ్చ వీర్యవాన్।\nపురుజిత్కుంతిభోజశ్చ శైబ్యశ్చ నరపుంగవః॥",
            transliteration: "dhṛṣṭaketuśh chekitānaḥ kāśhirājaśh cha vīryavān\npurujit kuntibhojaśh cha śhaibyaśh cha nara-puṅgavaḥ",
            wordMeanings: [
                { word: "वीर्यवान्", meaning: "valiant" },
                { word: "नरपुङ्गवः", meaning: "best among men" }
            ],
            translation: "There are also valiant warriors like Dhrishtaketu, Chekitana, the brave King of Kashi, Purujit, Kuntibhoja, and Shaibya — all great among men.",
            storyContext: "Duryodhana continues his anxious listing of enemy warriors, revealing his growing nervousness.",
            modernInterpretation: "Anxiety makes us see threats everywhere. The more you list your problems, the bigger they seem.",
            takeaway: "Anxiety multiplies when you feed it with attention.",
            memoryAid: "Making a list of everything that could go wrong before a presentation — it only makes the fear worse.",
            realLifeApplication: "When anxiety spirals, stop listing problems and start listing solutions.",
            category: "anxiety"
        },
        {
            id: "1.6", chapter: 1, verse: 6,
            sanskrit: "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान्।\nसौभद्रो द्रौपदेयाश्च सर्व एव महारथाः॥",
            telugu: "యుధామన్యుశ్చ విక్రాంత ఉత్తమౌజాశ్చ వీర్యవాన్।\nసౌభద్రో ద్రౌపదేయాశ్చ సర్వ ఏవ మహారథాః॥",
            transliteration: "yudhāmanyuśh cha vikrānta uttamaujāśh cha vīryavān\nsaubhadro draupadeyāśhcha sarva eva mahā-rathāḥ",
            wordMeanings: [
                { word: "विक्रान्तः", meaning: "courageous" },
                { word: "सर्वे", meaning: "all" },
                { word: "महारथाः", meaning: "great warriors" }
            ],
            translation: "And there are courageous Yudhamanyu, valiant Uttamauja, the son of Subhadra, and the sons of Draupadi — all great chariot warriors.",
            storyContext: "The listing continues — Duryodhana even mentions the younger generation of warriors, showing how deep his fear runs.",
            modernInterpretation: "When fear takes hold, even small threats look enormous. Duryodhana is catastrophizing.",
            takeaway: "Fear makes you overestimate every threat.",
            memoryAid: "Like worrying about every junior colleague who might outperform you someday.",
            realLifeApplication: "Recognize when you're catastrophizing and bring your focus back to what you can control.",
            category: "anxiety"
        },
        {
            id: "1.7", chapter: 1, verse: 7,
            sanskrit: "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम।\nनायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते॥",
            telugu: "అస్మాకం తు విశిష్టా యే తాన్నిబోధ ద్విజోత్తమ।\nనాయకా మమ సైన్యస్య సంజ్ఞార్థం తాన్బ్రవీమి తే॥",
            transliteration: "asmākaṁ tu viśhiṣṭā ye tān nibodha dvijottama\nnāyakā mama sainyasya sanjñārthaṁ tān bravīmi te",
            wordMeanings: [
                { word: "अस्माकम्", meaning: "our" },
                { word: "विशिष्टाः", meaning: "distinguished" },
                { word: "नायकाः", meaning: "leaders" },
                { word: "सैन्यस्य", meaning: "of the army" }
            ],
            translation: "But hear also about the distinguished commanders on our side, O best of Brahmins. I name them for your information.",
            storyContext: "After listing enemy warriors, Duryodhana now tries to boost morale by listing his own commanders — but the desperation is clear.",
            modernInterpretation: "After worrying about the competition, we often reassure ourselves by counting our own resources — but anxiety has already set the tone.",
            takeaway: "Confidence built on comparison is fragile.",
            memoryAid: "Like saying 'But WE have good people too!' after a 10-minute panic about competitors.",
            realLifeApplication: "Build confidence on your values and preparation, not on comparison with others.",
            category: "leadership"
        },
        {
            id: "1.8", chapter: 1, verse: 8,
            sanskrit: "भवान्भीष्मश्च कर्णश्च कृपश्च समितिंजयः।\nअश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च॥",
            telugu: "భవాన్భీష్మశ్చ కర్ణశ్చ కృపశ్చ సమితింజయః।\nఅశ్వత్థామా వికర్ణశ్చ సౌమదత్తిస్తథైవ చ॥",
            transliteration: "bhavān bhīṣhmaśhcha karṇaśhcha kṛipaśhcha samitiñjayaḥ\naśhvatthāmā vikarṇaśhcha saumadattis tathaiva cha",
            wordMeanings: [
                { word: "भवान्", meaning: "yourself" },
                { word: "समितिंजयः", meaning: "always victorious in battle" }
            ],
            translation: "There are yourself, Bhishma, Karna, and the ever-victorious Kripa — also Ashvatthama, Vikarna, and the son of Somadatta.",
            storyContext: "Duryodhana names his top warriors, placing Drona first to flatter him.",
            modernInterpretation: "Flattery is a tool of the insecure. Placing your mentor's name first in a list is classic politics.",
            takeaway: "True respect doesn't need a performance.",
            memoryAid: "Like cc-ing your boss first in every email to stay in their good graces.",
            realLifeApplication: "Show genuine respect through actions, not strategic name-dropping.",
            category: "leadership"
        },
        {
            id: "1.9", chapter: 1, verse: 9,
            sanskrit: "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः।\nनानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः॥",
            telugu: "అన్యే చ బహవః శూరా మదర్థే త్యక్తజీవితాః।\nనానాశస్త్రప్రహరణాః సర్వే యుద్ధవిశారదాః॥",
            transliteration: "anye cha bahavaḥ śhūrā mad-arthe tyakta-jīvitāḥ\nnānā-śhastra-praharaṇāḥ sarve yuddha-viśhāradāḥ",
            wordMeanings: [
                { word: "बहवः", meaning: "many" },
                { word: "शूराः", meaning: "heroes" },
                { word: "त्यक्तजीविताः", meaning: "prepared to die" },
                { word: "युद्धविशारदाः", meaning: "skilled in war" }
            ],
            translation: "And many other heroes are prepared to lay down their lives for my sake, armed with various weapons and skilled in warfare.",
            storyContext: "Duryodhana boasts that people are willing to die for him — confusing loyalty with devotion.",
            modernInterpretation: "Toxic leaders measure loyalty by sacrifice. 'They'd die for me' isn't leadership — it's ego.",
            takeaway: "True leadership inspires growth, not sacrifice.",
            memoryAid: "'My team works overtime every day for me!' — That's not loyalty, that's dysfunction.",
            realLifeApplication: "If people around you are burning out for your cause, rethink your leadership style.",
            category: "leadership"
        },
        {
            id: "1.10", chapter: 1, verse: 10,
            sanskrit: "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम्।\nपर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम्॥",
            telugu: "అపర్యాప్తం తదస్మాకం బలం భీష్మాభిరక్షితమ్।\nపర్యాప్తం త్విదమేతేషాం బలం భీమాభిరక్షితమ్॥",
            transliteration: "aparyāptaṁ tad asmākaṁ balaṁ bhīṣhmābhirakṣhitam\nparyāptaṁ tv idam eteṣhāṁ balaṁ bhīmābhirakṣhitam",
            wordMeanings: [
                { word: "अपर्याप्तम्", meaning: "unlimited/insufficient" },
                { word: "बलम्", meaning: "strength" },
                { word: "अभिरक्षितम्", meaning: "protected by" }
            ],
            translation: "Our army, protected by Bhishma, is unlimited, while their army, protected by Bhima, is limited.",
            storyContext: "A verse of deliberate ambiguity — Duryodhana claims his army is stronger, but the Sanskrit can also mean the opposite. His words betray his doubt.",
            modernInterpretation: "Overconfident statements often mask deep insecurity. 'We're definitely going to win' usually means 'I'm terrified we might lose.'",
            takeaway: "Over-confidence is fear wearing a mask.",
            memoryAid: "The loudest person in the room is usually the most insecure.",
            realLifeApplication: "When you catch yourself over-selling your position, pause and examine the fear beneath it.",
            category: "anxiety"
        }
    ],
    // Chapter 1 continues with verses 11-47
    // For brevity, including key representative shlokas

    2: [
        {
            id: "2.1", chapter: 2, verse: 1,
            sanskrit: "सञ्जय उवाच\nतं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम्।\nविषीदन्तमिदं वाक्यमुवाच मधुसूदनः॥",
            telugu: "సఞ్జయ ఉవాచ\nతం తథా కృపయావిష్టమశ్రుపూర్ణాకులేక్షణమ్।\nవిషీదన్తమిదం వాక్యమువాచ మధుసూదనః॥",
            transliteration: "sañjaya uvācha\ntaṁ tathā kṛipayāviṣhṭam aśhru-pūrṇākulekṣhaṇam\nviṣhīdantam idaṁ vākyam uvācha madhusūdanaḥ",
            wordMeanings: [
                { word: "कृपया", meaning: "with compassion/pity" },
                { word: "आविष्टम्", meaning: "overwhelmed" },
                { word: "अश्रुपूर्ण", meaning: "full of tears" },
                { word: "विषीदन्तम्", meaning: "despondent" }
            ],
            translation: "Sanjaya said: Seeing Arjuna overwhelmed with pity, eyes filled with tears, and despondent, Krishna spoke these words.",
            storyContext: "The turning point. Arjuna has collapsed in grief, and now Krishna — friend, mentor, the Divine itself — steps in. The greatest teaching in history is about to begin.",
            modernInterpretation: "Every breakdown can become a breakthrough. The moment you hit rock bottom is often when the most important lessons arrive.",
            takeaway: "Your lowest moment can be the door to your greatest wisdom.",
            memoryAid: "Rock bottom became the solid foundation on which I rebuilt my life. — J.K. Rowling",
            realLifeApplication: "In your darkest hour, stay open to guidance. The teacher appears when the student is ready.",
            category: "anxiety"
        },
        {
            id: "2.2", chapter: 2, verse: 2,
            sanskrit: "श्रीभगवानुवाच\nकुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्।\nअनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन॥",
            telugu: "శ్రీభగవానువాచ\nకుతస్త్వా కశ్మలమిదం విషమే సముపస్థితమ్।\nఅనార్యజుష్టమస్వర్గ్యమకీర్తికరమర్జున॥",
            transliteration: "śhrī bhagavān uvācha\nkutastvā kaśhmalam idaṁ viṣhame samupasthitam\nanārya-juṣhṭam asvargyam akīrti-karam arjuna",
            wordMeanings: [
                { word: "कश्मलम्", meaning: "weakness/delusion" },
                { word: "विषमे", meaning: "in this critical hour" },
                { word: "अनार्यजुष्टम्", meaning: "unworthy of noble" },
                { word: "अकीर्तिकरम्", meaning: "causing disgrace" }
            ],
            translation: "The Supreme Lord said: Where has this weakness come from, Arjuna? It is unworthy, disgraceful, and will not lead you to heaven — this is not befitting of you.",
            storyContext: "Krishna doesn't start with sympathy — He starts with a wake-up call. Sometimes love means being brutally honest.",
            modernInterpretation: "A great mentor doesn't enable your excuses. They challenge you to rise when you want to quit.",
            takeaway: "A true friend tells you what you need to hear, not what you want to hear.",
            memoryAid: "Like a coach saying 'Get up!' when an athlete wants to quit mid-game.",
            realLifeApplication: "When someone challenges your self-pity, listen carefully — they might be your Krishna.",
            category: "discipline"
        },
        {
            id: "2.3", chapter: 2, verse: 3,
            sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
            telugu: "క్లైబ్యం మా స్మ గమః పార్థ నైతత్త్వయ్యుపపద్యతే।\nక్షుద్రం హృదయదౌర్బల్యం త్యక్త్వోత్తిష్ఠ పరంతప॥",
            transliteration: "klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate\nkṣhudraṁ hṛidaya-daurbalyaṁ tyaktvottiṣhṭha parantapa",
            wordMeanings: [
                { word: "क्लैब्यम्", meaning: "weakness" },
                { word: "मा गमः", meaning: "do not yield to" },
                { word: "हृदयदौर्बल्यम्", meaning: "faint-heartedness" },
                { word: "उत्तिष्ठ", meaning: "arise!" }
            ],
            translation: "Do not yield to this weakness, O Partha! It does not befit you. Cast off this petty faint-heartedness and arise, O scorcher of enemies!",
            storyContext: "Krishna's most energizing command: ARISE! He reminds Arjuna of his true identity — a warrior, not a victim.",
            modernInterpretation: "When you identify with your weakness instead of your strength, you need someone to remind you who you really are.",
            takeaway: "You are not your weakness. Arise!",
            memoryAid: "Three words that changed everything: 'उत्तिष्ठ — ARISE!' The ultimate motivational command.",
            realLifeApplication: "When self-doubt creeps in, remember: this weakness is not the real you. Stand up.",
            category: "discipline"
        },
        {
            id: "2.7", chapter: 2, verse: 7,
            sanskrit: "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः।\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्॥",
            telugu: "కార్పణ్యదోషోపహతస్వభావః పృచ్ఛామి త్వాం ధర్మసమ్మూఢచేతాః।\nయచ్ఛ్రేయః స్యాన్నిశ్చితం బ్రూహి తన్మే శిష్యస్తేఽహం శాధి మాం త్వాం ప్రపన్నమ్॥",
            transliteration: "kārpaṇya-doṣhopahata-svabhāvaḥ pṛichchhāmi tvāṁ dharma-sammūḍha-chetāḥ\nyach chhreyaḥ syān niśhchitaṁ brūhi tan me śhiṣhyas te 'haṁ śhādhi māṁ tvāṁ prapannam",
            wordMeanings: [
                { word: "कार्पण्यदोषोपहत", meaning: "afflicted by weakness" },
                { word: "धर्मसम्मूढ", meaning: "confused about duty" },
                { word: "शिष्यः", meaning: "disciple" },
                { word: "शाधि माम्", meaning: "instruct me" },
                { word: "प्रपन्नम्", meaning: "surrendered" }
            ],
            translation: "My nature is weighed down by weakness. My mind is confused about duty. I ask You: tell me clearly what is best for me. I am Your disciple, surrendered to You — please instruct me.",
            storyContext: "The most important moment: Arjuna stops pretending he has it figured out. He drops his ego and asks for help. This is when true learning begins.",
            modernInterpretation: "The bravest thing you can do is admit you don't know. Surrendering to a mentor isn't weakness — it's the beginning of transformation.",
            takeaway: "Asking for guidance is the first act of wisdom.",
            memoryAid: "'I don't know what to do. Please teach me.' — The sentence that unlocked the entire Bhagavad Gita.",
            realLifeApplication: "When truly confused, drop your ego and seek a trustworthy mentor. Surrender to the process of learning.",
            category: "discipline"
        },
        {
            id: "2.11", chapter: 2, verse: 11,
            sanskrit: "श्रीभगवानुवाच\nअशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे।\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः॥",
            telugu: "శ్రీభగవానువాచ\nఅశోచ్యానన్వశోచస్త్వం ప్రజ్ఞావాదాంశ్చ భాషసే।\nగతాసూనగతాసూంశ్చ నానుశోచన్తి పణ్డితాః॥",
            transliteration: "śhrī bhagavān uvācha\naśhochyān anvaśhochas tvaṁ prajñā-vādānśh cha bhāṣhase\ngatāsūn agatāsūnśh cha nānuśhochanti paṇḍitāḥ",
            wordMeanings: [
                { word: "अशोच्यान्", meaning: "not worthy of grief" },
                { word: "अन्वशोचः", meaning: "you grieve" },
                { word: "प्रज्ञावादान्", meaning: "wise words" },
                { word: "पण्डिताः", meaning: "the wise" }
            ],
            translation: "The Supreme Lord said: You grieve for those who should not be grieved for, yet you speak words of wisdom. The truly wise grieve neither for the living nor for the dead.",
            storyContext: "Krishna's first real teaching begins with this powerful truth-bomb: You're talking philosophy but acting from ignorance. The wise don't grieve like this.",
            modernInterpretation: "We often know the right thing intellectually but fail to feel or act on it. Krishna points out this gap between knowledge and wisdom.",
            takeaway: "Knowing the truth and living the truth are very different things.",
            memoryAid: "'You talk wise but act foolish' — Krishna's loving reality check.",
            realLifeApplication: "Bridge the gap between what you know and how you behave. Wisdom isn't information — it's transformation.",
            category: "detachment"
        },
        {
            id: "2.13", chapter: 2, verse: 13,
            sanskrit: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥",
            telugu: "దేహినోఽస్మిన్యథా దేహే కౌమారం యౌవనం జరా।\nతథా దేహాన్తరప్రాప్తిర్ధీరస్తత్ర న ముహ్యతి॥",
            transliteration: "dehino 'smin yathā dehe kaumāraṁ yauvanaṁ jarā\ntathā dehāntara-prāptir dhīras tatra na muhyati",
            wordMeanings: [
                { word: "देहिनः", meaning: "of the soul" },
                { word: "कौमारम्", meaning: "childhood" },
                { word: "यौवनम्", meaning: "youth" },
                { word: "जरा", meaning: "old age" },
                { word: "देहान्तरप्राप्तिः", meaning: "attaining another body" },
                { word: "धीरः", meaning: "the wise" }
            ],
            translation: "Just as the soul passes through childhood, youth, and old age in this body, so too does it pass into another body at death. The wise are not deluded by this.",
            storyContext: "Krishna introduces the concept of the eternal soul through a beautiful analogy everyone can understand — you've already 'changed bodies' as you grew from child to adult.",
            modernInterpretation: "Change is the only constant. Your body at 5, 25, and 65 are completely different — yet YOU remain. Identity is deeper than form.",
            takeaway: "You are not your body. You are the constant awareness within it.",
            memoryAid: "Look at your childhood photo — that body is gone, but YOU are still here. That's the soul.",
            realLifeApplication: "When you fear aging, loss, or change, remember: the real you has already survived countless transformations.",
            category: "detachment"
        },
        {
            id: "2.14", chapter: 2, verse: 14,
            sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
            telugu: "మాత్రాస్పర్శాస్తు కౌంతేయ శీతోష్ణసుఖదుఃఖదాః।\nఆగమాపాయినోఽనిత్యాస్తాంస్తితిక్షస్వ భారత॥",
            transliteration: "mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ\nāgamāpāyino 'nityās tāns titikṣhasva bhārata",
            wordMeanings: [
                { word: "मात्रास्पर्शाः", meaning: "sense perceptions" },
                { word: "शीतोष्ण", meaning: "cold and heat" },
                { word: "सुखदुःखदाः", meaning: "giving pleasure and pain" },
                { word: "अनित्याः", meaning: "temporary" },
                { word: "तितिक्षस्व", meaning: "endure them" }
            ],
            translation: "The contact between the senses and their objects gives rise to cold and heat, pleasure and pain. They are temporary — coming and going. Endure them bravely, O Arjuna.",
            storyContext: "Krishna teaches emotional resilience: feelings come and go like seasons. Don't let temporary sensations control permanent decisions.",
            modernInterpretation: "Your emotions are weather, not climate. Bad days pass. Good days pass. The key is to not make life-altering decisions based on temporary feelings.",
            takeaway: "Feelings are visitors. Let them come and go without controlling you.",
            memoryAid: "Emotions are like weather — rain today doesn't mean rain forever.",
            realLifeApplication: "Before reacting to a strong emotion, pause and ask: will this matter in a week? In a year?",
            category: "anxiety"
        },
        {
            id: "2.17", chapter: 2, verse: 17,
            sanskrit: "अविनाशि तु तद्विद्धि येन सर्वमिदं ततम्।\nविनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति॥",
            telugu: "అవినాశి తు తద్విద్ధి యేన సర్వమిదం తతమ్।\nవినాశమవ్యయస్యాస్య న కశ్చిత్కర్తుమర్హతి॥",
            transliteration: "avināśhi tu tad viddhi yena sarvam idaṁ tatam\nvināśham avyayasyāsya na kaśhchit kartum arhati",
            wordMeanings: [
                { word: "अविनाशि", meaning: "indestructible" },
                { word: "सर्वम्", meaning: "everything" },
                { word: "ततम्", meaning: "pervaded" },
                { word: "अव्ययस्य", meaning: "imperishable" }
            ],
            translation: "Know that which pervades the entire body to be indestructible. No one can destroy the imperishable soul.",
            storyContext: "Krishna establishes the most fundamental truth: the soul (Atman) is indestructible and pervades everything.",
            modernInterpretation: "Your essence — your consciousness, your core being — cannot be destroyed by any external force. Jobs, relationships, and bodies change; the real you endures.",
            takeaway: "Your true self is indestructible.",
            memoryAid: "Break a phone, the contact list is in the cloud. Destroy the body, the soul remains.",
            realLifeApplication: "When life falls apart, remember: YOUR core being is untouched. You can always rebuild.",
            category: "detachment"
        },
        {
            id: "2.20", chapter: 2, verse: 20,
            sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
            telugu: "న జాయతే మ్రియతే వా కదాచిన్నాయం భూత్వా భవితా వా న భూయః।\nఅజో నిత్యః శాశ్వతోఽయం పురాణో న హన్యతే హన్యమానే శరీరే॥",
            transliteration: "na jāyate mriyate vā kadāchin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śhāśhvato 'yaṁ purāṇo na hanyate hanyamāne śharīre",
            wordMeanings: [
                { word: "न जायते", meaning: "is not born" },
                { word: "न म्रियते", meaning: "does not die" },
                { word: "अजः", meaning: "unborn" },
                { word: "नित्यः", meaning: "eternal" },
                { word: "शाश्वतः", meaning: "permanent" },
                { word: "न हन्यते", meaning: "is not killed" }
            ],
            translation: "The soul is never born, nor does it ever die. It does not come into being, nor will it cease to exist. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
            storyContext: "One of the most famous verses of the Gita. Krishna delivers the ultimate truth about the immortality of the soul in poetry that has resonated for millennia.",
            modernInterpretation: "This verse redefines death entirely. What you fear losing was never really at risk. The soul transcends all physical limitations.",
            takeaway: "The soul is eternal — beyond birth and death.",
            memoryAid: "The most powerful verse: 'na jāyate mriyate vā kadāchin' — never born, never dies, EVER.",
            realLifeApplication: "Face mortality with courage. Grieve loss, but know that the essence of those you love — and your own essence — is eternal.",
            category: "detachment"
        },
        {
            id: "2.22", chapter: 2, verse: 22,
            sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही॥",
            telugu: "వాసాంసి జీర్ణాని యథా విహాయ నవాని గృహ్ణాతి నరోఽపరాణి।\nతథా శరీరాణి విహాయ జీర్ణాన్యన్యాని సంయాతి నవాని దేహీ॥",
            transliteration: "vāsānsi jīrṇāni yathā vihāya navāni gṛihṇāti naro 'parāṇi\ntathā śharīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī",
            wordMeanings: [
                { word: "वासांसि", meaning: "garments" },
                { word: "जीर्णानि", meaning: "worn out" },
                { word: "विहाय", meaning: "discarding" },
                { word: "नवानि", meaning: "new" },
                { word: "शरीराणि", meaning: "bodies" },
                { word: "देही", meaning: "the soul" }
            ],
            translation: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.",
            storyContext: "Krishna uses the most relatable metaphor: changing clothes. Death is simply the soul changing its worn-out outfit for a new one.",
            modernInterpretation: "This is the Gita's most famous metaphor. It transforms our understanding of death from something terrifying to something as natural as changing clothes.",
            takeaway: "Death is just the soul changing clothes.",
            memoryAid: "Old shirt → new shirt. Old body → new body. Same you inside.",
            realLifeApplication: "When facing loss or change, see it as an upgrade, not an ending. The soul simply moves on to its next adventure.",
            category: "detachment"
        },
        {
            id: "2.47", chapter: 2, verse: 47,
            sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
            telugu: "కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన।\nమా కర్మఫలహేతుర్భూర్మా తే సంగోఽస్త్వకర్మణి॥",
            transliteration: "karmaṇy evādhikāras te mā phaleṣhu kadāchana\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
            wordMeanings: [
                { word: "कर्मणि", meaning: "in action" },
                { word: "अधिकारः", meaning: "right" },
                { word: "मा फलेषु", meaning: "not in the fruits" },
                { word: "कदाचन", meaning: "ever" },
                { word: "अकर्मणि", meaning: "in inaction" }
            ],
            translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results, and never be attached to inaction.",
            storyContext: "THE most quoted verse of the Bhagavad Gita. Krishna delivers the master key to a peaceful, productive life: focus on effort, let go of outcomes.",
            modernInterpretation: "This is ancient wisdom for modern anxiety. Study hard but don't obsess over grades. Work your best but don't tie your identity to promotion. Love deeply but don't try to control outcomes.",
            takeaway: "Do your best, then release the outcome. That's freedom.",
            memoryAid: "The most important productivity hack ever written — 5000 years ago.",
            realLifeApplication: "Before any task, remind yourself: I control my effort, not the result. This eliminates 90% of performance anxiety.",
            category: "discipline"
        }
    ],

    3: [
        {
            id: "3.1", chapter: 3, verse: 1,
            sanskrit: "अर्जुन उवाच\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन।\nतत्किं कर्मणि घोरे मां नियोजयसि केशव॥",
            telugu: "అర్జున ఉవాచ\nజ్యాయసీ చేత్కర్మణస్తే మతా బుద్ధిర్జనార్దన।\nతత్కిం కర్మణి ఘోరే మాం నియోజయసి కేశవ॥",
            transliteration: "arjuna uvācha\njyāyasī chet karmaṇas te matā buddhir janārdana\ntat kiṁ karmaṇi ghore māṁ niyojayasi keśhava",
            wordMeanings: [
                { word: "ज्यायसी", meaning: "superior" },
                { word: "बुद्धिः", meaning: "intellect/knowledge" },
                { word: "कर्मणि", meaning: "in action" },
                { word: "घोरे", meaning: "terrible" },
                { word: "नियोजयसि", meaning: "you engage" }
            ],
            translation: "Arjuna said: O Krishna, if You consider knowledge superior to action, then why do You urge me to engage in this terrible warfare?",
            storyContext: "Arjuna asks a genuine question that many students ask: if thinking is better than doing, why should I act at all? It's the classic overthinking dilemma.",
            modernInterpretation: "This is every person who says 'Why work hard if meditation is the answer?' or 'Why hustle if we should be detached?' Arjuna wants an excuse not to act.",
            takeaway: "Understanding without action is incomplete wisdom.",
            memoryAid: "Like asking your fitness coach: 'If mindset matters more, why should I go to the gym?'",
            realLifeApplication: "Stop using philosophy as an excuse to avoid action. Knowledge and action must go together.",
            category: "discipline"
        },
        {
            id: "3.5", chapter: 3, verse: 5,
            sanskrit: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्।\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः॥",
            telugu: "న హి కశ్చిత్క్షణమపి జాతు తిష్ఠత్యకర్మకృత్।\nకార్యతే హ్యవశః కర్మ సర్వః ప్రకృతిజైర్గుణైః॥",
            transliteration: "na hi kaśhchit kṣhaṇam api jātu tiṣhṭhaty akarma-kṛit\nkāryate hy avaśhaḥ karma sarvaḥ prakṛiti-jair guṇaiḥ",
            wordMeanings: [
                { word: "न कश्चित्", meaning: "no one" },
                { word: "क्षणम् अपि", meaning: "even for a moment" },
                { word: "अकर्मकृत्", meaning: "without action" },
                { word: "प्रकृतिजैः गुणैः", meaning: "by nature's qualities" }
            ],
            translation: "No one can remain without action even for a moment. Everyone is involuntarily driven to act by the qualities born of nature.",
            storyContext: "Krishna drops a truth bomb: you CANNOT avoid action. Even sitting still is an action. Even breathing is an action. The question isn't whether to act, but HOW to act.",
            modernInterpretation: "Not making a decision IS a decision. Not responding IS a response. You can't opt out of life. So act consciously rather than being driven by unconscious patterns.",
            takeaway: "Inaction is impossible. Choose conscious action over unconscious reaction.",
            memoryAid: "Even scrolling social media 'doing nothing' is an action with consequences.",
            realLifeApplication: "Stop telling yourself you'll 'decide later.' Indecision is a decision to stay stuck.",
            category: "discipline"
        },
        {
            id: "3.19", chapter: 3, verse: 19,
            sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
            telugu: "తస్మాదసక్తః సతతం కార్యం కర్మ సమాచర।\nఅసక్తో హ్యాచరన్కర్మ పరమాప్నోతి పూరుషః॥",
            transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samāchara\nasakto hy ācharan karma param āpnoti pūruṣhaḥ",
            wordMeanings: [
                { word: "असक्तः", meaning: "without attachment" },
                { word: "सततम्", meaning: "constantly" },
                { word: "कार्यम्", meaning: "duty" },
                { word: "समाचर", meaning: "perform" },
                { word: "परम्", meaning: "the Supreme" }
            ],
            translation: "Therefore, always perform your duty without attachment. By working without attachment, a person attains the Supreme.",
            storyContext: "Krishna gives the simple formula: DO your work. Just don't be ATTACHED to the results. This is the essence of Karma Yoga.",
            modernInterpretation: "Work like a professional: give 100%, then go home. Don't let your self-worth depend on outcomes. This is the secret to sustainable excellence.",
            takeaway: "Work with full dedication, zero attachment.",
            memoryAid: "Be a surgeon: give 100% focus during the operation, then detach and go home.",
            realLifeApplication: "Set a daily intention: 'Today I will do my best work and not stress about the results.'",
            category: "discipline"
        },
        {
            id: "3.21", chapter: 3, verse: 21,
            sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
            telugu: "యద్యదాచరతి శ్రేష్ఠస్తత్తదేవేతరో జనః।\nస యత్ప్రమాణం కురుతే లోకస్తదనువర్తతే॥",
            transliteration: "yad yad ācharati śhreṣhṭhas tat tad evetaro janaḥ\nsa yat pramāṇaṁ kurute lokas tad anuvartate",
            wordMeanings: [
                { word: "श्रेष्ठः", meaning: "a great person" },
                { word: "आचरति", meaning: "does" },
                { word: "इतरः जनः", meaning: "others" },
                { word: "प्रमाणम्", meaning: "standard" },
                { word: "अनुवर्तते", meaning: "follow" }
            ],
            translation: "Whatever a great person does, others follow. Whatever standards they set, the world follows.",
            storyContext: "Krishna explains leadership by example. A leader's actions set the tone for everyone. This is why great people must act with extra responsibility.",
            modernInterpretation: "You're always being watched. Your children, team, friends — they copy what you DO, not what you say. Lead by example.",
            takeaway: "People follow your actions, not your words.",
            memoryAid: "Your kids don't listen to you. They WATCH you.",
            realLifeApplication: "Before telling others what to do, ask yourself: Am I doing it myself?",
            category: "leadership"
        },
        {
            id: "3.27", chapter: 3, verse: 27,
            sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।\nअहंकारविमूढात्मा कर्ताहमिति मन्यते॥",
            telugu: "ప్రకృతేః క్రియమాణాని గుణైః కర్మాణి సర్వశః।\nఅహంకారవిమూఢాత్మా కర్తాహమితి మన్యతే॥",
            transliteration: "prakṛiteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśhaḥ\nahaṅkāra-vimūḍhātmā kartāham iti manyate",
            wordMeanings: [
                { word: "प्रकृतेः", meaning: "by nature" },
                { word: "गुणैः", meaning: "by the three modes" },
                { word: "अहंकार", meaning: "ego" },
                { word: "विमूढ", meaning: "deluded" },
                { word: "कर्ता अहम्", meaning: "I am the doer" }
            ],
            translation: "All actions are performed by the qualities of nature. But the person deluded by ego thinks: 'I am the doer.'",
            storyContext: "Krishna reveals the ego trap: we think WE are doing everything, but nature's forces are actually driving most of our actions.",
            modernInterpretation: "Your genetics, upbringing, circumstances, and nature all contribute to your actions. Taking all the credit (or blame) is ego's delusion.",
            takeaway: "The ego says 'I did it all.' Wisdom says 'many forces contributed.'",
            memoryAid: "The self-made myth: nobody succeeds alone. Nobody fails alone.",
            realLifeApplication: "Practice gratitude for the forces that helped you succeed. Practice compassion for the forces that made you struggle.",
            category: "detachment"
        },
        {
            id: "3.35", chapter: 3, verse: 35,
            sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
            telugu: "శ్రేయాన్స్వధర్మో విగుణః పరధర్మాత్స్వనుష్ఠితాత్।\nస్వధర్మే నిధనం శ్రేయః పరధర్మో భయావహః॥",
            transliteration: "śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt\nsva-dharme nidhanaṁ śhreyaḥ para-dharmo bhayāvahaḥ",
            wordMeanings: [
                { word: "श्रेयान्", meaning: "better" },
                { word: "स्वधर्मः", meaning: "own duty/nature" },
                { word: "विगुणः", meaning: "imperfectly" },
                { word: "परधर्मात्", meaning: "than another's duty" },
                { word: "भयावहः", meaning: "dangerous" }
            ],
            translation: "It is far better to perform one's own duty imperfectly than to perform another's duty perfectly. It is better to die following one's own path, for following another's path is dangerous.",
            storyContext: "Krishna tells Arjuna: be yourself, even imperfectly. Don't try to be someone else, even successfully. Authenticity trumps imitation.",
            modernInterpretation: "Stop comparing your chapter 1 with someone else's chapter 20. Your unique path, walked imperfectly but authentically, is superior to a perfect copy of someone else's journey.",
            takeaway: "Be imperfectly YOU rather than a perfect copy of someone else.",
            memoryAid: "A bad original painting beats a perfect photocopy every time.",
            realLifeApplication: "Stop imitating others' paths. Find YOUR dharma — your unique calling — and pursue it with everything you have.",
            category: "career"
        }
    ]
};

// Helper: get total shloka count available
function getAvailableShlokaCount() {
    let count = 0;
    for (const ch in SHLOKAS) {
        count += SHLOKAS[ch].length;
    }
    return count;
}

// Helper: get all shlokas flat
function getAllShlokas() {
    const all = [];
    for (const ch in SHLOKAS) {
        all.push(...SHLOKAS[ch]);
    }
    return all;
}

// Helper: get shloka by chapter and verse
function getShloka(chapter, verse) {
    const chShlokas = SHLOKAS[chapter];
    if (!chShlokas) return null;
    return chShlokas.find(s => s.verse === verse) || null;
}

// Helper: get next shloka
function getNextShloka(chapter, verse) {
    const chShlokas = SHLOKAS[chapter];
    if (!chShlokas) return null;
    const idx = chShlokas.findIndex(s => s.verse === verse);
    if (idx >= 0 && idx < chShlokas.length - 1) return chShlokas[idx + 1];
    // Try next chapter
    const nextCh = SHLOKAS[chapter + 1];
    if (nextCh && nextCh.length > 0) return nextCh[0];
    return null;
}

// Helper: get prev shloka
function getPrevShloka(chapter, verse) {
    const chShlokas = SHLOKAS[chapter];
    if (!chShlokas) return null;
    const idx = chShlokas.findIndex(s => s.verse === verse);
    if (idx > 0) return chShlokas[idx - 1];
    // Try prev chapter
    const prevCh = SHLOKAS[chapter - 1];
    if (prevCh && prevCh.length > 0) return prevCh[prevCh.length - 1];
    return null;
}
