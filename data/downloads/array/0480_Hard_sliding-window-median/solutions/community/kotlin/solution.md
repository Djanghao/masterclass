# Kotlin Functional Sliding Window Beats 100%

**Author:** Entyl
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/5949737/](https://leetcode.com/problems/sliding-window-median/solutions/5949737/)

---

https://leetcode.com/problems/sliding-window-median/submissions/1429895997

The runtime graph seems messed up so maybe this will not actually beat 100% runtime when it is fixed

We need `asSequence()` to pass memory limit.  That makes sense so we don't keep intermediate `MutableList`.  In other words the code runs the code vertically (element by element) rather than horiztonally (function by function)

Moving `toMutableList()` from before the `apply` to inside the `scanIndexed` almost halves the runtime from just under 1200ms

# Code
```kotlin []
class Solution {
    fun medianSlidingWindow(nums: IntArray, k: Int) = nums
        .drop(k)
        .asSequence()
        .scanIndexed(nums.take(k).sorted().toMutableList()) { index, acc, int -> 
            acc.apply {
                remove(nums[index])
                addInSortedPosition(int)
            }
        }
        .map { it.median() }
        .toList()
        .toTypedArray()

    private fun MutableList<Int>.remove(int: Int) {
        removeAt(binarySearch(int))
    }

    private fun MutableList<Int>.addInSortedPosition(int: Int) {
        val index = binarySearch(int)
        add(if (index < 0) -(index + 1) else index, int)
    }

    private fun List<Int>.median() =
        if (count() % 2 == 1) get(count() / 2).toDouble()
        else subList(lastIndex / 2, count() / 2 + 1).average()
}
```