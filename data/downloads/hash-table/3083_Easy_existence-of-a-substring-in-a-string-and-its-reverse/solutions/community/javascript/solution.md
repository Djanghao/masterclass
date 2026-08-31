# JS Solution

**Author:** bola-nabil
**Votes:** 1
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4888384/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4888384/)

---


# Code
```
/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    const reverseString = str => str.split('').reverse().join('');

    for (let i = 0; i < s.length - 1; i++) {
        const substring = s.substring(i, i + 2);
        if (s.includes(reverseString(substring)))
            return true;
    }

    return false;
};
```