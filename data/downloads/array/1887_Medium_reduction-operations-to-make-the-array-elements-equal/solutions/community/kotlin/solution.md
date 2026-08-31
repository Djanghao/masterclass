# Kotlin solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4305868/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4305868/)

---

# Complexity

- Time complexity: $$O(n \\log(n))$$
- Space complexity: $$O(n)$$

# Code

```
class Solution {
    fun reductionOperations(nums: IntArray): Int {
        val counts = nums.asSequence().groupingBy { it }.eachCount()

        return counts.asSequence()
            .sortedByDescending { it.key }
            .take(counts.size - 1)
            .map { it.value }
            .fold(0 to 0) { (sum, layer), i ->
                sum + layer + i to layer + i
            }
            .first
    }
}

```