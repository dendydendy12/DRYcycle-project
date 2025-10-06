   window.addEventListener("load", function() {
        const preloader = document.getElementById("preloader");
        preloader.classList.add("fade-out");
        
        // setelah animasi selesai, bisa sekalian hapus dari DOM biar ringan
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600); // sesuai transition 0.5s
    });

       window.addEventListener("load1", function() {
        const preloader = document.getElementById("preloader1");
        preloader.classList.add("fade-out");
        
        // setelah animasi selesai, bisa sekalian hapus dari DOM biar ringan
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600); // sesuai transition 0.5s
    });