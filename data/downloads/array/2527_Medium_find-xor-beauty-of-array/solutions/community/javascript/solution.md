# 4 Lines of Clean Code || O(1) Space || O(N) Time

**Author:** Dawit-Melka
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3019019/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3019019/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
var xorBeauty = function(nums) {
    let result = 0
    for(let num of nums) {
        result ^= num
    }
    return result
};
```