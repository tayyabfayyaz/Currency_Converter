import inquirer from "inquirer";

let currency: any = {
    USD: 1,
    PKR: 280,
    INR: 83.59,
    EUR: 0.94,
    JPY: 154.23,
    KWD: 0.31,
    QAR: 3.14,
    SAR: 3.75,
    AED: 3.65,
    OMR: 0.38
}

let userAnwser = await inquirer.prompt(
    [
        {
            name:"from",
            message: "Enter From Currency",
            type: "list",
            choices: ["USD", "PKR", "INR", "EUR", "JPY", "KWD", "QAR", "SAR", "AED", "OMR"]
        },
        {
            name:"to",
            message: "Enter To Currency",
            type: "list",
            choices: ["USD", "PKR", "INR", "EUR", "JPY", "KWD", "QAR", "SAR", "AED", "OMR"]
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Amount"
        }
    ]
)

let fromCurrency = currency[userAnwser.from];
                            //  USD
let toCurrency = currency[userAnwser.to];
                            //  PKR
let convertAmount = userAnwser.amount;
                            //  100
let convertBaseCurrency = convertAmount / fromCurrency;
                            //  100     /   USD
let finalCurrencyAmount = convertBaseCurrency * toCurrency;
                            //  
console.log(finalCurrencyAmount);