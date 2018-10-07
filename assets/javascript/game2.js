// Create an array of words
var wordList = [
"hansolo",
"lukeskywalker",
"deathstar",
"bobafett",
"lightsaber",
"xwing",
"ywing",
"tiefighter",
"darthvader",
"sith",
"jedi",
"princessleia",
"obiwankenobi",
"jabathehutt",
"hoth",
"millennium falcon"
];
// Choose word randomly
var randNum = Math.floor(Math.random() * wordList.length);
var choosenWord = wordList[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];
console.log(choosenWord);
//DOM manipulation
var underScoreInsert = document.getElementById("underscore");
var underRightGuess = document.getElementById("underscore");
// Create underscores base on length of word
var generateUnderscore = () => {
    for (var i = 0; i < choosenWord.length; i++) {
        underScore.push("_");
        underScoreInsert.innerHTML = underScore.join(" ");
    }
    return underScore;
}

console.log(generateUnderscore());

// Get users guess
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);

// if users guess is right
    if(choosenWord.indexOf(keyword) > -1) {
    // add to right words array
        rightWord.push(keyword);
    //replace underscore with right letter
    underScore[choosenWord.indexOf(keyword)] = keyword;
        // document.getElementById("underscore").innerHTML =  rightWord.join("");
        if(underScore.join("") == choosenWord) {
            alert("You Win");
        } else{
            wrongWord.push(keyword);
        }
    
    }
   
    
});

generateUnderscore();

// Check if guess is right

// if right, push to right array

// if wrong, push to right array