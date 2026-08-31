# Simple Kotlin Solution

**Author:** Shivam_verma24
**Votes:** 2
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3056373/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3056373/)

---

# Complexity
- Time complexity:
O(n2)

- Space complexity:
O(1)

# Code
```
import kotlin.math.*
class Solution {
    fun differenceOfSum(nums: IntArray): Int {
        var sum=0 //for number sum
        var bitsum = 0 //for digit sum
        for(i in nums){
            sum+=i
            var x=i
            while(x>0){
                bitsum+=(x%10)
                x=x/10
            }
        }
        return abs(bitsum-sum)
    }
}
```