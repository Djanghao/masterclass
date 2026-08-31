# Idiomatic Kotlin Style | Clean O(n) Time & Space Complexity

**Author:** Pyder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4449403/](https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/solutions/4449403/)

---

# Approach
DFS with Optimized subtree nodes cost combination logic.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    
    /**
     * This will return an Immutable AdjacencyList representation of graph when called upon Edge List representation.
     * Time Complexity : O(Number of Edges) i.e O(N) in case of the graph is supposed to be a tree
     */
    fun Array<IntArray>.toGraph() : List<List<Int>> {
        val nodes = size+1
        val graph = List<MutableList<Int>>(nodes) { mutableListOf() }
        forEach {
            graph[it[0]].add(it[1])
            graph[it[1]].add(it[0])
        }
        return List<List<Int>>(nodes) { graph[it].toList() }
    }
    
    /**
     * Merges two List to a single one including the maximum 3 elements and the minimum 2 elements from the two lists
     * The algorithm used in the problem ensures that [a] and [b] will never exceede 3 in length.
     * 
     * Thus Time Complexity of this function will be O(1)
     */
    fun merge(a : List<Long> , b : List<Long>) : List<Long> {
        val totalElements = a.size + b.size
        return  (a+b)
                .toMutableList().apply { sortWith {a,b -> if(b < a) -1 else 1} }
                .withIndex()
                .filter{it.index < 3 || it.index == totalElements - 1 || it.index == totalElements - 2}
                .map{it.value}
                .toList()
    }
    
    /**
     * Finds maximum product that can be achieved by multiplying any three elements of List [l]
     * returns 0 in case the maximum product comes out to be negative
     * [maybeConvertToZero] makes the value passed to it 0 if the value is negative
     *
     * The algorithm ensures that [l] will have elements in the range (3..5)
     * Thus Time Complexity of this function will be O(1)
     */
    fun mxProduct(l : List<Long>, maybeConvertToZero : (Long) -> Long = {a -> if(a < 0.toLong()) 0.toLong() else a }): Long = 
        when(l.size) {
            3 -> maybeConvertToZero(l[0]*l[1]*l[2])
            4 -> maybeConvertToZero(maxOf(l[0]*l[1]*l[2], l[0]*l[2]*l[3]))
            5 -> maybeConvertToZero(maxOf(l[0]*l[1]*l[2], l[0]*l[3]*l[4]))
            else -> 0
        }
    
    /**
     * Depth-first search algorithm to calculate coin[i]
     *
     * All the operations made in each recursion call are O(1)
     * Thus Time Complexity will be : O(Nodes + Edges) i.e. O(N) in case of tree
     */
    fun dfs(currNode: Int,parent: Int, cost : IntArray, ansCoins : LongArray, subtreeSize : IntArray, tree : List<List<Int>>) : List<Long> {
        
        var currMaxMin: List<Long> = listOf(cost[currNode].toLong())
        
        for(child in tree[currNode]) {
            if(child != parent) {
                val maxMin = dfs(child,currNode,cost,ansCoins,subtreeSize,tree)
                currMaxMin = merge(maxMin,currMaxMin)
                subtreeSize[currNode]+=subtreeSize[child]
            }
        }
        
        ansCoins[currNode] = if(subtreeSize[currNode] < 3) 1.toLong() else mxProduct(currMaxMin)
        return currMaxMin
    }
    
    fun placedCoins(edges: Array<IntArray>, cost: IntArray): LongArray {
        val tree = edges.toGraph()
        val ans = LongArray(tree.size) {0}
        dfs(0,-1,cost,ans,IntArray(tree.size) {1},tree)
        return ans
    }
}
```