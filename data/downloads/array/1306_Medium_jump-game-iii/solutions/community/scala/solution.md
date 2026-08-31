# Simple BFS Scala approach with memoization (beats 100%). No extra-memory

**Author:** angrypacman
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/5982569/](https://leetcode.com/problems/jump-game-iii/solutions/5982569/)

---

# Code
```scala []
object Solution {
    def canReach(arr: Array[Int], start: Int): Boolean = {
        if start < 0 || start >= arr.length || arr(start) < 0 then false
        else {
            if arr(start) == 0 then true
            else
                val value = arr(start)
                arr(start) = -1
                canReach(arr, start - value) || canReach(arr, start + value)
        }
    }
}
```