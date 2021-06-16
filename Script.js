const fillerMsgs = ['Go forth and conquer', 'Without a doubt you should play', 'Go break your mouse playing', 'I suggest you play'];

//Prompting the user to give an answer
const prompt = require('prompt-sync')();
const favouriteGenre = prompt('Do you prefer RPG or FPS games?');

//generate a random number which will be used as the index for the arrays
const randomNum = (num) => { 
    return Math.floor(Math.random() * num); 
}

//Getting a random into msg
let randFillerMsg = fillerMsgs[randomNum(fillerMsgs.length)];

//rpg object containing rpg game titles and rpg game quotes
const rpg = {
    titles: ['Cyberpunk 2077', 'The Elder Scrolls V', 'The Witcher 3', 'Darksouls', 'Mass Effect', 'Fallout 4', 'Diablo III'],
    quotes: ['"You can only come to the morning through shadows"', '"Im Commader Shepard and this is my favorite store in the citadell"',
                '"War... war never changes"', '"Nothing is true, everything is permitted"', '"Its dangerous to go alone, take this!"']            
};

//fps object containing fps game titles and fps game quotes
const fps = {
    titles: ['Call of Duty', 'Battlefield', 'Overwatch', 'Destiny 2', 'Valorant', 'Rainbow Six Siege', 'Bioshock'],
    quotes: ['"You were almost a jill sandwich!', '"its time to kickass and chew bubble gum... and im all outta gum"', '"A man chooses; a slave obeys."', 
            '"Good men mean well. We just dont always end up doing well"', '"Love is just a chemical, we give it meaning by choice"']
};

//checking to see what the user input as their answer and displaying a message based on their input with a random filler msg, game and quote.
if (favouriteGenre === ' rpg' || favouriteGenre === 'rpg'){
    let title = rpg.titles[randomNum(rpg.titles.length)];
    let quote = rpg.quotes[randomNum(rpg.quotes.length)];
    console.log(`Well well well, a very good pick! \na wise game character once said ${quote}. \nAnd on that note... ${randFillerMsg} ${title}.`)
} else if (favouriteGenre === ' fps' || favouriteGenre === 'fps'){
    let title = fps.titles[randomNum(fps.titles.length)];
    let quote = fps.quotes[randomNum(fps.quotes.length)];
    console.log(`Ah yes, my personal favourite! \n${quote}. \nInterpret that as you must, but ${randFillerMsg} ${title}.`)
} else {
    console.log("Don't waste my time tiny human... Goodbye");
}



