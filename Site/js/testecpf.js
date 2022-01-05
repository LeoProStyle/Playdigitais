function FG_FormatarCPF(xElement) {

	var strValor = pegaObj(xElement).value;
    var strTemp;

    strTemp = strValor.replace(".", "");
    strTemp = strTemp.replace(".", "");
    strTemp = strTemp.replace(".", "");
    strTemp = strTemp.replace("-", "");
    strTemp = strTemp.replace("-", "");
    strValor = strTemp

    if (strValor.length > 9) {
        strValor = strValor.substr(0, 3) + '.' + strValor.substr(3, 3) + '.' + strValor.substr(6, 3) + '-' + strValor.substr(9, 2);
    }
    else if (strValor.length > 6) {
        strValor = strValor.substr(0, 3) + '.' + strValor.substr(3, 3) + '.' + strValor.substr(6, 3);
    }
    else if (strValor.length > 3) {
        strValor = strValor.substr(0, 3) + '.' + strValor.substr(3, 3);
    }

   pegaObj(xElement).value = strValor;
}


 function faz()
{
  var cpf = document.getElementById('nrCPF').value;
  
  if(valida_cpf(cpf)){
  return valida(formCidadao)}
  else
  {
document.getElementById('nrCPF').focus();
alert("CPF Invalido!")
return false
}

	 // 
}
 function RetiraCaracteresInvalidos(strValue)
 {
	strValue = strValue.replace(".", "");
	strValue = strValue.replace(".", "");
	strValue = strValue.replace("-", "");
	strValue = strValue.replace("/", "");
	strValue = strValue.replace("/", "");
	return strValue
	 
	 }
 function valida_cpf(strCPF)
 {
    var Soma;
    var Resto;
    Soma = 0;   
    strCPF  = RetiraCaracteresInvalidos(strCPF);
    if (strCPF == "00000000000" || strCPF == "11111111111"
|| strCPF == "22222222222" || strCPF == "33333333333"
|| strCPF == "44444444444" || strCPF == "55555555555"
|| strCPF == "66666666666" || strCPF == "77777777777"
|| strCPF == "88888888888" || strCPF == "99999999999")
	return false;
    for (i=1; i<=9; i++)
	Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) )
	return false;
	Soma = 0;
    for (i = 1; i <= 10; i++)
       Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
        return false;
    return true;
}

function RemoveMask(xElement) {
    var strValue = pegaObj(xElement).value;

	strValue = strValue.replace(".", "");
	strValue = strValue.replace(".", "");
	strValue = strValue.replace("-", "");
	strValue = strValue.replace("/", "");
	strValue = strValue.replace("/", "");

    pegaObj(xElement).value = strValue;
}

// Recupera uma referência ao objeto com o id especificado
// Funciona primariamente com o DOM, mas também aceita document.all
function pegaObj( id ) {
	if ( typeof(document.getElementById) != 'undefined' )
		return document.getElementById( id );
	else if ( document.all ) {
		return document.all( id );
	}
}



/*************************************************
	Função que permitir digitar numeros 
**************************************************/
function EntradaNumerico(evt) {

    var key_code = evt.keyCode  ? evt.keyCode  :
                   evt.charCode ? evt.charCode :
                   evt.which    ? evt.which    : void 0;

                   
        // Habilita teclas <DEL>, <TAB>, <ENTER>, <ESC> e <BACKSPACE>
        if (key_code == 8  ||  key_code == 9  ||  key_code == 13  ||  key_code == 27  ||  key_code == 46) {
            return true;
        }
        // Habilita teclas <HOME>, <END>, mais as quatros setas de navegação (cima, baixo, direta, esquerda)
        else if ((key_code >= 35)  &&  (key_code <= 40)) {
            return true
        }
        // Habilita números de 0 a 9
        // 48 a 57 são os códigos para números
        else if ((key_code >= 48)  &&  (key_code <= 57)) {
            return true
        }
        return false;
}
