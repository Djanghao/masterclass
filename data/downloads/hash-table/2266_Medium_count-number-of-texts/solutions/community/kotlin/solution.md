# Tribonacci and Tetranacci precomputed numbers solution

**Author:** rokanor
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/2018122/](https://leetcode.com/problems/count-number-of-texts/solutions/2018122/)

---

We can break down our full array into sub-arrays of repeating numbers.
We will find the answer for every one of those sub-arrays and then multiply them.

Handling a subarray, we have two possibilties:
* numbers with 3 possible letter combinations (1,2,3,4,5,6,8) 
* numbers with 4 possible letter combinations (7, 9)

In the first case one digit can participate in an encoding with 3 possible lengths (1,2,3)
In the second case one digit can participate in an encoding with 4 possible lengths (1,2,3,4)
therefore the recursive relationships are:

first: f[n] = f[n-1] + f[n-2] + f[n-3]
and
second: f[n] = f[n-1] + f[n-2] + f[n-3] + f[n-4]

You can calculate using your fingers and furrowing your eyebrows the base cases for these sequences. 
We can precompute them.

```
class Solution {
    val INF = 1000000007
    val MM = 100001
    val dp3 = LongArray(MM)
    val dp4 = LongArray(MM)
    fun countTexts(s: String): Int {
        //tribonacci
        dp3[1] = 1
        dp3[2] = 2
        dp3[3] = 4
        for (i in 4 until MM) dp3[i] = (dp3[i-1] + dp3[i-2] + dp3[i-3]) % INF
        //tetranacci
        dp4[1] = 1
        dp4[2] = 2
        dp4[3] = 4
        dp4[4] = 8
        for (i in 5 until MM) dp4[i] = (dp4[i-1] + dp4[i-2] + dp4[i-3] + dp4[i-4]) % INF
        var count = 1L        
        var i = 0
        val n = s.length
        while (i < n) {
            var len = 1
            while (i + 1 < n && s[i+1] == s[i]) {
                i++
                len++
            }
            if (s[i] == '7' || s[i] == '9') count *= dp4[len]
            else count *= dp3[len]      
            count %= INF
            i++
        }
        return count.toInt()
    }
}
```