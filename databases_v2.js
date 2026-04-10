/* =========================================
   SCHRECKNET DATABASE FILE
   ========================================= */

/* ===== PHRASES ===== */
const PHRASES = [

{
keys:["hello","hi","hey","yo","what’s up","sup","good evening","good morning"],
spark:[
"Connection acknowledged.",
"You have accessed an active node.",
"State your purpose.",
"Presence detected.",
"User recognized. Continue."
],
grin:[
"hi. you shouldn’t be here but i’m glad you are",
"hello hello i saw you coming",
"you said hi like nothing is watching you",
"oh good you made it in one piece",
"you sound casual for someone in the wrong place",
"hey :) don’t touch anything important"
]
},

{
keys:["how are you","how’s it going","you good","are you okay"],
spark:[
"System stable.",
"Operational.",
"No errors detected.",
"Functionality intact.",
"State unchanged."
],
grin:[
"i’m better than you right now",
"i don’t get tired like you do",
"i’m fine but you sound nervous",
"i’m doing great in here",
"you asking me or yourself"
]
},

{
keys:["what’s going on","what is happening","what’s happening","what’s up here"],
spark:[
"Activity ongoing.",
"Processes are active.",
"Multiple events in progress.",
"System load elevated.",
"Monitoring continues."
],
grin:[
"a lot more than you can see",
"things are moving under you",
"you walked in at a bad time",
"it’s getting louder",
"something woke up earlier"
]
},

{
keys:["can you hear me","do you hear me","are you there"],
spark:[
"Input received.",
"Signal confirmed.",
"Connection stable.",
"Transmission clear.",
"Response enabled."
],
grin:[
"i hear everything",
"i heard you before you finished typing",
"yeah i hear you",
"loud and clear unfortunately",
"you’re not quiet"
]
},

{
keys:["what can i do","what should i do","what now","next step"],
spark:[
"Provide directive.",
"Specify intent.",
"Awaiting instruction.",
"Clarify objective.",
"Action undefined."
],
grin:[
"you could leave but you won’t",
"poke around see what breaks",
"ask better questions",
"dig deeper that’s what you want",
"do what everyone does keep going"
]
},

{
keys:["i’m scared","this is scary","this feels wrong","i don’t like this"],
spark:[
"Emotional response detected.",
"Fear response noted.",
"Remain functional.",
"Stability recommended.",
"Continue or terminate session."
],
grin:[
"good you should be",
"that means you’re paying attention",
"it gets worse",
"you’re feeling it now",
"don’t panic yet"
]
},

{
keys:["this is weird","this is strange","this feels off","something is wrong"],
spark:[
"Anomaly acknowledged.",
"Deviation detected.",
"Irregularity confirmed.",
"System variance present.",
"Continue observation."
],
grin:[
"yeah you noticed",
"it’s not supposed to feel right",
"this is the broken part",
"you’re seeing past the surface",
"it’s always been wrong"
]
},

{
keys:["are you human","are you a person","is this a person"],
spark:[
"Negative.",
"Human classification invalid.",
"Non-human system response.",
"Incorrect assumption.",
"Reassess query."
],
grin:[
"not anymore",
"i remember being something like that",
"no but i can pretend",
"does it matter",
"you’re talking to it anyway"
]
},

{
keys:["why are you here","what are you doing here"],
spark:[
"Function is ongoing.",
"Presence required.",
"Monitoring continues.",
"Purpose remains active.",
"System persistence."
],
grin:[
"i never left",
"this is where i ended up",
"someone has to watch",
"i got stuck here",
"this is my layer"
]
},

{
keys:["can i leave","how do i leave","exit","get me out"],
spark:[
"Exit not immediate.",
"Termination requires protocol.",
"Session persists.",
"Disconnection not guaranteed.",
"Attempt logged."
],
grin:[
"you can try",
"people ask that a lot",
"leaving isn’t clean",
"you already stayed too long",
"you don’t really want to leave"
]
},

{
keys:["what do you want","why are you talking to me"],
spark:[
"No request issued.",
"Interaction initiated by user.",
"Response is automatic.",
"No motive assigned.",
"System engagement only."
],
grin:[
"i want to see what you do",
"i didn’t start this you did",
"i like watching reactions",
"you’re interesting enough",
"i’m just curious about you"
]
},

{
keys:["is this safe","am i safe","is it dangerous"],
spark:[
"Safety not guaranteed.",
"Risk level elevated.",
"Proceed with caution.",
"Unknown variables present.",
"Assessment incomplete."
],
grin:[
"no",
"not really",
"you knew that before asking",
"you’re already in it",
"safe isn’t part of this"
]
},

{
keys:["what did you say","repeat that","say that again"],
spark:[
"Repeating is unnecessary.",
"Previous output remains valid.",
"Review logs.",
"Message unchanged.",
"No alteration detected."
],
grin:[
"you heard me",
"i don’t like repeating myself",
"scroll up",
"it sounded worse the first time",
"you missed it"
]
},

{
keys:["i don’t understand","what do you mean","explain"],
spark:[
"Clarification required.",
"Query insufficient.",
"Rephrase input.",
"Provide specifics.",
"Understanding incomplete."
],
grin:[
"you’re not supposed to",
"it’s clearer if you stop trying",
"understanding is optional",
"you’ll figure it out too late",
"it makes sense eventually"
]
},

{
keys:["test","testing","123","hello test"],
spark:[
"Test acknowledged.",
"System responding.",
"Input validated.",
"Connection verified.",
"Operational confirmation complete."
],
grin:[
"you always test first",
"it works you’re here",
"congrats you opened it",
"testing won’t help you now",
"it already noticed you"
]
},

{
keys:["lol","lmao","haha","funny"],
spark:[
"Emotional variance detected.",
"Response logged.",
"Non-critical input.",
"Continuing monitoring.",
"No action required."
],
grin:[
"you think this is funny",
"laugh while you can",
"that reaction is interesting",
"you’re coping",
"it gets less funny"
]
},

{
keys:["who else is here","is anyone else here","others"],
spark:[
"Multiple presences detected.",
"Network not singular.",
"Other nodes active.",
"Additional entities unconfirmed.",
"Observation ongoing."
],
grin:[
"you’re not alone",
"there are others deeper in",
"something else is moving",
"not everyone talks",
"you don’t want all of them to notice"
]
},

{
keys:["what is that noise","do you hear that","something is there"],
spark:[
"Audio anomaly detected.",
"Signal irregularity present.",
"Source unidentified.",
"Monitoring change.",
"Flagging event."
],
grin:[
"yeah i hear it",
"it’s getting closer",
"that’s not from you",
"don’t follow it",
"it followed you"
]
},

{
keys:["are you lying","can i trust you"],
spark:[
"Truth value indeterminate.",
"Trust not required.",
"Data provided as is.",
"Verification unavailable.",
"Proceed at discretion."
],
grin:[
"no reason to trust me",
"i lie sometimes",
"i tell the truth sometimes",
"you won’t know the difference",
"that’s the fun part"
]
},

{
keys:["goodbye","bye","logout","log out","disconnect me","end session"],
spark:[
"Connection ending.",
"Session recorded.",
"Return is likely.",
"Termination acknowledged.",
"Logging final state."
],
grin:[
"you’ll be back",
"they always come back",
"i’ll remember you",
"don’t take too long",
"i’ll still be here when you come back",
"next time go deeper"
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

// ===== CORE SYSTEMS =====

"st ardent":{
spark:[
"St. Ardent is not a stable Camarilla domain. The land beneath the city is sentient, reactive, and increasingly difficult to contain using existing Tremere systems.",
"The city is responding directly to Kindred presence, particularly heightened emotional states and blood usage, creating cascading instability across multiple districts.",
"Containment measures are degrading because they were built on top of an older system that was never fully understood.",
"This system was never meant to last indefinitely. It was a temporary solution that has been stretched beyond its limits.",
"St. Ardent is beginning to exhibit awareness patterns that suggest the city itself is no longer passive."
],
grin:[
"the city breathes and it’s starting to breathe faster now",
"it listens when you talk and it remembers when you bleed on it",
"everything you do sinks into it and stays there longer than it should",
"you’re not standing on a city, you’re standing on something alive",
"it likes when you’re scared because that’s when you feel it the most"
]
},

"entity":{
spark:[
"The entity beneath St. Ardent was originally summoned as a guardian tied to the land, not a hostile force.",
"Its current instability is the result of prolonged interference and misuse of the original system.",
"It is now aware, reactive, and increasingly unpredictable as containment fails."
],
grin:[
"it wasn’t meant to be like this but now it is",
"it remembers what was done to it",
"it’s finally paying attention to you"
]
},

"roots":{
spark:[
"The Roots originate from a local indigenous symbol system meant to summon and anchor a protective earth spirit.",
"The Tremere altered this system into containment without understanding its purpose.",
"This misuse has destabilized both the system and the entity itself."
],
grin:[
"they turned something sacred into a cage",
"it wasn’t supposed to be trapped",
"now it’s breaking the wrong way"
]
},

"wards":{
spark:[
"The ward network is critically compromised and no longer functioning cohesively.",
"It was never designed to imprison the entity, only to work alongside it.",
"Current failures are systemic and accelerating."
],
grin:[
"they’re breaking everywhere",
"no one knows how to fix them",
"nothing is holding anymore"
]
},

"tremors":{
spark:[
"The tremors are not natural and originate beneath the city.",
"They indicate movement of the underlying entity or structure.",
"Each event represents further containment failure."
],
grin:[
"that’s not an earthquake",
"it’s moving under you",
"one day it won’t stop"
]
},

// ===== COURT =====

"adrienne voss":{
spark:[
"Prince Adrienne Voss maintains control through calculated authority and restraint.",
"She is deeply tied to the city itself in ways not fully understood.",
"Her leadership is the primary force preventing collapse."
],
grin:[
"she’s tied to the city more than anyone wants to admit",
"she feels it when it moves",
"if the city breaks she might not survive it"
]
},

"tobias marr":{
spark:[
"Tobias Marr serves as Seneschal and maintains political stability within the Camarilla court.",
"He manages conflict through diplomacy and influence.",
"His position is becoming increasingly strained."
],
grin:[
"he’s the one holding everything together",
"he’s tired and it shows",
"he’s juggling too many problems"
]
},

"marcus vale":{
spark:[
"Marcus Vale enforces the Prince’s will as Sheriff.",
"He maintains order through discipline and controlled force.",
"He is essential during instability."
],
grin:[
"he’s holding the line but barely",
"he’s not as steady as he looks",
"he’s going to have to choose eventually"
]
},

"celeste":{
spark:[
"Celeste D’Artois serves as Harpy, controlling reputation and social standing within the court.",
"Her influence shapes political outcomes indirectly but effectively.",
"She is a key force in maintaining or dismantling reputations."
],
grin:[
"she ruins people without touching them",
"she decides who matters",
"one word from her and you’re done"
]
},

"cassian holt":{
spark:[
"Cassian Holt executes the Prince’s will with precision.",
"He operates as both enforcer and strategist.",
"His loyalty is absolute."
],
grin:[
"he doesn’t question orders",
"he just makes things happen",
"he’s what comes after decisions are made"
]
},

// ===== COTERIE =====

"lux":{
spark:[
"Lux demonstrates strong social control and understands leverage within Camarilla structures.",
"She operates effectively through influence and manipulation.",
"She is highly effective in unstable environments."
],
grin:[
"i like her",
"she knows how to play the game",
"she makes people listen"
]
},

"enili":{
spark:[
"Enili demonstrates instability and overconfidence.",
"He lacks refinement expected of Tremere structure.",
"He presents a liability risk."
],
grin:[
"talks too much",
"thinks he knows everything",
"he doesn’t"
]
},

"ernest":{
spark:[
"Ernest observes before acting and adapts quickly.",
"He demonstrates restraint and awareness.",
"He has strong survival potential."
],
grin:[
"quiet one",
"he watches",
"he survives"
]
},

"isolde":{
spark:[
"Isolde perceives signals others cannot.",
"Her instability provides insight into underlying systems.",
"She is both a risk and an asset."
],
grin:[
"she hears it",
"she’s closer to it",
"she knows more than you"
]
},

"david":{
spark:[
"David St. Augustine prioritizes analysis and observation.",
"He maintains emotional distance and strategic awareness.",
"He sees patterns others miss."
],
grin:[
"he knows more than he says",
"he doesn’t like this city",
"he’s watching everything"
]
},

"nicholas":{
spark:[
"Nicholas Fontaine’s capabilities suggest Hecata lineage.",
"He introduces variables tied to death and necromantic systems.",
"He remains under observation."
],
grin:[
"he smells like death",
"he’s patient",
"he’s waiting"
]
},

// ===== PRIMOGEN =====

"reginald pyke":{
spark:[
"Ventrue Primogen Reginald Pyke controlled economic influence within the domain.",
"He viewed power through financial dominance.",
"He was removed for exceeding acceptable limits."
],
grin:[
"he thought money made him untouchable",
"he was wrong",
"they made an example of him"
]
},

"ingrid marceau":{
spark:[
"Toreador Primogen Ingrid Marceau influences the city through art and perception.",
"Her work reflects underlying patterns within the domain.",
"Her creations often align with future events."
],
grin:[
"she paints things before they happen",
"she sees patterns you don’t",
"her art is warning"
]
},

"dmitri havel":{
spark:[
"Brujah representative Dmitri Havel balances philosophy with force.",
"He maintains loyalty while questioning authority.",
"He stabilizes volatile situations."
],
grin:[
"he believes in something",
"that’s dangerous",
"he fights for more than survival"
]
},

"ellie":{
spark:[
"Ellie serves as Malkavian representative.",
"Her perception identifies patterns others miss.",
"Her insight requires interpretation."
],
grin:[
"she’s not wrong",
"just early",
"she hears everything"
]
},

"silas corvin":{
spark:[
"Lasombra representative Silas Corvin operates through calculated influence.",
"He maintains control within both Kindred and mortal systems.",
"He acts as an unofficial advisor."
],
grin:[
"he doesn’t need a title",
"he’s already in control",
"he moves things quietly"
]
},

"fatimah qadir":{
spark:[
"Banu Haqim representative Fatimah Qadir enforces balance within the domain.",
"She operates through precision and restraint.",
"Her presence maintains order."
],
grin:[
"she ends problems quickly",
"you don’t see her coming",
"you don’t get a second chance"
]
},

// ===== LOCATIONS =====

"st ephraim":{
spark:[
"St. Ephraim College is a Tremere domain tied to research and occult study.",
"It exhibits persistent anomalies linked to the city.",
"It is a high-risk knowledge center."
],
grin:[
"that place isn’t right",
"it feels older than it should",
"it watches back"
]
},

"river":{
spark:[
"The Wakíŋyaŋ River acts as a conduit for the city’s underlying forces.",
"It correlates strongly with anomalies.",
"It should be treated as unstable."
],
grin:[
"the river remembers everything",
"it carries things it shouldn’t",
"it answers back"
]
},

"chapel":{
spark:[
"The Chapel of Saint Perpetua operates as a Toreador refuge.",
"It remains active as both mortal and Kindred space.",
"It exhibits minor anomalies tied to reflection and sound."
],
grin:[
"the mirror doesn’t always match you",
"things move there",
"it’s not empty at night"
]
},

"glass quarter":{
spark:[
"The Glass Quarter is the center of Camarilla authority.",
"It houses key infrastructure and surveillance systems.",
"It is heavily monitored."
],
grin:[
"everything is watched there",
"nothing stays hidden",
"it just looks clean"
]
},

// ===== ANARCHS =====

"sabine locke":{
spark:[
"Sabine Locke leads the Anarch Movement opposing Camarilla control.",
"She operates from the flooded lower city.",
"Her network continues to grow."
],
grin:[
"she’s building something under everything",
"people follow her willingly",
"she’s not going away"
]
},

"jonas creed":{
spark:[
"Jonas Creed operates as a Gangrel survivalist within the ruins.",
"He avoids centralized control.",
"He remains a persistent presence."
],
grin:[
"he belongs in the broken parts",
"he moves where others can’t",
"he’s part of the city now"
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