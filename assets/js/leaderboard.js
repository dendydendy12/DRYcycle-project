// redeem.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("redeem-form");
    const totalPoinEl = document.getElementById("total-poin");
    const progressBar = document.getElementById("progress-bar");

    const popup = document.getElementById("redeem-popup");
    const popupBox = popup.querySelector("div.relative");
    const popupMessage = document.getElementById("popup-message");
    const popupClose = document.getElementById("popup-close");

    let totalPoin = 2500;

    const validCodes = {
        "DRY500": 500,
        "DRY1000": 1000,
        "DRY200": 200
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const code = document.getElementById("redeem-code").value.trim().toUpperCase();

        if (validCodes[code]) {
            const poin = validCodes[code];
            totalPoin += poin;
            totalPoinEl.textContent = totalPoin.toLocaleString("id-ID");

            const progress = Math.min(100, (totalPoin % 5000) / 50);
            progressBar.style.width = `${progress}%`;

            popupMessage.textContent = `Kamu mendapatkan ${poin} poin dari kode ${code}.`;
            showPopup();

            delete validCodes[code];
            form.reset();
        } else {
            popupMessage.textContent = "Kode tidak valid atau sudah digunakan.";
            showPopup(true);
        }
    });

    function showPopup(isError = false) {
        popup.classList.remove("hidden");
        popupBox.classList.remove("opacity-0", "scale-95");
        popupBox.classList.add("opacity-100", "scale-100");

        const title = popupBox.querySelector("h2");
        if (isError) {
            title.textContent = "Gagal Klaim!";
            title.classList.remove("text-teal-700");
            title.classList.add("text-red-600");
        } else {
            title.textContent = "Kode Berhasil!";
            title.classList.remove("text-red-600");
            title.classList.add("text-teal-700");
        }
    }

    popupClose.addEventListener("click", () => {
        popupBox.classList.remove("opacity-100", "scale-100");
        popupBox.classList.add("opacity-0", "scale-95");
        setTimeout(() => popup.classList.add("hidden"), 200);
    });

    // Tutup popup saat klik di luar box
    popup.addEventListener("click", (e) => {
        if (e.target === popup) popupClose.click();
    });
});
