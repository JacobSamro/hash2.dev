
import * as xmljs from 'xml-js';

export class JSONXmlService {

  static toJSON(str) {
    return xmljs.xml2json(str, {
      compact: true, spaces: 2, nativeType: true, textFn: JSONXmlService.removeJsonTextAttribute
    });
  }

  static removeJsonTextAttribute(value, parentElement) {
    try {
      var keyNo = Object.keys(parentElement._parent).length;
      var keyName = Object.keys(parentElement._parent)[keyNo - 1];
      parentElement._parent[keyName] = value;
    }
    catch (e) { }
  }


  static toXML(json) {

    return xmljs.json2xml(json, { compact: true, spaces: 2 })


  }

}