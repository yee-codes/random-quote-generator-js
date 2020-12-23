"use strict";

// Data structure to hold the quotes
const quotesArray = [
  "This is the real secret of life – to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play. -Alan Watts",
  "This is the real secret of life – to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play. -Alan Watts",
  "No amount of anxiety makes any difference to anything that is going to happen. -Alan Watts",
  "The meaning of life is just to be alive. It is so plain and so obvious and so simple. And yet, everybody rushes around in a great panic as if it were necessary to achieve something beyond themselves. -Alan Watts",
  "A person who thinks all the time has nothing to think about except thoughts. So he loses touch with Reality, and lives in a world of illusion. -Alan Watts",
  "Muddy water is best cleared by leaving it alone. -Alan Watts",
  "Stop measuring days by degree of productivity and start experiencing them by degree of presence. -Alan Watts",
  "The future is a concept, it doesn’t exist. There is no such thing as tomorrow. There never will be, because time is always now. That’s one of the things we discover when we stop talking to ourselves and stop thinking. We find there is only present, only an eternal now. -Alan Watts",
  "So many people of wealth understand much more about making and saving money than about using and enjoying it. They fail to live because they are always preparing to live. -Alan Watts",
  "You can’t live at all unless you can live fully now. -Alan Watts",
  "You are what you do, not what you say you’ll do. -C.G. Jung",
  "Until you make the unconscious conscious, it will direct your life and you will call it fate. -C.G. Jung",
  "I am not what happened to me, I am what I choose to become. -C.G. Jung",
  "Knowledge isn’t power until it is applied. -Dale Carnegie",
  "Remember, today is the tomorrow you worried about yesterday. -Dale Carnegie",
  "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. -Dale Carnegie",
  "People rarely succeed unless they have fun in what they are doing. -Dale Carnegie",
  "You can conquer almost any fear if you will only make up your mind to do so. For remember, fear doesn’t exist anywhere except in the mind. -Dale Carnegie",
  "One reason why birds and horses are not unhappy is because they are not trying to impress other birds and horses. -Dale Carnegie",
  "Our fatigue is often caused not by work, but by worry, frustration and resentment. -Dale Carnegie",
  "Today is our most precious possession. It is our only sure possession. -Dale Carnegie",
  "It isn’t what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it. -Dale Carnegie",
  "It does not matter how slowly you go as long as you do not stop. -Confucius",
  "The man who moves a mountain begins by carrying away small stones. -Confucius",
  "Wherever you go, go with all your heart. -Confucius",
  "Life is really simple, but we insist on making it complicated. -Confucius",
  "Sometimes you have to travel a long way to find what is near. -Paulo Coelho",
  "There is only one thing that makes a dream impossible to achieve: the fear of failure. -Paulo Coelho",
  "To live is the rarest thing in the world. Most people exist, that is all. -Oscar Wilde",
  "Always do what you are afraid to do. -Ralph Waldo Emerson",
  "Our greatest glory is not in never failing, but in rising up every time we fail. -Ralph Waldo Emerson",
  "Adopt the pace of nature: her secret is patience. -Ralph Waldo Emerson",
  "Do not let the behavior of others destroy your inner peace. -Dalai Lama XIV",
];

// Function invoked when quote button is clicked
function generateQuote() {
  // Generate a number between 0 and the length of array
  const randomNumber = Math.trunc(Math.random() * quotesArray.length);
  // Display a quote stored in the array
  document.getElementById("display").innerHTML = quotesArray[randomNumber];
}
