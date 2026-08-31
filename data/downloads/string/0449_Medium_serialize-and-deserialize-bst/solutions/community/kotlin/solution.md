# Kotlin, PreOrder for Serialize and Recursive BST to add

**Author:** glukharev
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/3663593/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/3663593/)

---


# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */

class Codec() {
	// Encodes a tree to a single string.
    fun serialize(root: TreeNode?): String {
        val result = mutableListOf<Int>()
        // create a list of nodes in pre oreder (root-left-right)
        preOrder(root, result)
        // list to string with ',' as separator
        return result.joinToString(",")
    }

    // Decodes your encoded data to tree.
    fun deserialize(data: String): TreeNode? {
        var head : TreeNode? = null
        val n = data.split(",")
        // add each node one-by-one
        n.forEach{ i ->
            if(!i.isEmpty()){
                val node = TreeNode(i.toInt())
                if(head == null) {
                    // if we don't have a head
                    head = node
                } else {
                    // add node
                    addNode(head, node)
                }
            }
        }

        return head
    }

    private fun preOrder(node: TreeNode?, list : MutableList<Int>)  {
        if(node == null) {
            return
        }
        list.add(node.`val`)
        preOrder(node?.left, list)
        preOrder(node?.right, list)
    }

    private fun addNode(root: TreeNode?, node : TreeNode) {
        if(root == null) {
            // we reached the end
            return
        }

        // BST - if it is less than the root node goes to left, otherwise to the right
        if(node.`val` < root.`val`) {
            // go left
            if(root.left == null) {
                // if there is no left node, it means that we can add here
                root.left = node
            } else {
                // let's find the right place in left sub-tree
                addNode(root.left, node)
            }
        } else {
            // go right
            if(root.right == null) {
                root.right = node
            } else {
                addNode(root.right, node)
            }
        }
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * val ser = Codec()
 * val deser = Codec()
 * val tree: String = ser.serialize(root)
 * val ans = deser.deserialize(tree)
 * return ans
 */
```