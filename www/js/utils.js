// Generated by LiveScript 1.2.0
(function(){
  var utils, insertThousandSeparator, slice$ = [].slice;
  ig.utils = utils = {};
  utils.offset = function(element, side){
    var top, left;
    top = 0;
    left = 0;
    do {
      top += element.offsetTop;
      left += element.offsetLeft;
    } while (element = element.offsetParent);
    return {
      top: top,
      left: left
    };
  };
  utils.deminifyData = function(minified){
    var out, res$, i$, ref$, len$, row, row_out, j$, ref1$, len1$, index, column, indices;
    res$ = [];
    for (i$ = 0, len$ = (ref$ = minified.data).length; i$ < len$; ++i$) {
      row = ref$[i$];
      row_out = {};
      for (j$ = 0, len1$ = (ref1$ = minified.columns).length; j$ < len1$; ++j$) {
        index = j$;
        column = ref1$[j$];
        row_out[column] = row[index];
      }
      for (column in ref1$ = minified.indices) {
        indices = ref1$[column];
        row_out[column] = indices[row_out[column]];
      }
      res$.push(row_out);
    }
    out = res$;
    return out;
  };
  utils.formatNumber = function(input, decimalPoints){
    var wholePart, decimalPart;
    decimalPoints == null && (decimalPoints = 0);
    input = parseFloat(input);
    if (decimalPoints) {
      wholePart = Math.floor(input);
      decimalPart = input % 1;
      wholePart = insertThousandSeparator(wholePart);
      decimalPart = Math.round(decimalPart * Math.pow(10, decimalPoints));
      decimalPart = decimalPart.toString();
      while (decimalPart.length < decimalPoints) {
        decimalPart = "0" + decimalPart;
      }
      return wholePart + "," + decimalPart;
    } else {
      wholePart = Math.round(input);
      return insertThousandSeparator(wholePart);
    }
  };
  insertThousandSeparator = function(input, separator){
    var price, out, len, i$, ref$, len$, i, isLast, isThirdNumeral;
    separator == null && (separator = ' ');
    price = Math.round(input).toString();
    out = [];
    len = price.length;
    for (i$ = 0, len$ = (ref$ = [0].concat(slice$.call(len))).length; i$ < len$; ++i$) {
      i = ref$[i$];
      out.unshift(price[len - i - 1]);
      isLast = i === len - 1;
      isThirdNumeral = 2 === i % 3;
      if (isThirdNumeral && !isLast) {
        out.unshift(separator);
      }
    }
    return out.join('');
  };
}).call(this);