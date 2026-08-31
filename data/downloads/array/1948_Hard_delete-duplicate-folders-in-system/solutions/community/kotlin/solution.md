# Kotlin Lovers | Trie

**Author:** treat
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/4609678/](https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/4609678/)

---

# Intuition
Store All paths in a map. Check for repeats and mark as true. Then return the non repeat paths. 


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
    fun deleteDuplicateFolder(paths: List<List<String>>): List<List<String>> {
        val trie = Trie()
        for(p in paths){
            trie.add(p)
        }
        val map = mutableMapOf<String, Boolean>()
        trie.getSubStructure(map)
        return trie.getNonDuplicates(map)
    }
}


class Trie(){
    private val head = Node()
    fun add(list: List<String>,i: Int = 0, node: Node= head){
        if(i == list.size){
            return
        }
        if(node.map[list[i]] == null){
            node.map[list[i]] = Node()
        }
        add(list, i + 1, node.map[list[i]]!!)
    }

    fun getNonDuplicates(map: MutableMap<String, Boolean>, node: Node = head): List<List<String>>{
        val op = mutableListOf<List<String>>()
        for(k in node.map.keys){
            if(map[node.map[k]!!.sub] != null && map[node.map[k]!!.sub]!!){continue}
            op.add(listOf(k))
            val tempList = getNonDuplicates(map, node.map[k]!!)
            for(t in tempList){
                val te = mutableListOf<String>(k)
                te.addAll(t)
                op.add(te.toList())
            }
        }
        return op.toList()
    }

    fun getSubStructure(map: MutableMap<String, Boolean>, node: Node = head){
        val sb = StringBuilder()
        var space = ""
        for(k in node.map.keys){
            sb.append(space)
            space = " "
            getSubStructure(map, node.map[k]!!)
            sb.append(k)
            sb.append("(")
            sb.append(node.map[k]!!.sub)
            sb.append(")")
        }
        node.sub = sb.toString()
        if(node.sub == "") return 
        if(map[node.sub]== null){
            map[node.sub] = false
        }else {
            map[node.sub] = true
        }
        return
    }
}
class Node(){
    var sub = ""
    val map = TreeMap<String, Node>()
}
```