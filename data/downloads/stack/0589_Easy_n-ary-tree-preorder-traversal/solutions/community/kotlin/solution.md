# Kotlin Short Recursive Solution || Commented

**Author:** Z3ROsum
**Votes:** 2
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2302270/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2302270/)

---

```
class Solution {
    val traversal = mutableListOf<Int>() // the list for the traversal
    
    fun preorder(root: Node?): List<Int> {
        traverse(root)
        return traversal // done
    }
    
    fun traverse(root: Node?) {
        if (root == null) return
		
        // add the current one
        traversal.add(root.`val`)
		
		// try for all of the children
        for (node in root.children) {
            traverse(node)
        }
    }
}
```