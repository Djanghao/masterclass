# :: Kotlin ::

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4406607/](https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4406607/)

---


# Code
```
class Solution {
    val mod = 1_000_000_007

    fun numberOfGoodPartitions(nums: IntArray): Int {
        val n = nums.size
        val last = HashMap<Int, Int>()

        for (i in nums.indices) {
            last.put(nums[i], i)
        }

        var count = 0 
        var pivot = 0 

        for (i in nums.indices) {
            val curr = nums[i]
            pivot = maxOf(pivot, last.getOrDefault(curr, pivot))

            if (pivot == i) {
                // println("$curr $i ${last.get(curr)}")
                count += 1
                pivot += 1
            }
        }

        // println("$count")

        var result = 1

        val comb = IntArray(n + 1)
        comb[1] = 1
        var accs = 1
        for (i in 2 .. count) {
            comb[i] = (accs + 1) % mod
            accs += comb[i]
            accs %= mod
        }

        return comb[count]
    }
}
```