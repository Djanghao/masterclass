# Kotlin Lambda Solution

**Author:** MedSaid
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/2329577/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/2329577/)

---

```
    fun maxSubsequence(nums: IntArray, k: Int): IntArray {
        return nums.mapIndexed{i, e -> Pair(i, e)}
            .sortedBy{-it.second}
            .take(k)
            .sortedBy{it.first}
            .map{nums[it.first]}
            .toIntArray()
    }
```