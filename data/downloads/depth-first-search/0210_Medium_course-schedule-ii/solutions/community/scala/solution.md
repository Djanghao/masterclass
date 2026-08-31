# 25 line simple BFS Scala

**Author:** pathikritbhowmick
**Votes:** 1
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/5029776/](https://leetcode.com/problems/course-schedule-ii/solutions/5029776/)

---

# Code
```
object Solution {
    def findOrder(numCourses: Int, prereqs: Array[Array[Int]]): Array[Int] = {
        val canTakeAfter = Array.fill(numCourses)(Set.empty[Int])
        val numRequirements = Array.fill(numCourses)(0)

        prereqs.foreach({case Array(course, requirement) => {
            numRequirements(course) += 1
            canTakeAfter(requirement) += course
        }})

        val schedule = collection.mutable.Queue(numRequirements.indices.filter(i => numRequirements(i) == 0) : _*)

        val coursesTaken = Array.newBuilder[Int]
        while(schedule.nonEmpty) {
            val course = schedule.dequeue()
            coursesTaken += course
            canTakeAfter(course).foreach(newCourse => {
                numRequirements(newCourse) -= 1
                if numRequirements(newCourse) == 0 then schedule.enqueue(newCourse)
            })
        }

        if coursesTaken.length == numCourses then coursesTaken.result() else Array.empty
    }
}
```