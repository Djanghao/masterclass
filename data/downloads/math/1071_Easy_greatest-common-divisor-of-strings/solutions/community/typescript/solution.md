# Brute Force & Euclidean algorithm Solution

**Author:** astiksarathe
**Votes:** 13
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3125023/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3125023/)

---

# Code
```
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(string1, string2) {
    const length = string2.length;
    let greatestCommonDivisor = '';

    // Iterate through `string2` to find the greatest common divisor of `string1` and `string2`
    for (let i = 0; i < length; i++) {
        // Create two substrings from `string2`: one starting from the beginning and one starting from the end
        const substringFromBeginning = string2.substring(0, (length - (i + 1)));
        const substringFromEnd = string2.substring(length - 1 - i);

        // Check if either substring is the greatest common divisor of `string1` and `string2`
        if (string1.replaceAll(substringFromBeginning, '') == '' && 
            string2.replaceAll(substringFromBeginning, '') == '') {
            if (greatestCommonDivisor.length < substringFromBeginning.length) {
                greatestCommonDivisor = substringFromBeginning;
            }
        } 

        if (string1.replaceAll(substringFromEnd, '') === '' && 
            string2.replaceAll(substringFromEnd, '') === '') {
            if (greatestCommonDivisor.length < substringFromEnd.length) {
                greatestCommonDivisor = substringFromEnd;
            }
        }
    }

    return greatestCommonDivisor;
};


```
```
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  // If the concatenated strings are not equal,
  // then a common divisor cannot be found
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  // Calculate the greatest common divisor of the string lengths
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const len = gcd(str1.length, str2.length);

  // Return the substring that is a common divisor
  return str1.substring(0, len);
};
```