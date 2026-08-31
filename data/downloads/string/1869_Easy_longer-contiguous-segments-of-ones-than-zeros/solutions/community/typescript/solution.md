# Typescript | Javascript, 100% memory less

**Author:** tohasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/2657331/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/2657331/)

---

```
function checkZeroOnes(s: string): boolean {
    return getLongestSegment(s, '0') < getLongestSegment(s, '1');
}

function getLongestSegment(s: string, c: Char): number {
    let len = 0;
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            len++;
        } else if (0 < len) {
            maxLen = Math.max(maxLen, len);
            len = 0;
        }
    }
    return Math.max(maxLen, len);
}

type Char = string;
```

<img alt="submission" src="https://assets.leetcode.com/users/images/40a95926-5c10-4e00-b7aa-ac7436a93a54_1664831006.0128562.png" width="600"/>

