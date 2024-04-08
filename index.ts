#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


let currency : any = {
    USD : 1,
    Euro : 0.9223, 
    GBP : 0.7923, 
    INR : 83.29, 
    AUD : 1.52, 
    CAD : 1.36, 
    JPY : 151.62, 
    CHF : 0.90, 
    ZAR : 18.68, 
    RUB : 92.55 
}

let currencyconvert = await inquirer.prompt([{
    name: "from",
    type: "list",
    message : "Enter from currency",
    choices : ["USD","Euro","GBP","INR","AUD","CAD","JPY","CHF","ZAR","RUB"]
},
{
    name: "to",
    type: "list",
    message : "Enter to currency",
    choices : ["USD","Euro","GBP","INR","AUD","CAD","JPY","CHF","ZAR","RUB"]
},
{name: "amount",
type: "input",
message : "Enter your amount",
}])

let fromAmount = currency[currencyconvert.from]; 
let toAmount = currency[currencyconvert.to];
let user_Amount = currencyconvert.amount; 
let convert = user_Amount / fromAmount;
let converted_amount = convert * toAmount;

console.log(chalk.bold.cyanBright(converted_amount))