const CRC32 = require('crc-32');
const MD2 = require('js-md2');
const MD4 = require('js-md4');
const MD5 = require("crypto-js/md5");
const SHA1 = require("crypto-js/sha1");
const SHA224 = require("crypto-js/sha224");
const SHA256 = require("crypto-js/sha256");
const SHA512 = require("crypto-js/sha512");

export class EncryptionService {

  static toCRC32(str) {
    return CRC32(str);
  }

  static toMD2(str) {
    return MD2(str);
  }

  static toMD4(str) {
    return MD4(str);
  }

  static toMD5(str) {
    return MD5(str);
  }

  static toSHA1(str) {
    return SHA1(str);
  }

  static toSHA224(str) {
    return SHA224(str);
  }

  static toSHA256(str) {
    return SHA256(str);
  }

  static toSHA512(str) {
    return SHA512(str);
  }

}