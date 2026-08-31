# Kotlin solution prefix array

**Author:** andinrajesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/5697020/](https://leetcode.com/problems/sum-of-distances/solutions/5697020/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ 
# Code
```kotlin []
class Solution {
    fun distance(nums: IntArray): LongArray {
        val ans = LongArray(nums.size) { 0L } 
        val sum = mutableMapOf<Int, Long>()
        val count = mutableMapOf<Int, Long>()
        for(i in nums.indices) {
            val s = sum.get(nums[i]) ?: 0L
            val c = count.get(nums[i]) ?: 0L
            ans[i] += (i * c)-s
            count[nums[i]] = c+1
            sum[nums[i]] = s+i
        }
        sum.clear()
        count.clear()
        for(j in nums.size-1 downTo 0) {
            val s = sum.get(nums[j]) ?: 0
            val c = count.get(nums[j]) ?: 0
            ans[j] += s-(j * c)
            count[nums[j]] = c+1
            sum[nums[j]] = s+j
        }
        return ans
    }
}
```