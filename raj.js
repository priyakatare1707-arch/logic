document.getElementById('btn1').addEventListener('click',mysum);
function mysum(){


    let no1 =Number(document.getElementById('no1').value);
    let no2 =Number(document.getElementById('no2').value);
    let ans= no1+no2;
    document.getElementById('demo').innerHTML ='Addition:'+ans;
 }
 