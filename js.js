// THis is function in print = "سيرتك (ة) الذاتية
function p() {
    var z = document.getElementById('con-1').innerHTML;
    document.write(z);
    document.getElementById('styl').innerHTML += '<meta charset="UTF-8"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"><link rel="stylesheet" href="font/font.css"><link rel="icon" href="img/icon.png"><title> سيرتك (ة) الذاتية </title><style>input{border: none;}</style>';
    document.getElementById('langx3').innerHTML +='<br><br><br><br><p id="img1"><button id="prent" onclick="print();"><img src="img/print.svg" width="20">طباعة </button></p>';
    document.getElementById('styl').innerHTML +='<link rel="stylesheet" id="tx1" href="css timplet/red.css">' ;
    //document.getElementById('styl').innerHTML += '';
    print(z);
}
//     if (window.timp.value == "أزرق"){
//         document.getElementById('styl').innerHTML += '<link rel="stylesheet" id="tx1" href="css timplet/blue.css">';
// }else if (window.timp.value == "أصفر"){
//         document.getElementById('styl').innerHTML += '<link rel="stylesheet" id="tx2" href="css timplet/yallow.css">';
// }
// else if (window.timp.value == "أخضر"){
//    document.getElementById('styl').innerHTML += '<link rel="stylesheet" id="tx2" href="css timplet/green.css">';
// }
// else if (window.timp.value == "أحمر"){
//    document.getElementById('styl').innerHTML += '<link rel="stylesheet" id="tx2" href="css timplet/red.css">';
// }
// else{
//    document.getElementById('styl').innerHTML += '<link rel="stylesheet" id="tx1" href="css timplet/blue.css">';
// }

function test() { 
    window.icon100.style = "display: none;";
    var x = [ // This is Array
        document.getElementById('name').value, // index 0 x[0]
        document.getElementById('email').value, // index 1 x[1]
        document.getElementById('tel').value, // index 2 x[2]
        document.getElementById('date').value, // index 3 x[3]
        document.getElementById('url').value, // index 4 x[4]
        document.getElementById('mihna').value, // index 5 x[5]
        document.getElementById('txt').value, // index 6 x[6]
        document.getElementById('lang').value, // index 7 x[7]
        document.getElementById('bilad').value, // index 8 x[8]
        document.getElementById('txt2').value, // index 9 x[9]
        document.getElementById('name2').value, // index 10 x[10]
        document.getElementById('txt3').value, // index 11 x[11]
        document.getElementById('setting').value, // index x[12]
        /*    ------------------------------------------      input Araay     ---------------------------------------       */
    ];
    // This is Array
    window.namex.innerHTML = '  <img src="img/user.svg" class="icons"/>   ' + x[0];
    window.emailx.innerHTML = ' <img src="img/email.svg" class="icons"/>   ' + x[1];
    y = x[2].slice(0, 3);
    z = x[2].slice(3);
    window.telx.innerHTML = ' +   ' + y + ' ' + z;
    window.detex.innerHTML = '<img src="img/date.svg" class="icons"/> ' + x[3];
    window.mihnax.innerHTML = x[5];
    window.langx.innerHTML = ' <img src="img/lang.svg" class="icons"/> ' + "اللغة الأساسية " + x[7];
    window.txtx.innerHTML = "<h5> نبذة مختصرة " + '<img src="img/pen.svg" class="icons"/>' + "</h5>" + x[6] + "<hr>";
    window.urlx.innerHTML = "الجنس :" + x[4];
    window.biladx.innerHTML = " الدولة " + x[8];
    window.txt2x.innerHTML = '<h5 id="txt2title">المستوى الدراسي </h5>' + x[9] + "<hr>";
    window.name2x.innerHTML = "<input type=text value= '" + "مهارة إضافية " + "'><br>" + x[10];
    window.txt3x.innerHTML = '<h5 id="txt3xtitle">' + '<img src="img/mahara.svg" class="icons"/>' + ' المهارات </h5>' + x[11];
    window.langx2.innerHTML = '<img src="img/lang.svg" class="icons"/>' + " اللغات";

    /*    creet icon        */

    if (x[12] == "ترك الأيقونات") {
        window.namex.innerHTML = '  <img src="img/user.svg" class="icons"/>   ' + x[0];
        window.emailx.innerHTML = ' <img src="img/email.svg" class="icons"/>   ' + x[1];
        window.detex.innerHTML = '<img src="img/date.svg" class="icons"/> ' + x[3];
        window.langx.innerHTML = ' <img src="img/lang.svg" class="icons"/> ' + "اللغة الأساسية " + x[7];
        window.langx2.innerHTML = '<img src="img/lang.svg" class="icons"/>' + " اللغات";
        window.txtx.innerHTML = "<h5> نبذة مختصرة " + '<img src="img/pen.svg" class="icons"/>' + "</h5>" + x[6] + "<hr>";
        window.txt3x.innerHTML = '<h5 id="txt3xtitle">' + '<img src="img/mahara.svg" class="icons"/>' + ' المهارات </h5>' + x[11];
    } else {
        window.namex.innerHTML = ' الإسم   ' + x[0];
        window.emailx.innerHTML = x[1] + ' البريد   ';
        window.detex.innerHTML = ' تاريخ الميلاد  ' + x[3];
        window.langx.innerHTML = ' ' + "اللغة الأساسية " + x[7];
        window.langx2.innerHTML = '' + " اللغات";
        window.txtx.innerHTML = "<h5> نبذة مختصرة " + '' + "</h5>" + x[6] + "<hr>";
        window.txt3x.innerHTML = '<h5 id="txt3xtitle">' + ' المهارات </h5>' + x[11];
    } 
}

function untest() {
    var x = [ // This is Array
        document.getElementById('name').value, // index 0 x[0]
        document.getElementById('email').value, // index 1 x[1]
        document.getElementById('tel').value, // index 2 x[2]
        document.getElementById('date').value, // index 3 x[3]
        document.getElementById('url').value, // index 4 x[4]
        document.getElementById('mihna').value, // index 5 x[5]
        document.getElementById('txt').value, // index 6 x[6]
        document.getElementById('lang').value, // index 7 x[7]
        document.getElementById('bilad').value, // index 8 x[8]
        document.getElementById('txt2').value, // index 9 x[9]
        document.getElementById('name2').value, // index 10 x[10]
        document.getElementById('txt3').value, // index 11 x[11]
        document.getElementById('setting').value, // index x[12] 
         document.getElementById('timp').value     // index x[13]
        /*    ------------------------------------------      input Araay     ---------------------------------------       */
    ];
    if (x[13] == "iconcolors"){
        window.namex.innerHTML = '  <img src="img/user2.svg" class="icons"/>   ' + x[0];
        window.emailx.innerHTML = ' <img src="img/email2.svg" class="icons"/>   ' + x[1];
        window.detex.innerHTML = '<img src="img/date2.svg" class="icons"/> ' + x[3];
        window.langx.innerHTML = ' <img src="img/lang2.svg" class="icons"/> ' + "اللغة الأساسية " + x[7];
        window.langx2.innerHTML = '<img src="img/lang2.svg" class="icons"/>' + " اللغات";
        window.txtx.innerHTML = "<h5> نبذة مختصرة " + '<img src="img/pen2.svg" class="icons"/>' + "</h5>" + x[6] + "<hr>";
        window.txt3x.innerHTML = '<h5 id="txt3xtitle">' + '<img src="img/mahara2.svg" class="icons"/>' + ' المهارات </h5>' + x[11];
    }
    else{
        window.namex.innerHTML = '  <img src="img/user.svg" class="icons"/>   ' + x[0];
        window.emailx.innerHTML = ' <img src="img/email.svg" class="icons"/>   ' + x[1];
        window.detex.innerHTML = '<img src="img/date.svg" class="icons"/> ' + x[3];
        window.langx.innerHTML = ' <img src="img/lang.svg" class="icons"/> ' + "اللغة الأساسية " + x[7];
        window.langx2.innerHTML = '<img src="img/lang.svg" class="icons"/>' + " اللغات";
        window.txtx.innerHTML = "<h5> نبذة مختصرة " + '<img src="img/pen.svg" class="icons"/>' + "</h5>" + x[6] + "<hr>";
        window.txt3x.innerHTML = '<h5 id="txt3xtitle">' + '<img src="img/mahara.svg" class="icons"/>' + ' المهارات </h5>' + x[11];
}}

//  THis is function in img
function imgnew() {
    window.icon100.style = "display: none;";
    window.img.style = "display: block;";  
    window.toalert.style = "display: block;";
}
//  THis is function in img 2

function imgurl() {
    // var url = prompt("Enter URL THe IMG");
    var urlimg = window.image.value;
    window.img.src = urlimg;
    if (urlimg == "") {
        window.img.src = "img/imgusar.jpg";
        confirm('لم تضع رابط الصورة ');
    } else {
        window.img.src = urlimg;
    }
    window.toalert.style = "display: none;";

}

function delet() {
    window.blockform.style = "display: none;";
    window.blockform2.style = "display: block;";
    window.i.style = "display: none;";
    window.i2.style = "display:block;";
    window.inwan.innerHTML = " الخبرات ";
}

function delet2() {
    window.blockform2.style = "display: none;";
    window.blockform3.style = "display: block;";
    window.inwan.innerHTML = " cv إعدادات ";

}

// document.getElementById('style').innerHTML = "";
// document.getElementById('style').style = "display: none;";
