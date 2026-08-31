# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/3625140/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/3625140/)

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
    def reconstructQueue(people: Array[Array[Int]]): Array[Array[Int]] = {
      var res = List.empty[Array[Int]]
      for (p <- people.sortWith((a, b) => if (a(0) == b(0)) a(1) < b(1) else a(0) > b(0))) res = insert(res, p(1), p)
      res.toArray
    }

    def insert(queue: List[Array[Int]], idx: Int, p: Array[Int]): List[Array[Int]] = 
      if (idx == queue.length) queue :+ p
      else queue.take(idx) ++ List(p) ++ queue.drop(idx)
}
```