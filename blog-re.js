document.querySelectorAll('.slider').forEach(slider => {
    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');
    const sliderImages = slider.querySelector('.slider-images');
    const images = sliderImages.querySelectorAll('.slider-item');
    let index = 0;

    // Função para alterar o slide
    function changeSlide() {
        const totalSlides = sliderImages.children.length;
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        sliderImages.style.transform = `translateX(-${index * 100}%)`;
    }

    // Event listeners para os botões de navegação
    prevButton.addEventListener('click', () => {
        index--;
        changeSlide();
    });

    nextButton.addEventListener('click', () => {
        index++;
        changeSlide();
    });

    // Função para exibir a imagem em tela cheia
    function openFullscreenImage(src) {
        const modal = document.getElementById('fullscreenModal');
        const fullscreenImage = document.getElementById('fullscreenImage');
        modal.style.display = 'flex';
        fullscreenImage.src = src;
    }

    // Event listeners para abrir a imagem em tela cheia
    images.forEach(image => {
        image.addEventListener('click', () => {
            openFullscreenImage(image.src);
        });
    });

    // Fechar o modal ao clicar no botão de fechar
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('fullscreenModal').style.display = 'none';
    });

    // Fechar o modal ao clicar fora da imagem
    document.getElementById('fullscreenModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('fullscreenModal')) {
            document.getElementById('fullscreenModal').style.display = 'none';
        }
    });
});
