const form = document.getElementById('form-numbers');

function validaNumero(numeroB, numeroA) {
   return numeroB>numeroA
}

form.addEventListener('submit', function(e) {
   e.preventDefault();

   const campoA = document.getElementById('campoA')
   const campoB = document.getElementById('campoB')
   const msgSucesso = `campo B: ${campoB.value} é <b>maior</b> que campo A: ${campoA.value}`
   const msgError = `campo B: ${campoB.value} é <b>menor</b> que campo A: ${campoA.value}`

   const resultado = validaNumero(Number(campoB.value), Number(campoA.value))
   console.log(resultado);

   const containerMsgSuccess = document.querySelector('.success-msg')
   const containerMsgError = document.querySelector('.error-msg')

   if (!resultado) {
      containerMsgError.innerHTML = msgError;
      containerMsgError.style.display = 'block';
      containerMsgSuccess.style.display = 'none';
      campoA.value = '';
      campoB.value = '';
   }
   else {
      containerMsgSuccess.innerHTML = msgSucesso;
      containerMsgSuccess.style.display = 'block';
      containerMsgError.style.display = 'none';
      campoA.value = '';
      campoB.value = '';
   }
})


