# 👍Runtime 874 ms Beats 100.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4787500/](https://leetcode.com/problems/count-the-number-of-infection-sequences/solutions/4787500/)

---

# Code
```
object Solution {
    val MOD: Int = 1000000007
    
    def numberOfSequence(n: Int, sick: Array[Int]): Int = {
        val fac: Array[Long] = Array.fill(100001)(0)
        
        def myPow(x: Long, y: Int): Long = {
            var res: Long = 1
            var _y = y
            var _x = x % MOD
            while (_y > 0) {
                if (_y % 2 == 1) {
                    res = (res * _x) % MOD
                }
                _x = (_x * _x) % MOD
                _y /= 2
            }
            res
        }
        
        def myFac(n: Int): Long = {
            if (fac(n) > 0) {
                return fac(n)
            }
            var ans: Long = 1
            var i = n
            while (i >= 2) {
                if (fac(i) > 0) {
                    ans = (ans * fac(i)) % MOD
                    return ans
                }
                ans = (ans * i) % MOD
                i -= 1
            }
            fac(n) = ans
            ans
        }
        
        def invMod(x: Long): Long = {
            myPow(x, MOD - 2)
        }
        
        var ans: Long = 1
        val m: Int = sick.length
        
        if (sick(0) > 0) {
            ans = (ans * invMod(myFac(sick(0)))) % MOD
        }
        
        if (sick(m - 1) < n - 1) {
            ans = (ans * invMod(myFac(n - 1 - sick(m - 1)))) % MOD
        }
        
        var sum: Int = n - m
        ans = (ans * myFac(sum)) % MOD
        
        var i: Int = 1
        while (i < m) {
            val curr: Int = sick(i) - sick(i - 1) - 1
            if (curr > 0) {
                ans = (ans * myPow(2, curr - 1)) % MOD
                ans = (ans * invMod(myFac(curr))) % MOD
            }
            i += 1
        }   
        ans.toInt
    }
}
```