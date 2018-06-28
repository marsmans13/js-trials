// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function accountInfo(name, number, business) {
    console.log(`Account Name: ${name}. Account number: ${number}. Business Name: ${business}.`);
}

accountInfo('Balloonicorn', 123456, 'Balloonicorns Cupcake Shop');


// Add function to print all addresses, including a header

function showAddresses(addresses) {
    console.log("Addresses:");
    for (let address of addresses) {
        console.log(address);
    }
}

showAddresses(addresses);


// Add function to print phone types and numbers

function showPhoneNums(phoneNumbers) {
    console.log("Phone Numbers:");
    for (let phoneNumber of phoneNumbers) {
        console.log(phoneNumber[0]+' '+ phoneNumber[1]);
    }
}

showPhoneNums(phoneNumbers);

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const accountTransactions = new Map();

// Add function to add transactions

function addTransaction(date, transaction) {
    accountTransactions.set(date, transaction);
}


// Use the function to add transactions
addTransaction('May-2:', '-500');
addTransaction('May-13:', '+1,200');
addTransaction('May-21:', '-100');
addTransaction('May-29:','+2,200');


// Add function to show balance status

function showBalanceStatus(balance) {
    if (balance < 0) {
        console.log('YOU ARE OVERDRAWN');
    } else if (balance < 20) {
        console.log('Warning: You are close to zero balance');
    } else {
        console.log('Thank you for your business.');
    }
}


// Add function to show transactions

function showTransactions(transactions, balance) {

    for ( let transaction of transactions) {


        if (transaction[1][0]==='+') {
            console.log(`Balance: ${balance}, Date: ${transaction[0]}, Type: deposit`);
        } else {
            console.log(`Balance: ${balance}, Date: ${transaction[0]}, Type: withdrawal`);
        }

        balance += parseInt(transaction[1]);
        if (balance < 0 ) {
            balance -=25;
        }
        console.log(`Your balance: ${balance}`);
        showBalanceStatus(balance);
    }
}

showTransactions(accountTransactions, 26000);

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info

const customer = {
    "accountHolder": "Balloonicorn",
    "accountNumber": 123456,
    "businessName": "Balloon Party",
    "address" : "123 Main Street",
    "phoneNumbers" : [['home', '123-456-7890'], ['mobile', '234-567-8495'], ['business', '284-584-9876']],
    "transactions" : [['May-2', '+400'], ['May-4', '-500'], ['May-12', '+1300']],
    "startingBalance" : 26000
};


// Function to add customer attributes

function addProperties(customerName, melon='Cantaloupe', pets=0) {
    customerName.favMelon = melon;
    customerName.numPets = pets;
}


// Add attributes for this user

addProperties(customer, 'Casaba', 2);

// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate
function loan(income, customer) {
    if(income < 100000 && (customer.numPets < 5 || customer.favMelon === 'Casaba')) {
        console.log(`Your interest rate is 8 percent.`);
    } else if(income<100000 && (customer.numPets >= 5 || customer.favMelon ==='Casaba')) {
        console.log("Your interest rate is 5 percent.");
    } else if (income>=100000 && income <200000 && customer.numPets < 5) {
        console.log("Your interest rate is 7 percent");
    } else {
        console.log("Your interest rate is 4 percent");
    }
}

// ///////////////////////////////////////////////////////
// Account Report

function accountReport(customer) {
    console.log(`Name: ${customer.accountHolder}\nHome Number: ${customer.phoneNumbers[0][1]}\nMobile Number: ${customer.phoneNumbers[1][1]}\nBusiness Number: ${customer.phoneNumbers[2][1]}`);
    showTransactions(customer.transactions, customer.startingBalance);

    if (customer.favMelon === 'Casaba' || customer.numPets > 5) {
        console.log("Congratulations on being a premier customer!");
    }
}


// Add function to show bank customer report

accountReport(customer);

// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses

const customerAddresses = new Map();

customerAddresses.set('Mel Melitipolski', '707 Birch Street');
customerAddresses.set('Barbara Brown', '8997 Jones Street');


// Write a function to return the address of a given person

function returnAddress(name) {
    console.log(`${name}: ${customerAddresses.get(name)}`);
}

returnAddress('Barbara Brown');
// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




