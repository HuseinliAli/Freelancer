//1ci mesele
const numbers = [21, 30 , 12, 15, -5, 35, -10, -11, 0, 32];
const odds = new Array();
const evens = new Array();
for(var i=0;i<numbers.length;i++)
{
    if(numbers[i]%2==0)
    {
        evens.push(numbers[i]);
    }
    else 
    {
        odds.push(numbers[i]);
    }
}
console.log("cut");
console.log(evens);
console.log("tek");
console.log(odds)

//2ci mesele
function makeLine(star) {
    const stars = new Array();
    for(var i=0;i<star;i++)
    {
        stars.push("#");
    }
    console.log(stars);
}
makeLine(6);

const nameSharp = function (sharp) {
    let sharps = "";
    for(var i=0;i<sharp;i++)
    {
        sharps+="#";
    }
    console.log(sharps);
}
nameSharp(10)

const pow = function (toPower)
{
    if(typeof(toPower)
    return 3*toPower;
}

