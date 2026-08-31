# Simple Kotlin

**Author:** mahsan466
**Votes:** 0
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/3146433/](https://leetcode.com/problems/tuple-with-same-product/solutions/3146433/)

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
class Solution {
    fun tupleSameProduct(nums: IntArray): Int {

        var map = HashMap<Int,Int>()
        var res = 0
        for(i in 0..nums.size-1 ){
            for(j in i+1..nums.size-1){
                var prod = nums[i]*nums[j]
                res+=map.getOrDefault(prod,0) * 8
               map.put(prod,map.getOrDefault(prod,0)+1)
            }
        }

        return res
    }
}
```