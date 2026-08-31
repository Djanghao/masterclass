# Solution with MutableMap in Kotlin

**Author:** coldsquir
**Votes:** 2
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/3292834/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/3292834/)

---


# Code
```
class Solution {
    fun subarraySum(nums: IntArray, k: Int): Int {
        val map: MutableMap<Int, Int> = mutableMapOf()
        var curSum = 0
        var res = 0
        for(i in nums.indices){
            curSum+=nums[i]
            if(curSum == k){
                res++
            }
            if(map.containsKey(curSum-k)){
                res+=map[curSum-k]!!
            }
            if(map.containsKey(curSum)){
                map[curSum]= map[curSum]!! + 1
            }
            else map[curSum]=1
        }
        return res
    }
}
```