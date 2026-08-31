# Kotlin beats 95%  O(n) DFS

**Author:** shubhammaheshwariy
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5630688/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5630688/)

---

# Intuition
Simple dfs to count number of nodes
a leaf is a good node
# Approach
simple dfs to count number of nodes , check if leaf becuase leaf is good node
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
```
class Solution {
    fun countGoodNodes(edges: Array<IntArray>): Int {
        var count = 0

        val adjMap = Array(edges.size + 1,{
            _->ArrayList<Int>()
        })

        edges.forEach{
            adjMap[it[0]].add(it[1])
            adjMap[it[1]].add(it[0])
        }


        fun dfs(node:Int,parent:Int):Int{
            val edges = adjMap[node]!!
            //leafe node
            if(edges.size == 1 && parent == edges[0]){
                count++
                return 1
            }

            var sizeSet = HashSet<Int>()
            var totalNodes = 0
            edges.forEach{
                if(it != parent){
                    val nodeSize = dfs(it,node)
                    totalNodes += nodeSize
                    sizeSet.add(nodeSize)
                }
            }
            if(sizeSet.size <= 1){
                count++
            }

            return totalNodes + 1
        }

        dfs(0,-1)
        return count
    }
}
```