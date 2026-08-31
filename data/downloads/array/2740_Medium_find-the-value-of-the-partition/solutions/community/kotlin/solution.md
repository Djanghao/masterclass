# Sorting and min neighbor difference

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/5982349/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/5982349/)

---

# Approach
Sorting and min neighbor difference
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun findValueOfPartition(nums: IntArray): Int {
        Arrays.sort(nums)
        var min = Int.MAX_VALUE
        for (i in 1 until nums.size) {
            min = Math.min(min,nums[i]-nums[i-1])
            if (min == 0) break
        }
        return min
    }
}
```