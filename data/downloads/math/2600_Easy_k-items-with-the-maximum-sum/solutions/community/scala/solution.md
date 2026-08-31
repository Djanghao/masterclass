# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4783541/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/4783541/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def kItemsWithMaximumSum(numOnes: Int, numZeros: Int, numNegOnes: Int, k: Int): Int = {
      if (k < numOnes + numZeros) math.min(k, numOnes) else 2 * numOnes - k + numZeros
    }
}
```