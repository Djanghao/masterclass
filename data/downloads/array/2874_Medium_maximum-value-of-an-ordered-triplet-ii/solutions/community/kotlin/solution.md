# Kotlin, very simple solution, DP, Beats 82.61% time, Beats 82.61% space

**Author:** romiope
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4130725/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4130725/)

---

# Intuition
Try to implement this task in simplest way.
You will use 3 loops to find max elements - $$O(n^3)$$.
Cache those elements. If you manage to simplify even one loop and make look up O(1) - your algorithm will be $$O(n^2)$$

# Approach
1. Cache all max values by running from the end of the array to avoid searching for elements during multiplication. These cached values are represented as ```nums[k]```.
2. Traverse from the beginning and save the max in a variable representing the current element. During traversal, the current element is your ```nums[j]```, and the max is your ```nums[i]```.

# Complexity
- Time complexity:
We traverse array twise, so complexity is $$O(n)$$

- Space complexity:
We use additional array to store max vals for multiplication $$O(n)$$

# Code
```
class Solution {
    fun maximumTripletValue(nums: IntArray): Long {

        val maxToRight = IntArray(nums.size);
        
        {
            var last = nums.size - 1
            var max = Integer.MIN_VALUE

            while (last >= 0) {
                max = Math.max(max, nums[last])
                maxToRight[last] = max
                last--
            }
        }()

        var res = ((nums[0].toLong() - nums[1].toLong()) * nums[2]).toLong()

        var max = nums[0].toLong()
        for (i in 1 until nums.size - 1) {
            res = Math.max(res, (max - nums[i]) * maxToRight[i + 1].toLong())
            max = Math.max(max, nums[i].toLong())
        }

        return if (res < 0) 0 else res
    }
}


```