# Kotlin beats 100%

**Author:** GroundZeroCro
**Votes:** 1
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/4620403/](https://leetcode.com/problems/reward-top-k-students/solutions/4620403/)

---

# Code
```
class Solution {
    data class Student(val points: Int, val id: Int)

    fun topStudents(
        positive_feedback: Array<String>,
        negative_feedback: Array<String>,
        report: Array<String>,
        student_id: IntArray,
        k: Int
    ): List<Int> {
        val positiveFeedbackSet = positive_feedback.toSet()
        val negativeFeedbackSet = negative_feedback.toSet()

        val heap = PriorityQueue<Student> { a, b ->
            if (a.points == b.points) a.id.compareTo(b.id)
            else b.points.compareTo(a.points)
        }

        for (i in student_id.indices) {
            val studentId = student_id[i]
            var points = 0
            val split = report[i].split(" ")

            split.forEach {
                when (it) {
                    in positiveFeedbackSet -> points += 3
                    in negativeFeedbackSet -> points -= 1
                }
            }
            heap.offer(Student(points, studentId))
        }

        return List(k) { heap.poll().id }
    }
}
```