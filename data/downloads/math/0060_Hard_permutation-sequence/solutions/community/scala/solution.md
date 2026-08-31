# easy scala solution

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/5941614/](https://leetcode.com/problems/permutation-sequence/solutions/5941614/)

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
    def getPermutation(n: Int, k: Int): String = {
        var xx=(1 to n ).toArray.permutations.toArray
       
        
        return xx(k-1).mkString("")
    }
}
```