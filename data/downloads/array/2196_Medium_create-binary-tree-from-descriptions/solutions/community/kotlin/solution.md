# Kotlin. Beats 100% (774 ms). HashMap + HashSet.

**Author:** mobdev778
**Votes:** 5
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479711/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479711/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    fun createBinaryTree(descriptions: Array<IntArray>): TreeNode {
        val nodeMap = HashMap<Int, TreeNode>()
        val children = HashSet<Int>()

        for ((parent, child, left) in descriptions) {
            val childNode = nodeMap.getOrPut(child) { TreeNode(child) }
            val parentNode = nodeMap.getOrPut(parent) { TreeNode(parent) }
            if (left == 1) {
                parentNode.left = childNode
            } else {
                parentNode.right = childNode
            }
            children.add(child)
        }

        return nodeMap.values.first { !children.contains(it.`val`) }
    }
}
```

# Approach

The approach is quite simple - we create a hash map that specifies an association between the node's Int value (node.value) and the node itself (TreeNode).

While iterating over the "descriptions" array elements, we simply use the hash map to determine whether the tree node has been encountered before and, if so, we use it to link parent and child elements together.

After iterating over the array, the problem of determining the root node that needs to be returned from the function remains.

For this, we can use an additional hash set "children".
It is easy to see that the root node will be the only node that is not included in this set.

We have two collections through which we can search for the root - the original "descriptions" array and the hash map "nodeMap". A hash map with nodes looks more attractive for searching - it is two times smaller and saves us from the operation of accessing an array element by index (descriptions[i][0]), so we use it -

```
return nodeMap.values.first { !children.contains(it.`val`) }
```

# Alternative approach

A few days later I came back to this problem. I still had doubts about the optimality of using a hash set to determine the root. And yes, the first solution was indeed non-optimal - we can use the XOR operation to calculate the root. 

First, we XOR all the elements that are in the tree. Then we do additional XOR for all the children. The repeated XOR operation will be performed on all elements except the root - this will be the desired element.

![image.png](./images/1.png)

```
class Solution {
    fun createBinaryTree(descriptions: Array<IntArray>): TreeNode {
        val nodeMap = HashMap<Int, TreeNode>()
        var xored = 0
        for ((parent, child, l) in descriptions) {
            val childNode = nodeMap.getOrPut(child) { xored = xored xor child; TreeNode(child) }
            val parentNode = nodeMap.getOrPut(parent) { xored = xored xor parent; TreeNode(parent) }
            if (l == 0) {
                parentNode.right = childNode
            } else {
                parentNode.left = childNode
            }
            xored = xored xor child
        }
        return nodeMap.values.first { it.`val` == xored }
    }
}
```

More optimized version:

```
class Solution {
    fun createBinaryTree(descriptions: Array<IntArray>): TreeNode {
        val nodeMap = HashMap<Int, TreeNode>()
        var xored = 0
        for ((parent, child, l) in descriptions) {
            val childNode = nodeMap.getOrPut(child) { xored = xored xor child; TreeNode(child) }
            val parentNode = nodeMap.getOrPut(parent) { xored = xored xor parent; TreeNode(parent) }
            if (l == 0) {
                parentNode.right = childNode
            } else {
                parentNode.left = childNode
            }
            xored = xored xor child
        }
        return nodeMap[xored]!!
    }
}
```