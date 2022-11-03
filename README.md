# hotspot-print-server-esp8266
Cara instalasi alat ini</br>
1.download file hotspot_print_server.bin</br>
2.upload sketch menggunakan esp8266 flasher untuk windows atau esp8266 loader untuk android</br> 
3.nyalakan esp8266 akan muncul SSID Printserver_setup</br>
4.hubungkan hp/PC ke ssid Printserver_setup Dan buka 192.168.4.1 pada browser</br>
5.Jika halaman instalasi terbuka, akan masuk pada instalasi step1.</br>
6.pada kolom ssid pilih ssid hotspot voucher anda jika belum tampil, silahkan di reload kolom password di kosongkan</br> 
7.pada kolom mikrotik login masukkan username dan password mikrotik, sebelumnya harus dipastikan pada mikrotik port telnet diaktifkan dan diset pada default yaitu port:23 buka winbox <b>ip->service</b></br>
8.pada kolom mikrotik IP address masukkan IP address mikrotik.</br>
9.pada kolom admin panel login masukkan sesuai keinginan.</br>
10.pada kolom kode lisensi ,isi sembarang aja untuk uji coba/ trial untuk membeli lisensi valid silahkan contact wa di 083846101110. </br>
11.klik install masuk ke install step2</br>
12.di setep ini ada 2 cara:</br>
A.copy semua text di text area buka winbox buka terminal dan paste di terminal kemudian klik enter, untuk cara ini kita bisa lihat IP address esp8266 di <b>ip->hotspot->Host</b> namun IP sewaktu waktu bisa berubah, buat static di <b>ip->hotspot->IP binding</b> Dan tentukan di To address alamat ipnya.</br>
B.tambahkan manual dengan copy Mac address saja di text area buka winbox <b>ip->hotspot->IP binding</b> Mac address isikan Mac address yang tadi sudah di copy, To address bisa di isikan IP address untuk esp agar static ,type pilih bypassed.

</br>
<b>Keterangan</b></br>
-led menyala saja tidak berkedip artinya sedang menghubungkan ke jaringan wifi, led berkedip pelan artinya mode ap /install mode/tidak dapat terhubung ke jaringan wifi,led berkedip cepat artinya alat sudah terhubung ke jaringan wifi Dan bekerja,led tidak menyala artinya terjadi error pada alat.</br>
-untuk login menggunakan scan qr code Dan login otomatis silahkan gunakan login page yang sudah disediakan</br>

