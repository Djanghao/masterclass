# Kotlin | nums[i] can't be zero

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620296/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620296/)

---

#### Join me on Telegram
https://t.me/leetcode_daily_unstoppable/241
#### Problem TLDR
Max at `index` in an `n` sized array, where `sum <= maxSum`, `nums[i] > 0` and `maxDiff(i, i+1) < 2`.
#### Intuition
Let's write possible numbers, for example:
```
        // n=6, i=1, m=10
        // 10/6 = 1
        // 0 1 2 3 4 5 
        // -----------
        // 0 1 0 0 0 0 sum = 1
        // 1 2 1 0 0 0 sum = 1 + (1 + 1 + 1) = 4        
        // 2 3 2 1 0 0 sum = 4 + (1 + 2 + 1) = 8        
        // 3 4 3 2 1 0 sum = 8 + (1 + 3 + 1) = 13 > 10  prev + (1 + left + right)
        // 4 5 4 3 2 1 sum = 13 + (1 + 4 + 1) = 19      left = minOf(left, i)
        // 5 6 5 4 3 2 sum = 19 + (1 + 4 + 1) = 24      right = minOf(right, size - i - 1)
        // 6 7 6 5 4 3 
        // ...
        //   5+x       sum = 19 + x * (1 + 4 +1)
        // ...
        // S(x-1) - S(x-1-i) + x + S(x-1) - S(x-1 - (size-i-1))
        // x + 2 * S(x-1) - S(x-1-i) - S(x-size+i)
        // S(y) = y * (y + 1) / 2
```
We should minimize the sum for it to be `<= maxSum`, so naturally, we place the maximum at `index` and do strictly lower the sibling numbers.
Looking at the example, we see there is an arithmetic sum to the left and to the right of the `index`. 
$$
S(n) = 1 + 2 + .. + (n-1) + n = n * (n+1) / 2
$$
We are also must subtract part of the sum, that out of the array:
$$
\\sum = S(x-1) - S(x-1-i) + x + S(x-1) - S(x-1 - (size-i-1))
$$
Another catch, numbers can't be `0`, so we must start with an array filled of `1`: `1 1 1 1 1 1`. That will modify our algorithm, adding `n` to the `sum` and adding one more step to the `max`.

Given that we know `sum` for each `max`, and `sum` will grow with increasing of the `max`, we can do a binary search `sum = f(max)` for `max`.
#### Approach
For more robust binary search:
* use inclusive borders `lo` and `hi`
* check the last condition `lo == hi`
* always compute the result `max = mid`
* avoid the number overflow
#### Complexity
- Time complexity:
$$O(log(n))$$
- Space complexity:
$$O(1)$$
#### Code
```

    fun maxValue(n: Int, index: Int, maxSum: Int): Int {

        val s: (Int) -> Long = { if (it < 0L) 0L else it.toLong() * (it.toLong() + 1L) / 2L }
        var lo = 0
        var hi = maxSum
        var max = lo
        while (lo <= hi) {
            val mid = lo + (hi - lo) / 2
            val sum = n + mid + 2L * s(mid - 1) - s(mid - 1 - index) - s(mid - n + index)
            if (sum <= maxSum) {
                max = mid
                lo = mid + 1
            } else hi = mid - 1
        }
        return max + 1
    }

```