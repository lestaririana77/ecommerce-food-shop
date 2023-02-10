function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)


function showTime() {

    var arrHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]
    var arrBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    var date = new Date();
    var detik = date.getSeconds();
    var menit = date.getMinutes();
    var jam = date.getHours();
    var hari = date.getDay();
    var tanggal = date.getDate();
    var bulan = date.getMonth();
    var tahun = date.getFullYear();
    var session = "AM";

    if (jam == 0){
        jam = 12;
    }
    if (jam > 12){
        jam = jam - 12 ;
        session = "PM";
    }

    jam = (jam<10) ? "0" + jam : jam;
    menit = (menit<10) ? "0" + menit : menit;
    detik = (detik<10) ? "0" + detik : detik;

    var time = arrHari[hari] + ", " + tanggal + " " + arrBulan[bulan] + " " + tahun + "        " + "        \n" + jam + " : " + menit + " : " + detik + " " + session;
    
    document.getElementById("DisplayClock").innerText = time;
    document.getElementById("DisplayClock").textContent = time;

    setTimeout(showTime, 1000);
}
    
showTime();