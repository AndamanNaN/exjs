function padRight(char, str, quantity) {
    let temp = "";
    for (let i = 0; i < quantity - str.length; i++) {
        temp+=char;
    }
    console.log(str+temp);
}

padRight(" ", "45", 8);