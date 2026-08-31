# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4362779/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4362779/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def canThreePartsEqualSum(arr: Array[Int]): Boolean = {
      val sum = arr.sum
      if (sum % 3 != 0) false
      else {
        val each = sum / 3
        arr.foldLeft((0, 0)) {
          case ((temp, found), num) =>
            val newTemp = temp + num
            if (newTemp == each) (0, found + 1)
            else (newTemp, found)
        }._2 >= 3
      }
    }
}
```