# [Kotlin] Dynamic Programming Approach for Repeated Substring

**Author:** teogor
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/5012290/](https://leetcode.com/problems/count-the-repetitions/solutions/5012290/)

---

# Intuition
We can approach this problem by simulating the process of forming `str2` from `str1` and keeping track of the counts of repetitions needed for each position in the repeated string `s1`. By efficiently tracking repetitions and identifying patterns, we can determine the maximum number of times `str2` can be obtained from `str1`.

# Approach
1. Initialize two hashmaps, `kToRepeatCount` and `nextIndexToK`, to store the count of repetitions needed for each position in the repeated string `s1` and the next index associated with each key `j`, respectively.
2. Initialize variables `j` and `repeatCount` to track the current position in `s2` and the count of repetitions, respectively.
3. Iterate through each repetition of `s1` up to `n1`.
4. For each repetition, simulate the process of forming `s2` by comparing characters of `s1` and `s2` and updating `j` and `repeatCount` accordingly.
5. If we encounter a repeating pattern, calculate the number of occurrences of the pattern and adjust the count accordingly.
6. Return the maximum repetition count for `str2`.

# Complexity
- Time complexity: O(`s1` * n1), where `s1` is the length of s1. We iterate through each character of s1 for each repetition of n1.
- Space complexity: O(n1). We store the count of repetitions and next index for each repetition of s1.

# Code
```
class Solution {
    fun getMaxRepetitions(s1: String, n1: Int, s2: String, n2: Int): Int {
        val kToRepeatCount = HashMap<Int, Int>()
        val nextIndexToK = HashMap<Int, Int>()
        kToRepeatCount[0] = 0
        nextIndexToK[0] = 0
        var j = 0
        var repeatCount = 0
        for (k in 1..n1) {
            for (i in s1.indices) {
                if (s1[i] == s2[j]) {
                    j++
                    if (j == s2.length) {
                        j = 0
                        repeatCount++
                    }
                }
            }
            if (nextIndexToK.containsKey(j)) {
                val start = nextIndexToK[j]!!
                val prefixCount = kToRepeatCount[start]!!
                val patternCount = (n1 - start) / (k - start) * (repeatCount - prefixCount)
                val suffixCount = kToRepeatCount[start + (n1 - start) % (k - start)]!! - prefixCount
                return (prefixCount + patternCount + suffixCount) / n2
            }
            kToRepeatCount[k] = repeatCount
            nextIndexToK[j] = k
        }
        return kToRepeatCount[n1]!! / n2
    }
}

```