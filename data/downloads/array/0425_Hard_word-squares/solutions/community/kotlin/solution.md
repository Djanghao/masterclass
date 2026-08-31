# Kotlin, simple explanation, Beats 50% time, Beats 100 % space

**Author:** romiope
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-squares/solutions/4371482/](https://leetcode.com/problems/word-squares/solutions/4371482/)

---

# Intuition
The problem requires generating valid word squares from a given set of unique strings. A valid word square is defined as a sequence of strings where the kth row and column read the same string. To efficiently find these word squares, a trie is employed to store and retrieve potential words matching a given prefix.

# Approach
Trie Construction
Firstly, a trie is constructed from the input words. This trie facilitates efficient prefix matching and retrieval of potential words for a given prefix.

### Trie Traversal
A recursive function, possibleStrings, is defined to traverse the trie and retrieve all potential words that match a given prefix.

### Generating Word Squares
The main function, wordSquares, uses a backtracking approach to generate word squares. It iterates through the columns and rows of the word square, attempting to fill each position with a valid word.

For the first column, it iterates through all words and recursively explores possibilities. For subsequent columns, it uses the possibleStrings function to retrieve potential words based on the already filled prefix. It then checks if the new word fits the square and continues the exploration.

# Complexity
- Time complexity: **O(N\u22C5M^2)**
N is the number of words, and M is the length of each word.
Building the trie takes **O(N\u22C5M)** time.
Generating word squares involves backtracking, and the worst-case time complexity is: **O(N\u22C5M**2)**.
- Space complexity: **O(N\u22C5M)**
The trie structure requires additional space proportional to the input size.

# Code
```
class Solution {

    class Trie {
        var isWord = false
        val children = mutableMapOf<Char, Trie>()
    }

    val root = Trie()

    fun wordSquares(words: Array<String>): List<List<String>> {
        // build a trie
        for (word in words) {
            var node = root
            for (c in word) {
                node.children[c] = (node.children[c] ?: Trie()).apply { node = this }
            }
            node.isWord = true
        }

        // list all possible words from first few chars
        fun possibleStrings(str: List<Char>): List<String> {
            val res = mutableListOf<String>()

            var node: Trie? = root
            var p = 0
            while (node != null && p < str.size) {
                val c = str[p]
                node = node!!.children[c]
                p++
            }
            tailrec fun req(node: Trie?, acc: MutableList<Char> = mutableListOf()) {
                if (node == null) {
                    return
                }
                if (node.isWord) {
                    val sb = StringBuilder()
                    // str + acc
                    str.forEach(sb::append)
                    acc.forEach(sb::append)
                    res += sb.toString()
                    return
                }
                for ((c, t) in node.children ?: emptyMap()) {
                    acc += c
                    req(t, acc)
                    acc.removeAt(acc.size - 1)
                }
            }
            req(node)
            return res
        }

        val res = mutableListOf<List<String>>()

        // Backtracking function to generate word squares
        tailrec fun req(from: Int = 0,
                acc: MutableList<String> = mutableListOf(),
            ) {

            // if we got needed ammount of words
            // we found needed combination and can stop
            if (acc.size == words[0].length) {
                res += acc.toList()
                return
            }

            if (acc.isEmpty()) {
                // case when we just started
                // we too each word and try that
                for (w in words) {
                    acc += w
                    req(from + 1, acc)
                    acc.removeAt(acc.size - 1)
                }
            } else {
                
                val firstPart = acc.map { it[from] }

                // get list of words from trie by first letters
                // try to put new word and see if it is a good fit
                for (str in possibleStrings(firstPart)) {
                    acc += str
                    // validate if our vertical selected letters
                    // are same as horizontal so we have a square
                    if (acc[from].substring(0, firstPart.size) == firstPart.fold(StringBuilder()) { sb, b -> sb.append(b) }.toString()) {
                        req(from + 1, acc)
                    }
                    acc.removeAt(acc.size - 1)
                }
            }
        }

        req()
        return res
    }
}
```