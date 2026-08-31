# Beats 100% | Kotlin | Sliding Window

**Author:** user2775
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/3799816/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/3799816/)

---

# Approach
Sliding window

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun minSumOfLengths(arr: IntArray, target: Int): Int {
        var sum = 0
        var left = 0
        var right = 0
        var ans = Int.MAX_VALUE
        var minTillNow = Int.MAX_VALUE
        val resArr = IntArray(arr.size)
        while (right < arr.size) {
            sum += arr[right++]
            while (sum > target) {
                sum -= arr[left++]
            }
            if (sum == target) {
                if (left > 0 && resArr[left - 1] != Int.MAX_VALUE) {
                    ans = Math.min(ans, right - left + resArr[left - 1])
                }
                minTillNow = Math.min(minTillNow, right - left)
            }
            resArr[right - 1] = minTillNow
        }
       
        if (ans == Int.MAX_VALUE) return -1
        return ans
    }
}
```