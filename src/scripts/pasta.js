document.addEventListener("DOMContentLoaded", () => {
    var request = new XMLHttpRequest();
    request.open("GET", "./src/utils/pasta.json", false);
    request.send(null);

    var pasta_list = JSON.parse(request.responseText);
    var pasta_list_dom = document.getElementById("pasta-list");

    for (let index = 0; index < pasta_list.length; index++) {
        var pasta_option_dom = document.createElement("option");
        pasta_option_dom.text = pasta_list[index]["nome_marca"] + ", " + pasta_list[index]["nome_pasta"];
        pasta_option_dom.value = pasta_list[index]["cottura_min"];
        pasta_list_dom.add(pasta_option_dom);
    }
});
