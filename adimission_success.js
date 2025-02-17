function  willSuccess( marks ) {
    // console.log(marks)
    let passArray = [];
    let failArray = [];
    // console.log(Array.isArray(marks));
    if(Array.isArray(marks)){
        for( let mark of marks){
            if( mark >= 50){
                passArray.push("Pass")
            }
            else{
                failArray.push("Fail");
            }
        }
        // console.log(passArray);
        // console.log(failArray);
        if (passArray.length > failArray.length){
            return true;
        }
        else{
            return false;
        }
    }
    return "Invalid"
}
 let marks = [60, 70, 80, 40, 30];
 let output2 = willSuccess(marks);
 console.log(output2);



 marks = [48 , 48 , 92 , 100 ];
 output2 = willSuccess(marks);
 console.log(output2)
 

 marks =[48, 48, 50, 50, 100];
 output2 = willSuccess(marks);
 console.log(output2)

 marks =[];
 output2 = willSuccess(marks);
 console.log(output2)

 marks =[92];
 output2 = willSuccess(marks);
 console.log(output2)

 marks =[ 90 ,  99 , 87 , 48 , 34 , 49 ];
 output2 = willSuccess(marks);
 console.log(output2)

 marks = "100 , 100";
 output2 = willSuccess(marks);
 console.log(output2)

 marks = 90;
 output2 = willSuccess(marks);
 console.log(output2)