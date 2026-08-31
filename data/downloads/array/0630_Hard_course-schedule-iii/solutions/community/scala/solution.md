# Scala version of Priority Queue Solution

**Author:** soumensaha
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/2195534/](https://leetcode.com/problems/course-schedule-iii/solutions/2195534/)

---

```
object Solution {
  def scheduleCourse(courses: Array[Array[Int]]): Int = {
    val q = scala.collection.mutable.PriorityQueue.empty[Int]
    courses.sortBy(_ (1)).foldLeft(0) { case (totalDuration, Array(duration, lastDay)) =>
      q.enqueue(duration)
      if (totalDuration + duration > lastDay) totalDuration + duration - q.dequeue() else totalDuration + duration
    }
    q.size
  }
}

//Runtime: 1250 ms, faster than 88.89% of Scala online submissions for Course Schedule III.
//Memory Usage: 66.5 MB, less than 88.89% of Scala online submissions for Course Schedule III.
```