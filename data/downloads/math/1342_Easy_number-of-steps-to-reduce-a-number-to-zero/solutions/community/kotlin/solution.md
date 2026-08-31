# Kotlin FP Style

**Author:** myeongin
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/523512/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/523512/)

---

```
class Solution {
    fun numberOfSteps (num: Int): Int {
        return solve(num)
    }
    
    tailrec fun solve(num: Int, count: Int = 0): Int = when(num) {
        0 -> count
        else -> if(num%2 == 0){
            solve(num/2, count + 1)
        } else {
            solve(num-1, count + 1)
        }
    }
}
```