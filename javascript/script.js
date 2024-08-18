//ilk ders//
//değişkenler

console.log(7000+(7000*0.3))//+%30 zam
console.log(6000+(6000*0.3))//değişkensiz manuel hesap


var maasA=7000;
var maasC=6000;
console.log(maasA+(maasA*0.3));
console.log(maasC+(maasC*0.3));


var zam=0.3;
console.log(maasA+(maasA*zam));
console.log(maasC+(maasC*0.3));
//değişken türleri

var productName="Iphone 13";
let productSell="15000";

console.log(typeof productName);
console.log(typeof productSell);

let num1="10";
let num2="20";

console.log(Number(num1)+Number(num2));

let num3=10;
let num4=20;
console.log(num3.toString()+num4.toString());

let name="Seçil";
let surname="yazgı";

console.log(name+" "+surname);
let expoint = 40;
let successfull =(expoint>=50);
console.log(successfull);
console.log(typeof successfull);

let age;
console.log(age);
console.log(typeof age);
//quiz
/*Sorular
1) iki öğrenciye bilgileri değişkenler içerisinde saklayınız,
2) öğrencilerin yaş bilgilerini değişkende saklayınız,
3) öğrencilerin ders not ortalamalarını değişkende saklayınız,
4) öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız
*/
//Birinci soru
var student1="ada bilgi";
var birthDateA=2012;
var mathPointA1=70;
var mathPointA2=70;
var mathPointA3=80;

var student2="yiğit bilgi";
var birthDateY=2010;
var mathPointY1=40;
var mathPointY2=40;
var mathPointY3=50;
//ikinci soru
var studentbirthdate1=2024-2012;
var studentbirthdate2=2024-2010;
// Üçüncü soru

var student1Average=(mathPointA1+mathPointA2+mathPointA3)/3;
var student2Average=(mathPointY1+mathPointY2+mathPointY3)/3;
//dördüncü soru


statu1=(student1Average>=50);
statu2=(student2Average>=50);
console.log(statu1);
console.log(statu2);
