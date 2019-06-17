export class StringService {
  static removeSpaces(str) {
    return str.split(" ").join("");
  }

  static removeNumbers(str) {
    return str.split(/[0-9]+/).join("");
  }

  static removeSymbols(str) {
    return str.split(/[^0-9a-zA-Z]/).join("");
  }

  static onlyNumbers(str) {
    return str.split(/[^0-9]/).join("");
  }

  static onlyAlpabets(str) {
    return str.split(/[^A-Za-z]/).join("");
  }
}