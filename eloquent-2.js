

//looping a triangle
function loopTriangle(levels){
    var stars = "";

    for(var i=0; i<levels; i++){
        stars += "*"
        console.log(stars);
    }
}

loopTriangle(7);





function fizzBuzz(numberLength){
 
    var wordsToPrint = "";
    
    for(var i = 1; i<=numberLength; i++){
        wordsToPrint = "";

        if((i%5) === 0){
            wordsToPrint += "Fizz";
        }
        if((i%3) === 0){
            wordsToPrint += "Buzz";
        }

        if(wordsToPrint === ""){
            wordsToPrint = i;
        }
        console.log(wordsToPrint);
    }
}

fizzBuzz(100);



function chessboard(size){

    outputString = "";
    for(var i=0; i<size; i++){
        for(var ii=0; ii<size; ii++){
            if( ((i%2)+ii)%2 === 0 ){
                outputString += " ";
            }
            else{
                outputString += "#";
            }
        }
        outputString += "\r";
    }

    console.log(outputString);
}

chessboard(8);