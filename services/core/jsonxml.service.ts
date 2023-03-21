
import * as xmljs from 'xml-js';

export class JSONXmlService {

  static toJSON(str) {
    return xmljs.xml2json(str, {
      compact: true, spaces: 2, nativeType: false, textFn: JSONXmlService.removeJsonTextAttribute
    });
  }

  static removeJsonTextAttribute(value, parentElement) {
    try {
      const parentOfParent = parentElement._parent;
      const pOpKeys = Object.keys(parentElement._parent);
      const keyNo = pOpKeys.length;
      const keyName = pOpKeys[keyNo - 1];
      const arrOfKey = parentElement._parent[keyName];
      const arrOfKeyLen = arrOfKey.length;
      if (arrOfKeyLen > 0) {
        const arr = arrOfKey;
        const arrIndex = arrOfKey.length - 1;
        arr[arrIndex] = value;
      } else {
        parentElement._parent[keyName] = value;
      }
    } catch (e) { }
  }


  static toXML(json) {

    //Add <root> if the given JSON is not having a parent object

    if(Object.keys(JSON.parse(json)).length > 1 ) { // Root is needed
      json = '{ "root" : ' + json + " } "
    }
    
    return xmljs.json2xml(json, { compact: true, spaces: 2 })

  }

}