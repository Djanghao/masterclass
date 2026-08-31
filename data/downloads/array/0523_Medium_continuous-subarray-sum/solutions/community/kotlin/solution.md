# My kotlin solution with time O(N) and space O(k)

**Author:** hj-core
**Votes:** 3
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/5278672/](https://leetcode.com/problems/continuous-subarray-sum/solutions/5278672/)

---

The idea is to track the prefix sum modulo k. If the current prefix sum modulo k has been seen before, it means we have a subarray whose sum modulo k equals zero, indicating that its sum is a multiple of k. Additionally, a good subarray needs to have a size of at least two. To ensure the size of the found subarray, we delay the tracking of the prefix sum modulo k by one index.

Below is my solution in kotlin,
```
class Solution {
    /* Complexity:
     * Time O(N) and Space O(k) where N is the size of nums;
     */
    fun checkSubarraySum(nums: IntArray, k: Int): Boolean {
        // Tracking the prefixSumModKs with one index delay to ensure the subarray size
        val prefixSumModKs = mutableSetOf<Int>()
        var prevPrefixSumModK = 0

        for (num in nums) {
            val prefixSumModK = (prevPrefixSumModK + num) % k
            if (prefixSumModK in prefixSumModKs) {
                return true
            }

            prefixSumModKs.add(prevPrefixSumModK)
            prevPrefixSumModK = prefixSumModK
        }
        return false
    }
}
```