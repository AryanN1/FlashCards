var inquirer = require("inquirer");
var library = require("./cardLibrary.json");
var BasicCard = require("./BasicCard.js")
var ClozeCard = require("./ClozeCard.js")
var fs = require("fs");

var drawnCard;
var playedCard;
var count = 0;


function openMenu() {
    inquirer.prompt([{
                    type: "list",
                    message: "Please choose a menu option from the list below?",
                    choices: ["Create", "Use All", "Random", "Shuffle", "Show All", "Exit"],
                    name: "menuOptions"
                ];.then(function(answer) {
                    var waitMsg;

                    switch (answer.menuOptions) {

                        case 'Create':
                            console.log("Ok lets make a new flashcard...");
                            waitMsg = setTimeout(createCard, 1000);
                            break;

                        case 'Use All':
                            console.log("OK lets run through the deck...");
                            waitMsg = setTimeout(askQuestions, 1000);
                            break;

                        case 'Random':
                            console.log("OK I'll pick one random card from the deck...");
                            waitMsg = setTimeout(randomCard, 1000);
                            break;

                        case 'Shuffle':
                            console.log("OK I'll shuffle all the cards in the deck...");
                            waitMsg = setTimeout(shuffleDeck, 1000);
                            break;

                        case 'Show All':
                            console.log("OK I'll print all cards in the deck to your screen...");
                            waitMsg = setTimeout(showCards, 1000);
                            break;

                        case 'Exit':
                            console.log("Thank you for using the Flashcard-Generator")
                            return;
                            break;

                        default:
                            console.log("");
                            console.log("Sorry I don't understand");
                            console.log("");
                    }

                });

            }