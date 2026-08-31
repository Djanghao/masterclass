# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/4771489/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/4771489/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def canReorderDoubled(arr: Array[Int]): Boolean = {
      val count = scala.collection.mutable.HashMap.from(arr.groupBy(identity).view.mapValues(_.length))
      for (num <- count.keys.toList.sorted(Ordering.by(math.abs))) 
        while (count(num) > 0 && count.getOrElseUpdate(2 * num, 0) > 0) {
          count(num) -= 1
          count(2 * num) -= 1
        }
      count.values.forall(_ == 0)
    }
}
```