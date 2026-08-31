# Kotlin easy expalined (DP + deque)

**Author:** skulagin
**Votes:** 1
**Link:** [https://leetcode.com/problems/constrained-subsequence-sum/solutions/4192064/](https://leetcode.com/problems/constrained-subsequence-sum/solutions/4192064/)

---

# Approach
1. Use a deque for tracking the maximum sum within a window of size k.
2. Use dynamic programming to calcualte current max sum value
3. Manage that deque always contains the highest sum in the current window

# Complexity
- Time complexity:
$$O(N)$$ - each element is pushed and popped from the deque at most once.

- Space complexity:
$$O(K)$$ - deque can contain at most $$k$$ elements.

# Code
```
class Solution {
    fun constrainedSubsetSum(nums: IntArray, k: Int): Int {
        // deq stores pairs of index in nums to according max sum
        val deq = ArrayDeque<Pair<Int, Int>>()
        var max = nums.first()

        for (i in 0..nums.lastIndex) {
            val currentMax = nums[i] + if (deq.isNotEmpty()) deq.first().second else 0
            max = Math.max(max, currentMax)

            // remove from deq all values below currentMax
            while (deq.isNotEmpty() && currentMax >= deq.last().second) deq.removeLast()
            
            // add to deq if currentMax > 0
            if (currentMax > 0) deq.add(i to currentMax)
            
            // remove first deq value if it placed too far
            if (deq.isNotEmpty() && deq.first().first == i - k) deq.removeFirst()
        }
        return max
    }
}
```