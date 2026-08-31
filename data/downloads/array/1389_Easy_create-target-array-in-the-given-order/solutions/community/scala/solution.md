# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/4310676/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/4310676/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def createTargetArray(nums: Array[Int], index: Array[Int]): Array[Int] = {
      nums
        .zip(index)
        .foldLeft(Array.empty[Int]){(acc, pair) => acc.take(pair._2) ++ Array(pair._1) ++ acc.drop(pair._2)}
    }
}
```