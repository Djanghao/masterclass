# Kotlin | Dp solves the problem

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5441668/](https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5441668/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If we know a sequence of numbers with the length of the minimum of primeOne and primeTwo and the difference of 1, then it is possible to have any number after the sequence.

# Approach
<!-- Describe your approach to solving the problem. -->
Save all numbers in an array list. Add the primeOne and primeTwo to the arraylist while always using the smaller one. If it already exists skip and use the next one. In case the difference between them is 1 then count them together. The solution is the number which is one smaller than the start of the sequence of numbers with the difference of ones.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*m)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution {
    fun mostExpensiveItem(primeOne: Int, primeTwo: Int): Int {
        val dp:ArrayList<Int> = ArrayList()
        dp.add(0)

        var l:Int = 0
        var r:Int = 0
        var a:Int = 0

        var cnt:Int = 0
        var sol:Int = 0

        while(a < min(primeOne, primeTwo)){
            if(primeOne + dp[l] == dp[cnt]){
                l++

                continue
            }

            if(primeTwo + dp[r] == dp[cnt]){
                r++

                continue
            }

            if(primeOne + dp[l] < primeTwo + dp[r]){
                dp.add(primeOne + dp[l])
                l++
            }else{
                dp.add(primeTwo + dp[r])
                r++
            }

            cnt++

            if(dp[cnt] - dp[cnt-1] == 1)
                a++
            else{
                a = 0
                sol = dp[cnt] - 1
            }
        }

        return sol
    }
}
```