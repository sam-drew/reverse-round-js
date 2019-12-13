// Reverse Round.
// Does rounding, but in reverse.
export default function reverseRound (number) {
    // Check if number is negative.
    var negativeFlag;
    var result;
    if (number < 0) {
        negativeFlag = true;
    } else {
        negativeFlag = false;
    };
    number = Math.abs(number);

    // Get the decimal portion of the number.
    const remainder = (number % 1);
    if (remainder < 0.5) {
        result = Math.ceil(number);
    } else {
        result = Math.floor(number);
    }

    // Restore sign
    if (negativeFlag == true) {
        result = (result * -1);
    }
    return(result);
}
