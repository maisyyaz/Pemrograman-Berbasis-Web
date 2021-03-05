const tSejarah = document.getElementById("tombol-sejarah");
const tGeografi = document.getElementById("tombol-geografi");
const tPemerintahan = document.getElementById("tombol-pemerintahan");
const tPariwisata = document.getElementById("tombol-pariwisata");

const navigasi = document.getElementById("navigasi");
const sejarah = document.getElementById("sejarah");
const geografi = document.getElementById("geografi");
const pemerintahan = document.getElementById("pemerintahan");
const pariwisata = document.getElementById("pariwisata");

const batas = navigasi.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset > batas) {
        navigasi.classList.add("tetap");
    } else {
        navigasi.classList.remove("tetap");
    }
}

tSejarah.onclick = () => {
    if (sejarah.classList.contains('hidden')) {
        sejarah.classList.remove('hidden');
    }
    geografi.classList.add('hidden');
    pemerintahan.classList.add('hidden');
    pariwisata.classList.add('hidden');
}

tGeografi.onclick = () => {
    if (geografi.classList.contains('hidden')) {
        geografi.classList.remove('hidden');
    }
    sejarah.classList.add('hidden');
    pemerintahan.classList.add('hidden');
    pariwisata.classList.add('hidden');
}

tPemerintahan.onclick = () => {
    if (pemerintahan.classList.contains('hidden')) {
        pemerintahan.classList.remove('hidden');
    }
    sejarah.classList.add('hidden');
    geografi.classList.add('hidden');
    pariwisata.classList.add('hidden');
}

tPariwisata.onclick = () => {
    if (pariwisata.classList.contains('hidden')) {
        pariwisata.classList.remove('hidden');
    }
    sejarah.classList.add('hidden');
    geografi.classList.add('hidden');
    pemerintahan.classList.add('hidden');
}