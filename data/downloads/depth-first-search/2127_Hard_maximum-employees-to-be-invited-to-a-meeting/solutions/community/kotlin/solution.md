# The first Kotlin submission!

**Author:** Karim_Ibrahim
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/4377462/](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/4377462/)

---

# Intuition
This was painful.

# Code
```
class Solution {
    fun maximumInvitations(favorite: IntArray): Int {
        val maxCycle = maxCycle(favorite)
        val mutualsLength = mutualsLength(favorite)

        return maxOf(mutualsLength, maxCycle)
    }

    fun maxCycle(favorite: IntArray): Int {
        val visited = mutableMapOf<Int, Int>()
        var maxCycle = 0

        for(i in 0 until favorite.size) {
            if(i in visited) {
                continue
            }

            maxCycle = maxOf(maxCycle, cycleLength(i, 0, favorite, mutableMapOf(), visited))
        }

        return maxCycle
    }

    fun cycleLength(curr: Int, index: Int, favorite: IntArray, indices: MutableMap<Int, Int>, visited: MutableMap<Int, Int>): Int {
        if(curr in visited) {
            return visited[curr]!!
        }
        if(curr in indices) {
            return index - indices[curr]!!
        }

        indices[curr] = index
        visited[curr] = cycleLength(favorite[curr], index + 1, favorite, indices, visited)
        return visited[curr]!!
    }

    fun findMutuals(favorite: IntArray): List<IntArray> {
        val mutuals = mutableListOf<IntArray>()
        val mutualsSeen = mutableSetOf<Int>()

        for(i in 0 until favorite.size) {
            if(i in mutualsSeen) {
                continue
            }

            val a = i
            val b = favorite[i]
            if(a == favorite[b]) {
                mutuals += intArrayOf(a, b)
                mutualsSeen += b
            }
        }

        return mutuals
    }

    fun mutualsLength(favorite: IntArray): Int {
        val reverseFavorite = reverseFavorite(favorite)
        val mutuals = findMutuals(favorite)
        val visited = mutableMapOf<Int, Int>()
        var mutualsLength = 0

        mutuals.forEach {
            val a = it[0]
            val b = it[1]
            mutualsLength += 2
            mutualsLength += longestChain(a, b, reverseFavorite, visited)
            mutualsLength += longestChain(b, a, reverseFavorite, visited)
        }

        return mutualsLength
    }

    fun reverseFavorite(favorite: IntArray): Map<Int, List<Int>> {
        val reverseFavorite = mutableMapOf<Int, MutableList<Int>>()

        for(i in 0 until favorite.size) {
            val a = i
            val b = favorite[a]
            reverseFavorite.getOrPut(b) { mutableListOf() } += a
        }

        return reverseFavorite
    }

    fun longestChain(a: Int, b: Int, reverseFavorite: Map<Int, List<Int>>, visited: MutableMap<Int, Int>): Int {
        if(a in visited) {
            return visited[a]!!
        }

        var length = 0
        if(a in reverseFavorite) {
           val candidates = reverseFavorite[a]!!
           var maxLength = 0
           candidates.forEach { candidate -> 
                if(candidate != b) {
                    maxLength = maxOf(maxLength, 1 + longestChain(
                        candidate, b, reverseFavorite, visited))
                }
           }
           length = maxLength
        }

        visited[a] = length
        return length
    }
}
```