function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function extract_attribute(data,attr){
    /*
    Returns the array of a particular attribute of a JSON array
    */
    res = []
    for(var i = 0;i<data.length;i++){
        res.push(data[i][attr]);
    }
    return res;
}

function filter_data(data,fn){
    /*
    Returns the array of JSON objects that passes through a particular filter
    */
    res = []
    for(var i =0;i<data.length;i++){
        if(fn(data[i])){
            res.push(data[i]);
        }
    }
    return res;
}

function count_categories(data,attr){
    var counts = {};
    for(var i = 0; i< data.length; i++) {
        var elem = data[i][attr];
        counts[elem] = counts[elem] ? counts[elem]+1 : 1;
    }
    var res = [];
    for(var key in counts){
        res.push({"label":key,"value":counts[key]});
    }
    return res;
}


function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}