# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5859503/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5859503/)

---

We check if the filter of even numbers  (trailing zero in binary) is bigger than 1 we return true otherwise false


# Complexity
- Time complexity: 68 ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 52 MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function hasTrailingZeros(nums: number[]): boolean {
    return nums.filter(e => e % 2 == 0).length > 1 ? true : false
};

```