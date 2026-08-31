# Kotlin most optimal solution with explanation

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3551640/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3551640/)

---

# Approach
We loop `i` in `1` to `n`, check for each `i` if `i^2` (call it `x`) can sum up to target `i`. We check this statement by recursive calls, until we found basecase of where `x` equals remainder of target `target`, which by then we should have succesfully summed up to original target (`i`) with this last `x` in our recursive calls.

We also have to in our recursive calls continuosly check if we reached over target sum with `target < 0` or if we reached a x which it is impossible to sum up to target `x < target`

Time complexity is $O(n*log(n))$ and space complexity is $log(n)$, but we have to consider since $1 <= n^2 <= 10^6$ that gives us $max(log_{10}(n)) = log_{10}10^6 = 6$ so that means that we might even consider this as having a time complexity of $O(n)$ and space complexity of $O(1)$ (max $log(n)$ calls). I would love to hear your opinion on the time complexity.

# Code
```
class Solution {
    fun punishmentNumber(n: Int): Int {
        
        fun partition(x: Int, target: Int): Boolean {
            if (x == target)
                return true
            if (target < 0 || x < target )
                return false

            return partition(x / 10, target - (x % 10)) ||
                partition(x / 100, target - (x % 100)) ||
                partition(x / 1000, target - (x % 1000))
        }
        
        var res = 0
        for (i in 1..n) {
            val iSq = i * i
            if (partition(iSq, i))
                res += iSq
        }

        return res
    }
}
```