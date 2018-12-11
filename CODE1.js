/**
 *   @author Page, Marshall (mpage@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 3 || created: 12.10.2018
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

const MAX_RATING = 10;
const MAX_PIN = 9999;
const MIN_PIN = 100;
const MAX_AGE = 100;
const MIN_AGE = 16;

let continueResponse;
let counter, rating, averageRating, total, reviewerName, pinNumber, membership, memberAge;

function main() {
    setContinueResponse();
    while (continueResponse === 1){
        setMembership();
        setMemberAge();
        setReviewerName();
        setPinNumber();
        setRating();
        setCounter();
        setTotal();
        setContinueResponse();
    }
    setAverageRating();
    printAverageRating();
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setMembership() {
        membership = Number(PROMPT.question(`\nDo you currently have a membership? [0=no, 1=yes]: `));
        while (membership !== 0 && membership !== 1) {
            console.log(`${membership} is an incorrect value. Please try again.`);
            membership = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    }

/**
 * @method
 * @desc Age mutator
 * @returns {method}
 */
function setMemberAge() {
    memberAge = Number(PROMPT.question(`\nPlease enter your age (Must be 16 years of age or older) --> `));
    if (memberAge < MIN_AGE || memberAge > MAX_AGE) {
        console.log(`I'm sorry, that is an incorrect age. Please try again.`);
        return setMemberAge();
    }
}

/**
 * @method
 * @desc Reviewer mutator
 * @returns {null}
 */
function setReviewerName() {
    reviewerName = PROMPT.question(`\nWill the reviewer please enter his/her name: `);
}

/**
 * @method
 * @desc PIN mutator
 * @returns {method}
 */
function setPinNumber() {
    pinNumber = Number(PROMPT.question(`\nPlease enter a new 3-4 digit pin number: `));
    if (pinNumber < MIN_PIN || pinNumber > MAX_PIN) {
        console.log(`I'm sorry, that is an incorrect pin. Please try again.`);
        return setPinNumber();
    }
}

function setCounter() {
    if (counter != null) {
        counter++;
    } else {
        counter = 1;
    }
}


function setRating() {
    rating = Number(PROMPT.question('\nHow satisfied were you with your gym service? (1-10 Scale)  --> '));
    if (rating < 1 || rating > MAX_RATING) {
        console.log(`I'm Sorry, that value is incorrect. Please try again.`);
    }
}

function setTotal() {
    if (!total){
        total = 0;
    }
    total = (total + rating);
}

function setAverageRating() {
    averageRating = total / counter;
}

function printAverageRating() {
    console.log(` To our loyal member ${reviewerName} pin# ${pinNumber}, After ${counter} review(s), ${averageRating} has been the average rating for your gym experience`)
}

/**
 * @method
 * @desc Print goodbye utility method
 * @returns {null}
 */
function printGoodbye() {
    console.log(`\tHope to see you soon!`);
}


/*
Design a program for that rates a customers gym experience. The customer must create a user name and pin number before reviewing.
 */