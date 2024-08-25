/*//ilk ders//
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
console.log(typeof age);*/
//quiz
/*Sorular
1) iki öğrenciye bilgileri değişkenler içerisinde saklayınız,
2) öğrencilerin yaş bilgilerini değişkende saklayınız,
3) öğrencilerin ders not ortalamalarını değişkende saklayınız,
4) öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız
*/
//Birinci soru
/*
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


//string

1) url kaç karakter?
2)kursAdi kaç kelimeden oluşmaktadır?
3)url https ile mi başlıyor?
4)kursAdi içerisinde Eğitimi kelimesi var mı?
5)url ve kursAdi değişkenlerini kullanarak aşağıdaki string metni oluşturunuz.
    a)https://www.scarlettrose.com.tr/komple-web-geliştirme-kursu
*/
/*let url="https://www.scarlettrose.com.tr/";
let kursAdi="Komple Web Geliştirme Kursu";
//1. soru
let str=url.length;
console.log(str);
// 2.soru
let wordC= kursAdi.split("").length;
console.log(wordC);
//3. soru
let withStart=url.startsWith("https://");
if(withStart==true){console.log("evet");}
else{console.log("hayır");}

//4.soru
let inOf=kursAdi.indexOf("Eğitimi");
if(inOf>-1){console.log("Evet var");}
else{console.log("yok");}

//5.soru

let newText=(url+kursAdi.trim()).toLocaleLowerCase();
let newText1=newText.replaceAll(" ","-");
//newText.replaceAll(" ","-");

console.log(newText1);
*/
//Array

//1)"elma, armut, muz, çilek" elemanlarına sahip dizi oluşturunuz.
let lArray=["Elma","Armut","Muz","Çilek"];

//2) Dizi kaç elemanlı?
/*
let length= lArray.length;
console.log(length);

//3) dizinin ilk ve son elemanı nedir?
i=0;
console.log("Dizinin İlk Değeri: "+lArray[0]);
console.log("Dizinin Son Değeri: "+lArray[length-1]);


//4) elma dizinin bir elemanı mıdır?
let result= lArray.indexOf("Elma")+1;
if(result==true){
    console.log("Evet Elma Dizinin bir elemanıdır");
}
else{
    console.log("Elma dizinin bir elemanı değildir. "+result);
}

//Kiraz Kelimesini listenin sonuna ekleyiniz

lArray.push("Kiraz");
console.log(lArray);
//dizinin son 2 elemanını siliniz
let a=0;

while(a<2){

    lArray.pop();
    a++;
}
console.log(lArray);

//öğrenci bilgilerini saklayınız

let ogr1=["Yiğit","Bilgi",2010,[70,60,80]];
let ogr2=["Ada","Bilgi",2012, [80,80,90]];
let ogr3=["Ahmet","Turan",2009,[60,60,70]];

let ogrenciler=[ogr1,ogr2,ogr3];
let yigityas= new Date().getFullYear()-ogrenciler[0][2];

let adayas=new Date().getFullYear()-ogrenciler[1][2];
let ahmetyas=new Date().getFullYear()-ogrenciler[2][2];
console.log(yigityas);
console.log(adayas);
console.log(ahmetyas);
let yigitnot= (ogrenciler[0][3][0]+ogrenciler[0][3][1]+ogrenciler[0][3][2])/3;
let adanot=(ogrenciler[1][3][0]+ogrenciler[1][3][1]+ogrenciler[1][3][2])/3;
let ahmetnot=(ogrenciler[2][3][0]+ogrenciler[2][3][1]+ogrenciler[2][3][2])/3;

console.log(yigitnot.toFixed(2));
console.log(adanot.toFixed(2));
console.log(ahmetnot.toFixed(2));

*/

//Objects

//1) Sipariş bilgilerini object içerisinde saklayınız
/*
let order={
    "orderID":"101",
    "orderDate":"31.12.2023",
    "paymentType":"Credit Cart",
    "orderAdress":"Karaağaç Mah. Isparta/Merkez",
    "orderProduct1":{
        "productID":"5",
        "productName":"Asus TUF GAMING A15",
        "url":"https://www.asus.com/tr/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a15-2024/",
        "productSeller":"53000"
    },
    "orderProduct2":{
        "productID":"6",
        "productName":"ASUS TUF GAMING A14",
        "url":"https://www.asus.com/tr/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a14-2024/",
        "productSeller":"65000"
    },
    "customerID": 12,
    "vendor":{
        "vendorID":"12",
        "vendorName":"ASUS TÜRKİYE"
    },

    "orderID":"102",
    "orderDate":"31.12.2023",
    "paymentType":"Credit Cart",
    "orderAdress":"Karaağaç Mah. Isparta/Merkez",
    "orderProduct3":{
        "productID":"6",
        "productName":"ASUS TUF GAMING A14",
        "url":"https://www.asus.com/tr/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a14-2024/",
        "productSeller":"65000"
    },
    "   ":{
        "productID":"7",
        "productName":"ROG Strix G16",
        "url":"https://rog.asus.com/tr/laptops/rog-strix/rog-strix-g16-2024/",
        "productSeller":"65000"
    },
    "customerID": 12,
    "vendor":{
        "vendorID":"12",
        "vendorName":"ASUS TÜRKİYE"
    },

    
}
let total,seller1,seller2,seller3,seller4;

seller1=order.orderProduct1.productSeller;
seller2.order.orderProduct2.productSeller;
seller3=order.orderProduct3.orderProduct3;
seller4=order.orderProduct4.productSeller;

total=seller1+seller2+seller3+seller4;*/

//loop
/*
let square=0;
let numbers=[1,5,7,15,3,25,2,10,20,30];

//1) numbers listesindeki her bir elemanın karesini yazdırınız

for(let i=0; i<numbers.length;i++){

    square=(Number(numbers[i])*Number(numbers[i]));
    console.log(square);
    
}

let conclusion=0;
//2)numbers listesindeki hangi sayılar 5 in katıdır.

for(let s=0;s<numbers.length;s++){
    conclusion=(Number(numbers[s])%5);
    if(conclusion==0){
        console.log(numbers[s]+" sayısı 5'in katıdır.");
    }
}

//3)numbers listesindeki çift sayıların toplamını bulunuz
let conclusion1=0;
let number11;
for(a=0;a<numbers.length;a++){
    number11=(Number(numbers[a]))%2;
    if(number11==0){
        conclusion1+=Number(numbers[a]);
        
    }
    

}
console.log(conclusion1);

//4) product listesindeki ürünleri büyük harf yazdırınız.
let product11=["iphone 12","samsung s22","iphone 13","samsung s23"];
let newProduct;
for(y=0;y<product11.length;y++){
    newProduct=product11[y].toUpperCase();
    console.log(newProduct);
}


//5) product listesinde samsung geçen kaç ürün var?
let statu;
let conclusion2=0;
for(i=0;i<product11.length;i++){
    statu=product11[i].indexOf("samsung")+1;
    //console.log(statu);
    if(statu>0){
        conclusion2+=1;

    }
}
console.log("Samsung markalı ürün "+ conclusion2+" adettir.");


//6) student listesindeki her öğrencinin not ortalamasını ve başarı durumlarını yazdırınız,
*/
/*
let students111=[
    {"name":"yiğit","surname":"bilgi","notlar": [60,70,80]},
    {"name":"ada","surname":"bilgi","notlar": [80,70,80]},
    {"name":"cinar","surname":"turan","notlar": [70,70,60]}
];

let typeNot=students111.notlar;
console.log(typeof typeNot);



{"ad":"arif","soyad":"YILDIZ","nots":[80,70,80]},
    {"ad":"Adnan","soyad":"YILDIZ","nots":[70,70,60]}
*/


/*

let st1={
    "ad":"ibrahim","soyad":"YILDIZ","notss":[60,70,80]
};

let st2={

    "ad":"Arif","soyad":"YILDIZ","notss":[80,70,80]
};
let st3={

    "ad":"adnan","soyad":"YILDIZ","notss":[70,70,60]
};
let strn1=0,strn2=0,strn3=0,stt1=0,stt2=0,stt3=0;
for(i=0; i<st1.notss.length;i++){
    strn1+=st1.notss[i];
}
for(i=0; i<st1.notss.length;i++){
    strn2+=st2.notss[i];
}
for(i=0; i<st3.notss.length;i++){
    strn3+=st3.notss[i];
}
stt1=strn1/3;
stt2=strn2/3;
stt3=strn3/3;

if(stt1>=50){
    console.log(`${st1.ad}, ${stt2} ortalamayla dersi başarıyla geçti`);

}
else{
    console.log(`${st1.ad} dersi geçemedi`);
}

if(stt2>=50){
    console.log(`${st2.ad}, ${stt2} ortalamayla dersi başarıyla geçti`);
}
else{
    console.log(`${st2.ad} dersi geçemedi`);
}
if(stt3>=50){
    console.log(`${st3.ad}, ${stt3} ortalamayla dersi başarıyla geçti`);
}
else{
    console.log(`${st3.ad}, ${stt3} dersi geçemedi`);
}
*/
/*
let product11=["iphone 12","samsung s22","iphone 13","samsung s23"];


console.log(typeof Number(st1.nots));
console.log(Number(st1.nots));
console.log(typeof st1.ad+"dd");
*/

/*
for(let studentint of students111){
    let total=0;
    let average=0;
    let adet=0;

    for(let point11 of students111.notlar){
        total+= point11;
        adet++;

    }
    average=total/adet;
    console.log(`${students111.name} ${students111.surname} isimli öğrencinin not ortalaması ${average}.`);
    if(average>=50){
        console.log("Başarılı");
    }
    else{
        console.log("Başarısız");
    }
}*/


//function

//1- Kendisine gönderilen kelimeyi belirten kez ekranda yazan fonksiyon oluşturunuz
/*
function soru1(kelime, adet){
    for(let i=0;i<adet;i++){
        console.log(`${i}. ${kelime}`);
    }
}


soru1("Başla",50);
*/
//2- Dikdörtgen alan ve çevresini hesaplayan fonksiyon yazınız
/*
function alancevre(a,b){
    let alan=a*b;
    let cevre= 2*(a+b);

    console.log(`Dikdörtgenin alanı= ${alan}. Dikdörtgenin çevresi= ${cevre}.`);
}

alancevre(5,20);

*/
/*
function yazitura(){
    let tura,yazi,randomsayi;

    randomsayi=Math.random()*2;
    if(randomsayi<1){
        console.log(`Tura  ${randomsayi}`);
    }
    else{console.log(`Yazı  ${randomsayi}`);}

}
yazitura();

*/

//kendisine gönderilen sayının tam bölenlerini dizi şeklinde yazdıran fonksiyon yazınız
/*
function sayidonduren(a){
    let sayi=[];
    for(let i=0;i<=a;i++){
        if(a%i==0){
            sayi.push(i);
        }
    }
    console.log(sayi);
}

sayidonduren(60);

*/
//değişken sayıda parametre alan toplam isminde bir fonksiyon oluşturunuz

function toplam(){
    let degiskenparametre=0;
    for(let i=0;i<arguments.length;i++){
        degiskenparametre+=arguments[i];
        
    }

    console.log(degiskenparametre);
}

toplam(5,5,6,8);