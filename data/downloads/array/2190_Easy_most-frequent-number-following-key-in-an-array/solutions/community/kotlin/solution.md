# Simple kotlin code

**Author:** SheikhChilli
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1822417/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1822417/)

---

```
class Solution {
    fun mostFrequent(nums: IntArray, key: Int): Int {
        var map = hashMapOf<Int,Int>()
        var target = 0
        var maxCount = 0
        for(i in 0 until nums.size-1){
            if(nums[i] == key){
                val currentTarget = nums[i+1]
                val count = map.getOrDefault(currentTarget,0) + 1
                if(count>maxCount){
                    maxCount = count
                    target = currentTarget
                }
                
                map[currentTarget] = count
            }
        }
    
        return target
    }
}
```