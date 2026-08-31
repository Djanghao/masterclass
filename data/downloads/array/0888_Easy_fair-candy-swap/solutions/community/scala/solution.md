# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/3604029/](https://leetcode.com/problems/fair-candy-swap/solutions/3604029/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def fairCandySwap(aliceSizes: Array[Int], bobSizes: Array[Int]): Array[Int] = {
      val diff = (bobSizes.sum - aliceSizes.sum) / 2
      val bobSet = bobSizes.toSet
      aliceSizes.find(a => bobSet.contains(a + diff)).map(m=> Array(m, m + diff)).getOrElse(Array.empty)
    }
}
```