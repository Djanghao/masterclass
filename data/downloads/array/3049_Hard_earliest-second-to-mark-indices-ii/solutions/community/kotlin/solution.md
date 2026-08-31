# :: Kotlin :: Binary Search + Min Heap + Greedy

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/5115209/](https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/5115209/)

---


# Code
```
class Solution {
    fun earliestSecondToMarkIndices(nums: IntArray, changeIndices: IntArray): Int {
        val n = nums.size
        val m = changeIndices.size
        var total = nums.map{it.toLong()}.sum()!! + n.toLong()

        fun valid(k: Int): Boolean {
            var extra = 0L

            val first = IntArray(n){ -1 }

            for (i in k downTo 0) {
                first[changeIndices[i] - 1] = i
            }

            val pq = PriorityQueue<Long>()
            for (i in k downTo 0) {
                if (first[changeIndices[i] - 1] != i || nums[changeIndices[i] - 1] == 0) {
                    extra += 1L
                    continue
                }

                pq.offer(nums[changeIndices[i] - 1].toLong())

                if (pq.size > extra) {
                    pq.poll()
                    extra += 1L
                }
            }

            var cost = extra

            while(pq.isNotEmpty()) {
                cost += pq.poll()
            }

            return cost >= total
        }

        var left = 0
        var right = m

        while(left < right) {
            val mid = left + (right - left) / 2

            if (valid(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return if(left == m) -1 else left + 1
    }
}
```