# Simplest possible solution? Essentially 1 simple line (dfs)

**Author:** jazzdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/6079262/](https://leetcode.com/problems/keys-and-rooms/solutions/6079262/)

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
  def canVisitAllRooms(rooms: List[List[Int]]): Boolean = {
    def dfs(visited: Set[Int] = Set.empty, room: Int = 0): Set[Int] =
      if visited.contains(room) then visited
      else rooms(room).foldLeft(visited + room)(dfs)

    dfs().size == rooms.size
  }
}
```