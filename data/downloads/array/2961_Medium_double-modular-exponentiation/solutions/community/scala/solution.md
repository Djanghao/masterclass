# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-modular-exponentiation/solutions/4414454/](https://leetcode.com/problems/double-modular-exponentiation/solutions/4414454/)

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
    def getGoodIndices(variables: Array[Array[Int]], target: Int): List[Int] = {
        variables.zipWithIndex.filter(n => (BigInt(n._1(0)).pow(n._1(1)) % 10).pow(n._1(2)) % n._1(3) == target).map(_._2).toList

    }
}
```