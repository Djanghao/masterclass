# kotlin simple solution

**Author:** rickchencoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/4818720/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/4818720/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O((m+n)logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun answerQueries(nums: IntArray, queries: IntArray): IntArray {
        nums.sort()

        // Create a prefix sum array
        val prefixSum = IntArray(nums.size + 1)
        for (i in nums.indices) {
            prefixSum[i + 1] = prefixSum[i] + nums[i]
        } 

        val ans = IntArray(queries.size)

        for (i in queries.indices) {
            // binary search in prefixSum
            val maxSize = search(prefixSum, queries[i])
            ans[i] = maxSize
        }
        
        return ans

    }

    private fun search(arr: IntArray, target: Int): Int {
        var left = 0
        var right = arr.size - 1
        while (left <= right) {
            val mid = left  + (right - left) / 2
            when {
                arr[mid] == target -> return mid
                arr[mid] < target -> left = mid + 1
                else -> right = mid - 1
            }
        }

        return right

    }
}
```