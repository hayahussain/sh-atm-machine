#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 2022;

console.log("Welcome to code with Sidra - ATM Machine");

let pinAns = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]
);

if(pinAns.pin === myPin){
    console.log("Correct your pin!!!");
    
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select option",
                type: "list",
                choices: ["Withdraw", "Fast Cash", "Check Balance"]
            }
        ]
    );

    console.log(operationAns);

    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                   name: "amount",
                   message: "Enter your amount",
                   type: "number"
                }
            ]
        );
        if(amountAns.amount <+ myBalance && amountAns.amount >= 500){
            myBalance -= amountAns.amount
            console.log("Your remaining Balance is: " + myBalance);
        }
        else {console.log("You Have Insufficient Amount");

        }
    
    }
    else if(operationAns.operation === "Fast Cash"){
        let fastcashAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Please Select your Amount",
                    type: "list",
                    choices: ["1000", "3000", "8000", "25000"]
                }
            ]
        );
        if(fastcashAns.amount <= myBalance){
            let Balance = myBalance - fastcashAns.amount
            console.log(`Your remaining balance is ${Balance}`);
        }
        else{
            console.log("You Have Insufficient Amount")
        }

        
    }
     else if(operationAns.operation === "Check Balance"){
        console.log("Your Balance is: " + myBalance)
    }
        
    
}
else{
    console.log("Incorrect your PIn!!!");
}

