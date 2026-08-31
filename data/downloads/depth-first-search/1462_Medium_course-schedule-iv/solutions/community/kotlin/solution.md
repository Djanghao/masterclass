# Kotlin O(N*E) Solution

**Author:** yadunath
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/5425988/](https://leetcode.com/problems/course-schedule-iv/solutions/5425988/)

---

# Intuition

# Approach
Topological Sort
DFS 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun checkIfPrerequisite(numCourses: Int, prerequisites: Array<IntArray>, queries: Array<IntArray>): List<Boolean> {
        var result = mutableListOf<Boolean>()
        var adjList = Array(numCourses){mutableListOf<Int>()}
        var indegree = IntArray(numCourses)
        for(prereq in prerequisites){
            adjList[prereq[0]].add(prereq[1])
            indegree[prereq[1]]++
            
        }

        var queue: Queue<Int> = LinkedList()
        var map = Array(numCourses){mutableListOf<Int>()}
        var table = Array(numCourses){BooleanArray(numCourses)}
        for(i  in 0..numCourses - 1){
            if(indegree[i] == 0 && prerequisites.isNotEmpty()){
                queue.add(i)
            }
        }

        var topoList = mutableListOf<Int>()

        while(queue.isNotEmpty()){
            val node = queue.remove()
            topoList.add(node)
            for(adj in adjList[node]){
                for(i in 0..numCourses - 1){
                    if(table[i][node]) {
                        table[i][adj] = true
                    }
                }
                table[node][adj] = true
                indegree[adj]--
                if(indegree[adj] == 0){
                    queue.add(adj)
                }
            }
        }
        for( item in queries){
            val item0 = item[0]
            val item1 = item[1]
            
            result.add(table[item[0]][item[1]])
        }

        if(result.isEmpty()) return BooleanArray(queries.size).toList()
        return result
    }
}
```