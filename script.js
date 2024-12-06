document.getElementById('formulario').addEventListener('submit', (event)=>{
    event.preventDefault();

    let cpf = document.getElementById("cpf").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let mensagemCpf = document.getElementById("mensagemCpf");
    let mensagemSenha = document.getElementById("mensagemSenha");

    let validar = true;

    if(cpf === ''){
        mensagemCpf.innerHTML = "Preencha o seu CPF.";
        mensagemCpf.className = "italic";
        validar = false;
    }else{
        mensagemCpf.innerHTML = "";
    }
    if(senha === ''){
        mensagemSenha.innerHTML = 'Preencha a sua senha.';
        mensagemSenha.className = 'italic';
        validar = false;
    }else{
        mensagemSenha.innerHTML = '';
    }
    if(validar){

        localStorage.setItem('cpf',cpf);    
        localStorage.setItem('senha',senha);    
        document.getElementById('formulario').reset();
        alert("Formulário preenchido com sucesso!!!");
        
    }

    document.getElementById("cpf").addEventListener('input', ()=>{
        let mensagemCpf = document.getElementById("mensagemCpf");
        mensagemCpf.innerHTML = '';
    })
    document.getElementById("senha").addEventListener('input', ()=>{
        let mensagemCpf = document.getElementById("mensagemSenha");
        mensagemCpf.innerHTML = '';
    })
})

document.getElementById('cadastrar').addEventListener('click', function(){
    document.getElementById('formulario').style.display = "none";
    document.getElementById('formulario2').style.display = "block";

    window.getComputedStyle(formulario2).opacity;

    formulario2.style.opacity = 1;
})

document.getElementById('formulario2').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let nome = document.getElementById('nome').value.trim();
    let cpf2 = document.getElementById('cpf2').value.trim();
    let senha2 = document.getElementById('senha2').value.trim();
    let confirmarSenha = document.getElementById('confirmarSenha').value.trim();
    
    let mensagemNome = document.getElementById('mensagemNome');
    let mensagemCpf2 = document.getElementById('mensagemCpf2');
    let mensagemSenha2 = document.getElementById('mensagemSenha2');
    let mensagemConfirmarSenha = document.getElementById('mensagemConfirmarSenha');
  
    let validar2 = true;
  
    if (nome === '') {
      mensagemNome.innerHTML = "Preencha o seu Nome.";
      mensagemNome.className = "italic";
      validar2 = false;
    } else {
      mensagemNome.innerHTML = "";
    }
  
    if (cpf2 === '') {
      mensagemCpf2.innerHTML = 'Preencha o seu CPF.';
      mensagemCpf2.className = 'italic';
      validar2 = false;
    } else {
      mensagemCpf2.innerHTML = '';
    }
  
    if (senha2 === '') {
      mensagemSenha2.innerHTML = 'Preencha a sua senha.';
      mensagemSenha2.className = 'italic';
      validar2 = false;
    } else {
      mensagemSenha2.innerHTML = '';
    }
  
    if (confirmarSenha === '') {
      mensagemConfirmarSenha.innerHTML = 'Confirme a sua senha.';
      mensagemConfirmarSenha.className = 'italic';
      validar2 = false;
    } else {
      mensagemConfirmarSenha.innerHTML = '';
    }
  
    if (senha2 !== '' && confirmarSenha !== '' && confirmarSenha !== senha2) {
      mensagemSenha2.innerHTML = 'Senhas não correspondentes.';
      mensagemConfirmarSenha.innerHTML = 'Senhas não correspondentes.';
      validar2 = false;
    } else if (senha2 === confirmarSenha) {
      mensagemSenha2.innerHTML = '';
      mensagemConfirmarSenha.innerHTML = '';
    }
  
    document.getElementById("nome").addEventListener('input', function() {
      mensagemNome.innerHTML = '';
    });
  
    document.getElementById("cpf2").addEventListener('input', function() {
      mensagemCpf2.innerHTML = '';
    });
  
    document.getElementById("senha2").addEventListener('input', function() {
      mensagemSenha2.innerHTML = '';
    });
  
    document.getElementById("confirmarSenha").addEventListener('input', function() {
      mensagemConfirmarSenha.innerHTML = '';
    });
  
    if (validar2) {
      localStorage.setItem('nome', nome);
      localStorage.setItem('cpf2', cpf2);
      localStorage.setItem('senha2', senha2);
      document.getElementById('formulario2').reset();
      alert("Cadastro realizado com sucesso!!!");
      
    }

    if(validar2 = true){
        document.getElementById('confirmar').addEventListener('click', function(){
        document.getElementById('formulario2').style.display = "none";
        document.getElementById('formulario').style.display = "block";
          
              
          });
    }
    
  });

 
  