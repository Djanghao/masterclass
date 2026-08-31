# Kotlin DFS solution.

**Author:** tsecretu
**Votes:** 3
**Link:** [https://leetcode.com/problems/course-schedule/solutions/1084995/](https://leetcode.com/problems/course-schedule/solutions/1084995/)

---

```
 class Solution {
    fun canFinish(numCourses: Int, prerequisites: Array<IntArray>): Boolean {
        if (numCourses < 2) {
            return true
        }
        
        // creation of prerequisiteMap
        val prerequisiteMap = mutableMapOf<Int, MutableList<Int>>()
        for (prerequisite in prerequisites) {
            val (course, mandatory) = prerequisite
            prerequisiteMap.getOrPut(course) { mutableListOf() }.add(mandatory)
        }
        
        val visitingStatus = IntArray(numCourses + 1)
		// 0 means unvisited
		// 1 means trying to take course right now
		// 2 means the course has already been taken.
        for (courseNumber in 0 until numCourses) {
            if (!dfsCourse(courseNumber, visitingStatus, prerequisiteMap)) {
                return false
            }
        }
        return true
    }
    
    fun dfsCourse(courseNumber: Int, visitingStatus: IntArray, prerequisiteMap: Map<Int, List<Int>>): Boolean {
        if (visitingStatus[courseNumber] == 1) {
            return false // cycle detected in DFS it's impossible.
        } else if (visitingStatus[courseNumber] == 2) {
            return true // course is already taken.
        }
        
        visitingStatus[courseNumber] = 1
        
        val prerequisitesOfCourse = prerequisiteMap[courseNumber]
        if (prerequisitesOfCourse != null) {
            for (prerequisite in prerequisitesOfCourse) {
                if (!dfsCourse(prerequisite, visitingStatus, prerequisiteMap)) {
                    return false
                }
            }
        }
        
        visitingStatus[courseNumber] = 2
        
        return true
    }
}
```