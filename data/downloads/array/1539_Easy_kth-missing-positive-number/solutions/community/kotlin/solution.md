# Kotlin | binary search

**Author:** SamoylenkoDmitry
**Votes:** 5
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/3263077/](https://leetcode.com/problems/kth-missing-positive-number/solutions/3263077/)

---

#### Join me on Telegram
https://t.me/leetcode_daily_unstoppable/139
#### Intuition
Let's observe an example: 
```
        // 1 2 3 4 5 6 7 8 9 10 11
        // * 2 3 4 * * 7 * * *  11
```
For each number at its position, there are two conditions:
* if it stays in a correct position, then `num - pos == 0`
* if there is a missing number before it, then `num - pos == diff > 0`

We can observe the pattern and derive the formula for it:
```
        // 1 2 3 4 5
        // 2 3 4 7 11
        // 1
        //   1
        //     1
        //       3
        //         6
        //
        //       ^ 7 + (5-3) = 9
        //         arr[m] + (k-diff)
```
One corner case is if the missing numbers are at the beginning of the array:
```
        // 1 2
        // 7 8     k=1
        // 6
        //   6
```
Then the answer is just a `k`.
#### Approach
For more robust binary search code:
* use inclusive borders `lo` and `hi` (don't make of by 1 error)
* use inclusive last check `lo == hi` (don't miss one item arrays)
* always move the borders `mid + 1` or `mid - 1` (don't fall into an infinity loop)
* always compute the search if the case is `true` (don't compute it after the search to avoid mistakes)
#### Complexity
- Time complexity:
$$O(log_2(n))$$
- Space complexity:
$$O(1)$$
#### Code
```
class Solution {
    fun findKthPositive(arr: IntArray, k: Int): Int {
        // 1 2 3 4 5 6 7 8 9 10 11
        // * 2 3 4 * * 7 * * *  11
        //   ^                  ^
        // 1 2 3 4 5
        // 2 3 4 7 11
        // 1
        //   1
        //     1
        //       3
        //         6
        //
        //       ^ 7 + (5-3) = 9
        //         arr[m] + (k-diff)
        //
        // 1 2
        // 7 8     k=1
        // 6
        //   6
        var lo = 0
        var hi = arr.lastIndex
        var res = -1
        while (lo <= hi) {
            val mid = lo + (hi - lo) / 2
            val diff = arr[mid] - mid - 1
            if (diff < k) {
                res = arr[mid] + (k - diff)
                lo = mid + 1
            } else {
                hi  = mid - 1
            }
        }
        return if (res == -1) k else res
    }
}
```