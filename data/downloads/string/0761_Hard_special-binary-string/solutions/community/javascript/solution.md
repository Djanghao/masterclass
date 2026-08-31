# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-binary-string/solutions/4690590/](https://leetcode.com/problems/special-binary-string/solutions/4690590/)

---

# Code
```
var makeLargestSpecial = function (s) {
    if (s.length < 2) {
        return s;
    }
    let start = 0;
    let count = 0;
    let result = [];
    for (let i = 0; i < s.length; i++) {
        count += s[i] === '1' ? 1 : -1;
        if (!count) {
            const special = makeLargestSpecial(s.substring(start + 1, i));
            result.push('1' + special + '0');
            start = i + 1;
        }
    }
    result.sort((a, b) => {
        if (a === b) {
            return 0;
        }
        let i = 0;
        while (a[i] && b[i] && a[i] === b[i]) {
            i++;
        }
        if (a[i + 1] && !b[i + 1]) {
            return -1;
        }
        if (!a[i + 1] && b[i + 1]) {
            return 1;
        }
        return b[i] - a[i];
    })
    return result.join('');
};
```