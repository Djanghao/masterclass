# Kotlin Lovers | BFS - DFS Solution

**Author:** treat
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/4572496/](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/4572496/)

---

# Intuition

First read about bipartite. 
Second understand why BFS will be needed to get the max depth from a given node and and not dfs
Then use bfs / dfs to find all the nodes in a single component. Create a list of list of all such components. 


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

    fun dfs(i: Int, aList: Array<MutableList<Int>>, visited: IntArray): List<Int>{
        visited[i] = 1
        val op = mutableListOf<Int>(i)
        for(a in aList[i]){
            if(visited[a] == -1){
                op.addAll(dfs(a, aList, visited))
            }
        }
        return op.toList()
    }

    fun magnificentSets(n: Int, edges: Array<IntArray>): Int {

        // Lets create the adjacency list
        val aList = Array(n){mutableListOf<Int>()}
        for(e in edges){
            aList[e[0]-1].add(e[1]-1)
            aList[e[1]-1].add(e[0]-1)
        }

        // Lets find all the connected components
        val visited = IntArray(n){-1}
        val components = mutableListOf<List<Int>>()
        for(i in 0..n-1){
            if(visited[i] == -1){
                components.add(dfs(i, aList, visited))
            }
        }

        // Calculate the max for each component
        var finalResult = IntArray(components.size){0}
        for(i in 0..components.lastIndex){
            for(j in components[i]){
                val group = IntArray(n){-1}
                var result = bfs(aList, j, group)
                if(result == -1) return -1
                finalResult[i] = max(finalResult[i], result)
            }
        }
        return finalResult.sum()
    }
    fun bfs(aList: Array<MutableList<Int>>, i: Int, group: IntArray): Int{
        val queue = LinkedList<Int>()
        queue.offer(i)
        group[i] = 1
        var max = 1
        while(queue.isNotEmpty()){
            val node = queue.poll()
            for(a in aList[node]){
                if(group[a] == -1){
                    group[a] = group[node] + 1
                    max = max(max, group[a])
                    queue.offer(a)
                }else{
                    if(Math.abs(group[a] - group[node]) != 1){
                        return -1
                    }
                }
            }
        }
        return max
    }
}
```