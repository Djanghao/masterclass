# Brute-force path (have "-" and ".")

**Author:** cpcs
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-json-string-to-object/solutions/3694549/](https://leetcode.com/problems/convert-json-string-to-object/solutions/3694549/)

---


# Code
```
/**
 * @param {string} str
 * @return {*}
 */
function jsonParse(str) {
  let index = 0;

  function parseValue() {
    const char = str[index];

    if (char === '{') {
      return parseObject();
    } else if (char === '[') {
      return parseArray();
    } else if (char === '"') {
      return parseString();
    } else if (char === 't') {
      return parseTrue();
    } else if (char === 'f') {
      return parseFalse();
    } else if (char === 'n') {
      return parseNull();
    } else {
      return parseNumber();
    }
  }

  function parseObject() {
    index++; // Skip the opening brace '{'
    const obj = {};

    while (str[index] !== '}') {
      const key = parseStringToken();
      index++; // Skip the colon ':'
      const value = parseValue();
      obj[key] = value;

      if (str[index] === ',') {
        index++; // Skip the comma ','
      }
    }

    index++; // Skip the closing brace '}'
    return obj;
  }

  function parseArray() {
    index++; // Skip the opening bracket '['
    const arr = [];

    while (str[index] !== ']') {
      const value = parseValue();
      arr.push(value);

      if (str[index] === ',') {
        index++; // Skip the comma ','
      }
    }

    index++; // Skip the closing bracket ']'
    return arr;
  }

  function parseString() {
    index++; // Skip the opening double quote '"'
    let endIndex = str.indexOf('"', index);
    const value = str.slice(index, endIndex);
    index = endIndex + 1; // Skip the closing double quote '"'
    return value;
  }

  function parseStringToken() {
    index++; // Skip the opening double quote '"'
    let endIndex = str.indexOf('"', index);
    const value = str.slice(index, endIndex);
    index = endIndex + 1; // Skip the closing double quote '"'
    return value;
  }

  function parseTrue() {
    index += 4; // Skip the characters 'true'
    return true;
  }

  function parseFalse() {
    index += 5; // Skip the characters 'false'
    return false;
  }

  function parseNull() {
    index += 4; // Skip the characters 'null'
    return null;
  }

  function parseNumber() {
    let startIndex = index;
    let endIndex = index;

    if (str[endIndex] === '-') {
      endIndex++; // Skip the negative sign '-'
    }

    while (
      str.charCodeAt(endIndex) >= 48 && // '0'
      str.charCodeAt(endIndex) <= 57    // '9'
    ) {
      endIndex++;
    }

    if (str[endIndex] === '.') {
      endIndex++; // Skip the decimal point '.'
    }

    while (
      str.charCodeAt(endIndex) >= 48 && // '0'
      str.charCodeAt(endIndex) <= 57    // '9'
    ) {
      endIndex++;
    }

    const value = Number(str.slice(startIndex, endIndex));
    index = endIndex; // Update the index to the last character of the number
    return value;
  }

  return parseValue();
}

```