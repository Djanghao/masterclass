# Scala Sol sortBy

**Author:** samvan
**Votes:** 0
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/4101426/](https://leetcode.com/problems/reward-top-k-students/solutions/4101426/)

---

Slightly different from existing solutions. 

# Code
```
object Solution {
    def topStudents(positive_feedback: Array[String], negative_feedback: Array[String], report: Array[String], student_id: Array[Int], k: Int): List[Int] = {
        val posF = positive_feedback.toSet
        val negF = negative_feedback.toSet
        val scores = report.map{rep =>
        rep.split(' ').foldLeft(0)((acc, word) =>
            if (posF.contains(word)) acc + 3
            else if (negF.contains(word)) acc - 1
            else acc
          )
        }

        student_id.zip(scores).sortBy{case (x, y) => (-y, x)}.take(k).map(_._1).toList
    }
}
```