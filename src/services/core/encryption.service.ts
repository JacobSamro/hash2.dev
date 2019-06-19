import MD2 from 'js-md2';
import * as MD4 from 'js-md4';
import MD5 from 'crypto-js/md5';
import SHA1 from 'crypto-js/sha1';
import SHA224 from "crypto-js/sha224";
import SHA256 from "crypto-js/sha256";
import SHA512 from "crypto-js/sha512";

export class EncryptionService {


  static toMD2(str) {
    return MD2(str);
  }

  static toMD4(str) {
    return MD4(str);
  }

  static toMD5(str) {
    return MD5(str).toString();
  }

  static toSHA1(str) {
    return SHA1(str).toString();
  }

  static toSHA224(str) {
    return SHA224(str).toString();
  }

  static toSHA256(str) {
    return SHA256(str).toString();
  }

  static toSHA512(str) {
    return SHA512(str).toString();
  }

}