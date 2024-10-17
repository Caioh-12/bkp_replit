document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name && email) {
        alert('Obrigado pela sua mensagem, ' + name + '! Nós entraremos em contato em breve.');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});