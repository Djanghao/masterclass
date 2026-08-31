# JavaScript 100% O(n)

**Author:** grs
**Votes:** 1
**Link:** [https://leetcode.com/problems/better-compression-of-string/solutions/5242688/](https://leetcode.com/problems/better-compression-of-string/solutions/5242688/)

---

```
const A_CODE = 'a'.charCodeAt(0);

/**
 * @param {string} compressed
 * @return {string}
 */
var betterCompression = function(compressed) {
    const frequencies = Array(26).fill(0);
    let i = 0;
    while (i < compressed.length) {
        const c = compressed[i];
        const code = c.charCodeAt(0) - A_CODE;
        let times = 0;
        let digit;
        while (++i < compressed.length && 
            !isNaN(digit = parseInt(compressed[i]))) {
            times *= 10;
            times += digit;
        }
        frequencies[code] += times;
    }
    let output = '';
    for (let i = 0; i < 26; i++) {
        const currentFrequencies = frequencies[i];
        if (currentFrequencies !== 0) {
            output += String.fromCharCode(i + A_CODE) + currentFrequencies;
        }
    }
    return output;
};
```