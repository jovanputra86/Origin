// ======================================
// FORM PEMESANAN TOKO PRIMA 1990
// ======================================

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Mengambil data formulir
        const nama = document.getElementById("nama").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const kategori = document.getElementById("kategori").value;
        const produk = document.getElementById("produk").value.trim();
        const jumlah = document.getElementById("jumlah").value;
        const alamat = document.getElementById("alamat").value.trim();

        // Validasi nomor WhatsApp
        if (!/^[0-9+\-\s]{10,16}$/.test(whatsapp)) {
            alert("Mohon masukkan nomor WhatsApp yang valid.");
            return;
        }

        // Membuat pesan WhatsApp
        const pesan =
`Halo TOKO PRIMA 1990, saya ingin melakukan pemesanan.

DATA PELANGGAN
Nama: ${nama}
Nomor WhatsApp: ${whatsapp}

DETAIL PESANAN
Kategori: ${kategori}
Produk: ${produk}
Jumlah: ${jumlah}

Alamat Pengiriman:
${alamat}

Terima kasih.`;

        // Nomor WhatsApp toko
        const nomorToko = "6285645141730";

        // Membuat link WhatsApp
        const url = "https://wa.me/" + nomorToko +
                    "?text=" + encodeURIComponent(pesan);

        // Membuka WhatsApp
        window.open(url, "_blank");

    });

}
