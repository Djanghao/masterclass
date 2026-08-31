# Kotlin solution

**Author:** robilexeme
**Votes:** 0
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/4062581/](https://leetcode.com/problems/factor-combinations/solutions/4062581/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun getFactors(m: Int): List<List<Int>> {
        var res = ArrayList<List<Int>>()
        var path = ArrayList<Int>()
        fun backtrack(start: Int, n: Int){
            if (n <= 1) {
                if (path.size > 1) {
                    res.add(path.toList())
                }
                return
            }
        
            for (i in start until n+1) {
                if (n % i == 0) {
                    path.add(i)
                    backtrack(i, n/i)
                    path.removeLast()
                }
            }
        }
        backtrack(2,m)
        return res
    }
}
```