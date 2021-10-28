var birthday = document.querySelector('.dob');
var luckyNumber = document.querySelector('.luckynumber');
var checkButton = document.querySelector('.checkbtn');
var output = document.querySelector('.output');


checkButton.addEventListener('click', function bdayAndLnum() {
    var bdate = birthday.value;

    var digits = bdate.replaceAll('-', '');

    var sumReturned = sumOfDigits(digits);

    if (sumReturned % luckyNumber.value == 0) {
        output.innerText = "Yay! 🤩🎉 Your Birthday is Lucky";
    } else {
        output.innerText = "Oops! 🤭 Your Birthday is not Lucky";
    }
});


function sumOfDigits(digits) {

    var sum = 0;

    for (i = 0; i < digits.length; i++) {
        sum = sum + Number(digits.charAt(i));
    }
    return sum;
}
