# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3386715/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3386715/)

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
    def maximumProduct(nums: Array[Int]): Int = {
        val sortedNums = nums.sorted
        math.max((sortedNums.take(2) :+ sortedNums.last).product, sortedNums.takeRight(3).product)
    }
}
```