const modal = document.getElementById("langganan-modal");
const openBtn = document.getElementById("langganan-btn");
const closeBtn = document.getElementById("close-modal");
const form = document.getElementById("langganan-form");

// Tampilkan modal
openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

// Tutup modal
closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Tutup jika klik di luar area modal
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
});

// Submit form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const wa = document.getElementById("wa").value;
    const paket = document.getElementById("paket").value;

    const userId = localStorage.getItem("userId") || `USR-${Date.now()}`;
    localStorage.setItem("userId", userId);
    const orderId = `ORD-${Math.floor(Math.random() * 100000)}`;

    const pesan = `Halo, saya ${nama} ingin berlangganan ${paket}.\nAlamat: ${alamat}\nNomor WA: ${wa}\nUser ID: ${userId}\nOrder ID: ${orderId}\n\nMohon konfirmasi pembayaran dan jadwal penjemputan.`;

    // Ganti nomor WA petugas di sini 👇
    const petugasWA = "6285882805474";
    window.open(`https://wa.me/${petugasWA}?text=${encodeURIComponent(pesan)}`, "_blank");

    modal.classList.add("hidden");
    alert("Data langganan dikirim ke petugas. Tunggu konfirmasi pembayaran ya!");
});
