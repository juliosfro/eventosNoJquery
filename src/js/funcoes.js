$(document).ready(function () {

    $("#btn-limpar").click(() => {
        limpar();
    });

    $("#dv1").click(() => {
        divClicada();
    });

    $('#cmb-opcoes').change(function () {
        let opcaoSelecionada = $('#cmb-opcoes option:selected').text();
        /* Para pegar o value do item selecionado.
           let opcaoSelecionada = $('#cmb-opcoes option:selected').val(); */

        switch (opcaoSelecionada.trim()) {
            case "Selecione":
                break;
            case 'Somar':
                somar();
                break;
            case 'Subtrair':
                subtrair();
                break;
            case 'Multiplicar':
                multiplicar();
                break;
            case 'Dividir':
                dividir();
                break;
            case 'Concatenar':
                concatenar();
                break;
            default:
                limpar();
        }
    });

    function concatenar() {
        let valor1 = $('#campo1').val();
        let valor2 = $('#campo2').val();
        valor1.trim() || valor2.trim() !== '' ? $('#resultado').val(`${valor1.trim()} ${valor2.trim()}`) : valor1;
    }

    function somar() {
        let valor1 = $("#campo1").val();
        let valor2 = $('#campo2').val();
        let resultado = valor1.trim() && valor2.trim() !== '' ? parseFloat(valor1) + parseFloat(valor2) : valor1;
        !isNaN(resultado) ? $('#resultado').val(resultado.toFixed(2)) : valor1;
    }

    function subtrair() {
        let valor1 = $('#campo1').val();
        let valor2 = $('#campo2').val();
        let resultado = valor1.trim() && valor2.trim() !== '' ? parseFloat(valor1) - parseFloat(valor2) : valor1;
        !isNaN(resultado) ? $('#resultado').val(resultado.toFixed(2)) : valor1;
    }

    function multiplicar() {
        let valor1 = $('#campo1').val();
        let valor2 = $('#campo2').val();
        let resultado = valor1.trim() && valor2.trim() !== '' ? parseFloat(valor1) * parseFloat(valor2) : valor1;
        !isNaN(resultado) ? $('#resultado').val(resultado.toFixed(2)) : valor1;
    }

    function dividir() {
        let valor1 = $('#campo1').val();
        let valor2 = $('#campo2').val();
        let resultado = valor1.trim() && valor2.trim() !== '' ? parseFloat(valor1) / parseFloat(valor2) : valor1;
        !isNaN(resultado) ? $('#resultado').val(resultado.toFixed(2)) : valor1;
    }

    function divClicada() {
        alert('Click na div...');
    }

    function limpar() {
        $("#campo1").val('');
        $('#campo2').val('');
        $('#resultado').val('');
        $('#cmb-opcoes').prop('selectedIndex', 0);
        $("#campo1").focus();
    }
});