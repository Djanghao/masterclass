# O(NLogN) Solution|| Sorted set

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/5816496/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/5816496/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
 fun maximumTripletValue(nums: IntArray): Int {
        val n = nums.size
        val right = IntArray(n){0}
        right[n-1] = nums[n-1]
        for(i in n-2 downTo 0){
            right[i] = max(right[i+1],nums[i])
        }
        val s = sortedSetOf<Int>()
        var ans = 0
        for(i in 0..n-1) {
            if(right[i] > nums[i]) {
                val lwb = s.floor(nums[i]-1)
                if(lwb != null) {
                    ans = max(ans, lwb-nums[i]+right[i])
                }
            }
            s.add(nums[i])
        }
        return ans
    }
}
```