# My kotlin solution with time O(N) and space O(N)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5864174/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5864174/)

---

The idea is to work with numbers modulo p instead of the numbers themselves. First, we compute the prefix sums modulo p, enabling O(1) computation of the sum modulo p for any subarray (PS: it turns out to be redundant). Let target be the sum modulo p of the subarray to be removed, which equals the sum modulo p of the entire array. If target is 0, the array is already divisible by p, and we return 0. Otherwise, we try all possible end indices for the removed subarray. For each end index, we find the latest prefix index that removing the prefix array results in a remaining array with a sum modulo p equal to target. We track the resulting length for each end index and return the minimum length, or -1 if no such subarray is found.

Below is my solution in kotlin,
```
class Solution {
    /* Complexity:
     * Time O(N) and Space O(N) where N is the size of nums.
     */
    fun minSubarray(
        nums: IntArray,
        p: Int,
    ): Int {
        val prefixModSums = IntArray(nums.size)
        prefixModSums[0] = nums[0] % p
        for (i in 1..<nums.size) {
            prefixModSums[i] = (nums[i] + prefixModSums[i - 1]) % p
        }

        val target = prefixModSums.last()
        if (target == 0) {
            return 0
        }

        var result = nums.size
        val latestPrefix = mutableMapOf(0 to -1) // The latest index of prefix sum mod p
        for ((i, modSum) in prefixModSums.withIndex()) {
            val complement = (modSum - target + p) % p
            if (complement in latestPrefix) {
                result = min(result, i - checkNotNull(latestPrefix[complement]))
            }
            latestPrefix[modSum] = i
        }
        return if (result < nums.size) result else -1
    }
}

```

Update on 2024-10-03: 
Eliminate the prefixModSums array which is not a must.
```
class Solution {
    /* Complexity:
     * Time O(N) and Space O(N) where N is the size of nums.
     */
    fun minSubarray(
        nums: IntArray,
        p: Int,
    ): Int {
        val sum = nums.fold(0L) { acc, i -> acc + i }
        val target = (sum % p).toInt()
        if (target == 0) {
            return 0
        }

        var result = nums.size
        var prefixModSum = 0
        val latestPrefix = mutableMapOf(0 to -1) // The latest index of prefix sum mod p
        for (i in nums.indices) {
            prefixModSum = (prefixModSum + nums[i]) % p
            val complement = (prefixModSum - target + p) % p
            if (complement in latestPrefix) {
                result = min(result, i - checkNotNull(latestPrefix[complement]))
            }
            latestPrefix[prefixModSum] = i
        }
        return if (result < nums.size) result else -1
    }
}

```

Update on 2024-10-03(2, 3, 4, 5): 
Little supplement showing that the complement is unique:
(s - v + p) % p = target where 0 <= s, v, target < p
=> s - v1 = target when s >= v or s - v2 + p = target when s < v
=> s - target = v1 >= 0 or s - target = v2 - p < 0
=> we cannot satisfy the two inequality at the same time
=> v is unique