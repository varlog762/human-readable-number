module.exports = function toReadable(number) {
    const obj0 = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    },
    obj1 = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    },
    obj2 = {
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    }

    let result,
    sot,
    des,
    ed;

if (number.toString().length === 1) {
    for (let key in obj0) {
        if (key === number.toString()) {
            result = obj0[key];
        };
    };
} else if (number.toString().length === 2 && number.toString()[0] === '1') {
    for (let key in obj1) {
        if (key === number.toString()) {
            result = obj1[key];
        };
    };
} else if (number.toString().length === 2 && number.toString()[1] === '0') {
    for (let key in obj2) {
        if (key === number.toString()) {
            result = obj2[key];
        };
    };
} else if (number.toString().length === 2) {
    for (let key in obj2) {
        let newNumber = number - +number.toString()[1];
        if (key == newNumber ) {
            des = obj2[key];
        };
    };
    for (let key in obj0) {
        if (key === number.toString()[1]) {
            ed = obj0[key];
        };
    };
    result = `${des} ${ed}`;
} else if (number.toString().length === 3) {
    for (let key in obj0) {
        if (key === number.toString()[0]) {
            sot = obj0[key];
        };
    };

    if (number.toString()[1] === '0') {
        des = '';
    } else if (number.toString()[1] === '1') {
        for (let key in obj1) {
            if (key === (number.toString()[1] + number.toString()[2])) {
                des = ' ' + obj1[key];
            };
        };
    } else {
        for (let key in obj2) {
            if (key === (number.toString()[1] + '0')) {
                des = ' ' + obj2[key];
            };
        };
    };

    if (number.toString()[2] === '0') {
        ed = '';
    } else {
        for (let key in obj0) {
            if (key === number.toString()[2]) {
                ed = ' ' + obj0[key];
            };
        };
    }
    result = `${sot} hundred${des}${ed}`;
}
return result;
};