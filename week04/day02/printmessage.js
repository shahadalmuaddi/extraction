function printMessageWithCapitalLetter(message,letter){

    let msg = '';
    for(let c of message){
        if(c === letter){
        msg = `${msg}${c.toUpperCase()}`;}
        else{
        msg = `${msg}${c}`;
    
    }}
    console.log(msg);
}



printMessageWithCapitalLetter("Hello, I am Lamyaa","a");
