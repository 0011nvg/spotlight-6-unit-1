window.COURSE_DATA = {
  title: "People, Places & Me",
  subtitle: "Meet people. Crack the clues. Build your world.",
  wordGroups: {
    family: {
      title: "Family + appearance",
      words: [
        ["age","возраст"],["aunt","тётя"],["big","большой"],["brother","брат"],["child","ребёнок"],["children","дети"],["cousin","двоюродный брат / двоюродная сестра"],["curly","кудрявый"],["daughter","дочь"],["dad","папа"],["fair","светлый (о волосах)"],["fat","полный / толстый (о телосложении)"],["grey","седой / серый"],["hair","волосы"],["height","рост"],["husband","муж"],["long","длинный"],["middle-aged","среднего возраста"],["mum","мама"],["old","старый / пожилой"],["parents","родители"],["short","низкий; короткий"],["sister","сестра"],["slim","стройный"],["son","сын"],["straight","прямой (о волосах)"],["twins","близнецы"],["uncle","дядя"],["wavy","волнистый"],["weight","вес"],["wife","жена"],["young","молодой"],
        ["be in one's early sixties","быть в возрасте чуть за 60"],["be in one's late forties","быть ближе к 50"],["be in one's mid twenties","быть примерно 24–26 лет"],["be married to somebody","быть женатым / замужем за кем-то"],["facial features","черты лица"]
      ]
    },
    identity: {
      title: "Identity + belongings",
      words: [
        ["address","адрес"],["camera","фотоаппарат / камера"],["computer","компьютер"],["nationality","национальность"],["postcode","почтовый индекс"],["skateboard","скейтборд"],["surname","фамилия"],["watch","наручные часы"],["alarm clock","будильник"],["credit card","банковская карта"],["date of birth","дата рождения"],["driving licence","водительское удостоверение"],["expiry date","дата окончания срока действия"],["full name","полное имя"],["home address","домашний адрес"],["identity card","удостоверение личности"],["identification number","идентификационный номер"],["join a club","вступить в клуб"],["membership card","членская карта"],["register","регистрироваться / записываться"],["telephone number","номер телефона"]
      ]
    },
    countries: {
      title: "Countries + nationalities",
      words: [
        ["Brazil","Бразилия"],["Brazilian","бразилец / бразильский"],["Britain","Британия"],["British","британец / британский"],["Chile","Чили"],["Chilean","чилиец / чилийский"],["Germany","Германия"],["German","немец / немецкий"],["Japan","Япония"],["Japanese","японец / японский"],["Poland","Польша"],["Polish","поляк / польский"],["Russia","Россия"],["Russian","русский"],["Spain","Испания"],["Spanish","испанец / испанский"]
      ]
    },
    location: {
      title: "Location + country",
      words: [
        ["capital","столица"],["compass","компас"],["desert","пустыня"],["east","восток"],["exactly","точно"],["include","включать"],["location","местоположение"],["mountains","горы"],["north","север"],["north-east","северо-восток"],["north-west","северо-запад"],["south","юг"],["south-east","юго-восток"],["south-west","юго-запад"],["valley","долина"],["west","запад"],["country","страна"],["currency","валюта"],["flag","флаг"],["population","население"]
      ]
    },
    uk: {
      title: "UK + geography",
      words: [
        ["Belfast","Белфаст"],["Cardiff","Кардифф"],["Edinburgh","Эдинбург"],["England","Англия"],["Ireland","Ирландия"],["London","Лондон"],["Scotland","Шотландия"],["Wales","Уэльс"],["British pound","британский фунт"],["the Union Jack","флаг Великобритании"],["the United Kingdom","Соединённое Королевство"],["diameter","диаметр"],["distance","расстояние"],["Earth","Земля"],["greet","приветствовать"],["per cent","процент"],["total","общий / всего"],["conditions suitable for life","условия, подходящие для жизни"],["introduce somebody to somebody","представить кого-то кому-то"],["solar system","Солнечная система"],["surface area","площадь поверхности"]
      ]
    }
  },
  missions: [
    {
      id:"family", no:"01", title:"Family Files", focus:"Family members · relationships · have got", outcome:"I can explain who people are in a family.", art:"reading", color:"yellow", keks:"We have faces. We have clues. We need names.",
      teacher:{time:"55–70 min", target:"family vocabulary; have/has got; relationship questions", problems:"Confusing aunt/uncle/cousin; using has got after I/they; one-word answers.", extension:"Ask the learner to describe two real or fictional family relationships without showing the screen."},
      stages:[
        {type:"choice",title:"Family Radar",intro:"Warm up the family words. Choose the best answer.",items:[
          ["Your mum's sister is your …",["aunt","cousin","daughter"],"aunt","Think one generation up, on your mum's side."],
          ["Your dad's brother is your …",["uncle","son","husband"],"uncle","This is a male relative in your parents' generation."],
          ["Two children born at the same time are …",["parents","twins","cousins"],"twins","Same birthday, same parents."],
          ["A man who is married is someone's …",["husband","brother","son"],"husband","Marriage is the key clue."],
          ["A girl in relation to her parents is their …",["daughter","wife","aunt"],"daughter","Think parent → child."],
          ["Your aunt's child is your …",["cousin","uncle","parent"],"cousin","Same generation as you, different parents."]
        ]},
        {type:"sort",title:"Family Sort",intro:"Drag each word to the best group.",categories:["male","female","both"],cards:[
          ["brother","male"],["dad","male"],["husband","male"],["son","male"],["uncle","male"],["aunt","female"],["daughter","female"],["mum","female"],["sister","female"],["wife","female"],["child","both"],["cousin","both"],["parents","both"],["twins","both"]
        ]},
        {type:"match",title:"Who is Who?",intro:"Choose the relationship that completes each clue.",items:[
          ["Mina is Leo's mother. Leo is Mina's …",["son","husband","uncle"],"son"],
          ["Nora and Maya have the same parents. Nora is Maya's …",["sister","aunt","wife"],"sister"],
          ["Sam is married to Eva. Eva is Sam's …",["wife","daughter","cousin"],"wife"],
          ["Luca's mum is Eva. Eva's brother is Toni. Toni is Luca's …",["uncle","son","cousin"],"uncle"],
          ["Lena and Max are brother and sister. Their mum and dad are their …",["parents","cousins","twins"],"parents"],
          ["Ben's mum and Lia's mum are sisters. Ben and Lia are …",["cousins","twins","parents"],"cousins"]
        ]},
        {type:"input",title:"Missing Letters",intro:"Complete the family words. Spelling matters.",items:[
          ["b r _ t h _ r","brother"],["c _ u s _ n","cousin"],["d _ u g h t _ r","daughter"],["h _ s b _ n d","husband"],["p _ r _ n t s","parents"],["s _ s t _ r","sister"],["t w _ n s","twins"],["u n c _ e","uncle"]
        ]},
        {type:"choice",title:"Have Got — Signal Check",intro:"Choose the form that sounds right.",items:[
          ["I ___ one brother.",["have got","has got","got have"],"have got","Use have got with I/you/we/they."],
          ["Maya ___ two cousins.",["have got","has got","is got"],"has got","Use has got with he/she/it."],
          ["___ Leo got a sister?",["Has","Have","Is"],"Has","Question: Has + he/she/name + got …?"],
          ["They ___ any children.",["haven't got","hasn't got","not got"],"haven't got","They → have / haven't."],
          ["My uncle ___ a son.",["has got","have got","got"],"has got","My uncle = he."],
          ["___ you got any cousins?",["Have","Has","Do"],"Have","With have got, start with Have."],
          ["No, she ___ .",["hasn't","haven't","isn't"],"hasn't","Short answer to Has she got …?"],
          ["Yes, we ___ .",["have","has","are"],"have","Short answer to Have you got …?"]
        ]},
        {type:"clues",title:"Family Logic",intro:"Open a clue, solve it aloud, then reveal the answer.",items:[
          ["Kai and Mia have the same mum and dad. Mia is a girl.","Mia is Kai's sister."],
          ["Noah is married to Emma. They have one daughter, Zoe.","Noah is Zoe's dad; Emma is Zoe's mum."],
          ["Luca's mum is Anna. Anna's brother is Ben.","Ben is Luca's uncle."],
          ["Sofia's dad and Max's mum are brother and sister.","Sofia and Max are cousins."],
          ["Ava and Ivy were born on the same day to the same parents.","Ava and Ivy are twins."],
          ["Tom is married to Nina.","Tom is Nina's husband; Nina is Tom's wife."]
        ]},
        {type:"memory",title:"Word Snap",intro:"Find the English–Russian pairs.",pairs:[["aunt","тётя"],["cousin","двоюродный брат / сестра"],["husband","муж"],["parents","родители"],["twins","близнецы"],["wife","жена"]]},
        {type:"speaking",title:"Tell Your Tutor",intro:"Choose a real or fictional family. Speak for 45–60 seconds.",prompts:["Who is in the family?","Who has got brothers or sisters?","Who is married to whom?","Add one age or appearance detail."],check:["I used at least 5 family words.","I used have/has got correctly.","I used full sentences.","I answered one follow-up question."]}
      ]
    },
    {
      id:"face",no:"02",title:"Face Detective",focus:"Appearance · age · height · hair · facial features",outcome:"I can describe a person and identify someone from a description.",art:"skeptical",color:"pink",keks:"Descriptions are clues. Tiny words matter.",
      teacher:{time:"50–65 min",target:"appearance adjectives; hair phrases; be/have got",problems:"Using is with hair instead of has got; mixing tall/long; body-size vocabulary can feel personal.",extension:"Tutor secretly chooses a fictional character; learner asks yes/no questions to identify them."},
      stages:[
        {type:"choice",title:"Spot the Detail",intro:"Choose the word that fits the description.",items:[
          ["Hair with lots of curls is …",["curly","straight","fair"],"curly"],
          ["Hair with soft bends is …",["wavy","grey","short"],"wavy"],
          ["A person who is not old is …",["young","middle-aged","grey"],"young"],
          ["Someone with a narrow build can be …",["slim","long","fair"],"slim"],
          ["Hair with no curls is …",["straight","curly","wavy"],"straight"],
          ["Light-coloured hair can be …",["fair","fat","old"],"fair"]
        ]},
        {type:"sort",title:"Hair Lab",intro:"Sort the words by what they describe.",categories:["length","shape","colour"],cards:[
          ["long","length"],["short","length"],["curly","shape"],["straight","shape"],["wavy","shape"],["fair","colour"],["dark","colour"],["grey","colour"]
        ]},
        {type:"match",title:"Build the Description",intro:"Choose the best ending.",items:[
          ["Milo is …",["tall","long hair","curly hair"],"tall"],
          ["Milo has got …",["tall","short dark hair","young"],"short dark hair"],
          ["June is …",["middle-aged","wavy hair","grey eyes"],"middle-aged"],
          ["June has got …",["wavy hair","slim","young"],"wavy hair"],
          ["Her hair is …",["curly and dark","tall and slim","young"],"curly and dark"],
          ["He is short and …",["slim","straight hair","grey hair"],"slim"]
        ]},
        {type:"input",title:"Spell the Clue",intro:"Type the correct appearance word.",items:[
          ["c _ r l y","curly"],["f _ i r","fair"],["g r _ y","grey"],["h _ i g h t","height"],["m _ d d l e - a g e d","middle-aged"],["s l _ m","slim"],["s t r _ i g h t","straight"],["w _ v y","wavy"]
        ]},
        {type:"choice",title:"Is or Has Got?",intro:"Choose the natural sentence.",items:[
          ["Choose the correct sentence.",["She is tall.","She has got tall."],"She is tall.","Tall describes the person, so use be."],
          ["Choose the correct sentence.",["He has got curly hair.","He is curly hair."],"He has got curly hair.","Hair is something he has."],
          ["Choose the correct sentence.",["They are young.","They have got young."],"They are young."],
          ["Choose the correct sentence.",["Her hair is long.","Her hair has got long."],"Her hair is long."],
          ["Choose the correct sentence.",["He has got big ears.","He is big ears."],"He has got big ears."],
          ["Choose the correct sentence.",["She is slim.","She has got slim."],"She is slim."]
        ]},
        {type:"input",title:"Wrong Witness",intro:"Correct one wrong word in each sentence. Type the full corrected sentence.",items:[
          ["Maya is got long hair.","Maya has got long hair."],["Leo has tall.","Leo is tall."],["Her hair are wavy.","Her hair is wavy."],["He have got grey hair.","He has got grey hair."],["They is young.","They are young."],["She has got slim.","She is slim."]
        ]},
        {type:"memory",title:"Opposite Match",intro:"Find the opposite pairs.",pairs:[["young","old"],["tall","short"],["long hair","short hair"],["curly","straight"],["slim","not slim"],["light hair","dark hair"]]},
        {type:"speaking",title:"Guess Who?",intro:"Describe one fictional person. Do not say the name. Your tutor guesses.",prompts:["age group","height/build","hair length + colour + shape","one facial feature"],check:["I used be for age/build.","I used has got for features.","I used at least 4 adjectives.","My tutor could guess the person."]}
      ]
    },
    {
      id:"whose",no:"03",title:"Whose Is It?",focus:"Possessive adjectives · possessive pronouns · possessive ’s",outcome:"I can say who something belongs to.",art:"pointing",color:"blue",keks:"Lost property. Grammar finally has a job.",
      teacher:{time:"55–70 min",target:"my/mine; her/hers; their/theirs; possessive ’s; Whose …?",problems:"Using mine before a noun; adding apostrophe to possessive pronouns; confusing its/it's.",extension:"Use real objects in the room for a live Lost & Found round."},
      stages:[
        {type:"match",title:"Grammar Machine",intro:"Complete each ownership chain.",items:[
          ["Maya → ___ camera → the camera is ___",["her / hers","hers / her","she / hers"],"her / hers"],
          ["I → ___ watch → the watch is ___",["my / mine","mine / my","me / mine"],"my / mine"],
          ["Leo → ___ skateboard → the skateboard is ___",["his / his","him / his","his / him"],"his / his"],
          ["we → ___ laptop → the laptop is ___",["our / ours","ours / our","us / ours"],"our / ours"],
          ["they → ___ bags → the bags are ___",["their / theirs","theirs / their","them / theirs"],"their / theirs"],
          ["you → ___ card → the card is ___",["your / yours","yours / your","you / yours"],"your / yours"]
        ]},
        {type:"choice",title:"My or Mine?",intro:"Choose the correct form. Watch what comes after the gap.",items:[
          ["This is ___ bag.",["my","mine"],"my","A noun follows: bag."],["This bag is ___ .",["my","mine"],"mine","No noun after the gap."],["Is this ___ camera?",["her","hers"],"her"],["The camera is ___ .",["her","hers"],"hers"],["Those are ___ tickets.",["their","theirs"],"their"],["Those tickets are ___ .",["their","theirs"],"theirs"],["We found ___ computer.",["our","ours"],"our"],["The computer is ___ .",["our","ours"],"ours"],["Is this ___?",["your","yours"],"yours"],["Where is ___ watch?",["your","yours"],"your"]
        ]},
        {type:"sort",title:"Before a Noun / Alone",intro:"Sort each form by how it works.",categories:["before a noun","stands alone"],cards:[
          ["my","before a noun"],["your","before a noun"],["her","before a noun"],["our","before a noun"],["their","before a noun"],["mine","stands alone"],["yours","stands alone"],["hers","stands alone"],["ours","stands alone"],["theirs","stands alone"]
        ]},
        {type:"input",title:"Name the Owner",intro:"Rewrite with possessive ’s. Type the full phrase.",items:[
          ["the camera / Maya","Maya's camera"],["the skateboard / Leo","Leo's skateboard"],["the laptop / Nina","Nina's laptop"],["the membership card / Sam","Sam's membership card"],["the watch / Alex","Alex's watch"],["the alarm clock / Rosa","Rosa's alarm clock"]
        ]},
        {type:"choice",title:"Lost & Found",intro:"Return each item to its owner.",items:[
          ["Maya says: ‘That pink camera belongs to me.’ → It's ___ camera.",["her","hers","his"],"her"],
          ["Leo says: ‘The blue skateboard belongs to me.’ → The skateboard is ___ .",["his","her","their"],"his"],
          ["Nina and Sam say: ‘That laptop belongs to us.’ → It's ___ laptop.",["our","ours","their"],"our"],
          ["Nina and Sam's laptop is on the desk. It is ___ .",["ours","theirs","hers"],"theirs","Nina and Sam = they."],
          ["I say: ‘That watch belongs to me.’ → The watch is ___ .",["mine","my","me"],"mine"],
          ["You say: ‘That card belongs to you.’ → It's ___ card.",["your","yours","you"],"your"],
          ["The card belongs to you. → The card is ___ .",["your","yours","mine"],"yours"],
          ["The bags belong to Leo and Maya. → They are ___ bags.",["their","theirs","our"],"their"]
        ]},
        {type:"reorder",title:"Whose Question Builder",intro:"Put the lines into a natural mini-dialogue.",lines:["Whose watch is this?","I think it's Maya's.","Is it hers?","Yes, it is. Her name is on the back."],answer:["Whose watch is this?","I think it's Maya's.","Is it hers?","Yes, it is. Her name is on the back."]},
        {type:"choice",title:"Fix the Robot",intro:"The robot mixes possessive forms. Choose the correction.",items:[
          ["This is mine camera.",["This is my camera.","This is me camera."],"This is my camera."],["The bag is her.",["The bag is hers.","The bag is she."],"The bag is hers."],["Is this theirs book?",["Is this their book?","Is this them book?"],"Is this their book?"],["The laptop is our.",["The laptop is ours.","The laptop is we."],"The laptop is ours."],["Whose card is this? It's my.",["It's mine.","It's me."],"It's mine."],["The dog is in its bed. The bed is its.",["Keep the first sentence; avoid the second.","Both are standard."],"Keep the first sentence; avoid the second.","Standard English uses its before a noun; there is no usual standalone possessive pronoun *its*."]
        ]},
        {type:"speaking",title:"Tutor Lost & Found",intro:"Pick 4 objects around you or on the screen. Ask and answer ownership questions.",prompts:["Whose ___ is this?","Is this your ___?","No, it isn't mine.","I think it's hers/his/theirs."],check:["I used a possessive adjective.","I used a possessive pronoun.","I asked Whose …?","I corrected myself if needed."]}
      ]
    },
    {
      id:"identity",no:"04",title:"Identity Check",focus:"Personal information · forms · spelling · greetings",outcome:"I can ask for and give basic personal information.",art:"reading",color:"yellow",keks:"Use fictional details. Privacy is part of the lesson.",
      teacher:{time:"55–70 min",target:"form fields; Wh- questions; spelling; greeting/introduction chunks",problems:"Giving real private details; confusing surname/full name; unnatural response to Nice to meet you.",extension:"Tutor becomes club receptionist; learner registers a fictional character without looking at the model."},
      stages:[
        {type:"match",title:"Form Scanner",intro:"Match each piece of information to the correct field.",items:[
          ["Jordan Lee",["full name","postcode","nationality"],"full name"],["Lee",["surname","date of birth","address"],"surname"],["14 May 2014",["date of birth","expiry date","telephone number"],"date of birth"],["British",["nationality","country","surname"],"nationality"],["7 Pine Street",["home address","postcode","membership number"],"home address"],["AB4 2KT",["postcode","telephone number","expiry date"],"postcode"],["07000 312 845",["telephone number","identification number","postcode"],"telephone number"],["CLB-24017",["membership number","date of birth","address"],"membership number"]
        ]},
        {type:"choice",title:"Ask for the Data",intro:"Choose the natural question.",items:[
          ["You need a person's name.",["What's your name?","Who your name?","How name you?"],"What's your name?"],["You need spelling.",["How do you spell that?","How you spell that?","What spell?"],"How do you spell that?"],["You need age.",["How old are you?","What age you have?","How years are you?"],"How old are you?"],["You need nationality.",["What nationality are you?","What nationality you?","Where nationality are you?"],"What nationality are you?"],["You need country.",["Where are you from?","From where you are?","Where do you from?"],"Where are you from?"],["You need a phone number.",["What's your telephone number?","How many your phone?","What telephone you?"],"What's your telephone number?"]
        ]},
        {type:"choice",title:"Data Detective",intro:"Use this fictional card: ALEX RIVERA · Spanish · 22 Park Road · PX4 8LA · 07123 440 821 · Member 5018.",items:[
          ["What is the surname?",["Alex","Rivera","Spanish"],"Rivera"],["What is the nationality?",["Spain","Spanish","Rivera"],"Spanish"],["What is the postcode?",["PX4 8LA","5018","22 Park Road"],"PX4 8LA"],["What is the membership number?",["5018","07123 440 821","PX4 8LA"],"5018"],["What is the home address?",["22 Park Road","Spanish","Alex Rivera"],"22 Park Road"],["What is the telephone number?",["07123 440 821","5018","22"],"07123 440 821"]
        ]},
        {type:"reorder",title:"Reception Dialogue",intro:"Put the conversation into a natural order.",lines:["Hi. I'd like to join the Game Club, please.","Of course. What's your name?","Alex Rivera.","How do you spell Rivera?","R-I-V-E-R-A.","Great. What nationality are you?","I'm Spanish.","Thanks. Here's your membership card."],answer:["Hi. I'd like to join the Game Club, please.","Of course. What's your name?","Alex Rivera.","How do you spell Rivera?","R-I-V-E-R-A.","Great. What nationality are you?","I'm Spanish.","Thanks. Here's your membership card."]},
        {type:"choice",title:"Natural or Awkward?",intro:"Choose the more natural line.",items:[
          ["A friend introduces you to someone.",["Nice to meet you.","Good to see your name."],"Nice to meet you."],["Someone says ‘Nice to meet you.’",["Nice to meet you too.","I am also."],"Nice to meet you too."],["At 9:00 a.m. with a teacher.",["Good morning.","Good night."],"Good morning."],["With a classmate.",["Hi! How are you?","I would like to inquire regarding your health."],"Hi! How are you?"],["Introducing a friend casually.",["This is my friend Maya.","Here exists my friend Maya."],"This is my friend Maya."],["A more polite introduction.",["I'd like you to meet Sam.","Meet Sam now."],"I'd like you to meet Sam."]
        ]},
        {type:"memory",title:"Identity Word Snap",intro:"Find the English–Russian pairs.",pairs:[["surname","фамилия"],["postcode","почтовый индекс"],["date of birth","дата рождения"],["membership card","членская карта"],["expiry date","срок действия"],["register","записываться"]]},
        {type:"profile",title:"Build a Member",intro:"Create a FICTIONAL club member. Do not use a real address or phone number.",fields:[
          ["name","Full name","Alex Rivera"],["surname","Surname","Rivera"],["nationality","Nationality","Spanish"],["dob","Date of birth","14 May 2014"],["address","Fictional address","22 Park Road"],["postcode","Fictional postcode","PX4 8LA"],["phone","Fictional phone","07000 123 456"],["club","Club","Game Club"]
        ]},
        {type:"speaking",title:"Interview Mode",intro:"Role-play a club registration. Switch roles halfway through.",prompts:["What's your name?","How do you spell that?","Where are you from?","What nationality are you?","What club would you like to join?"],check:["I asked at least 4 questions.","I answered in full phrases.","I spelled one name aloud.","I used fictional private details."]}
      ]
    },
    {
      id:"passport",no:"05",title:"Passport Quest",focus:"Countries · nationalities · from",outcome:"I can say where people are from and what nationality they are.",art:"headphones",color:"pink",keks:"Country and nationality are not the same word. Obviously.",
      teacher:{time:"50–65 min",target:"country-nationality pairs; be from; nationality adjectives",problems:"Spain/Spanish, Poland/Polish, Britain/British; lower-case nationalities.",extension:"Tutor says a nationality; learner gives country + one invented person sentence."},
      stages:[
        {type:"match",title:"Country Link",intro:"Choose the matching nationality.",items:[
          ["Brazil",["Brazilian","British","Spanish"],"Brazilian"],["Britain",["British","Brazilian","Polish"],"British"],["Chile",["Chilean","Japanese","German"],"Chilean"],["Germany",["German","Spanish","Russian"],"German"],["Japan",["Japanese","Polish","Chilean"],"Japanese"],["Poland",["Polish","British","Brazilian"],"Polish"],["Russia",["Russian","German","Japanese"],"Russian"],["Spain",["Spanish","Polish","British"],"Spanish"]
        ]},
        {type:"memory",title:"Passport Pairs",intro:"Find the country–nationality pairs.",pairs:[["Brazil","Brazilian"],["Britain","British"],["Chile","Chilean"],["Germany","German"],["Japan","Japanese"],["Poland","Polish"],["Russia","Russian"],["Spain","Spanish"]]},
        {type:"input",title:"Nationality Spelling",intro:"Type the nationality. Capital letters are checked gently; spelling is not.",items:[
          ["Brazil →","Brazilian"],["Britain →","British"],["Chile →","Chilean"],["Germany →","German"],["Japan →","Japanese"],["Poland →","Polish"],["Russia →","Russian"],["Spain →","Spanish"]
        ]},
        {type:"choice",title:"From or Nationality?",intro:"Choose the sentence that answers the question.",items:[
          ["Where is Kenji from?",["He's from Japan.","He's Japanese."],"He's from Japan."],["What nationality is Kenji?",["He's Japanese.","He's from Japan."],"He's Japanese."],["Where is Marta from?",["She's from Poland.","She's Polish."],"She's from Poland."],["What nationality is Marta?",["She's Polish.","She's from Poland."],"She's Polish."],["Where are Luca and Ana from?",["They're from Spain.","They're Spanish."],"They're from Spain."],["What nationality are they?",["They're Spanish.","They're from Spain."],"They're Spanish."]
        ]},
        {type:"sort",title:"Word Ending Lab",intro:"Notice the endings. This is a pattern hunt, not a universal rule.",categories:["-ian / -an","-ish","-ese / other"],cards:[
          ["Brazilian","-ian / -an"],["Chilean","-ian / -an"],["Russian","-ian / -an"],["British","-ish"],["Polish","-ish"],["Spanish","-ish"],["Japanese","-ese / other"],["German","-ese / other"]
        ]},
        {type:"choice",title:"Error Hunt",intro:"Choose the corrected sentence.",items:[
          ["She's from Spanish.",["She's from Spain.","She's Spain."],"She's from Spain."],["He's Japan.",["He's Japanese.","He's from Japanese."],"He's Japanese."],["They're from polish.",["They're from Poland.","They're Poland."],"They're from Poland."],["Marta is poland.",["Marta is Polish.","Marta is from Polish."],"Marta is Polish."],["Kenji is japanese.",["Kenji is Japanese.","Kenji from Japan."],"Kenji is Japanese."],["Leo is from Germany. He is germany.",["He is German.","He is Germany."],"He is German."]
        ]},
        {type:"clues",title:"Boarding Gate",intro:"Read the clue, say the country and nationality aloud, then reveal.",items:[
          ["Camila lives in Rio de Janeiro.","Brazil → Brazilian"],["Hiro lives in Osaka.","Japan → Japanese"],["Ola lives in Kraków.","Poland → Polish"],["Lucía lives in Madrid.","Spain → Spanish"],["Lena lives in Berlin.","Germany → German"],["Sofía lives in Santiago.","Chile → Chilean"]
        ]},
        {type:"speaking",title:"Travel Party",intro:"Invent 4 guests for an international party. Give a name, country and nationality.",prompts:["This is …","He/She is from …","He/She is …","Ask your tutor: Where is … from?"],check:["I used 4 different countries.","I capitalised nationalities.","I used from + country.","I used be + nationality."]}
      ]
    },
    {
      id:"world",no:"06",title:"Where in the World?",focus:"Compass points · location language",outcome:"I can explain where a place is.",art:"sitting",color:"blue",keks:"North is easy. North-west is where people start negotiating.",
      teacher:{time:"45–60 min",target:"N/S/E/W + compound directions; in the north of",problems:"Confusing east/west; omitting of in ‘in the north of’; treating compass points as movement directions.",extension:"Tutor sketches a 3×3 map and gives three secret-location clues."},
      stages:[
        {type:"sort",title:"Compass Calibration",intro:"Drag each point to its compass group.",categories:["north side","south side","middle line"],cards:[
          ["north","north side"],["north-east","north side"],["north-west","north side"],["south","south side"],["south-east","south side"],["south-west","south side"],["east","middle line"],["west","middle line"]
        ]},
        {type:"choice",title:"Direction Check",intro:"Choose the opposite direction.",items:[
          ["north ↔",["south","east","north-east"],"south"],["east ↔",["west","south","north-west"],"west"],["north-east ↔",["south-west","north-west","south-east"],"south-west"],["north-west ↔",["south-east","south-west","east"],"south-east"],["south-east ↔",["north-west","north-east","west"],"north-west"],["south-west ↔",["north-east","north-west","east"],"north-east"]
        ]},
        {type:"input",title:"Spell the Compass",intro:"Complete each direction word.",items:[
          ["n _ r t h","north"],["s _ u t h","south"],["e _ s t","east"],["w _ s t","west"],["n o r t h - e _ s t","north-east"],["n o r t h - w _ s t","north-west"],["s o u t h - e _ s t","south-east"],["s o u t h - w _ s t","south-west"]
        ]},
        {type:"choice",title:"Map Radar",intro:"Imagine a 3×3 map: Pine Bay is top-left, Nova City top-right, Lake Town centre, Sunport bottom-right, Westhill bottom-left.",items:[
          ["Pine Bay is ___ of Lake Town.",["north-west","south-east","east"],"north-west"],["Nova City is ___ of Lake Town.",["north-east","south-west","west"],"north-east"],["Sunport is ___ of Lake Town.",["south-east","north-west","north"],"south-east"],["Westhill is ___ of Lake Town.",["south-west","north-east","east"],"south-west"],["Nova City is ___ of Pine Bay.",["east","west","south"],"east"],["Pine Bay is ___ of Nova City.",["west","east","south"],"west"]
        ]},
        {type:"match",title:"Location Phrase",intro:"Choose the phrase that completes the sentence.",items:[
          ["Scotland is … the UK.",["in the north of","north the","at north"],"in the north of"],["Bristol is … England.",["in the south-west of","at south-west","south-west in"],"in the south-west of"],["Kent is … England.",["in the south-east of","in south-east","at the east"],"in the south-east of"],["Wales is … Great Britain.",["in the west of","west at","on west"],"in the west of"],["Aberdeen is … Scotland.",["in the north-east of","at north-east","on north-east"],"in the north-east of"],["Cornwall is … England.",["in the south-west of","south-west on","at the south-west"],"in the south-west of"]
        ]},
        {type:"reorder",title:"Secret Location",intro:"Put the clues into a clear order from general to specific.",lines:["It is in the United Kingdom.","It is in England.","It is in the south-west of England.","It is a city called Bristol."],answer:["It is in the United Kingdom.","It is in England.","It is in the south-west of England.","It is a city called Bristol."]},
        {type:"memory",title:"Compass Snap",intro:"Find the English–Russian pairs.",pairs:[["north","север"],["south","юг"],["east","восток"],["west","запад"],["north-east","северо-восток"],["south-west","юго-запад"]]},
        {type:"speaking",title:"Where Am I?",intro:"Choose one place on a real or imaginary map. Give 3 clues; your tutor guesses.",prompts:["It's in the … of …","It's north/south/east/west of …","It's near …","The place is …"],check:["I used one compound direction.","I used in the … of correctly.","I gave at least 3 clues.","My tutor guessed or asked a follow-up."]}
      ]
    },
    {
      id:"country",no:"07",title:"Country Lab",focus:"Country factfiles · UK culture · geography data",outcome:"I can give a short factfile-style presentation about a country.",art:"reading",color:"yellow",keks:"Facts first. Decorative flags later.",
      teacher:{time:"60–75 min",target:"factfile vocabulary; reading for gist/detail; country presentation",problems:"Country vs capital; overloading with exact statistics; reading large numbers.",extension:"Learner researches one extra fact after the lesson and adds it next time with a source."},
      reading:{title:"Japan: islands, cities and mountains",text:"Japan is an island country in East Asia. Its capital is Tokyo. The country includes thousands of islands, and mountains cover much of the land. Mount Fuji is Japan's highest mountain. The currency is the yen. Japan has a population of about 123 million people. Visitors come for modern cities, historic places, food, nature and seasonal landscapes."},
      stages:[
        {type:"choice",title:"Read for Gist",intro:"Read the Japan factfile above. Choose the best answer.",items:[
          ["The text is mainly about …",["basic facts about Japan","one Japanese family","a sports club"],"basic facts about Japan"],["Japan is in …",["East Asia","South America","Western Europe"],"East Asia"],["The capital is …",["Tokyo","Osaka","Kyoto"],"Tokyo"],["The currency is …",["the yen","the pound","the euro"],"the yen"],["Much of Japan is …",["mountainous","desert","flat farmland only"],"mountainous"],["The population is approximately …",["123 million","12 million","1.23 billion"],"123 million"]
        ]},
        {type:"match",title:"Factfile Vocabulary",intro:"Choose the best meaning in context.",items:[
          ["capital",["main city of a country","money used in a country","number of people"],"main city of a country"],["currency",["money used in a country","mountain chain","national flag"],"money used in a country"],["population",["number of people living in a place","distance from a place","surface colour"],"number of people living in a place"],["include",["contain as a part","travel across","measure exactly"],"contain as a part"],["mountains",["very high areas of land","large rivers","city districts"],"very high areas of land"],["location",["where something is","how old something is","what something costs"],"where something is"]
        ]},
        {type:"input",title:"Scan for Facts",intro:"Type the fact from the text.",items:[
          ["Capital:","Tokyo"],["Region:","East Asia"],["Currency:","yen"],["Highest mountain:","Mount Fuji"],["Population (about):","123 million"],["Country type:","island country"]
        ]},
        {type:"choice",title:"Culture Corner — UK",intro:"Check what you know. The United Kingdom is not the same thing as England.",items:[
          ["The UK includes …",["England, Scotland, Wales and Northern Ireland","England and Scotland only","England, Wales and Ireland"],"England, Scotland, Wales and Northern Ireland"],["The capital of England is …",["London","Cardiff","Belfast"],"London"],["The capital of Scotland is …",["Edinburgh","London","Swansea"],"Edinburgh"],["The capital of Wales is …",["Cardiff","Belfast","Glasgow"],"Cardiff"],["The capital of Northern Ireland is …",["Belfast","Dublin","Edinburgh"],"Belfast"],["Great Britain is the island containing …",["England, Scotland and Wales","all four parts of the UK","England only"],"England, Scotland and Wales"],["The UK currency is …",["the pound sterling","the euro","the yen"],"the pound sterling"],["The Union Jack is …",["the flag of the United Kingdom","the flag of England only","a city"],"the flag of the United Kingdom"]
        ]},
        {type:"sort",title:"UK Map Drop",intro:"Place each capital with the correct part of the UK.",categories:["England","Scotland","Wales","Northern Ireland"],cards:[
          ["London","England"],["Edinburgh","Scotland"],["Cardiff","Wales"],["Belfast","Northern Ireland"]
        ]},
        {type:"choice",title:"Earth Data Lab",intro:"Extra geography route: read numbers and data words.",items:[
          ["12,756 km is a …",["diameter","currency","postcode"],"diameter"],["149,600,000 km can describe a …",["distance","nationality","surname"],"distance"],["71% means …",["seventy-one per cent","seventy-one thousand","seventeen per cent"],"seventy-one per cent"],["surface area means …",["the total area of a surface","the age of a planet","a compass point"],"the total area of a surface"],["Earth is part of the …",["solar system","postcode","membership club"],"solar system"],["Liquid water is one condition …",["suitable for life","for a driving licence","for a surname"],"suitable for life"]
        ]},
        {type:"profile",title:"Country Creator",intro:"Build a short factfile. You may use a real country or a teacher-approved fictional one.",fields:[
          ["country","Country","Japan"],["capital","Capital","Tokyo"],["location","Location","East Asia"],["currency","Currency","yen"],["population","Population","about 123 million"],["landscape","Landscape","mountains and islands"],["place","One place to visit","Mount Fuji"]
        ]},
        {type:"speaking",title:"60-Second Country Pitch",intro:"Use your factfile. Speak without reading every word.",prompts:["___ is in …","Its capital is …","The currency is …","It has …","A place to visit is … because …"],check:["I named the country and location.","I included capital + currency.","I used at least 2 geography words.","I spoke for about 45–60 seconds."]}
      ]
    },
    {
      id:"final",no:"08",title:"The World File",focus:"Mixed retrieval · character creation · speaking",outcome:"I can introduce a person, their family, belongings and place in the world.",art:"skeptical",color:"pink",keks:"No notes for the first round. Let's see what's actually there.",
      teacher:{time:"45–60 min",target:"mixed retrieval of Module 1",problems:"Learner may rely on recognition instead of recall. Keep first attempt closed-book, then reopen Word Lab if needed.",extension:"Record a 60–90 second character introduction and compare with the first lesson's speaking."},
      stages:[
        {type:"choice",title:"Round 1 — Family Signal",intro:"Fast retrieval. No Word Lab for the first try.",items:[
          ["Your mum's brother is your …",["uncle","cousin","son"],"uncle"],["Your aunt's child is your …",["cousin","brother","dad"],"cousin"],["Two children born together are …",["twins","parents","husbands"],"twins"],["She ___ two sisters.",["has got","have got","is got"],"has got"],["___ they got any cousins?",["Have","Has","Are"],"Have"],["No, he ___ .",["hasn't","haven't","isn't"],"hasn't"]
        ]},
        {type:"choice",title:"Round 2 — Face Scan",intro:"Identify the accurate description language.",items:[
          ["Correct:",["She has got wavy hair.","She is wavy hair."],"She has got wavy hair."],["Correct:",["He is tall and slim.","He has tall and slim."],"He is tall and slim."],["Hair with curls is …",["curly","straight","fair"],"curly"],["Light hair can be …",["fair","fat","old"],"fair"],["A person around 40–60 can be …",["middle-aged","curly","short-haired"],"middle-aged"],["Grey usually describes …",["hair/colour","height","family relation"],"hair/colour"]
        ]},
        {type:"choice",title:"Round 3 — Lost & Found",intro:"Choose the ownership form.",items:[
          ["This is ___ bag.",["my","mine"],"my"],["The bag is ___ .",["my","mine"],"mine"],["It's ___ camera.",["her","hers"],"her"],["The camera is ___ .",["her","hers"],"hers"],["Those are ___ cards.",["their","theirs"],"their"],["Those cards are ___ .",["their","theirs"],"theirs"]
        ]},
        {type:"choice",title:"Round 4 — ID Check",intro:"Match the question to the information you need.",items:[
          ["Need a surname:",["What's your surname?","Where are you from?"],"What's your surname?"],["Need spelling:",["How do you spell that?","How old are you?"],"How do you spell that?"],["Need nationality:",["What nationality are you?","What's your postcode?"],"What nationality are you?"],["Need country:",["Where are you from?","What's your date of birth?"],"Where are you from?"],["Need age:",["How old are you?","What's your address?"],"How old are you?"],["Someone says ‘Nice to meet you.’",["Nice to meet you too.","Fine, thanks."],"Nice to meet you too."]
        ]},
        {type:"choice",title:"Round 5 — Passport Control",intro:"Country or nationality? Choose carefully.",items:[
          ["She's from …",["Spain","Spanish"],"Spain"],["She's …",["Spain","Spanish"],"Spanish"],["He's from …",["Japan","Japanese"],"Japan"],["He's …",["Japan","Japanese"],"Japanese"],["They're from …",["Poland","Polish"],"Poland"],["They're …",["Poland","Polish"],"Polish"]
        ]},
        {type:"choice",title:"Round 6 — Map Signal",intro:"Finish each location statement.",items:[
          ["Scotland is in the ___ of the UK.",["north","south","east"],"north"],["Bristol is in the ___ of England.",["south-west","north-east","north"],"south-west"],["Opposite of east:",["west","north","south-east"],"west"],["Opposite of north-east:",["south-west","north-west","south-east"],"south-west"],["Correct phrase:",["in the north of","at north of","on the north"],"in the north of"],["Cardiff is the capital of …",["Wales","Scotland","England"],"Wales"]
        ]},
        {type:"profile",title:"Create Your Character",intro:"Invent one person. Build the file, then use it for the final speaking task.",fields:[
          ["name","Name","Maya Rivera"],["age","Age","12"],["family","Family","one brother and two cousins"],["appearance","Appearance","tall, slim, long wavy hair"],["country","Country","Spain"],["nationality","Nationality","Spanish"],["belonging","Favourite belonging","a blue skateboard"],["location","Location","in the north of Spain"]
        ]},
        {type:"speaking",title:"Final Briefing",intro:"Introduce your character for 60–90 seconds. The first attempt is without a model.",prompts:["name + age","family","appearance","country + nationality","one belonging + whose it is","location"],check:["I used family vocabulary.","I used one possessive form.","I used country + nationality correctly.","I used one location phrase.","I spoke in connected sentences."]}
      ]
    }
  ]
};
