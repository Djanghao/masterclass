# Kotlin, 2 tries, 118 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/6024906/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/6024906/)

---

# Approach
Store each word in one trie and the reversed word in another trie. The last node of each word contains index of the first occuurrence of this word in the initial array, as well as the number of its occurrences so far.

# Complexity
- Time complexity:
$$O(n)$$, where $$n$$ is the total length of all words

- Space complexity:
$$O(n)$$, where $$n$$ is the total length of all words

# Code
```kotlin []
class Solution {
    fun countPrefixSuffixPairs(words: Array<String>): Long {
        val fwdRoot = Node()
        val backRoot = Node()

        var count = 0L
        for (i in words.indices) {
            val word = words[i]
            var fwd = fwdRoot
            var back = backRoot
            val n = word.length - 1
            for (j in 0..n) {
                fwd = fwd.nextNode(word[j] - 'a')
                back = back.nextNode(word[n - j] - 'a')
                if (fwd.index >= 0 && back.index == fwd.index) count += fwd.count
            }
            if (fwd.index == -1) {
                fwd.index = i
                back.index = i
            }
            fwd.count++
        }

        return count
    }
}

class Node {
    val next = arrayOfNulls<Node>(26)
    var index = -1
    var count = 0

    fun nextNode(charIndex: Int): Node {
        var node = next[charIndex]
        if (node == null) {
            node = Node()
            next[charIndex] = node
        }
        return node
    }
}
```