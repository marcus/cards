//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var MediumEditor;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/mediumeditor_mediumeditor/packages/mediumeditor_mediumed //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mediumeditor:mediumeditor/dist/js/medium-editor.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*global self, document, DOMException */                                                                               // 1
                                                                                                                       // 2
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */                                    // 3
                                                                                                                       // 4
// Full polyfill for browsers with no classList support                                                                // 5
if (!("classList" in document.createElement("_"))) {                                                                   // 6
  (function (view) {                                                                                                   // 7
                                                                                                                       // 8
  "use strict";                                                                                                        // 9
                                                                                                                       // 10
  if (!('Element' in view)) return;                                                                                    // 11
                                                                                                                       // 12
  var                                                                                                                  // 13
      classListProp = "classList"                                                                                      // 14
    , protoProp = "prototype"                                                                                          // 15
    , elemCtrProto = view.Element[protoProp]                                                                           // 16
    , objCtr = Object                                                                                                  // 17
    , strTrim = String[protoProp].trim || function () {                                                                // 18
      return this.replace(/^\s+|\s+$/g, "");                                                                           // 19
    }                                                                                                                  // 20
    , arrIndexOf = Array[protoProp].indexOf || function (item) {                                                       // 21
      var                                                                                                              // 22
          i = 0                                                                                                        // 23
        , len = this.length                                                                                            // 24
      ;                                                                                                                // 25
      for (; i < len; i++) {                                                                                           // 26
        if (i in this && this[i] === item) {                                                                           // 27
          return i;                                                                                                    // 28
        }                                                                                                              // 29
      }                                                                                                                // 30
      return -1;                                                                                                       // 31
    }                                                                                                                  // 32
    // Vendors: please allow content code to instantiate DOMExceptions                                                 // 33
    , DOMEx = function (type, message) {                                                                               // 34
      this.name = type;                                                                                                // 35
      this.code = DOMException[type];                                                                                  // 36
      this.message = message;                                                                                          // 37
    }                                                                                                                  // 38
    , checkTokenAndGetIndex = function (classList, token) {                                                            // 39
      if (token === "") {                                                                                              // 40
        throw new DOMEx(                                                                                               // 41
            "SYNTAX_ERR"                                                                                               // 42
          , "An invalid or illegal string was specified"                                                               // 43
        );                                                                                                             // 44
      }                                                                                                                // 45
      if (/\s/.test(token)) {                                                                                          // 46
        throw new DOMEx(                                                                                               // 47
            "INVALID_CHARACTER_ERR"                                                                                    // 48
          , "String contains an invalid character"                                                                     // 49
        );                                                                                                             // 50
      }                                                                                                                // 51
      return arrIndexOf.call(classList, token);                                                                        // 52
    }                                                                                                                  // 53
    , ClassList = function (elem) {                                                                                    // 54
      var                                                                                                              // 55
          trimmedClasses = strTrim.call(elem.getAttribute("class") || "")                                              // 56
        , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []                                                  // 57
        , i = 0                                                                                                        // 58
        , len = classes.length                                                                                         // 59
      ;                                                                                                                // 60
      for (; i < len; i++) {                                                                                           // 61
        this.push(classes[i]);                                                                                         // 62
      }                                                                                                                // 63
      this._updateClassName = function () {                                                                            // 64
        elem.setAttribute("class", this.toString());                                                                   // 65
      };                                                                                                               // 66
    }                                                                                                                  // 67
    , classListProto = ClassList[protoProp] = []                                                                       // 68
    , classListGetter = function () {                                                                                  // 69
      return new ClassList(this);                                                                                      // 70
    }                                                                                                                  // 71
  ;                                                                                                                    // 72
  // Most DOMException implementations don't allow calling DOMException's toString()                                   // 73
  // on non-DOMExceptions. Error's toString() is sufficient here.                                                      // 74
  DOMEx[protoProp] = Error[protoProp];                                                                                 // 75
  classListProto.item = function (i) {                                                                                 // 76
    return this[i] || null;                                                                                            // 77
  };                                                                                                                   // 78
  classListProto.contains = function (token) {                                                                         // 79
    token += "";                                                                                                       // 80
    return checkTokenAndGetIndex(this, token) !== -1;                                                                  // 81
  };                                                                                                                   // 82
  classListProto.add = function () {                                                                                   // 83
    var                                                                                                                // 84
        tokens = arguments                                                                                             // 85
      , i = 0                                                                                                          // 86
      , l = tokens.length                                                                                              // 87
      , token                                                                                                          // 88
      , updated = false                                                                                                // 89
    ;                                                                                                                  // 90
    do {                                                                                                               // 91
      token = tokens[i] + "";                                                                                          // 92
      if (checkTokenAndGetIndex(this, token) === -1) {                                                                 // 93
        this.push(token);                                                                                              // 94
        updated = true;                                                                                                // 95
      }                                                                                                                // 96
    }                                                                                                                  // 97
    while (++i < l);                                                                                                   // 98
                                                                                                                       // 99
    if (updated) {                                                                                                     // 100
      this._updateClassName();                                                                                         // 101
    }                                                                                                                  // 102
  };                                                                                                                   // 103
  classListProto.remove = function () {                                                                                // 104
    var                                                                                                                // 105
        tokens = arguments                                                                                             // 106
      , i = 0                                                                                                          // 107
      , l = tokens.length                                                                                              // 108
      , token                                                                                                          // 109
      , updated = false                                                                                                // 110
      , index                                                                                                          // 111
    ;                                                                                                                  // 112
    do {                                                                                                               // 113
      token = tokens[i] + "";                                                                                          // 114
      index = checkTokenAndGetIndex(this, token);                                                                      // 115
      while (index !== -1) {                                                                                           // 116
        this.splice(index, 1);                                                                                         // 117
        updated = true;                                                                                                // 118
        index = checkTokenAndGetIndex(this, token);                                                                    // 119
      }                                                                                                                // 120
    }                                                                                                                  // 121
    while (++i < l);                                                                                                   // 122
                                                                                                                       // 123
    if (updated) {                                                                                                     // 124
      this._updateClassName();                                                                                         // 125
    }                                                                                                                  // 126
  };                                                                                                                   // 127
  classListProto.toggle = function (token, force) {                                                                    // 128
    token += "";                                                                                                       // 129
                                                                                                                       // 130
    var                                                                                                                // 131
        result = this.contains(token)                                                                                  // 132
      , method = result ?                                                                                              // 133
        force !== true && "remove"                                                                                     // 134
      :                                                                                                                // 135
        force !== false && "add"                                                                                       // 136
    ;                                                                                                                  // 137
                                                                                                                       // 138
    if (method) {                                                                                                      // 139
      this[method](token);                                                                                             // 140
    }                                                                                                                  // 141
                                                                                                                       // 142
    if (force === true || force === false) {                                                                           // 143
      return force;                                                                                                    // 144
    } else {                                                                                                           // 145
      return !result;                                                                                                  // 146
    }                                                                                                                  // 147
  };                                                                                                                   // 148
  classListProto.toString = function () {                                                                              // 149
    return this.join(" ");                                                                                             // 150
  };                                                                                                                   // 151
                                                                                                                       // 152
  if (objCtr.defineProperty) {                                                                                         // 153
    var classListPropDesc = {                                                                                          // 154
        get: classListGetter                                                                                           // 155
      , enumerable: true                                                                                               // 156
      , configurable: true                                                                                             // 157
    };                                                                                                                 // 158
    try {                                                                                                              // 159
      objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);                                           // 160
    } catch (ex) { // IE 8 doesn't support enumerable:true                                                             // 161
      if (ex.number === -0x7FF5EC54) {                                                                                 // 162
        classListPropDesc.enumerable = false;                                                                          // 163
        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);                                         // 164
      }                                                                                                                // 165
    }                                                                                                                  // 166
  } else if (objCtr[protoProp].__defineGetter__) {                                                                     // 167
    elemCtrProto.__defineGetter__(classListProp, classListGetter);                                                     // 168
  }                                                                                                                    // 169
                                                                                                                       // 170
  }(self));                                                                                                            // 171
}                                                                                                                      // 172
                                                                                                                       // 173
/* Blob.js                                                                                                             // 174
 * A Blob implementation.                                                                                              // 175
 * 2014-07-24                                                                                                          // 176
 *                                                                                                                     // 177
 * By Eli Grey, http://eligrey.com                                                                                     // 178
 * By Devin Samarin, https://github.com/dsamarin                                                                       // 179
 * License: X11/MIT                                                                                                    // 180
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md                                                     // 181
 */                                                                                                                    // 182
                                                                                                                       // 183
/*global self, unescape */                                                                                             // 184
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,                             // 185
  plusplus: true */                                                                                                    // 186
                                                                                                                       // 187
/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */                                              // 188
                                                                                                                       // 189
(function (view) {                                                                                                     // 190
  "use strict";                                                                                                        // 191
                                                                                                                       // 192
  view.URL = view.URL || view.webkitURL;                                                                               // 193
                                                                                                                       // 194
  if (view.Blob && view.URL) {                                                                                         // 195
    try {                                                                                                              // 196
      new Blob;                                                                                                        // 197
      return;                                                                                                          // 198
    } catch (e) {}                                                                                                     // 199
  }                                                                                                                    // 200
                                                                                                                       // 201
  // Internally we use a BlobBuilder implementation to base Blob off of                                                // 202
  // in order to support older browsers that only have BlobBuilder                                                     // 203
  var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || (function(view) {             // 204
    var                                                                                                                // 205
        get_class = function(object) {                                                                                 // 206
        return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];                                  // 207
      }                                                                                                                // 208
      , FakeBlobBuilder = function BlobBuilder() {                                                                     // 209
        this.data = [];                                                                                                // 210
      }                                                                                                                // 211
      , FakeBlob = function Blob(data, type, encoding) {                                                               // 212
        this.data = data;                                                                                              // 213
        this.size = data.length;                                                                                       // 214
        this.type = type;                                                                                              // 215
        this.encoding = encoding;                                                                                      // 216
      }                                                                                                                // 217
      , FBB_proto = FakeBlobBuilder.prototype                                                                          // 218
      , FB_proto = FakeBlob.prototype                                                                                  // 219
      , FileReaderSync = view.FileReaderSync                                                                           // 220
      , FileException = function(type) {                                                                               // 221
        this.code = this[this.name = type];                                                                            // 222
      }                                                                                                                // 223
      , file_ex_codes = (                                                                                              // 224
          "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "                                        // 225
        + "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"                                                   // 226
      ).split(" ")                                                                                                     // 227
      , file_ex_code = file_ex_codes.length                                                                            // 228
      , real_URL = view.URL || view.webkitURL || view                                                                  // 229
      , real_create_object_URL = real_URL.createObjectURL                                                              // 230
      , real_revoke_object_URL = real_URL.revokeObjectURL                                                              // 231
      , URL = real_URL                                                                                                 // 232
      , btoa = view.btoa                                                                                               // 233
      , atob = view.atob                                                                                               // 234
                                                                                                                       // 235
      , ArrayBuffer = view.ArrayBuffer                                                                                 // 236
      , Uint8Array = view.Uint8Array                                                                                   // 237
                                                                                                                       // 238
      , origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/                                                              // 239
    ;                                                                                                                  // 240
    FakeBlob.fake = FB_proto.fake = true;                                                                              // 241
    while (file_ex_code--) {                                                                                           // 242
      FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;                                         // 243
    }                                                                                                                  // 244
    // Polyfill URL                                                                                                    // 245
    if (!real_URL.createObjectURL) {                                                                                   // 246
      URL = view.URL = function(uri) {                                                                                 // 247
        var                                                                                                            // 248
            uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a")                                   // 249
          , uri_origin                                                                                                 // 250
        ;                                                                                                              // 251
        uri_info.href = uri;                                                                                           // 252
        if (!("origin" in uri_info)) {                                                                                 // 253
          if (uri_info.protocol.toLowerCase() === "data:") {                                                           // 254
            uri_info.origin = null;                                                                                    // 255
          } else {                                                                                                     // 256
            uri_origin = uri.match(origin);                                                                            // 257
            uri_info.origin = uri_origin && uri_origin[1];                                                             // 258
          }                                                                                                            // 259
        }                                                                                                              // 260
        return uri_info;                                                                                               // 261
      };                                                                                                               // 262
    }                                                                                                                  // 263
    URL.createObjectURL = function(blob) {                                                                             // 264
      var                                                                                                              // 265
          type = blob.type                                                                                             // 266
        , data_URI_header                                                                                              // 267
      ;                                                                                                                // 268
      if (type === null) {                                                                                             // 269
        type = "application/octet-stream";                                                                             // 270
      }                                                                                                                // 271
      if (blob instanceof FakeBlob) {                                                                                  // 272
        data_URI_header = "data:" + type;                                                                              // 273
        if (blob.encoding === "base64") {                                                                              // 274
          return data_URI_header + ";base64," + blob.data;                                                             // 275
        } else if (blob.encoding === "URI") {                                                                          // 276
          return data_URI_header + "," + decodeURIComponent(blob.data);                                                // 277
        } if (btoa) {                                                                                                  // 278
          return data_URI_header + ";base64," + btoa(blob.data);                                                       // 279
        } else {                                                                                                       // 280
          return data_URI_header + "," + encodeURIComponent(blob.data);                                                // 281
        }                                                                                                              // 282
      } else if (real_create_object_URL) {                                                                             // 283
        return real_create_object_URL.call(real_URL, blob);                                                            // 284
      }                                                                                                                // 285
    };                                                                                                                 // 286
    URL.revokeObjectURL = function(object_URL) {                                                                       // 287
      if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {                                          // 288
        real_revoke_object_URL.call(real_URL, object_URL);                                                             // 289
      }                                                                                                                // 290
    };                                                                                                                 // 291
    FBB_proto.append = function(data/*, endings*/) {                                                                   // 292
      var bb = this.data;                                                                                              // 293
      // decode data to a binary string                                                                                // 294
      if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {                                 // 295
        var                                                                                                            // 296
            str = ""                                                                                                   // 297
          , buf = new Uint8Array(data)                                                                                 // 298
          , i = 0                                                                                                      // 299
          , buf_len = buf.length                                                                                       // 300
        ;                                                                                                              // 301
        for (; i < buf_len; i++) {                                                                                     // 302
          str += String.fromCharCode(buf[i]);                                                                          // 303
        }                                                                                                              // 304
        bb.push(str);                                                                                                  // 305
      } else if (get_class(data) === "Blob" || get_class(data) === "File") {                                           // 306
        if (FileReaderSync) {                                                                                          // 307
          var fr = new FileReaderSync;                                                                                 // 308
          bb.push(fr.readAsBinaryString(data));                                                                        // 309
        } else {                                                                                                       // 310
          // async FileReader won't work as BlobBuilder is sync                                                        // 311
          throw new FileException("NOT_READABLE_ERR");                                                                 // 312
        }                                                                                                              // 313
      } else if (data instanceof FakeBlob) {                                                                           // 314
        if (data.encoding === "base64" && atob) {                                                                      // 315
          bb.push(atob(data.data));                                                                                    // 316
        } else if (data.encoding === "URI") {                                                                          // 317
          bb.push(decodeURIComponent(data.data));                                                                      // 318
        } else if (data.encoding === "raw") {                                                                          // 319
          bb.push(data.data);                                                                                          // 320
        }                                                                                                              // 321
      } else {                                                                                                         // 322
        if (typeof data !== "string") {                                                                                // 323
          data += ""; // convert unsupported types to strings                                                          // 324
        }                                                                                                              // 325
        // decode UTF-16 to binary string                                                                              // 326
        bb.push(unescape(encodeURIComponent(data)));                                                                   // 327
      }                                                                                                                // 328
    };                                                                                                                 // 329
    FBB_proto.getBlob = function(type) {                                                                               // 330
      if (!arguments.length) {                                                                                         // 331
        type = null;                                                                                                   // 332
      }                                                                                                                // 333
      return new FakeBlob(this.data.join(""), type, "raw");                                                            // 334
    };                                                                                                                 // 335
    FBB_proto.toString = function() {                                                                                  // 336
      return "[object BlobBuilder]";                                                                                   // 337
    };                                                                                                                 // 338
    FB_proto.slice = function(start, end, type) {                                                                      // 339
      var args = arguments.length;                                                                                     // 340
      if (args < 3) {                                                                                                  // 341
        type = null;                                                                                                   // 342
      }                                                                                                                // 343
      return new FakeBlob(                                                                                             // 344
          this.data.slice(start, args > 1 ? end : this.data.length)                                                    // 345
        , type                                                                                                         // 346
        , this.encoding                                                                                                // 347
      );                                                                                                               // 348
    };                                                                                                                 // 349
    FB_proto.toString = function() {                                                                                   // 350
      return "[object Blob]";                                                                                          // 351
    };                                                                                                                 // 352
    FB_proto.close = function() {                                                                                      // 353
      this.size = 0;                                                                                                   // 354
      delete this.data;                                                                                                // 355
    };                                                                                                                 // 356
    return FakeBlobBuilder;                                                                                            // 357
  }(view));                                                                                                            // 358
                                                                                                                       // 359
  view.Blob = function(blobParts, options) {                                                                           // 360
    var type = options ? (options.type || "") : "";                                                                    // 361
    var builder = new BlobBuilder();                                                                                   // 362
    if (blobParts) {                                                                                                   // 363
      for (var i = 0, len = blobParts.length; i < len; i++) {                                                          // 364
        if (Uint8Array && blobParts[i] instanceof Uint8Array) {                                                        // 365
          builder.append(blobParts[i].buffer);                                                                         // 366
        }                                                                                                              // 367
        else {                                                                                                         // 368
          builder.append(blobParts[i]);                                                                                // 369
        }                                                                                                              // 370
      }                                                                                                                // 371
    }                                                                                                                  // 372
    var blob = builder.getBlob(type);                                                                                  // 373
    if (!blob.slice && blob.webkitSlice) {                                                                             // 374
      blob.slice = blob.webkitSlice;                                                                                   // 375
    }                                                                                                                  // 376
    return blob;                                                                                                       // 377
  };                                                                                                                   // 378
                                                                                                                       // 379
  var getPrototypeOf = Object.getPrototypeOf || function(object) {                                                     // 380
    return object.__proto__;                                                                                           // 381
  };                                                                                                                   // 382
  view.Blob.prototype = getPrototypeOf(new view.Blob());                                                               // 383
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));            // 384
                                                                                                                       // 385
(function (root, factory) {                                                                                            // 386
    'use strict';                                                                                                      // 387
    if (typeof module === 'object') {                                                                                  // 388
        module.exports = factory;                                                                                      // 389
    } else if (typeof define === 'function' && define.amd) {                                                           // 390
        define(function () {                                                                                           // 391
            return factory;                                                                                            // 392
        });                                                                                                            // 393
    } else {                                                                                                           // 394
        root.MediumEditor = factory;                                                                                   // 395
    }                                                                                                                  // 396
}(this, function () {                                                                                                  // 397
                                                                                                                       // 398
    'use strict';                                                                                                      // 399
                                                                                                                       // 400
var Util;                                                                                                              // 401
                                                                                                                       // 402
(function (window) {                                                                                                   // 403
    'use strict';                                                                                                      // 404
                                                                                                                       // 405
    function copyInto(overwrite, dest) {                                                                               // 406
        var prop,                                                                                                      // 407
            sources = Array.prototype.slice.call(arguments, 2);                                                        // 408
        dest = dest || {};                                                                                             // 409
        for (var i = 0; i < sources.length; i++) {                                                                     // 410
            var source = sources[i];                                                                                   // 411
            if (source) {                                                                                              // 412
                for (prop in source) {                                                                                 // 413
                    if (source.hasOwnProperty(prop) &&                                                                 // 414
                        typeof source[prop] !== 'undefined' &&                                                         // 415
                        (overwrite || dest.hasOwnProperty(prop) === false)) {                                          // 416
                        dest[prop] = source[prop];                                                                     // 417
                    }                                                                                                  // 418
                }                                                                                                      // 419
            }                                                                                                          // 420
        }                                                                                                              // 421
        return dest;                                                                                                   // 422
    }                                                                                                                  // 423
                                                                                                                       // 424
    Util = {                                                                                                           // 425
                                                                                                                       // 426
        // http://stackoverflow.com/questions/17907445/how-to-detect-ie11#comment30165888_17907562                     // 427
        // by rg89                                                                                                     // 428
        isIE: ((navigator.appName === 'Microsoft Internet Explorer') || ((navigator.appName === 'Netscape') && (new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})').exec(navigator.userAgent) !== null))),
                                                                                                                       // 430
        // http://stackoverflow.com/a/11752084/569101                                                                  // 431
        isMac: (window.navigator.platform.toUpperCase().indexOf('MAC') >= 0),                                          // 432
                                                                                                                       // 433
        // https://github.com/jashkenas/underscore                                                                     // 434
        keyCode: {                                                                                                     // 435
            BACKSPACE: 8,                                                                                              // 436
            TAB: 9,                                                                                                    // 437
            ENTER: 13,                                                                                                 // 438
            ESCAPE: 27,                                                                                                // 439
            SPACE: 32,                                                                                                 // 440
            DELETE: 46,                                                                                                // 441
            K: 75 // K keycode, and not k                                                                              // 442
        },                                                                                                             // 443
                                                                                                                       // 444
        /**                                                                                                            // 445
         * Returns true if it's metaKey on Mac, or ctrlKey on non-Mac.                                                 // 446
         * See #591                                                                                                    // 447
         */                                                                                                            // 448
        isMetaCtrlKey: function (event) {                                                                              // 449
            if ((this.isMac && event.metaKey) || (!this.isMac && event.ctrlKey)) {                                     // 450
                return true;                                                                                           // 451
            }                                                                                                          // 452
                                                                                                                       // 453
            return false;                                                                                              // 454
        },                                                                                                             // 455
                                                                                                                       // 456
        /**                                                                                                            // 457
         * Returns true if the key associated to the event is inside keys array                                        // 458
         *                                                                                                             // 459
         * @see : https://github.com/jquery/jquery/blob/0705be475092aede1eddae01319ec931fb9c65fc/src/event.js#L473-L484
         * @see : http://stackoverflow.com/q/4471582/569101                                                            // 461
         */                                                                                                            // 462
        isKey: function (event, keys) {                                                                                // 463
            var keyCode = this.getKeyCode(event);                                                                      // 464
                                                                                                                       // 465
            // it's not an array let's just compare strings!                                                           // 466
            if (false === Array.isArray(keys)) {                                                                       // 467
                return keyCode === keys;                                                                               // 468
            }                                                                                                          // 469
                                                                                                                       // 470
            if (-1 === keys.indexOf(keyCode)) {                                                                        // 471
                return false;                                                                                          // 472
            }                                                                                                          // 473
                                                                                                                       // 474
            return true;                                                                                               // 475
        },                                                                                                             // 476
                                                                                                                       // 477
        getKeyCode: function (event) {                                                                                 // 478
            var keyCode = event.which;                                                                                 // 479
                                                                                                                       // 480
            // getting the key code from event                                                                         // 481
            if (null === keyCode) {                                                                                    // 482
                keyCode = event.charCode !== null ? event.charCode : event.keyCode;                                    // 483
            }                                                                                                          // 484
                                                                                                                       // 485
            return keyCode;                                                                                            // 486
        },                                                                                                             // 487
                                                                                                                       // 488
        blockContainerElementNames: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre'],                    // 489
        emptyElementNames: ['br', 'col', 'colgroup', 'hr', 'img', 'input', 'source', 'wbr'],                           // 490
                                                                                                                       // 491
        extend: function extend(/* dest, source1, source2, ...*/) {                                                    // 492
            var args = [true].concat(Array.prototype.slice.call(arguments));                                           // 493
            return copyInto.apply(this, args);                                                                         // 494
        },                                                                                                             // 495
                                                                                                                       // 496
        defaults: function defaults(/*dest, source1, source2, ...*/) {                                                 // 497
            var args = [false].concat(Array.prototype.slice.call(arguments));                                          // 498
            return copyInto.apply(this, args);                                                                         // 499
        },                                                                                                             // 500
                                                                                                                       // 501
        /*                                                                                                             // 502
         * Create a link around the provided text nodes which must be adjacent to each other and all be                // 503
         * descendants of the same closest block container. If the preconditions are not met, unexpected               // 504
         * behavior will result.                                                                                       // 505
         */                                                                                                            // 506
        createLink: function (document, textNodes, href) {                                                             // 507
            var anchor = document.createElement('a');                                                                  // 508
            Util.moveTextRangeIntoElement(textNodes[0], textNodes[textNodes.length - 1], anchor);                      // 509
            anchor.setAttribute('href', href);                                                                         // 510
            return anchor;                                                                                             // 511
        },                                                                                                             // 512
                                                                                                                       // 513
        /*                                                                                                             // 514
         * Given the provided match in the format {start: 1, end: 2} where start and end are indices into the          // 515
         * textContent of the provided element argument, modify the DOM inside element to ensure that the text         // 516
         * identified by the provided match can be returned as text nodes that contain exactly that text, without      // 517
         * any additional text at the beginning or end of the returned array of adjacent text nodes.                   // 518
         *                                                                                                             // 519
         * The only DOM manipulation performed by this function is splitting the text nodes, non-text nodes are        // 520
         * not affected in any way.                                                                                    // 521
         */                                                                                                            // 522
        findOrCreateMatchingTextNodes: function (document, element, match) {                                           // 523
            var treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false),                    // 524
                matchedNodes = [],                                                                                     // 525
                currentTextIndex = 0,                                                                                  // 526
                startReached = false,                                                                                  // 527
                currentNode = null,                                                                                    // 528
                newNode = null;                                                                                        // 529
                                                                                                                       // 530
            while ((currentNode = treeWalker.nextNode()) !== null) {                                                   // 531
                if (!startReached && match.start < (currentTextIndex + currentNode.nodeValue.length)) {                // 532
                    startReached = true;                                                                               // 533
                    newNode = Util.splitStartNodeIfNeeded(currentNode, match.start, currentTextIndex);                 // 534
                }                                                                                                      // 535
                if (startReached) {                                                                                    // 536
                    Util.splitEndNodeIfNeeded(currentNode, newNode, match.end, currentTextIndex);                      // 537
                }                                                                                                      // 538
                if (startReached && currentTextIndex === match.end) {                                                  // 539
                    break; // Found the node(s) corresponding to the link. Break out and move on to the next.          // 540
                } else if (startReached && currentTextIndex > (match.end + 1)) {                                       // 541
                    throw new Error('PerformLinking overshot the target!'); // should never happen...                  // 542
                }                                                                                                      // 543
                                                                                                                       // 544
                if (startReached) {                                                                                    // 545
                    matchedNodes.push(newNode || currentNode);                                                         // 546
                }                                                                                                      // 547
                                                                                                                       // 548
                currentTextIndex += currentNode.nodeValue.length;                                                      // 549
                if (newNode !== null) {                                                                                // 550
                    currentTextIndex += newNode.nodeValue.length;                                                      // 551
                    // Skip the newNode as we'll already have pushed it to the matches                                 // 552
                    treeWalker.nextNode();                                                                             // 553
                }                                                                                                      // 554
                newNode = null;                                                                                        // 555
            }                                                                                                          // 556
            return matchedNodes;                                                                                       // 557
        },                                                                                                             // 558
                                                                                                                       // 559
        /*                                                                                                             // 560
         * Given the provided text node and text coordinates, split the text node if needed to make it align           // 561
         * precisely with the coordinates.                                                                             // 562
         *                                                                                                             // 563
         * This function is intended to be called from Util.findOrCreateMatchingTextNodes.                             // 564
         */                                                                                                            // 565
        splitStartNodeIfNeeded: function (currentNode, matchStartIndex, currentTextIndex) {                            // 566
            if (matchStartIndex !== currentTextIndex) {                                                                // 567
                return currentNode.splitText(matchStartIndex - currentTextIndex);                                      // 568
            }                                                                                                          // 569
            return null;                                                                                               // 570
        },                                                                                                             // 571
                                                                                                                       // 572
        /*                                                                                                             // 573
         * Given the provided text node and text coordinates, split the text node if needed to make it align           // 574
         * precisely with the coordinates. The newNode argument should from the result of Util.splitStartNodeIfNeeded, // 575
         * if that function has been called on the same currentNode.                                                   // 576
         *                                                                                                             // 577
         * This function is intended to be called from Util.findOrCreateMatchingTextNodes.                             // 578
         */                                                                                                            // 579
        splitEndNodeIfNeeded: function (currentNode, newNode, matchEndIndex, currentTextIndex) {                       // 580
            var textIndexOfEndOfFarthestNode,                                                                          // 581
                endSplitPoint;                                                                                         // 582
            textIndexOfEndOfFarthestNode = currentTextIndex + (newNode || currentNode).nodeValue.length +              // 583
                    (newNode ? currentNode.nodeValue.length : 0) -                                                     // 584
                    1;                                                                                                 // 585
            endSplitPoint = (newNode || currentNode).nodeValue.length -                                                // 586
                    (textIndexOfEndOfFarthestNode + 1 - matchEndIndex);                                                // 587
            if (textIndexOfEndOfFarthestNode >= matchEndIndex &&                                                       // 588
                    currentTextIndex !== textIndexOfEndOfFarthestNode &&                                               // 589
                    endSplitPoint !== 0) {                                                                             // 590
                (newNode || currentNode).splitText(endSplitPoint);                                                     // 591
            }                                                                                                          // 592
        },                                                                                                             // 593
                                                                                                                       // 594
        // Find the next node in the DOM tree that represents any text that is being                                   // 595
        // displayed directly next to the targetNode (passed as an argument)                                           // 596
        // Text that appears directly next to the current node can be:                                                 // 597
        //  - A sibling text node                                                                                      // 598
        //  - A descendant of a sibling element                                                                        // 599
        //  - A sibling text node of an ancestor                                                                       // 600
        //  - A descendant of a sibling element of an ancestor                                                         // 601
        findAdjacentTextNodeWithContent: function findAdjacentTextNodeWithContent(rootNode, targetNode, ownerDocument) {
            var pastTarget = false,                                                                                    // 603
                nextNode,                                                                                              // 604
                nodeIterator = ownerDocument.createNodeIterator(rootNode, NodeFilter.SHOW_TEXT, null, false);          // 605
                                                                                                                       // 606
            // Use a native NodeIterator to iterate over all the text nodes that are descendants                       // 607
            // of the rootNode.  Once past the targetNode, choose the first non-empty text node                        // 608
            nextNode = nodeIterator.nextNode();                                                                        // 609
            while (nextNode) {                                                                                         // 610
                if (nextNode === targetNode) {                                                                         // 611
                    pastTarget = true;                                                                                 // 612
                } else if (pastTarget) {                                                                               // 613
                    if (nextNode.nodeType === 3 && nextNode.nodeValue && nextNode.nodeValue.trim().length > 0) {       // 614
                        break;                                                                                         // 615
                    }                                                                                                  // 616
                }                                                                                                      // 617
                nextNode = nodeIterator.nextNode();                                                                    // 618
            }                                                                                                          // 619
                                                                                                                       // 620
            return nextNode;                                                                                           // 621
        },                                                                                                             // 622
                                                                                                                       // 623
        isDescendant: function isDescendant(parent, child, checkEquality) {                                            // 624
            if (!parent || !child) {                                                                                   // 625
                return false;                                                                                          // 626
            }                                                                                                          // 627
            if (checkEquality && parent === child) {                                                                   // 628
                return true;                                                                                           // 629
            }                                                                                                          // 630
            var node = child.parentNode;                                                                               // 631
            while (node !== null) {                                                                                    // 632
                if (node === parent) {                                                                                 // 633
                    return true;                                                                                       // 634
                }                                                                                                      // 635
                node = node.parentNode;                                                                                // 636
            }                                                                                                          // 637
            return false;                                                                                              // 638
        },                                                                                                             // 639
                                                                                                                       // 640
        // https://github.com/jashkenas/underscore                                                                     // 641
        isElement: function isElement(obj) {                                                                           // 642
            return !!(obj && obj.nodeType === 1);                                                                      // 643
        },                                                                                                             // 644
                                                                                                                       // 645
        // https://github.com/jashkenas/underscore                                                                     // 646
        throttle: function (func, wait) {                                                                              // 647
            var THROTTLE_INTERVAL = 50,                                                                                // 648
                context,                                                                                               // 649
                args,                                                                                                  // 650
                result,                                                                                                // 651
                timeout = null,                                                                                        // 652
                previous = 0,                                                                                          // 653
                later = function () {                                                                                  // 654
                    previous = Date.now();                                                                             // 655
                    timeout = null;                                                                                    // 656
                    result = func.apply(context, args);                                                                // 657
                    if (!timeout) {                                                                                    // 658
                        context = args = null;                                                                         // 659
                    }                                                                                                  // 660
                };                                                                                                     // 661
                                                                                                                       // 662
            if (!wait && wait !== 0) {                                                                                 // 663
                wait = THROTTLE_INTERVAL;                                                                              // 664
            }                                                                                                          // 665
                                                                                                                       // 666
            return function () {                                                                                       // 667
                var now = Date.now(),                                                                                  // 668
                    remaining = wait - (now - previous);                                                               // 669
                                                                                                                       // 670
                context = this;                                                                                        // 671
                args = arguments;                                                                                      // 672
                if (remaining <= 0 || remaining > wait) {                                                              // 673
                    if (timeout) {                                                                                     // 674
                        clearTimeout(timeout);                                                                         // 675
                        timeout = null;                                                                                // 676
                    }                                                                                                  // 677
                    previous = now;                                                                                    // 678
                    result = func.apply(context, args);                                                                // 679
                    if (!timeout) {                                                                                    // 680
                        context = args = null;                                                                         // 681
                    }                                                                                                  // 682
                } else if (!timeout) {                                                                                 // 683
                    timeout = setTimeout(later, remaining);                                                            // 684
                }                                                                                                      // 685
                return result;                                                                                         // 686
            };                                                                                                         // 687
        },                                                                                                             // 688
                                                                                                                       // 689
        traverseUp: function (current, testElementFunction) {                                                          // 690
            if (!current) {                                                                                            // 691
                return false;                                                                                          // 692
            }                                                                                                          // 693
                                                                                                                       // 694
            do {                                                                                                       // 695
                if (current.nodeType === 1) {                                                                          // 696
                    if (testElementFunction(current)) {                                                                // 697
                        return current;                                                                                // 698
                    }                                                                                                  // 699
                    // do not traverse upwards past the nearest containing editor                                      // 700
                    if (Util.isMediumEditorElement(current)) {                                                         // 701
                        return false;                                                                                  // 702
                    }                                                                                                  // 703
                }                                                                                                      // 704
                                                                                                                       // 705
                current = current.parentNode;                                                                          // 706
            } while (current);                                                                                         // 707
                                                                                                                       // 708
            return false;                                                                                              // 709
        },                                                                                                             // 710
                                                                                                                       // 711
        htmlEntities: function (str) {                                                                                 // 712
            // converts special characters (like <) into their escaped/encoded values (like &lt;).                     // 713
            // This allows you to show to display the string without the browser reading it as HTML.                   // 714
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        },                                                                                                             // 716
                                                                                                                       // 717
        // http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div                    // 718
        insertHTMLCommand: function (doc, html) {                                                                      // 719
            var selection, range, el, fragment, node, lastNode, toReplace;                                             // 720
                                                                                                                       // 721
            if (doc.queryCommandSupported('insertHTML')) {                                                             // 722
                try {                                                                                                  // 723
                    return doc.execCommand('insertHTML', false, html);                                                 // 724
                } catch (ignore) {}                                                                                    // 725
            }                                                                                                          // 726
                                                                                                                       // 727
            selection = doc.defaultView.getSelection();                                                                // 728
            if (selection.getRangeAt && selection.rangeCount) {                                                        // 729
                range = selection.getRangeAt(0);                                                                       // 730
                toReplace = range.commonAncestorContainer;                                                             // 731
                // Ensure range covers maximum amount of nodes as possible                                             // 732
                // By moving up the DOM and selecting ancestors whose only child is the range                          // 733
                if ((toReplace.nodeType === 3 && toReplace.nodeValue === range.toString()) ||                          // 734
                        (toReplace.nodeType !== 3 && toReplace.innerHTML === range.toString())) {                      // 735
                    while (toReplace.parentNode &&                                                                     // 736
                            toReplace.parentNode.childNodes.length === 1 &&                                            // 737
                            !Util.isMediumEditorElement(toReplace.parentNode)) {                                       // 738
                        toReplace = toReplace.parentNode;                                                              // 739
                    }                                                                                                  // 740
                    range.selectNode(toReplace);                                                                       // 741
                }                                                                                                      // 742
                range.deleteContents();                                                                                // 743
                                                                                                                       // 744
                el = doc.createElement('div');                                                                         // 745
                el.innerHTML = html;                                                                                   // 746
                fragment = doc.createDocumentFragment();                                                               // 747
                while (el.firstChild) {                                                                                // 748
                    node = el.firstChild;                                                                              // 749
                    lastNode = fragment.appendChild(node);                                                             // 750
                }                                                                                                      // 751
                range.insertNode(fragment);                                                                            // 752
                                                                                                                       // 753
                // Preserve the selection:                                                                             // 754
                if (lastNode) {                                                                                        // 755
                    range = range.cloneRange();                                                                        // 756
                    range.setStartAfter(lastNode);                                                                     // 757
                    range.collapse(true);                                                                              // 758
                    selection.removeAllRanges();                                                                       // 759
                    selection.addRange(range);                                                                         // 760
                }                                                                                                      // 761
            }                                                                                                          // 762
        },                                                                                                             // 763
                                                                                                                       // 764
        execFormatBlock: function (doc, tagName) {                                                                     // 765
            // Get the top level block element that contains the selection                                             // 766
            var blockContainer = Util.getTopBlockContainer(Selection.getSelectionStart(doc));                          // 767
                                                                                                                       // 768
            // Special handling for blockquote                                                                         // 769
            if (tagName === 'blockquote') {                                                                            // 770
                if (blockContainer) {                                                                                  // 771
                    var childNodes = Array.prototype.slice.call(blockContainer.childNodes);                            // 772
                    // Check if the blockquote has a block element as a child (nested blocks)                          // 773
                    if (childNodes.some(function (childNode) {                                                         // 774
                        return Util.isBlockContainer(childNode);                                                       // 775
                    })) {                                                                                              // 776
                        // FF handles blockquote differently on formatBlock                                            // 777
                        // allowing nesting, we need to use outdent                                                    // 778
                        // https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla                       // 779
                        return doc.execCommand('outdent', false, null);                                                // 780
                    }                                                                                                  // 781
                }                                                                                                      // 782
                                                                                                                       // 783
                // When IE blockquote needs to be called as indent                                                     // 784
                // http://stackoverflow.com/questions/1816223/rich-text-editor-with-blockquote-function/1821777#1821777
                if (this.isIE) {                                                                                       // 786
                    return doc.execCommand('indent', false, tagName);                                                  // 787
                }                                                                                                      // 788
            }                                                                                                          // 789
                                                                                                                       // 790
            // If the blockContainer is already the element type being passed in                                       // 791
            // treat it as 'undo' formatting and just convert it to a <p>                                              // 792
            if (blockContainer && tagName === blockContainer.nodeName.toLowerCase()) {                                 // 793
                tagName = 'p';                                                                                         // 794
            }                                                                                                          // 795
                                                                                                                       // 796
            // When IE we need to add <> to heading elements                                                           // 797
            // http://stackoverflow.com/questions/10741831/execcommand-formatblock-headings-in-ie                      // 798
            if (this.isIE) {                                                                                           // 799
                tagName = '<' + tagName + '>';                                                                         // 800
            }                                                                                                          // 801
            return doc.execCommand('formatBlock', false, tagName);                                                     // 802
        },                                                                                                             // 803
                                                                                                                       // 804
        /**                                                                                                            // 805
         * Set target to blank on the given el element                                                                 // 806
         *                                                                                                             // 807
         * TODO: not sure if this should be here                                                                       // 808
         *                                                                                                             // 809
         * When creating a link (using core -> createLink) the selection returned by Firefox will be the parent of the created link
         * instead of the created link itself (as it is for Chrome for example), so we retrieve all "a" children to grab the good one by
         * using `anchorUrl` to ensure that we are adding target="_blank" on the good one.                             // 812
         * This isn't a bulletproof solution anyway ..                                                                 // 813
         */                                                                                                            // 814
        setTargetBlank: function (el, anchorUrl) {                                                                     // 815
            var i, url = anchorUrl || false;                                                                           // 816
            if (el.nodeName.toLowerCase() === 'a') {                                                                   // 817
                el.target = '_blank';                                                                                  // 818
            } else {                                                                                                   // 819
                el = el.getElementsByTagName('a');                                                                     // 820
                                                                                                                       // 821
                for (i = 0; i < el.length; i += 1) {                                                                   // 822
                    if (false === url || url === el[i].attributes.href.value) {                                        // 823
                        el[i].target = '_blank';                                                                       // 824
                    }                                                                                                  // 825
                }                                                                                                      // 826
            }                                                                                                          // 827
        },                                                                                                             // 828
                                                                                                                       // 829
        addClassToAnchors: function (el, buttonClass) {                                                                // 830
            var classes = buttonClass.split(' '),                                                                      // 831
                i,                                                                                                     // 832
                j;                                                                                                     // 833
            if (el.nodeName.toLowerCase() === 'a') {                                                                   // 834
                for (j = 0; j < classes.length; j += 1) {                                                              // 835
                    el.classList.add(classes[j]);                                                                      // 836
                }                                                                                                      // 837
            } else {                                                                                                   // 838
                el = el.getElementsByTagName('a');                                                                     // 839
                for (i = 0; i < el.length; i += 1) {                                                                   // 840
                    for (j = 0; j < classes.length; j += 1) {                                                          // 841
                        el[i].classList.add(classes[j]);                                                               // 842
                    }                                                                                                  // 843
                }                                                                                                      // 844
            }                                                                                                          // 845
        },                                                                                                             // 846
                                                                                                                       // 847
        isListItem: function (node) {                                                                                  // 848
            if (!node) {                                                                                               // 849
                return false;                                                                                          // 850
            }                                                                                                          // 851
            if (node.nodeName.toLowerCase() === 'li') {                                                                // 852
                return true;                                                                                           // 853
            }                                                                                                          // 854
                                                                                                                       // 855
            var parentNode = node.parentNode,                                                                          // 856
                tagName = parentNode.nodeName.toLowerCase();                                                           // 857
            while (!this.isBlockContainer(parentNode) && tagName !== 'div') {                                          // 858
                if (tagName === 'li') {                                                                                // 859
                    return true;                                                                                       // 860
                }                                                                                                      // 861
                parentNode = parentNode.parentNode;                                                                    // 862
                if (parentNode) {                                                                                      // 863
                    tagName = parentNode.nodeName.toLowerCase();                                                       // 864
                } else {                                                                                               // 865
                    return false;                                                                                      // 866
                }                                                                                                      // 867
            }                                                                                                          // 868
            return false;                                                                                              // 869
        },                                                                                                             // 870
                                                                                                                       // 871
        cleanListDOM: function (ownerDocument, element) {                                                              // 872
            if (element.nodeName.toLowerCase() !== 'li') {                                                             // 873
                return;                                                                                                // 874
            }                                                                                                          // 875
                                                                                                                       // 876
            var list = element.parentElement;                                                                          // 877
                                                                                                                       // 878
            if (list.parentElement.nodeName.toLowerCase() === 'p') { // yes we need to clean up                        // 879
                this.unwrap(list.parentElement, ownerDocument);                                                        // 880
                                                                                                                       // 881
                // move cursor at the end of the text inside the list                                                  // 882
                // for some unknown reason, the cursor is moved to end of the "visual" line                            // 883
                Selection.moveCursor(ownerDocument, element.firstChild, element.firstChild.textContent.length);        // 884
            }                                                                                                          // 885
        },                                                                                                             // 886
                                                                                                                       // 887
        /* splitDOMTree                                                                                                // 888
         *                                                                                                             // 889
         * Given a root element some descendant element, split the root element                                        // 890
         * into its own element containing the descendant element and all elements                                     // 891
         * on the left or right side of the descendant ('right' is default)                                            // 892
         *                                                                                                             // 893
         * example:                                                                                                    // 894
         *                                                                                                             // 895
         *         <div>                                                                                               // 896
         *      /    |   \
         *  <span> <span> <span>                                                                                       // 898
         *   / \    / \    / \
         *  1   2  3   4  5   6                                                                                        // 900
         *                                                                                                             // 901
         *  If I wanted to split this tree given the <div> as the root and "4" as the leaf                             // 902
         *  the result would be (the prime ' marks indicates nodes that are created as clones):                        // 903
         *                                                                                                             // 904
         *   SPLITTING OFF 'RIGHT' TREE       SPLITTING OFF 'LEFT' TREE                                                // 905
         *                                                                                                             // 906
         *     <div>            <div>'              <div>'      <div>                                                  // 907
         *      / \              / \                 / \          |                                                    // 908
         * <span> <span>   <span>' <span>       <span> <span>   <span>                                                 // 909
         *   / \    |        |      / \           /\     /\       /\
         *  1   2   3        4     5   6         1  2   3  4     5  6                                                  // 911
         *                                                                                                             // 912
         *  The above example represents splitting off the 'right' or 'left' part of a tree, where                     // 913
         *  the <div>' would be returned as an element not appended to the DOM, and the <div>                          // 914
         *  would remain in place where it was                                                                         // 915
         *                                                                                                             // 916
        */                                                                                                             // 917
        splitOffDOMTree: function (rootNode, leafNode, splitLeft) {                                                    // 918
            var splitOnNode = leafNode,                                                                                // 919
                createdNode = null,                                                                                    // 920
                splitRight = !splitLeft;                                                                               // 921
                                                                                                                       // 922
            // loop until we hit the root                                                                              // 923
            while (splitOnNode !== rootNode) {                                                                         // 924
                var currParent = splitOnNode.parentNode,                                                               // 925
                    newParent = currParent.cloneNode(false),                                                           // 926
                    targetNode = (splitRight ? splitOnNode : currParent.firstChild),                                   // 927
                    appendLast;                                                                                        // 928
                                                                                                                       // 929
                // Create a new parent element which is a clone of the current parent                                  // 930
                if (createdNode) {                                                                                     // 931
                    if (splitRight) {                                                                                  // 932
                        // If we're splitting right, add previous created element before siblings                      // 933
                        newParent.appendChild(createdNode);                                                            // 934
                    } else {                                                                                           // 935
                        // If we're splitting left, add previous created element last                                  // 936
                        appendLast = createdNode;                                                                      // 937
                    }                                                                                                  // 938
                }                                                                                                      // 939
                createdNode = newParent;                                                                               // 940
                                                                                                                       // 941
                while (targetNode) {                                                                                   // 942
                    var sibling = targetNode.nextSibling;                                                              // 943
                    // Special handling for the 'splitNode'                                                            // 944
                    if (targetNode === splitOnNode) {                                                                  // 945
                        if (!targetNode.hasChildNodes()) {                                                             // 946
                            targetNode.parentNode.removeChild(targetNode);                                             // 947
                        } else {                                                                                       // 948
                            // For the node we're splitting on, if it has children, we need to clone it                // 949
                            // and not just move it                                                                    // 950
                            targetNode = targetNode.cloneNode(false);                                                  // 951
                        }                                                                                              // 952
                        // If the resulting split node has content, add it                                             // 953
                        if (targetNode.textContent) {                                                                  // 954
                            createdNode.appendChild(targetNode);                                                       // 955
                        }                                                                                              // 956
                                                                                                                       // 957
                        targetNode = (splitRight ? sibling : null);                                                    // 958
                    } else {                                                                                           // 959
                        // For general case, just remove the element and only                                          // 960
                        // add it to the split tree if it contains something                                           // 961
                        targetNode.parentNode.removeChild(targetNode);                                                 // 962
                        if (targetNode.hasChildNodes() || targetNode.textContent) {                                    // 963
                            createdNode.appendChild(targetNode);                                                       // 964
                        }                                                                                              // 965
                                                                                                                       // 966
                        targetNode = sibling;                                                                          // 967
                    }                                                                                                  // 968
                }                                                                                                      // 969
                                                                                                                       // 970
                // If we had an element we wanted to append at the end, do that now                                    // 971
                if (appendLast) {                                                                                      // 972
                    createdNode.appendChild(appendLast);                                                               // 973
                }                                                                                                      // 974
                                                                                                                       // 975
                splitOnNode = currParent;                                                                              // 976
            }                                                                                                          // 977
                                                                                                                       // 978
            return createdNode;                                                                                        // 979
        },                                                                                                             // 980
                                                                                                                       // 981
        moveTextRangeIntoElement: function (startNode, endNode, newElement) {                                          // 982
            if (!startNode || !endNode) {                                                                              // 983
                return false;                                                                                          // 984
            }                                                                                                          // 985
                                                                                                                       // 986
            var rootNode = this.findCommonRoot(startNode, endNode);                                                    // 987
            if (!rootNode) {                                                                                           // 988
                return false;                                                                                          // 989
            }                                                                                                          // 990
                                                                                                                       // 991
            if (endNode === startNode) {                                                                               // 992
                var temp = startNode.parentNode,                                                                       // 993
                    sibling = startNode.nextSibling;                                                                   // 994
                temp.removeChild(startNode);                                                                           // 995
                newElement.appendChild(startNode);                                                                     // 996
                if (sibling) {                                                                                         // 997
                    temp.insertBefore(newElement, sibling);                                                            // 998
                } else {                                                                                               // 999
                    temp.appendChild(newElement);                                                                      // 1000
                }                                                                                                      // 1001
                return newElement.hasChildNodes();                                                                     // 1002
            }                                                                                                          // 1003
                                                                                                                       // 1004
            // create rootChildren array which includes all the children                                               // 1005
            // we care about                                                                                           // 1006
            var rootChildren = [],                                                                                     // 1007
                firstChild,                                                                                            // 1008
                lastChild,                                                                                             // 1009
                nextNode;                                                                                              // 1010
            for (var i = 0; i < rootNode.childNodes.length; i++) {                                                     // 1011
                nextNode = rootNode.childNodes[i];                                                                     // 1012
                if (!firstChild) {                                                                                     // 1013
                    if (this.isDescendant(nextNode, startNode, true)) {                                                // 1014
                        firstChild = nextNode;                                                                         // 1015
                    }                                                                                                  // 1016
                } else {                                                                                               // 1017
                    if (this.isDescendant(nextNode, endNode, true)) {                                                  // 1018
                        lastChild = nextNode;                                                                          // 1019
                        break;                                                                                         // 1020
                    } else {                                                                                           // 1021
                        rootChildren.push(nextNode);                                                                   // 1022
                    }                                                                                                  // 1023
                }                                                                                                      // 1024
            }                                                                                                          // 1025
                                                                                                                       // 1026
            var afterLast = lastChild.nextSibling,                                                                     // 1027
                fragment = rootNode.ownerDocument.createDocumentFragment();                                            // 1028
                                                                                                                       // 1029
            // build up fragment on startNode side of tree                                                             // 1030
            if (firstChild === startNode) {                                                                            // 1031
                firstChild.parentNode.removeChild(firstChild);                                                         // 1032
                fragment.appendChild(firstChild);                                                                      // 1033
            } else {                                                                                                   // 1034
                fragment.appendChild(this.splitOffDOMTree(firstChild, startNode));                                     // 1035
            }                                                                                                          // 1036
                                                                                                                       // 1037
            // add any elements between firstChild & lastChild                                                         // 1038
            rootChildren.forEach(function (element) {                                                                  // 1039
                element.parentNode.removeChild(element);                                                               // 1040
                fragment.appendChild(element);                                                                         // 1041
            });                                                                                                        // 1042
                                                                                                                       // 1043
            // build up fragment on endNode side of the tree                                                           // 1044
            if (lastChild === endNode) {                                                                               // 1045
                lastChild.parentNode.removeChild(lastChild);                                                           // 1046
                fragment.appendChild(lastChild);                                                                       // 1047
            } else {                                                                                                   // 1048
                fragment.appendChild(this.splitOffDOMTree(lastChild, endNode, true));                                  // 1049
            }                                                                                                          // 1050
                                                                                                                       // 1051
            // Add fragment into passed in element                                                                     // 1052
            newElement.appendChild(fragment);                                                                          // 1053
                                                                                                                       // 1054
            if (lastChild.parentNode === rootNode) {                                                                   // 1055
                // If last child is in the root, insert newElement in front of it                                      // 1056
                rootNode.insertBefore(newElement, lastChild);                                                          // 1057
            } else if (afterLast) {                                                                                    // 1058
                // If last child was removed, but it had a sibling, insert in front of it                              // 1059
                rootNode.insertBefore(newElement, afterLast);                                                          // 1060
            } else {                                                                                                   // 1061
                // lastChild was removed and was the last actual element just append                                   // 1062
                rootNode.appendChild(newElement);                                                                      // 1063
            }                                                                                                          // 1064
                                                                                                                       // 1065
            return newElement.hasChildNodes();                                                                         // 1066
        },                                                                                                             // 1067
                                                                                                                       // 1068
        /* based on http://stackoverflow.com/a/6183069 */                                                              // 1069
        depthOfNode: function (inNode) {                                                                               // 1070
            var theDepth = 0,                                                                                          // 1071
                node = inNode;                                                                                         // 1072
            while (node.parentNode !== null) {                                                                         // 1073
                node = node.parentNode;                                                                                // 1074
                theDepth++;                                                                                            // 1075
            }                                                                                                          // 1076
            return theDepth;                                                                                           // 1077
        },                                                                                                             // 1078
                                                                                                                       // 1079
        findCommonRoot: function (inNode1, inNode2) {                                                                  // 1080
            var depth1 = this.depthOfNode(inNode1),                                                                    // 1081
                depth2 = this.depthOfNode(inNode2),                                                                    // 1082
                node1 = inNode1,                                                                                       // 1083
                node2 = inNode2;                                                                                       // 1084
                                                                                                                       // 1085
            while (depth1 !== depth2) {                                                                                // 1086
                if (depth1 > depth2) {                                                                                 // 1087
                    node1 = node1.parentNode;                                                                          // 1088
                    depth1 -= 1;                                                                                       // 1089
                } else {                                                                                               // 1090
                    node2 = node2.parentNode;                                                                          // 1091
                    depth2 -= 1;                                                                                       // 1092
                }                                                                                                      // 1093
            }                                                                                                          // 1094
                                                                                                                       // 1095
            while (node1 !== node2) {                                                                                  // 1096
                node1 = node1.parentNode;                                                                              // 1097
                node2 = node2.parentNode;                                                                              // 1098
            }                                                                                                          // 1099
                                                                                                                       // 1100
            return node1;                                                                                              // 1101
        },                                                                                                             // 1102
        /* END - based on http://stackoverflow.com/a/6183069 */                                                        // 1103
                                                                                                                       // 1104
        isElementAtBeginningOfBlock: function (node) {                                                                 // 1105
            var textVal,                                                                                               // 1106
                sibling;                                                                                               // 1107
            while (!this.isBlockContainer(node) && !this.isMediumEditorElement(node)) {                                // 1108
                sibling = node;                                                                                        // 1109
                while (sibling = sibling.previousSibling) {                                                            // 1110
                    textVal = sibling.nodeType === 3 ? sibling.nodeValue : sibling.textContent;                        // 1111
                    if (textVal.length > 0) {                                                                          // 1112
                        return false;                                                                                  // 1113
                    }                                                                                                  // 1114
                }                                                                                                      // 1115
                node = node.parentNode;                                                                                // 1116
            }                                                                                                          // 1117
            return true;                                                                                               // 1118
        },                                                                                                             // 1119
                                                                                                                       // 1120
        isMediumEditorElement: function (element) {                                                                    // 1121
            return element && element.getAttribute && !!element.getAttribute('data-medium-editor-element');            // 1122
        },                                                                                                             // 1123
                                                                                                                       // 1124
        isBlockContainer: function (element) {                                                                         // 1125
            return element && element.nodeType !== 3 && this.blockContainerElementNames.indexOf(element.nodeName.toLowerCase()) !== -1;
        },                                                                                                             // 1127
                                                                                                                       // 1128
        getClosestBlockContainer: function (node) {                                                                    // 1129
            return Util.traverseUp(node, function (node) {                                                             // 1130
                return Util.isBlockContainer(node);                                                                    // 1131
            });                                                                                                        // 1132
        },                                                                                                             // 1133
                                                                                                                       // 1134
        getTopBlockContainer: function (element) {                                                                     // 1135
            var topBlock = element;                                                                                    // 1136
            this.traverseUp(element, function (el) {                                                                   // 1137
                if (Util.isBlockContainer(el)) {                                                                       // 1138
                    topBlock = el;                                                                                     // 1139
                }                                                                                                      // 1140
                return false;                                                                                          // 1141
            });                                                                                                        // 1142
            return topBlock;                                                                                           // 1143
        },                                                                                                             // 1144
                                                                                                                       // 1145
        getFirstSelectableLeafNode: function (element) {                                                               // 1146
            while (element && element.firstChild) {                                                                    // 1147
                element = element.firstChild;                                                                          // 1148
            }                                                                                                          // 1149
                                                                                                                       // 1150
            // We don't want to set the selection to an element that can't have children, this messes up Gecko.        // 1151
            element = this.traverseUp(element, function (el) {                                                         // 1152
                return Util.emptyElementNames.indexOf(el.nodeName.toLowerCase()) === -1;                               // 1153
            });                                                                                                        // 1154
            // Selecting at the beginning of a table doesn't work in PhantomJS.                                        // 1155
            if (element.nodeName.toLowerCase() === 'table') {                                                          // 1156
                var firstCell = element.querySelector('th, td');                                                       // 1157
                if (firstCell) {                                                                                       // 1158
                    element = firstCell;                                                                               // 1159
                }                                                                                                      // 1160
            }                                                                                                          // 1161
            return element;                                                                                            // 1162
        },                                                                                                             // 1163
                                                                                                                       // 1164
        getFirstTextNode: function (element) {                                                                         // 1165
            if (element.nodeType === 3) {                                                                              // 1166
                return element;                                                                                        // 1167
            }                                                                                                          // 1168
                                                                                                                       // 1169
            for (var i = 0; i < element.childNodes.length; i++) {                                                      // 1170
                var textNode = this.getFirstTextNode(element.childNodes[i]);                                           // 1171
                if (textNode !== null) {                                                                               // 1172
                    return textNode;                                                                                   // 1173
                }                                                                                                      // 1174
            }                                                                                                          // 1175
            return null;                                                                                               // 1176
        },                                                                                                             // 1177
                                                                                                                       // 1178
        ensureUrlHasProtocol: function (url) {                                                                         // 1179
            if (url.indexOf('://') === -1) {                                                                           // 1180
                return 'http://' + url;                                                                                // 1181
            }                                                                                                          // 1182
            return url;                                                                                                // 1183
        },                                                                                                             // 1184
                                                                                                                       // 1185
        warn: function () {                                                                                            // 1186
            if (window.console !== undefined && typeof window.console.warn === 'function') {                           // 1187
                window.console.warn.apply(window.console, arguments);                                                  // 1188
            }                                                                                                          // 1189
        },                                                                                                             // 1190
                                                                                                                       // 1191
        deprecated: function (oldName, newName, version) {                                                             // 1192
            // simple deprecation warning mechanism.                                                                   // 1193
            var m = oldName + ' is deprecated, please use ' + newName + ' instead.';                                   // 1194
            if (version) {                                                                                             // 1195
                m += ' Will be removed in ' + version;                                                                 // 1196
            }                                                                                                          // 1197
            Util.warn(m);                                                                                              // 1198
        },                                                                                                             // 1199
                                                                                                                       // 1200
        deprecatedMethod: function (oldName, newName, args, version) {                                                 // 1201
            // run the replacement and warn when someone calls a deprecated method                                     // 1202
            Util.deprecated(oldName, newName, version);                                                                // 1203
            if (typeof this[newName] === 'function') {                                                                 // 1204
                this[newName].apply(this, args);                                                                       // 1205
            }                                                                                                          // 1206
        },                                                                                                             // 1207
                                                                                                                       // 1208
        cleanupAttrs: function (el, attrs) {                                                                           // 1209
            attrs.forEach(function (attr) {                                                                            // 1210
                el.removeAttribute(attr);                                                                              // 1211
            });                                                                                                        // 1212
        },                                                                                                             // 1213
                                                                                                                       // 1214
        cleanupTags: function (el, tags) {                                                                             // 1215
            tags.forEach(function (tag) {                                                                              // 1216
                if (el.nodeName.toLowerCase() === tag) {                                                               // 1217
                    el.parentNode.removeChild(el);                                                                     // 1218
                }                                                                                                      // 1219
            }, this);                                                                                                  // 1220
        },                                                                                                             // 1221
                                                                                                                       // 1222
        // get the closest parent                                                                                      // 1223
        getClosestTag: function (el, tag) {                                                                            // 1224
            return this.traverseUp(el, function (element) {                                                            // 1225
                return element.nodeName.toLowerCase() === tag.toLowerCase();                                           // 1226
            });                                                                                                        // 1227
        },                                                                                                             // 1228
                                                                                                                       // 1229
        unwrap: function (el, doc) {                                                                                   // 1230
            var fragment = doc.createDocumentFragment(),                                                               // 1231
                nodes = Array.prototype.slice.call(el.childNodes);                                                     // 1232
                                                                                                                       // 1233
            // cast nodeList to array since appending child                                                            // 1234
            // to a different node will alter length of el.childNodes                                                  // 1235
            for (var i = 0; i < nodes.length; i++) {                                                                   // 1236
                fragment.appendChild(nodes[i]);                                                                        // 1237
            }                                                                                                          // 1238
                                                                                                                       // 1239
            if (fragment.childNodes.length) {                                                                          // 1240
                el.parentNode.replaceChild(fragment, el);                                                              // 1241
            } else {                                                                                                   // 1242
                el.parentNode.removeChild(el);                                                                         // 1243
            }                                                                                                          // 1244
        }                                                                                                              // 1245
    };                                                                                                                 // 1246
}(window));                                                                                                            // 1247
                                                                                                                       // 1248
var buttonDefaults;                                                                                                    // 1249
(function () {                                                                                                         // 1250
    'use strict';                                                                                                      // 1251
                                                                                                                       // 1252
    buttonDefaults = {                                                                                                 // 1253
        'bold': {                                                                                                      // 1254
            name: 'bold',                                                                                              // 1255
            action: 'bold',                                                                                            // 1256
            aria: 'bold',                                                                                              // 1257
            tagNames: ['b', 'strong'],                                                                                 // 1258
            style: {                                                                                                   // 1259
                prop: 'font-weight',                                                                                   // 1260
                value: '700|bold'                                                                                      // 1261
            },                                                                                                         // 1262
            useQueryState: true,                                                                                       // 1263
            contentDefault: '<b>B</b>',                                                                                // 1264
            contentFA: '<i class="fa fa-bold"></i>'                                                                    // 1265
        },                                                                                                             // 1266
        'italic': {                                                                                                    // 1267
            name: 'italic',                                                                                            // 1268
            action: 'italic',                                                                                          // 1269
            aria: 'italic',                                                                                            // 1270
            tagNames: ['i', 'em'],                                                                                     // 1271
            style: {                                                                                                   // 1272
                prop: 'font-style',                                                                                    // 1273
                value: 'italic'                                                                                        // 1274
            },                                                                                                         // 1275
            useQueryState: true,                                                                                       // 1276
            contentDefault: '<b><i>I</i></b>',                                                                         // 1277
            contentFA: '<i class="fa fa-italic"></i>'                                                                  // 1278
        },                                                                                                             // 1279
        'underline': {                                                                                                 // 1280
            name: 'underline',                                                                                         // 1281
            action: 'underline',                                                                                       // 1282
            aria: 'underline',                                                                                         // 1283
            tagNames: ['u'],                                                                                           // 1284
            style: {                                                                                                   // 1285
                prop: 'text-decoration',                                                                               // 1286
                value: 'underline'                                                                                     // 1287
            },                                                                                                         // 1288
            useQueryState: true,                                                                                       // 1289
            contentDefault: '<b><u>U</u></b>',                                                                         // 1290
            contentFA: '<i class="fa fa-underline"></i>'                                                               // 1291
        },                                                                                                             // 1292
        'strikethrough': {                                                                                             // 1293
            name: 'strikethrough',                                                                                     // 1294
            action: 'strikethrough',                                                                                   // 1295
            aria: 'strike through',                                                                                    // 1296
            tagNames: ['strike'],                                                                                      // 1297
            style: {                                                                                                   // 1298
                prop: 'text-decoration',                                                                               // 1299
                value: 'line-through'                                                                                  // 1300
            },                                                                                                         // 1301
            useQueryState: true,                                                                                       // 1302
            contentDefault: '<s>A</s>',                                                                                // 1303
            contentFA: '<i class="fa fa-strikethrough"></i>'                                                           // 1304
        },                                                                                                             // 1305
        'superscript': {                                                                                               // 1306
            name: 'superscript',                                                                                       // 1307
            action: 'superscript',                                                                                     // 1308
            aria: 'superscript',                                                                                       // 1309
            tagNames: ['sup'],                                                                                         // 1310
            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for superscript         // 1311
               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */   // 1312
            // useQueryState: true                                                                                     // 1313
            contentDefault: '<b>x<sup>1</sup></b>',                                                                    // 1314
            contentFA: '<i class="fa fa-superscript"></i>'                                                             // 1315
        },                                                                                                             // 1316
        'subscript': {                                                                                                 // 1317
            name: 'subscript',                                                                                         // 1318
            action: 'subscript',                                                                                       // 1319
            aria: 'subscript',                                                                                         // 1320
            tagNames: ['sub'],                                                                                         // 1321
            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for subscript           // 1322
               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */   // 1323
            // useQueryState: true                                                                                     // 1324
            contentDefault: '<b>x<sub>1</sub></b>',                                                                    // 1325
            contentFA: '<i class="fa fa-subscript"></i>'                                                               // 1326
        },                                                                                                             // 1327
        'image': {                                                                                                     // 1328
            name: 'image',                                                                                             // 1329
            action: 'image',                                                                                           // 1330
            aria: 'image',                                                                                             // 1331
            tagNames: ['img'],                                                                                         // 1332
            contentDefault: '<b>image</b>',                                                                            // 1333
            contentFA: '<i class="fa fa-picture-o"></i>'                                                               // 1334
        },                                                                                                             // 1335
        'orderedlist': {                                                                                               // 1336
            name: 'orderedlist',                                                                                       // 1337
            action: 'insertorderedlist',                                                                               // 1338
            aria: 'ordered list',                                                                                      // 1339
            tagNames: ['ol'],                                                                                          // 1340
            useQueryState: true,                                                                                       // 1341
            contentDefault: '<b>1.</b>',                                                                               // 1342
            contentFA: '<i class="fa fa-list-ol"></i>'                                                                 // 1343
        },                                                                                                             // 1344
        'unorderedlist': {                                                                                             // 1345
            name: 'unorderedlist',                                                                                     // 1346
            action: 'insertunorderedlist',                                                                             // 1347
            aria: 'unordered list',                                                                                    // 1348
            tagNames: ['ul'],                                                                                          // 1349
            useQueryState: true,                                                                                       // 1350
            contentDefault: '<b>&bull;</b>',                                                                           // 1351
            contentFA: '<i class="fa fa-list-ul"></i>'                                                                 // 1352
        },                                                                                                             // 1353
        'indent': {                                                                                                    // 1354
            name: 'indent',                                                                                            // 1355
            action: 'indent',                                                                                          // 1356
            aria: 'indent',                                                                                            // 1357
            tagNames: [],                                                                                              // 1358
            contentDefault: '<b>&rarr;</b>',                                                                           // 1359
            contentFA: '<i class="fa fa-indent"></i>'                                                                  // 1360
        },                                                                                                             // 1361
        'outdent': {                                                                                                   // 1362
            name: 'outdent',                                                                                           // 1363
            action: 'outdent',                                                                                         // 1364
            aria: 'outdent',                                                                                           // 1365
            tagNames: [],                                                                                              // 1366
            contentDefault: '<b>&larr;</b>',                                                                           // 1367
            contentFA: '<i class="fa fa-outdent"></i>'                                                                 // 1368
        },                                                                                                             // 1369
        'justifyCenter': {                                                                                             // 1370
            name: 'justifyCenter',                                                                                     // 1371
            action: 'justifyCenter',                                                                                   // 1372
            aria: 'center justify',                                                                                    // 1373
            tagNames: [],                                                                                              // 1374
            style: {                                                                                                   // 1375
                prop: 'text-align',                                                                                    // 1376
                value: 'center'                                                                                        // 1377
            },                                                                                                         // 1378
            contentDefault: '<b>C</b>',                                                                                // 1379
            contentFA: '<i class="fa fa-align-center"></i>'                                                            // 1380
        },                                                                                                             // 1381
        'justifyFull': {                                                                                               // 1382
            name: 'justifyFull',                                                                                       // 1383
            action: 'justifyFull',                                                                                     // 1384
            aria: 'full justify',                                                                                      // 1385
            tagNames: [],                                                                                              // 1386
            style: {                                                                                                   // 1387
                prop: 'text-align',                                                                                    // 1388
                value: 'justify'                                                                                       // 1389
            },                                                                                                         // 1390
            contentDefault: '<b>J</b>',                                                                                // 1391
            contentFA: '<i class="fa fa-align-justify"></i>'                                                           // 1392
        },                                                                                                             // 1393
        'justifyLeft': {                                                                                               // 1394
            name: 'justifyLeft',                                                                                       // 1395
            action: 'justifyLeft',                                                                                     // 1396
            aria: 'left justify',                                                                                      // 1397
            tagNames: [],                                                                                              // 1398
            style: {                                                                                                   // 1399
                prop: 'text-align',                                                                                    // 1400
                value: 'left'                                                                                          // 1401
            },                                                                                                         // 1402
            contentDefault: '<b>L</b>',                                                                                // 1403
            contentFA: '<i class="fa fa-align-left"></i>'                                                              // 1404
        },                                                                                                             // 1405
        'justifyRight': {                                                                                              // 1406
            name: 'justifyRight',                                                                                      // 1407
            action: 'justifyRight',                                                                                    // 1408
            aria: 'right justify',                                                                                     // 1409
            tagNames: [],                                                                                              // 1410
            style: {                                                                                                   // 1411
                prop: 'text-align',                                                                                    // 1412
                value: 'right'                                                                                         // 1413
            },                                                                                                         // 1414
            contentDefault: '<b>R</b>',                                                                                // 1415
            contentFA: '<i class="fa fa-align-right"></i>'                                                             // 1416
        },                                                                                                             // 1417
        // Known inline elements that are not removed, or not removed consistantly across browsers:                    // 1418
        // <span>, <label>, <br>                                                                                       // 1419
        'removeFormat': {                                                                                              // 1420
            name: 'removeFormat',                                                                                      // 1421
            aria: 'remove formatting',                                                                                 // 1422
            action: 'removeFormat',                                                                                    // 1423
            contentDefault: '<b>X</b>',                                                                                // 1424
            contentFA: '<i class="fa fa-eraser"></i>'                                                                  // 1425
        },                                                                                                             // 1426
                                                                                                                       // 1427
        /***** Buttons for appending block elements (append-<element> action) *****/                                   // 1428
                                                                                                                       // 1429
        'quote': {                                                                                                     // 1430
            name: 'quote',                                                                                             // 1431
            action: 'append-blockquote',                                                                               // 1432
            aria: 'blockquote',                                                                                        // 1433
            tagNames: ['blockquote'],                                                                                  // 1434
            contentDefault: '<b>&ldquo;</b>',                                                                          // 1435
            contentFA: '<i class="fa fa-quote-right"></i>'                                                             // 1436
        },                                                                                                             // 1437
        'pre': {                                                                                                       // 1438
            name: 'pre',                                                                                               // 1439
            action: 'append-pre',                                                                                      // 1440
            aria: 'preformatted text',                                                                                 // 1441
            tagNames: ['pre'],                                                                                         // 1442
            contentDefault: '<b>0101</b>',                                                                             // 1443
            contentFA: '<i class="fa fa-code fa-lg"></i>'                                                              // 1444
        },                                                                                                             // 1445
        'h1': {                                                                                                        // 1446
            name: 'h1',                                                                                                // 1447
            action: 'append-h1',                                                                                       // 1448
            aria: 'header type one',                                                                                   // 1449
            tagNames: ['h1'],                                                                                          // 1450
            contentDefault: '<b>H1</b>',                                                                               // 1451
            contentFA: '<i class="fa fa-header"><sup>1</sup>'                                                          // 1452
        },                                                                                                             // 1453
        'h2': {                                                                                                        // 1454
            name: 'h2',                                                                                                // 1455
            action: 'append-h2',                                                                                       // 1456
            aria: 'header type two',                                                                                   // 1457
            tagNames: ['h2'],                                                                                          // 1458
            contentDefault: '<b>H2</b>',                                                                               // 1459
            contentFA: '<i class="fa fa-header"><sup>2</sup>'                                                          // 1460
        },                                                                                                             // 1461
        'h3': {                                                                                                        // 1462
            name: 'h3',                                                                                                // 1463
            action: 'append-h3',                                                                                       // 1464
            aria: 'header type three',                                                                                 // 1465
            tagNames: ['h3'],                                                                                          // 1466
            contentDefault: '<b>H3</b>',                                                                               // 1467
            contentFA: '<i class="fa fa-header"><sup>3</sup>'                                                          // 1468
        },                                                                                                             // 1469
        'h4': {                                                                                                        // 1470
            name: 'h4',                                                                                                // 1471
            action: 'append-h4',                                                                                       // 1472
            aria: 'header type four',                                                                                  // 1473
            tagNames: ['h4'],                                                                                          // 1474
            contentDefault: '<b>H4</b>',                                                                               // 1475
            contentFA: '<i class="fa fa-header"><sup>4</sup>'                                                          // 1476
        },                                                                                                             // 1477
        'h5': {                                                                                                        // 1478
            name: 'h5',                                                                                                // 1479
            action: 'append-h5',                                                                                       // 1480
            aria: 'header type five',                                                                                  // 1481
            tagNames: ['h5'],                                                                                          // 1482
            contentDefault: '<b>H5</b>',                                                                               // 1483
            contentFA: '<i class="fa fa-header"><sup>5</sup>'                                                          // 1484
        },                                                                                                             // 1485
        'h6': {                                                                                                        // 1486
            name: 'h6',                                                                                                // 1487
            action: 'append-h6',                                                                                       // 1488
            aria: 'header type six',                                                                                   // 1489
            tagNames: ['h6'],                                                                                          // 1490
            contentDefault: '<b>H6</b>',                                                                               // 1491
            contentFA: '<i class="fa fa-header"><sup>6</sup>'                                                          // 1492
        }                                                                                                              // 1493
    };                                                                                                                 // 1494
                                                                                                                       // 1495
})();                                                                                                                  // 1496
var editorDefaults;                                                                                                    // 1497
(function () {                                                                                                         // 1498
    // summary: The default options hash used by the Editor                                                            // 1499
                                                                                                                       // 1500
    editorDefaults = {                                                                                                 // 1501
        activeButtonClass: 'medium-editor-button-active',                                                              // 1502
        buttonLabels: false,                                                                                           // 1503
        delay: 0,                                                                                                      // 1504
        disableReturn: false,                                                                                          // 1505
        disableDoubleReturn: false,                                                                                    // 1506
        disableEditing: false,                                                                                         // 1507
        autoLink: false,                                                                                               // 1508
        elementsContainer: false,                                                                                      // 1509
        contentWindow: window,                                                                                         // 1510
        ownerDocument: document,                                                                                       // 1511
        targetBlank: false,                                                                                            // 1512
        extensions: {},                                                                                                // 1513
        spellcheck: true                                                                                               // 1514
    };                                                                                                                 // 1515
})();                                                                                                                  // 1516
                                                                                                                       // 1517
var Extension;                                                                                                         // 1518
(function () {                                                                                                         // 1519
    'use strict';                                                                                                      // 1520
                                                                                                                       // 1521
    /* global Util */                                                                                                  // 1522
                                                                                                                       // 1523
    Extension = function (options) {                                                                                   // 1524
        Util.extend(this, options);                                                                                    // 1525
    };                                                                                                                 // 1526
                                                                                                                       // 1527
    Extension.extend = function (protoProps) {                                                                         // 1528
        // magic extender thinger. mostly borrowed from backbone/goog.inherits                                         // 1529
        // place this function on some thing you want extend-able.                                                     // 1530
        //                                                                                                             // 1531
        // example:                                                                                                    // 1532
        //                                                                                                             // 1533
        //      function Thing(args){                                                                                  // 1534
        //          this.options = args;                                                                               // 1535
        //      }                                                                                                      // 1536
        //                                                                                                             // 1537
        //      Thing.prototype = { foo: "bar" };                                                                      // 1538
        //      Thing.extend = extenderify;                                                                            // 1539
        //                                                                                                             // 1540
        //      var ThingTwo = Thing.extend({ foo: "baz" });                                                           // 1541
        //                                                                                                             // 1542
        //      var thingOne = new Thing(); // foo === "bar"                                                           // 1543
        //      var thingTwo = new ThingTwo(); // foo === "baz"                                                        // 1544
        //                                                                                                             // 1545
        //      which seems like some simply shallow copy nonsense                                                     // 1546
        //      at first, but a lot more is going on there.                                                            // 1547
        //                                                                                                             // 1548
        //      passing a `constructor` to the extend props                                                            // 1549
        //      will cause the instance to instantiate through that                                                    // 1550
        //      instead of the parent's constructor.                                                                   // 1551
                                                                                                                       // 1552
        var parent = this,                                                                                             // 1553
            child;                                                                                                     // 1554
                                                                                                                       // 1555
        // The constructor function for the new subclass is either defined by you                                      // 1556
        // (the "constructor" property in your `extend` definition), or defaulted                                      // 1557
        // by us to simply call the parent's constructor.                                                              // 1558
                                                                                                                       // 1559
        if (protoProps && protoProps.hasOwnProperty('constructor')) {                                                  // 1560
            child = protoProps.constructor;                                                                            // 1561
        } else {                                                                                                       // 1562
            child = function () {                                                                                      // 1563
                return parent.apply(this, arguments);                                                                  // 1564
            };                                                                                                         // 1565
        }                                                                                                              // 1566
                                                                                                                       // 1567
        // das statics (.extend comes over, so your subclass can have subclasses too)                                  // 1568
        Util.extend(child, parent);                                                                                    // 1569
                                                                                                                       // 1570
        // Set the prototype chain to inherit from `parent`, without calling                                           // 1571
        // `parent`'s constructor function.                                                                            // 1572
        var Surrogate = function () {                                                                                  // 1573
            this.constructor = child;                                                                                  // 1574
        };                                                                                                             // 1575
        Surrogate.prototype = parent.prototype;                                                                        // 1576
        child.prototype = new Surrogate();                                                                             // 1577
                                                                                                                       // 1578
        if (protoProps) {                                                                                              // 1579
            Util.extend(child.prototype, protoProps);                                                                  // 1580
        }                                                                                                              // 1581
                                                                                                                       // 1582
        // todo: $super?                                                                                               // 1583
                                                                                                                       // 1584
        return child;                                                                                                  // 1585
    };                                                                                                                 // 1586
                                                                                                                       // 1587
    Extension.prototype = {                                                                                            // 1588
        /* init: [function]                                                                                            // 1589
         *                                                                                                             // 1590
         * Called by MediumEditor during initialization.                                                               // 1591
         * The .base property will already have been set to                                                            // 1592
         * current instance of MediumEditor when this is called.                                                       // 1593
         * All helper methods will exist as well                                                                       // 1594
         */                                                                                                            // 1595
        init: function () {},                                                                                          // 1596
                                                                                                                       // 1597
        /* base: [MediumEditor instance]                                                                               // 1598
         *                                                                                                             // 1599
         * If not overriden, this will be set to the current instance                                                  // 1600
         * of MediumEditor, before the init method is called                                                           // 1601
         */                                                                                                            // 1602
        base: undefined,                                                                                               // 1603
                                                                                                                       // 1604
        /* name: [string]                                                                                              // 1605
         *                                                                                                             // 1606
         * 'name' of the extension, used for retrieving the extension.                                                 // 1607
         * If not set, MediumEditor will set this to be the key                                                        // 1608
         * used when passing the extension into MediumEditor via the                                                   // 1609
         * 'extensions' option                                                                                         // 1610
         */                                                                                                            // 1611
        name: undefined,                                                                                               // 1612
                                                                                                                       // 1613
        /* checkState: [function (node)]                                                                               // 1614
         *                                                                                                             // 1615
         * If implemented, this function will be called one or more times                                              // 1616
         * the state of the editor & toolbar are updated.                                                              // 1617
         * When the state is updated, the editor does the following:                                                   // 1618
         *                                                                                                             // 1619
         * 1) Find the parent node containing the current selection                                                    // 1620
         * 2) Call checkState on the extension, passing the node as an argument                                        // 1621
         * 3) Get the parent node of the previous node                                                                 // 1622
         * 4) Repeat steps #2 and #3 until we move outside the parent contenteditable                                  // 1623
         */                                                                                                            // 1624
        checkState: undefined,                                                                                         // 1625
                                                                                                                       // 1626
        /* destroy: [function ()]                                                                                      // 1627
         *                                                                                                             // 1628
         * This method should remove any created html, custom event handlers                                           // 1629
         * or any other cleanup tasks that should be performed.                                                        // 1630
         * If implemented, this function will be called when MediumEditor's                                            // 1631
         * destroy method has been called.                                                                             // 1632
         */                                                                                                            // 1633
        destroy: undefined,                                                                                            // 1634
                                                                                                                       // 1635
        /* As alternatives to checkState, these functions provide a more structured                                    // 1636
         * path to updating the state of an extension (usually a button) whenever                                      // 1637
         * the state of the editor & toolbar are updated.                                                              // 1638
         */                                                                                                            // 1639
                                                                                                                       // 1640
        /* queryCommandState: [function ()]                                                                            // 1641
         *                                                                                                             // 1642
         * If implemented, this function will be called once on each extension                                         // 1643
         * when the state of the editor/toolbar is being updated.                                                      // 1644
         *                                                                                                             // 1645
         * If this function returns a non-null value, the extension will                                               // 1646
         * be ignored as the code climbs the dom tree.                                                                 // 1647
         *                                                                                                             // 1648
         * If this function returns true, and the setActive() function is defined                                      // 1649
         * setActive() will be called                                                                                  // 1650
         */                                                                                                            // 1651
        queryCommandState: undefined,                                                                                  // 1652
                                                                                                                       // 1653
        /* isActive: [function ()]                                                                                     // 1654
         *                                                                                                             // 1655
         * If implemented, this function will be called when MediumEditor                                              // 1656
         * has determined that this extension is 'active' for the current selection.                                   // 1657
         * This may be called when the editor & toolbar are being updated,                                             // 1658
         * but only if queryCommandState() or isAlreadyApplied() functions                                             // 1659
         * are implemented, and when called, return true.                                                              // 1660
         */                                                                                                            // 1661
        isActive: undefined,                                                                                           // 1662
                                                                                                                       // 1663
        /* isAlreadyApplied: [function (node)]                                                                         // 1664
         *                                                                                                             // 1665
         * If implemented, this function is similar to checkState() in                                                 // 1666
         * that it will be called repeatedly as MediumEditor moves up                                                  // 1667
         * the DOM to update the editor & toolbar after a state change.                                                // 1668
         *                                                                                                             // 1669
         * NOTE: This function will NOT be called if checkState() has                                                  // 1670
         * been implemented. This function will NOT be called if                                                       // 1671
         * queryCommandState() is implemented and returns a non-null                                                   // 1672
         * value when called                                                                                           // 1673
         */                                                                                                            // 1674
        isAlreadyApplied: undefined,                                                                                   // 1675
                                                                                                                       // 1676
        /* setActive: [function ()]                                                                                    // 1677
         *                                                                                                             // 1678
         * If implemented, this function is called when MediumEditor knows                                             // 1679
         * that this extension is currently enabled.  Currently, this                                                  // 1680
         * function is called when updating the editor & toolbar, and                                                  // 1681
         * only if queryCommandState() or isAlreadyApplied(node) return                                                // 1682
         * true when called                                                                                            // 1683
         */                                                                                                            // 1684
        setActive: undefined,                                                                                          // 1685
                                                                                                                       // 1686
        /* setInactive: [function ()]                                                                                  // 1687
         *                                                                                                             // 1688
         * If implemented, this function is called when MediumEditor knows                                             // 1689
         * that this extension is currently disabled.  Curently, this                                                  // 1690
         * is called at the beginning of each state change for                                                         // 1691
         * the editor & toolbar. After calling this, MediumEditor                                                      // 1692
         * will attempt to update the extension, either via checkState()                                               // 1693
         * or the combination of queryCommandState(), isAlreadyApplied(node),                                          // 1694
         * isActive(), and setActive()                                                                                 // 1695
         */                                                                                                            // 1696
        setInactive: undefined,                                                                                        // 1697
                                                                                                                       // 1698
        /************************ Helpers ************************                                                     // 1699
         * The following are helpers that are either set by MediumEditor                                               // 1700
         * during initialization, or are helper methods which either                                                   // 1701
         * route calls to the MediumEditor instance or provide common                                                  // 1702
         * functionality for all extensions                                                                            // 1703
         *********************************************************/                                                    // 1704
                                                                                                                       // 1705
        /* window: [Window]                                                                                            // 1706
         *                                                                                                             // 1707
         * If not overriden, this will be set to the window object                                                     // 1708
         * to be used by MediumEditor and its extensions.  This is                                                     // 1709
         * passed via the 'contentWindow' option to MediumEditor                                                       // 1710
         * and is the global 'window' object by default                                                                // 1711
         */                                                                                                            // 1712
        'window': undefined,                                                                                           // 1713
                                                                                                                       // 1714
        /* document: [Document]                                                                                        // 1715
         *                                                                                                             // 1716
         * If not overriden, this will be set to the document object                                                   // 1717
         * to be used by MediumEditor and its extensions. This is                                                      // 1718
         * passed via the 'ownerDocument' optin to MediumEditor                                                        // 1719
         * and is the global 'document' object by default                                                              // 1720
         */                                                                                                            // 1721
        'document': undefined,                                                                                         // 1722
                                                                                                                       // 1723
        /* getEditorElements: [function ()]                                                                            // 1724
         *                                                                                                             // 1725
         * Helper function which returns an array containing                                                           // 1726
         * all the contenteditable elements for this instance                                                          // 1727
         * of MediumEditor                                                                                             // 1728
         */                                                                                                            // 1729
        getEditorElements: function () {                                                                               // 1730
            return this.base.elements;                                                                                 // 1731
        },                                                                                                             // 1732
                                                                                                                       // 1733
        /* getEditorId: [function ()]                                                                                  // 1734
         *                                                                                                             // 1735
         * Helper function which returns a unique identifier                                                           // 1736
         * for this instance of MediumEditor                                                                           // 1737
         */                                                                                                            // 1738
        getEditorId: function () {                                                                                     // 1739
            return this.base.id;                                                                                       // 1740
        },                                                                                                             // 1741
                                                                                                                       // 1742
        /* getEditorOptions: [function (option)]                                                                       // 1743
         *                                                                                                             // 1744
         * Helper function which returns the value of an option                                                        // 1745
         * used to initialize this instance of MediumEditor                                                            // 1746
         */                                                                                                            // 1747
        getEditorOption: function (option) {                                                                           // 1748
            return this.base.options[option];                                                                          // 1749
        }                                                                                                              // 1750
    };                                                                                                                 // 1751
                                                                                                                       // 1752
    /* List of method names to add to the prototype of Extension                                                       // 1753
     * Each of these methods will be defined as helpers that                                                           // 1754
     * just call directly into the MediumEditor instance.                                                              // 1755
     *                                                                                                                 // 1756
     * example for 'on' method:                                                                                        // 1757
     * Extension.prototype.on = function () {                                                                          // 1758
     *     return this.base.on.apply(this.base, arguments);                                                            // 1759
     * }                                                                                                               // 1760
     */                                                                                                                // 1761
    [                                                                                                                  // 1762
        // general helpers                                                                                             // 1763
        'execAction',                                                                                                  // 1764
                                                                                                                       // 1765
        // event handling                                                                                              // 1766
        'on',                                                                                                          // 1767
        'off',                                                                                                         // 1768
        'subscribe',                                                                                                   // 1769
        'trigger'                                                                                                      // 1770
                                                                                                                       // 1771
    ].forEach(function (helper) {                                                                                      // 1772
        Extension.prototype[helper] = function () {                                                                    // 1773
            return this.base[helper].apply(this.base, arguments);                                                      // 1774
        };                                                                                                             // 1775
    });                                                                                                                // 1776
})();                                                                                                                  // 1777
                                                                                                                       // 1778
var Selection;                                                                                                         // 1779
                                                                                                                       // 1780
(function () {                                                                                                         // 1781
    'use strict';                                                                                                      // 1782
                                                                                                                       // 1783
    function filterOnlyParentElements(node) {                                                                          // 1784
        if (Util.isBlockContainer(node)) {                                                                             // 1785
            return NodeFilter.FILTER_ACCEPT;                                                                           // 1786
        } else {                                                                                                       // 1787
            return NodeFilter.FILTER_SKIP;                                                                             // 1788
        }                                                                                                              // 1789
    }                                                                                                                  // 1790
                                                                                                                       // 1791
    Selection = {                                                                                                      // 1792
        findMatchingSelectionParent: function (testElementFunction, contentWindow) {                                   // 1793
            var selection = contentWindow.getSelection(),                                                              // 1794
                range,                                                                                                 // 1795
                current;                                                                                               // 1796
                                                                                                                       // 1797
            if (selection.rangeCount === 0) {                                                                          // 1798
                return false;                                                                                          // 1799
            }                                                                                                          // 1800
                                                                                                                       // 1801
            range = selection.getRangeAt(0);                                                                           // 1802
            current = range.commonAncestorContainer;                                                                   // 1803
                                                                                                                       // 1804
            return Util.traverseUp(current, testElementFunction);                                                      // 1805
        },                                                                                                             // 1806
                                                                                                                       // 1807
        getSelectionElement: function (contentWindow) {                                                                // 1808
            return this.findMatchingSelectionParent(function (el) {                                                    // 1809
                return Util.isMediumEditorElement(el);                                                                 // 1810
            }, contentWindow);                                                                                         // 1811
        },                                                                                                             // 1812
                                                                                                                       // 1813
        // Utility method called from importSelection only                                                             // 1814
        importSelectionMoveCursorPastAnchor: function (selectionState, range) {                                        // 1815
            var nodeInsideAnchorTagFunction = function (node) {                                                        // 1816
                return node.nodeName.toLowerCase() === 'a';                                                            // 1817
            };                                                                                                         // 1818
            if (selectionState.start === selectionState.end &&                                                         // 1819
                    range.startContainer.nodeType === 3 &&                                                             // 1820
                    range.startOffset === range.startContainer.nodeValue.length &&                                     // 1821
                    Util.traverseUp(range.startContainer, nodeInsideAnchorTagFunction)) {                              // 1822
                var prevNode = range.startContainer,                                                                   // 1823
                    currentNode = range.startContainer.parentNode;                                                     // 1824
                while (currentNode !== null && currentNode.nodeName.toLowerCase() !== 'a') {                           // 1825
                    if (currentNode.childNodes[currentNode.childNodes.length - 1] !== prevNode) {                      // 1826
                        currentNode = null;                                                                            // 1827
                    } else {                                                                                           // 1828
                        prevNode = currentNode;                                                                        // 1829
                        currentNode = currentNode.parentNode;                                                          // 1830
                    }                                                                                                  // 1831
                }                                                                                                      // 1832
                if (currentNode !== null && currentNode.nodeName.toLowerCase() === 'a') {                              // 1833
                    var currentNodeIndex = null;                                                                       // 1834
                    for (var i = 0; currentNodeIndex === null && i < currentNode.parentNode.childNodes.length; i++) {  // 1835
                        if (currentNode.parentNode.childNodes[i] === currentNode) {                                    // 1836
                            currentNodeIndex = i;                                                                      // 1837
                        }                                                                                              // 1838
                    }                                                                                                  // 1839
                    range.setStart(currentNode.parentNode, currentNodeIndex + 1);                                      // 1840
                    range.collapse(true);                                                                              // 1841
                }                                                                                                      // 1842
            }                                                                                                          // 1843
            return range;                                                                                              // 1844
        },                                                                                                             // 1845
                                                                                                                       // 1846
        // Returns 0 unless the cursor is within or preceded by empty paragraphs/blocks,                               // 1847
        // in which case it returns the count of such preceding paragraphs, including                                  // 1848
        // the empty paragraph in which the cursor itself may be embedded.                                             // 1849
        getIndexRelativeToAdjacentEmptyBlocks: function (doc, root, cursorContainer, cursorOffset) {                   // 1850
            // If there is text in front of the cursor, that means there isn't only empty blocks before it             // 1851
            if (cursorContainer.nodeType === 3 && cursorOffset > 0) {                                                  // 1852
                return 0;                                                                                              // 1853
            }                                                                                                          // 1854
                                                                                                                       // 1855
            // Check if the block that contains the cursor has any other text in front of the cursor                   // 1856
            var node = cursorContainer;                                                                                // 1857
            if (node.nodeType !== 3) {                                                                                 // 1858
                //node = cursorContainer.childNodes.length === cursorOffset ? null : cursorContainer.childNodes[cursorOffset];
                node = cursorContainer.childNodes[cursorOffset];                                                       // 1860
            }                                                                                                          // 1861
            if (node && !Util.isElementAtBeginningOfBlock(node)) {                                                     // 1862
                return 0;                                                                                              // 1863
            }                                                                                                          // 1864
                                                                                                                       // 1865
            // Walk over block elements, counting number of empty blocks between last piece of text                    // 1866
            // and the block the cursor is in                                                                          // 1867
            var treeWalker = doc.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, filterOnlyParentElements, false),     // 1868
                emptyBlocksCount = 0;                                                                                  // 1869
            while (treeWalker.nextNode()) {                                                                            // 1870
                var blockIsEmpty = treeWalker.currentNode.textContent === '';                                          // 1871
                if (blockIsEmpty || emptyBlocksCount > 0) {                                                            // 1872
                    emptyBlocksCount += 1;                                                                             // 1873
                }                                                                                                      // 1874
                if (Util.isDescendant(treeWalker.currentNode, cursorContainer, true)) {                                // 1875
                    return emptyBlocksCount;                                                                           // 1876
                }                                                                                                      // 1877
                if (!blockIsEmpty) {                                                                                   // 1878
                    emptyBlocksCount = 0;                                                                              // 1879
                }                                                                                                      // 1880
            }                                                                                                          // 1881
                                                                                                                       // 1882
            return emptyBlocksCount;                                                                                   // 1883
        },                                                                                                             // 1884
                                                                                                                       // 1885
        selectionInContentEditableFalse: function (contentWindow) {                                                    // 1886
            // determine if the current selection is exclusively inside                                                // 1887
            // a contenteditable="false", though treat the case of an                                                  // 1888
            // explicit contenteditable="true" inside a "false" as false.                                              // 1889
            var sawtrue,                                                                                               // 1890
                sawfalse = this.findMatchingSelectionParent(function (el) {                                            // 1891
                    var ce = el && el.getAttribute('contenteditable');                                                 // 1892
                    if (ce === 'true') {                                                                               // 1893
                        sawtrue = true;                                                                                // 1894
                    }                                                                                                  // 1895
                    return el.nodeName !== '#text' && ce === 'false';                                                  // 1896
                }, contentWindow);                                                                                     // 1897
                                                                                                                       // 1898
            return !sawtrue && sawfalse;                                                                               // 1899
        },                                                                                                             // 1900
                                                                                                                       // 1901
        // http://stackoverflow.com/questions/4176923/html-of-selected-text                                            // 1902
        // by Tim Down                                                                                                 // 1903
        getSelectionHtml: function getSelectionHtml(doc) {                                                             // 1904
            var i,                                                                                                     // 1905
                html = '',                                                                                             // 1906
                sel = doc.getSelection(),                                                                              // 1907
                len,                                                                                                   // 1908
                container;                                                                                             // 1909
            if (sel.rangeCount) {                                                                                      // 1910
                container = doc.createElement('div');                                                                  // 1911
                for (i = 0, len = sel.rangeCount; i < len; i += 1) {                                                   // 1912
                    container.appendChild(sel.getRangeAt(i).cloneContents());                                          // 1913
                }                                                                                                      // 1914
                html = container.innerHTML;                                                                            // 1915
            }                                                                                                          // 1916
            return html;                                                                                               // 1917
        },                                                                                                             // 1918
                                                                                                                       // 1919
        /**                                                                                                            // 1920
         *  Find the caret position within an element irrespective of any inline tags it may contain.                  // 1921
         *                                                                                                             // 1922
         *  @param {DOMElement} An element containing the cursor to find offsets relative to.                          // 1923
         *  @param {Range} A Range representing cursor position. Will window.getSelection if none is passed.           // 1924
         *  @return {Object} 'left' and 'right' attributes contain offsets from begining and end of Element            // 1925
         */                                                                                                            // 1926
        getCaretOffsets: function getCaretOffsets(element, range) {                                                    // 1927
            var preCaretRange, postCaretRange;                                                                         // 1928
                                                                                                                       // 1929
            if (!range) {                                                                                              // 1930
                range = window.getSelection().getRangeAt(0);                                                           // 1931
            }                                                                                                          // 1932
                                                                                                                       // 1933
            preCaretRange = range.cloneRange();                                                                        // 1934
            postCaretRange = range.cloneRange();                                                                       // 1935
                                                                                                                       // 1936
            preCaretRange.selectNodeContents(element);                                                                 // 1937
            preCaretRange.setEnd(range.endContainer, range.endOffset);                                                 // 1938
                                                                                                                       // 1939
            postCaretRange.selectNodeContents(element);                                                                // 1940
            postCaretRange.setStart(range.endContainer, range.endOffset);                                              // 1941
                                                                                                                       // 1942
            return {                                                                                                   // 1943
                left: preCaretRange.toString().length,                                                                 // 1944
                right: postCaretRange.toString().length                                                                // 1945
            };                                                                                                         // 1946
        },                                                                                                             // 1947
                                                                                                                       // 1948
        // http://stackoverflow.com/questions/15867542/range-object-get-selection-parent-node-chrome-vs-firefox        // 1949
        rangeSelectsSingleNode: function (range) {                                                                     // 1950
            var startNode = range.startContainer;                                                                      // 1951
            return startNode === range.endContainer &&                                                                 // 1952
                startNode.hasChildNodes() &&                                                                           // 1953
                range.endOffset === range.startOffset + 1;                                                             // 1954
        },                                                                                                             // 1955
                                                                                                                       // 1956
        getSelectedParentElement: function (range) {                                                                   // 1957
            if (!range) {                                                                                              // 1958
                return null;                                                                                           // 1959
            }                                                                                                          // 1960
                                                                                                                       // 1961
            // Selection encompasses a single element                                                                  // 1962
            if (this.rangeSelectsSingleNode(range) && range.startContainer.childNodes[range.startOffset].nodeType !== 3) {
                return range.startContainer.childNodes[range.startOffset];                                             // 1964
            }                                                                                                          // 1965
                                                                                                                       // 1966
            // Selection range starts inside a text node, so get its parent                                            // 1967
            if (range.startContainer.nodeType === 3) {                                                                 // 1968
                return range.startContainer.parentNode;                                                                // 1969
            }                                                                                                          // 1970
                                                                                                                       // 1971
            // Selection starts inside an element                                                                      // 1972
            return range.startContainer;                                                                               // 1973
        },                                                                                                             // 1974
                                                                                                                       // 1975
        getSelectedElements: function (doc) {                                                                          // 1976
            var selection = doc.getSelection(),                                                                        // 1977
                range,                                                                                                 // 1978
                toRet,                                                                                                 // 1979
                currNode;                                                                                              // 1980
                                                                                                                       // 1981
            if (!selection.rangeCount || selection.isCollapsed || !selection.getRangeAt(0).commonAncestorContainer) {  // 1982
                return [];                                                                                             // 1983
            }                                                                                                          // 1984
                                                                                                                       // 1985
            range = selection.getRangeAt(0);                                                                           // 1986
                                                                                                                       // 1987
            if (range.commonAncestorContainer.nodeType === 3) {                                                        // 1988
                toRet = [];                                                                                            // 1989
                currNode = range.commonAncestorContainer;                                                              // 1990
                while (currNode.parentNode && currNode.parentNode.childNodes.length === 1) {                           // 1991
                    toRet.push(currNode.parentNode);                                                                   // 1992
                    currNode = currNode.parentNode;                                                                    // 1993
                }                                                                                                      // 1994
                                                                                                                       // 1995
                return toRet;                                                                                          // 1996
            }                                                                                                          // 1997
                                                                                                                       // 1998
            return [].filter.call(range.commonAncestorContainer.getElementsByTagName('*'), function (el) {             // 1999
                return (typeof selection.containsNode === 'function') ? selection.containsNode(el, true) : true;       // 2000
            });                                                                                                        // 2001
        },                                                                                                             // 2002
                                                                                                                       // 2003
        selectNode: function (node, doc) {                                                                             // 2004
            var range = doc.createRange(),                                                                             // 2005
                sel = doc.getSelection();                                                                              // 2006
                                                                                                                       // 2007
            range.selectNodeContents(node);                                                                            // 2008
            sel.removeAllRanges();                                                                                     // 2009
            sel.addRange(range);                                                                                       // 2010
        },                                                                                                             // 2011
                                                                                                                       // 2012
        select: function (doc, startNode, startOffset, endNode, endOffset) {                                           // 2013
            doc.getSelection().removeAllRanges();                                                                      // 2014
            var range = doc.createRange();                                                                             // 2015
            range.setStart(startNode, startOffset);                                                                    // 2016
            if (endNode) {                                                                                             // 2017
                range.setEnd(endNode, endOffset);                                                                      // 2018
            } else {                                                                                                   // 2019
                range.collapse(true);                                                                                  // 2020
            }                                                                                                          // 2021
            doc.getSelection().addRange(range);                                                                        // 2022
            return range;                                                                                              // 2023
        },                                                                                                             // 2024
                                                                                                                       // 2025
        /**                                                                                                            // 2026
         * Move cursor to the given node with the given offset.                                                        // 2027
         *                                                                                                             // 2028
         * @param  {DomDocument} doc     Current document                                                              // 2029
         * @param  {DomElement}  node    Element where to jump                                                         // 2030
         * @param  {integer}     offset  Where in the element should we jump, 0 by default                             // 2031
         */                                                                                                            // 2032
        moveCursor: function (doc, node, offset) {                                                                     // 2033
            this.select(doc, node, offset);                                                                            // 2034
        },                                                                                                             // 2035
                                                                                                                       // 2036
        getSelectionRange: function (ownerDocument) {                                                                  // 2037
            var selection = ownerDocument.getSelection();                                                              // 2038
            if (selection.rangeCount === 0) {                                                                          // 2039
                return null;                                                                                           // 2040
            }                                                                                                          // 2041
            return selection.getRangeAt(0);                                                                            // 2042
        },                                                                                                             // 2043
                                                                                                                       // 2044
        // http://stackoverflow.com/questions/1197401/how-can-i-get-the-element-the-caret-is-in-with-javascript-when-using-contentedi
        // by You                                                                                                      // 2046
        getSelectionStart: function (ownerDocument) {                                                                  // 2047
            var node = ownerDocument.getSelection().anchorNode,                                                        // 2048
                startNode = (node && node.nodeType === 3 ? node.parentNode : node);                                    // 2049
                                                                                                                       // 2050
            return startNode;                                                                                          // 2051
        }                                                                                                              // 2052
    };                                                                                                                 // 2053
}());                                                                                                                  // 2054
                                                                                                                       // 2055
var Events;                                                                                                            // 2056
                                                                                                                       // 2057
(function () {                                                                                                         // 2058
    'use strict';                                                                                                      // 2059
                                                                                                                       // 2060
    Events = function (instance) {                                                                                     // 2061
        this.base = instance;                                                                                          // 2062
        this.options = this.base.options;                                                                              // 2063
        this.events = [];                                                                                              // 2064
        this.customEvents = {};                                                                                        // 2065
        this.listeners = {};                                                                                           // 2066
    };                                                                                                                 // 2067
                                                                                                                       // 2068
    Events.prototype = {                                                                                               // 2069
        InputEventOnContenteditableSupported: !Util.isIE,                                                              // 2070
                                                                                                                       // 2071
        // Helpers for event handling                                                                                  // 2072
                                                                                                                       // 2073
        attachDOMEvent: function (target, event, listener, useCapture) {                                               // 2074
            target.addEventListener(event, listener, useCapture);                                                      // 2075
            this.events.push([target, event, listener, useCapture]);                                                   // 2076
        },                                                                                                             // 2077
                                                                                                                       // 2078
        detachDOMEvent: function (target, event, listener, useCapture) {                                               // 2079
            var index = this.indexOfListener(target, event, listener, useCapture),                                     // 2080
                e;                                                                                                     // 2081
            if (index !== -1) {                                                                                        // 2082
                e = this.events.splice(index, 1)[0];                                                                   // 2083
                e[0].removeEventListener(e[1], e[2], e[3]);                                                            // 2084
            }                                                                                                          // 2085
        },                                                                                                             // 2086
                                                                                                                       // 2087
        indexOfListener: function (target, event, listener, useCapture) {                                              // 2088
            var i, n, item;                                                                                            // 2089
            for (i = 0, n = this.events.length; i < n; i = i + 1) {                                                    // 2090
                item = this.events[i];                                                                                 // 2091
                if (item[0] === target && item[1] === event && item[2] === listener && item[3] === useCapture) {       // 2092
                    return i;                                                                                          // 2093
                }                                                                                                      // 2094
            }                                                                                                          // 2095
            return -1;                                                                                                 // 2096
        },                                                                                                             // 2097
                                                                                                                       // 2098
        detachAllDOMEvents: function () {                                                                              // 2099
            var e = this.events.pop();                                                                                 // 2100
            while (e) {                                                                                                // 2101
                e[0].removeEventListener(e[1], e[2], e[3]);                                                            // 2102
                e = this.events.pop();                                                                                 // 2103
            }                                                                                                          // 2104
        },                                                                                                             // 2105
                                                                                                                       // 2106
        // custom events                                                                                               // 2107
        attachCustomEvent: function (event, listener) {                                                                // 2108
            this.setupListener(event);                                                                                 // 2109
            if (!this.customEvents[event]) {                                                                           // 2110
                this.customEvents[event] = [];                                                                         // 2111
            }                                                                                                          // 2112
            this.customEvents[event].push(listener);                                                                   // 2113
        },                                                                                                             // 2114
                                                                                                                       // 2115
        detachCustomEvent: function (event, listener) {                                                                // 2116
            var index = this.indexOfCustomListener(event, listener);                                                   // 2117
            if (index !== -1) {                                                                                        // 2118
                this.customEvents[event].splice(index, 1);                                                             // 2119
                // TODO: If array is empty, should detach internal listeners via destroyListener()                     // 2120
            }                                                                                                          // 2121
        },                                                                                                             // 2122
                                                                                                                       // 2123
        indexOfCustomListener: function (event, listener) {                                                            // 2124
            if (!this.customEvents[event] || !this.customEvents[event].length) {                                       // 2125
                return -1;                                                                                             // 2126
            }                                                                                                          // 2127
                                                                                                                       // 2128
            return this.customEvents[event].indexOf(listener);                                                         // 2129
        },                                                                                                             // 2130
                                                                                                                       // 2131
        detachAllCustomEvents: function () {                                                                           // 2132
            this.customEvents = {};                                                                                    // 2133
            // TODO: Should detach internal listeners here via destroyListener()                                       // 2134
        },                                                                                                             // 2135
                                                                                                                       // 2136
        triggerCustomEvent: function (name, data, editable) {                                                          // 2137
            if (this.customEvents[name]) {                                                                             // 2138
                this.customEvents[name].forEach(function (listener) {                                                  // 2139
                    listener(data, editable);                                                                          // 2140
                });                                                                                                    // 2141
            }                                                                                                          // 2142
        },                                                                                                             // 2143
                                                                                                                       // 2144
        // Cleaning up                                                                                                 // 2145
                                                                                                                       // 2146
        destroy: function () {                                                                                         // 2147
            this.detachAllDOMEvents();                                                                                 // 2148
            this.detachAllCustomEvents();                                                                              // 2149
            this.detachExecCommand();                                                                                  // 2150
                                                                                                                       // 2151
            if (this.base.elements) {                                                                                  // 2152
                this.base.elements.forEach(function (element) {                                                        // 2153
                    element.removeAttribute('data-medium-focused');                                                    // 2154
                });                                                                                                    // 2155
            }                                                                                                          // 2156
        },                                                                                                             // 2157
                                                                                                                       // 2158
        // Listening to calls to document.execCommand                                                                  // 2159
                                                                                                                       // 2160
        // Attach a listener to be notified when document.execCommand is called                                        // 2161
        attachToExecCommand: function () {                                                                             // 2162
            if (this.execCommandListener) {                                                                            // 2163
                return;                                                                                                // 2164
            }                                                                                                          // 2165
                                                                                                                       // 2166
            // Store an instance of the listener so:                                                                   // 2167
            // 1) We only attach to execCommand once                                                                   // 2168
            // 2) We can remove the listener later                                                                     // 2169
            this.execCommandListener = function (execInfo) {                                                           // 2170
                this.handleDocumentExecCommand(execInfo);                                                              // 2171
            }.bind(this);                                                                                              // 2172
                                                                                                                       // 2173
            // Ensure that execCommand has been wrapped correctly                                                      // 2174
            this.wrapExecCommand();                                                                                    // 2175
                                                                                                                       // 2176
            // Add listener to list of execCommand listeners                                                           // 2177
            this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener);                           // 2178
        },                                                                                                             // 2179
                                                                                                                       // 2180
        // Remove our listener for calls to document.execCommand                                                       // 2181
        detachExecCommand: function () {                                                                               // 2182
            var doc = this.options.ownerDocument;                                                                      // 2183
            if (!this.execCommandListener || !doc.execCommand.listeners) {                                             // 2184
                return;                                                                                                // 2185
            }                                                                                                          // 2186
                                                                                                                       // 2187
            // Find the index of this listener in the array of listeners so it can be removed                          // 2188
            var index = doc.execCommand.listeners.indexOf(this.execCommandListener);                                   // 2189
            if (index !== -1) {                                                                                        // 2190
                doc.execCommand.listeners.splice(index, 1);                                                            // 2191
            }                                                                                                          // 2192
                                                                                                                       // 2193
            // If the list of listeners is now empty, put execCommand back to its original state                       // 2194
            if (!doc.execCommand.listeners.length) {                                                                   // 2195
                this.unwrapExecCommand();                                                                              // 2196
            }                                                                                                          // 2197
        },                                                                                                             // 2198
                                                                                                                       // 2199
        // Wrap document.execCommand in a custom method so we can listen to calls to it                                // 2200
        wrapExecCommand: function () {                                                                                 // 2201
            var doc = this.options.ownerDocument;                                                                      // 2202
                                                                                                                       // 2203
            // Ensure all instance of MediumEditor only wrap execCommand once                                          // 2204
            if (doc.execCommand.listeners) {                                                                           // 2205
                return;                                                                                                // 2206
            }                                                                                                          // 2207
                                                                                                                       // 2208
            // Create a wrapper method for execCommand which will:                                                     // 2209
            // 1) Call document.execCommand with the correct arguments                                                 // 2210
            // 2) Loop through any listeners and notify them that execCommand was called                               // 2211
            //    passing extra info on the call                                                                       // 2212
            // 3) Return the result                                                                                    // 2213
            var wrapper = function (aCommandName, aShowDefaultUI, aValueArgument) {                                    // 2214
                var result = doc.execCommand.orig.apply(this, arguments);                                              // 2215
                                                                                                                       // 2216
                if (!doc.execCommand.listeners) {                                                                      // 2217
                    return result;                                                                                     // 2218
                }                                                                                                      // 2219
                                                                                                                       // 2220
                var args = Array.prototype.slice.call(arguments);                                                      // 2221
                doc.execCommand.listeners.forEach(function (listener) {                                                // 2222
                    listener({                                                                                         // 2223
                        command: aCommandName,                                                                         // 2224
                        value: aValueArgument,                                                                         // 2225
                        args: args,                                                                                    // 2226
                        result: result                                                                                 // 2227
                    });                                                                                                // 2228
                });                                                                                                    // 2229
                                                                                                                       // 2230
                return result;                                                                                         // 2231
            };                                                                                                         // 2232
                                                                                                                       // 2233
            // Store a reference to the original execCommand                                                           // 2234
            wrapper.orig = doc.execCommand;                                                                            // 2235
                                                                                                                       // 2236
            // Attach an array for storing listeners                                                                   // 2237
            wrapper.listeners = [];                                                                                    // 2238
                                                                                                                       // 2239
            // Overwrite execCommand                                                                                   // 2240
            doc.execCommand = wrapper;                                                                                 // 2241
        },                                                                                                             // 2242
                                                                                                                       // 2243
        // Revert document.execCommand back to its original self                                                       // 2244
        unwrapExecCommand: function () {                                                                               // 2245
            var doc = this.options.ownerDocument;                                                                      // 2246
            if (!doc.execCommand.orig) {                                                                               // 2247
                return;                                                                                                // 2248
            }                                                                                                          // 2249
                                                                                                                       // 2250
            // Use the reference to the original execCommand to revert back                                            // 2251
            doc.execCommand = doc.execCommand.orig;                                                                    // 2252
        },                                                                                                             // 2253
                                                                                                                       // 2254
        // Listening to browser events to emit events medium-editor cares about                                        // 2255
        setupListener: function (name) {                                                                               // 2256
            if (this.listeners[name]) {                                                                                // 2257
                return;                                                                                                // 2258
            }                                                                                                          // 2259
                                                                                                                       // 2260
            switch (name) {                                                                                            // 2261
                case 'externalInteraction':                                                                            // 2262
                    // Detecting when user has interacted with elements outside of MediumEditor                        // 2263
                    this.attachDOMEvent(this.options.ownerDocument.body, 'mousedown', this.handleBodyMousedown.bind(this), true);
                    this.attachDOMEvent(this.options.ownerDocument.body, 'click', this.handleBodyClick.bind(this), true);
                    this.attachDOMEvent(this.options.ownerDocument.body, 'focus', this.handleBodyFocus.bind(this), true);
                    break;                                                                                             // 2267
                case 'blur':                                                                                           // 2268
                    // Detecting when focus is lost                                                                    // 2269
                    this.setupListener('externalInteraction');                                                         // 2270
                    break;                                                                                             // 2271
                case 'focus':                                                                                          // 2272
                    // Detecting when focus moves into some part of MediumEditor                                       // 2273
                    this.setupListener('externalInteraction');                                                         // 2274
                    break;                                                                                             // 2275
                case 'editableInput':                                                                                  // 2276
                    // setup cache for knowing when the content has changed                                            // 2277
                    this.contentCache = [];                                                                            // 2278
                    this.base.elements.forEach(function (element) {                                                    // 2279
                        this.contentCache[element.getAttribute('medium-editor-index')] = element.innerHTML;            // 2280
                                                                                                                       // 2281
                        // Attach to the 'oninput' event, handled correctly by most browsers                           // 2282
                        if (this.InputEventOnContenteditableSupported) {                                               // 2283
                            this.attachDOMEvent(element, 'input', this.handleInput.bind(this));                        // 2284
                        }                                                                                              // 2285
                    }.bind(this));                                                                                     // 2286
                                                                                                                       // 2287
                    // For browsers which don't support the input event on contenteditable (IE)                        // 2288
                    // we'll attach to 'selectionchange' on the document and 'keypress' on the editables               // 2289
                    if (!this.InputEventOnContenteditableSupported) {                                                  // 2290
                        this.setupListener('editableKeypress');                                                        // 2291
                        this.keypressUpdateInput = true;                                                               // 2292
                        this.attachDOMEvent(document, 'selectionchange', this.handleDocumentSelectionChange.bind(this));
                        // Listen to calls to execCommand                                                              // 2294
                        this.attachToExecCommand();                                                                    // 2295
                    }                                                                                                  // 2296
                    break;                                                                                             // 2297
                case 'editableClick':                                                                                  // 2298
                    // Detecting click in the contenteditables                                                         // 2299
                    this.attachToEachElement('click', this.handleClick);                                               // 2300
                    break;                                                                                             // 2301
                case 'editableBlur':                                                                                   // 2302
                    // Detecting blur in the contenteditables                                                          // 2303
                    this.attachToEachElement('blur', this.handleBlur);                                                 // 2304
                    break;                                                                                             // 2305
                case 'editableKeypress':                                                                               // 2306
                    // Detecting keypress in the contenteditables                                                      // 2307
                    this.attachToEachElement('keypress', this.handleKeypress);                                         // 2308
                    break;                                                                                             // 2309
                case 'editableKeyup':                                                                                  // 2310
                    // Detecting keyup in the contenteditables                                                         // 2311
                    this.attachToEachElement('keyup', this.handleKeyup);                                               // 2312
                    break;                                                                                             // 2313
                case 'editableKeydown':                                                                                // 2314
                    // Detecting keydown on the contenteditables                                                       // 2315
                    this.attachToEachElement('keydown', this.handleKeydown);                                           // 2316
                    break;                                                                                             // 2317
                case 'editableKeydownEnter':                                                                           // 2318
                    // Detecting keydown for ENTER on the contenteditables                                             // 2319
                    this.setupListener('editableKeydown');                                                             // 2320
                    break;                                                                                             // 2321
                case 'editableKeydownTab':                                                                             // 2322
                    // Detecting keydown for TAB on the contenteditable                                                // 2323
                    this.setupListener('editableKeydown');                                                             // 2324
                    break;                                                                                             // 2325
                case 'editableKeydownDelete':                                                                          // 2326
                    // Detecting keydown for DELETE/BACKSPACE on the contenteditables                                  // 2327
                    this.setupListener('editableKeydown');                                                             // 2328
                    break;                                                                                             // 2329
                case 'editableMouseover':                                                                              // 2330
                    // Detecting mouseover on the contenteditables                                                     // 2331
                    this.attachToEachElement('mouseover', this.handleMouseover);                                       // 2332
                    break;                                                                                             // 2333
                case 'editableDrag':                                                                                   // 2334
                    // Detecting dragover and dragleave on the contenteditables                                        // 2335
                    this.attachToEachElement('dragover', this.handleDragging);                                         // 2336
                    this.attachToEachElement('dragleave', this.handleDragging);                                        // 2337
                    break;                                                                                             // 2338
                case 'editableDrop':                                                                                   // 2339
                    // Detecting drop on the contenteditables                                                          // 2340
                    this.attachToEachElement('drop', this.handleDrop);                                                 // 2341
                    break;                                                                                             // 2342
                case 'editablePaste':                                                                                  // 2343
                    // Detecting paste on the contenteditables                                                         // 2344
                    this.attachToEachElement('paste', this.handlePaste);                                               // 2345
                    break;                                                                                             // 2346
            }                                                                                                          // 2347
            this.listeners[name] = true;                                                                               // 2348
        },                                                                                                             // 2349
                                                                                                                       // 2350
        attachToEachElement: function (name, handler) {                                                                // 2351
            this.base.elements.forEach(function (element) {                                                            // 2352
                this.attachDOMEvent(element, name, handler.bind(this));                                                // 2353
            }, this);                                                                                                  // 2354
        },                                                                                                             // 2355
                                                                                                                       // 2356
        focusElement: function (element) {                                                                             // 2357
            element.focus();                                                                                           // 2358
            this.updateFocus(element, { target: element, type: 'focus' });                                             // 2359
        },                                                                                                             // 2360
                                                                                                                       // 2361
        updateFocus: function (target, eventObj) {                                                                     // 2362
            var toolbar = this.base.getExtensionByName('toolbar'),                                                     // 2363
                toolbarEl = toolbar ? toolbar.getToolbarElement() : null,                                              // 2364
                anchorPreview = this.base.getExtensionByName('anchor-preview'),                                        // 2365
                previewEl = (anchorPreview && anchorPreview.getPreviewElement) ? anchorPreview.getPreviewElement() : null,
                hadFocus = this.base.getFocusedElement(),                                                              // 2367
                toFocus;                                                                                               // 2368
                                                                                                                       // 2369
            // For clicks, we need to know if the mousedown that caused the click happened inside the existing focused element.
            // If so, we don't want to focus another element                                                           // 2371
            if (hadFocus &&                                                                                            // 2372
                    eventObj.type === 'click' &&                                                                       // 2373
                    this.lastMousedownTarget &&                                                                        // 2374
                    (Util.isDescendant(hadFocus, this.lastMousedownTarget, true) ||                                    // 2375
                     Util.isDescendant(toolbarEl, this.lastMousedownTarget, true) ||                                   // 2376
                     Util.isDescendant(previewEl, this.lastMousedownTarget, true))) {                                  // 2377
                toFocus = hadFocus;                                                                                    // 2378
            }                                                                                                          // 2379
                                                                                                                       // 2380
            if (!toFocus) {                                                                                            // 2381
                this.base.elements.some(function (element) {                                                           // 2382
                    // If the target is part of an editor element, this is the element getting focus                   // 2383
                    if (!toFocus && (Util.isDescendant(element, target, true))) {                                      // 2384
                        toFocus = element;                                                                             // 2385
                    }                                                                                                  // 2386
                                                                                                                       // 2387
                    // bail if we found an element that's getting focus                                                // 2388
                    return !!toFocus;                                                                                  // 2389
                }, this);                                                                                              // 2390
            }                                                                                                          // 2391
                                                                                                                       // 2392
            // Check if the target is external (not part of the editor, toolbar, or anchorpreview)                     // 2393
            var externalEvent = !Util.isDescendant(hadFocus, target, true) &&                                          // 2394
                                !Util.isDescendant(toolbarEl, target, true) &&                                         // 2395
                                !Util.isDescendant(previewEl, target, true);                                           // 2396
                                                                                                                       // 2397
            if (toFocus !== hadFocus) {                                                                                // 2398
                // If element has focus, and focus is going outside of editor                                          // 2399
                // Don't blur focused element if clicking on editor, toolbar, or anchorpreview                         // 2400
                if (hadFocus && externalEvent) {                                                                       // 2401
                    // Trigger blur on the editable that has lost focus                                                // 2402
                    hadFocus.removeAttribute('data-medium-focused');                                                   // 2403
                    this.triggerCustomEvent('blur', eventObj, hadFocus);                                               // 2404
                }                                                                                                      // 2405
                                                                                                                       // 2406
                // If focus is going into an editor element                                                            // 2407
                if (toFocus) {                                                                                         // 2408
                    // Trigger focus on the editable that now has focus                                                // 2409
                    toFocus.setAttribute('data-medium-focused', true);                                                 // 2410
                    this.triggerCustomEvent('focus', eventObj, toFocus);                                               // 2411
                }                                                                                                      // 2412
            }                                                                                                          // 2413
                                                                                                                       // 2414
            if (externalEvent) {                                                                                       // 2415
                this.triggerCustomEvent('externalInteraction', eventObj);                                              // 2416
            }                                                                                                          // 2417
        },                                                                                                             // 2418
                                                                                                                       // 2419
        updateInput: function (target, eventObj) {                                                                     // 2420
            // An event triggered which signifies that the user may have changed someting                              // 2421
            // Look in our cache of input for the contenteditables to see if something changed                         // 2422
            var index = target.getAttribute('medium-editor-index');                                                    // 2423
            if (target.innerHTML !== this.contentCache[index]) {                                                       // 2424
                // The content has changed since the last time we checked, fire the event                              // 2425
                this.triggerCustomEvent('editableInput', eventObj, target);                                            // 2426
            }                                                                                                          // 2427
            this.contentCache[index] = target.innerHTML;                                                               // 2428
        },                                                                                                             // 2429
                                                                                                                       // 2430
        handleDocumentSelectionChange: function (event) {                                                              // 2431
            // When selectionchange fires, target and current target are set                                           // 2432
            // to document, since this is where the event is handled                                                   // 2433
            // However, currentTarget will have an 'activeElement' property                                            // 2434
            // which will point to whatever element has focus.                                                         // 2435
            if (event.currentTarget && event.currentTarget.activeElement) {                                            // 2436
                var activeElement = event.currentTarget.activeElement,                                                 // 2437
                    currentTarget;                                                                                     // 2438
                // We can look at the 'activeElement' to determine if the selectionchange has                          // 2439
                // happened within a contenteditable owned by this instance of MediumEditor                            // 2440
                this.base.elements.some(function (element) {                                                           // 2441
                    if (Util.isDescendant(element, activeElement, true)) {                                             // 2442
                        currentTarget = element;                                                                       // 2443
                        return true;                                                                                   // 2444
                    }                                                                                                  // 2445
                    return false;                                                                                      // 2446
                }, this);                                                                                              // 2447
                                                                                                                       // 2448
                // We know selectionchange fired within one of our contenteditables                                    // 2449
                if (currentTarget) {                                                                                   // 2450
                    this.updateInput(currentTarget, { target: activeElement, currentTarget: currentTarget });          // 2451
                }                                                                                                      // 2452
            }                                                                                                          // 2453
        },                                                                                                             // 2454
                                                                                                                       // 2455
        handleDocumentExecCommand: function () {                                                                       // 2456
            // document.execCommand has been called                                                                    // 2457
            // If one of our contenteditables currently has focus, we should                                           // 2458
            // attempt to trigger the 'editableInput' event                                                            // 2459
            var target = this.base.getFocusedElement();                                                                // 2460
            if (target) {                                                                                              // 2461
                this.updateInput(target, { target: target, currentTarget: target });                                   // 2462
            }                                                                                                          // 2463
        },                                                                                                             // 2464
                                                                                                                       // 2465
        handleBodyClick: function (event) {                                                                            // 2466
            this.updateFocus(event.target, event);                                                                     // 2467
        },                                                                                                             // 2468
                                                                                                                       // 2469
        handleBodyFocus: function (event) {                                                                            // 2470
            this.updateFocus(event.target, event);                                                                     // 2471
        },                                                                                                             // 2472
                                                                                                                       // 2473
        handleBodyMousedown: function (event) {                                                                        // 2474
            this.lastMousedownTarget = event.target;                                                                   // 2475
        },                                                                                                             // 2476
                                                                                                                       // 2477
        handleInput: function (event) {                                                                                // 2478
            this.updateInput(event.currentTarget, event);                                                              // 2479
        },                                                                                                             // 2480
                                                                                                                       // 2481
        handleClick: function (event) {                                                                                // 2482
            this.triggerCustomEvent('editableClick', event, event.currentTarget);                                      // 2483
        },                                                                                                             // 2484
                                                                                                                       // 2485
        handleBlur: function (event) {                                                                                 // 2486
            this.triggerCustomEvent('editableBlur', event, event.currentTarget);                                       // 2487
        },                                                                                                             // 2488
                                                                                                                       // 2489
        handleKeypress: function (event) {                                                                             // 2490
            this.triggerCustomEvent('editableKeypress', event, event.currentTarget);                                   // 2491
                                                                                                                       // 2492
            // If we're doing manual detection of the editableInput event we need                                      // 2493
            // to check for input changes during 'keypress'                                                            // 2494
            if (this.keypressUpdateInput) {                                                                            // 2495
                var eventObj = { target: event.target, currentTarget: event.currentTarget };                           // 2496
                                                                                                                       // 2497
                // In IE, we need to let the rest of the event stack complete before we detect                         // 2498
                // changes to input, so using setTimeout here                                                          // 2499
                setTimeout(function () {                                                                               // 2500
                    this.updateInput(eventObj.currentTarget, eventObj);                                                // 2501
                }.bind(this), 0);                                                                                      // 2502
            }                                                                                                          // 2503
        },                                                                                                             // 2504
                                                                                                                       // 2505
        handleKeyup: function (event) {                                                                                // 2506
            this.triggerCustomEvent('editableKeyup', event, event.currentTarget);                                      // 2507
        },                                                                                                             // 2508
                                                                                                                       // 2509
        handleMouseover: function (event) {                                                                            // 2510
            this.triggerCustomEvent('editableMouseover', event, event.currentTarget);                                  // 2511
        },                                                                                                             // 2512
                                                                                                                       // 2513
        handleDragging: function (event) {                                                                             // 2514
            this.triggerCustomEvent('editableDrag', event, event.currentTarget);                                       // 2515
        },                                                                                                             // 2516
                                                                                                                       // 2517
        handleDrop: function (event) {                                                                                 // 2518
            this.triggerCustomEvent('editableDrop', event, event.currentTarget);                                       // 2519
        },                                                                                                             // 2520
                                                                                                                       // 2521
        handlePaste: function (event) {                                                                                // 2522
            this.triggerCustomEvent('editablePaste', event, event.currentTarget);                                      // 2523
        },                                                                                                             // 2524
                                                                                                                       // 2525
        handleKeydown: function (event) {                                                                              // 2526
            this.triggerCustomEvent('editableKeydown', event, event.currentTarget);                                    // 2527
                                                                                                                       // 2528
            if (Util.isKey(event, Util.keyCode.ENTER)) {                                                               // 2529
                return this.triggerCustomEvent('editableKeydownEnter', event, event.currentTarget);                    // 2530
            }                                                                                                          // 2531
                                                                                                                       // 2532
            if (Util.isKey(event, Util.keyCode.TAB)) {                                                                 // 2533
                return this.triggerCustomEvent('editableKeydownTab', event, event.currentTarget);                      // 2534
            }                                                                                                          // 2535
                                                                                                                       // 2536
            if (Util.isKey(event, [Util.keyCode.DELETE, Util.keyCode.BACKSPACE])) {                                    // 2537
                return this.triggerCustomEvent('editableKeydownDelete', event, event.currentTarget);                   // 2538
            }                                                                                                          // 2539
        }                                                                                                              // 2540
    };                                                                                                                 // 2541
}());                                                                                                                  // 2542
                                                                                                                       // 2543
var Button;                                                                                                            // 2544
(function () {                                                                                                         // 2545
    'use strict';                                                                                                      // 2546
                                                                                                                       // 2547
    /*global Extension, buttonDefaults */                                                                              // 2548
                                                                                                                       // 2549
    Button = Extension.extend({                                                                                        // 2550
                                                                                                                       // 2551
        /* Button Options */                                                                                           // 2552
                                                                                                                       // 2553
        /* action: [string]                                                                                            // 2554
         * The action argument to pass to MediumEditor.execAction()                                                    // 2555
         * when the button is clicked                                                                                  // 2556
         */                                                                                                            // 2557
        action: undefined,                                                                                             // 2558
                                                                                                                       // 2559
        /* aria: [string]                                                                                              // 2560
         * The value to add as the aria-label attribute of the button                                                  // 2561
         * element displayed in the toolbar.                                                                           // 2562
         * This is also used as the tooltip for the button                                                             // 2563
         */                                                                                                            // 2564
        aria: undefined,                                                                                               // 2565
                                                                                                                       // 2566
        /* tagNames: [Array]                                                                                           // 2567
         * NOTE: This is not used if useQueryState is set to true.                                                     // 2568
         *                                                                                                             // 2569
         * Array of element tag names that would indicate that this                                                    // 2570
         * button has already been applied. If this action has already                                                 // 2571
         * been applied, the button will be displayed as 'active' in the toolbar                                       // 2572
         *                                                                                                             // 2573
         * Example:                                                                                                    // 2574
         * For 'bold', if the text is ever within a <b> or <strong>                                                    // 2575
         * tag that indicates the text is already bold. So the array                                                   // 2576
         * of tagNames for bold would be: ['b', 'strong']                                                              // 2577
         */                                                                                                            // 2578
        tagNames: undefined,                                                                                           // 2579
                                                                                                                       // 2580
        /* style: [Object]                                                                                             // 2581
         * NOTE: This is not used if useQueryState is set to true.                                                     // 2582
         *                                                                                                             // 2583
         * A pair of css property & value(s) that indicate that this                                                   // 2584
         * button has already been applied. If this action has already                                                 // 2585
         * been applied, the button will be displayed as 'active' in the toolbar                                       // 2586
         * Properties of the object:                                                                                   // 2587
         *   prop [String]: name of the css property                                                                   // 2588
         *   value [String]: value(s) of the css property                                                              // 2589
         *                   multiple values can be separated by a '|'                                                 // 2590
         *                                                                                                             // 2591
         * Example:                                                                                                    // 2592
         * For 'bold', if the text is ever within an element with a 'font-weight'                                      // 2593
         * style property set to '700' or 'bold', that indicates the text                                              // 2594
         * is already bold.  So the style object for bold would be:                                                    // 2595
         * { prop: 'font-weight', value: '700|bold' }                                                                  // 2596
         */                                                                                                            // 2597
        style: undefined,                                                                                              // 2598
                                                                                                                       // 2599
        /* useQueryState: [boolean]                                                                                    // 2600
         * Enables/disables whether this button should use the built-in                                                // 2601
         * document.queryCommandState() method to determine whether                                                    // 2602
         * the action has already been applied.  If the action has already                                             // 2603
         * been applied, the button will be displayed as 'active' in the toolbar                                       // 2604
         *                                                                                                             // 2605
         * Example:                                                                                                    // 2606
         * For 'bold', if this is set to true, the code will call:                                                     // 2607
         * document.queryCommandState('bold') which will return true if the                                            // 2608
         * browser thinks the text is already bold, and false otherwise                                                // 2609
         */                                                                                                            // 2610
        useQueryState: undefined,                                                                                      // 2611
                                                                                                                       // 2612
        /* contentDefault: [string]                                                                                    // 2613
         * Default innerHTML to put inside the button                                                                  // 2614
         */                                                                                                            // 2615
        contentDefault: undefined,                                                                                     // 2616
                                                                                                                       // 2617
        /* contentFA: [string]                                                                                         // 2618
         * The innerHTML to use for the content of the button                                                          // 2619
         * if the `buttonLabels` option for MediumEditor is set to 'fontawesome'                                       // 2620
         */                                                                                                            // 2621
        contentFA: undefined,                                                                                          // 2622
                                                                                                                       // 2623
        /* classList: [Array]                                                                                          // 2624
         * An array of classNames (strings) to be added to the button                                                  // 2625
         */                                                                                                            // 2626
        classList: undefined,                                                                                          // 2627
                                                                                                                       // 2628
        /* attrs: [object]                                                                                             // 2629
         * A set of key-value pairs to add to the button as custom attributes                                          // 2630
         */                                                                                                            // 2631
        attrs: undefined,                                                                                              // 2632
                                                                                                                       // 2633
        /* buttonDefaults: [Object]                                                                                    // 2634
         * Set of default config options for all of the built-in MediumEditor buttons                                  // 2635
         */                                                                                                            // 2636
        defaults: buttonDefaults,                                                                                      // 2637
                                                                                                                       // 2638
        // The button constructor can optionally accept the name of a built-in button                                  // 2639
        // (ie 'bold', 'italic', etc.)                                                                                 // 2640
        // When the name of a button is passed, it will initialize itself with the                                     // 2641
        // configuration for that button                                                                               // 2642
        constructor: function (options) {                                                                              // 2643
            if (Button.isBuiltInButton(options)) {                                                                     // 2644
                Extension.call(this, this.defaults[options]);                                                          // 2645
            } else {                                                                                                   // 2646
                Extension.call(this, options);                                                                         // 2647
            }                                                                                                          // 2648
        },                                                                                                             // 2649
                                                                                                                       // 2650
        init: function () {                                                                                            // 2651
            Extension.prototype.init.apply(this, arguments);                                                           // 2652
                                                                                                                       // 2653
            this.button = this.createButton();                                                                         // 2654
            this.on(this.button, 'click', this.handleClick.bind(this));                                                // 2655
        },                                                                                                             // 2656
                                                                                                                       // 2657
        /* getButton: [function ()]                                                                                    // 2658
         *                                                                                                             // 2659
         * If implemented, this function will be called when                                                           // 2660
         * the toolbar is being created.  The DOM Element returned                                                     // 2661
         * by this function will be appended to the toolbar along                                                      // 2662
         * with any other buttons.                                                                                     // 2663
         */                                                                                                            // 2664
        getButton: function () {                                                                                       // 2665
            return this.button;                                                                                        // 2666
        },                                                                                                             // 2667
                                                                                                                       // 2668
        getAction: function () {                                                                                       // 2669
            return (typeof this.action === 'function') ? this.action(this.base.options) : this.action;                 // 2670
        },                                                                                                             // 2671
                                                                                                                       // 2672
        getAria: function () {                                                                                         // 2673
            return (typeof this.aria === 'function') ? this.aria(this.base.options) : this.aria;                       // 2674
        },                                                                                                             // 2675
                                                                                                                       // 2676
        getTagNames: function () {                                                                                     // 2677
            return (typeof this.tagNames === 'function') ? this.tagNames(this.base.options) : this.tagNames;           // 2678
        },                                                                                                             // 2679
                                                                                                                       // 2680
        createButton: function () {                                                                                    // 2681
            var button = this.document.createElement('button'),                                                        // 2682
                content = this.contentDefault,                                                                         // 2683
                ariaLabel = this.getAria(),                                                                            // 2684
                buttonLabels = this.getEditorOption('buttonLabels');                                                   // 2685
            // Add class names                                                                                         // 2686
            button.classList.add('medium-editor-action');                                                              // 2687
            button.classList.add('medium-editor-action-' + this.name);                                                 // 2688
            if (this.classList) {                                                                                      // 2689
                this.classList.forEach(function (className) {                                                          // 2690
                    button.classList.add(className);                                                                   // 2691
                });                                                                                                    // 2692
            }                                                                                                          // 2693
                                                                                                                       // 2694
            // Add attributes                                                                                          // 2695
            button.setAttribute('data-action', this.getAction());                                                      // 2696
            if (ariaLabel) {                                                                                           // 2697
                button.setAttribute('title', ariaLabel);                                                               // 2698
                button.setAttribute('aria-label', ariaLabel);                                                          // 2699
            }                                                                                                          // 2700
            if (this.attrs) {                                                                                          // 2701
                Object.keys(this.attrs).forEach(function (attr) {                                                      // 2702
                    button.setAttribute(attr, this.attrs[attr]);                                                       // 2703
                }, this);                                                                                              // 2704
            }                                                                                                          // 2705
                                                                                                                       // 2706
            if (buttonLabels === 'fontawesome' && this.contentFA) {                                                    // 2707
                content = this.contentFA;                                                                              // 2708
            }                                                                                                          // 2709
            button.innerHTML = content;                                                                                // 2710
            return button;                                                                                             // 2711
        },                                                                                                             // 2712
                                                                                                                       // 2713
        handleClick: function (event) {                                                                                // 2714
            event.preventDefault();                                                                                    // 2715
            event.stopPropagation();                                                                                   // 2716
                                                                                                                       // 2717
            var action = this.getAction();                                                                             // 2718
                                                                                                                       // 2719
            if (action) {                                                                                              // 2720
                this.execAction(action);                                                                               // 2721
            }                                                                                                          // 2722
        },                                                                                                             // 2723
                                                                                                                       // 2724
        isActive: function () {                                                                                        // 2725
            return this.button.classList.contains(this.getEditorOption('activeButtonClass'));                          // 2726
        },                                                                                                             // 2727
                                                                                                                       // 2728
        setInactive: function () {                                                                                     // 2729
            this.button.classList.remove(this.getEditorOption('activeButtonClass'));                                   // 2730
            delete this.knownState;                                                                                    // 2731
        },                                                                                                             // 2732
                                                                                                                       // 2733
        setActive: function () {                                                                                       // 2734
            this.button.classList.add(this.getEditorOption('activeButtonClass'));                                      // 2735
            delete this.knownState;                                                                                    // 2736
        },                                                                                                             // 2737
                                                                                                                       // 2738
        queryCommandState: function () {                                                                               // 2739
            var queryState = null;                                                                                     // 2740
            if (this.useQueryState) {                                                                                  // 2741
                queryState = this.base.queryCommandState(this.getAction());                                            // 2742
            }                                                                                                          // 2743
            return queryState;                                                                                         // 2744
        },                                                                                                             // 2745
                                                                                                                       // 2746
        isAlreadyApplied: function (node) {                                                                            // 2747
            var isMatch = false,                                                                                       // 2748
                tagNames = this.getTagNames(),                                                                         // 2749
                styleVals,                                                                                             // 2750
                computedStyle;                                                                                         // 2751
                                                                                                                       // 2752
            if (this.knownState === false || this.knownState === true) {                                               // 2753
                return this.knownState;                                                                                // 2754
            }                                                                                                          // 2755
                                                                                                                       // 2756
            if (tagNames && tagNames.length > 0) {                                                                     // 2757
                isMatch = tagNames.indexOf(node.nodeName.toLowerCase()) !== -1;                                        // 2758
            }                                                                                                          // 2759
                                                                                                                       // 2760
            if (!isMatch && this.style) {                                                                              // 2761
                styleVals = this.style.value.split('|');                                                               // 2762
                computedStyle = this.window.getComputedStyle(node, null).getPropertyValue(this.style.prop);            // 2763
                styleVals.forEach(function (val) {                                                                     // 2764
                    if (!this.knownState) {                                                                            // 2765
                        isMatch = (computedStyle.indexOf(val) !== -1);                                                 // 2766
                        // text-decoration is not inherited by default                                                 // 2767
                        // so if the computed style for text-decoration doesn't match                                  // 2768
                        // don't write to knownState so we can fallback to other checks                                // 2769
                        if (isMatch || this.style.prop !== 'text-decoration') {                                        // 2770
                            this.knownState = isMatch;                                                                 // 2771
                        }                                                                                              // 2772
                    }                                                                                                  // 2773
                }, this);                                                                                              // 2774
            }                                                                                                          // 2775
                                                                                                                       // 2776
            return isMatch;                                                                                            // 2777
        }                                                                                                              // 2778
    });                                                                                                                // 2779
                                                                                                                       // 2780
    Button.isBuiltInButton = function (name) {                                                                         // 2781
        return (typeof name === 'string') && Button.prototype.defaults.hasOwnProperty(name);                           // 2782
    };                                                                                                                 // 2783
}());                                                                                                                  // 2784
                                                                                                                       // 2785
var FormExtension;                                                                                                     // 2786
(function () {                                                                                                         // 2787
    'use strict';                                                                                                      // 2788
                                                                                                                       // 2789
    /* global Button */                                                                                                // 2790
                                                                                                                       // 2791
    var noop = function () {};                                                                                         // 2792
                                                                                                                       // 2793
    /* Base functionality for an extension whcih will display                                                          // 2794
     * a 'form' inside the toolbar                                                                                     // 2795
     */                                                                                                                // 2796
    FormExtension = Button.extend({                                                                                    // 2797
                                                                                                                       // 2798
        init: function () {                                                                                            // 2799
            Button.prototype.init.apply(this, arguments);                                                              // 2800
        },                                                                                                             // 2801
                                                                                                                       // 2802
        // default labels for the form buttons                                                                         // 2803
        formSaveLabel: '&#10003;',                                                                                     // 2804
        formCloseLabel: '&times;',                                                                                     // 2805
                                                                                                                       // 2806
        /* hasForm: [boolean]                                                                                          // 2807
         *                                                                                                             // 2808
         * Setting this to true will cause getForm() to be called                                                      // 2809
         * when the toolbar is created, so the form can be appended                                                    // 2810
         * inside the toolbar container                                                                                // 2811
         */                                                                                                            // 2812
        hasForm: true,                                                                                                 // 2813
                                                                                                                       // 2814
        /* getForm: [function ()]                                                                                      // 2815
         *                                                                                                             // 2816
         * When hasForm is true, this function must be implemented                                                     // 2817
         * and return a DOM Element which will be appended to                                                          // 2818
         * the toolbar container. The form should start hidden, and                                                    // 2819
         * the extension can choose when to hide/show it                                                               // 2820
         */                                                                                                            // 2821
        getForm: noop,                                                                                                 // 2822
                                                                                                                       // 2823
        /* isDisplayed: [function ()]                                                                                  // 2824
         *                                                                                                             // 2825
         * This function should return true/false reflecting                                                           // 2826
         * whether the form is currently displayed                                                                     // 2827
         */                                                                                                            // 2828
        isDisplayed: noop,                                                                                             // 2829
                                                                                                                       // 2830
        /* hideForm: [function ()]                                                                                     // 2831
         *                                                                                                             // 2832
         * This function should hide the form element inside                                                           // 2833
         * the toolbar container                                                                                       // 2834
         */                                                                                                            // 2835
        hideForm: noop,                                                                                                // 2836
                                                                                                                       // 2837
        /************************ Helpers ************************                                                     // 2838
         * The following are helpers that are either set by MediumEditor                                               // 2839
         * during initialization, or are helper methods which either                                                   // 2840
         * route calls to the MediumEditor instance or provide common                                                  // 2841
         * functionality for all form extensions                                                                       // 2842
         *********************************************************/                                                    // 2843
                                                                                                                       // 2844
        /* showToolbarDefaultActions: [function ()]                                                                    // 2845
         *                                                                                                             // 2846
         * Helper method which will turn back the toolbar after canceling                                              // 2847
         * the customized form                                                                                         // 2848
         */                                                                                                            // 2849
        showToolbarDefaultActions: function () {                                                                       // 2850
            var toolbar = this.base.getExtensionByName('toolbar');                                                     // 2851
            if (toolbar) {                                                                                             // 2852
                toolbar.showToolbarDefaultActions();                                                                   // 2853
            }                                                                                                          // 2854
        },                                                                                                             // 2855
                                                                                                                       // 2856
        /* hideToolbarDefaultActions: [function ()]                                                                    // 2857
         *                                                                                                             // 2858
         * Helper function which will hide the default contents of the                                                 // 2859
         * toolbar, but leave the toolbar container in the same state                                                  // 2860
         * to allow a form to display its custom contents inside the toolbar                                           // 2861
         */                                                                                                            // 2862
        hideToolbarDefaultActions: function () {                                                                       // 2863
            var toolbar = this.base.getExtensionByName('toolbar');                                                     // 2864
            if (toolbar) {                                                                                             // 2865
                toolbar.hideToolbarDefaultActions();                                                                   // 2866
            }                                                                                                          // 2867
        },                                                                                                             // 2868
                                                                                                                       // 2869
        /* setToolbarPosition: [function ()]                                                                           // 2870
         *                                                                                                             // 2871
         * Helper function which will update the size and position                                                     // 2872
         * of the toolbar based on the toolbar content and the current                                                 // 2873
         * position of the user's selection                                                                            // 2874
         */                                                                                                            // 2875
        setToolbarPosition: function () {                                                                              // 2876
            var toolbar = this.base.getExtensionByName('toolbar');                                                     // 2877
            if (toolbar) {                                                                                             // 2878
                toolbar.setToolbarPosition();                                                                          // 2879
            }                                                                                                          // 2880
        }                                                                                                              // 2881
    });                                                                                                                // 2882
})();                                                                                                                  // 2883
var AnchorForm;                                                                                                        // 2884
(function () {                                                                                                         // 2885
    'use strict';                                                                                                      // 2886
                                                                                                                       // 2887
    /*global Util, Selection, FormExtension */                                                                         // 2888
                                                                                                                       // 2889
    AnchorForm = FormExtension.extend({                                                                                // 2890
        /* Anchor Form Options */                                                                                      // 2891
                                                                                                                       // 2892
        /* customClassOption: [string]  (previously options.anchorButton + options.anchorButtonClass)                  // 2893
         * Custom class name the user can optionally have added to their created links (ie 'button').                  // 2894
         * If passed as a non-empty string, a checkbox will be displayed allowing the user to choose                   // 2895
         * whether to have the class added to the created link or not.                                                 // 2896
         */                                                                                                            // 2897
        customClassOption: null,                                                                                       // 2898
                                                                                                                       // 2899
        /* customClassOptionText: [string]                                                                             // 2900
         * text to be shown in the checkbox when the __customClassOption__ is being used.                              // 2901
         */                                                                                                            // 2902
        customClassOptionText: 'Button',                                                                               // 2903
                                                                                                                       // 2904
        /* linkValidation: [boolean]  (previously options.checkLinkFormat)                                             // 2905
         * enables/disables check for common URL protocols on anchor links.                                            // 2906
         */                                                                                                            // 2907
        linkValidation: false,                                                                                         // 2908
                                                                                                                       // 2909
        /* placeholderText: [string]  (previously options.anchorInputPlaceholder)                                      // 2910
         * text to be shown as placeholder of the anchor input.                                                        // 2911
         */                                                                                                            // 2912
        placeholderText: 'Paste or type a link',                                                                       // 2913
                                                                                                                       // 2914
        /* targetCheckbox: [boolean]  (previously options.anchorTarget)                                                // 2915
         * enables/disables displaying a "Open in new window" checkbox, which when checked                             // 2916
         * changes the `target` attribute of the created link.                                                         // 2917
         */                                                                                                            // 2918
        targetCheckbox: false,                                                                                         // 2919
                                                                                                                       // 2920
        /* targetCheckboxText: [string]  (previously options.anchorInputCheckboxLabel)                                 // 2921
         * text to be shown in the checkbox enabled via the __targetCheckbox__ option.                                 // 2922
         */                                                                                                            // 2923
        targetCheckboxText: 'Open in new window',                                                                      // 2924
                                                                                                                       // 2925
        // Options for the Button base class                                                                           // 2926
        name: 'anchor',                                                                                                // 2927
        action: 'createLink',                                                                                          // 2928
        aria: 'link',                                                                                                  // 2929
        tagNames: ['a'],                                                                                               // 2930
        contentDefault: '<b>#</b>',                                                                                    // 2931
        contentFA: '<i class="fa fa-link"></i>',                                                                       // 2932
                                                                                                                       // 2933
        init: function () {                                                                                            // 2934
            FormExtension.prototype.init.apply(this, arguments);                                                       // 2935
                                                                                                                       // 2936
            this.subscribe('editableKeydown', this.handleKeydown.bind(this));                                          // 2937
        },                                                                                                             // 2938
                                                                                                                       // 2939
        // Called when the button the toolbar is clicked                                                               // 2940
        // Overrides ButtonExtension.handleClick                                                                       // 2941
        handleClick: function (event) {                                                                                // 2942
            event.preventDefault();                                                                                    // 2943
            event.stopPropagation();                                                                                   // 2944
                                                                                                                       // 2945
            var selectedParentElement = Selection.getSelectedParentElement(Selection.getSelectionRange(this.document)),
                firstTextNode = Util.getFirstTextNode(selectedParentElement);                                          // 2947
                                                                                                                       // 2948
            if (Util.getClosestTag(firstTextNode, 'a')) {                                                              // 2949
                return this.execAction('unlink');                                                                      // 2950
            }                                                                                                          // 2951
                                                                                                                       // 2952
            if (!this.isDisplayed()) {                                                                                 // 2953
                this.showForm();                                                                                       // 2954
            }                                                                                                          // 2955
                                                                                                                       // 2956
            return false;                                                                                              // 2957
        },                                                                                                             // 2958
                                                                                                                       // 2959
        // Called when user hits the defined shortcut (CTRL / COMMAND + K)                                             // 2960
        handleKeydown: function (event) {                                                                              // 2961
            if (Util.isKey(event, Util.keyCode.K) && Util.isMetaCtrlKey(event) && !event.shiftKey) {                   // 2962
                this.handleClick(event);                                                                               // 2963
            }                                                                                                          // 2964
        },                                                                                                             // 2965
                                                                                                                       // 2966
        // Called by medium-editor to append form to the toolbar                                                       // 2967
        getForm: function () {                                                                                         // 2968
            if (!this.form) {                                                                                          // 2969
                this.form = this.createForm();                                                                         // 2970
            }                                                                                                          // 2971
            return this.form;                                                                                          // 2972
        },                                                                                                             // 2973
                                                                                                                       // 2974
        getTemplate: function () {                                                                                     // 2975
            var template = [                                                                                           // 2976
                '<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">'     // 2977
            ];                                                                                                         // 2978
                                                                                                                       // 2979
            template.push(                                                                                             // 2980
                '<a href="#" class="medium-editor-toolbar-save">',                                                     // 2981
                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-check"></i>' : this.formSaveLabel,
                '</a>'                                                                                                 // 2983
            );                                                                                                         // 2984
                                                                                                                       // 2985
            template.push('<a href="#" class="medium-editor-toolbar-close">',                                          // 2986
                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-times"></i>' : this.formCloseLabel,
                '</a>');                                                                                               // 2988
                                                                                                                       // 2989
            // both of these options are slightly moot with the ability to                                             // 2990
            // override the various form buildup/serialize functions.                                                  // 2991
                                                                                                                       // 2992
            if (this.targetCheckbox) {                                                                                 // 2993
                // fixme: ideally, this targetCheckboxText would be a formLabel too,                                   // 2994
                // figure out how to deprecate? also consider `fa-` icon default implcations.                          // 2995
                template.push(                                                                                         // 2996
                    '<input type="checkbox" class="medium-editor-toolbar-anchor-target">',                             // 2997
                    '<label>',                                                                                         // 2998
                    this.targetCheckboxText,                                                                           // 2999
                    '</label>'                                                                                         // 3000
                );                                                                                                     // 3001
            }                                                                                                          // 3002
                                                                                                                       // 3003
            if (this.customClassOption) {                                                                              // 3004
                // fixme: expose this `Button` text as a formLabel property, too                                       // 3005
                // and provide similar access to a `fa-` icon default.                                                 // 3006
                template.push(                                                                                         // 3007
                    '<input type="checkbox" class="medium-editor-toolbar-anchor-button">',                             // 3008
                    '<label>',                                                                                         // 3009
                    this.customClassOptionText,                                                                        // 3010
                    '</label>'                                                                                         // 3011
                );                                                                                                     // 3012
            }                                                                                                          // 3013
                                                                                                                       // 3014
            return template.join('');                                                                                  // 3015
                                                                                                                       // 3016
        },                                                                                                             // 3017
                                                                                                                       // 3018
        // Used by medium-editor when the default toolbar is to be displayed                                           // 3019
        isDisplayed: function () {                                                                                     // 3020
            return this.getForm().style.display === 'block';                                                           // 3021
        },                                                                                                             // 3022
                                                                                                                       // 3023
        hideForm: function () {                                                                                        // 3024
            this.getForm().style.display = 'none';                                                                     // 3025
            this.getInput().value = '';                                                                                // 3026
        },                                                                                                             // 3027
                                                                                                                       // 3028
        showForm: function (linkValue) {                                                                               // 3029
            var input = this.getInput();                                                                               // 3030
                                                                                                                       // 3031
            this.base.saveSelection();                                                                                 // 3032
            this.hideToolbarDefaultActions();                                                                          // 3033
            this.getForm().style.display = 'block';                                                                    // 3034
            this.setToolbarPosition();                                                                                 // 3035
                                                                                                                       // 3036
            input.value = linkValue || '';                                                                             // 3037
            input.focus();                                                                                             // 3038
        },                                                                                                             // 3039
                                                                                                                       // 3040
        // Called by core when tearing down medium-editor (destroy)                                                    // 3041
        destroy: function () {                                                                                         // 3042
            if (!this.form) {                                                                                          // 3043
                return false;                                                                                          // 3044
            }                                                                                                          // 3045
                                                                                                                       // 3046
            if (this.form.parentNode) {                                                                                // 3047
                this.form.parentNode.removeChild(this.form);                                                           // 3048
            }                                                                                                          // 3049
                                                                                                                       // 3050
            delete this.form;                                                                                          // 3051
        },                                                                                                             // 3052
                                                                                                                       // 3053
        // core methods                                                                                                // 3054
                                                                                                                       // 3055
        getFormOpts: function () {                                                                                     // 3056
            // no notion of private functions? wanted `_getFormOpts`                                                   // 3057
            var targetCheckbox = this.getForm().querySelector('.medium-editor-toolbar-anchor-target'),                 // 3058
                buttonCheckbox = this.getForm().querySelector('.medium-editor-toolbar-anchor-button'),                 // 3059
                opts = {                                                                                               // 3060
                    url: this.getInput().value                                                                         // 3061
                };                                                                                                     // 3062
                                                                                                                       // 3063
            if (this.linkValidation) {                                                                                 // 3064
                opts.url = this.checkLinkFormat(opts.url);                                                             // 3065
            }                                                                                                          // 3066
                                                                                                                       // 3067
            opts.target = '_self';                                                                                     // 3068
            if (targetCheckbox && targetCheckbox.checked) {                                                            // 3069
                opts.target = '_blank';                                                                                // 3070
            }                                                                                                          // 3071
                                                                                                                       // 3072
            if (buttonCheckbox && buttonCheckbox.checked) {                                                            // 3073
                opts.buttonClass = this.customClassOption;                                                             // 3074
            }                                                                                                          // 3075
                                                                                                                       // 3076
            return opts;                                                                                               // 3077
        },                                                                                                             // 3078
                                                                                                                       // 3079
        doFormSave: function () {                                                                                      // 3080
            var opts = this.getFormOpts();                                                                             // 3081
            this.completeFormSave(opts);                                                                               // 3082
        },                                                                                                             // 3083
                                                                                                                       // 3084
        completeFormSave: function (opts) {                                                                            // 3085
            this.base.restoreSelection();                                                                              // 3086
            this.execAction(this.action, opts);                                                                        // 3087
            this.base.checkSelection();                                                                                // 3088
        },                                                                                                             // 3089
                                                                                                                       // 3090
        checkLinkFormat: function (value) {                                                                            // 3091
            var re = /^(https?|ftps?|rtmpt?):\/\/|mailto:/;                                                            // 3092
            return (re.test(value) ? '' : 'http://') + value;                                                          // 3093
        },                                                                                                             // 3094
                                                                                                                       // 3095
        doFormCancel: function () {                                                                                    // 3096
            this.base.restoreSelection();                                                                              // 3097
            this.base.checkSelection();                                                                                // 3098
        },                                                                                                             // 3099
                                                                                                                       // 3100
        // form creation and event handling                                                                            // 3101
        attachFormEvents: function (form) {                                                                            // 3102
            var close = form.querySelector('.medium-editor-toolbar-close'),                                            // 3103
                save = form.querySelector('.medium-editor-toolbar-save'),                                              // 3104
                input = form.querySelector('.medium-editor-toolbar-input');                                            // 3105
                                                                                                                       // 3106
            // Handle clicks on the form itself                                                                        // 3107
            this.on(form, 'click', this.handleFormClick.bind(this));                                                   // 3108
                                                                                                                       // 3109
            // Handle typing in the textbox                                                                            // 3110
            this.on(input, 'keyup', this.handleTextboxKeyup.bind(this));                                               // 3111
                                                                                                                       // 3112
            // Handle close button clicks                                                                              // 3113
            this.on(close, 'click', this.handleCloseClick.bind(this));                                                 // 3114
                                                                                                                       // 3115
            // Handle save button clicks (capture)                                                                     // 3116
            this.on(save, 'click', this.handleSaveClick.bind(this), true);                                             // 3117
                                                                                                                       // 3118
        },                                                                                                             // 3119
                                                                                                                       // 3120
        createForm: function () {                                                                                      // 3121
            var doc = this.document,                                                                                   // 3122
                form = doc.createElement('div');                                                                       // 3123
                                                                                                                       // 3124
            // Anchor Form (div)                                                                                       // 3125
            form.className = 'medium-editor-toolbar-form';                                                             // 3126
            form.id = 'medium-editor-toolbar-form-anchor-' + this.getEditorId();                                       // 3127
            form.innerHTML = this.getTemplate();                                                                       // 3128
            this.attachFormEvents(form);                                                                               // 3129
                                                                                                                       // 3130
            return form;                                                                                               // 3131
        },                                                                                                             // 3132
                                                                                                                       // 3133
        getInput: function () {                                                                                        // 3134
            return this.getForm().querySelector('input.medium-editor-toolbar-input');                                  // 3135
        },                                                                                                             // 3136
                                                                                                                       // 3137
        handleTextboxKeyup: function (event) {                                                                         // 3138
            // For ENTER -> create the anchor                                                                          // 3139
            if (event.keyCode === Util.keyCode.ENTER) {                                                                // 3140
                event.preventDefault();                                                                                // 3141
                this.doFormSave();                                                                                     // 3142
                return;                                                                                                // 3143
            }                                                                                                          // 3144
                                                                                                                       // 3145
            // For ESCAPE -> close the form                                                                            // 3146
            if (event.keyCode === Util.keyCode.ESCAPE) {                                                               // 3147
                event.preventDefault();                                                                                // 3148
                this.doFormCancel();                                                                                   // 3149
            }                                                                                                          // 3150
        },                                                                                                             // 3151
                                                                                                                       // 3152
        handleFormClick: function (event) {                                                                            // 3153
            // make sure not to hide form when clicking inside the form                                                // 3154
            event.stopPropagation();                                                                                   // 3155
        },                                                                                                             // 3156
                                                                                                                       // 3157
        handleSaveClick: function (event) {                                                                            // 3158
            // Clicking Save -> create the anchor                                                                      // 3159
            event.preventDefault();                                                                                    // 3160
            this.doFormSave();                                                                                         // 3161
        },                                                                                                             // 3162
                                                                                                                       // 3163
        handleCloseClick: function (event) {                                                                           // 3164
            // Click Close -> close the form                                                                           // 3165
            event.preventDefault();                                                                                    // 3166
            this.doFormCancel();                                                                                       // 3167
        }                                                                                                              // 3168
    });                                                                                                                // 3169
}());                                                                                                                  // 3170
var AnchorPreview;                                                                                                     // 3171
(function () {                                                                                                         // 3172
    'use strict';                                                                                                      // 3173
                                                                                                                       // 3174
    /*global Util, Extension */                                                                                        // 3175
                                                                                                                       // 3176
    AnchorPreview = Extension.extend({                                                                                 // 3177
        name: 'anchor-preview',                                                                                        // 3178
                                                                                                                       // 3179
        // Anchor Preview Options                                                                                      // 3180
                                                                                                                       // 3181
        /* hideDelay: [number]  (previously options.anchorPreviewHideDelay)                                            // 3182
         * time in milliseconds to show the anchor tag preview after the mouse has left the anchor tag.                // 3183
         */                                                                                                            // 3184
        hideDelay: 500,                                                                                                // 3185
                                                                                                                       // 3186
        /* previewValueSelector: [string]                                                                              // 3187
         * the default selector to locate where to put the activeAnchor value in the preview                           // 3188
         */                                                                                                            // 3189
        previewValueSelector: 'a',                                                                                     // 3190
                                                                                                                       // 3191
        init: function () {                                                                                            // 3192
            this.anchorPreview = this.createPreview();                                                                 // 3193
                                                                                                                       // 3194
            this.getEditorOption('elementsContainer').appendChild(this.anchorPreview);                                 // 3195
                                                                                                                       // 3196
            this.attachToEditables();                                                                                  // 3197
        },                                                                                                             // 3198
                                                                                                                       // 3199
        getPreviewElement: function () {                                                                               // 3200
            return this.anchorPreview;                                                                                 // 3201
        },                                                                                                             // 3202
                                                                                                                       // 3203
        createPreview: function () {                                                                                   // 3204
            var el = this.document.createElement('div');                                                               // 3205
                                                                                                                       // 3206
            el.id = 'medium-editor-anchor-preview-' + this.getEditorId();                                              // 3207
            el.className = 'medium-editor-anchor-preview';                                                             // 3208
            el.innerHTML = this.getTemplate();                                                                         // 3209
                                                                                                                       // 3210
            this.on(el, 'click', this.handleClick.bind(this));                                                         // 3211
                                                                                                                       // 3212
            return el;                                                                                                 // 3213
        },                                                                                                             // 3214
                                                                                                                       // 3215
        getTemplate: function () {                                                                                     // 3216
            return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">' +    // 3217
                '    <a class="medium-editor-toolbar-anchor-preview-inner"></a>' +                                     // 3218
                '</div>';                                                                                              // 3219
        },                                                                                                             // 3220
                                                                                                                       // 3221
        destroy: function () {                                                                                         // 3222
            if (this.anchorPreview) {                                                                                  // 3223
                if (this.anchorPreview.parentNode) {                                                                   // 3224
                    this.anchorPreview.parentNode.removeChild(this.anchorPreview);                                     // 3225
                }                                                                                                      // 3226
                delete this.anchorPreview;                                                                             // 3227
            }                                                                                                          // 3228
        },                                                                                                             // 3229
                                                                                                                       // 3230
        hidePreview: function () {                                                                                     // 3231
            this.anchorPreview.classList.remove('medium-editor-anchor-preview-active');                                // 3232
            this.activeAnchor = null;                                                                                  // 3233
        },                                                                                                             // 3234
                                                                                                                       // 3235
        showPreview: function (anchorEl) {                                                                             // 3236
            if (this.anchorPreview.classList.contains('medium-editor-anchor-preview-active') ||                        // 3237
                    anchorEl.getAttribute('data-disable-preview')) {                                                   // 3238
                return true;                                                                                           // 3239
            }                                                                                                          // 3240
                                                                                                                       // 3241
            if (this.previewValueSelector) {                                                                           // 3242
                this.anchorPreview.querySelector(this.previewValueSelector).textContent = anchorEl.attributes.href.value;
                this.anchorPreview.querySelector(this.previewValueSelector).href = anchorEl.attributes.href.value;     // 3244
            }                                                                                                          // 3245
                                                                                                                       // 3246
            this.anchorPreview.classList.add('medium-toolbar-arrow-over');                                             // 3247
            this.anchorPreview.classList.remove('medium-toolbar-arrow-under');                                         // 3248
                                                                                                                       // 3249
            if (!this.anchorPreview.classList.contains('medium-editor-anchor-preview-active')) {                       // 3250
                this.anchorPreview.classList.add('medium-editor-anchor-preview-active');                               // 3251
            }                                                                                                          // 3252
                                                                                                                       // 3253
            this.activeAnchor = anchorEl;                                                                              // 3254
                                                                                                                       // 3255
            this.positionPreview();                                                                                    // 3256
            this.attachPreviewHandlers();                                                                              // 3257
                                                                                                                       // 3258
            return this;                                                                                               // 3259
        },                                                                                                             // 3260
                                                                                                                       // 3261
        positionPreview: function (activeAnchor) {                                                                     // 3262
            activeAnchor = activeAnchor || this.activeAnchor;                                                          // 3263
            var buttonHeight = this.anchorPreview.offsetHeight,                                                        // 3264
                boundary = activeAnchor.getBoundingClientRect(),                                                       // 3265
                middleBoundary = (boundary.left + boundary.right) / 2,                                                 // 3266
                diffLeft = this.diffLeft,                                                                              // 3267
                diffTop = this.diffTop,                                                                                // 3268
                halfOffsetWidth,                                                                                       // 3269
                defaultLeft;                                                                                           // 3270
                                                                                                                       // 3271
            halfOffsetWidth = this.anchorPreview.offsetWidth / 2;                                                      // 3272
            var toolbarExtension = this.base.getExtensionByName('toolbar');                                            // 3273
            if (toolbarExtension) {                                                                                    // 3274
                diffLeft = toolbarExtension.diffLeft;                                                                  // 3275
                diffTop = toolbarExtension.diffTop;                                                                    // 3276
            }                                                                                                          // 3277
            defaultLeft = diffLeft - halfOffsetWidth;                                                                  // 3278
                                                                                                                       // 3279
            this.anchorPreview.style.top = Math.round(buttonHeight + boundary.bottom - diffTop + this.window.pageYOffset - this.anchorPreview.offsetHeight) + 'px';
            if (middleBoundary < halfOffsetWidth) {                                                                    // 3281
                this.anchorPreview.style.left = defaultLeft + halfOffsetWidth + 'px';                                  // 3282
            } else if ((this.window.innerWidth - middleBoundary) < halfOffsetWidth) {                                  // 3283
                this.anchorPreview.style.left = this.window.innerWidth + defaultLeft - halfOffsetWidth + 'px';         // 3284
            } else {                                                                                                   // 3285
                this.anchorPreview.style.left = defaultLeft + middleBoundary + 'px';                                   // 3286
            }                                                                                                          // 3287
        },                                                                                                             // 3288
                                                                                                                       // 3289
        attachToEditables: function () {                                                                               // 3290
            this.subscribe('editableMouseover', this.handleEditableMouseover.bind(this));                              // 3291
        },                                                                                                             // 3292
                                                                                                                       // 3293
        handleClick: function (event) {                                                                                // 3294
            var anchorExtension = this.base.getExtensionByName('anchor'),                                              // 3295
                activeAnchor = this.activeAnchor;                                                                      // 3296
                                                                                                                       // 3297
            if (anchorExtension && activeAnchor) {                                                                     // 3298
                event.preventDefault();                                                                                // 3299
                                                                                                                       // 3300
                this.base.selectElement(this.activeAnchor);                                                            // 3301
                                                                                                                       // 3302
                // Using setTimeout + delay because:                                                                   // 3303
                // We may actually be displaying the anchor form, which should be controlled by delay                  // 3304
                this.base.delay(function () {                                                                          // 3305
                    if (activeAnchor) {                                                                                // 3306
                        anchorExtension.showForm(activeAnchor.attributes.href.value);                                  // 3307
                        activeAnchor = null;                                                                           // 3308
                    }                                                                                                  // 3309
                }.bind(this));                                                                                         // 3310
            }                                                                                                          // 3311
                                                                                                                       // 3312
            this.hidePreview();                                                                                        // 3313
        },                                                                                                             // 3314
                                                                                                                       // 3315
        handleAnchorMouseout: function () {                                                                            // 3316
            this.anchorToPreview = null;                                                                               // 3317
            this.off(this.activeAnchor, 'mouseout', this.instanceHandleAnchorMouseout);                                // 3318
            this.instanceHandleAnchorMouseout = null;                                                                  // 3319
        },                                                                                                             // 3320
                                                                                                                       // 3321
        handleEditableMouseover: function (event) {                                                                    // 3322
            var target = Util.getClosestTag(event.target, 'a');                                                        // 3323
                                                                                                                       // 3324
            if (false === target) {                                                                                    // 3325
                return;                                                                                                // 3326
            }                                                                                                          // 3327
                                                                                                                       // 3328
            // Detect empty href attributes                                                                            // 3329
            // The browser will make href="" or href="#top"                                                            // 3330
            // into absolute urls when accessed as event.targed.href, so check the html                                // 3331
            if (!/href=["']\S+["']/.test(target.outerHTML) || /href=["']#\S+["']/.test(target.outerHTML)) {            // 3332
                return true;                                                                                           // 3333
            }                                                                                                          // 3334
                                                                                                                       // 3335
            // only show when toolbar is not present                                                                   // 3336
            var toolbar = this.base.getExtensionByName('toolbar');                                                     // 3337
            if (toolbar && toolbar.isDisplayed && toolbar.isDisplayed()) {                                             // 3338
                return true;                                                                                           // 3339
            }                                                                                                          // 3340
                                                                                                                       // 3341
            // detach handler for other anchor in case we hovered multiple anchors quickly                             // 3342
            if (this.activeAnchor && this.activeAnchor !== target) {                                                   // 3343
                this.detachPreviewHandlers();                                                                          // 3344
            }                                                                                                          // 3345
                                                                                                                       // 3346
            this.anchorToPreview = target;                                                                             // 3347
                                                                                                                       // 3348
            this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this);                                  // 3349
            this.on(this.anchorToPreview, 'mouseout', this.instanceHandleAnchorMouseout);                              // 3350
            // Using setTimeout + delay because:                                                                       // 3351
            // - We're going to show the anchor preview according to the configured delay                              // 3352
            //   if the mouse has not left the anchor tag in that time                                                 // 3353
            this.base.delay(function () {                                                                              // 3354
                if (this.anchorToPreview) {                                                                            // 3355
                    this.showPreview(this.anchorToPreview);                                                            // 3356
                }                                                                                                      // 3357
            }.bind(this));                                                                                             // 3358
        },                                                                                                             // 3359
                                                                                                                       // 3360
        handlePreviewMouseover: function () {                                                                          // 3361
            this.lastOver = (new Date()).getTime();                                                                    // 3362
            this.hovering = true;                                                                                      // 3363
        },                                                                                                             // 3364
                                                                                                                       // 3365
        handlePreviewMouseout: function (event) {                                                                      // 3366
            if (!event.relatedTarget || !/anchor-preview/.test(event.relatedTarget.className)) {                       // 3367
                this.hovering = false;                                                                                 // 3368
            }                                                                                                          // 3369
        },                                                                                                             // 3370
                                                                                                                       // 3371
        updatePreview: function () {                                                                                   // 3372
            if (this.hovering) {                                                                                       // 3373
                return true;                                                                                           // 3374
            }                                                                                                          // 3375
            var durr = (new Date()).getTime() - this.lastOver;                                                         // 3376
            if (durr > this.hideDelay) {                                                                               // 3377
                // hide the preview 1/2 second after mouse leaves the link                                             // 3378
                this.detachPreviewHandlers();                                                                          // 3379
            }                                                                                                          // 3380
        },                                                                                                             // 3381
                                                                                                                       // 3382
        detachPreviewHandlers: function () {                                                                           // 3383
            // cleanup                                                                                                 // 3384
            clearInterval(this.intervalTimer);                                                                         // 3385
            if (this.instanceHandlePreviewMouseover) {                                                                 // 3386
                this.off(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover);                        // 3387
                this.off(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout);                          // 3388
                if (this.activeAnchor) {                                                                               // 3389
                    this.off(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover);                     // 3390
                    this.off(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout);                       // 3391
                }                                                                                                      // 3392
            }                                                                                                          // 3393
                                                                                                                       // 3394
            this.hidePreview();                                                                                        // 3395
                                                                                                                       // 3396
            this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null;           // 3397
        },                                                                                                             // 3398
                                                                                                                       // 3399
        // TODO: break up method and extract out handlers                                                              // 3400
        attachPreviewHandlers: function () {                                                                           // 3401
            this.lastOver = (new Date()).getTime();                                                                    // 3402
            this.hovering = true;                                                                                      // 3403
                                                                                                                       // 3404
            this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this);                              // 3405
            this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this);                                // 3406
                                                                                                                       // 3407
            this.intervalTimer = setInterval(this.updatePreview.bind(this), 200);                                      // 3408
                                                                                                                       // 3409
            this.on(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover);                             // 3410
            this.on(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout);                               // 3411
            this.on(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover);                              // 3412
            this.on(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout);                                // 3413
        }                                                                                                              // 3414
    });                                                                                                                // 3415
}());                                                                                                                  // 3416
                                                                                                                       // 3417
var AutoLink,                                                                                                          // 3418
    WHITESPACE_CHARS,                                                                                                  // 3419
    KNOWN_TLDS_FRAGMENT,                                                                                               // 3420
    LINK_REGEXP_TEXT;                                                                                                  // 3421
                                                                                                                       // 3422
WHITESPACE_CHARS = [' ', '\t', '\n', '\r', '\u00A0', '\u2000', '\u2001', '\u2002', '\u2003',                           // 3423
                                    '\u2028', '\u2029'];                                                               // 3424
KNOWN_TLDS_FRAGMENT = 'com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|' +
    'xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|' +
    'bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|' +
    'fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|' +
    'is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|' +
    'mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|' +
    'pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|' +
    'tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw';              // 3432
LINK_REGEXP_TEXT =                                                                                                     // 3433
    '(' +                                                                                                              // 3434
    // Version of Gruber URL Regexp optimized for JS: http://stackoverflow.com/a/17733640                              // 3435
    '((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](' + KNOWN_TLDS_FRAGMENT + ')\\\/)\\S+(?:[^\\s`!\\[\\]{};:\'\".,?\u00AB\u00BB\u201C\u201D\u2018\u2019]))' +
    // Addition to above Regexp to support bare domains/one level subdomains with common non-i18n TLDs and without www prefix:
    ')|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(' + KNOWN_TLDS_FRAGMENT + '))';                                              // 3438
                                                                                                                       // 3439
(function () {                                                                                                         // 3440
    'use strict';                                                                                                      // 3441
                                                                                                                       // 3442
    var KNOWN_TLDS_REGEXP = new RegExp('^(' + KNOWN_TLDS_FRAGMENT + ')$', 'i');                                        // 3443
                                                                                                                       // 3444
    function nodeIsNotInsideAnchorTag(node) {                                                                          // 3445
        return !Util.getClosestTag(node, 'a');                                                                         // 3446
    }                                                                                                                  // 3447
                                                                                                                       // 3448
    AutoLink = Extension.extend({                                                                                      // 3449
        init: function () {                                                                                            // 3450
            Extension.prototype.init.apply(this, arguments);                                                           // 3451
                                                                                                                       // 3452
            this.disableEventHandling = false;                                                                         // 3453
            this.subscribe('editableKeypress', this.onKeypress.bind(this));                                            // 3454
            this.subscribe('editableBlur', this.onBlur.bind(this));                                                    // 3455
            // MS IE has it's own auto-URL detect feature but ours is better in some ways. Be consistent.              // 3456
            this.document.execCommand('AutoUrlDetect', false, false);                                                  // 3457
        },                                                                                                             // 3458
                                                                                                                       // 3459
        destroy: function () {                                                                                         // 3460
            // Turn AutoUrlDetect back on                                                                              // 3461
            if (this.document.queryCommandSupported('AutoUrlDetect')) {                                                // 3462
                this.document.execCommand('AutoUrlDetect', false, true);                                               // 3463
            }                                                                                                          // 3464
        },                                                                                                             // 3465
                                                                                                                       // 3466
        onBlur: function (blurEvent, editable) {                                                                       // 3467
            this.performLinking(editable);                                                                             // 3468
        },                                                                                                             // 3469
                                                                                                                       // 3470
        onKeypress: function (keyPressEvent) {                                                                         // 3471
            if (this.disableEventHandling) {                                                                           // 3472
                return;                                                                                                // 3473
            }                                                                                                          // 3474
                                                                                                                       // 3475
            if (Util.isKey(keyPressEvent, [Util.keyCode.SPACE, Util.keyCode.ENTER])) {                                 // 3476
                clearTimeout(this.performLinkingTimeout);                                                              // 3477
                // Saving/restoring the selection in the middle of a keypress doesn't work well...                     // 3478
                this.performLinkingTimeout = setTimeout(function () {                                                  // 3479
                    try {                                                                                              // 3480
                        var sel = this.base.exportSelection();                                                         // 3481
                        if (this.performLinking(keyPressEvent.target)) {                                               // 3482
                            // pass true for favorLaterSelectionAnchor - this is needed for links at the end of a      // 3483
                            // paragraph in MS IE, or MS IE causes the link to be deleted right after adding it.       // 3484
                            this.base.importSelection(sel, true);                                                      // 3485
                        }                                                                                              // 3486
                    } catch (e) {                                                                                      // 3487
                        if (window.console) {                                                                          // 3488
                            window.console.error('Failed to perform linking', e);                                      // 3489
                        }                                                                                              // 3490
                        this.disableEventHandling = true;                                                              // 3491
                    }                                                                                                  // 3492
                }.bind(this), 0);                                                                                      // 3493
            }                                                                                                          // 3494
        },                                                                                                             // 3495
                                                                                                                       // 3496
        performLinking: function (contenteditable) {                                                                   // 3497
            // Perform linking on a paragraph level basis as otherwise the detection can wrongly find the end          // 3498
            // of one paragraph and the beginning of another paragraph to constitute a link, such as a paragraph ending
            // "link." and the next paragraph beginning with "my" is interpreted into "link.my" and the code tries to create
            // a link across paragraphs - which doesn't work and is terrible.                                          // 3501
            // (Medium deletes the spaces/returns between P tags so the textContent ends up without paragraph spacing) // 3502
            var paragraphs = contenteditable.querySelectorAll('p'),                                                    // 3503
                documentModified = false;                                                                              // 3504
            if (paragraphs.length === 0) {                                                                             // 3505
                paragraphs = [contenteditable];                                                                        // 3506
            }                                                                                                          // 3507
            for (var i = 0; i < paragraphs.length; i++) {                                                              // 3508
                documentModified = this.removeObsoleteAutoLinkSpans(paragraphs[i]) || documentModified;                // 3509
                documentModified = this.performLinkingWithinElement(paragraphs[i]) || documentModified;                // 3510
            }                                                                                                          // 3511
            return documentModified;                                                                                   // 3512
        },                                                                                                             // 3513
                                                                                                                       // 3514
        removeObsoleteAutoLinkSpans: function (element) {                                                              // 3515
            var spans = element.querySelectorAll('span[data-auto-link="true"]'),                                       // 3516
                documentModified = false;                                                                              // 3517
                                                                                                                       // 3518
            for (var i = 0; i < spans.length; i++) {                                                                   // 3519
                var textContent = spans[i].textContent;                                                                // 3520
                if (textContent.indexOf('://') === -1) {                                                               // 3521
                    textContent = Util.ensureUrlHasProtocol(textContent);                                              // 3522
                }                                                                                                      // 3523
                if (spans[i].getAttribute('data-href') !== textContent && nodeIsNotInsideAnchorTag(spans[i])) {        // 3524
                    documentModified = true;                                                                           // 3525
                    var trimmedTextContent = textContent.replace(/\s+$/, '');                                          // 3526
                    if (spans[i].getAttribute('data-href') === trimmedTextContent) {                                   // 3527
                        var charactersTrimmed = textContent.length - trimmedTextContent.length,                        // 3528
                            subtree = Util.splitOffDOMTree(spans[i], this.splitTextBeforeEnd(spans[i], charactersTrimmed));
                        spans[i].parentNode.insertBefore(subtree, spans[i].nextSibling);                               // 3530
                    } else {                                                                                           // 3531
                        // Some editing has happened to the span, so just remove it entirely. The user can put it back // 3532
                        // around just the href content if they need to prevent it from linking                        // 3533
                        Util.unwrap(spans[i], this.document);                                                          // 3534
                    }                                                                                                  // 3535
                }                                                                                                      // 3536
            }                                                                                                          // 3537
            return documentModified;                                                                                   // 3538
        },                                                                                                             // 3539
                                                                                                                       // 3540
        splitTextBeforeEnd: function (element, characterCount) {                                                       // 3541
            var treeWalker = this.document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false),               // 3542
                lastChildNotExhausted = true;                                                                          // 3543
                                                                                                                       // 3544
            // Start the tree walker at the last descendant of the span                                                // 3545
            while (lastChildNotExhausted) {                                                                            // 3546
                lastChildNotExhausted = treeWalker.lastChild() !== null;                                               // 3547
            }                                                                                                          // 3548
                                                                                                                       // 3549
            var currentNode,                                                                                           // 3550
                currentNodeValue,                                                                                      // 3551
                previousNode;                                                                                          // 3552
            while (characterCount > 0 && previousNode !== null) {                                                      // 3553
                currentNode = treeWalker.currentNode;                                                                  // 3554
                currentNodeValue = currentNode.nodeValue;                                                              // 3555
                if (currentNodeValue.length > characterCount) {                                                        // 3556
                    previousNode = currentNode.splitText(currentNodeValue.length - characterCount);                    // 3557
                    characterCount = 0;                                                                                // 3558
                } else {                                                                                               // 3559
                    previousNode = treeWalker.previousNode();                                                          // 3560
                    characterCount -= currentNodeValue.length;                                                         // 3561
                }                                                                                                      // 3562
            }                                                                                                          // 3563
            return previousNode;                                                                                       // 3564
        },                                                                                                             // 3565
                                                                                                                       // 3566
        performLinkingWithinElement: function (element) {                                                              // 3567
            var matches = this.findLinkableText(element),                                                              // 3568
                linkCreated = false;                                                                                   // 3569
                                                                                                                       // 3570
            for (var matchIndex = 0; matchIndex < matches.length; matchIndex++) {                                      // 3571
                var matchingTextNodes = Util.findOrCreateMatchingTextNodes(this.document, element,                     // 3572
                        matches[matchIndex]);                                                                          // 3573
                if (this.shouldNotLink(matchingTextNodes)) {                                                           // 3574
                    continue;                                                                                          // 3575
                }                                                                                                      // 3576
                this.createAutoLink(matchingTextNodes, matches[matchIndex].href);                                      // 3577
            }                                                                                                          // 3578
            return linkCreated;                                                                                        // 3579
        },                                                                                                             // 3580
                                                                                                                       // 3581
        shouldNotLink: function (textNodes) {                                                                          // 3582
            var shouldNotLink = false;                                                                                 // 3583
            for (var i = 0; i < textNodes.length && shouldNotLink === false; i++) {                                    // 3584
                // Do not link if the text node is either inside an anchor or inside span[data-auto-link]              // 3585
                shouldNotLink = !!Util.traverseUp(textNodes[i], function (node) {                                      // 3586
                    return node.nodeName.toLowerCase() === 'a' ||                                                      // 3587
                        (node.getAttribute && node.getAttribute('data-auto-link') === 'true');                         // 3588
                });                                                                                                    // 3589
            }                                                                                                          // 3590
            return shouldNotLink;                                                                                      // 3591
        },                                                                                                             // 3592
                                                                                                                       // 3593
        findLinkableText: function (contenteditable) {                                                                 // 3594
            var linkRegExp = new RegExp(LINK_REGEXP_TEXT, 'gi'),                                                       // 3595
                textContent = contenteditable.textContent,                                                             // 3596
                match = null,                                                                                          // 3597
                matches = [];                                                                                          // 3598
                                                                                                                       // 3599
            while ((match = linkRegExp.exec(textContent)) !== null) {                                                  // 3600
                var matchOk = true,                                                                                    // 3601
                    matchEnd = match.index + match[0].length;                                                          // 3602
                // If the regexp detected something as a link that has text immediately preceding/following it, bail out.
                matchOk = (match.index === 0 || WHITESPACE_CHARS.indexOf(textContent[match.index - 1]) !== -1) &&      // 3604
                    (matchEnd === textContent.length || WHITESPACE_CHARS.indexOf(textContent[matchEnd]) !== -1);       // 3605
                // If the regexp detected a bare domain that doesn't use one of our expected TLDs, bail out.           // 3606
                matchOk = matchOk && (match[0].indexOf('/') !== -1 ||                                                  // 3607
                    KNOWN_TLDS_REGEXP.test(match[0].split('.').pop().split('?').shift()));                             // 3608
                                                                                                                       // 3609
                if (matchOk) {                                                                                         // 3610
                    matches.push({                                                                                     // 3611
                        href: match[0],                                                                                // 3612
                        start: match.index,                                                                            // 3613
                        end: matchEnd                                                                                  // 3614
                    });                                                                                                // 3615
                }                                                                                                      // 3616
            }                                                                                                          // 3617
            return matches;                                                                                            // 3618
        },                                                                                                             // 3619
                                                                                                                       // 3620
        createAutoLink: function (textNodes, href) {                                                                   // 3621
            href = Util.ensureUrlHasProtocol(href);                                                                    // 3622
            var anchor = Util.createLink(this.document, textNodes, href),                                              // 3623
                span = this.document.createElement('span');                                                            // 3624
            span.setAttribute('data-auto-link', 'true');                                                               // 3625
            span.setAttribute('data-href', href);                                                                      // 3626
            anchor.insertBefore(span, anchor.firstChild);                                                              // 3627
            while (anchor.childNodes.length > 1) {                                                                     // 3628
                span.appendChild(anchor.childNodes[1]);                                                                // 3629
            }                                                                                                          // 3630
        }                                                                                                              // 3631
                                                                                                                       // 3632
    });                                                                                                                // 3633
}());                                                                                                                  // 3634
var ImageDragging;                                                                                                     // 3635
                                                                                                                       // 3636
(function () {                                                                                                         // 3637
    'use strict';                                                                                                      // 3638
                                                                                                                       // 3639
    ImageDragging = Extension.extend({                                                                                 // 3640
        init: function () {                                                                                            // 3641
            Extension.prototype.init.apply(this, arguments);                                                           // 3642
                                                                                                                       // 3643
            this.subscribe('editableDrag', this.handleDrag.bind(this));                                                // 3644
            this.subscribe('editableDrop', this.handleDrop.bind(this));                                                // 3645
        },                                                                                                             // 3646
                                                                                                                       // 3647
        handleDrag: function (event) {                                                                                 // 3648
            var className = 'medium-editor-dragover';                                                                  // 3649
            event.preventDefault();                                                                                    // 3650
            event.dataTransfer.dropEffect = 'copy';                                                                    // 3651
                                                                                                                       // 3652
            if (event.type === 'dragover') {                                                                           // 3653
                event.target.classList.add(className);                                                                 // 3654
            } else if (event.type === 'dragleave') {                                                                   // 3655
                event.target.classList.remove(className);                                                              // 3656
            }                                                                                                          // 3657
        },                                                                                                             // 3658
                                                                                                                       // 3659
        handleDrop: function (event) {                                                                                 // 3660
            var className = 'medium-editor-dragover',                                                                  // 3661
                files;                                                                                                 // 3662
            event.preventDefault();                                                                                    // 3663
            event.stopPropagation();                                                                                   // 3664
                                                                                                                       // 3665
            // IE9 does not support the File API, so prevent file from opening in a new window                         // 3666
            // but also don't try to actually get the file                                                             // 3667
            if (event.dataTransfer.files) {                                                                            // 3668
                files = Array.prototype.slice.call(event.dataTransfer.files, 0);                                       // 3669
                files.some(function (file) {                                                                           // 3670
                    if (file.type.match('image')) {                                                                    // 3671
                        var fileReader, id;                                                                            // 3672
                        fileReader = new FileReader();                                                                 // 3673
                        fileReader.readAsDataURL(file);                                                                // 3674
                                                                                                                       // 3675
                        id = 'medium-img-' + (+new Date());                                                            // 3676
                        Util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + id + '" />');
                                                                                                                       // 3678
                        fileReader.onload = function () {                                                              // 3679
                            var img = this.document.getElementById(id);                                                // 3680
                            if (img) {                                                                                 // 3681
                                img.removeAttribute('id');                                                             // 3682
                                img.removeAttribute('class');                                                          // 3683
                                img.src = fileReader.result;                                                           // 3684
                            }                                                                                          // 3685
                        }.bind(this);                                                                                  // 3686
                    }                                                                                                  // 3687
                }.bind(this));                                                                                         // 3688
            }                                                                                                          // 3689
            event.target.classList.remove(className);                                                                  // 3690
        }                                                                                                              // 3691
    });                                                                                                                // 3692
}());                                                                                                                  // 3693
                                                                                                                       // 3694
var KeyboardCommands;                                                                                                  // 3695
(function () {                                                                                                         // 3696
    'use strict';                                                                                                      // 3697
                                                                                                                       // 3698
    /*global Extension, Util */                                                                                        // 3699
                                                                                                                       // 3700
    KeyboardCommands = Extension.extend({                                                                              // 3701
        name: 'keyboard-commands',                                                                                     // 3702
                                                                                                                       // 3703
        /* KeyboardCommands Options */                                                                                 // 3704
                                                                                                                       // 3705
        /* commands: [Array]                                                                                           // 3706
         * Array of objects describing each command and the combination of keys that will trigger it                   // 3707
         * Required for each object:                                                                                   // 3708
         *   command [String] (argument passed to editor.execAction())                                                 // 3709
         *   key [String] (keyboard character that triggers this command)                                              // 3710
         *   meta [boolean] (whether the ctrl/meta key has to be active or inactive)                                   // 3711
         *   shift [boolean] (whether the shift key has to be active or inactive)                                      // 3712
         */                                                                                                            // 3713
        commands: [                                                                                                    // 3714
            {                                                                                                          // 3715
                command: 'bold',                                                                                       // 3716
                key: 'B',                                                                                              // 3717
                meta: true,                                                                                            // 3718
                shift: false                                                                                           // 3719
            },                                                                                                         // 3720
            {                                                                                                          // 3721
                command: 'italic',                                                                                     // 3722
                key: 'I',                                                                                              // 3723
                meta: true,                                                                                            // 3724
                shift: false                                                                                           // 3725
            },                                                                                                         // 3726
            {                                                                                                          // 3727
                command: 'underline',                                                                                  // 3728
                key: 'U',                                                                                              // 3729
                meta: true,                                                                                            // 3730
                shift: false                                                                                           // 3731
            }                                                                                                          // 3732
        ],                                                                                                             // 3733
                                                                                                                       // 3734
        init: function () {                                                                                            // 3735
            Extension.prototype.init.apply(this, arguments);                                                           // 3736
                                                                                                                       // 3737
            this.subscribe('editableKeydown', this.handleKeydown.bind(this));                                          // 3738
            this.keys = {};                                                                                            // 3739
            this.commands.forEach(function (command) {                                                                 // 3740
                var keyCode = command.key.charCodeAt(0);                                                               // 3741
                if (!this.keys[keyCode]) {                                                                             // 3742
                    this.keys[keyCode] = [];                                                                           // 3743
                }                                                                                                      // 3744
                this.keys[keyCode].push(command);                                                                      // 3745
            }, this);                                                                                                  // 3746
        },                                                                                                             // 3747
                                                                                                                       // 3748
        handleKeydown: function (event) {                                                                              // 3749
            var keyCode = Util.getKeyCode(event);                                                                      // 3750
            if (!this.keys[keyCode]) {                                                                                 // 3751
                return;                                                                                                // 3752
            }                                                                                                          // 3753
                                                                                                                       // 3754
            var isMeta = Util.isMetaCtrlKey(event),                                                                    // 3755
                isShift = !!event.shiftKey;                                                                            // 3756
                                                                                                                       // 3757
            this.keys[keyCode].forEach(function (data) {                                                               // 3758
                if (data.meta === isMeta &&                                                                            // 3759
                    data.shift === isShift) {                                                                          // 3760
                    event.preventDefault();                                                                            // 3761
                    event.stopPropagation();                                                                           // 3762
                                                                                                                       // 3763
                    // command can be false so the shortcurt is just disabled                                          // 3764
                    if (false !== data.command) {                                                                      // 3765
                        this.execAction(data.command);                                                                 // 3766
                    }                                                                                                  // 3767
                }                                                                                                      // 3768
            }, this);                                                                                                  // 3769
        }                                                                                                              // 3770
    });                                                                                                                // 3771
}());                                                                                                                  // 3772
                                                                                                                       // 3773
var FontSizeForm;                                                                                                      // 3774
(function () {                                                                                                         // 3775
    'use strict';                                                                                                      // 3776
                                                                                                                       // 3777
    /*global FormExtension, Selection */                                                                               // 3778
                                                                                                                       // 3779
    FontSizeForm = FormExtension.extend({                                                                              // 3780
                                                                                                                       // 3781
        name: 'fontsize',                                                                                              // 3782
        action: 'fontSize',                                                                                            // 3783
        aria: 'increase/decrease font size',                                                                           // 3784
        contentDefault: '&#xB1;', // ±                                                                                 // 3785
        contentFA: '<i class="fa fa-text-height"></i>',                                                                // 3786
                                                                                                                       // 3787
        init: function () {                                                                                            // 3788
            FormExtension.prototype.init.apply(this, arguments);                                                       // 3789
        },                                                                                                             // 3790
                                                                                                                       // 3791
        // Called when the button the toolbar is clicked                                                               // 3792
        // Overrides ButtonExtension.handleClick                                                                       // 3793
        handleClick: function (event) {                                                                                // 3794
            event.preventDefault();                                                                                    // 3795
            event.stopPropagation();                                                                                   // 3796
                                                                                                                       // 3797
            if (!this.isDisplayed()) {                                                                                 // 3798
                // Get fontsize of current selection (convert to string since IE returns this as number)               // 3799
                var fontSize = this.document.queryCommandValue('fontSize') + '';                                       // 3800
                this.showForm(fontSize);                                                                               // 3801
            }                                                                                                          // 3802
                                                                                                                       // 3803
            return false;                                                                                              // 3804
        },                                                                                                             // 3805
                                                                                                                       // 3806
        // Called by medium-editor to append form to the toolbar                                                       // 3807
        getForm: function () {                                                                                         // 3808
            if (!this.form) {                                                                                          // 3809
                this.form = this.createForm();                                                                         // 3810
            }                                                                                                          // 3811
            return this.form;                                                                                          // 3812
        },                                                                                                             // 3813
                                                                                                                       // 3814
        // Used by medium-editor when the default toolbar is to be displayed                                           // 3815
        isDisplayed: function () {                                                                                     // 3816
            return this.getForm().style.display === 'block';                                                           // 3817
        },                                                                                                             // 3818
                                                                                                                       // 3819
        hideForm: function () {                                                                                        // 3820
            this.getForm().style.display = 'none';                                                                     // 3821
            this.getInput().value = '';                                                                                // 3822
        },                                                                                                             // 3823
                                                                                                                       // 3824
        showForm: function (fontSize) {                                                                                // 3825
            var input = this.getInput();                                                                               // 3826
                                                                                                                       // 3827
            this.base.saveSelection();                                                                                 // 3828
            this.hideToolbarDefaultActions();                                                                          // 3829
            this.getForm().style.display = 'block';                                                                    // 3830
            this.setToolbarPosition();                                                                                 // 3831
                                                                                                                       // 3832
            input.value = fontSize || '';                                                                              // 3833
            input.focus();                                                                                             // 3834
        },                                                                                                             // 3835
                                                                                                                       // 3836
        // Called by core when tearing down medium-editor (destroy)                                                    // 3837
        destroy: function () {                                                                                         // 3838
            if (!this.form) {                                                                                          // 3839
                return false;                                                                                          // 3840
            }                                                                                                          // 3841
                                                                                                                       // 3842
            if (this.form.parentNode) {                                                                                // 3843
                this.form.parentNode.removeChild(this.form);                                                           // 3844
            }                                                                                                          // 3845
                                                                                                                       // 3846
            delete this.form;                                                                                          // 3847
        },                                                                                                             // 3848
                                                                                                                       // 3849
        // core methods                                                                                                // 3850
                                                                                                                       // 3851
        doFormSave: function () {                                                                                      // 3852
            this.base.restoreSelection();                                                                              // 3853
            this.base.checkSelection();                                                                                // 3854
        },                                                                                                             // 3855
                                                                                                                       // 3856
        doFormCancel: function () {                                                                                    // 3857
            this.base.restoreSelection();                                                                              // 3858
            this.clearFontSize();                                                                                      // 3859
            this.base.checkSelection();                                                                                // 3860
        },                                                                                                             // 3861
                                                                                                                       // 3862
        // form creation and event handling                                                                            // 3863
        createForm: function () {                                                                                      // 3864
            var doc = this.document,                                                                                   // 3865
                form = doc.createElement('div'),                                                                       // 3866
                input = doc.createElement('input'),                                                                    // 3867
                close = doc.createElement('a'),                                                                        // 3868
                save = doc.createElement('a');                                                                         // 3869
                                                                                                                       // 3870
            // Font Size Form (div)                                                                                    // 3871
            form.className = 'medium-editor-toolbar-form';                                                             // 3872
            form.id = 'medium-editor-toolbar-form-fontsize-' + this.getEditorId();                                     // 3873
                                                                                                                       // 3874
            // Handle clicks on the form itself                                                                        // 3875
            this.on(form, 'click', this.handleFormClick.bind(this));                                                   // 3876
                                                                                                                       // 3877
            // Add font size slider                                                                                    // 3878
            input.setAttribute('type', 'range');                                                                       // 3879
            input.setAttribute('min', '1');                                                                            // 3880
            input.setAttribute('max', '7');                                                                            // 3881
            input.className = 'medium-editor-toolbar-input';                                                           // 3882
            form.appendChild(input);                                                                                   // 3883
                                                                                                                       // 3884
            // Handle typing in the textbox                                                                            // 3885
            this.on(input, 'change', this.handleSliderChange.bind(this));                                              // 3886
                                                                                                                       // 3887
            // Add save buton                                                                                          // 3888
            save.setAttribute('href', '#');                                                                            // 3889
            save.className = 'medium-editor-toobar-save';                                                              // 3890
            save.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?                                  // 3891
                             '<i class="fa fa-check"></i>' :                                                           // 3892
                             '&#10003;';                                                                               // 3893
            form.appendChild(save);                                                                                    // 3894
                                                                                                                       // 3895
            // Handle save button clicks (capture)                                                                     // 3896
            this.on(save, 'click', this.handleSaveClick.bind(this), true);                                             // 3897
                                                                                                                       // 3898
            // Add close button                                                                                        // 3899
            close.setAttribute('href', '#');                                                                           // 3900
            close.className = 'medium-editor-toobar-close';                                                            // 3901
            close.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?                                 // 3902
                              '<i class="fa fa-times"></i>' :                                                          // 3903
                              '&times;';                                                                               // 3904
            form.appendChild(close);                                                                                   // 3905
                                                                                                                       // 3906
            // Handle close button clicks                                                                              // 3907
            this.on(close, 'click', this.handleCloseClick.bind(this));                                                 // 3908
                                                                                                                       // 3909
            return form;                                                                                               // 3910
        },                                                                                                             // 3911
                                                                                                                       // 3912
        getInput: function () {                                                                                        // 3913
            return this.getForm().querySelector('input.medium-editor-toolbar-input');                                  // 3914
        },                                                                                                             // 3915
                                                                                                                       // 3916
        clearFontSize: function () {                                                                                   // 3917
            Selection.getSelectedElements(this.document).forEach(function (el) {                                       // 3918
                if (el.nodeName.toLowerCase() === 'font' && el.hasAttribute('size')) {                                 // 3919
                    el.removeAttribute('size');                                                                        // 3920
                }                                                                                                      // 3921
            });                                                                                                        // 3922
        },                                                                                                             // 3923
                                                                                                                       // 3924
        handleSliderChange: function () {                                                                              // 3925
            var size = this.getInput().value;                                                                          // 3926
            if (size === '4') {                                                                                        // 3927
                this.clearFontSize();                                                                                  // 3928
            } else {                                                                                                   // 3929
                this.execAction('fontSize', { size: size });                                                           // 3930
            }                                                                                                          // 3931
        },                                                                                                             // 3932
                                                                                                                       // 3933
        handleFormClick: function (event) {                                                                            // 3934
            // make sure not to hide form when clicking inside the form                                                // 3935
            event.stopPropagation();                                                                                   // 3936
        },                                                                                                             // 3937
                                                                                                                       // 3938
        handleSaveClick: function (event) {                                                                            // 3939
            // Clicking Save -> create the font size                                                                   // 3940
            event.preventDefault();                                                                                    // 3941
            this.doFormSave();                                                                                         // 3942
        },                                                                                                             // 3943
                                                                                                                       // 3944
        handleCloseClick: function (event) {                                                                           // 3945
            // Click Close -> close the form                                                                           // 3946
            event.preventDefault();                                                                                    // 3947
            this.doFormCancel();                                                                                       // 3948
        }                                                                                                              // 3949
    });                                                                                                                // 3950
}());                                                                                                                  // 3951
var PasteHandler;                                                                                                      // 3952
                                                                                                                       // 3953
(function () {                                                                                                         // 3954
    'use strict';                                                                                                      // 3955
    /*jslint regexp: true*/                                                                                            // 3956
    /*                                                                                                                 // 3957
        jslint does not allow character negation, because the negation                                                 // 3958
        will not match any unicode characters. In the regexes in this                                                  // 3959
        block, negation is used specifically to match the end of an html                                               // 3960
        tag, and in fact unicode characters *should* be allowed.                                                       // 3961
    */                                                                                                                 // 3962
    function createReplacements() {                                                                                    // 3963
        return [                                                                                                       // 3964
                                                                                                                       // 3965
            // replace two bogus tags that begin pastes from google docs                                               // 3966
            [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ''],                                                      // 3967
            [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ''],                                                                  // 3968
                                                                                                                       // 3969
             // un-html spaces and newlines inserted by OS X                                                           // 3970
            [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), ' '],                                     // 3971
            [new RegExp(/<br class="Apple-interchange-newline">/g), '<br>'],                                           // 3972
                                                                                                                       // 3973
            // replace google docs italics+bold with a span to be replaced once the html is inserted                   // 3974
            [new RegExp(/<span[^>]*(font-style:italic;font-weight:bold|font-weight:bold;font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'],
                                                                                                                       // 3976
            // replace google docs italics with a span to be replaced once the html is inserted                        // 3977
            [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'],                 // 3978
                                                                                                                       // 3979
            //[replace google docs bolds with a span to be replaced once the html is inserted                          // 3980
            [new RegExp(/<span[^>]*font-weight:bold[^>]*>/gi), '<span class="replace-with bold">'],                    // 3981
                                                                                                                       // 3982
             // replace manually entered b/i/a tags with real ones                                                     // 3983
            [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), '<$1$2>'],                                                          // 3984
                                                                                                                       // 3985
             // replace manually a tags with real ones, converting smart-quotes from google docs                       // 3986
            [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'],
                                                                                                                       // 3988
            // Newlines between paragraphs in html have no syntactic value,                                            // 3989
            // but then have a tendency to accidentally become additional paragraphs down the line                     // 3990
            [new RegExp(/<\/p>\n+/gi), '</p>'],                                                                        // 3991
            [new RegExp(/\n+<p/gi), '<p'],                                                                             // 3992
                                                                                                                       // 3993
            // Microsoft Word makes these odd tags, like <o:p></o:p>                                                   // 3994
            [new RegExp(/<\/?o:[a-z]*>/gi), '']                                                                        // 3995
        ];                                                                                                             // 3996
    }                                                                                                                  // 3997
    /*jslint regexp: false*/                                                                                           // 3998
                                                                                                                       // 3999
    PasteHandler = Extension.extend({                                                                                  // 4000
        /* Paste Options */                                                                                            // 4001
                                                                                                                       // 4002
        /* forcePlainText: [boolean]                                                                                   // 4003
         * Forces pasting as plain text.                                                                               // 4004
         */                                                                                                            // 4005
        forcePlainText: true,                                                                                          // 4006
                                                                                                                       // 4007
        /* cleanPastedHTML: [boolean]                                                                                  // 4008
         * cleans pasted content from different sources, like google docs etc.                                         // 4009
         */                                                                                                            // 4010
        cleanPastedHTML: false,                                                                                        // 4011
                                                                                                                       // 4012
        /* cleanReplacements: [Array]                                                                                  // 4013
         * custom pairs (2 element arrays) of RegExp and replacement text to use during paste when                     // 4014
         * __forcePlainText__ or __cleanPastedHTML__ are `true` OR when calling `cleanPaste(text)` helper method.      // 4015
         */                                                                                                            // 4016
        cleanReplacements: [],                                                                                         // 4017
                                                                                                                       // 4018
        /* cleanAttrs:: [Array]                                                                                        // 4019
         * list of element attributes to remove during paste when __cleanPastedHTML__ is `true` or when                // 4020
         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.                                    // 4021
         */                                                                                                            // 4022
        cleanAttrs: ['class', 'style', 'dir'],                                                                         // 4023
                                                                                                                       // 4024
        /* cleanTags: [Array]                                                                                          // 4025
         * list of element tag names to remove during paste when __cleanPastedHTML__ is `true` or when                 // 4026
         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.                                    // 4027
         */                                                                                                            // 4028
        cleanTags: ['meta'],                                                                                           // 4029
                                                                                                                       // 4030
        init: function () {                                                                                            // 4031
            Extension.prototype.init.apply(this, arguments);                                                           // 4032
                                                                                                                       // 4033
            if (this.forcePlainText || this.cleanPastedHTML) {                                                         // 4034
                this.subscribe('editablePaste', this.handlePaste.bind(this));                                          // 4035
            }                                                                                                          // 4036
        },                                                                                                             // 4037
                                                                                                                       // 4038
        handlePaste: function (event, element) {                                                                       // 4039
            var paragraphs,                                                                                            // 4040
                html = '',                                                                                             // 4041
                p,                                                                                                     // 4042
                dataFormatHTML = 'text/html',                                                                          // 4043
                dataFormatPlain = 'text/plain',                                                                        // 4044
                pastedHTML,                                                                                            // 4045
                pastedPlain;                                                                                           // 4046
                                                                                                                       // 4047
            if (this.window.clipboardData && event.clipboardData === undefined) {                                      // 4048
                event.clipboardData = this.window.clipboardData;                                                       // 4049
                // If window.clipboardData exists, but event.clipboardData doesn't exist,                              // 4050
                // we're probably in IE. IE only has two possibilities for clipboard                                   // 4051
                // data format: 'Text' and 'URL'.                                                                      // 4052
                //                                                                                                     // 4053
                // Of the two, we want 'Text':                                                                         // 4054
                dataFormatHTML = 'Text';                                                                               // 4055
                dataFormatPlain = 'Text';                                                                              // 4056
            }                                                                                                          // 4057
                                                                                                                       // 4058
            if (event.clipboardData &&                                                                                 // 4059
                    event.clipboardData.getData &&                                                                     // 4060
                    !event.defaultPrevented) {                                                                         // 4061
                event.preventDefault();                                                                                // 4062
                                                                                                                       // 4063
                pastedHTML = event.clipboardData.getData(dataFormatHTML);                                              // 4064
                pastedPlain = event.clipboardData.getData(dataFormatPlain);                                            // 4065
                                                                                                                       // 4066
                if (this.cleanPastedHTML && pastedHTML) {                                                              // 4067
                    return this.cleanPaste(pastedHTML);                                                                // 4068
                }                                                                                                      // 4069
                                                                                                                       // 4070
                if (!(this.getEditorOption('disableReturn') || element.getAttribute('data-disable-return'))) {         // 4071
                    paragraphs = pastedPlain.split(/[\r\n]+/g);                                                        // 4072
                    // If there are no \r\n in data, don't wrap in <p>                                                 // 4073
                    if (paragraphs.length > 1) {                                                                       // 4074
                        for (p = 0; p < paragraphs.length; p += 1) {                                                   // 4075
                            if (paragraphs[p] !== '') {                                                                // 4076
                                html += '<p>' + Util.htmlEntities(paragraphs[p]) + '</p>';                             // 4077
                            }                                                                                          // 4078
                        }                                                                                              // 4079
                    } else {                                                                                           // 4080
                        html = Util.htmlEntities(paragraphs[0]);                                                       // 4081
                    }                                                                                                  // 4082
                } else {                                                                                               // 4083
                    html = Util.htmlEntities(pastedPlain);                                                             // 4084
                }                                                                                                      // 4085
                Util.insertHTMLCommand(this.document, html);                                                           // 4086
            }                                                                                                          // 4087
        },                                                                                                             // 4088
                                                                                                                       // 4089
        cleanPaste: function (text) {                                                                                  // 4090
            var i, elList, workEl,                                                                                     // 4091
                el = Selection.getSelectionElement(this.window),                                                       // 4092
                multiline = /<p|<br|<div/.test(text),                                                                  // 4093
                replacements = createReplacements().concat(this.cleanReplacements || []);                              // 4094
                                                                                                                       // 4095
            for (i = 0; i < replacements.length; i += 1) {                                                             // 4096
                text = text.replace(replacements[i][0], replacements[i][1]);                                           // 4097
            }                                                                                                          // 4098
                                                                                                                       // 4099
            if (!multiline) {                                                                                          // 4100
                return this.pasteHTML(text);                                                                           // 4101
            }                                                                                                          // 4102
                                                                                                                       // 4103
            // double br's aren't converted to p tags, but we want paragraphs.                                         // 4104
            elList = text.split('<br><br>');                                                                           // 4105
                                                                                                                       // 4106
            this.pasteHTML('<p>' + elList.join('</p><p>') + '</p>');                                                   // 4107
                                                                                                                       // 4108
            try {                                                                                                      // 4109
                this.document.execCommand('insertText', false, '\n');                                                  // 4110
            } catch (ignore) { }                                                                                       // 4111
                                                                                                                       // 4112
            // block element cleanup                                                                                   // 4113
            elList = el.querySelectorAll('a,p,div,br');                                                                // 4114
            for (i = 0; i < elList.length; i += 1) {                                                                   // 4115
                workEl = elList[i];                                                                                    // 4116
                                                                                                                       // 4117
                // Microsoft Word replaces some spaces with newlines.                                                  // 4118
                // While newlines between block elements are meaningless, newlines within                              // 4119
                // elements are sometimes actually spaces.                                                             // 4120
                workEl.innerHTML = workEl.innerHTML.replace(/\n/gi, ' ');                                              // 4121
                                                                                                                       // 4122
                switch (workEl.nodeName.toLowerCase()) {                                                               // 4123
                    case 'p':                                                                                          // 4124
                    case 'div':                                                                                        // 4125
                        this.filterCommonBlocks(workEl);                                                               // 4126
                        break;                                                                                         // 4127
                    case 'br':                                                                                         // 4128
                        this.filterLineBreak(workEl);                                                                  // 4129
                        break;                                                                                         // 4130
                }                                                                                                      // 4131
            }                                                                                                          // 4132
        },                                                                                                             // 4133
                                                                                                                       // 4134
        pasteHTML: function (html, options) {                                                                          // 4135
            options = Util.defaults({}, options, {                                                                     // 4136
                cleanAttrs: this.cleanAttrs,                                                                           // 4137
                cleanTags: this.cleanTags                                                                              // 4138
            });                                                                                                        // 4139
                                                                                                                       // 4140
            var elList, workEl, i, fragmentBody, pasteBlock = this.document.createDocumentFragment();                  // 4141
                                                                                                                       // 4142
            pasteBlock.appendChild(this.document.createElement('body'));                                               // 4143
                                                                                                                       // 4144
            fragmentBody = pasteBlock.querySelector('body');                                                           // 4145
            fragmentBody.innerHTML = html;                                                                             // 4146
                                                                                                                       // 4147
            this.cleanupSpans(fragmentBody);                                                                           // 4148
                                                                                                                       // 4149
            elList = fragmentBody.querySelectorAll('*');                                                               // 4150
                                                                                                                       // 4151
            for (i = 0; i < elList.length; i += 1) {                                                                   // 4152
                workEl = elList[i];                                                                                    // 4153
                                                                                                                       // 4154
                if ('a' === workEl.nodeName.toLowerCase() && this.getEditorOption('targetBlank')) {                    // 4155
                    Util.setTargetBlank(workEl);                                                                       // 4156
                }                                                                                                      // 4157
                                                                                                                       // 4158
                Util.cleanupAttrs(workEl, options.cleanAttrs);                                                         // 4159
                Util.cleanupTags(workEl, options.cleanTags);                                                           // 4160
            }                                                                                                          // 4161
                                                                                                                       // 4162
            Util.insertHTMLCommand(this.document, fragmentBody.innerHTML.replace(/&nbsp;/g, ' '));                     // 4163
        },                                                                                                             // 4164
                                                                                                                       // 4165
        isCommonBlock: function (el) {                                                                                 // 4166
            return (el && (el.nodeName.toLowerCase() === 'p' || el.nodeName.toLowerCase() === 'div'));                 // 4167
        },                                                                                                             // 4168
                                                                                                                       // 4169
        filterCommonBlocks: function (el) {                                                                            // 4170
            if (/^\s*$/.test(el.textContent) && el.parentNode) {                                                       // 4171
                el.parentNode.removeChild(el);                                                                         // 4172
            }                                                                                                          // 4173
        },                                                                                                             // 4174
                                                                                                                       // 4175
        filterLineBreak: function (el) {                                                                               // 4176
            if (this.isCommonBlock(el.previousElementSibling)) {                                                       // 4177
                // remove stray br's following common block elements                                                   // 4178
                this.removeWithParent(el);                                                                             // 4179
            } else if (this.isCommonBlock(el.parentNode) && (el.parentNode.firstChild === el || el.parentNode.lastChild === el)) {
                // remove br's just inside open or close tags of a div/p                                               // 4181
                this.removeWithParent(el);                                                                             // 4182
            } else if (el.parentNode && el.parentNode.childElementCount === 1 && el.parentNode.textContent === '') {   // 4183
                // and br's that are the only child of elements other than div/p                                       // 4184
                this.removeWithParent(el);                                                                             // 4185
            }                                                                                                          // 4186
        },                                                                                                             // 4187
                                                                                                                       // 4188
        // remove an element, including its parent, if it is the only element within its parent                        // 4189
        removeWithParent: function (el) {                                                                              // 4190
            if (el && el.parentNode) {                                                                                 // 4191
                if (el.parentNode.parentNode && el.parentNode.childElementCount === 1) {                               // 4192
                    el.parentNode.parentNode.removeChild(el.parentNode);                                               // 4193
                } else {                                                                                               // 4194
                    el.parentNode.removeChild(el);                                                                     // 4195
                }                                                                                                      // 4196
            }                                                                                                          // 4197
        },                                                                                                             // 4198
                                                                                                                       // 4199
        cleanupSpans: function (containerEl) {                                                                         // 4200
            var i,                                                                                                     // 4201
                el,                                                                                                    // 4202
                newEl,                                                                                                 // 4203
                spans = containerEl.querySelectorAll('.replace-with'),                                                 // 4204
                isCEF = function (el) {                                                                                // 4205
                    return (el && el.nodeName !== '#text' && el.getAttribute('contenteditable') === 'false');          // 4206
                };                                                                                                     // 4207
                                                                                                                       // 4208
            for (i = 0; i < spans.length; i += 1) {                                                                    // 4209
                el = spans[i];                                                                                         // 4210
                newEl = this.document.createElement(el.classList.contains('bold') ? 'b' : 'i');                        // 4211
                                                                                                                       // 4212
                if (el.classList.contains('bold') && el.classList.contains('italic')) {                                // 4213
                    // add an i tag as well if this has both italics and bold                                          // 4214
                    newEl.innerHTML = '<i>' + el.innerHTML + '</i>';                                                   // 4215
                } else {                                                                                               // 4216
                    newEl.innerHTML = el.innerHTML;                                                                    // 4217
                }                                                                                                      // 4218
                el.parentNode.replaceChild(newEl, el);                                                                 // 4219
            }                                                                                                          // 4220
                                                                                                                       // 4221
            spans = containerEl.querySelectorAll('span');                                                              // 4222
            for (i = 0; i < spans.length; i += 1) {                                                                    // 4223
                el = spans[i];                                                                                         // 4224
                                                                                                                       // 4225
                // bail if span is in contenteditable = false                                                          // 4226
                if (Util.traverseUp(el, isCEF)) {                                                                      // 4227
                    return false;                                                                                      // 4228
                }                                                                                                      // 4229
                                                                                                                       // 4230
                // remove empty spans, replace others with their contents                                              // 4231
                Util.unwrap(el, this.document);                                                                        // 4232
            }                                                                                                          // 4233
        }                                                                                                              // 4234
    });                                                                                                                // 4235
}());                                                                                                                  // 4236
                                                                                                                       // 4237
var Placeholder;                                                                                                       // 4238
                                                                                                                       // 4239
(function () {                                                                                                         // 4240
    'use strict';                                                                                                      // 4241
                                                                                                                       // 4242
    /*global Extension */                                                                                              // 4243
                                                                                                                       // 4244
    Placeholder = Extension.extend({                                                                                   // 4245
        name: 'placeholder',                                                                                           // 4246
                                                                                                                       // 4247
        /* Placeholder Options */                                                                                      // 4248
                                                                                                                       // 4249
        /* text: [string]                                                                                              // 4250
         * Text to display in the placeholder                                                                          // 4251
         */                                                                                                            // 4252
        text: 'Type your text',                                                                                        // 4253
                                                                                                                       // 4254
        /* hideOnClick: [boolean]                                                                                      // 4255
         * Should we hide the placeholder on click (true) or when user starts typing (false)                           // 4256
         */                                                                                                            // 4257
        hideOnClick: true,                                                                                             // 4258
                                                                                                                       // 4259
        init: function () {                                                                                            // 4260
            Extension.prototype.init.apply(this, arguments);                                                           // 4261
                                                                                                                       // 4262
            this.initPlaceholders();                                                                                   // 4263
            this.attachEventHandlers();                                                                                // 4264
        },                                                                                                             // 4265
                                                                                                                       // 4266
        initPlaceholders: function () {                                                                                // 4267
            this.getEditorElements().forEach(function (el) {                                                           // 4268
                if (!el.getAttribute('data-placeholder')) {                                                            // 4269
                    el.setAttribute('data-placeholder', this.text);                                                    // 4270
                }                                                                                                      // 4271
                this.updatePlaceholder(el);                                                                            // 4272
            }, this);                                                                                                  // 4273
        },                                                                                                             // 4274
                                                                                                                       // 4275
        destroy: function () {                                                                                         // 4276
            this.getEditorElements().forEach(function (el) {                                                           // 4277
                if (el.getAttribute('data-placeholder') === this.text) {                                               // 4278
                    el.removeAttribute('data-placeholder');                                                            // 4279
                }                                                                                                      // 4280
            }, this);                                                                                                  // 4281
        },                                                                                                             // 4282
                                                                                                                       // 4283
        showPlaceholder: function (el) {                                                                               // 4284
            if (el) {                                                                                                  // 4285
                el.classList.add('medium-editor-placeholder');                                                         // 4286
            }                                                                                                          // 4287
        },                                                                                                             // 4288
                                                                                                                       // 4289
        hidePlaceholder: function (el) {                                                                               // 4290
            if (el) {                                                                                                  // 4291
                el.classList.remove('medium-editor-placeholder');                                                      // 4292
            }                                                                                                          // 4293
        },                                                                                                             // 4294
                                                                                                                       // 4295
        updatePlaceholder: function (el) {                                                                             // 4296
            // if one of these element ('img, blockquote, ul, ol') are found inside the given element, we won't display the placeholder
            if (!(el.querySelector('img, blockquote, ul, ol')) && el.textContent.replace(/^\s+|\s+$/g, '') === '') {   // 4298
                return this.showPlaceholder(el);                                                                       // 4299
            }                                                                                                          // 4300
                                                                                                                       // 4301
            this.hidePlaceholder(el);                                                                                  // 4302
        },                                                                                                             // 4303
                                                                                                                       // 4304
        attachEventHandlers: function () {                                                                             // 4305
            // Custom events                                                                                           // 4306
            this.subscribe('blur', this.handleExternalInteraction.bind(this));                                         // 4307
                                                                                                                       // 4308
            // Check placeholder on blur                                                                               // 4309
            this.subscribe('editableBlur', this.handleBlur.bind(this));                                                // 4310
                                                                                                                       // 4311
            // if we don't want the placeholder to be removed on click but when user start typing                      // 4312
            if (this.hideOnClick) {                                                                                    // 4313
                this.subscribe('editableClick', this.handleHidePlaceholderEvent.bind(this));                           // 4314
            } else {                                                                                                   // 4315
                this.subscribe('editableKeyup', this.handleBlur.bind(this));                                           // 4316
            }                                                                                                          // 4317
                                                                                                                       // 4318
            // Events where we always hide the placeholder                                                             // 4319
            this.subscribe('editableKeypress', this.handleHidePlaceholderEvent.bind(this));                            // 4320
            this.subscribe('editablePaste', this.handleHidePlaceholderEvent.bind(this));                               // 4321
        },                                                                                                             // 4322
                                                                                                                       // 4323
        handleHidePlaceholderEvent: function (event, element) {                                                        // 4324
            // Events where we hide the placeholder                                                                    // 4325
            this.hidePlaceholder(element);                                                                             // 4326
        },                                                                                                             // 4327
                                                                                                                       // 4328
        handleBlur: function (event, element) {                                                                        // 4329
            // Update placeholder for element that lost focus                                                          // 4330
            this.updatePlaceholder(element);                                                                           // 4331
        },                                                                                                             // 4332
                                                                                                                       // 4333
        handleExternalInteraction: function () {                                                                       // 4334
            // Update all placeholders                                                                                 // 4335
            this.initPlaceholders();                                                                                   // 4336
        }                                                                                                              // 4337
    });                                                                                                                // 4338
}());                                                                                                                  // 4339
                                                                                                                       // 4340
var Toolbar;                                                                                                           // 4341
(function () {                                                                                                         // 4342
    'use strict';                                                                                                      // 4343
                                                                                                                       // 4344
    /*global Util, Selection, Extension */                                                                             // 4345
                                                                                                                       // 4346
    Toolbar = Extension.extend({                                                                                       // 4347
        name: 'toolbar',                                                                                               // 4348
                                                                                                                       // 4349
        /* Toolbar Options */                                                                                          // 4350
                                                                                                                       // 4351
        /* align: ['left'|'center'|'right']                                                                            // 4352
         * When the __static__ option is true, this aligns the static toolbar                                          // 4353
         * relative to the medium-editor element.                                                                      // 4354
         */                                                                                                            // 4355
        align: 'center',                                                                                               // 4356
                                                                                                                       // 4357
        /* allowMultiParagraphSelection: [boolean]                                                                     // 4358
         * enables/disables whether the toolbar should be displayed when                                               // 4359
         * selecting multiple paragraphs/block elements                                                                // 4360
         */                                                                                                            // 4361
        allowMultiParagraphSelection: true,                                                                            // 4362
                                                                                                                       // 4363
        /* buttons: [Array]                                                                                            // 4364
         * the names of the set of buttons to display on the toolbar.                                                  // 4365
         */                                                                                                            // 4366
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],                                       // 4367
                                                                                                                       // 4368
        /* diffLeft: [Number]                                                                                          // 4369
         * value in pixels to be added to the X axis positioning of the toolbar.                                       // 4370
         */                                                                                                            // 4371
        diffLeft: 0,                                                                                                   // 4372
                                                                                                                       // 4373
        /* diffTop: [Number]                                                                                           // 4374
         * value in pixels to be added to the Y axis positioning of the toolbar.                                       // 4375
         */                                                                                                            // 4376
        diffTop: -10,                                                                                                  // 4377
                                                                                                                       // 4378
        /* firstButtonClass: [string]                                                                                  // 4379
         * CSS class added to the first button in the toolbar.                                                         // 4380
         */                                                                                                            // 4381
        firstButtonClass: 'medium-editor-button-first',                                                                // 4382
                                                                                                                       // 4383
        /* lastButtonClass: [string]                                                                                   // 4384
         * CSS class added to the last button in the toolbar.                                                          // 4385
         */                                                                                                            // 4386
        lastButtonClass: 'medium-editor-button-last',                                                                  // 4387
                                                                                                                       // 4388
        /* standardizeSelectionStart: [boolean]                                                                        // 4389
         * enables/disables standardizing how the beginning of a range is decided                                      // 4390
         * between browsers whenever the selected text is analyzed for updating toolbar buttons status.                // 4391
         */                                                                                                            // 4392
        standardizeSelectionStart: false,                                                                              // 4393
                                                                                                                       // 4394
        /* static: [boolean]                                                                                           // 4395
         * enable/disable the toolbar always displaying in the same location                                           // 4396
         * relative to the medium-editor element.                                                                      // 4397
         */                                                                                                            // 4398
        static: false,                                                                                                 // 4399
                                                                                                                       // 4400
        /* sticky: [boolean]                                                                                           // 4401
         * When the __static__ option is true, this enables/disables the toolbar                                       // 4402
         * "sticking" to the viewport and staying visible on the screen while                                          // 4403
         * the page scrolls.                                                                                           // 4404
         */                                                                                                            // 4405
        sticky: false,                                                                                                 // 4406
                                                                                                                       // 4407
        /* updateOnEmptySelection: [boolean]                                                                           // 4408
         * When the __static__ option is true, this enables/disables updating                                          // 4409
         * the state of the toolbar buttons even when the selection is collapsed                                       // 4410
         * (there is no selection, just a cursor).                                                                     // 4411
         */                                                                                                            // 4412
        updateOnEmptySelection: false,                                                                                 // 4413
                                                                                                                       // 4414
        init: function () {                                                                                            // 4415
            Extension.prototype.init.apply(this, arguments);                                                           // 4416
                                                                                                                       // 4417
            this.initThrottledMethods();                                                                               // 4418
            this.getEditorOption('elementsContainer').appendChild(this.getToolbarElement());                           // 4419
        },                                                                                                             // 4420
                                                                                                                       // 4421
        // Helper method to execute method for every extension, but ignoring the toolbar extension                     // 4422
        forEachExtension: function (iterator, context) {                                                               // 4423
            return this.base.extensions.forEach(function (command) {                                                   // 4424
                if (command === this) {                                                                                // 4425
                    return;                                                                                            // 4426
                }                                                                                                      // 4427
                return iterator.apply(context || this, arguments);                                                     // 4428
            }, this);                                                                                                  // 4429
        },                                                                                                             // 4430
                                                                                                                       // 4431
        // Toolbar creation/deletion                                                                                   // 4432
                                                                                                                       // 4433
        createToolbar: function () {                                                                                   // 4434
            var toolbar = this.document.createElement('div');                                                          // 4435
                                                                                                                       // 4436
            toolbar.id = 'medium-editor-toolbar-' + this.getEditorId();                                                // 4437
            toolbar.className = 'medium-editor-toolbar';                                                               // 4438
                                                                                                                       // 4439
            if (this.static) {                                                                                         // 4440
                toolbar.className += ' static-toolbar';                                                                // 4441
            } else {                                                                                                   // 4442
                toolbar.className += ' medium-editor-stalker-toolbar';                                                 // 4443
            }                                                                                                          // 4444
                                                                                                                       // 4445
            toolbar.appendChild(this.createToolbarButtons());                                                          // 4446
                                                                                                                       // 4447
            // Add any forms that extensions may have                                                                  // 4448
            this.forEachExtension(function (extension) {                                                               // 4449
                if (extension.hasForm) {                                                                               // 4450
                    toolbar.appendChild(extension.getForm());                                                          // 4451
                }                                                                                                      // 4452
            });                                                                                                        // 4453
                                                                                                                       // 4454
            this.attachEventHandlers();                                                                                // 4455
                                                                                                                       // 4456
            return toolbar;                                                                                            // 4457
        },                                                                                                             // 4458
                                                                                                                       // 4459
        createToolbarButtons: function () {                                                                            // 4460
            var ul = this.document.createElement('ul'),                                                                // 4461
                li,                                                                                                    // 4462
                btn,                                                                                                   // 4463
                buttons,                                                                                               // 4464
                extension,                                                                                             // 4465
                buttonName,                                                                                            // 4466
                buttonOpts;                                                                                            // 4467
                                                                                                                       // 4468
            ul.id = 'medium-editor-toolbar-actions' + this.getEditorId();                                              // 4469
            ul.className = 'medium-editor-toolbar-actions';                                                            // 4470
            ul.style.display = 'block';                                                                                // 4471
                                                                                                                       // 4472
            this.buttons.forEach(function (button) {                                                                   // 4473
                if (typeof button === 'string') {                                                                      // 4474
                    buttonName = button;                                                                               // 4475
                    buttonOpts = null;                                                                                 // 4476
                } else {                                                                                               // 4477
                    buttonName = button.name;                                                                          // 4478
                    buttonOpts = button;                                                                               // 4479
                }                                                                                                      // 4480
                                                                                                                       // 4481
                // If the button already exists as an extension, it'll be returned                                     // 4482
                // othwerise it'll create the default built-in button                                                  // 4483
                extension = this.base.addBuiltInExtension(buttonName, buttonOpts);                                     // 4484
                                                                                                                       // 4485
                if (extension && typeof extension.getButton === 'function') {                                          // 4486
                    btn = extension.getButton(this.base);                                                              // 4487
                    li = this.document.createElement('li');                                                            // 4488
                    if (Util.isElement(btn)) {                                                                         // 4489
                        li.appendChild(btn);                                                                           // 4490
                    } else {                                                                                           // 4491
                        li.innerHTML = btn;                                                                            // 4492
                    }                                                                                                  // 4493
                    ul.appendChild(li);                                                                                // 4494
                }                                                                                                      // 4495
            }, this);                                                                                                  // 4496
                                                                                                                       // 4497
            buttons = ul.querySelectorAll('button');                                                                   // 4498
            if (buttons.length > 0) {                                                                                  // 4499
                buttons[0].classList.add(this.firstButtonClass);                                                       // 4500
                buttons[buttons.length - 1].classList.add(this.lastButtonClass);                                       // 4501
            }                                                                                                          // 4502
                                                                                                                       // 4503
            return ul;                                                                                                 // 4504
        },                                                                                                             // 4505
                                                                                                                       // 4506
        destroy: function () {                                                                                         // 4507
            if (this.toolbar) {                                                                                        // 4508
                if (this.toolbar.parentNode) {                                                                         // 4509
                    this.toolbar.parentNode.removeChild(this.toolbar);                                                 // 4510
                }                                                                                                      // 4511
                delete this.toolbar;                                                                                   // 4512
            }                                                                                                          // 4513
        },                                                                                                             // 4514
                                                                                                                       // 4515
        // Toolbar accessors                                                                                           // 4516
                                                                                                                       // 4517
        getToolbarElement: function () {                                                                               // 4518
            if (!this.toolbar) {                                                                                       // 4519
                this.toolbar = this.createToolbar();                                                                   // 4520
            }                                                                                                          // 4521
                                                                                                                       // 4522
            return this.toolbar;                                                                                       // 4523
        },                                                                                                             // 4524
                                                                                                                       // 4525
        getToolbarActionsElement: function () {                                                                        // 4526
            return this.getToolbarElement().querySelector('.medium-editor-toolbar-actions');                           // 4527
        },                                                                                                             // 4528
                                                                                                                       // 4529
        // Toolbar event handlers                                                                                      // 4530
                                                                                                                       // 4531
        initThrottledMethods: function () {                                                                            // 4532
            // throttledPositionToolbar is throttled because:                                                          // 4533
            // - It will be called when the browser is resizing, which can fire many times very quickly                // 4534
            // - For some event (like resize) a slight lag in UI responsiveness is OK and provides performance benefits
            this.throttledPositionToolbar = Util.throttle(function () {                                                // 4536
                if (this.base.isActive) {                                                                              // 4537
                    this.positionToolbarIfShown();                                                                     // 4538
                }                                                                                                      // 4539
            }.bind(this));                                                                                             // 4540
        },                                                                                                             // 4541
                                                                                                                       // 4542
        attachEventHandlers: function () {                                                                             // 4543
            // MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
            this.subscribe('blur', this.handleBlur.bind(this));                                                        // 4545
            this.subscribe('focus', this.handleFocus.bind(this));                                                      // 4546
                                                                                                                       // 4547
            // Updating the state of the toolbar as things change                                                      // 4548
            this.subscribe('editableClick', this.handleEditableClick.bind(this));                                      // 4549
            this.subscribe('editableKeyup', this.handleEditableKeyup.bind(this));                                      // 4550
                                                                                                                       // 4551
            // Handle mouseup on document for updating the selection in the toolbar                                    // 4552
            this.on(this.document.documentElement, 'mouseup', this.handleDocumentMouseup.bind(this));                  // 4553
                                                                                                                       // 4554
            // Add a scroll event for sticky toolbar                                                                   // 4555
            if (this.static && this.sticky) {                                                                          // 4556
                // On scroll (capture), re-position the toolbar                                                        // 4557
                this.on(this.window, 'scroll', this.handleWindowScroll.bind(this), true);                              // 4558
            }                                                                                                          // 4559
                                                                                                                       // 4560
            // On resize, re-position the toolbar                                                                      // 4561
            this.on(this.window, 'resize', this.handleWindowResize.bind(this));                                        // 4562
        },                                                                                                             // 4563
                                                                                                                       // 4564
        handleWindowScroll: function () {                                                                              // 4565
            this.positionToolbarIfShown();                                                                             // 4566
        },                                                                                                             // 4567
                                                                                                                       // 4568
        handleWindowResize: function () {                                                                              // 4569
            this.throttledPositionToolbar();                                                                           // 4570
        },                                                                                                             // 4571
                                                                                                                       // 4572
        handleDocumentMouseup: function (event) {                                                                      // 4573
            // Do not trigger checkState when mouseup fires over the toolbar                                           // 4574
            if (event &&                                                                                               // 4575
                    event.target &&                                                                                    // 4576
                    Util.isDescendant(this.getToolbarElement(), event.target)) {                                       // 4577
                return false;                                                                                          // 4578
            }                                                                                                          // 4579
            this.checkState();                                                                                         // 4580
        },                                                                                                             // 4581
                                                                                                                       // 4582
        handleEditableClick: function () {                                                                             // 4583
            // Delay the call to checkState to handle bug where selection is empty                                     // 4584
            // immediately after clicking inside a pre-existing selection                                              // 4585
            setTimeout(function () {                                                                                   // 4586
                this.checkState();                                                                                     // 4587
            }.bind(this), 0);                                                                                          // 4588
        },                                                                                                             // 4589
                                                                                                                       // 4590
        handleEditableKeyup: function () {                                                                             // 4591
            this.checkState();                                                                                         // 4592
        },                                                                                                             // 4593
                                                                                                                       // 4594
        handleBlur: function () {                                                                                      // 4595
            // Kill any previously delayed calls to hide the toolbar                                                   // 4596
            clearTimeout(this.hideTimeout);                                                                            // 4597
                                                                                                                       // 4598
            // Blur may fire even if we have a selection, so we want to prevent any delayed showToolbar                // 4599
            // calls from happening in this specific case                                                              // 4600
            clearTimeout(this.delayShowTimeout);                                                                       // 4601
                                                                                                                       // 4602
            // Delay the call to hideToolbar to handle bug with multiple editors on the page at once                   // 4603
            this.hideTimeout = setTimeout(function () {                                                                // 4604
                this.hideToolbar();                                                                                    // 4605
            }.bind(this), 1);                                                                                          // 4606
        },                                                                                                             // 4607
                                                                                                                       // 4608
        handleFocus: function () {                                                                                     // 4609
            this.checkState();                                                                                         // 4610
        },                                                                                                             // 4611
                                                                                                                       // 4612
        // Hiding/showing toolbar                                                                                      // 4613
                                                                                                                       // 4614
        isDisplayed: function () {                                                                                     // 4615
            return this.getToolbarElement().classList.contains('medium-editor-toolbar-active');                        // 4616
        },                                                                                                             // 4617
                                                                                                                       // 4618
        showToolbar: function () {                                                                                     // 4619
            clearTimeout(this.hideTimeout);                                                                            // 4620
            if (!this.isDisplayed()) {                                                                                 // 4621
                this.getToolbarElement().classList.add('medium-editor-toolbar-active');                                // 4622
                this.trigger('showToolbar', {}, this.base.getFocusedElement());                                        // 4623
            }                                                                                                          // 4624
        },                                                                                                             // 4625
                                                                                                                       // 4626
        hideToolbar: function () {                                                                                     // 4627
            if (this.isDisplayed()) {                                                                                  // 4628
                this.getToolbarElement().classList.remove('medium-editor-toolbar-active');                             // 4629
                this.trigger('hideToolbar', {}, this.base.getFocusedElement());                                        // 4630
            }                                                                                                          // 4631
        },                                                                                                             // 4632
                                                                                                                       // 4633
        isToolbarDefaultActionsDisplayed: function () {                                                                // 4634
            return this.getToolbarActionsElement().style.display === 'block';                                          // 4635
        },                                                                                                             // 4636
                                                                                                                       // 4637
        hideToolbarDefaultActions: function () {                                                                       // 4638
            if (this.isToolbarDefaultActionsDisplayed()) {                                                             // 4639
                this.getToolbarActionsElement().style.display = 'none';                                                // 4640
            }                                                                                                          // 4641
        },                                                                                                             // 4642
                                                                                                                       // 4643
        showToolbarDefaultActions: function () {                                                                       // 4644
            this.hideExtensionForms();                                                                                 // 4645
                                                                                                                       // 4646
            if (!this.isToolbarDefaultActionsDisplayed()) {                                                            // 4647
                this.getToolbarActionsElement().style.display = 'block';                                               // 4648
            }                                                                                                          // 4649
                                                                                                                       // 4650
            // Using setTimeout + options.delay because:                                                               // 4651
            // We will actually be displaying the toolbar, which should be controlled by options.delay                 // 4652
            this.delayShowTimeout = this.base.delay(function () {                                                      // 4653
                this.showToolbar();                                                                                    // 4654
            }.bind(this));                                                                                             // 4655
        },                                                                                                             // 4656
                                                                                                                       // 4657
        hideExtensionForms: function () {                                                                              // 4658
            // Hide all extension forms                                                                                // 4659
            this.forEachExtension(function (extension) {                                                               // 4660
                if (extension.hasForm && extension.isDisplayed()) {                                                    // 4661
                    extension.hideForm();                                                                              // 4662
                }                                                                                                      // 4663
            });                                                                                                        // 4664
        },                                                                                                             // 4665
                                                                                                                       // 4666
        // Responding to changes in user selection                                                                     // 4667
                                                                                                                       // 4668
        // Checks for existance of multiple block elements in the current selection                                    // 4669
        multipleBlockElementsSelected: function () {                                                                   // 4670
            var regexEmptyHTMLTags = /<[^\/>][^>]*><\/[^>]+>/gim, // http://stackoverflow.com/questions/3129738/remove-empty-tags-using-regex
                regexBlockElements = new RegExp('<(' + Util.blockContainerElementNames.join('|') + ')[^>]*>', 'g'),    // 4672
                selectionHTML = Selection.getSelectionHtml(this.document).replace(regexEmptyHTMLTags, ''), // Filter out empty blocks from selection
                hasMultiParagraphs = selectionHTML.match(regexBlockElements); // Find how many block elements are within the html
                                                                                                                       // 4675
            return !!hasMultiParagraphs && hasMultiParagraphs.length > 1;                                              // 4676
        },                                                                                                             // 4677
                                                                                                                       // 4678
        modifySelection: function () {                                                                                 // 4679
            var selection = this.window.getSelection(),                                                                // 4680
                selectionRange = selection.getRangeAt(0);                                                              // 4681
                                                                                                                       // 4682
            /*                                                                                                         // 4683
            * In firefox, there are cases (ie doubleclick of a word) where the selectionRange start                    // 4684
            * will be at the very end of an element.  In other browsers, the selectionRange start                      // 4685
            * would instead be at the very beginning of an element that actually has content.                          // 4686
            * example:                                                                                                 // 4687
            *   <span>foo</span><span>bar</span>                                                                       // 4688
            *                                                                                                          // 4689
            * If the text 'bar' is selected, most browsers will have the selectionRange start at the beginning         // 4690
            * of the 'bar' span.  However, there are cases where firefox will have the selectionRange start            // 4691
            * at the end of the 'foo' span.  The contenteditable behavior will be ok, but if there are any             // 4692
            * properties on the 'bar' span, they won't be reflected accurately in the toolbar                          // 4693
            * (ie 'Bold' button wouldn't be active)                                                                    // 4694
            *                                                                                                          // 4695
            * So, for cases where the selectionRange start is at the end of an element/node, find the next             // 4696
            * adjacent text node that actually has content in it, and move the selectionRange start there.             // 4697
            */                                                                                                         // 4698
            if (this.standardizeSelectionStart &&                                                                      // 4699
                    selectionRange.startContainer.nodeValue &&                                                         // 4700
                    (selectionRange.startOffset === selectionRange.startContainer.nodeValue.length)) {                 // 4701
                var adjacentNode = Util.findAdjacentTextNodeWithContent(Selection.getSelectionElement(this.window), selectionRange.startContainer, this.document);
                if (adjacentNode) {                                                                                    // 4703
                    var offset = 0;                                                                                    // 4704
                    while (adjacentNode.nodeValue.substr(offset, 1).trim().length === 0) {                             // 4705
                        offset = offset + 1;                                                                           // 4706
                    }                                                                                                  // 4707
                    selectionRange = Selection.select(this.document, adjacentNode, offset,                             // 4708
                        selectionRange.endContainer, selectionRange.offset);                                           // 4709
                }                                                                                                      // 4710
            }                                                                                                          // 4711
        },                                                                                                             // 4712
                                                                                                                       // 4713
        checkState: function () {                                                                                      // 4714
            if (this.base.preventSelectionUpdates) {                                                                   // 4715
                return;                                                                                                // 4716
            }                                                                                                          // 4717
                                                                                                                       // 4718
            // If no editable has focus OR selection is inside contenteditable = false                                 // 4719
            // hide toolbar                                                                                            // 4720
            if (!this.base.getFocusedElement() ||                                                                      // 4721
                    Selection.selectionInContentEditableFalse(this.window)) {                                          // 4722
                return this.hideToolbar();                                                                             // 4723
            }                                                                                                          // 4724
                                                                                                                       // 4725
            // If there's no selection element, selection element doesn't belong to this editor                        // 4726
            // or toolbar is disabled for this selection element                                                       // 4727
            // hide toolbar                                                                                            // 4728
            var selectionElement = Selection.getSelectionElement(this.window);                                         // 4729
            if (!selectionElement ||                                                                                   // 4730
                    this.getEditorElements().indexOf(selectionElement) === -1 ||                                       // 4731
                    selectionElement.getAttribute('data-disable-toolbar')) {                                           // 4732
                return this.hideToolbar();                                                                             // 4733
            }                                                                                                          // 4734
                                                                                                                       // 4735
            // Now we know there's a focused editable with a selection                                                 // 4736
                                                                                                                       // 4737
            // If the updateOnEmptySelection option is true, show the toolbar                                          // 4738
            if (this.updateOnEmptySelection && this.static) {                                                          // 4739
                return this.showAndUpdateToolbar();                                                                    // 4740
            }                                                                                                          // 4741
                                                                                                                       // 4742
            // If we don't have a 'valid' selection -> hide toolbar                                                    // 4743
            if (this.window.getSelection().toString().trim() === '' ||                                                 // 4744
                (this.allowMultiParagraphSelection === false && this.multipleBlockElementsSelected())) {               // 4745
                return this.hideToolbar();                                                                             // 4746
            }                                                                                                          // 4747
                                                                                                                       // 4748
            this.showAndUpdateToolbar();                                                                               // 4749
        },                                                                                                             // 4750
                                                                                                                       // 4751
        // Updating the toolbar                                                                                        // 4752
                                                                                                                       // 4753
        showAndUpdateToolbar: function () {                                                                            // 4754
            this.modifySelection();                                                                                    // 4755
            this.setToolbarButtonStates();                                                                             // 4756
            this.trigger('positionToolbar', {}, this.base.getFocusedElement());                                        // 4757
            this.showToolbarDefaultActions();                                                                          // 4758
            this.setToolbarPosition();                                                                                 // 4759
        },                                                                                                             // 4760
                                                                                                                       // 4761
        setToolbarButtonStates: function () {                                                                          // 4762
            this.forEachExtension(function (extension) {                                                               // 4763
                if (typeof extension.isActive === 'function' &&                                                        // 4764
                    typeof extension.setInactive === 'function') {                                                     // 4765
                    extension.setInactive();                                                                           // 4766
                }                                                                                                      // 4767
            });                                                                                                        // 4768
                                                                                                                       // 4769
            this.checkActiveButtons();                                                                                 // 4770
        },                                                                                                             // 4771
                                                                                                                       // 4772
        checkActiveButtons: function () {                                                                              // 4773
            var manualStateChecks = [],                                                                                // 4774
                queryState = null,                                                                                     // 4775
                selectionRange = Selection.getSelectionRange(this.document),                                           // 4776
                parentNode,                                                                                            // 4777
                updateExtensionState = function (extension) {                                                          // 4778
                    if (typeof extension.checkState === 'function') {                                                  // 4779
                        extension.checkState(parentNode);                                                              // 4780
                    } else if (typeof extension.isActive === 'function' &&                                             // 4781
                               typeof extension.isAlreadyApplied === 'function' &&                                     // 4782
                               typeof extension.setActive === 'function') {                                            // 4783
                        if (!extension.isActive() && extension.isAlreadyApplied(parentNode)) {                         // 4784
                            extension.setActive();                                                                     // 4785
                        }                                                                                              // 4786
                    }                                                                                                  // 4787
                };                                                                                                     // 4788
                                                                                                                       // 4789
            if (!selectionRange) {                                                                                     // 4790
                return;                                                                                                // 4791
            }                                                                                                          // 4792
                                                                                                                       // 4793
            // Loop through all extensions                                                                             // 4794
            this.forEachExtension(function (extension) {                                                               // 4795
                // For those extensions where we can use document.queryCommandState(), do so                           // 4796
                if (typeof extension.queryCommandState === 'function') {                                               // 4797
                    queryState = extension.queryCommandState();                                                        // 4798
                    // If queryCommandState returns a valid value, we can trust the browser                            // 4799
                    // and don't need to do our manual checks                                                          // 4800
                    if (queryState !== null) {                                                                         // 4801
                        if (queryState && typeof extension.setActive === 'function') {                                 // 4802
                            extension.setActive();                                                                     // 4803
                        }                                                                                              // 4804
                        return;                                                                                        // 4805
                    }                                                                                                  // 4806
                }                                                                                                      // 4807
                // We can't use queryCommandState for this extension, so add to manualStateChecks                      // 4808
                manualStateChecks.push(extension);                                                                     // 4809
            });                                                                                                        // 4810
                                                                                                                       // 4811
            parentNode = Selection.getSelectedParentElement(selectionRange);                                           // 4812
                                                                                                                       // 4813
            // Make sure the selection parent isn't outside of the contenteditable                                     // 4814
            if (!this.getEditorElements().some(function (element) {                                                    // 4815
                    return Util.isDescendant(element, parentNode, true);                                               // 4816
                })) {                                                                                                  // 4817
                return;                                                                                                // 4818
            }                                                                                                          // 4819
                                                                                                                       // 4820
            // Climb up the DOM and do manual checks for whether a certain extension is currently enabled for this node
            while (parentNode) {                                                                                       // 4822
                manualStateChecks.forEach(updateExtensionState);                                                       // 4823
                                                                                                                       // 4824
                // we can abort the search upwards if we leave the contentEditable element                             // 4825
                if (Util.isMediumEditorElement(parentNode)) {                                                          // 4826
                    break;                                                                                             // 4827
                }                                                                                                      // 4828
                parentNode = parentNode.parentNode;                                                                    // 4829
            }                                                                                                          // 4830
        },                                                                                                             // 4831
                                                                                                                       // 4832
        // Positioning toolbar                                                                                         // 4833
                                                                                                                       // 4834
        positionToolbarIfShown: function () {                                                                          // 4835
            if (this.isDisplayed()) {                                                                                  // 4836
                this.setToolbarPosition();                                                                             // 4837
            }                                                                                                          // 4838
        },                                                                                                             // 4839
                                                                                                                       // 4840
        setToolbarPosition: function () {                                                                              // 4841
            var container = this.base.getFocusedElement(),                                                             // 4842
                selection = this.window.getSelection(),                                                                // 4843
                anchorPreview;                                                                                         // 4844
                                                                                                                       // 4845
            // If there isn't a valid selection, bail                                                                  // 4846
            if (!container) {                                                                                          // 4847
                return this;                                                                                           // 4848
            }                                                                                                          // 4849
                                                                                                                       // 4850
            if (this.static) {                                                                                         // 4851
                this.showToolbar();                                                                                    // 4852
                this.positionStaticToolbar(container);                                                                 // 4853
            } else if (!selection.isCollapsed) {                                                                       // 4854
                this.showToolbar();                                                                                    // 4855
                this.positionToolbar(selection);                                                                       // 4856
            }                                                                                                          // 4857
                                                                                                                       // 4858
            anchorPreview = this.base.getExtensionByName('anchor-preview');                                            // 4859
                                                                                                                       // 4860
            if (anchorPreview && typeof anchorPreview.hidePreview === 'function') {                                    // 4861
                anchorPreview.hidePreview();                                                                           // 4862
            }                                                                                                          // 4863
        },                                                                                                             // 4864
                                                                                                                       // 4865
        positionStaticToolbar: function (container) {                                                                  // 4866
            // position the toolbar at left 0, so we can get the real width of the toolbar                             // 4867
            this.getToolbarElement().style.left = '0';                                                                 // 4868
                                                                                                                       // 4869
            // document.documentElement for IE 9                                                                       // 4870
            var scrollTop = (this.document.documentElement && this.document.documentElement.scrollTop) || this.document.body.scrollTop,
                windowWidth = this.window.innerWidth,                                                                  // 4872
                toolbarElement = this.getToolbarElement(),                                                             // 4873
                containerRect = container.getBoundingClientRect(),                                                     // 4874
                containerTop = containerRect.top + scrollTop,                                                          // 4875
                containerCenter = (containerRect.left + (containerRect.width / 2)),                                    // 4876
                toolbarHeight = toolbarElement.offsetHeight,                                                           // 4877
                toolbarWidth = toolbarElement.offsetWidth,                                                             // 4878
                halfOffsetWidth = toolbarWidth / 2,                                                                    // 4879
                targetLeft;                                                                                            // 4880
                                                                                                                       // 4881
            if (this.sticky) {                                                                                         // 4882
                // If it's beyond the height of the editor, position it at the bottom of the editor                    // 4883
                if (scrollTop > (containerTop + container.offsetHeight - toolbarHeight)) {                             // 4884
                    toolbarElement.style.top = (containerTop + container.offsetHeight - toolbarHeight) + 'px';         // 4885
                    toolbarElement.classList.remove('medium-editor-sticky-toolbar');                                   // 4886
                                                                                                                       // 4887
                // Stick the toolbar to the top of the window                                                          // 4888
                } else if (scrollTop > (containerTop - toolbarHeight)) {                                               // 4889
                    toolbarElement.classList.add('medium-editor-sticky-toolbar');                                      // 4890
                    toolbarElement.style.top = '0px';                                                                  // 4891
                                                                                                                       // 4892
                // Normal static toolbar position                                                                      // 4893
                } else {                                                                                               // 4894
                    toolbarElement.classList.remove('medium-editor-sticky-toolbar');                                   // 4895
                    toolbarElement.style.top = containerTop - toolbarHeight + 'px';                                    // 4896
                }                                                                                                      // 4897
            } else {                                                                                                   // 4898
                toolbarElement.style.top = containerTop - toolbarHeight + 'px';                                        // 4899
            }                                                                                                          // 4900
                                                                                                                       // 4901
            switch (this.align) {                                                                                      // 4902
                case 'left':                                                                                           // 4903
                    targetLeft = containerRect.left;                                                                   // 4904
                    break;                                                                                             // 4905
                                                                                                                       // 4906
                case 'right':                                                                                          // 4907
                    targetLeft = containerRect.right - toolbarWidth;                                                   // 4908
                    break;                                                                                             // 4909
                                                                                                                       // 4910
                case 'center':                                                                                         // 4911
                    targetLeft = containerCenter - halfOffsetWidth;                                                    // 4912
                    break;                                                                                             // 4913
            }                                                                                                          // 4914
                                                                                                                       // 4915
            if (targetLeft < 0) {                                                                                      // 4916
                targetLeft = 0;                                                                                        // 4917
            } else if ((targetLeft + toolbarWidth) > windowWidth) {                                                    // 4918
                targetLeft = (windowWidth - Math.ceil(toolbarWidth) - 1);                                              // 4919
            }                                                                                                          // 4920
                                                                                                                       // 4921
            toolbarElement.style.left = targetLeft + 'px';                                                             // 4922
        },                                                                                                             // 4923
                                                                                                                       // 4924
        positionToolbar: function (selection) {                                                                        // 4925
            // position the toolbar at left 0, so we can get the real width of the toolbar                             // 4926
            this.getToolbarElement().style.left = '0';                                                                 // 4927
                                                                                                                       // 4928
            var windowWidth = this.window.innerWidth,                                                                  // 4929
                range = selection.getRangeAt(0),                                                                       // 4930
                boundary = range.getBoundingClientRect(),                                                              // 4931
                middleBoundary = (boundary.left + boundary.right) / 2,                                                 // 4932
                toolbarElement = this.getToolbarElement(),                                                             // 4933
                toolbarHeight = toolbarElement.offsetHeight,                                                           // 4934
                toolbarWidth = toolbarElement.offsetWidth,                                                             // 4935
                halfOffsetWidth = toolbarWidth / 2,                                                                    // 4936
                buttonHeight = 50,                                                                                     // 4937
                defaultLeft = this.diffLeft - halfOffsetWidth;                                                         // 4938
                                                                                                                       // 4939
            if (boundary.top < buttonHeight) {                                                                         // 4940
                toolbarElement.classList.add('medium-toolbar-arrow-over');                                             // 4941
                toolbarElement.classList.remove('medium-toolbar-arrow-under');                                         // 4942
                toolbarElement.style.top = buttonHeight + boundary.bottom - this.diffTop + this.window.pageYOffset - toolbarHeight + 'px';
            } else {                                                                                                   // 4944
                toolbarElement.classList.add('medium-toolbar-arrow-under');                                            // 4945
                toolbarElement.classList.remove('medium-toolbar-arrow-over');                                          // 4946
                toolbarElement.style.top = boundary.top + this.diffTop + this.window.pageYOffset - toolbarHeight + 'px';
            }                                                                                                          // 4948
                                                                                                                       // 4949
            if (middleBoundary < halfOffsetWidth) {                                                                    // 4950
                toolbarElement.style.left = defaultLeft + halfOffsetWidth + 'px';                                      // 4951
            } else if ((windowWidth - middleBoundary) < halfOffsetWidth) {                                             // 4952
                toolbarElement.style.left = windowWidth + defaultLeft - halfOffsetWidth + 'px';                        // 4953
            } else {                                                                                                   // 4954
                toolbarElement.style.left = defaultLeft + middleBoundary + 'px';                                       // 4955
            }                                                                                                          // 4956
        }                                                                                                              // 4957
    });                                                                                                                // 4958
}());                                                                                                                  // 4959
                                                                                                                       // 4960
var extensionDefaults;                                                                                                 // 4961
(function () {                                                                                                         // 4962
    // for now this is empty because nothing interally uses an Extension default.                                      // 4963
    // as they are converted, provide them here.                                                                       // 4964
    extensionDefaults = {                                                                                              // 4965
        button: Button,                                                                                                // 4966
        form: FormExtension,                                                                                           // 4967
                                                                                                                       // 4968
        anchor: AnchorForm,                                                                                            // 4969
        anchorPreview: AnchorPreview,                                                                                  // 4970
        autoLink: AutoLink,                                                                                            // 4971
        fontSize: FontSizeForm,                                                                                        // 4972
        imageDragging: ImageDragging,                                                                                  // 4973
        keyboardCommands: KeyboardCommands,                                                                            // 4974
        paste: PasteHandler,                                                                                           // 4975
        placeholder: Placeholder,                                                                                      // 4976
        toolbar: Toolbar                                                                                               // 4977
    };                                                                                                                 // 4978
})();                                                                                                                  // 4979
                                                                                                                       // 4980
function MediumEditor(elements, options) {                                                                             // 4981
    'use strict';                                                                                                      // 4982
    return this.init(elements, options);                                                                               // 4983
}                                                                                                                      // 4984
                                                                                                                       // 4985
(function () {                                                                                                         // 4986
    'use strict';                                                                                                      // 4987
                                                                                                                       // 4988
    // Event handlers that shouldn't be exposed externally                                                             // 4989
                                                                                                                       // 4990
    function handleDisabledEnterKeydown(event, element) {                                                              // 4991
        if (this.options.disableReturn || element.getAttribute('data-disable-return')) {                               // 4992
            event.preventDefault();                                                                                    // 4993
        } else if (this.options.disableDoubleReturn || element.getAttribute('data-disable-double-return')) {           // 4994
            var node = Selection.getSelectionStart(this.options.ownerDocument);                                        // 4995
                                                                                                                       // 4996
            // if current text selection is empty OR previous sibling text is empty                                    // 4997
            if ((node && node.textContent.trim() === '') ||                                                            // 4998
                (node.previousElementSibling && node.previousElementSibling.textContent.trim() === '')) {              // 4999
                event.preventDefault();                                                                                // 5000
            }                                                                                                          // 5001
        }                                                                                                              // 5002
    }                                                                                                                  // 5003
                                                                                                                       // 5004
    function handleTabKeydown(event) {                                                                                 // 5005
        // Override tab only for pre nodes                                                                             // 5006
        var node = Selection.getSelectionStart(this.options.ownerDocument),                                            // 5007
            tag = node && node.nodeName.toLowerCase();                                                                 // 5008
                                                                                                                       // 5009
        if (tag === 'pre') {                                                                                           // 5010
            event.preventDefault();                                                                                    // 5011
            Util.insertHTMLCommand(this.options.ownerDocument, '    ');                                                // 5012
        }                                                                                                              // 5013
                                                                                                                       // 5014
        // Tab to indent list structures!                                                                              // 5015
        if (Util.isListItem(node)) {                                                                                   // 5016
            event.preventDefault();                                                                                    // 5017
                                                                                                                       // 5018
            // If Shift is down, outdent, otherwise indent                                                             // 5019
            if (event.shiftKey) {                                                                                      // 5020
                this.options.ownerDocument.execCommand('outdent', false, null);                                        // 5021
            } else {                                                                                                   // 5022
                this.options.ownerDocument.execCommand('indent', false, null);                                         // 5023
            }                                                                                                          // 5024
        }                                                                                                              // 5025
    }                                                                                                                  // 5026
                                                                                                                       // 5027
    function handleBlockDeleteKeydowns(event) {                                                                        // 5028
        var p, node = Selection.getSelectionStart(this.options.ownerDocument),                                         // 5029
            tagName = node.nodeName.toLowerCase(),                                                                     // 5030
            isEmpty = /^(\s+|<br\/?>)?$/i,                                                                             // 5031
            isHeader = /h\d/i;                                                                                         // 5032
                                                                                                                       // 5033
        if (Util.isKey(event, [Util.keyCode.BACKSPACE, Util.keyCode.ENTER]) &&                                         // 5034
                // has a preceeding sibling                                                                            // 5035
                node.previousElementSibling &&                                                                         // 5036
                // in a header                                                                                         // 5037
                isHeader.test(tagName) &&                                                                              // 5038
                // at the very end of the block                                                                        // 5039
                Selection.getCaretOffsets(node).left === 0) {                                                          // 5040
            if (Util.isKey(event, Util.keyCode.BACKSPACE) && isEmpty.test(node.previousElementSibling.innerHTML)) {    // 5041
                // backspacing the begining of a header into an empty previous element will                            // 5042
                // change the tagName of the current node to prevent one                                               // 5043
                // instead delete previous node and cancel the event.                                                  // 5044
                node.previousElementSibling.parentNode.removeChild(node.previousElementSibling);                       // 5045
                event.preventDefault();                                                                                // 5046
            } else if (Util.isKey(event, Util.keyCode.ENTER)) {                                                        // 5047
                // hitting return in the begining of a header will create empty header elements before the current one // 5048
                // instead, make "<p><br></p>" element, which are what happens if you hit return in an empty paragraph // 5049
                p = this.options.ownerDocument.createElement('p');                                                     // 5050
                p.innerHTML = '<br>';                                                                                  // 5051
                node.previousElementSibling.parentNode.insertBefore(p, node);                                          // 5052
                event.preventDefault();                                                                                // 5053
            }                                                                                                          // 5054
        } else if (Util.isKey(event, Util.keyCode.DELETE) &&                                                           // 5055
                    // between two sibling elements                                                                    // 5056
                    node.nextElementSibling &&                                                                         // 5057
                    node.previousElementSibling &&                                                                     // 5058
                    // not in a header                                                                                 // 5059
                    !isHeader.test(tagName) &&                                                                         // 5060
                    // in an empty tag                                                                                 // 5061
                    isEmpty.test(node.innerHTML) &&                                                                    // 5062
                    // when the next tag *is* a header                                                                 // 5063
                    isHeader.test(node.nextElementSibling.nodeName.toLowerCase())) {                                   // 5064
            // hitting delete in an empty element preceding a header, ex:                                              // 5065
            //  <p>[CURSOR]</p><h1>Header</h1>                                                                         // 5066
            // Will cause the h1 to become a paragraph.                                                                // 5067
            // Instead, delete the paragraph node and move the cursor to the begining of the h1                        // 5068
                                                                                                                       // 5069
            // remove node and move cursor to start of header                                                          // 5070
            Selection.moveCursor(this.options.ownerDocument, node.nextElementSibling);                                 // 5071
                                                                                                                       // 5072
            node.previousElementSibling.parentNode.removeChild(node);                                                  // 5073
                                                                                                                       // 5074
            event.preventDefault();                                                                                    // 5075
        } else if (Util.isKey(event, Util.keyCode.BACKSPACE) &&                                                        // 5076
                tagName === 'li' &&                                                                                    // 5077
                // hitting backspace inside an empty li                                                                // 5078
                isEmpty.test(node.innerHTML) &&                                                                        // 5079
                // is first element (no preceeding siblings)                                                           // 5080
                !node.previousElementSibling &&                                                                        // 5081
                // parent also does not have a sibling                                                                 // 5082
                !node.parentElement.previousElementSibling &&                                                          // 5083
                // is not the only li in a list                                                                        // 5084
                node.nextElementSibling &&                                                                             // 5085
                node.nextElementSibling.nodeName.toLowerCase() === 'li') {                                             // 5086
            // backspacing in an empty first list element in the first list (with more elements) ex:                   // 5087
            //  <ul><li>[CURSOR]</li><li>List Item 2</li></ul>                                                         // 5088
            // will remove the first <li> but add some extra element before (varies based on browser)                  // 5089
            // Instead, this will:                                                                                     // 5090
            // 1) remove the list element                                                                              // 5091
            // 2) create a paragraph before the list                                                                   // 5092
            // 3) move the cursor into the paragraph                                                                   // 5093
                                                                                                                       // 5094
            // create a paragraph before the list                                                                      // 5095
            p = this.options.ownerDocument.createElement('p');                                                         // 5096
            p.innerHTML = '<br>';                                                                                      // 5097
            node.parentElement.parentElement.insertBefore(p, node.parentElement);                                      // 5098
                                                                                                                       // 5099
            // move the cursor into the new paragraph                                                                  // 5100
            Selection.moveCursor(this.options.ownerDocument, p);                                                       // 5101
                                                                                                                       // 5102
            // remove the list element                                                                                 // 5103
            node.parentElement.removeChild(node);                                                                      // 5104
                                                                                                                       // 5105
            event.preventDefault();                                                                                    // 5106
        }                                                                                                              // 5107
    }                                                                                                                  // 5108
                                                                                                                       // 5109
    function handleKeyup(event) {                                                                                      // 5110
        var node = Selection.getSelectionStart(this.options.ownerDocument),                                            // 5111
            tagName;                                                                                                   // 5112
                                                                                                                       // 5113
        if (!node) {                                                                                                   // 5114
            return;                                                                                                    // 5115
        }                                                                                                              // 5116
                                                                                                                       // 5117
        if (Util.isMediumEditorElement(node) && node.children.length === 0) {                                          // 5118
            this.options.ownerDocument.execCommand('formatBlock', false, 'p');                                         // 5119
        }                                                                                                              // 5120
                                                                                                                       // 5121
        if (Util.isKey(event, Util.keyCode.ENTER) && !Util.isListItem(node)) {                                         // 5122
            tagName = node.nodeName.toLowerCase();                                                                     // 5123
            // For anchor tags, unlink                                                                                 // 5124
            if (tagName === 'a') {                                                                                     // 5125
                this.options.ownerDocument.execCommand('unlink', false, null);                                         // 5126
            } else if (!event.shiftKey && !event.ctrlKey) {                                                            // 5127
                // only format block if this is not a header tag                                                       // 5128
                if (!/h\d/.test(tagName)) {                                                                            // 5129
                    this.options.ownerDocument.execCommand('formatBlock', false, 'p');                                 // 5130
                }                                                                                                      // 5131
            }                                                                                                          // 5132
        }                                                                                                              // 5133
    }                                                                                                                  // 5134
                                                                                                                       // 5135
    // Internal helper methods which shouldn't be exposed externally                                                   // 5136
                                                                                                                       // 5137
    function addToEditors(win) {                                                                                       // 5138
        if (!win._mediumEditors) {                                                                                     // 5139
            // To avoid breaking users who are assuming that the unique id on                                          // 5140
            // medium-editor elements will start at 1, inserting a 'null' in the                                       // 5141
            // array so the unique-id can always map to the index of the editor instance                               // 5142
            win._mediumEditors = [null];                                                                               // 5143
        }                                                                                                              // 5144
                                                                                                                       // 5145
        // If this already has a unique id, re-use it                                                                  // 5146
        if (!this.id) {                                                                                                // 5147
            this.id = win._mediumEditors.length;                                                                       // 5148
        }                                                                                                              // 5149
                                                                                                                       // 5150
        win._mediumEditors[this.id] = this;                                                                            // 5151
    }                                                                                                                  // 5152
                                                                                                                       // 5153
    function removeFromEditors(win) {                                                                                  // 5154
        if (!win._mediumEditors || !win._mediumEditors[this.id]) {                                                     // 5155
            return;                                                                                                    // 5156
        }                                                                                                              // 5157
                                                                                                                       // 5158
        /* Setting the instance to null in the array instead of deleting it allows:                                    // 5159
         * 1) Each instance to preserve its own unique-id, even after being destroyed                                  // 5160
         *    and initialized again                                                                                    // 5161
         * 2) The unique-id to always correspond to an index in the array of medium-editor                             // 5162
         *    instances. Thus, we will be able to look at a contenteditable, and determine                             // 5163
         *    which instance it belongs to, by indexing into the global array.                                         // 5164
         */                                                                                                            // 5165
        win._mediumEditors[this.id] = null;                                                                            // 5166
    }                                                                                                                  // 5167
                                                                                                                       // 5168
    function createElementsArray(selector) {                                                                           // 5169
        if (!selector) {                                                                                               // 5170
            selector = [];                                                                                             // 5171
        }                                                                                                              // 5172
        // If string, use as query selector                                                                            // 5173
        if (typeof selector === 'string') {                                                                            // 5174
            selector = this.options.ownerDocument.querySelectorAll(selector);                                          // 5175
        }                                                                                                              // 5176
        // If element, put into array                                                                                  // 5177
        if (Util.isElement(selector)) {                                                                                // 5178
            selector = [selector];                                                                                     // 5179
        }                                                                                                              // 5180
        // Convert NodeList (or other array like object) into an array                                                 // 5181
        var elements = Array.prototype.slice.apply(selector);                                                          // 5182
                                                                                                                       // 5183
        // Loop through elements and convert textarea's into divs                                                      // 5184
        this.elements = [];                                                                                            // 5185
        elements.forEach(function (element, index) {                                                                   // 5186
            if (element.nodeName.toLowerCase() === 'textarea') {                                                       // 5187
                this.elements.push(createContentEditable.call(this, element, index));                                  // 5188
            } else {                                                                                                   // 5189
                this.elements.push(element);                                                                           // 5190
            }                                                                                                          // 5191
        }, this);                                                                                                      // 5192
    }                                                                                                                  // 5193
                                                                                                                       // 5194
    function setExtensionDefaults(extension, defaults) {                                                               // 5195
        Object.keys(defaults).forEach(function (prop) {                                                                // 5196
            if (extension[prop] === undefined) {                                                                       // 5197
                extension[prop] = defaults[prop];                                                                      // 5198
            }                                                                                                          // 5199
        });                                                                                                            // 5200
        return extension;                                                                                              // 5201
    }                                                                                                                  // 5202
                                                                                                                       // 5203
    function initExtension(extension, name, instance) {                                                                // 5204
        var extensionDefaults = {                                                                                      // 5205
            'window': instance.options.contentWindow,                                                                  // 5206
            'document': instance.options.ownerDocument,                                                                // 5207
            'base': instance                                                                                           // 5208
        };                                                                                                             // 5209
                                                                                                                       // 5210
        // Add default options into the extension                                                                      // 5211
        extension = setExtensionDefaults(extension, extensionDefaults);                                                // 5212
                                                                                                                       // 5213
        // Call init on the extension                                                                                  // 5214
        if (typeof extension.init === 'function') {                                                                    // 5215
            extension.init();                                                                                          // 5216
        }                                                                                                              // 5217
                                                                                                                       // 5218
        // Set extension name (if not already set)                                                                     // 5219
        if (!extension.name) {                                                                                         // 5220
            extension.name = name;                                                                                     // 5221
        }                                                                                                              // 5222
        return extension;                                                                                              // 5223
    }                                                                                                                  // 5224
                                                                                                                       // 5225
    function isToolbarEnabled() {                                                                                      // 5226
        // If any of the elements don't have the toolbar disabled                                                      // 5227
        // We need a toolbar                                                                                           // 5228
        if (this.elements.every(function (element) {                                                                   // 5229
                return !!element.getAttribute('data-disable-toolbar');                                                 // 5230
            })) {                                                                                                      // 5231
            return false;                                                                                              // 5232
        }                                                                                                              // 5233
                                                                                                                       // 5234
        return this.options.toolbar !== false;                                                                         // 5235
    }                                                                                                                  // 5236
                                                                                                                       // 5237
    function isAnchorPreviewEnabled() {                                                                                // 5238
        // If toolbar is disabled, don't add                                                                           // 5239
        if (!isToolbarEnabled.call(this)) {                                                                            // 5240
            return false;                                                                                              // 5241
        }                                                                                                              // 5242
                                                                                                                       // 5243
        return this.options.anchorPreview !== false;                                                                   // 5244
    }                                                                                                                  // 5245
                                                                                                                       // 5246
    function isPlaceholderEnabled() {                                                                                  // 5247
        return this.options.placeholder !== false;                                                                     // 5248
    }                                                                                                                  // 5249
                                                                                                                       // 5250
    function isAutoLinkEnabled() {                                                                                     // 5251
        return this.options.autoLink !== false;                                                                        // 5252
    }                                                                                                                  // 5253
                                                                                                                       // 5254
    function isImageDraggingEnabled() {                                                                                // 5255
        return this.options.imageDragging !== false;                                                                   // 5256
    }                                                                                                                  // 5257
                                                                                                                       // 5258
    function isKeyboardCommandsEnabled() {                                                                             // 5259
        return this.options.keyboardCommands !== false;                                                                // 5260
    }                                                                                                                  // 5261
                                                                                                                       // 5262
    function createContentEditable(textarea, id) {                                                                     // 5263
        var div = this.options.ownerDocument.createElement('div'),                                                     // 5264
            uniqueId = 'medium-editor-' + Date.now() + '-' + id,                                                       // 5265
            attributesToClone = [                                                                                      // 5266
                'data-disable-editing',                                                                                // 5267
                'data-disable-toolbar',                                                                                // 5268
                'data-placeholder',                                                                                    // 5269
                'data-disable-return',                                                                                 // 5270
                'data-disable-double-return',                                                                          // 5271
                'data-disable-preview',                                                                                // 5272
                'spellcheck'                                                                                           // 5273
            ];                                                                                                         // 5274
                                                                                                                       // 5275
        div.className = textarea.className;                                                                            // 5276
        div.id = uniqueId;                                                                                             // 5277
        div.innerHTML = textarea.value;                                                                                // 5278
        div.setAttribute('medium-editor-textarea-id', id);                                                             // 5279
        attributesToClone.forEach(function (attr) {                                                                    // 5280
            if (textarea.hasAttribute(attr)) {                                                                         // 5281
                div.setAttribute(attr, textarea.getAttribute(attr));                                                   // 5282
            }                                                                                                          // 5283
        });                                                                                                            // 5284
                                                                                                                       // 5285
        textarea.classList.add('medium-editor-hidden');                                                                // 5286
        textarea.setAttribute('medium-editor-textarea-id', id);                                                        // 5287
        textarea.parentNode.insertBefore(                                                                              // 5288
            div,                                                                                                       // 5289
            textarea                                                                                                   // 5290
        );                                                                                                             // 5291
                                                                                                                       // 5292
        return div;                                                                                                    // 5293
    }                                                                                                                  // 5294
                                                                                                                       // 5295
    function initElements() {                                                                                          // 5296
        this.elements.forEach(function (element, index) {                                                              // 5297
            if (!this.options.disableEditing && !element.getAttribute('data-disable-editing')) {                       // 5298
                element.setAttribute('contentEditable', true);                                                         // 5299
                element.setAttribute('spellcheck', this.options.spellcheck);                                           // 5300
            }                                                                                                          // 5301
            element.setAttribute('data-medium-editor-element', true);                                                  // 5302
            element.setAttribute('role', 'textbox');                                                                   // 5303
            element.setAttribute('aria-multiline', true);                                                              // 5304
            element.setAttribute('medium-editor-index', index);                                                        // 5305
                                                                                                                       // 5306
            if (element.hasAttribute('medium-editor-textarea-id')) {                                                   // 5307
                this.on(element, 'input', function (event) {                                                           // 5308
                    var target = event.target,                                                                         // 5309
                        textarea = target.parentNode.querySelector('textarea[medium-editor-textarea-id="' + target.getAttribute('medium-editor-textarea-id') + '"]');
                    if (textarea) {                                                                                    // 5311
                        textarea.value = this.serialize()[target.id].value;                                            // 5312
                    }                                                                                                  // 5313
                }.bind(this));                                                                                         // 5314
            }                                                                                                          // 5315
        }, this);                                                                                                      // 5316
    }                                                                                                                  // 5317
                                                                                                                       // 5318
    function attachHandlers() {                                                                                        // 5319
        var i;                                                                                                         // 5320
                                                                                                                       // 5321
        // attach to tabs                                                                                              // 5322
        this.subscribe('editableKeydownTab', handleTabKeydown.bind(this));                                             // 5323
                                                                                                                       // 5324
        // Bind keys which can create or destroy a block element: backspace, delete, return                            // 5325
        this.subscribe('editableKeydownDelete', handleBlockDeleteKeydowns.bind(this));                                 // 5326
        this.subscribe('editableKeydownEnter', handleBlockDeleteKeydowns.bind(this));                                  // 5327
                                                                                                                       // 5328
        // disabling return or double return                                                                           // 5329
        if (this.options.disableReturn || this.options.disableDoubleReturn) {                                          // 5330
            this.subscribe('editableKeydownEnter', handleDisabledEnterKeydown.bind(this));                             // 5331
        } else {                                                                                                       // 5332
            for (i = 0; i < this.elements.length; i += 1) {                                                            // 5333
                if (this.elements[i].getAttribute('data-disable-return') || this.elements[i].getAttribute('data-disable-double-return')) {
                    this.subscribe('editableKeydownEnter', handleDisabledEnterKeydown.bind(this));                     // 5335
                    break;                                                                                             // 5336
                }                                                                                                      // 5337
            }                                                                                                          // 5338
        }                                                                                                              // 5339
                                                                                                                       // 5340
        // if we're not disabling return, add a handler to help handle cleanup                                         // 5341
        // for certain cases when enter is pressed                                                                     // 5342
        if (!this.options.disableReturn) {                                                                             // 5343
            this.elements.forEach(function (element) {                                                                 // 5344
                if (!element.getAttribute('data-disable-return')) {                                                    // 5345
                    this.on(element, 'keyup', handleKeyup.bind(this));                                                 // 5346
                }                                                                                                      // 5347
            }, this);                                                                                                  // 5348
        }                                                                                                              // 5349
    }                                                                                                                  // 5350
                                                                                                                       // 5351
    function initExtensions() {                                                                                        // 5352
                                                                                                                       // 5353
        this.extensions = [];                                                                                          // 5354
                                                                                                                       // 5355
        // Passed in extensions                                                                                        // 5356
        Object.keys(this.options.extensions).forEach(function (name) {                                                 // 5357
            // Always save the toolbar extension for last                                                              // 5358
            if (name !== 'toolbar' && this.options.extensions[name]) {                                                 // 5359
                this.extensions.push(initExtension(this.options.extensions[name], name, this));                        // 5360
            }                                                                                                          // 5361
        }, this);                                                                                                      // 5362
                                                                                                                       // 5363
        // Built-in extensions                                                                                         // 5364
        var builtIns = {                                                                                               // 5365
            paste: true,                                                                                               // 5366
            anchorPreview: isAnchorPreviewEnabled.call(this),                                                          // 5367
            autoLink: isAutoLinkEnabled.call(this),                                                                    // 5368
            imageDragging: isImageDraggingEnabled.call(this),                                                          // 5369
            keyboardCommands: isKeyboardCommandsEnabled.call(this),                                                    // 5370
            placeholder: isPlaceholderEnabled.call(this)                                                               // 5371
        };                                                                                                             // 5372
        Object.keys(builtIns).forEach(function (name) {                                                                // 5373
            if (builtIns[name]) {                                                                                      // 5374
                this.addBuiltInExtension(name);                                                                        // 5375
            }                                                                                                          // 5376
        }, this);                                                                                                      // 5377
                                                                                                                       // 5378
        // Users can pass in a custom toolbar extension                                                                // 5379
        // so check for that first and if it's not present                                                             // 5380
        // just create the default toolbar                                                                             // 5381
        var toolbarExtension = this.options.extensions['toolbar'];                                                     // 5382
        if (!toolbarExtension && isToolbarEnabled.call(this)) {                                                        // 5383
            // Backwards compatability                                                                                 // 5384
            var toolbarOptions = Util.extend({}, this.options.toolbar, {                                               // 5385
                allowMultiParagraphSelection: this.options.allowMultiParagraphSelection // deprecated                  // 5386
            });                                                                                                        // 5387
            toolbarExtension = new MediumEditor.extensions.toolbar(toolbarOptions);                                    // 5388
        }                                                                                                              // 5389
                                                                                                                       // 5390
        // If the toolbar is not disabled, so we actually have an extension                                            // 5391
        // initialize it and add it to the extensions array                                                            // 5392
        if (toolbarExtension) {                                                                                        // 5393
            this.extensions.push(initExtension(toolbarExtension, 'toolbar', this));                                    // 5394
        }                                                                                                              // 5395
    }                                                                                                                  // 5396
                                                                                                                       // 5397
    function mergeOptions(defaults, options) {                                                                         // 5398
        var deprecatedProperties = [                                                                                   // 5399
            ['allowMultiParagraphSelection', 'toolbar.allowMultiParagraphSelection']                                   // 5400
        ];                                                                                                             // 5401
        // warn about using deprecated properties                                                                      // 5402
        if (options) {                                                                                                 // 5403
            deprecatedProperties.forEach(function (pair) {                                                             // 5404
                if (options.hasOwnProperty(pair[0]) && options[pair[0]] !== undefined) {                               // 5405
                    Util.deprecated(pair[0], pair[1], 'v6.0.0');                                                       // 5406
                }                                                                                                      // 5407
            });                                                                                                        // 5408
        }                                                                                                              // 5409
                                                                                                                       // 5410
        return Util.defaults({}, options, defaults);                                                                   // 5411
    }                                                                                                                  // 5412
                                                                                                                       // 5413
    function execActionInternal(action, opts) {                                                                        // 5414
        /*jslint regexp: true*/                                                                                        // 5415
        var appendAction = /^append-(.+)$/gi,                                                                          // 5416
            justifyAction = /justify([A-Za-z]*)$/g, /* Detecting if is justifyCenter|Right|Left */                     // 5417
            match;                                                                                                     // 5418
        /*jslint regexp: false*/                                                                                       // 5419
                                                                                                                       // 5420
        // Actions starting with 'append-' should attempt to format a block of text ('formatBlock') using a specific   // 5421
        // type of block element (ie append-blockquote, append-h1, append-pre, etc.)                                   // 5422
        match = appendAction.exec(action);                                                                             // 5423
        if (match) {                                                                                                   // 5424
            return Util.execFormatBlock(this.options.ownerDocument, match[1]);                                         // 5425
        }                                                                                                              // 5426
                                                                                                                       // 5427
        if (action === 'fontSize') {                                                                                   // 5428
            return this.options.ownerDocument.execCommand('fontSize', false, opts.size);                               // 5429
        }                                                                                                              // 5430
                                                                                                                       // 5431
        if (action === 'createLink') {                                                                                 // 5432
            return this.createLink(opts);                                                                              // 5433
        }                                                                                                              // 5434
                                                                                                                       // 5435
        if (action === 'image') {                                                                                      // 5436
            return this.options.ownerDocument.execCommand('insertImage', false, this.options.contentWindow.getSelection());
        }                                                                                                              // 5438
                                                                                                                       // 5439
        /* Issue: https://github.com/yabwe/medium-editor/issues/595                                                    // 5440
         * If the action is to justify the text */                                                                     // 5441
        if (justifyAction.exec(action)) {                                                                              // 5442
            var result = this.options.ownerDocument.execCommand(action, false, null),                                  // 5443
                parentNode = Selection.getSelectedParentElement(Selection.getSelectionRange(this.options.ownerDocument));
            if (parentNode) {                                                                                          // 5445
                cleanupJustifyDivFragments.call(this, Util.getTopBlockContainer(parentNode));                          // 5446
            }                                                                                                          // 5447
                                                                                                                       // 5448
            return result;                                                                                             // 5449
        }                                                                                                              // 5450
                                                                                                                       // 5451
        return this.options.ownerDocument.execCommand(action, false, null);                                            // 5452
    }                                                                                                                  // 5453
                                                                                                                       // 5454
    /* If we've just justified text within a container block                                                           // 5455
     * Chrome may have removed <br> elements and instead wrapped lines in <div> elements                               // 5456
     * with a text-align property.  If so, we want to fix this                                                         // 5457
     */                                                                                                                // 5458
    function cleanupJustifyDivFragments(blockContainer) {                                                              // 5459
        if (!blockContainer) {                                                                                         // 5460
            return;                                                                                                    // 5461
        }                                                                                                              // 5462
                                                                                                                       // 5463
        var textAlign,                                                                                                 // 5464
            childDivs = Array.prototype.slice.call(blockContainer.childNodes).filter(function (element) {              // 5465
                var isDiv = element.nodeName.toLowerCase() === 'div';                                                  // 5466
                if (isDiv && !textAlign) {                                                                             // 5467
                    textAlign = element.style.textAlign;                                                               // 5468
                }                                                                                                      // 5469
                return isDiv;                                                                                          // 5470
            });                                                                                                        // 5471
                                                                                                                       // 5472
        /* If we found child <div> elements with text-align style attributes                                           // 5473
         * we should fix this by:                                                                                      // 5474
         *                                                                                                             // 5475
         * 1) Unwrapping each <div> which has a text-align style                                                       // 5476
         * 2) Insert a <br> element after each set of 'unwrapped' div children                                         // 5477
         * 3) Set the text-align style of the parent block element                                                     // 5478
         */                                                                                                            // 5479
        if (childDivs.length) {                                                                                        // 5480
            // Since we're mucking with the HTML, preserve selection                                                   // 5481
            this.saveSelection();                                                                                      // 5482
            childDivs.forEach(function (div) {                                                                         // 5483
                if (div.style.textAlign === textAlign) {                                                               // 5484
                    var lastChild = div.lastChild;                                                                     // 5485
                    if (lastChild) {                                                                                   // 5486
                        // Instead of a div, extract the child elements and add a <br>                                 // 5487
                        Util.unwrap(div, this.options.ownerDocument);                                                  // 5488
                        var br = this.options.ownerDocument.createElement('BR');                                       // 5489
                        lastChild.parentNode.insertBefore(br, lastChild.nextSibling);                                  // 5490
                    }                                                                                                  // 5491
                }                                                                                                      // 5492
            }, this);                                                                                                  // 5493
            blockContainer.style.textAlign = textAlign;                                                                // 5494
            // We're done, so restore selection                                                                        // 5495
            this.restoreSelection();                                                                                   // 5496
        }                                                                                                              // 5497
    }                                                                                                                  // 5498
                                                                                                                       // 5499
    MediumEditor.Extension = Extension;                                                                                // 5500
                                                                                                                       // 5501
    MediumEditor.extensions = extensionDefaults;                                                                       // 5502
    MediumEditor.util = Util;                                                                                          // 5503
    MediumEditor.selection = Selection;                                                                                // 5504
                                                                                                                       // 5505
    MediumEditor.prototype = {                                                                                         // 5506
        defaults: editorDefaults,                                                                                      // 5507
                                                                                                                       // 5508
        // NOT DOCUMENTED - exposed for backwards compatability                                                        // 5509
        init: function (elements, options) {                                                                           // 5510
            this.options = mergeOptions.call(this, this.defaults, options);                                            // 5511
            this.origElements = elements;                                                                              // 5512
                                                                                                                       // 5513
            if (!this.options.elementsContainer) {                                                                     // 5514
                this.options.elementsContainer = this.options.ownerDocument.body;                                      // 5515
            }                                                                                                          // 5516
                                                                                                                       // 5517
            return this.setup();                                                                                       // 5518
        },                                                                                                             // 5519
                                                                                                                       // 5520
        setup: function () {                                                                                           // 5521
            if (this.isActive) {                                                                                       // 5522
                return;                                                                                                // 5523
            }                                                                                                          // 5524
                                                                                                                       // 5525
            createElementsArray.call(this, this.origElements);                                                         // 5526
                                                                                                                       // 5527
            if (this.elements.length === 0) {                                                                          // 5528
                return;                                                                                                // 5529
            }                                                                                                          // 5530
                                                                                                                       // 5531
            this.isActive = true;                                                                                      // 5532
            addToEditors.call(this, this.options.contentWindow);                                                       // 5533
                                                                                                                       // 5534
            this.events = new Events(this);                                                                            // 5535
                                                                                                                       // 5536
            // Call initialization helpers                                                                             // 5537
            initElements.call(this);                                                                                   // 5538
            initExtensions.call(this);                                                                                 // 5539
            attachHandlers.call(this);                                                                                 // 5540
        },                                                                                                             // 5541
                                                                                                                       // 5542
        destroy: function () {                                                                                         // 5543
            if (!this.isActive) {                                                                                      // 5544
                return;                                                                                                // 5545
            }                                                                                                          // 5546
                                                                                                                       // 5547
            this.isActive = false;                                                                                     // 5548
                                                                                                                       // 5549
            this.extensions.forEach(function (extension) {                                                             // 5550
                if (typeof extension.destroy === 'function') {                                                         // 5551
                    extension.destroy();                                                                               // 5552
                }                                                                                                      // 5553
            }, this);                                                                                                  // 5554
                                                                                                                       // 5555
            this.events.destroy();                                                                                     // 5556
                                                                                                                       // 5557
            this.elements.forEach(function (element) {                                                                 // 5558
                // Reset elements content, fix for issue where after editor destroyed the red underlines on spelling errors are left
                if (this.options.spellcheck) {                                                                         // 5560
                    element.innerHTML = element.innerHTML;                                                             // 5561
                }                                                                                                      // 5562
                                                                                                                       // 5563
                // cleanup extra added attributes                                                                      // 5564
                element.removeAttribute('contentEditable');                                                            // 5565
                element.removeAttribute('spellcheck');                                                                 // 5566
                element.removeAttribute('data-medium-editor-element');                                                 // 5567
                element.removeAttribute('role');                                                                       // 5568
                element.removeAttribute('aria-multiline');                                                             // 5569
                element.removeAttribute('medium-editor-index');                                                        // 5570
                                                                                                                       // 5571
                // Remove any elements created for textareas                                                           // 5572
                if (element.hasAttribute('medium-editor-textarea-id')) {                                               // 5573
                    var textarea = element.parentNode.querySelector('textarea[medium-editor-textarea-id="' + element.getAttribute('medium-editor-textarea-id') + '"]');
                    if (textarea) {                                                                                    // 5575
                        // Un-hide the textarea                                                                        // 5576
                        textarea.classList.remove('medium-editor-hidden');                                             // 5577
                    }                                                                                                  // 5578
                    if (element.parentNode) {                                                                          // 5579
                        element.parentNode.removeChild(element);                                                       // 5580
                    }                                                                                                  // 5581
                }                                                                                                      // 5582
            }, this);                                                                                                  // 5583
            this.elements = [];                                                                                        // 5584
                                                                                                                       // 5585
            removeFromEditors.call(this, this.options.contentWindow);                                                  // 5586
        },                                                                                                             // 5587
                                                                                                                       // 5588
        on: function (target, event, listener, useCapture) {                                                           // 5589
            this.events.attachDOMEvent(target, event, listener, useCapture);                                           // 5590
        },                                                                                                             // 5591
                                                                                                                       // 5592
        off: function (target, event, listener, useCapture) {                                                          // 5593
            this.events.detachDOMEvent(target, event, listener, useCapture);                                           // 5594
        },                                                                                                             // 5595
                                                                                                                       // 5596
        subscribe: function (event, listener) {                                                                        // 5597
            this.events.attachCustomEvent(event, listener);                                                            // 5598
        },                                                                                                             // 5599
                                                                                                                       // 5600
        unsubscribe: function (event, listener) {                                                                      // 5601
            this.events.detachCustomEvent(event, listener);                                                            // 5602
        },                                                                                                             // 5603
                                                                                                                       // 5604
        trigger: function (name, data, editable) {                                                                     // 5605
            this.events.triggerCustomEvent(name, data, editable);                                                      // 5606
        },                                                                                                             // 5607
                                                                                                                       // 5608
        delay: function (fn) {                                                                                         // 5609
            var self = this;                                                                                           // 5610
            return setTimeout(function () {                                                                            // 5611
                if (self.isActive) {                                                                                   // 5612
                    fn();                                                                                              // 5613
                }                                                                                                      // 5614
            }, this.options.delay);                                                                                    // 5615
        },                                                                                                             // 5616
                                                                                                                       // 5617
        serialize: function () {                                                                                       // 5618
            var i,                                                                                                     // 5619
                elementid,                                                                                             // 5620
                content = {};                                                                                          // 5621
            for (i = 0; i < this.elements.length; i += 1) {                                                            // 5622
                elementid = (this.elements[i].id !== '') ? this.elements[i].id : 'element-' + i;                       // 5623
                content[elementid] = {                                                                                 // 5624
                    value: this.elements[i].innerHTML.trim()                                                           // 5625
                };                                                                                                     // 5626
            }                                                                                                          // 5627
            return content;                                                                                            // 5628
        },                                                                                                             // 5629
                                                                                                                       // 5630
        getExtensionByName: function (name) {                                                                          // 5631
            var extension;                                                                                             // 5632
            if (this.extensions && this.extensions.length) {                                                           // 5633
                this.extensions.some(function (ext) {                                                                  // 5634
                    if (ext.name === name) {                                                                           // 5635
                        extension = ext;                                                                               // 5636
                        return true;                                                                                   // 5637
                    }                                                                                                  // 5638
                    return false;                                                                                      // 5639
                });                                                                                                    // 5640
            }                                                                                                          // 5641
            return extension;                                                                                          // 5642
        },                                                                                                             // 5643
                                                                                                                       // 5644
        /**                                                                                                            // 5645
         * NOT DOCUMENTED - exposed as a helper for other extensions to use                                            // 5646
         */                                                                                                            // 5647
        addBuiltInExtension: function (name, opts) {                                                                   // 5648
            var extension = this.getExtensionByName(name),                                                             // 5649
                merged;                                                                                                // 5650
            if (extension) {                                                                                           // 5651
                return extension;                                                                                      // 5652
            }                                                                                                          // 5653
                                                                                                                       // 5654
            switch (name) {                                                                                            // 5655
                case 'anchor':                                                                                         // 5656
                    merged = Util.extend({}, this.options.anchor, opts);                                               // 5657
                    extension = new MediumEditor.extensions.anchor(merged);                                            // 5658
                    break;                                                                                             // 5659
                case 'anchorPreview':                                                                                  // 5660
                    extension = new MediumEditor.extensions.anchorPreview(this.options.anchorPreview);                 // 5661
                    break;                                                                                             // 5662
                case 'autoLink':                                                                                       // 5663
                    extension = new MediumEditor.extensions.autoLink();                                                // 5664
                    break;                                                                                             // 5665
                case 'fontsize':                                                                                       // 5666
                    extension = new MediumEditor.extensions.fontSize(opts);                                            // 5667
                    break;                                                                                             // 5668
                case 'imageDragging':                                                                                  // 5669
                    extension = new MediumEditor.extensions.imageDragging();                                           // 5670
                    break;                                                                                             // 5671
                case 'keyboardCommands':                                                                               // 5672
                    extension = new MediumEditor.extensions.keyboardCommands(this.options.keyboardCommands);           // 5673
                    break;                                                                                             // 5674
                case 'paste':                                                                                          // 5675
                    extension = new MediumEditor.extensions.paste(this.options.paste);                                 // 5676
                    break;                                                                                             // 5677
                case 'placeholder':                                                                                    // 5678
                    extension = new MediumEditor.extensions.placeholder(this.options.placeholder);                     // 5679
                    break;                                                                                             // 5680
                default:                                                                                               // 5681
                    // All of the built-in buttons for MediumEditor are extensions                                     // 5682
                    // so check to see if the extension we're creating is a built-in button                            // 5683
                    if (MediumEditor.extensions.button.isBuiltInButton(name)) {                                        // 5684
                        if (opts) {                                                                                    // 5685
                            merged = Util.defaults({}, opts, MediumEditor.extensions.button.prototype.defaults[name]); // 5686
                            extension = new MediumEditor.extensions.button(merged);                                    // 5687
                        } else {                                                                                       // 5688
                            extension = new MediumEditor.extensions.button(name);                                      // 5689
                        }                                                                                              // 5690
                    }                                                                                                  // 5691
            }                                                                                                          // 5692
                                                                                                                       // 5693
            if (extension) {                                                                                           // 5694
                this.extensions.push(initExtension(extension, name, this));                                            // 5695
            }                                                                                                          // 5696
                                                                                                                       // 5697
            return extension;                                                                                          // 5698
        },                                                                                                             // 5699
                                                                                                                       // 5700
        stopSelectionUpdates: function () {                                                                            // 5701
            this.preventSelectionUpdates = true;                                                                       // 5702
        },                                                                                                             // 5703
                                                                                                                       // 5704
        startSelectionUpdates: function () {                                                                           // 5705
            this.preventSelectionUpdates = false;                                                                      // 5706
        },                                                                                                             // 5707
                                                                                                                       // 5708
        checkSelection: function () {                                                                                  // 5709
            var toolbar = this.getExtensionByName('toolbar');                                                          // 5710
            if (toolbar) {                                                                                             // 5711
                toolbar.checkState();                                                                                  // 5712
            }                                                                                                          // 5713
            return this;                                                                                               // 5714
        },                                                                                                             // 5715
                                                                                                                       // 5716
        // Wrapper around document.queryCommandState for checking whether an action has already                        // 5717
        // been applied to the current selection                                                                       // 5718
        queryCommandState: function (action) {                                                                         // 5719
            var fullAction = /^full-(.+)$/gi,                                                                          // 5720
                match,                                                                                                 // 5721
                queryState = null;                                                                                     // 5722
                                                                                                                       // 5723
            // Actions starting with 'full-' need to be modified since this is a medium-editor concept                 // 5724
            match = fullAction.exec(action);                                                                           // 5725
            if (match) {                                                                                               // 5726
                action = match[1];                                                                                     // 5727
            }                                                                                                          // 5728
                                                                                                                       // 5729
            try {                                                                                                      // 5730
                queryState = this.options.ownerDocument.queryCommandState(action);                                     // 5731
            } catch (exc) {                                                                                            // 5732
                queryState = null;                                                                                     // 5733
            }                                                                                                          // 5734
                                                                                                                       // 5735
            return queryState;                                                                                         // 5736
        },                                                                                                             // 5737
                                                                                                                       // 5738
        execAction: function (action, opts) {                                                                          // 5739
            /*jslint regexp: true*/                                                                                    // 5740
            var fullAction = /^full-(.+)$/gi,                                                                          // 5741
                match,                                                                                                 // 5742
                result;                                                                                                // 5743
            /*jslint regexp: false*/                                                                                   // 5744
                                                                                                                       // 5745
            // Actions starting with 'full-' should be applied to to the entire contents of the editable element       // 5746
            // (ie full-bold, full-append-pre, etc.)                                                                   // 5747
            match = fullAction.exec(action);                                                                           // 5748
            if (match) {                                                                                               // 5749
                // Store the current selection to be restored after applying the action                                // 5750
                this.saveSelection();                                                                                  // 5751
                // Select all of the contents before calling the action                                                // 5752
                this.selectAllContents();                                                                              // 5753
                result = execActionInternal.call(this, match[1], opts);                                                // 5754
                // Restore the previous selection                                                                      // 5755
                this.restoreSelection();                                                                               // 5756
            } else {                                                                                                   // 5757
                result = execActionInternal.call(this, action, opts);                                                  // 5758
            }                                                                                                          // 5759
                                                                                                                       // 5760
            // do some DOM clean-up for known browser issues after the action                                          // 5761
            if (action === 'insertunorderedlist' || action === 'insertorderedlist') {                                  // 5762
                Util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement());                        // 5763
            }                                                                                                          // 5764
                                                                                                                       // 5765
            this.checkSelection();                                                                                     // 5766
            return result;                                                                                             // 5767
        },                                                                                                             // 5768
                                                                                                                       // 5769
        getSelectedParentElement: function (range) {                                                                   // 5770
            if (range === undefined) {                                                                                 // 5771
                range = this.options.contentWindow.getSelection().getRangeAt(0);                                       // 5772
            }                                                                                                          // 5773
            return Selection.getSelectedParentElement(range);                                                          // 5774
        },                                                                                                             // 5775
                                                                                                                       // 5776
        selectAllContents: function () {                                                                               // 5777
            var currNode = Selection.getSelectionElement(this.options.contentWindow);                                  // 5778
                                                                                                                       // 5779
            if (currNode) {                                                                                            // 5780
                // Move to the lowest descendant node that still selects all of the contents                           // 5781
                while (currNode.children.length === 1) {                                                               // 5782
                    currNode = currNode.children[0];                                                                   // 5783
                }                                                                                                      // 5784
                                                                                                                       // 5785
                this.selectElement(currNode);                                                                          // 5786
            }                                                                                                          // 5787
        },                                                                                                             // 5788
                                                                                                                       // 5789
        selectElement: function (element) {                                                                            // 5790
            Selection.selectNode(element, this.options.ownerDocument);                                                 // 5791
                                                                                                                       // 5792
            var selElement = Selection.getSelectionElement(this.options.contentWindow);                                // 5793
            if (selElement) {                                                                                          // 5794
                this.events.focusElement(selElement);                                                                  // 5795
            }                                                                                                          // 5796
        },                                                                                                             // 5797
                                                                                                                       // 5798
        getFocusedElement: function () {                                                                               // 5799
            var focused;                                                                                               // 5800
            this.elements.some(function (element) {                                                                    // 5801
                // Find the element that has focus                                                                     // 5802
                if (!focused && element.getAttribute('data-medium-focused')) {                                         // 5803
                    focused = element;                                                                                 // 5804
                }                                                                                                      // 5805
                                                                                                                       // 5806
                // bail if we found the element that had focus                                                         // 5807
                return !!focused;                                                                                      // 5808
            }, this);                                                                                                  // 5809
                                                                                                                       // 5810
            return focused;                                                                                            // 5811
        },                                                                                                             // 5812
                                                                                                                       // 5813
        // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
        // Tim Down                                                                                                    // 5815
        // TODO: move to selection.js and clean up old methods there                                                   // 5816
        exportSelection: function () {                                                                                 // 5817
            var selectionState = null,                                                                                 // 5818
                selection = this.options.contentWindow.getSelection(),                                                 // 5819
                range,                                                                                                 // 5820
                preSelectionRange,                                                                                     // 5821
                start,                                                                                                 // 5822
                editableElementIndex = -1;                                                                             // 5823
                                                                                                                       // 5824
            if (selection.rangeCount > 0) {                                                                            // 5825
                range = selection.getRangeAt(0);                                                                       // 5826
                preSelectionRange = range.cloneRange();                                                                // 5827
                                                                                                                       // 5828
                // Find element current selection is inside                                                            // 5829
                this.elements.some(function (el, index) {                                                              // 5830
                    if (el === range.startContainer || Util.isDescendant(el, range.startContainer)) {                  // 5831
                        editableElementIndex = index;                                                                  // 5832
                        return true;                                                                                   // 5833
                    }                                                                                                  // 5834
                    return false;                                                                                      // 5835
                });                                                                                                    // 5836
                                                                                                                       // 5837
                if (editableElementIndex > -1) {                                                                       // 5838
                    preSelectionRange.selectNodeContents(this.elements[editableElementIndex]);                         // 5839
                    preSelectionRange.setEnd(range.startContainer, range.startOffset);                                 // 5840
                    start = preSelectionRange.toString().length;                                                       // 5841
                                                                                                                       // 5842
                    selectionState = {                                                                                 // 5843
                        start: start,                                                                                  // 5844
                        end: start + range.toString().length,                                                          // 5845
                        editableElementIndex: editableElementIndex                                                     // 5846
                    };                                                                                                 // 5847
                    // If start = 0 there may still be an empty paragraph before it, but we don't care.                // 5848
                    if (start !== 0) {                                                                                 // 5849
                        var emptyBlocksIndex = Selection.getIndexRelativeToAdjacentEmptyBlocks(                        // 5850
                                this.options.ownerDocument,                                                            // 5851
                                this.elements[editableElementIndex],                                                   // 5852
                                range.startContainer,                                                                  // 5853
                                range.startOffset);                                                                    // 5854
                        if (emptyBlocksIndex !== 0) {                                                                  // 5855
                            selectionState.emptyBlocksIndex = emptyBlocksIndex;                                        // 5856
                        }                                                                                              // 5857
                    }                                                                                                  // 5858
                }                                                                                                      // 5859
            }                                                                                                          // 5860
                                                                                                                       // 5861
            if (selectionState !== null && selectionState.editableElementIndex === 0) {                                // 5862
                delete selectionState.editableElementIndex;                                                            // 5863
            }                                                                                                          // 5864
                                                                                                                       // 5865
            return selectionState;                                                                                     // 5866
        },                                                                                                             // 5867
                                                                                                                       // 5868
        saveSelection: function () {                                                                                   // 5869
            this.selectionState = this.exportSelection();                                                              // 5870
        },                                                                                                             // 5871
                                                                                                                       // 5872
        // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
        // Tim Down                                                                                                    // 5874
        // TODO: move to selection.js and clean up old methods there                                                   // 5875
        //                                                                                                             // 5876
        // {object} inSelectionState - the selection to import                                                         // 5877
        // {boolean} [favorLaterSelectionAnchor] - defaults to false. If true, import the cursor immediately           // 5878
        //      subsequent to an anchor tag if it would otherwise be placed right at the trailing edge inside the      // 5879
        //      anchor. This cursor positioning, even though visually equivalent to the user, can affect behavior      // 5880
        //      in MS IE.                                                                                              // 5881
        importSelection: function (inSelectionState, favorLaterSelectionAnchor) {                                      // 5882
            if (!inSelectionState) {                                                                                   // 5883
                return;                                                                                                // 5884
            }                                                                                                          // 5885
                                                                                                                       // 5886
            var editableElementIndex = inSelectionState.editableElementIndex === undefined ?                           // 5887
                                                0 : inSelectionState.editableElementIndex,                             // 5888
                selectionState = {                                                                                     // 5889
                    editableElementIndex: editableElementIndex,                                                        // 5890
                    start: inSelectionState.start,                                                                     // 5891
                    end: inSelectionState.end                                                                          // 5892
                },                                                                                                     // 5893
                editableElement = this.elements[selectionState.editableElementIndex],                                  // 5894
                charIndex = 0,                                                                                         // 5895
                range = this.options.ownerDocument.createRange(),                                                      // 5896
                nodeStack = [editableElement],                                                                         // 5897
                node,                                                                                                  // 5898
                foundStart = false,                                                                                    // 5899
                stop = false,                                                                                          // 5900
                i,                                                                                                     // 5901
                sel,                                                                                                   // 5902
                nextCharIndex;                                                                                         // 5903
                                                                                                                       // 5904
            range.setStart(editableElement, 0);                                                                        // 5905
            range.collapse(true);                                                                                      // 5906
                                                                                                                       // 5907
            node = nodeStack.pop();                                                                                    // 5908
            while (!stop && node) {                                                                                    // 5909
                if (node.nodeType === 3) {                                                                             // 5910
                    nextCharIndex = charIndex + node.length;                                                           // 5911
                    if (!foundStart && selectionState.start >= charIndex && selectionState.start <= nextCharIndex) {   // 5912
                        range.setStart(node, selectionState.start - charIndex);                                        // 5913
                        foundStart = true;                                                                             // 5914
                    }                                                                                                  // 5915
                    if (foundStart && selectionState.end >= charIndex && selectionState.end <= nextCharIndex) {        // 5916
                        range.setEnd(node, selectionState.end - charIndex);                                            // 5917
                        stop = true;                                                                                   // 5918
                    }                                                                                                  // 5919
                    charIndex = nextCharIndex;                                                                         // 5920
                } else {                                                                                               // 5921
                    i = node.childNodes.length - 1;                                                                    // 5922
                    while (i >= 0) {                                                                                   // 5923
                        nodeStack.push(node.childNodes[i]);                                                            // 5924
                        i -= 1;                                                                                        // 5925
                    }                                                                                                  // 5926
                }                                                                                                      // 5927
                if (!stop) {                                                                                           // 5928
                    node = nodeStack.pop();                                                                            // 5929
                }                                                                                                      // 5930
            }                                                                                                          // 5931
                                                                                                                       // 5932
            if (inSelectionState.emptyBlocksIndex && selectionState.end === nextCharIndex) {                           // 5933
                var targetNode = Util.getTopBlockContainer(range.startContainer),                                      // 5934
                    index = 0;                                                                                         // 5935
                // Skip over empty blocks until we hit the block we want the selection to be in                        // 5936
                while (index < inSelectionState.emptyBlocksIndex && targetNode.nextSibling) {                          // 5937
                    targetNode = targetNode.nextSibling;                                                               // 5938
                    index++;                                                                                           // 5939
                    // If we find a non-empty block, ignore the emptyBlocksIndex and just put selection here           // 5940
                    if (targetNode.textContent.length > 0) {                                                           // 5941
                        break;                                                                                         // 5942
                    }                                                                                                  // 5943
                }                                                                                                      // 5944
                                                                                                                       // 5945
                // We're selecting a high-level block node, so make sure the cursor gets moved into the deepest        // 5946
                // element at the beginning of the block                                                               // 5947
                range.setStart(Util.getFirstSelectableLeafNode(targetNode), 0);                                        // 5948
                range.collapse(true);                                                                                  // 5949
            }                                                                                                          // 5950
                                                                                                                       // 5951
            // If the selection is right at the ending edge of a link, put it outside the anchor tag instead of inside.
            if (favorLaterSelectionAnchor) {                                                                           // 5953
                range = Selection.importSelectionMoveCursorPastAnchor(selectionState, range);                          // 5954
            }                                                                                                          // 5955
            sel = this.options.contentWindow.getSelection();                                                           // 5956
            sel.removeAllRanges();                                                                                     // 5957
            sel.addRange(range);                                                                                       // 5958
        },                                                                                                             // 5959
                                                                                                                       // 5960
        restoreSelection: function () {                                                                                // 5961
            this.importSelection(this.selectionState);                                                                 // 5962
        },                                                                                                             // 5963
                                                                                                                       // 5964
        createLink: function (opts) {                                                                                  // 5965
            var customEvent,                                                                                           // 5966
                i;                                                                                                     // 5967
                                                                                                                       // 5968
            if (opts.url && opts.url.trim().length > 0) {                                                              // 5969
                var currentSelection = this.options.contentWindow.getSelection();                                      // 5970
                if (currentSelection) {                                                                                // 5971
                    var exportedSelection,                                                                             // 5972
                        startContainerParentElement,                                                                   // 5973
                        endContainerParentElement,                                                                     // 5974
                        textNodes;                                                                                     // 5975
                                                                                                                       // 5976
                    startContainerParentElement = Util.getClosestBlockContainer(                                       // 5977
                        currentSelection.getRangeAt(0).startContainer);                                                // 5978
                    endContainerParentElement = Util.getClosestBlockContainer(                                         // 5979
                        currentSelection.getRangeAt(0).endContainer);                                                  // 5980
                                                                                                                       // 5981
                    if (startContainerParentElement === endContainerParentElement) {                                   // 5982
                        var currentEditor = Selection.getSelectionElement(this.options.contentWindow),                 // 5983
                            parentElement = (startContainerParentElement || currentEditor),                            // 5984
                            fragment = this.options.ownerDocument.createDocumentFragment();                            // 5985
                        exportedSelection = this.exportSelection();                                                    // 5986
                        fragment.appendChild(parentElement.cloneNode(true));                                           // 5987
                        if (currentEditor === parentElement) {                                                         // 5988
                            // We have to avoid the editor itself being wiped out when it's the only block element,    // 5989
                            // as our reference inside this.elements gets detached from the page when insertHTML runs. // 5990
                            // If we just use [parentElement, 0] and [parentElement, parentElement.childNodes.length]  // 5991
                            // as the range boundaries, this happens whenever parentElement === currentEditor.         // 5992
                            // The tradeoff to this workaround is that a orphaned tag can sometimes be left behind at  // 5993
                            // the end of the editor's content.                                                        // 5994
                            // In Gecko:                                                                               // 5995
                            // as an empty <strong></strong> if parentElement.lastChild is a <strong> tag.             // 5996
                            // In WebKit:                                                                              // 5997
                            // an invented <br /> tag at the end in the same situation                                 // 5998
                                                                                                                       // 5999
                            Selection.select(this.options.ownerDocument,                                               // 6000
                                parentElement.firstChild, 0,                                                           // 6001
                                parentElement.lastChild, parentElement.lastChild.nodeType === 3 ?                      // 6002
                                parentElement.lastChild.nodeValue.length : parentElement.lastChild.childNodes.length); // 6003
                        } else {                                                                                       // 6004
                            Selection.select(this.options.ownerDocument,                                               // 6005
                                parentElement, 0,                                                                      // 6006
                                parentElement, parentElement.childNodes.length);                                       // 6007
                        }                                                                                              // 6008
                        var modifiedExportedSelection = this.exportSelection();                                        // 6009
                                                                                                                       // 6010
                        textNodes = Util.findOrCreateMatchingTextNodes(this.options.ownerDocument,                     // 6011
                                fragment,                                                                              // 6012
                                {                                                                                      // 6013
                                    start: exportedSelection.start - modifiedExportedSelection.start,                  // 6014
                                    end: exportedSelection.end - modifiedExportedSelection.start,                      // 6015
                                    editableElementIndex: exportedSelection.editableElementIndex                       // 6016
                                });                                                                                    // 6017
                        // Creates the link in the document fragment                                                   // 6018
                        Util.createLink(this.options.ownerDocument, textNodes, opts.url.trim());                       // 6019
                        // Chrome trims the leading whitespaces when inserting HTML, which messes up restoring the selection.
                        var leadingWhitespacesCount = (fragment.firstChild.innerHTML.match(/^\s+/) || [''])[0].length; // 6021
                        // Now move the created link back into the original document in a way to preserve undo/redo history
                        Util.insertHTMLCommand(this.options.ownerDocument,                                             // 6023
                            fragment.firstChild.innerHTML.replace(/^\s+/, ''));                                        // 6024
                        exportedSelection.start -= leadingWhitespacesCount;                                            // 6025
                        exportedSelection.end -= leadingWhitespacesCount;                                              // 6026
                        this.importSelection(exportedSelection);                                                       // 6027
                    } else {                                                                                           // 6028
                        this.options.ownerDocument.execCommand('createLink', false, opts.url);                         // 6029
                    }                                                                                                  // 6030
                    if (this.options.targetBlank || opts.target === '_blank') {                                        // 6031
                        Util.setTargetBlank(Selection.getSelectionStart(this.options.ownerDocument), opts.url);        // 6032
                    }                                                                                                  // 6033
                                                                                                                       // 6034
                    if (opts.buttonClass) {                                                                            // 6035
                        Util.addClassToAnchors(Selection.getSelectionStart(this.options.ownerDocument), opts.buttonClass);
                    }                                                                                                  // 6037
                }                                                                                                      // 6038
            }                                                                                                          // 6039
                                                                                                                       // 6040
            if (this.options.targetBlank || opts.target === '_blank' || opts.buttonClass) {                            // 6041
                customEvent = this.options.ownerDocument.createEvent('HTMLEvents');                                    // 6042
                customEvent.initEvent('input', true, true, this.options.contentWindow);                                // 6043
                for (i = 0; i < this.elements.length; i += 1) {                                                        // 6044
                    this.elements[i].dispatchEvent(customEvent);                                                       // 6045
                }                                                                                                      // 6046
            }                                                                                                          // 6047
        },                                                                                                             // 6048
                                                                                                                       // 6049
        cleanPaste: function (text) {                                                                                  // 6050
            this.getExtensionByName('paste').cleanPaste(text);                                                         // 6051
        },                                                                                                             // 6052
                                                                                                                       // 6053
        pasteHTML: function (html, options) {                                                                          // 6054
            this.getExtensionByName('paste').pasteHTML(html, options);                                                 // 6055
        }                                                                                                              // 6056
    };                                                                                                                 // 6057
}());                                                                                                                  // 6058
                                                                                                                       // 6059
MediumEditor.parseVersionString = function (release) {                                                                 // 6060
    var split = release.split('-'),                                                                                    // 6061
        version = split[0].split('.'),                                                                                 // 6062
        preRelease = (split.length > 1) ? split[1] : '';                                                               // 6063
    return {                                                                                                           // 6064
        major: parseInt(version[0], 10),                                                                               // 6065
        minor: parseInt(version[1], 10),                                                                               // 6066
        revision: parseInt(version[2], 10),                                                                            // 6067
        preRelease: preRelease,                                                                                        // 6068
        toString: function () {                                                                                        // 6069
            return [version[0], version[1], version[2]].join('.') + (preRelease ? '-' + preRelease : '');              // 6070
        }                                                                                                              // 6071
    };                                                                                                                 // 6072
};                                                                                                                     // 6073
                                                                                                                       // 6074
MediumEditor.version = MediumEditor.parseVersionString.call(this, ({                                                   // 6075
    // grunt-bump looks for this:                                                                                      // 6076
    'version': '5.2.0'                                                                                                 // 6077
}).version);                                                                                                           // 6078
                                                                                                                       // 6079
    return MediumEditor;                                                                                               // 6080
}()));                                                                                                                 // 6081
                                                                                                                       // 6082
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 6092
}).call(this);                                                       // 6093
                                                                     // 6094
                                                                     // 6095
                                                                     // 6096
                                                                     // 6097
                                                                     // 6098
                                                                     // 6099
(function () {                                                       // 6100
                                                                     // 6101
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mediumeditor:mediumeditor/meteor/export.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*global MediumEditor:true*/  // Meteor creates a file-scope global for exporting. This comment prevents a potential JSHint warning.
MediumEditor = window.MediumEditor;                                                                                    // 2
delete window.MediumEditor;                                                                                            // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 6113
}).call(this);                                                       // 6114
                                                                     // 6115
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mediumeditor:mediumeditor'] = {
  MediumEditor: MediumEditor
};

})();
