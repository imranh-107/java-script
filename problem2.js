let score=23;
let greed;
if(score>=90 && score <=100 )
{
    greed='A';
}
 else if(score>=70 && score <=89 )
{
    greed='B';
}
 else if(score>=60 && score <=69 )
{
    greed='C';
}
 else if (score>=50 && score <=59 )
{
    greed='D';
}
 else if(score>=0 && score <=49 )
{
    greed='F';
}
console.log("yours greed isFinite:",greed)