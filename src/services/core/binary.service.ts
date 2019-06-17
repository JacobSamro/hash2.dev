export class BinaryService {
  static toString(bin) {
    var binString = '';
    bin.split(' ').map(function (bin) {
      binString += String.fromCharCode(parseInt(bin, 2));
    });
    return binString;
  }

  static toBinary(str) {
    var length = str.length,
      output = [];
    for (var i = 0; i < length; i++) {
      var bin = str[i].charCodeAt().toString(2);
      output.push(Array(8 - bin.length + 1).join("0") + bin);
    }
    return output.join(" ");
  }
}