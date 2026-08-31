# Kotlin simple solution

**Author:** alexp0111
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/3663110/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/3663110/)

---

# Approach
If sequence is consecutive -> we can show it like:
2: n+(n+1) = 2n+1
3: (n-1)+n+(n+1) = 3n
4: (n-1)+n+(n+1)+(n+2) = 4n+2
5: (n-2)+(n-1)+n+(n+1)+(n+2) = 5n
6: (n-2)+(n-1)+n+(n+1)+(n+2)+(n+3) = 6n+3
.
.
.

The only restrictions we have is n\u2208N, so we exclude sequences like:
(-1 0 1 2 3 4) = 9, and that after (((1+i)*i)/2) > n) search is useless cause if sum(1+2+3+...+i1) > n, then it is impossible to find consecutive sequence with bigger lengh.

P.S. This code might be not very clean, but, i think, it is pretty simple to understand.


# Complexity
- Time complexity: **O(n)**

- Space complexity: **O(1)**

# Code
```
import kotlin.math.ceil

class Solution {
    fun consecutiveNumbersSum(n: Int): Int {
        var c = 1
        for (i in 2..n) {
            
            if ((((1+i)*i)/2) > n) break
    
            var curN = n
            if (i % 2 == 0) {
                curN -= (i / 2)
            }
    
            if (curN % i == 0) {
                curN /= i
                if (curN - (ceil(i.toDouble() / 2) - 1) > 0) c++
            }
        }
        return c
    }
}
```