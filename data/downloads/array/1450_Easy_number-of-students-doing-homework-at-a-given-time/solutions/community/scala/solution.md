# Manjunath

**Author:** 2FSNKUvaOM
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/5984722/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/5984722/)

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
```scala []
object Solution {
    def busyStudent(startTime: Array[Int], endTime: Array[Int], queryTime: Int): Int = {
        val length: Int = startTime.size
        (0 to length - 1).foldLeft(0) { (total,  index) =>
            if (startTime(index) <= queryTime & endTime(index) >= queryTime) {
                total + 1
            } else {
                total
            }
        }
    }
}
```