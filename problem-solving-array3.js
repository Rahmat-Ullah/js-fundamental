// 1
var one = 13;
var two = 79;
var three = 45;

if(one > (two && three)){
    console.log('One is the largest number');
}
else if( two > (three && one)){
    console.log('Two is the largest number');
}
else{
    console.log('Three is the largest number');
}

// 2
var a = 9;
var b = 8;
var c = 9;

if(a == c || b == c){
    console.log('Your triangle is isosceles.');
}
else{
    console.log('Your triangle is not isosceles.');
}