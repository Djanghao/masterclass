# Kotlin | 1D DP | DFS -> Tabulation -> State Machine

**Author:** roger5655d
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3903255/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3903255/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have 2 choices to make in every index i, and we can either take 2 elements or 3 elements at a times.

for example:
[4,4,4,5,6] can be split to 2 sub-problems, `validPartition([4,5,6])` or `validPartition([5,6])`

Then, we can optimize our approach with Memoization, Bottom Up or State Machine

# Approach 1: DFS with Memoization
<!-- Describe your approach to solving the problem. -->


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
private typealias Index = Int

class Solution {
    fun validPartition(nums: IntArray): Boolean {
        return dfsTopDown(nums)
    }

    private fun dfsTopDown(nums: IntArray): Boolean {
        val isValid: MutableMap<Index, Boolean> = HashMap(nums.size)

        fun dfs(curr: Index): Boolean {
            if (curr !in nums.indices) return curr == nums.size

            val cache = isValid[curr]
            if (cache != null) return cache

            var exactly2 = false
            if (curr + 1 in nums.indices) {
                exactly2 = nums[curr] == nums[curr + 1]
            }
            if (exactly2 && dfs(curr + 2)) return true.also { isValid[curr] = it }

            var exactly3 = false
            if (curr + 2 in nums.indices) {
                exactly3 = exactly2 && (nums[curr] == nums[curr + 2])
            }

            var ascExactly3 = false
            if (curr + 2 in nums.indices) {
                val diff1 = nums[curr + 1] - nums[curr]
                val diff2 = nums[curr + 2] - nums[curr + 1]
                ascExactly3 = diff1 == 1 && diff2 == 1
            }
            if ((ascExactly3 || exactly3) && dfs(curr + 3)) return true.also { isValid[curr] = it }
            
            isValid[curr] = false
            return false
        }

        // Time: O(n) with cache
        // Space: O(n)
        return dfs(0)
    }
}
```

# Approach 2: Bottom Up | Tabulation
<!-- Describe your approach to solving the problem. -->


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun validPartition(nums: IntArray): Boolean {
        return dpBottomUp(nums)
    }

    private fun dpBottomUp(nums: IntArray): Boolean {
        val isValid = BooleanArray(nums.size + 1)

        // base case
        // nums is valid if partition size = 0
        // nums is not valid if partition size == 1
        isValid[0] = true
        isValid[1] = false
        isValid[2] = nums[0] == nums[1]

        for (size in 3..nums.size) {
            val i = size - 1
            
            val exactly2 = nums[i] == nums[i - 1]
            isValid[size] = isValid[size] || (exactly2 && isValid[size - 2])

            val exactly3 = exactly2 && nums[i] == nums[i - 2]
            isValid[size] = isValid[size] || (exactly3 && isValid[size - 3])

            val diff1 = nums[i] - nums[i - 1]
            val diff2 = nums[i - 1] - nums[i - 2]
            val ascExactly3 = diff1 == 1 && diff2 == 1
            isValid[size] = isValid[size] || (ascExactly3 && isValid[size - 3])
        }

        // Time: O(n)
        // Space: O(n)
        return isValid[nums.size]
    }
}
```

# Approach 3: State Machine
<!-- Describe your approach to solving the problem. -->


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun validPartition(nums: IntArray): Boolean {
        return dpStateMachine(nums)
    }

    private fun dpStateMachine(nums: IntArray): Boolean {
        // initial state
        var isValid1 = true
        var isValid2 = false
        var isValid3 = nums[0] == nums[1]

        for (size in 3..nums.size) {
            val i = size - 1
            
            val exactly2 = nums[i] == nums[i - 1]

            val exactly3 = exactly2 && nums[i] == nums[i - 2]

            val diff1 = nums[i] - nums[i - 1]
            val diff2 = nums[i - 1] - nums[i - 2]
            val ascExactly3 = diff1 == 1 && diff2 == 1

            val curr = (exactly2 && isValid2)
                    || (exactly3 && isValid1)
                    || (ascExactly3 && isValid1)
            
            isValid1 = isValid2
            isValid2 = isValid3
            isValid3 = curr
        }

        // Time: O(n)
        // Space: O(1)
        return isValid3
    }
}
```