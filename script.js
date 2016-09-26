var xkcdSubstitutions = {
  "my cat": "my friend catherine", //xkcd 1689
  "witnesses": "these dudes I know", //xkcd 1288
  "witness": "this dude I know",
  "allegedly": "kinda probably",
  "new study": "tumblr post",
  "rebuild": "avenge",
  "space": "spaaaaace",
  "google glass": "virtual boy",
  "smartphone": "pok\u00E9dex",
  "electric": "atomic",
  "senator": "elf-lord",
  "car": "cat",
  "election": "eating contest",
  "congressional leaders": "river spirits",
  "homeland security": "homestar runner",
  "could not be reached": "is guilty and everyone knows it", 
  "debate": "dance-off",  //xkcd 1625
  "self driving": "uncontrollably swerving",
  "self-driving": "uncontrollably swerving",
  "poll": "psychic reading",
  "candidate": "airbender",
  "drone": "dog",
  "vows to": "probably won't",
  "vow to": "probably won't",
  "at large": "very large",
  "successfully": "suddenly",
  "expands": "physically expands",
  "expand": "physically expand",
  "first-degree": "friggin' awful",
  "first degree": "friggin' awful",
  "second-degree": "friggin' awful",
  "second degree": "friggin' awful",
  "third-degree": "friggin' awful",
  "third degree": "friggin' awful",
  "an unknown number": "like hundreds",
  "front runner": "blade runner",
  "front-runner": "blade runner",
  "years": "minutes",
  "minutes": "years",
  "no indications": "lots of signs",
  "no indication": "lots of signs",
  "urged restraint by": "drunkenly egged on",
  "global": "spherical",
  "horsepower": "tons of horsemeat",
  "keyboard": "leopard", //xkcd 1031
  "batman": "a man dressed like a bat", //xkcd 1004
  "force": "horse", //1418
  "air": "sky", //1322
  "mitten": "handcoat",
  "glove": "handcoat",
  "sun": "spacelight",
  "tree": "stick tower",
  "bird": "flappy plane",
  "seed":"plant egg",
  "gaffe":"magic spell", //xkcd 1679
  "ancient": "haunted",
  "star-studded": "blood-soaked",
  "remains to be seen": "will never be known",
  "silver bullet": "way to kill werewolves",
  "subway system": "tunnels I found",
  "surprising": "surprising (but not to me)",
  "war of words": "interplanetary war",
  "tension": "sexual tension",
  "cautiously optimistic": "delusional",
  "doctor who": "the big bang theory",
  "win votes": "find pok\u00E9mon",
  "behind the headlines": "beyond the grave",
  "email": "poem",
  "facebook post": "poem",
  "tweet": "poem",
  "Facebook CEO": "this guy",
  "latest": "final",
  "disrupt": "destroy",
  "meeting": "m\u00E9nage \xE1 trois",
  "scientists": "channing tatum and his friends",
  "you won't believe": "I'm really sad about"
};

$(function(){
  console.log("Hello World!");
});

$("#translate-button").click(function(){
  var str = $("#message-entry").val()
  for(key in xkcdSubstitutions){
    str = str.replace(key, xkcdSubstitutions[key]);
  }
  $('p').replaceWith('<p>' + str + '</p>')
});