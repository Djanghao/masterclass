# scala, again easy solution, 100%

**Author:** egssor
**Votes:** 1
**Link:** [https://leetcode.com/problems/defuse-the-bomb/solutions/6059997/](https://leetcode.com/problems/defuse-the-bomb/solutions/6059997/)

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
```scala []
object Solution {
    def decrypt(code: Array[Int], k: Int): Array[Int] = {
        val n = code.length
        if (k == 0) return Array.fill(n)(0)
        
        Array.tabulate(n) { i =>
            if (k > 0) {
                (1 to k).map(j => code((i + j) % n)).sum
            } else {
                (k until 0).map(j => code((i + j + n) % n)).sum
            }
        }
    }
}
```