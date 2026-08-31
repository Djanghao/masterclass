# Bit Manipulation, XOR, easy to undertsand.

**Author:** nitesh14028
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3297093/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3297093/)

---

# Intuition
PrefixSum, Similar to count subarry sum to zeros.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
XOR operation with every number. Keep track of how many times XOR has appeared (frequency). Add the related result.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
    let res = 0
    let map = new Map();
    map.set(0, 1);
    let xor = 0;
    for(let no of nums) {
        xor = xor ^ no;
        if(map.has(xor)) {
            res = res + map.get(xor);
            map.set(xor, map.get(xor) + 1)
        } else {
            map.set(xor, 1)
        }
    }
    return res;
};
```