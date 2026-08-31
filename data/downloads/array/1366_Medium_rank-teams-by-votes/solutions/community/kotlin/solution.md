# Simple, intuitive and efficient solution in Kotlin

**Author:** RPAzevedo
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/5969335/](https://leetcode.com/problems/rank-teams-by-votes/solutions/5969335/)

---

# Intuition
This is ultimately a sorting problem.

# Approach
The first step is to represent the votes in a data structure that can efficiently support the sorting criteria. In our case, it means getting the count of votes a team had in a specific position in constant time.

Afterwards, we just need to sort the data applying the criteria in the problem description.

# Complexity
We have two main operations: (1) data preparation, where count and collect the votes for each team in each position and (2) sorting, where we sort the votes for each team.

The time complexity for the data preparation is O(n), where n is the number of votes for each team - essentially the total number of chars in the votes input.

The time complexity for the sorting is O(n log n), where n is the number of teams.

The space complexity is dominated by our data structure,
which is O(n2), where n is the number of teams.

# Code
```kotlin []
typealias Team = Char

class Solution {
    fun rankTeams(votes: Array<String>): String {
        val teams: Set<Team> = votes[0].toSet()
        val positions = teams.size
        var counts = Array(positions) { mutableMapOf<Team,Int>() }

        val comparator = fun(a: Team, b: Team): Int {
            (0..<positions).forEach { p ->
                val va = counts[p][a] ?: 0
                val vb = counts[p][b] ?: 0
                if (va != vb) return vb - va
            }
            return a - b
        }

        votes.forEach { vote ->
            (0..<positions).forEach { position ->
                val team = vote[position]
                val count = counts[position][team] ?: 0
                counts[position][team] = count + 1
            }
        }

        return teams.sortedWith(comparator).joinToString("")
    }

}
```
