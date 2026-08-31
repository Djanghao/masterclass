# Kotlin DFS solution

**Author:** lararicardo386
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/3920701/](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/3920701/)

---


# Code
```
/**
 * Definition for a Node.
 * class Node(var `val`: Int) {
 *     var children: List<Node?> = listOf()
 * }
 */

class Codec {
    // Encodes a tree to a single string.
    fun serialize(root: Node?): String {
        if(root == null) return ""
        //"1;4 2;0"
        var ans = "${root.`val`};${root.children.size} "
        root.children.forEach{
            ans += serialize(it)
        }
        return ans
    }
    
    // Decodes your encoded data to tree.
    fun deserialize(data: String): Node? {
        val str = data.trim()
        if(str == "") return null
        
        val nodes = str.split(" ")
        var i = 0
        fun deserializeImpl():Node{
            val nodeStr = nodes[i].split(";")
            val value = nodeStr[0].toInt()
            val children = nodeStr[1].toInt()
            var list = mutableListOf<Node>()
            for(j in 0 until children){
                i++
                list.add(deserializeImpl())
            }
            
            return Node(value).also{it.children = list}
        }
        
        return deserializeImpl()
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * var obj = Codec()
 * var data = obj.serialize(root)
 * var ans = obj.deserialize(data)
 */
```