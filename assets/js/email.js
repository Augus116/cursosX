document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Envia o formulário usando o EmailJS
    emailjs.sendForm('service_cn6weou', 'template_2ber9s3', this)
        .then(function (response) {
            // Se o envio for bem-sucedido, exibe a caixa de sucesso
            document.getElementById('successMessage').style.display = 'block';
            // Esconde a caixa de sucesso após 5 segundos
            setTimeout(function () {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
        }, function (error) {
            // Caso o envio falhe, exibe um alerta de erro
            alert('Erro ao enviar o email: ' + JSON.stringify(error));
        });
});
