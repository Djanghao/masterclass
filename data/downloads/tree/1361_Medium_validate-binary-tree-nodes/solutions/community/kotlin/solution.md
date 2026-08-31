# Kotlin, simple solution based on tree's basic concepts

**Author:** artdfel
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-binary-tree-nodes/solutions/2631962/](https://leetcode.com/problems/validate-binary-tree-nodes/solutions/2631962/)

---

This is a simple solution using traversing through the tree for three times. Surprisingly, it make 100%/100% on submission, so I would like to share it here.
On the first run, we count total amount of parents for each node. 
On second, we make sure that there is no "cycles" in our tree and no nodes with two parents (case from examples). In general, this step relies on a definition of a tree as (oriented graph where all nodes has exactly one edge coming, except the root one, having no incoming edges at all)
On the third run, we traverse the tree from its root and check that total amount of edges is equal `n-1`, meaning all non-root  (there are `n-1` of them) nodes are reachable. It will return `false` , for example, when we have a valid tree and a cyclic graph with no interconnections.  
```
class Solution {
    fun validateBinaryTreeNodes(n: Int, leftChild: IntArray, rightChild: IntArray): Boolean {
        val parents = IntArray(n)
        for (i in 0 until n) { // Cycle counting each node's parents
            if (leftChild[i] != -1) parents[leftChild[i]]++
            if (rightChild[i] != -1) parents[rightChild[i]]++
        }
        var roots = 0
        var rootNode = -1
        for (i in 0 until n) { // Cycle checking each node has valid amount of parents
            if (parents[i] == 0) {
                roots++
                rootNode = i
            }
            if (parents[i] > 1) return false // some node has two parents
        }
        if (roots != 1) return false
        fun traverse(node: Int): Int { // Simple graph traversing, counting edges we traveled through
            return (if (leftChild[node] != -1) traverse(leftChild[node])+1  else 0) +
            (if (rightChild[node] != -1) traverse(rightChild[node])+1 else 0)
        }
        if (traverse(rootNode) != n-1) return false
        return true
    }
}
```