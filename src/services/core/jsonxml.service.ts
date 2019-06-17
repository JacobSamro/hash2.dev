
const json2xml = require('json2xml');
var convert = require('xml-js');

export class JSONXmlService {

  static toJSON(str) {
    return convert.xml2json(str, {compact: true, spaces: 4});
  }

  static toXML(str){
    return json2xml(JSON.parse(str));
  }

}