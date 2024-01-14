// Função para verificar operações comuns para um tipo de elemento
function verificarOperacoesComuns(tipoElemento) {
    // Obtém todos os elementos do tipo especificado
    var elementos = document.getElementsByTagName(tipoElemento);

    // Verifica se há elementos do tipo especificado na página
    if (elementos.length === 0) {
        console.log(`Nenhum elemento do tipo ${tipoElemento} encontrado.`);
        return;
    }

    // Obtém as propriedades e métodos do primeiro elemento
    var propriedadesEMetodos = Object.getOwnPropertyNames(elementos[0]);

    // Itera sobre as propriedades e métodos do primeiro elemento
    for (var i = 0; i < propriedadesEMetodos.length; i++) {
        var propriedadeOuMetodo = propriedadesEMetodos[i];

        // Verifica se a propriedade ou método está presente em todos os elementos
        var todasAsPropriedades = Array.from(elementos).every(function (elemento) {
            return propriedadeOuMetodo in elemento;
        });

        // Se a propriedade ou método estiver presente em todos os elementos, exibe no console
        if (todasAsPropriedades) {
            console.log(`Operação comum encontrada: ${propriedadeOuMetodo}`);
        }
    }
}

// Exemplo de uso: verificar operações comuns para elementos de tipo "button"
verificarOperacoesComuns('button');
