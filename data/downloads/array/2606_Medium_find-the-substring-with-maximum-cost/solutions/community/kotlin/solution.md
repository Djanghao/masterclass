# Kotlin Recursion solution n*lon(n)

**Author:** IliaRodkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5730092/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5730092/)

---


# Complexity
- Time complexity: $$O(n*log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun maximumCostSubstring(s: String, chars: String, vals: IntArray): Int {
        val costChars = IntArray('z'-'a'+1) { i -> i+1 }
        for (i in chars.indices) {
            costChars[chars[i]-'a'] = vals[i]
        }
        val costStringArray = IntArray(s.length){ i -> costChars[s.get(i)-'a'] }
        return maxSubArraySumRecursive(costStringArray, 0, costStringArray.size - 1).coerceAtLeast(0)
    }

    fun maxSubArraySumRecursive(arr: IntArray, left: Int, right: Int): Int {
        if (left == right) {
            return arr[left]
        }

        val mid = (left + right) / 2

        val leftMax = maxSubArraySumRecursive(arr, left, mid)
        val rightMax = maxSubArraySumRecursive(arr, mid + 1, right)
        val crossMax = maxCrossingSum(arr, left, mid, right)

        return maxOf(leftMax, rightMax, crossMax)
    }

    fun maxCrossingSum(arr: IntArray, left: Int, mid: Int, right: Int): Int {
        var sum = 0
        var leftSum = Int.MIN_VALUE
        for (i in mid downTo left) {
            sum += arr[i]
            if (sum > leftSum) {
                leftSum = sum
            }
        }

        sum = 0
        var rightSum = Int.MIN_VALUE
        for (i in mid + 1..right) {
            sum += arr[i]
            if (sum > rightSum) {
                rightSum = sum
            }
        }

        return leftSum + rightSum
    }
}
```