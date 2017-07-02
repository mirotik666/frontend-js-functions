//1. `min`

function min(array) {
    var minimal;
    var index;

    if (array === undefined) {
        return;
    } else {
        for (index = array.length; index >= 0; index -= 1) {
            if (typeof(array[index]) == 'number') {
                if (minimal === undefined) {
                    minimal = array[index];
                    continue;
                }
                if (minimal >= array[index]) {
                    minimal = array[index];
                }
            }
        }
        return minimal;
    }
}

//2. `max`
function max(array) {
    var maximal;
    var index;

    if (array === undefined) {
        return;
    } else {
        for (index = array.length; index >= 0; index -= 1) {
            if (typeof(array[index]) == 'number') {
                if (maximal === undefined) {
                    maximal = array[index];
                    continue;
                }
                if (maximal <= array[index]) {
                    maximal = array[index];
                }
            }
        }

    }
    return maximal;

}

// 3. `sum'

function sum() {
    var allSum = 0;
    var index;
    for (index = 0; index < arguments.length; index += 1) {
        if (typeof(arguments[index]) != 'number') continue;
        allSum = allSum + arguments[index];
    }
    return allSum;
}