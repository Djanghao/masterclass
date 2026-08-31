# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3772075/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3772075/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * 2^m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n * 2^m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def smallestSufficientTeam(req_skills: Array[String], people: List[List[String]]): Array[Int] = {
      val mp = req_skills.zipWithIndex.toMap
      val cand = people.map(_.foldLeft(0){(acc, skill) => acc | (1 << mp(skill))})
      val cache = scala.collection.mutable.Map[(Int, Int), List[Int]]()

      def loop(i: Int, mask: Int): List[Int] =
        mask match {
          case 0 => List.empty
          case _ if i == people.length => List.fill(100)(0)
          case _ if (mask & cand(i)) == 0 => loop(i+1, mask)
          case _ if cache.contains((i, mask)) => cache((i, mask))
          case _ =>
            val result = List(loop(i+1, mask), i :: loop(i+1, mask & ~cand(i))).minBy(_.length)
            cache((i, mask)) = result
            result
        }

      loop(0, (1 << req_skills.length) - 1).toArray
    }
}
```