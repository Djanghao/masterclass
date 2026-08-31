# nC2 approach

**Author:** gyanendra2058
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5809433/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5809433/)

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
```typescript []
function numberOfSubstrings(s: string): number {
    const strCharArray = [...s];
    const countMap = new Map<string, number>()
    for (let i = 0; i < strCharArray.length; i++) {
        if (!countMap.has(strCharArray[i])) {
            countMap.set(strCharArray[i], 1)
        } else {
            countMap.set(strCharArray[i], countMap.get(strCharArray[i]) + 1)
        }
    }

    let count = strCharArray.length;

    for (let [k, v] of countMap.entries()) {
        if (v > 1) {
            count = count + (v * (v - 1)) / 2
        }
    }
    return count
};
```