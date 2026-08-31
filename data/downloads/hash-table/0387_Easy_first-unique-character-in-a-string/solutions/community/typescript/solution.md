# Simple solution  using findIndex method

**Author:** Hanuman-Ghawade
**Votes:** 4
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4520507/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4520507/)

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
function firstUniqChar(s: string): number {
    const arr = s.split('')
    const result = arr.findIndex((ele, i,arr) => arr.indexOf(ele) === arr.lastIndexOf(ele))
    return result
    
};
```