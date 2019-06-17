export class EncoderService{

  static toURLEncodedString(str){
    return decodeURIComponent(str);
  }

  static toBase64EncodedString(str) {
    return atob(str);
  }

  static toHTMLSpecialCharsEncode(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    return str;
  }

  static toURLDecodedString(str) {
    return decodeURIComponent(str);
  }

  static toBase64DecodedString(str) {
    return atob(str);
  }

  static toHTMLSpecialCharsDecode(str) {
    str = str.replace("&amp;", "&");
    str = str.replace("&gt;", ">");
    str = str.replace("&lt;", "<");
    str = str.replace("&quot;", '"');
    str = str.replace("&#039;", "'");
    return str;
  }

}