#! /usr/bin//env node
import inquirer from "inquirer";

const currency :any ={
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR:74.57,
    PKR: 280
}
let useranswer = await inquirer.prompt(
    [


    {

    name: 'from',
    message: ' enter From currency',
    type: 'list',
    choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
   },

   {
    name: 'to',
    message: ' enter To currency',
    type: 'list',
    choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
   },

   {
    name: 'amount',
    message: 'enter amount',
    type: 'number'
   }
]
)

let FromAmount = currency[useranswer.from] // exchange rate
let toAmount = currency[useranswer.to] // exchange rate
let amount = useranswer.amount
let baseAmount :number = (amount / FromAmount);
let convertedAmount = (baseAmount * toAmount).toFixed(2);
console.log(convertedAmount);
console.log(FromAmount);
console.log(toAmount);

console.log(amount);