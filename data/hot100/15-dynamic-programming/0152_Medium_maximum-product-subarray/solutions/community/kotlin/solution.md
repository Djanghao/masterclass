# Kotlin: Dynamic Programming

**Author:** artemasoyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/3024357/](https://leetcode.com/problems/maximum-product-subarray/solutions/3024357/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    fun maxProduct(nums: IntArray): Int {
        var res = nums.max()!!
        var min = 1; var max = 1;

       for (n in nums) {
           var temp = min * n
           
           min = minOf(n * max, n * min, n)
           max = maxOf(n * max, temp, n)
           
           res = maxOf(res, max)
       }

       return res
    }
}
```