# 802. Find Eventual Safe States-kotlin

**Author:** RahulKumarAbhishek
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/5230657/](https://leetcode.com/problems/find-eventual-safe-states/solutions/5230657/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

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
    fun eventualSafeNodes(graph: Array<IntArray>): List<Int> {
        val adj = mutableListOf<MutableList<Int>>()
        val inDegree = IntArray(graph.size)
        val q : Queue<Int> = LinkedList()
        val ans = mutableListOf<Int>()
        for(i in 0..graph.size-1){
            adj.add(mutableListOf())
        }
        for(i in 0..graph.size-1){
            for(j in graph[i]){
                //reverse graph
                adj.get(j).add(i)
                inDegree[i]++
            }
        }
        for(i in 0..graph.size-1){
            if(inDegree[i]==0){
                q.add(i)
            }
        }
        while(!q.isEmpty()){
            val node = q.remove()
            ans.add(node)
            for(item in adj.get(node)){
                inDegree[item]--
                if(inDegree[item] == 0){
                    q.add(item)
                }
            }
        }
        Collections.sort(ans)

        return ans
    }
}
```