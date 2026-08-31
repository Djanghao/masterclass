# Runtime 3ms, beats 100%

**Author:** iamrealvi
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/5929236/](https://leetcode.com/problems/consecutive-characters/solutions/5929236/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```typescript []
const maxPower = (str: string): number => {
    if (!str.length) return 0;

    let curLen = 1;
    let maxLen = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            curLen += 1;
        } else {
            maxLen = Math.max(maxLen, curLen);
            curLen = 1;
        }
    }

    return maxLen;
};
```