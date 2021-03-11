const produk1 = document.getElementById('produk1'); 
const produk2 = document.getElementById('produk2'); 
const produk3 = document.getElementById('produk3'); 
const produk4 = document.getElementById('produk4'); 
const produk5 = document.getElementById('produk5'); 

const tombol1 = document.getElementById('tombol1');
const tombol2 = document.getElementById('tombol2');
const tombol3 = document.getElementById('tombol3');
const tombol4 = document.getElementById('tombol4');
const tombol5 = document.getElementById('tombol5');

const isiKonten = document.getElementById("content")
// console.log(produk1.classList.contains('active'))
const btn = [produk1,produk2,produk3,produk4,produk5];

const isiProduk1 = `<section id="1">
                <div class="left">
                    <img src="img/1.jpg" alt="">
                    <p>Z-BORDER 1A</p>
                    <h2>IDR 599.000</h2>
                </div>
                <div class="right">
                    <h2>Product Info</h2>
                    <div class="scroll">
                        <p>Tas Border hadir untuk mendukung aktivitas harian Anda. Dilengkapi kompartemen terpisah untuk laptop berukuran 14 inch, tas ini memiliki kompartemen utama yang luas dengan ditutupi flap berpengunci buckle untuk keamanan ganda. Dua kantong di bagian depan dan dua saku tersembunyi juga siap mendukung kebutuhan Anda untuk menyimpan barang tambahan dengan praktis. Sternum system yang telah tersedia pun memberikan kenyamanan saat memanggul tas kemanapun.</p>
                        <br>
                        <p>Fitur: 
                            <ol>
                                <li>Kompartemen utama yang luas.</li>
                                <li>Kompartemen laptop 14 inch.</li>
                                <li>Dua kantong di bagian depan.</li>
                                <li>Saku samping tersembunyi, muat menyimpan botol minum.</li>
                                <li>Saku belakang tersembunyi.</li>
                                <li>Penutup flap dengan buckle untuk keamanan ganda.</li>
                                <li>Sternum system untuk kenyamanan penggunaan.</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </section>`;

const isiProduk2 = `<section id="2" class="">
                <div class="left">
                    <img src="img/2.jpg" alt="">
                    <p>PRODIGERS NEW YORK</p>
                    <h2>IDR 549.000</h2>
                </div>
                <div class="right">
                    <h2>Product Info</h2>
                    <div class="scroll">
                        <p>Detail:</p>
                        <table width="100%">
                            <tr>
                                <td width="30%">Size</td>
                                <td width="70%">: 22L</td>
                            </tr>
                            <tr>
                                <td>Warna</td>
                                <td>: Abu-abu</td>
                            </tr>
                            <tr>
                                <td>Material</td>
                                <td>: Poly Cordura</td>
                            </tr>
                            <tr>
                                <td>Dimensi</td>
                                <td>: Panjang 30 x Lebar 16 x Tinggi 47</td>
                            </tr>
                        </table>
                        <br>
                        <p>
                            Bagian kompartemen utama dalam tas dipergunakan untuk meletakkan laptop yang berukuran 14 inch atau tablet yang berukuran 10 inch. Bagian kantong depan memiliki tempat untuk berbagai macam barang elektronik yang mendukung seperti Smartphone. Charger. USB Flash Drives. Keys. Dokumen berukuran kecil. dan lain-lain. Memiliki kantong yang berukuran kecil di bagian depan untuk kacamata atau power bank. Memiliki 2 kantong yang dikhususkan untuk membawa botol minuman disisi kiri dan kanannya untuk mempermudah akses pengambilan. Memiliki pengatur backstrap di bagian dada.
                        </p>
                    </div>
                </div>
            </section>`;

const isiProduk3 = `<section id="3" class="">
                <div class="left">
                    <img src="img/3.jpg" alt="">
                    <p>PRODIGERS SEVERN 1.0</p>
                    <h4><del>IDR 399.000</del> <span style="background-color: red; border-radius: 50px;color: white; padding: 0 10px">Sale 43%</span></h4>
                    <h2>IDR 229.000</h2>
                </div>
                <div class="right">
                    <h2>Product Info</h2>
                    <div class="scroll">
                        <p>Detail:</p>
                        <table width="100%">
                            <tr>
                                <td>Size</td>
                                <td>: 29L</td>
                            </tr>
                            <tr>
                                <td>Warna</td>
                                <td>: Black</td>
                            </tr>
                            <tr>
                                <td>Material</td>
                                <td>: Polyester</td>
                            </tr>
                            <tr>
                                <td>Dimensi</td>
                                <td>: 45 x 29 x 13</td>
                            </tr>
                        </table>
                        <br>
                        <ol>
                            <li>Kompartemen utama dengan kantong laptop berukuran 14 inch. webbing penyangga dokumen dan organizer.</li>
                            <li>Kantong depan.</li>
                            <li>Dua saku samping. muat menyimpan botol minum.</li>
                            <li>Desain top loaded dengan pengunci tali serut.</li>
                            <li>Aksen flap dengan pengunci buckle untuk keamanan ganda.</li>
                            <li>Aksen reflective dengan buckle.</li>
                            <li>Tersedia dalam dua pilihan warna.</li>
                        </ol>
                    </div>
                </div>
            </section>`;

const isiProduk4 = `<section id="4" class="">
                <div class="left">
                    <img src="img/4.jpg" alt="">
                    <p>PRODIGERS PASSENGER</p>
                    <h2>IDR 879.000</h2>
                </div>
                <div class="right">
                    <h2>Product Info</h2>
                    <div class="scroll">
                        <p>Detail:</p>
                        <table width="100%">
                            <tr>
                                <td>Size</td>
                                <td>: 40L</td>
                            </tr>
                            <tr>
                                <td>Warna</td>
                                <td>: Black</td>
                            </tr>
                            <tr>
                                <td>Material</td>
                                <td>: Polyester</td>
                            </tr>
                            <tr>
                                <td>Dimensi</td>
                                <td>: 57 x 32 x 22</td>
                            </tr>
                        </table>
                        <br>
                        <ol>
                            <li> Kompartemen utama dengan buckle pakaian dan organizer.</li>
                            <li>Kantong depan.</li>
                            <li>Kompartemen roll top dengan pengunci buckle. untuk kemudahan akses pada barang yang sering diambil.</li>
                            <li>Kantong di bagian depan.</li>
                            <li>Dua saku samping.</li>
                            <li>Buckle samping untuk keamanan ganda</li>
                            <li>Handle samping untuk penggunaan jinjing.</li>
                            <li>Lubang untuk gembok.</li>
                            <li>Aksen webbing. dapat diselipkan ke troli.</li>
                            <li>Sternum system untuk kenyamanan penggunan.</li>
                            <li>Tali pinggang untuk kenyamanan saat membawa banyak barang.</li>
                            <li>Aksen reflective dengan buckle.</li>
                            <li>Aksen webbing.</li>
                            <li>Detail logo berbahan woven.</li>
                            <li>Tersedia dalam dua pilihan warna.</li>
                        </ol>
                    </div>
                </div>
            </section>`;

const isiProduk5 = `<section id="5" class="">
                <div class="left">
                    <img src="img/5.jpg" alt="">
                    <p>PRODIGER EMBARK</p>
                    <h2>IDR 849.000</h2>
                </div>
                <div class="right">
                    <h2>Product Info</h2>
                    <div class="scroll">
                        <p>Bawa tas Embark untuk memulai perjalanan Anda dengan ringkas. Tas ini memiliki kompartemen utama yang luas untuk menyimpan barang bawaan dengan dilengkapi buckle untuk pakaian dan kantong jala untuk memisahkan barang-barang penting. ditutup dengan aksen buckle untuk tampilan kokoh dan keamanan ganda. Embark juga memiliki beragam kantong tersedia. mulai dari kompartemen belakang yang muat menyimpan laptop berukuran 15 inch. dua kantong tambahan di bagian depan dan atas tas. dua kantong samping yang muat menyimpan botol minum. serta kantong belakang tersembunyi untuk barang berukuran kecil seperti paspor.</p>
                        <br>
                        <p>Fitur:
                            <ul>
                                <li>Kompartemen utama dengan buckle untuk pakaian dan kantong jala.</li>
                                <li>Kompartemen belakang. muat menyimpan laptop beurkuran 15 inch.</li>
                                <li>Kantong tambahan di bagian depan.</li>
                                <li>Kantong tambahan di bagian atas.</li>
                                <li>Dua kantong samping. muat menyimpan botol minum.</li>
                                <li>Kantong belakang tersembunyi untuk barang berukuran kecil seperti paspor.</li>
                                <li>Aksen buckle untuk tampilan kokoh dan keamanan ganda.</li>
                                <li>Handle untuk penggunaan jinjing.</li>
                                <li>Sternum system untuk kenyamanan penggunaan.</li>
                                <li>Aksen webbing. dapat diselipkan ke troli.</li>
                                <li>Grip untuk penyimpanan gantung.</li>
                                <li>Aksen reflective dengan buckle.</li>
                                <li>Detail logo berbahan karet.</li>
                                <li>Tersedia dalam dua pilihan warna.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>`;

tombol1.onclick = () => {
    produk1.classList.add('active')
    isiKonten.innerHTML = isiProduk1;
    btn.forEach(data => {
        if (data !== produk1) {
            data.classList.remove('active');
        }
    });
}

tombol2.onclick = () => {
    produk2.classList.add('active')
    isiKonten.innerHTML = isiProduk2;
    btn.forEach(data => {
        if (data != produk2) {
            data.classList.remove('active');
        }
    });
}

tombol3.onclick = () => {
    produk3.classList.add('active')
    isiKonten.innerHTML = isiProduk3;
    btn.forEach(data => {
        if (data != produk3) {
            data.classList.remove('active');
        }
    });
}

tombol4.onclick = () => {
    produk4.classList.add('active')
    isiKonten.innerHTML = isiProduk4;
    btn.forEach(data => {
        if (data != produk4) {
            data.classList.remove('active');
        }
    });
}

tombol5.onclick = () => {
    produk5.classList.add('active')
    isiKonten.innerHTML = isiProduk5;
    btn.forEach(data => {
        if (data != produk5) {
            data.classList.remove('active');
        }
    });
}
