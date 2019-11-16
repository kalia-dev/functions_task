const concat = require('goss_concat');

function getRGBGoss(r = 255, g = 255, b = 255) {
    return concat('rgb(', r, ', ', g + ', ', b, ')');
}

function getRGB(r = 255, g = 255, b = 255) {
    return('rgb(' + r + ', ' + g + ', ' + b + ')');
}
const rgb = (r = 255, g = 255, b = 255) => 'rgb(' + r + ', ' + g + ', ' + b + ')';

console.log(getRGBGoss(100, 33, 55));
console.log(getRGB(255, 0, 10));
console.log(rgb(0, 255, 120));
console.log('Author: Dmitri Kurikov');
