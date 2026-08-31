# Simple Kotlin simulation solution, beats 100%

**Author:** lifran
**Votes:** 0
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4888992/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4888992/)

---

# Intuition
We simulate the process. The challenge is in marking the correctly indexed elements in the first step, while then also being able to mark the smallest elements.
We need to sort `nums`, while retaining the original indices, and also keep track of which indices have been removed.
If we put all of this together, we should be able to do all the bookkeeping necessary for the simulation.

# Approach
We sort `nums` first by value and then by index. This way we can iterate through this sorted list for step 2 of the simulation instructions.

In step 1, it is possible that the query points to an already marked element, and in step 2, it is possible that some of the next `k` smallest elements have already been marked. We use a hash set to keep track of already marked elements. We can update this set in constant time, and also use it for lookups in constant time.

If an element in step 1 is already marked, we simply skip it. If an element in step 2 is already marked, we skip it, and just keep trying until we have found `k` elements to mark, or we have run out of elements to mark.

# Complexity
- Time complexity:
O(`n log(n) + |queries|`), where `n = |nums|`. The `n log(n)` term comes from sorting `nums`. `|queries|` comes from iterating over all the queries, while only using constant time operations within this loop.

- Space complexity:
O(`|nums| + |queries|`), since we keep a sorted list of `nums`, we keep track of removed indices, which is also on the order of `|nums|` in size, and `result` is O(`|queries|`).

# Kotlin
```
class Solution {
    fun unmarkedSumArray(nums: IntArray, queries: Array<IntArray>): LongArray {
        val sorted = nums.map(Int::toLong).withIndex()
            .sortedWith(compareBy(IndexedValue<Long>::value).thenBy(IndexedValue<Long>::index))
        var sum = nums.map(Int::toLong).sum()

        val result = LongArray(queries.size)
        val removed = mutableSetOf<Int>()
        var unmarkedIndex = 0

        for ((i, query) in queries.withIndex()) {
            val (index, k) = query
            if (index !in removed) {
                removed.add(index)
                sum -= nums[index]
            }

            var kk = 0
            while (unmarkedIndex < sorted.size && kk < k) {
                if (sorted[unmarkedIndex].index !in removed) {
                    removed.add(sorted[unmarkedIndex].index)
                    sum -= sorted[unmarkedIndex].value
                    kk += 1
                }
                unmarkedIndex += 1
            }

            result[i] = sum
        }

        return result
    }
}
```