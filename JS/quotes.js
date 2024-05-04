const quotes = [
{
    quote: "배고프다.",
    author: "-lhj-"
},
{
    quote:"임서진 사랑해.",
    author:"-임효준-"
},
{
    quote:"I love you SeoJin.",
    author:"-Hyo Jun Lim-"
},
{
    quote:"If HyoJun listen to Seojin carefully, HyoJun will have rice cakes even in HyoJun sleep.",
    author:"-Lim Hyo Jun-"
},
{
    quote:"효준 오빠 사랑해.",
    author:"-임서진-"
},
{
    quote:"Love you HyoJun.",
    author:"-SeoJin Lim-"
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;