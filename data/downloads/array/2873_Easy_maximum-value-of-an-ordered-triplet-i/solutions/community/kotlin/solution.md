# Kotlin Solution

**Author:** Abhimanyu14
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/6078077/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/6078077/)

---

Brute Force

```
fun maximumTripletValueUsingBruteForce(nums: IntArray): Long {
    var result = 0L
    for (i in 0..nums.lastIndex - 2) {
        for (j in (i + 1)..nums.lastIndex - 1) {
            for (k in (j + 1)..nums.lastIndex) {
                result = max(result, ((nums[i] - nums[j]) * nums[k].toLong()))
            }
        }
    }
    return result
}
```

Optimized (Sharing the solution in Kotlin here)

Credits to @lee215 - https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/discuss/4111950/JavaC%2B%2BPython-One-Pass-O(n)

```
fun maximumTripletValue(nums: IntArray): Long {
    var result = 0L
    var maxA = 0L
    var maxAB = 0L
    nums.forEach { num ->
        result = max(result, (maxAB * num))
        maxAB = max(maxAB, (maxA - num))
        maxA = max(maxA, num.toLong())
    }
    return result
}
```