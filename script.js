function buscarDescricao() {
  var codigo = document.getElementById("codigo").value;
  var url = "https://raw.githubusercontent.com/Caicossauro/form3/main/ASD.json";

  axios.get(url)
    .then(function(response) {
      var dados = response.data;
      var descricaoEncontrada = "";

      for (var i = 0; i < dados.length; i++) {
        if (dados[i]["Código"] == codigo) {
          descricaoEncontrada = dados[i]["Descrição"];
          break;
        }
      }

      document.getElementById("descricao").textContent = "Descrição: " + descricaoEncontrada;
      document.getElementById("descricao-hidden").value = descricaoEncontrada; // Atualiza o valor do campo hidden
    })
    .catch(function(error) {
      console.log(error);
    });
}

function enviarFormulario() {
  var nome = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("message").value;
  var codigo = document.getElementById("codigo").value;
  var descricao = document.getElementById("descricao-hidden").value; // Obtém o valor do campo hidden

  var data = {
    name: nome,
    email: email,
    message: mensagem,
    codigo: codigo,
    descricao: descricao
  };

  axios.post("https://api.staticforms.xyz/submit", data)
    .then(function(response) {
      if (response.data.success) {
        window.location.href = "obrigado.html";
      } else {
        alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
      }
    })
    .catch(function(error) {
      alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
    });
}
