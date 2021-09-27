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

const getAllVariations = (date) => {
    date = convertDateToString(date);
    const ddmmyyyy = date.day + date.month + date.year;
    const mmddyyyy = date.month + date.day + date.year;
    const yyyymmdd = date.year + date.month + date.day;
    const ddmmyy = date.day + date.month + date.year.slice(-2);
    const mmddyy = date.month + date.day + date.year.slice(-2);
    const yymmdd = date.year.slice(-2) + date.month + date.day;

    const variations = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    return variations;
};







checkBtn.addEventListener("click", () => {
            let message = "";
            const dob = dateEl.value;