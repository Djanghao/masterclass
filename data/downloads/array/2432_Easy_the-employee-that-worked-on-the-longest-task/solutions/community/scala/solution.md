# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/3166835/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/3166835/)

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
    def hardestWorker(n: Int, logs: Array[Array[Int]]): Int = 
        (((0 +: logs.map(_(1)).toList).sliding(2).map(n => n.last - n.head).toList zip logs.map(_(0))).maxBy(n => (n._1, -n._2)))._2


        
    
}
```