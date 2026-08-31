# Worst,Ugly and Bad Code in Kotlin 😂

**Author:** nabilnazar
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/3607538/](https://leetcode.com/problems/most-frequent-even-element/solutions/3607538/)

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
    fun mostFrequentEven(nums: IntArray): Int {
        val hm = HashMap<Int, Int>()
        var max = 0
        var small = Int.MAX_VALUE

        if (nums.size == 1) {
            if (nums[0]%2 == 0) return nums[0]
            else return -1
        }

        for (i in 0 until nums.size) {
            if (nums[i] % 2 == 0) {
                hm[nums[i]] = hm.getOrDefault(nums[i], 0) + 1
                if (hm[nums[i]]!! > max) {
                    max = hm[nums[i]]!!
                }
            }
        }

        for ((key, value) in hm) {
            if (value == max && key < small) {
                small = key
            }
        }

        return if (small == Int.MAX_VALUE) -1 else small

        
    }
}

```