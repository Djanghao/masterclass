# Explained and commented Kotlin Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3107083/](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3107083/)

---

# Explanation
This code is a solution to a problem where given a tree with n nodes and each node having a price, the goal is to find the maximum sum of prices that can be obtained by selecting a path in the tree such that no two nodes on the path are siblings.

The code defines a class Solution with three methods: maxOutput, dfs, and dfs2.

The maxOutput method takes in three parameters: an integer n representing the number of nodes in the tree, a 2D array of edges representing the connections between the nodes, and an array of prices representing the price of each node. It initializes an adjacency list tree to store the connections between the nodes, and a subtree_sum array to store the maximum sum obtainable from the subtree rooted at a particular node. It then calls the dfs method to fill the subtree_sum array, and the dfs2 method to find the maximum sum obtainable from the tree.

The dfs method is a recursive method that takes in four parameters: an integer node representing the current node being considered, an integer parent representing the parent of the current node, the tree adjacency list, and the price array. It calculates the maximum sum obtainable from the subtrees of the current node's children and assigns this value to the subtree_sum array at the index of the current node.

The dfs2 method also takes in four parameters: an integer node representing the current node being considered, an integer parent representing the parent of the current node, the tree adjacency list, and the price array. It also takes in a parameter parent_contribution which represents the maximum sum that can be obtained by starting at the parent node and traversing the tree. The method calculates the maximum sum obtainable by starting at the current node and traversing the tree by considering the maximum sum obtainable from the current node's children and the parent_contribution. It also updates the global variable max_dif with the maximum sum obtainable from the tree.

# Code
```
class Solution {
    private lateinit var subtree_sum: LongArray //Stores -> If the tree was rooted at node 0 what is the maximum sum we can get from subtree of i
    private var max_dif = 0L
    fun maxOutput(n: Int, edges: Array<IntArray>, price: IntArray): Long {
        val tree = Array(n) { mutableListOf<Int>() }
        for (e in edges) {
            tree[e[0]].add(e[1])
            tree[e[1]].add(e[0])
        }
        subtree_sum = LongArray(n)
        dfs(0, -1, tree, price)  //Fills the subtree_sum array
        dfs2(0, -1, tree, price, 0)
        return max_dif
    }

    private fun dfs(node: Int, parent: Int, tree: Array<MutableList<Int>>, price: IntArray): Long {
        var m = 0L //We need the maximum contribution of children.
        for (child in tree[node]) {
            if (child == parent) continue
            m = Math.max(m, dfs(child, node, tree, price))
        }
        subtree_sum[node] = price[node] + m
        return subtree_sum[node]
    }
    private fun dfs2(node: Int, parent: Int, tree: Array<MutableList<Int>>, price: IntArray, parent_contribution: Long) {
        var c1 = -1
        var mc1 = 0L
        var mc2 = 0L  //2 maximum contribution of children
        for (child in tree[node]) {
            if (child == parent) continue
            if (subtree_sum[child] > mc1) {
                mc2 = mc1
                c1 = child
                mc1 = subtree_sum[child]
            } else if (subtree_sum[child] > mc2) {
                mc2 = subtree_sum[child]
            }
        }
        val path1 = mc1
        val path2 = parent_contribution
        max_dif = Math.max(max_dif, Math.max(path1, path2))
        for (child in tree[node]) {
            if (child == parent) continue
            /*
            How can a parent add a path to child?
            1. Take a path from a siblling of child     (we want the maximum siblling)
            2. Take a path from its parent
            Thus the contribution of current node to its child c is maximum(maximum siblling ,node's parent_contribution)
            */
            if (c1 == child) dfs2(child, node, tree, price, price[node] + Math.max(mc2, parent_contribution))
            else dfs2(child, node, tree, price, price[node] + Math.max(mc1, parent_contribution))
        }
    }
}

```