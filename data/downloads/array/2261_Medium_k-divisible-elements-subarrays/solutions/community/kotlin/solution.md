# Kotlin impl || O(N^2)

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/5835689/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/5835689/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun countDistinct(nums: IntArray, k: Int, p: Int): Int {
        val set = mutableSetOf<List<Int>>()
        for(i in nums.indices) {
            val list = arrayListOf<Int>()
            var diffNum = 0
            for(j in i until nums.size) {
                list.add(nums[j])
                if(nums[j]%p == 0){
                    diffNum++
                }
                if(diffNum > k) {
                    break
                }
                set.add(list.toList())
            }
        }
        return set.size
    }
}
```