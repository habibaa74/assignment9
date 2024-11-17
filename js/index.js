
// qoutes array
var quotes=[
{
    quote:" “Be yourself; everyone else is already taken.” ",
    author:"― Oscar Wilde"
},
{
    quote:" “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author:"― Bernard M. Baruch"
},
{
    quote:" “Be the change that you wish to see in the world.” ",
    author:"― Mahatma Gandhi"
},
{
    quote:" “I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”",
    author:"― Marilyn Monroe"
},
{
    quote:" “So many books, so little time.” ",
    author:"― Frank Zappa"
}
]

function quotesDisplay(){
    var randomQuote= Math.floor(Math.random()*quotes.length)
    document.getElementById("quote").innerHTML=`${quotes[randomQuote].quote}`;
    document.getElementById("author").innerHTML=`${quotes[randomQuote].author}`;      
    console.log(randomQuote); 
} 
