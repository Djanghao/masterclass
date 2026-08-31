# [Typescript] O(N2) O(N) Simple two pointers

**Author:** shaywiin1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5258400/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5258400/)

---

# Intuition
Compare two substrings start with two pointers.
Take first char of greater substring

# Complexity
- Time complexity:
O(N^2)
- Space complexity:
O(N)
# Code
```
function largestMerge(word1: string, word2: string): string {
    const length1 = word1.length, length2 = word2.length;
    let i1 = 0, i2 = 0, res = '';

    while (i1 < length1 || i2 < length2) {
        if (word1.slice(i1) > word2.slice(i2)) {
            res += word1.charAt(i1++);
        } else {
            res += word2.charAt(i2++);
        }
    }

    return res;
};
```