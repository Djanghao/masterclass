# Easy Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/5085093/](https://leetcode.com/problems/count-largest-group/solutions/5085093/)

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
    def countLargestGroup(n: Int): Int = {
        (1 to n).groupBy(i=>i.toString.toList.map(_.toString.toInt).sum).values.groupBy(i=>i.length).maxBy(_._1)._2.size
    }
}
```