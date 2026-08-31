# scala easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3517911/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3517911/)

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
object Solution {
    def minIncrements(n: Int, cost: Array[Int]): Int = 
        (n / 2 - 1 to 0 by -1).foldLeft(0)((acc, i) =>{
            val l = i * 2 + 1
            var r = i * 2 + 2
            cost(i) += cost(l) max cost(r)
            acc + Math.abs(cost(l) - cost(r))
        })
}
```