# Kotlin, Iterator(100%) + Two Pointers(100%) + Binary Search(50%)

**Author:** firemaples
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/3364136/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/3364136/)

---

# Iterator solution

## Intuition
Populate array items to compare:
1. If `word1` equals `word2` then find the min distance between found items
2. Otherwise, calculate the distance of the position of the last visited `word1` and the last visited `word2`

## Approach
Iterator

## Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

## Code
```
class Solution {
    fun shortestWordDistance(wordsDict: Array<String>, word1: String, word2: String): Int {
        var result = Int.MAX_VALUE
        if (word1 == word2) {
            var last = -1
            for (i in 0 until wordsDict.size) {
                if (wordsDict[i] != word1)
                    continue
                if (last != -1) {
                    result = Math.min(result, i - last)
                }
                last = i
            }
        } else {
            var pos1 = -1
            var pos2 = -1
            for (i in 0 until wordsDict.size) {
                when(wordsDict[i]) {
                    word1 -> pos1 = i
                    word2 -> pos2 = i
                }
                if (pos1 != -1 && pos2 != -1) {
                    result = Math.min(result, Math.abs(pos1 - pos2))
                }
            }
        }

        return result
    }
}
```

---

# Two pointers solution

## Intuition
1. Find all positions of `word1` and `word2`
2. Use two pointers to find the distances between all positions

## Approach
Two Pointers

## Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

## Code
```
class Solution {
    fun shortestWordDistance(wordsDict: Array<String>, word1: String, word2: String): Int {
        val word1Pos = mutableListOf<Int>()
        val word2Pos = mutableListOf<Int>()
        for (i in 0 until wordsDict.size) {
            val word = wordsDict[i]
            if (word == word1) word1Pos.add(i)
            if (word == word2) word2Pos.add(i)
        }

        var result = Int.MAX_VALUE
        var pos1 = 0
        var pos2 = 0
        while (pos1 < word1Pos.size && pos2 < word2Pos.size) {
            if (word1Pos[pos1] != word2Pos[pos2]) {
                result = Math.min(result, Math.abs(word1Pos[pos1] - word2Pos[pos2]))
            }
            if (word1Pos[pos1] <= word2Pos[pos2]) {
                pos1++
            } else {
                pos2++
            }
        }

        return result
    }
}
```

---

# Binary Search solution

## Intuition
Populate array items to compare:
1. If `word1` equals `word2` then find the min distance between found items
2. Otherwise, find all the positions of `word1` and `word2`, use binary search to find the insertion position in word2's positions of `word1`, use the previous position and the next position to calculate the distances

## Approach
Iterator + Binary Search

## Complexity
- Time complexity:
$$O(n\\ log\\ n)$$

- Space complexity:
$$O(n)$$

## Code
```
class Solution {
    fun shortestWordDistance(wordsDict: Array<String>, word1: String, word2: String): Int {
        var result = Int.MAX_VALUE
        if (word1 == word2) {
            var last = -1
            for (i in 0 until wordsDict.size) {
                if (wordsDict[i] != word1)
                    continue
                if (last != -1) {
                    result = Math.min(result, i - last)
                }
                last = i
            }
        } else {
            val word1Pos = mutableListOf<Int>()
            val word2Pos = mutableListOf<Int>()
            for (i in 0 until wordsDict.size) {
                val word = wordsDict[i]
                if (word == word1) word1Pos.add(i)
                if (word == word2) word2Pos.add(i)
            }
            for (cur in word1Pos) {
                val pos = -word2Pos.binarySearch(cur) - 1
                when (pos) {
                    0 -> 
                        result = Math.min(result, word2Pos[pos] - cur)
                    word2Pos.size -> 
                        result = Math.min(result, cur - word2Pos[pos - 1])
                    else -> {
                        result = Math.min(result, word2Pos[pos] - cur)
                        result = Math.min(result, cur - word2Pos[pos - 1])
                    }
                }
            }
        }

        return result
    }
}
```