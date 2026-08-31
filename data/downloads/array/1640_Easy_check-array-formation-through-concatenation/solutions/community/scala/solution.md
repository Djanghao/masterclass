# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/3636933/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/3636933/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def canFormArray(arr: Array[Int], pieces: Array[Array[Int]]): Boolean = {
      val map = pieces.map(p => p(0) -> p).toMap
      var i = 0
      var flag = true
      while (i < arr.length && flag) 
        if (!map.contains(arr(i))) flag = false
        else map(arr(i)).foreach(num => if (num != arr(i)) flag = false else i += 1)
      flag
    }
}
```