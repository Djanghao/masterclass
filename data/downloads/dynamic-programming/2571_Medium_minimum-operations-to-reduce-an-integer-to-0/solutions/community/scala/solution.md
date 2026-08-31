# scala soluton

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3283491/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3283491/)

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
    def minOperations(n: Int): Int =
        (0 to 32).foldLeft(n, 0)((acc, i) =>{
            if((acc._1 & 3) == 3) (acc._1 + 1, acc._2 + 1)
            else (acc._1 >> 1, acc._2 + (acc._1 & 1))
        })._2
}
```