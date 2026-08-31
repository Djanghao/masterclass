# Kotlin: Detailed comments, beats 95%, BFS

**Author:** karum006
**Votes:** 2
**Link:** [https://leetcode.com/problems/word-ladder/solutions/3357763/](https://leetcode.com/problems/word-ladder/solutions/3357763/)

---

```
class Solution {
    // Approach: Perform BFS to find the shortest route between the begin and end words
    // in the graph. The graph is constructed using adjacency lists map. However the
    // map should be constructed with wildcard patterns as keys and the potential
    // words that match the wildcard as values (which would be neighbors).
    // T = O(n^2 * m), where m is the size of the word.
    fun ladderLength(beginWord: String, endWord: String, wordList: List<String>): Int {
        // If the endword isn't present then it can never be found
        if (endWord !in wordList) return 0

        val wGraph = mutableMapOf<String, MutableList<String>>()
        // Build a graph of wildcard patterns to word list. This would create
        // a list of values that would be adjacent for a given pattern
        for (word in wordList + beginWord) {
            for (i in word.indices) {
                val pattern = "${word.substring(0, i)}*${word.substring(i + 1)}"
                wGraph.getOrPut(pattern) { mutableListOf() }.add(word)
            }
        }

        var minDist = 1
        val queue = ArrayDeque<String>()
        val visited = mutableSetOf<String>()
        queue.add(beginWord)
        visited.add(beginWord)
        // Perform BFS to compute the shortest distance between the begin and end words
        while (queue.isNotEmpty()) {
            val size = queue.size
            repeat (size) {
                val popped = queue.removeFirst()
                // Check all the potential neighbors for each position of wildcard
                for (i in popped.indices) {
                    val pattern = "${popped.substring(0, i)}*${popped.substring(i + 1)}"
                    for (word in wGraph[pattern]!!) {
                        // Each node should be visited at most once
                        if (word == endWord) return minDist + 1
                        if (word !in visited) {
                            visited.add(word)
                            queue.add(word)
                        }
                    }
                }
            }
            // Increment the layer from root
            minDist++
        }

        return 0
    }

}
```