# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/3626516/](https://leetcode.com/problems/expression-add-operators/solutions/3626516/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(4^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def addOperators(num: String, target: Int): List[String] = {
      def backtrack(num: String, target: Int, pos: Int, eval: Long, mult: Long, path: String, res: List[String]): List[String] = {
        if (pos == num.length) {
          if (eval == target) path :: res
          else res
        } else {
          var ans = res
          var i = pos
          var curr = 0L
          while (i < num.length) {
            if (i != pos && num(pos) == '0') return ans
            curr = curr * 10 + (num(i) - '0')
            if (pos == 0) ans = backtrack(num, target, i + 1, curr, curr, "" + curr, ans)
            else {
              ans = backtrack(num, target, i + 1, eval + curr, curr, path + "+" + curr, ans)
              ans = backtrack(num, target, i + 1, eval - curr, -curr, path + "-" + curr, ans)
              ans = backtrack(num, target, i + 1, eval - mult + mult * curr, mult * curr, path + "*" + curr, ans)
            }
            i += 1
          }
          ans
        }
      }

      backtrack(num, target, 0, 0L, 0L, "", Nil)
    }
}
```