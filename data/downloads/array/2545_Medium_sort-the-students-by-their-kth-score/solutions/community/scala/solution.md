# scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/4859770/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/4859770/)

---

# Code
```
object Solution {
    def sortTheStudents(score: Array[Array[Int]], k: Int): Array[Array[Int]] = {

        def studentsSorted(score: Array[Array[Int]], exam: Int) = 
            (0 to score.size - 1).map(student => (student, score(student)(exam)))
            .sortBy(-_._2).map(_._1)

        studentsSorted(score,k).map(score(_)).toArray    
    }
}
```