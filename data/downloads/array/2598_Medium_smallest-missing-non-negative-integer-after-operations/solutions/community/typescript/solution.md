# 100% time and space complexity

**Author:** HighHorse
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/4340722/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/4340722/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(value)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findSmallestInteger(nums: number[], value: number): number {
    if (value === 1) return nums.length;
    const count = new Array(value).fill(0);
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] % value;
        if (num < 0) {
            num +=value;
        }
        count[num]++;
    }
    //  find out the min multiples of value
   const min = Math.min(...count);
    //  find out the left over
   const minIndex = count.indexOf(min);
   return min*value+minIndex;


};


```