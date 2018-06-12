function decode(str) {
    //first let's find the contents of the brackets
    let firstBracket = str.indexOf('[');
    let lastBracket = str.lastIndexOf(']');
    let newstr = str.slice(firstBracket + 1, lastBracket)
    //then let's find the number!  It starts from the beginning of the string and goes up to the first bracket
    let num = str.slice(0, firstBracket)
    //if it collects something that's not a number, get rid of it! that's part of the string that needs printing, not part of the count!
    if (!Number.isInteger(+num)) {
        console.log(num)
        for (let i = 0; i < num.length; i++) {
            if (!Number.isInteger(num[0])) {
                num = num.slice(1, num.length)
            } else {
                break;
            }
        }
    }
    //however, what we get back might not be all number if this is an internal bracket, so let's check!

    let output = '';

    //we're going to want to repeat this action the number of times specified, thus, the for loop
    for (let i = 0; i < num; i++) {
            if (newstr.indexOf('[') !== -1) {
                //in other words, if there's another bracket within, we recurse and do the same thing over again
                output += newstr[0] + decode(newstr)
                console.log('output', output)
            } else {
                //
                output += newstr
            }
        }

    console.log(output)
    return output;
}


console.log(decode('4[b3[a]]'));
