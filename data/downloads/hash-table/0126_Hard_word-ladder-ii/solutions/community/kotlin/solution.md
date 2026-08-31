# Kotlin solution using BFS adjacency graph and DFS backtracking

**Author:** krnets
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-ladder-ii/solutions/2422713/](https://leetcode.com/problems/word-ladder-ii/solutions/2422713/)

---

```kotlin
class Solution {
    private val result = mutableListOf(mutableListOf<String>())
    private val currentPath = mutableListOf<Int>()

    fun findLadders(beginWord: String, endWord: String, wordList: List<String>): List<List<String>> {
        var endIndex = -1
        var rootIndex = -1

        for (i in wordList.indices) {
            if (wordList[i] == beginWord) {
                rootIndex = i
            } else if (wordList[i] == endWord) {
                endIndex = i
                break
            }
        }

        if (endIndex == -1) return emptyList()

        val wordList = wordList.toMutableList()

        if (rootIndex == -1) {
            wordList.add(beginWord)
            rootIndex = wordList.lastIndex
        }

        val n = wordList.size
        val graph = MutableList(n + 1) { mutableListOf<Int>() }

        for (i in 0 until n) {
            for (j in i + 1 until n) {
                if (isAdjacent(wordList[i], wordList[j])) {
                    graph[i].add(j)
                    graph[j].add(i)
                }
            }
        }

        val shortestPaths = MutableList(n) { mutableListOf<Int>() }
        val steps = IntArray(n)
        val queue = LinkedList<Int>()
        queue.offer(rootIndex)
        var level = 0

        while (queue.isNotEmpty()) {
            repeat(queue.size) {
                val curr = queue.poll()

                for (adj in graph[curr]) {
                    if (steps[adj] == level + 1)
                        shortestPaths[adj].add(curr)
                    else if (steps[adj] <= 0) {
                        steps[adj] = level + 1
                        shortestPaths[adj].add(curr)
                        queue.offer(adj)
                    }
                }
            }
            level++
        }

        collectPaths(wordList, endIndex, rootIndex, endIndex, shortestPaths)

        return result.filterNot { it.isEmpty() }
    }

    private fun collectPaths(
        words: MutableList<String>,
        currentIndex: Int,
        stopAtRootIndex: Int,
        endIndex: Int,
        shortestPathIndices: MutableList<MutableList<Int>>
    ) {

        if (currentIndex == stopAtRootIndex) {
            val pathList = currentPath.indices.reversed().map { words[currentPath[it]] }.toMutableList()
            pathList.add(words[endIndex])
            result.add(pathList)

            return
        }

        for (j in shortestPathIndices[currentIndex].indices) {
            currentPath.add(shortestPathIndices[currentIndex][j])

            collectPaths(words, shortestPathIndices[currentIndex][j], stopAtRootIndex, endIndex, shortestPathIndices)

            currentPath.removeAt(currentPath.lastIndex)
        }
    }

    private fun isAdjacent(str: String, cmp: String): Boolean {
        var diffCount = 0

        for (i in str.indices)
            if (str[i] != cmp[i]) {
                diffCount++
                if (diffCount > 1) return false
            }
        
        return diffCount == 1
    }
}
```