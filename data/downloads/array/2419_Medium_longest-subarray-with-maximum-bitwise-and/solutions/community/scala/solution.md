# scala

**Author:** Aditya11cr7
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5786697/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/5786697/)

---

# Intuition
actually need to find the max count of the consecutive occurances of the largest number in the array

# Approach
<!-- Describe your approach to solving the problem. -->
Example: [4,4,4,1,1,2,4,4,4,4,4] here the larges number is 4, and the count of its consecutive occurances are 3 and 5, so we return 5 as the solution

# Complexity
- Time complexity:
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```scala []
import scala.math.max
object Solution {
    def longestSubarray(nums: Array[Int]): Int = {
        var k = 1
        var start = 0
        var maxK = 0
        if(nums.length == 1) k
        else {
            for(i <- 1 until nums.length) {
                if(nums(i) == nums(start)) {
                    if(i-start == 1) {
                        k = k+1
                        start = start + 1
                    } else {
                        maxK = max(maxK, k)
                        k = 1
                        start = i
                    }
                }
                else if (nums(i) > nums(start)) {
                    k = 1
                    start = i
                }
            }
            max(k, maxK)
        }
        
    }
}
```