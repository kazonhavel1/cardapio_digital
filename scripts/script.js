document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const header = document.getElementById("header");

    window.addEventListener("scroll", function() {
        const headerRect = header.getBoundingClientRect();
        if (headerRect.bottom < 0) {
            navbar.classList.remove("hidden");
        } else {
            navbar.classList.add("hidden");
        }
    });
});

function mostrarAlerta() {
    Swal.fire({
        title: 'Ótima Escolha!',
        text: 'Chame uma das Garçonetes e faça seu pedido.',
        icon: 'info',
        confirmButtonText: 'OK',
        timer: 5000,
        timerProgressBar: true,
        backdrop: 
                'rgba(141,73,37,0.2)',
        confirmButtonColor: '#78350f',
    });
}
