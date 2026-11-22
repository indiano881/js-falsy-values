/* FALSY values in js + ?? syntax

1. 0            
2. "0"          
3. ""           
4. " "          
5. []           
6. {}           
7. null         
8. NaN          
9. "false"      
10. -1   */


let loopRunning=3
let loopCondition=false;

while(loopCondition ) {
    loopRunning--
    console.log("looping")
    if (loopRunning===0) {
        console.log("exit the loop")
    }
}