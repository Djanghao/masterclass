# 💥Simple TreeSet implementation that beats 99%💥

**Author:** aleksin_rzn
**Votes:** 3
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/4147240/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/4147240/)

---

# Intuition
We need a tree structure

# Approach
Use TreeSet, for startWith() we need to check string with method String.startWith() too.

# Complexity
- Time complexity:
99%

- Space complexity:
92%

# Code
```
class Trie() {

        private val treeSet = TreeSet<String>()

        fun insert(word: String) {
            treeSet.add(word)
        }

        fun search(word: String): Boolean {
            return treeSet.ceiling(word) == word
        }

        fun startsWith(prefix: String): Boolean {
            return treeSet.ceiling(prefix)?.startsWith(prefix) ?: false
        }

    }

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```