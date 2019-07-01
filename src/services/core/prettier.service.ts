
const beautifyJS = require('js-beautify').js
const beautifyCSS = require('js-beautify').css
const beautifyHTML = require('js-beautify').html
export class PrettierService {

  static prettifyHTML(str) {
    return beautifyHTML(str)
  }

  static prettifyCSS(str) {
    return beautifyCSS(str)
  }

  static prettifyJSON(str) {
    return JSON.stringify(JSON.parse(str), null, 2)
  }

  static prettifyXML(xml) {
    // Source: https://stackoverflow.com/a/49458964/3676464

    let formatted = '', indent = '';
    let tab = '  '||  '\t';
    xml.split(/>\s*</).forEach(function (node) {
      if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
      formatted += indent + '<' + node + '>\r\n';
      if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab;              // increase indent
    });
    return formatted.substring(1, formatted.length - 3);
  }

  static prettifyJS(str) {
    return beautifyJS(str)
  }

}