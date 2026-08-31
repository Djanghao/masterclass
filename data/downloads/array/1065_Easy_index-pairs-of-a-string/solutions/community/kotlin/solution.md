# Kotlin Trie solution

**Author:** jasonechiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/3473832/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/3473832/)

---


# Complexity
`n`: text length
`m`: words size
`a`: average length of strings in words
- Time complexity:$$O((n + m) * a)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Generate Trie took $$O(m * a)$$
Iterate text took $$O(n * a)$$

- Space complexity: $$O(m * a)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun indexPairs(text: String, words: Array<String>): Array<IntArray> {
        val root = Trie(mutableMapOf(), null)

        for (word in words) {
            var cur = root
            for (ch in word) {
                cur = cur.children.getOrPut(ch) {
                    Trie(mutableMapOf(), null)
                }
            }
            cur.word = word
        }

        val ans = mutableListOf<IntArray>()
        for (index in text.indices) {
            var cur: Trie? = root
            var i = 0
            while (cur != null && index + i < text.length) {
                cur = cur.children[text[index + i]]
                if (cur?.word != null) {
                    ans.add(intArrayOf(index, index + i))
                }
                i++
            }
        }
        return ans.sortedWith(compareBy(
            { it[0] },
            { it[1] }
        )).toTypedArray()

    }
}

data class Trie(val children: MutableMap<Char, Trie>, var word: String?)

```