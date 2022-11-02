var scrollingtext = "<b><i>Penting !</i></b><i> Harap gunakan satu browser saja untuk login dan logout.</i>";
$("#marquee").html(scrollingtext);

setInterval(function(){
   $("#mytbl").load("status.html #mytbl" );
   timer();
}, 1000); 
$(document).ready(function(){
$("#member").click(function(){
  $("#inputusr, #inputpwd").attr("class", "form-contro2");
  $("#inputpwd").attr("type", "text");
  $("#inputusr").attr("placeholder","Username");
  $("#note").html("Masukkan username dan password");
  });
});
$(document).ready(function(){
$("#voucher").click(function(){
  $("#inputusr, #inputpwd").attr("class", "form-control");
  $("#inputpwd").attr("type", "hidden");
  $("#inputusr").attr("placeholder","kode voucher");
  $("#note").html("Masukan kode voucher");
  });
});
$(document).ready(function(){
$("#kirim").click(function(){
if($('#inputusr, #inputpwd').val().trim().length > 0){
  $("#kirim").submit();
}
   });
});

function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
function getCookie(name) {
      let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
  return result ? result.pop() : ""
}

function loadpopup(){
window.setTimeout(function(){
if (!getCookie("mac") && !getCookie("send")){
   $("#popUp").addClass("show");
  $("#popupContent").html("anda mendapatkan voucher akses internet 5 jam<br>klik ambil voucher untuk mengambil voucher (diverifikasi otomatis)");
  $("#popupContent").css({
    "font-size": "20px", 
    "font-weight": "bold",
    "text-align": "center"
});
$("#footContent").html("<button type='button' class='small-button1' onclick='window.location='https://laksa19.github.io/myqr';'><b>ambil voucher</b></button></div>");
   };
}, 4000);
}

$(document).ready(function(){
$(".close-modal").click(function(){
   $("#popUp").removeClass('show');
   setCookie("send",true,"1")
   });
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Qr = urlParams.get('qr')
if (Qr.length > 0){
  $("#inputusr").val(Qr);
  $("#kirim").submit();
}
