function Clicou() {
    var nomei = document.querySelector('#nomei').value
    var matriculai = document.querySelector('#matriculai').value
    var scurso = document.querySelector('#Scurso').value
    var speriodo = document.querySelector("#Speriodo").value
    var emaili = document.querySelector("#emaili").value
    var datai = document.querySelector("#datai").value
    var ssexo = document.querySelector("#Ssexo").value
    var scep = document.querySelector("#cep").value
    var scidade = document.querySelector("#scidade").value
    var sbairro = document.querySelector("#Sbairro").value
    var ruai = document.querySelector("#ruai").value
    var numi = document.querySelector("#numi").value
    var compi = document.querySelector("#compi").value
    console.log(nomei)
    //backend fetch{}
}

 function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
    }

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}


function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}

function mascara(i,t){

    var v = i.value;

    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }

    if(t == "cpf"){
       i.setAttribute("maxlength", "14");
       if (v.length == 3 || v.length == 7) i.value += ".";
       if (v.length == 11) i.value += "-";
    }
 }
