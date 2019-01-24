let balance = 300
 
const withdrawCash = (requestedBalance) => {
    if (requestedBalance <= balance) {
        return "Here is your money"
    } else {
        return "Insufficient funds"
    }
  }
 
const checkPin = (pin) => {
    if (pin == 1234) {
      withdrawCash(250);
      return "Correct PIN"
    } else {
      return "Incorrect PIN";
    }
}
 
const cashMachine = (pinNum, withdrawal) => {
    if(checkPin(pinNum) === "Correct PIN" && withdrawCash(withdrawal) === "Here is your money") {
        return `Your Pin is Correct and your remaining balance is ${balance-=withdrawal}`
    } else {
        return 'No Money'
    }
}
 
console.log(cashMachine(1234, 250));

// let balannce = 500
// let pinAttempt = Number(prompt("please enter the pin"));

// function checkPin("enterPin") {
//     if (pinNumber === 1234); {
//     withdrawl(300);
//     return ("true");
// } else if ("false");
// };

// const balance 

// var balance = 100.0; //set initial balance.
// 	function get_balance() {
// 		alert('Your current balance is: '+balance);
// 		atm();
// 	}
// 	function make_deposit() {
// 		var deposit = parseFloat(prompt('How much would you like to deposit?'));
// 		if (isNaN(deposit) || deposit === '') {
// 			alert('Error: please enter a number!');
// 			make_deposit();
// 		} else {
// 			balance += deposit;
// 			get_balance();
// 		}
// 	}
// 	function make_withdrawal() {
// 		var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
// 		if (isNaN(withdrawal) || withdrawal === '') {
// 			alert('Error: please enter a number!');
// 			make_withdrawal();
// 		} else {
// 			balance -= withdrawal;
// 			get_balance();
// 		}
// 	}
// 	function error() {
// 		alert('Error: accepted numbers are 1 through 4.');
// 		atm();
// 	}
// 	function exit() {
// 		var confirm_leave = confirm('You have selected exit.');
// 		if (confirm_leave) {
// 			window.close();
// 		} else {
// 			atm();
// 		}
// 	}
// 	function atm() {
// 		var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.
// 		if (choice === 1) {
// 			get_balance();
// 		} else if (choice === 2) {
// 			make_deposit();
// 		} else if (choice === 3) {
// 			make_withdrawal();
// 		} else if (choice === 4) {
// 			exit();
// 		} else {
// 			error();
// 		}
// 	}
// 	atm();

// Withdraw cash from a cash machine
 


// let accountData = [[123456, 1000, 1234],[654321, 500, 4331]];
// const correctPin = 1234;
// let availableBalance = 1000;
 
// const checkPin = (inputPin, accountNumber) => {
//     let i= 0;
//     while (i < accountData.length-1) {
//         if (accountData[i][0] == accountNumber) {
//             if (inputPin == accountData[i][2]) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             i++;
//         }
//     }
// };
 
// const checkBalance = (requestAmount, accountNumber) => {
//     balanceAmount = checkAccountData(accountNumber);
//     if (!balanceAmount) {
//         return null;
//     } else if (requestAmount > balanceAmount) {
//         return false;
//     } else {
//         return true;
//     }
// };
 
// const checkAccountData = (accountNumber) => {
//     let i = 0;
//         while (i < accountData.length-1) {
//             if (accountData[i][0] == accountNumber) {
//                 return accountData[i][1];
//             } else if (i < accountData.length-1) {
//                 i++;
//             } else {
//                 return false;
//             }
//     }
// };
 
// const withdrawCash = (pin, amount, accountNumber) => {
//     if (checkPin(pin, accountNumber) && checkBalance(amount, accountNumber)) {
//         availableBalance -= amount;
//         console.log(`You have your money, your new balance is ${availableBalance}`);
//     } else if(!checkPin(pin, accountNumber)) {
//         console.log(`Your PIN is incorrect, sorry!`);
//     } else if(checkBalance(amount, accountNumber) === false) {
//         console.log(`Y'all don't have enough money`);
//     } else if(checkBalance(amount, accountNumber) === null) {
//         console.log(`Account unknown.`)
//     }
// };
 
// withdrawCash(1234,100,123456);

// var pin = 1234;
// var balance = 300;
// var pinAttempt = Number(prompt("Please enter your PIN"));
 
 
// while(pinAttempt !== pin){
//     var pinAttempt = Number(prompt("INCORRECT PIN. Please try again"));
// };
 
// var amount = Number(prompt("PIN Correct. How much would you like to withdraw?"));
 
// while(amount > balance){
//     var amount = Number(prompt("You do not have enough money in your account. The maximum amount you can withdraw is £" + balance));
// };
 
// alert("Transaction Successful! You have withdrawn £" + amount);
