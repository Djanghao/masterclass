# best and easy solution to understand ,bignt to handle large number

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/5762580/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/5762580/)

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
    def addToArrayForm(num: Array[Int], k: Int): List[Int] = {
        println(BigInt(num.mkString("")))
        return (BigInt(num.mkString("")) +k).toString.toList.map(c => c -'0')
    }
}
```