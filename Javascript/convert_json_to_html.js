function convert(){
    var data = fetch("./Members_info.json");
    data = JSON.parse(data)

    alert(data[0].name)
}