# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses-iii/solutions/4182141/](https://leetcode.com/problems/parallel-courses-iii/solutions/4182141/)

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
    import scala.collection.mutable.ListBuffer
    def minimumTime(n: Int, relations: Array[Array[Int]], time: Array[Int]): Int = {
      val graph = Array.fill(n)(List.empty[Int])
      relations.foreach(f=>graph(f(1)-1) = (f(0)-1) :: graph(f(1)-1))
      val memo = Array.fill(n)(0)
      (0 until n).foldLeft(0){(overallMinTime, i)=>math.max(overallMinTime, calculateTime(i, graph, time, memo))}
    }


    def calculateTime(course: Int, graph: Array[List[Int]], time: Array[Int], memo: Array[Int]): Int =
      if (memo(course) != 0) memo(course)
      else {
        memo(course) = graph(course).foldLeft(0){(maxTime, prereq)=>math.max(maxTime, calculateTime(prereq, graph, time, memo))} + time(course)
        memo(course)
      }
}
```