array_nome_estudante = [];

function submit(){
    var name1 = document.getElementById("nome_do_estudante_1").value;
    var name2 = document.getElementById("nome_do_estudante_2").value;
    var name3 = document.getElementById("nome_do_estudante_3").value;
    var name4 = document.getElementById("nome_do_estudante_4").value;

    array_nome_estudante.push(name1);
    array_nome_estudante.push(name2);
    array_nome_estudante.push(name3);
    array_nome_estudante.push(name4);

    console.log(array_nome_estudante);

    document.getElementById("displayName").innerHTML = array_nome_estudante;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting(){
    array_nome_estudante.sort();
    console.log(array_nome_estudante);
    document.getElementById("displayName").innerHTML = array_nome_estudante;
}