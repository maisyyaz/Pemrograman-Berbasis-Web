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

// console.log(produk1.classList.contains('active'))
const btn = [produk1,produk2,produk3,produk4,produk5];

tombol1.onclick = () => {
    produk1.classList.add('active')
    btn.forEach(data => {
        if (data != produk1) {
            data.classList.remove('active');
        }
    });
}

tombol2.onclick = () => {
    produk2.classList.add('active')
    btn.forEach(data => {
        if (data != produk2) {
            data.classList.remove('active');
        }
    });
}

tombol3.onclick = () => {
    produk3.classList.add('active')
    btn.forEach(data => {
        if (data != produk3) {
            data.classList.remove('active');
        }
    });
}

tombol4.onclick = () => {
    produk4.classList.add('active')
    btn.forEach(data => {
        if (data != produk4) {
            data.classList.remove('active');
        }
    });
}

tombol5.onclick = () => {
    produk5.classList.add('active')
    btn.forEach(data => {
        if (data != produk5) {
            data.classList.remove('active');
        }
    });
}
