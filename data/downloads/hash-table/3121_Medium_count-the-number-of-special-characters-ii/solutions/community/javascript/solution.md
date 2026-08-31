# JS

**Author:** Manu-Bharadwaj-BN
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5052574/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5052574/)

---

# Code
```
var numberOfSpecialChars = function (word) {
    const firstUppercase = new Set();
    const lastLowercase = new Set();

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (char >= 'a' && char <= 'z') {
            if (!(char in lastLowercase)) {
                lastLowercase[char] = i;
            } else {
                lastLowercase[char] = Math.max(lastLowercase[char], i);
            }
        } else if (char >= 'A' && char <= 'Z') {
            const lowerChar = char.toLowerCase();
            if (!(lowerChar in firstUppercase)) {
                firstUppercase[lowerChar] = i;
            }
        }
    }

    let count = 0;
    for (const char in lastLowercase) {
        if (char in firstUppercase) {
            if (lastLowercase[char] < firstUppercase[char]) {
                count++;
            }
        }
    }

    return count;
};
```