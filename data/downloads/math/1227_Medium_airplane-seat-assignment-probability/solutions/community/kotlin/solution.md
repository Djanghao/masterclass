# Dynamic programming (LTE), then Math (bypass all test cases)

**Author:** garcol
**Votes:** 0
**Link:** [https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/4732370/](https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/4732370/)

---

# Intuition
If the 1st takes i_th position then [2nd to i-1_th] positions are then take their own position correctly

# Dynamic programming Approach
Let dp(n) is probability that n_th position is correct

dp(n) = [1] for i_th in (1 to n - 1):
- [a] the 1st takes i_th position then [2nd to i-1_th] positions are then take their own position correctly.
- [b] i_th is then random among { 1st position, i+1_th, ..., n_th }
                 we then recur to [1] by transforming { 1st position, i+1_th, ..., n_th } to [1st to (n - i + 1)_th]

# Dynamic programming Complexity
- Time complexity: O(n^2)
- Space complexity: O(n)

# Dynamic programming code
```
    fun nthPersonGetsNthSeat(n: Int): Double {
        val memoi = Array<Double?>(n + 1) { null }
        fun dp(totalSeat: Int): Double {
            if (totalSeat == 1) return 1.0
            if (memoi[totalSeat] != null) return memoi[totalSeat]!!
            memoi[totalSeat] = 1.0 / totalSeat * (1 .. totalSeat - 1).sumOf { i_th -> dp(i_th) }
            return memoi[totalSeat]!!
        }
        return dp(n)
    }
```
# Math Approach

         dp(n) = 1/n * [dp(1) + dp(2) + ... + dp(n - 2) + dp(n - 1)]
               =         ...                                 | |
               =         ...                                 \\/
               = 1/n * [dp(1) + dp(2) + ... + dp(n - 2) + 1/(n - 1) * [ dp(1) + dp(2) + ... + dp(n - 2) ]]
               = 1/n * [dp(1) + dp(2) + ... + dp(n - 2)] * ( 1/(n - 1) + 1)
               = 1/n * n/(n - 1) * [dp(1) + dp(2) + ... + dp(n - 2)]
               = 1/n * n/(n - 1) * ... * 3/2 * [dp(1)]
               = 1/2

# Math Code
```
fun nthPersonGetsNthSeat(n: Int): Double {
    return if (n == 1) 1.0 else 0.5
}
```
# Math Complexity
- Time complexity: O(1)
- Space complexity: O(1)