//Write a JavaScript program to print all the numbers divisble by 3 present in an array

var arr = [25,27,3,99,53,77,41,89,66,15];
function checkDivisibility(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%3==0){
            console.log(arr[i]);
        }
    }
}
checkDivisibility();
