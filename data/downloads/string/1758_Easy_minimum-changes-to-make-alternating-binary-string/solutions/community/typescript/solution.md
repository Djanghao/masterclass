# Simple solution, using two counters

**Author:** bogdanppetru
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4450569/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4450569/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There can be two posibilities, the string starts with 0 or 1.

# Approach
<!-- Describe your approach to solving the problem. -->
Iterate over the given string and count the number of flips, by comparing how many differences are between the input and the two possible strings (0101..., or 1010...).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - We iterate once over the string. 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) -  we keep only two variables

# Code
```
function minOperations(s: string): number {
    let change0 = 0
    let change1 = 0

    for (let i = 0; i < s.length; i++) {
      const candidate = s[i]
      
      // starts with 0
      const expected0 = i % 2 === 0 ? '0' : '1'
      if (expected0 !== candidate) {
        change0 += 1
      }

      // starts with 1
      const expected1 = i % 2 === 0 ? '1' : '0'
      if (expected1 !== candidate) {
        change1 += 1
      }

    }

    return Math.min(change0, change1)
};
```