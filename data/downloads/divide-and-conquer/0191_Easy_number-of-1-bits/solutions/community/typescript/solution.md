# In JavaScript, use the >>> operator instead of the >> operator.

**Author:** user5956s
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/3985816/](https://leetcode.com/problems/number-of-1-bits/solutions/3985816/)

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
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   let count = 0
   while(n!== 0){
   if(n&1){
      count++
   }
   n = n>>>1
//IMPORTANT NOTE:-when we are use >> operator  at that time it will not work for 11111111111111111111111111111101 this test case so we can use >>> operator because Use unsigned right shift to handle large positive numbers
   }
   return count
};
```