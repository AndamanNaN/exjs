function contains(haystack, needle, startIndex = 0){
    if(haystack.includes(haystack.indexOf(needle, startIndex)) !== -1){
        console.log(-1);
    }
    console.log(haystack.indexOf(needle));
}

contains("Hello World", "Wor");
