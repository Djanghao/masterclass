# Kotlin Heap

**Author:** agent-10
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5899285/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5899285/)

---

# Code
```kotlin []
class Solution {
    fun getFinalState(nums: IntArray, k: Int, multiplier: Int): IntArray {
        val pq = PriorityQueue<Int>() { a,b->
            val cr = nums[a].compareTo(nums[b])
            if(cr != 0) cr else a.compareTo(b)
        }
        pq.addAll(nums.indices)
        repeat(k) {
            val i = pq.remove()
            nums[i] *= multiplier
            pq.add(i)
        }

        return nums
    }
}
```