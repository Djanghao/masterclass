# JavaScript | hash

**Author:** Zhe1ka
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/3218336/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/3218336/)

---

very simple:
1. count all letters from the first array with "+" increment
2. count all letters from the second array with "-" increment
3. find at least one letter which has absolute value more than 3

- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function checkAlmostEquivalent(word1: string, word2: string): boolean {
    const hash = {};

    for (let i = 0; i < word1.length; i++) {
        const letter = word1[i];
        const letter2 = word2[i];

        if (!hash[letter]) {
            hash[letter] = 0;
        }

        if (!hash[letter2]) {
            hash[letter2] = 0;
        }

        hash[letter]++;
        hash[letter2]--;
    }

    return !Object.keys(hash).find((letter) => Math.abs(hash[letter]) > 3)
};
```