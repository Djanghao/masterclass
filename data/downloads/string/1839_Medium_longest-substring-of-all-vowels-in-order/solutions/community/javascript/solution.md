# ❇ longest-substring-of-all-vowels-in-order👌 🏆O(N)❤️ Javascript🎯 Memory👀95.45%🕕 ++Explanation✍️

**Author:** anurag-sindhu
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/5175817/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/5175817/)

---

![image](./images/0.png)

Time Complexity: O(N)
Space Complexity: O(1)

```
var longestBeautifulSubstring = function (word) {
    const pattern = ['a', 'e', 'i', 'o', 'u'];
    let patternIndex = 0;
    let output = 0;
    let startPatternIndex = null;
    let index = 0;
    for (index = 0; index < word.length; index++) {
        const element = word[index];
        if (patternIndex === 4 && element === pattern[patternIndex]) {
            if (element === pattern[pattern.length - 1]) {
                const size = index - startPatternIndex + 1;
                output = Math.max(output, size);
            }
        } else if (element === pattern[patternIndex]) {
            if (startPatternIndex === null) {
                startPatternIndex = index;
            }
            patternIndex += 1;
        } else if (word[index] === word[index - 1]) {
            continue;
        } else {
            patternIndex = 0;
            startPatternIndex = null;
            if (element === pattern[patternIndex] || element === pattern[patternIndex - 1]) {
                startPatternIndex = index;
                patternIndex += 1;
            }
        }
    }
    if (startPatternIndex !== null && patternIndex === 4) {
        const size = index - startPatternIndex;
        output = Math.max(output, size);
    }
    return output;
};
```