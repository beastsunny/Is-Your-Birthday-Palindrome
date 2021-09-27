const dateEl = document.querySelector("#dob");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

const reverseStr = (str) => str.split("").reverse().join("");
const isPalindrome = (str) => str === reverseStr(str);
const convertDateToString = (date) => {
    let convertedDate = {};
    if (date.day < 10) {
        convertedDate.day = "0" + date.day;
    } else {
        convertedDate.day = date.day.toString();
    }
    if (date.month < 10) {
        convertedDate.month = "0" + date.month;
    } else {
        convertedDate.month = date.month.toString();
    }
    convertedDate.year = date.year.toString();
    return convertedDate;
};