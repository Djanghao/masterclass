# Scala | Topological Sort | Easy Explanation

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/course-schedule/solutions/803006/](https://leetcode.com/problems/course-schedule/solutions/803006/)

---

1. create array from 0 to n
2. Save count of required course, at index of dependent course
3. Create stack, to push all independent course
4. Pick one course from stack and study that course
5. Now ask all other course, if you depend on me, decrease your count
6. Once any dependent course become independent, add him to stack so that it may release other courses too.

```
	def canFinish(numCourses: Int, prerequisites: Array[Array[Int]]): Boolean = {
        val indegree = Array.ofDim[Int](numCourses)
        var completedCourse = 0

        // Course depend on other no of courses
        prerequisites.foreach(x => indegree(x(0)) += 1)

        val stack = mutable.Stack[Int]()
        // Push course whom indegree 0
        for((course, ind) <- indegree.zipWithIndex)
            if(course == 0) stack.push(ind)

        while(!stack.isEmpty) {
            val studiedCourse = stack.pop
            completedCourse += 1

            for(next <- prerequisites) {
                // I have studied the course, now all those depend on me could be studied
                if(next(1) == studiedCourse) {
                    indegree(next(0)) -= 1
                    // Now I have no dependencies
                    if(indegree(next(0)) == 0) stack.push(next(0))
                }
            }
        }
        completedCourse == numCourses
    }
```