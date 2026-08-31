# Kotlin trie solution with aggregated sum in each node

**Author:** dragonpw2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/4734533/](https://leetcode.com/problems/map-sum-pairs/solutions/4734533/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Each node has a `sum` property, which is the sum of all childrens including itself.

whenever a node is inserted or updated, the `sum` values in all the parent node will be updated.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Insert: O(length of key)
Sum: O(length of key)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(number of nodes)

# Code
```
class Node() {
   var sum = 0
   var value = 0
   var parent: Node? = null
   val children = Array<Node?>(26){null}
}



class MapSum() {

    val root = Node()

    fun insert(key: String, `val`: Int) {
        var currentNode : Node? = root
        for (i in key) {
            if (currentNode!!.children[i-'a'] == null) {
              currentNode.children[i-'a'] = Node() 
                currentNode.children[i-'a']!!.parent = currentNode
            }
            currentNode = currentNode.children[i-'a'] 
        }
        val diff = `val` - currentNode!!.value
        currentNode.value = `val`
        while (currentNode != null) {
            currentNode.sum += diff
            currentNode = currentNode.parent
        }
    }

    fun sum(prefix: String): Int {
        var current: Node? = root
       for (i in prefix) {
           if (current!!.children[i-'a'] == null) {
               return 0
           }
           current = current.children[i-'a'] 
       }
       return current!!.sum
    }

}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = MapSum()
 * obj.insert(key,`val`)
 * var param_2 = obj.sum(prefix)
 */
```