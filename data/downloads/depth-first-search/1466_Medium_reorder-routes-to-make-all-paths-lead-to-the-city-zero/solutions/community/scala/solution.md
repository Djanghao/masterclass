# Functional dfs solution

**Author:** jazzdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/6089532/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/6089532/)

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
  def minReorder(n: Int, connections: Array[Array[Int]]): Int = {
    val edgeMap = connections
      .flatMap(road => Seq((road.head -> road.last, true), (road.last -> road.head, false)))
      .groupBy { case ((start, _), _) => start }
      .view.mapValues(_.map { case ((_, city), origDirection) => (city, origDirection) })

    def dfs(visited: Set[Int], city: Int, reorderCount: Int): (Set[Int], Int) =
      edgeMap(city).foldLeft((visited + city, reorderCount)) {
        case ((visit, reorder), (newCity, direction)) =>
          if visited.contains(newCity) then (visit, reorder) else
            dfs(visit, newCity, reorder + (if direction then 1 else 0))
      }

    dfs(visited = Set.empty, city = 0, reorderCount = 0)._2
  }
}
```