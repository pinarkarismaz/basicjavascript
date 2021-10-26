
/**   değişken tanımlama
 * var sayi=20;
var sayi2=30;
var sayi3=40;

alert("toplam: "+(sayi + sayi2+ sayi3));**/


/* string iki ifade birleştirme

var a="Javascript"
var b="programlama"
alert(a+b);*/

/*

var array=["java","pyhton","c++","c"];
alert(array[1]);*/

/*var array=["java","pyhton","c++","c"];
array[4]="php";
alert(array);
array.push("go");
alert(array);
alert(array.length);*/

/*for(var i=0; i<10;i++)
{
    console.log("i değeri: " +i);
}*/

/*var i=0;
while(i<100)
{
    console.log("i değeri: "+i);
    i+=2;
}*/

/*var sayilar=[32,5,1,100,-1,90];
sayilar[0];

console.log("array elemamları: ");
for (var i=0;i<sayilar.length;i++)
{
    console.log("sayi:"+sayilar[i]);
}*/

/*var sayilar=[32,5,1,100,-1,90];

console.log("array elemamları: ");
sayilar.forEach(function(sayi)
{
    console.log("eleman: "+ sayi);
});*/

/*var a =5;
var b=6;
if(a==b){
    console.log("eşit");
}else console.log("değil");*/

/*if(2==2) console.log("eşit");
if(3=="3") console.log(" sadece 3 ler eşit");
if(3==="3") console.log("hem 3 hem veri tipi eşit")
*/


/*var islem=1;

switch(islem)
{
case 1: console.log("işlem 1");
break;
case 2: console.log("işlem 2");
break;
case 3: console.log("işlem 3");
break; 
default: console.log("geçersizişlem");

}*/


/*function selamla()
{
    console.log("merhabalar ");
}

selamla();

/*function selamla2(isim)
{
    console.log("merhaba " + isim);
}

selamla2("ayse");

/*function selamla3(a,b)
{
    console.log(a+b);
}

selamla3(3,2);

/*function selamla3(a,b)
{
    return a+b;
}

var sonuc=selamla3(3,2);
console.log(sonuc);*/


/*var calisan=
{
    isim:"murat",
    soyisim:"erdem",
    numara:"123456",
    diller: ["php","java"],
    adres:
    {
      sokak:"kabil",
      cadde:"123"
    },
    isimBilgileri: function()
    {
        return "çalışan ismi:" + this.isim;
    }
}
console.log(calisan.isim);
console.log(calisan.diller);
console.log(calisan.adres.sokak);
console.log(calisan.isimBilgileri());*/

/*var calisan=new Object();
calisan.isim="murat";
calisan.soyisim="erdem";
calisan.isimBilgileri=function()
{
    return "çalışan ismi:" + this.isim;
}
console.log(calisan.isimBilgileri())*//*

function Calisan(isim,soyisim)
{
    this.isim=isim;
    this.soyisim=soyisim;
   

    this.bilgileriGöster=function()
    {
        return "isim" +this.isim+ "\nsoyisim:" +this.soyisim;
    }
}

var calisan1=new Calisan(2,"erdem");
console.log(calisan1.bilgileriGöster());*/

function tikla()
{
    alert("butona tıklandı");
}
function tikla3(elemant)
{
    elemant.innerHTML="butona tıklandı";
}
function renkDegistir()
{
    var element=document.getElementById("p1");
    element.style.color="red";
}

function mouseover()
{
    var element=document.getElementById("p1");
    element.innerHTML="MOUSE OVER EFECKTİ";
}
function mouseout()
{
    var element=document.getElementById("p1");
    element.innerHTML="MOUSE OUT EFECKTİ";
}
function dogrula()
{
    var form=document.forms["form1"];
    var değer=form["isim"].value;
    if(değer=="")
    {
        alert("isim alanı boş bırakılamaz");
        return false;
    }
    
    return true;
}



