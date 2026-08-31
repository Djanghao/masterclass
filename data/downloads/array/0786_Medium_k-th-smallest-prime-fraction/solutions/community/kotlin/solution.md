# [Kotlin] 🔥 Simplest Solution

**Author:** sshamillov
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137847/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137847/)

---

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun kthSmallestPrimeFraction(arr: IntArray, k: Int): IntArray {
        val heap = PriorityQueue<Pair<Int, Int>> { a, b ->
            arr[a.first] * arr[b.second] - arr[b.first] * arr[a.second]
        }

        for (i in arr.indices) {
            for (j in i + 1 until arr.size) {
                heap.add(i to j)
            }
        }

        var pair = heap.poll()
        repeat(k - 1) { pair = heap.poll() }

        return intArrayOf(arr[pair.first], arr[pair.second])
    }
}
```