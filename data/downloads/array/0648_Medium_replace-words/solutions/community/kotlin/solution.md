# Kotlin Lovers | Trie

**Author:** treat
**Votes:** 2
**Link:** [https://leetcode.com/problems/replace-words/solutions/4605399/](https://leetcode.com/problems/replace-words/solutions/4605399/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun replaceWords(dictionary: List<String>, sentence: String): String {
        val trie = Trie()
        for( d in dictionary){
            trie.add(d)
        }
        val list = sentence.split(" ").toMutableList()
        for(i in 0..list.lastIndex){
            list[i] = trie.find(list[i]) ?: list[i]
        }
        return list.joinToString(" ")
    }
}

class Trie(){
    private val head: Node = Node()

    fun add(str: String, i: Int = 0, node: Node= head){
        if(i == str.length){
            node.isEnd = true
            return
        }
        if(node.isEnd) return
        if(node.nodes[str[i] - 'a'] == null){
            node.nodes[str[i] - 'a'] = Node()
        }
        add(str, i+1, node.nodes[str[i] - 'a']!!)
    }
    fun find(str: String, i: Int = 0, node: Node = head): String?{
        if(node.isEnd){
            return ""
        }
        if(i == str.length) return null
        if(node.nodes[str[i] - 'a'] != null){
            val result = find(str, i+1, node.nodes[str[i] - 'a']!!)
            return if(result == null) null else str[i] + result!!
        }
        return null
    }
}

class Node(){
    val nodes: Array<Node?> = Array(26){null}
    var isEnd = false
}
```