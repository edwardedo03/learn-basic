// BASIC ------------------------------------------------------------------------------------------------------------

console.log(`hello`);

let umur
umur = 17

// ini masuknya ke console log
console.log(`${umur}`);
//  atau
console.log(umur);

// ini masuknya langsung ke web
// document.body.innerHTML = 'hello';
// kalo langsung ngarah ke body bakal ganggu HTML nya.
document.getElementById("text1").innerHTML = "HELLO";
// kalo narik dari HTML bisa di kasih style CSS nya yang dari HTML
document.writeln('Saya');

// tipe data
let nama = "Edward" // kalo tipe string harus dikasih "string"
let tahun = 2006 // kalo tipe number ga usah pake tanda petik
let kamu = true // ini namanya boolean

document.writeln(nama);
document.writeln("</br>");
// kita bisa pake HTML di JS kayak di atas ini
document.writeln(`<p style="text-align: center; font-size: 25px">${tahun}</p>`);

// kayak gini juga bisa
document.writeln(`<h1 style="text-align: center">`);
document.writeln(kamu);
document.writeln("halo");
document.writeln(`</h1>`);

document.writeln("<textarea cols='100' rows='10' style='margin-left: 25%'>");
document.writeln(kamu);
document.writeln("hai \nini dienter");
document.writeln("\tini \"dikasih tab\"");
document.writeln("</textarea>");
// penggunaan \n, \', \", \t cuma bisa didalem textarea

document.write("</br>");
document.write("</br>");


// MATH ------------------------------------------------------------------------------------------------------------

let a = 2**2
let b = 2*3
let c = 2+2
let d = 3-2
let e = 2/2
let f = 30%4

document.write(`hasil dari 2^2 = ${a}`); // ini pangkat
document.write("</br>");
document.write(`hasil dari 2 x 3 = ${b}`); // ini perkalian
document.write("</br>");
document.write(`hasil dari 2 + 2 = ${c}`); // ini penjumlahan
document.write("</br>");
document.write(`hasil dari 3 - 2 = ${d}`); // ini pengurangan
document.write("</br>");
document.write(`hasil dari 2 / 2 = ${e}`); // ini pembagian
document.write("</br>");
document.write(`sisa dari 30/4 = ${f}`) // logicnya kalo 30 / 4 yang mendekati itu 7, maka 4 x 7 = 28. 30 - 28 = 2. Maka 2 adalah sisa

// test boolean
let something = 5 == "5";
document.writeln(`<p> kalo 5 == "5" = ${something}</p>`)
// walaupun pake "" gini kayak string, kalo di cek nilai tetep angkanya yang diliat

// === ini dipake buat cek nilai dan tipe data
let something2 = 5 === "5";
document.writeln(`<p> kalo 5 === "5" = ${something2}</p>`)


// alert(`jawab pertanyaan gw yaa`)
// let answer1 = prompt(`2x2, 2+2, 4:2 berapa hasilnya? NOTE: JAWAB DENGAN TIPE DATA NUMBER`)
// let answer2 = 2 == answer1;

// if (answer1 === answer2) {
//     alert(`${answer2}`)
// } else {
//     alert(`${answer2}`)
// }

let x = 10
document.writeln(`</br>`)
x++ // ini artinya variabel x+1
document.writeln(`let x = 10`)
document.writeln(`</br>`)
document.writeln(`hasilnya = ${x}`)
document.writeln(`</br>`)
document.writeln(`x++ artinya variabel x+1`)


document.writeln(`</br> </br>`)
// liat perbedaan dan fungsinya
document.writeln(`liat perbedaan dan fungsi variabel x++ dan y--`)
document.writeln(`</br> </br>`)


let y = 10
y-- // ini artinya variabel y-1
document.writeln(`let y = 10`)
document.writeln(`</br>`)
document.writeln(`hasilnya = ${y}`)
document.writeln(`</br>`)
document.writeln(`y-- artinya variabel y-1`)


document.writeln(`</br> </br>`)
document.writeln(`<p style="color: white;">ANOTHER EXAMPLE</p>`)

let first = 2
let second = 3
first += second // bisa sebaliknya (-=), (*=) atau (/=)
document.writeln(`let first = 2, let second = 3`)
document.writeln(`</br>`)
document.writeln(`hasilnya = ${first}`)
document.writeln(`</br>`)
document.writeln(`first += second artinya 2+3 = 5`)


// FUNCTION ------------------------------------------------------------------------------------------------------------

//TESTING:

function infoUmur() {
    let nama = 'edo'
    let umur = 17


    alert(`hai gw mau test javascript h3h3`)
    alert(`hai nama gw ${nama} dan umur gw ${umur} tahun`)


    let umurKamu = prompt(`umur lu berapa?`)
    alert(`ooh umur lu ${umurKamu}`)


    if (umurKamu == 17) {
        alert(`sama`)
    }

    //kalo pake || salah satu kondisi harus bener
    //kalo pake && semua kondisi harus bener

    else if (umurKamu > 100 || umurKamu <= 0) {
        alert(`impossible`)
    }
    else if (umurKamu > 17) {
        alert(`puh sepuh`)
    }
    else if (umurKamu < 17) {
        alert(`dek dek`)
    }
    else {
        alert(`LU GAJELAS`)
    }
}

infoUmur(); // ini untuk manggil function yang udh dibuat

// //-------------------------------------------------------------------------------------------------------------

// //TUGAS 1:

// alert(`Silahkan hitung jumlah saldo anda disini`)
// let saldoAwal = prompt(`Masukan saldo awal anda`)
// let pengeluaran = prompt(`Masukan jumlah pengeluaran anda`)

// if (parseFloat(saldoAwal) == saldoAwal) {
//     saldoAwal = saldoAwal
// } 
// else {
//     saldoAwal = 0
// }

// if (parseFloat(pengeluaran) == pengeluaran) {
//     pengeluaran = pengeluaran
// }
// else {
//     pengeluaran = 0
// }

// //parsefloat membuat seluruh tipe data dikembalikan ke bentuk angka

// let saldoAkhir = saldoAwal - pengeluaran

// alert(`Total saldo akhir anda adalah ${saldoAkhir}`)


