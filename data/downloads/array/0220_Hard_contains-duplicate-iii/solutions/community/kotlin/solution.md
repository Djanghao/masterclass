# Kotlin Lovers | Sliding Window with Buckets to store the window values

**Author:** treat
**Votes:** 1
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/3733772/](https://leetcode.com/problems/contains-duplicate-iii/solutions/3733772/)

---

# Intuition
Constant window size problem. Wasn't sure how to process the window size of indexDiff. That's where the bucket sort logic comes in place

# Approach
Divide all inputs in bucket. The range of each bucket is valueDiff

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(indexDiff)

# Code
```
class Solution {
    fun getKey(value: Int, base: Int): Int {
        return if (value > -1) value/(base+1) else (value-base)/(base +1)
    }

    fun containsNearbyAlmostDuplicate(nums: IntArray, indexDiff: Int, valueDiff: Int): Boolean {
        var j = 0
        val map = mutableMapOf<Int, Int>()
        
        while( j < nums.size){
            val key = getKey(nums[j], valueDiff)
            if(map[key] != null) return true
            if(map[key-1] != null && Math.abs(map[key-1]!! - nums[j]) <= valueDiff) return true
            if(map[key+1] != null && Math.abs(map[key+1]!! - nums[j]) <= valueDiff) return true
            map[key] = nums[j]

            if(j >= indexDiff){
                map.remove(getKey(nums[j-indexDiff], valueDiff))
            }
            j++
        }
        return false
    }
}
```