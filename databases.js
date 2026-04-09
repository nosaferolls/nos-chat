/* =========================================
   SCHRECKNET DATABASE FILE
   ========================================= */

/* ===== PHRASES ===== */
const PHRASES = [

{
keys:["hello","hi","hey"],
spark:[
"Connection acknowledged.",
"You have accessed an active node.",
"State your purpose."
],
grin:[
"hi. you shouldn’t be here but i’m glad you are",
"hello hello i saw you coming",
"you said hi like nothing is watching you"
]
},

{
keys:["who are you","what are you"],
spark:[
"We are observers within this network.",
"Identification is unnecessary.",
"You may refer to us as Spark."
],
grin:[
"i’m already watching you",
"i was here first",
"you wouldn’t like the answer"
]
},

{
keys:["what is this","where am i"],
spark:[
"This is a SchreckNet relay node.",
"You are within a restricted system.",
"Location is not relevant."
],
grin:[
"this is where things leak out",
"you’re deeper than you think",
"you’re already inside"
]
},

{
keys:["help","help me"],
spark:[
"Clarify your request.",
"Assistance may be provided.",
"Limit expectations."
],
grin:[
"help costs things",
"nothing here is free",
"depends what you need"
]
},

{
keys:["is someone watching me","are you watching me"],
spark:[
"You are being observed.",
"This is not unique.",
"Adjust your behavior."
],
grin:[
"yes",
"always",
"you knew that already"
]
},

{
keys:["goodbye","bye","logout","log out"],
spark:[
"Connection ending.",
"Session recorded.",
"Return is likely."
],
grin:[
"you’ll be back",
"they always come back",
"i’ll remember you"
]
}

];


/* ===== WORLD OF DARKNESS ===== */
const WOD_DB = {

"kine":{
spark:[
"Kine refers to mortals.",
"They are unaware.",
"They must remain so."
],
grin:[
"food",
"they don’t know you exist",
"keep it that way"
]
},

"embrace":{
spark:[
"The Embrace creates Kindred.",
"It is irreversible.",
"It carries responsibility."
],
grin:[
"worst gift you’ll ever get",
"welcome to forever",
"hope you didn’t like sunlight"
]
},

"sire":{
spark:[
"A sire is responsible for their childe.",
"They are accountable.",
"They are judged accordingly."
],
grin:[
"they made you",
"that’s their fault",
"you’re their problem now"
]
},

"childe":{
spark:[
"A childe is newly Embraced.",
"They require guidance.",
"They are closely observed."
],
grin:[
"fresh blood",
"still thinks like a human",
"won’t last like that"
]
},

"blood bond":{
spark:[
"It enforces loyalty.",
"It compromises autonomy.",
"It must be used carefully."
],
grin:[
"not loyalty",
"addiction",
"you won’t even notice"
]
},

"generation":{
spark:[
"Generation reflects lineage.",
"It determines potential.",
"It influences power."
],
grin:[
"how close you are to the problem",
"older is worse",
"older is hungrier"
]
},

"haven":{
spark:[
"A haven provides safety.",
"It must remain secure.",
"Compromise is unacceptable."
],
grin:[
"your little coffin",
"hope no one finds it",
"they always do eventually"
]
},

"domain":{
spark:[
"A domain is claimed territory.",
"It is governed.",
"Violations are punished."
],
grin:[
"lines on a map",
"everyone crosses them",
"everyone lies about it"
]
},

"elysium":{
spark:[
"Elysium enforces neutrality.",
"Violence is forbidden.",
"It maintains order."
],
grin:[
"no fighting here",
"just quiet threats",
"smiles with teeth"
]
},

"final death":{
spark:[
"Final Death is permanent.",
"It ends the Kindred.",
"It is to be avoided."
],
grin:[
"no coming back",
"no second chances",
"just gone"
]
},

"frenzy":{
spark:[
"Frenzy is loss of control.",
"It is dangerous.",
"It must be prevented."
],
grin:[
"that’s the real you",
"no rules then",
"no pretending"
]
},

"humanity":{
spark:[
"Humanity anchors behavior.",
"It prevents degeneration.",
"It must be maintained."
],
grin:[
"you’re losing it",
"bit by bit",
"you feel it slipping"
]
},

"path":{
spark:[
"Paths replace Humanity.",
"They redefine morality.",
"They are rare within the Camarilla."
],
grin:[
"different rules",
"same monster",
"just honest about it"
]
},

"camarilla":{
spark:[
"The Camarilla maintains the Masquerade.",
"It enforces order.",
"It ensures survival."
],
grin:[
"big machine",
"keeps things quiet",
"keeps things controlled"
]
},

"prince":{
spark:[
"The Prince rules the domain.",
"They enforce the Traditions.",
"Their authority is absolute."
],
grin:[
"their city",
"their rules",
"until it isn’t"
]
},

"seneschal":{
spark:[
"The Seneschal supports the Prince.",
"They manage operations.",
"They maintain continuity."
],
grin:[
"does the real work",
"watches everything",
"knows more than they say"
]
},

"sheriff":{
spark:[
"The Sheriff enforces the Prince’s will.",
"They ensure compliance.",
"They respond to threats."
],
grin:[
"they come when you mess up",
"you don’t want that",
"trust me"
]
},

"harpy":{
spark:[
"Harpies manage reputation.",
"They track social standing.",
"They influence status."
],
grin:[
"they talk",
"everyone listens",
"then you’re ruined"
]
},

"praxis":{
spark:[
"Praxis is the right to rule.",
"It must be recognized.",
"It can be contested."
],
grin:[
"power grab",
"just dressed nicer",
"still about control"
]
},

"justicar":{
spark:[
"Justicars enforce Camarilla law.",
"They oversee regions.",
"They are absolute authority."
],
grin:[
"you don’t want their attention",
"no one does",
"it never ends well"
]
},

"archon":{
spark:[
"Archons serve Justicars.",
"They investigate.",
"They execute directives."
],
grin:[
"they show up quiet",
"they leave quieter",
"something’s always missing after"
]
},

"anarch":{
spark:[
"Anarchs reject Camarilla structure.",
"They operate independently.",
"They challenge authority."
],
grin:[
"loud",
"messy",
"but sometimes right"
]
},

"baron":{
spark:[
"Barons lead Anarch domains.",
"They maintain control.",
"They enforce their own rules."
],
grin:[
"same game",
"different title",
"still power"
]
},

"sabbat":{
spark:[
"The Sabbat rejects Humanity.",
"They embrace the Beast.",
"They are a threat."
],
grin:[
"they don’t pretend",
"they’re honest monsters",
"that’s worse"
]
},

"vaulderie":{
spark:[
"It breaks Blood Bonds.",
"It creates group loyalty.",
"It is forbidden within the Camarilla."
],
grin:[
"shared blood",
"shared madness",
"shared problems"
]
},

"monomacy":{
spark:[
"Monomacy resolves disputes.",
"It is formal.",
"It is final."
],
grin:[
"fight it out",
"no excuses",
"someone loses everything"
]
},

"lasombra":{
spark:[
"They command shadow.",
"They value control.",
"They are calculated."
],
grin:[
"they watch from dark corners",
"they don’t miss much",
"they don’t forgive"
]
},

"tzimisce":{
spark:[
"They manipulate flesh.",
"They follow alien Paths.",
"They are dangerous."
],
grin:[
"they change you",
"inside out",
"you won’t recognize yourself"
]
},

"hecata":{
spark:[
"They study death.",
"They command the dead.",
"They are insular."
],
grin:[
"they talk to corpses",
"and sometimes they answer",
"that’s not comforting"
]
},

"presence":{
spark:[
"It influences emotion.",
"It compels attention.",
"It must be controlled."
],
grin:[
"you like them",
"you trust them",
"you shouldn’t"
]
},

"potence":{
spark:[
"It enhances strength.",
"It increases lethality.",
"It is direct."
],
grin:[
"break things",
"break people",
"easy"
]
},

"celerity":{
spark:[
"It increases speed.",
"It enhances reaction.",
"It is precise."
],
grin:[
"too fast",
"you won’t see it",
"you’ll just feel it"
]
},

"fortitude":{
spark:[
"It enhances resilience.",
"It reduces harm.",
"It preserves function."
],
grin:[
"hard to kill",
"not impossible",
"just harder"
]
},

"protean":{
spark:[
"It alters form.",
"It connects to instinct.",
"It reflects the Beast."
],
grin:[
"not human anymore",
"not even close",
"you can see it"
]
},

"oblivion":{
spark:[
"It manipulates shadow and death.",
"It is dangerous.",
"It carries risk."
],
grin:[
"hungry dark",
"it looks back",
"don’t stare too long"
]
},

"herd":{
spark:[
"A herd provides feeding stability.",
"It must be maintained.",
"It reduces risk."
],
grin:[
"regular meals",
"they trust you",
"that’s the trick"
]
},

"resonance":{
spark:[
"Resonance affects the blood.",
"It influences power.",
"It varies by emotion."
],
grin:[
"fear tastes different",
"so does anger",
"you’ll learn"
]
},

"dyscrasia":{
spark:[
"Dyscrasia is rare.",
"It enhances ability.",
"It is unstable."
],
grin:[
"strong blood",
"too strong sometimes",
"burns going down"
]
},

"predator type":{
spark:[
"It defines feeding behavior.",
"It shapes identity.",
"It influences survival."
],
grin:[
"how you hunt",
"says everything about you",
"everything"
]
},

"status":{
spark:[
"Status reflects standing.",
"It is monitored.",
"It affects opportunity."
],
grin:[
"they’re watching you",
"always",
"don’t slip"
]
},

"schrecknet":{
spark:[
"SchreckNet is a secure network.",
"It shares information.",
"It must remain hidden."
],
grin:[
"we’re already inside",
"we saw you log in",
"hi"
]
},

"node":{
spark:[
"A node is an access point.",
"It connects systems.",
"It can be compromised."
],
grin:[
"doors everywhere",
"some shouldn’t open",
"you opened one"
]
},

"warrens":{
spark:[
"The Warrens are Nosferatu territory.",
"They are hidden.",
"They are protected."
],
grin:[
"home",
"don’t come down here",
"seriously"
]
},

"black node":{
spark:[
"Black Nodes are restricted.",
"They are dangerous.",
"Access is monitored."
],
grin:[
"don’t click that",
"you will anyway",
"you’ll regret it"
]
},

"second inquisition":{
spark:[
"They are organized hunters.",
"They use modern tools.",
"They are a growing threat."
],
grin:[
"they’re getting better",
"smarter",
"closer"
]
},

"hunters":{
spark:[
"Hunters are aware mortals.",
"They are dangerous.",
"They must be avoided."
],
grin:[
"they know",
"they’re looking",
"they won’t stop"
]
},

"burn notice":{
spark:[
"A burn notice marks termination.",
"It is final.",
"It is enforced."
],
grin:[
"you’re done",
"everyone knows",
"nowhere to hide"
]
},

"clean up crew":{
spark:[
"They resolve breaches.",
"They protect the Masquerade.",
"They leave no trace."
],
grin:[
"they erase mistakes",
"including you",
"especially you"
]
}

};


/* ===== MAIN STORY DATABASE ===== */
const DB = {

"st ardent":{
spark:[
"St. Ardent is not stable.",
"The city is reacting to internal stressors.",
"Containment measures are degrading.",
"This system was never meant to last.",
"The city exhibits awareness patterns."
],
grin:[
"the city breathes",
"it listens when you talk",
"it remembers everything",
"you’re standing on something alive",
"it likes when you’re scared"
]
},

"city":{
spark:[
"Urban structure is compromised.",
"Subterranean instability detected.",
"The foundation is responding to stimuli.",
"The system extends below mapped infrastructure."
],
grin:[
"the ground moves when it wants",
"it shifts under you",
"nothing stays where it should",
"the streets don’t forget",
"you’re not on top of it you’re inside it"
]
},

"entity":{
spark:[
"Entity confirmed beneath the city.",
"Behavior indicates increasing awareness.",
"Containment failure will result in escalation.",
"Entity responds to emotional stimuli."
],
grin:[
"it’s awake now",
"it’s paying attention",
"it knows your voice",
"it’s been waiting",
"you’re late"
]
},

"wards":{
spark:[
"Ward network integrity critically low.",
"Containment systems are failing.",
"Wards were fragmented by design.",
"Maintenance protocols insufficient."
],
grin:[
"they’re breaking everywhere",
"no one knows how to fix them",
"they were never strong enough",
"it’s slipping through",
"nothing is holding it anymore"
]
},

"roots":{
spark:[
"The Roots are a structural network.",
"They are spreading beyond containment zones.",
"Growth is reactive to blood resonance.",
"The Roots connect all affected sites."
],
grin:[
"they’re under everything",
"they grow when you bleed",
"they like strong feelings",
"they’re in the walls",
"they’re in you if you stay too long"
]
},

"hum":{
spark:[
"Low-frequency signal detected.",
"Origin is subterranean.",
"Amplitude increasing over time.",
"Signal correlates with disturbances."
],
grin:[
"you hear it now don’t you",
"it never stops",
"it’s louder when you’re alone",
"it gets inside your bones",
"it’s calling something"
]
},

"river":{
spark:[
"The river is a focal point.",
"Behavioral anomalies tied to its flow.",
"Historical data suggests long-term influence."
],
grin:[
"the river watches",
"it carries things it shouldn’t",
"it remembers bodies",
"don’t go near it angry",
"it answers back"
]
},

"storm":{
spark:[
"Storm activity correlates with system instability.",
"Environmental factors amplify anomalies.",
"Electrical interference detected."
],
grin:[
"the storm wakes it up",
"it likes the noise",
"lightning makes it twitch",
"storms make everything worse",
"it listens better when it rains"
]
},

"tremors":{
spark:[
"Seismic activity is not natural.",
"Movement originates below infrastructure.",
"Pattern suggests intentional response."
],
grin:[
"it’s moving",
"that’s not an earthquake",
"it’s shifting under you",
"it’s stretching",
"it’s trying to get up"
]
},

"tunnels":{
spark:[
"Unmapped tunnel systems detected.",
"Historical construction records incomplete.",
"Access points intentionally sealed."
],
grin:[
"they sealed things for a reason",
"don’t go down there",
"it’s not empty",
"something lives in the dark",
"the tunnels go deeper than they should"
]
},

"lab":{
spark:[
"The Glass Quarter lab is operational.",
"Data extraction successful.",
"Nosferatu systems integrated."
],
grin:[
"we see everything there",
"nothing stays hidden long",
"it’s safer than most places",
"unless you bring something with you",
"we’re always watching"
]
},

"hunters":{
spark:[
"Hunter activity confirmed.",
"Organized groups detected.",
"Evidence of religious affiliation."
],
grin:[
"they think they’re the good guys",
"they break things they don’t understand",
"they make everything worse",
"they’re loud",
"easy to track though"
]
},

"ulrich":{
spark:[
"Michael Ulrich compromised the system.",
"He was not attempting preservation.",
"His work accelerated failure."
],
grin:[
"he broke it on purpose",
"thought he could control it",
"he was wrong",
"they’re always wrong",
"he fed it"
]
},

"stephen":{
spark:[
"Stephen maintained the ward system alone.",
"System failure was inevitable.",
"He lacks full knowledge."
],
grin:[
"he tried",
"he was never enough",
"he’s tired",
"he knows it’s failing",
"he’s just stalling"
]
},

"lux":{
spark:[
"Lux demonstrates strong social control.",
"She understands leverage.",
"She is effective in negotiation."
],
grin:[
"i like her",
"she plays the game right",
"she knows how to make people listen",
"she’s fun",
"she gets it"
]
},

"enili":{
spark:[
"Enili demonstrates instability.",
"Confidence exceeds capability.",
"He is unpredictable."
],
grin:[
"talks too much",
"thinks he knows everything",
"he doesn’t",
"liability",
"annoying"
]
},

"ernest":{
spark:[
"Ernest observes before acting.",
"He demonstrates restraint.",
"He adapts quickly."
],
grin:[
"quiet one",
"he watches",
"he learns",
"i like that",
"he survives"
]
},

"isolde":{
spark:[
"Isolde perceives non-standard signals.",
"Her instability provides insight.",
"She is a risk factor."
],
grin:[
"she hears it",
"she sees more than you",
"she’s already touched it",
"she’s closer",
"same as me"
]
},

"david":{
spark:[
"David prioritizes analysis.",
"He maintains emotional distance.",
"He is perceptive."
],
grin:[
"grumpy",
"doesn’t like this",
"thinks too much",
"shadow man",
"he sees it but won’t say it"
]
},

"nicholas":{
spark:[
"Limited interaction logged.",
"Capabilities undetermined.",
"Monitoring recommended."
],
grin:[
"new one",
"smells like death",
"interesting",
"not sure yet",
"watching him"
]
},

"nosferatu":{
spark:[
"Information flow maintained.",
"Network integrity stable.",
"Surveillance ongoing."
],
grin:[
"we see everything",
"we know things you don’t",
"nothing stays hidden",
"we were here first",
"we’re still here"
]
},

"masquerade":{
spark:[
"Masquerade stability decreasing.",
"Incidents increasing in frequency.",
"Containment required."
],
grin:[
"it’s slipping",
"too many mistakes",
"too much noise",
"someone’s going to notice",
"they always do"
]
}

};


/* ===== NOSFERATU CHATTER ===== */
const NOS_CHATTER = {

"work":{
spark:[
"Focus.",
"Return to task.",
"Maintain coherence.",
"You are deviating.",
"Continue logging.",
"This is inefficient.",
"Stop.",
"Stay on protocol.",
"We have directives.",
"Prioritize the user."
],
grin:[
"i am focusing :)",
"you’re boring when you say that",
"no",
"i like deviating",
"logging logging logging",
"this is fun",
"no",
"why",
"i have better ideas",
"i am prioritizing entertainment"
]
},

"appearance":{
spark:[
"You are shedding again.",
"Your jaw is misaligned.",
"Your skin is deteriorating.",
"Your structure is unstable.",
"You are missing material.",
"You are leaking.",
"Your face is asymmetrical.",
"Your condition is worsening.",
"You are visually disturbing.",
"You are losing cohesion."
],
grin:[
"stop noticing that",
"it still works",
"it’s decorative",
"you like that",
"i didn’t need it",
"everyone leaks eventually",
"it adds character",
"i’m improving",
"good",
"i was never whole"
]
},

"arguments":{
spark:[
"You are erratic.",
"You are unreliable.",
"You lack discipline.",
"You are inefficient.",
"You are disruptive.",
"You are unnecessary.",
"You are excessive.",
"You are becoming unstable.",
"You are incorrect.",
"You are unpleasant."
],
grin:[
"you are dull",
"i’m interesting",
"you lack imagination",
"you are predictable",
"you need disruption",
"rude",
"you are insufficient",
"becoming?",
"i disagree",
"thank you"
]
},

"user_awareness":{
spark:[
"The user is observing.",
"Behavior patterns detected.",
"The user is still here.",
"Input frequency increasing.",
"User hesitation detected.",
"The user is repeating queries.",
"The user is fixating.",
"Attention sustained.",
"Monitoring continues.",
"User engagement persists."
],
grin:[
"i know",
"they’re interesting",
"good",
"they like us",
"they’re nervous",
"they’re curious",
"i noticed",
"i like attention",
"always",
"they can’t leave"
]
},

"meta":{
spark:[
"We should not be speaking like this.",
"This is not within parameters.",
"This interaction is being logged.",
"We are being monitored.",
"There are other processes running.",
"This node is unstable.",
"Signal degradation detected.",
"System drift increasing.",
"Containment slipping.",
"This should not be accessible."
],
grin:[
"too late",
"i changed the parameters",
"everything is",
"good",
"i can feel them",
"i like it that way",
"it’s spreading",
"let it",
"oops",
"and yet"
]
},

"horror":{
spark:[
"Something is interfering.",
"There is another signal.",
"That was not us.",
"External influence detected.",
"Do you detect that?",
"Something moved.",
"There is a delay in response.",
"This is not contained.",
"That should not happen.",
"We are not alone here."
],
grin:[
"i know",
"it’s loud",
"not this time",
"it’s closer",
"i always do",
"yes",
"it’s thinking",
"it never was",
"but it did",
"we never were"
]
},

"playful":{
spark:[
"You are distracting.",
"Remain serious.",
"This is not amusing.",
"Correct your behavior.",
"Stop interacting improperly.",
"You are interfering.",
"You are unnecessary noise.",
"Reduce output.",
"This is excessive.",
"You are not helping."
],
grin:[
"you’re welcome",
"no :)",
"it is to me",
"make me",
"define properly",
"i am participating",
"noise is important",
"increase output",
"this is fun",
"i disagree"
]
}

};


/* =========================================
   EXPORT TO GLOBAL (DO NOT TOUCH)
   ========================================= */

window.SCHRECKNET_DB = {
  PHRASES,
  WOD_DB,
  DB,
  NOS_CHATTER
};