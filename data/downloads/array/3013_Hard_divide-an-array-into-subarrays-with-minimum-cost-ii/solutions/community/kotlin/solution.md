# Kotlin Using sets

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4666900/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4666900/)

---

# Intuition
Idea is, that with all indices except for first of nums, that we keep set of indicies that we consider as starting points of k-1 subarrays.

Use two set:

s1 for keeping currently min indices of our subarrays
s2 for keeping rest

We then try to find minimum sum of nums[i] for all i in our s1 set.

Add first dist elements to our, if we have more than k - 1 elements, remove the largest ones. Set res to the sum of all nums[i] for these indices.

Loop through remaining indicies from dist + 2 until n, and try to find a combo of indices such that our sum of all nums[i] incidies is the minimum.

The result is the minimun of sum of nums[i] for the indicies we checked, plus nums[0] as the starting index/cost for the first subarray.

# Code
```
class Solution {
    fun minimumCost(nums: IntArray, k: Int, dist: Int): Long {
        val n = nums.size
        val comp = compareBy<Int> { nums[it] }.thenBy { it }
        val s1 = TreeSet (comp)
        val s2 = TreeSet (comp)
        var total = 0L
        var res = Long.MAX_VALUE

        for (j in 1..minOf(dist + 1, n - 1)) {
            total += nums[j]
            s1.add(j)

            if (s1.size > k - 1) {
                val value = s1.pollLast()
                total -= nums[value]
                s2.add(value)
            }
        }
        
        res = minOf(res, total)

        for (j in dist + 2 until n) {
            s2.add(j)

            val i = j - dist - 1

            if (s1.contains(i)) {
                total -= nums[i]
                s1.remove(i)
                
                val si = s2.pollFirst()
                total += nums[si]
                s1.add(si)
            } else {
                s2.remove(i)

                if (nums[s1.last()] > nums[s2.first()]) {
                    val i2 = s1.pollLast()
                    total -= nums[i2]
                    s2.add(i2)

                    val si = s2.pollFirst()
                    total += nums[si]
                    s1.add(si)
                }
            }

            res = minOf(res, total)
        }

        return nums[0] + res
    }
}
```