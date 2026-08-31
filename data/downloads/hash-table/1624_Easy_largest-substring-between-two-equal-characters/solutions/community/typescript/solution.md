# Simple and Understandable solutions O(n) ✅

**Author:** Inayat_Ali
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4481923/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4481923/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const maxLengthBetweenEqualCharacters = (s: string): number => {
    let longestSubstrLen = -1;
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
            let temp = s.substring(s.indexOf(s[i]), s.lastIndexOf(s[i])).length - 1;
            longestSubstrLen = longestSubstrLen < temp ? temp : longestSubstrLen;
        }

    }
    return longestSubstrLen;
};
```