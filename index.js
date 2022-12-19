
function PopulaTabela () {
    if (Array.isArray(dados)){
        
        localStorage.setItem("__dados__", JSON.stringify(dados))
        
        $("#tblDados tbody").html("")
        
        dados.forEach(function (item) {
            //template string 
            $("#tblDados tbody").append(`<tr>
            <td>${item.ID}</td>
            <td>${item.Nome}</td>
            <td>${item.Sobrenome}</td>
            <td>${item.DtNascimento}</td>
            <td>${item.Formação}</td>
            <td><button type="button" class="btn btn-primary"></td>
            <td><button type="button" class="btn btn-primary"></td>
            </tr>`)
        })
    }
}

$(function () {
    //executa ao carregar da tela
    if (JSON.parse(localStorage.getItem("__dados__"))) {
        dados = JSON.parse(localStorage.getItem("__dados__"))
    } else {
        dados = []
    }
    
    if (dados) {
        PopulaTabela()
    }

    $("#btnSalvar").click(function() {
        //EVENTO CLICK DO BOTAO SALVAR 
        
        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let DtNascimento = new Date($("#txtDtNascimento").val())
        let Formação = $("#txtFormação").val()

        let registro = {}

        registro.Nome = Nome
        registro.Sobrenome = Sobrenome
        registro.DtNascimento = DtNascimento
        registro.Formação = Formação
         
        registro.ID = dados.length + 1
        
        console.log(registro)
        dados.push(registro)

        alert("Registro salvo com sucesso")
        $("#modalRegistro").modal("hide")

        //LIMPEZA DOS CAMPOS 
        $("#txtNome").val("")
        $("#txtSobrenome").val("")
        $("#txtDtNascimento").val("")
        $("#txtForamção").val("")

        PopulaTabela()

    }) 
})