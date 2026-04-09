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

"kindred":{
spark:[
"Kindred is the accepted term.",
"It distinguishes from mortals.",
"It is a functional classification."
],
grin:[
"still monsters",
"just a nicer word",
"doesn’t change what you are"
]
},

"vampire":{
spark:[
"Terminology varies.",
"Functionally accurate.",
"Not preferred formally."
],
grin:[
"say it again",
"vampire",
"see how that feels"
]
},

"masquerade":{
spark:[
"The Masquerade preserves secrecy.",
"It is critical to survival.",
"Violations are not tolerated."
],
grin:[
"big lie",
"it’s already cracking",
"you can hear it breaking"
]
},

"beast":{
spark:[
"The Beast is inherent.",
"It cannot be removed.",
"It must be controlled."
],
grin:[
"that’s you",
"the real you",
"it’s louder than you think"
]
},

"hunger":{
spark:[
"Hunger is constant.",
"It affects behavior.",
"It must be managed."
],
grin:[
"it never stops",
"it gets louder",
"you feel it don’t you"
]
},

"ventrue":{
spark:[
"They maintain authority.",
"They rely on control."
],
grin:[
"picky eaters",
"think they’re in charge"
]
},

"toreador":{
spark:[
"They value aesthetics.",
"They are socially driven."
],
grin:[
"pretty ones",
"easily distracted"
]
},

"malkavian":{
spark:[
"They perceive differently.",
"They detect patterns others miss."
],
grin:[
"they see too much",
"i like them"
]
},

"nosferatu":{
spark:[
"They observe everything.",
"They maintain networks."
],
grin:[
"we see everything",
"we saw you first"
]
},

"tremere":{
spark:[
"They maintain wards.",
"They rely on structured knowledge."
],
grin:[
"they broke it",
"they don’t understand it anymore"
]
},

"dominate":{
spark:[
"It alters perception.",
"It has limits."
],
grin:[
"too late",
"don’t look at them"
]
},

"auspex":{
spark:[
"It enhances perception.",
"It reveals hidden layers."
],
grin:[
"too much seeing",
"hurts doesn’t it"
]
},

"obfuscate":{
spark:[
"It conceals presence.",
"It disrupts awareness."
],
grin:[
"you missed me",
"i was right there"
]
},

"boon":{
spark:[
"A boon is a formal debt.",
"It must be repaid."
],
grin:[
"chains",
"favors stack up"
]
},

"primogen":{
spark:[
"They represent clan interests.",
"They advise leadership."
],
grin:[
"they whisper",
"they argue"
]
}

};


/* ===== MAIN STORY DATABASE ===== */
const DB = {

"st ardent":{
spark:[
"St. Ardent is unstable.",
"The city is reacting.",
"Containment systems are failing."
],
grin:[
"the city is alive",
"it listens",
"it knows you’re here"
]
},

"city":{
spark:[
"Multiple anomalies detected.",
"Urban structure unreliable."
],
grin:[
"the whole place is wrong",
"something is moving"
]
},

"entity":{
spark:[
"Entity confirmed.",
"Activity increasing."
],
grin:[
"it’s awake",
"it sees you",
"it knows"
]
},

"wards":{
spark:[
"Containment integrity failing.",
"System degradation detected."
],
grin:[
"they broke",
"nothing is holding it"
]
},

"roots":{
spark:[
"The Roots are expanding.",
"Growth uncontrolled."
],
grin:[
"they’re everywhere",
"under everything"
]
},

"hum":{
spark:[
"Signal originates below the city.",
"It is increasing."
],
grin:[
"you hear it now",
"it’s inside you"
]
},

"lux":{
spark:[
"Lux understands power dynamics.",
"She is effective."
],
grin:[
"i love her",
"she gets it"
]
},

"enili":{
spark:[
"Enili is a liability.",
"Overconfidence detected."
],
grin:[
"ugh",
"talks too much"
]
},

"ernest":{
spark:[
"He observes before acting.",
"He shows restraint."
],
grin:[
"quiet one",
"i like him"
]
},

"isolde":{
spark:[
"She perceives beyond normal limits.",
"She is unstable but useful."
],
grin:[
"she hears things",
"same as me"
]
},

"david":{
spark:[
"He maintains distance.",
"He is perceptive."
],
grin:[
"grumpy",
"shadow man"
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