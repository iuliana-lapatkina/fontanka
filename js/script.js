var json_table = [];



for (let element of tr.children) {
    var list = tr.children;
}






var  road_map = [];

for (let i = 1; i<100; i++) {
    let name1 = tr.children[1];

    let number1 = tr.children[0];

    let towns1 = tr.children[4];

    const road = new road()
    road.put("name", name1)
    road.put("number", number1)
    road.put("towns", towns1)
    
    road_map.append(road)

}

var json_table = JSON.stringify(road_map);
