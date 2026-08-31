# Kotlin: DFS

**Author:** artemasoyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/2938936/](https://leetcode.com/problems/course-schedule-ii/solutions/2938936/)

---

# Code
```
class Solution {
    private val stack = Stack<Int>()
    fun findOrder(numCourses: Int, prerequisites: Array<IntArray>): IntArray {
        val preReq = MutableList(numCourses) { mutableListOf<Int>() }
        prerequisites.forEach { (course, preq) -> preReq[course].add(preq) }
       
        val visited = mutableSetOf<Int>()    
        val cycle = mutableSetOf<Int>()        
        val ans = mutableListOf<Int>()

        fun dfs(course: Int): Boolean {
            if (course in cycle) return false
            if (course in visited) return true
            
            cycle += course
            preReq[course]!!.forEach { if (!dfs(it)) return false }
            cycle -= course
            
            visited += course
            ans += course
            return true
        }

        repeat(numCourses) { if (!dfs(it)) return intArrayOf() }

        return ans.toIntArray()
    }
}
```