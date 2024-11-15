 // Função para abrir o modal com a imagem clicada
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    
    // Exibe o modal
    modal.style.display = "block";
    
    // Define o conteúdo da imagem dentro do modal
    modalImage.src = imageSrc;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    
    // Esconde o modal
    modal.style.display = "none";
}

// Adicionando evento para fechar o modal quando clicar fora da imagem
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    
    if (event.target === modal) {
        closeModal();
    }
};
