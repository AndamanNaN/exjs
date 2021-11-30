function padLeft(char, str, quantity){
    let temp = "";
    for (let i = 0; i < quantity - str.length; i++) {
        temp+=char;
    }
    console.log(temp+str);
}

padLeft("0", "123", 6);