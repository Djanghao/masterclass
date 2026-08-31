# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/3778880/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/3778880/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countStudents(students: Array[Int], sandwiches: Array[Int]): Int = {
      val arr = students.foldLeft(Array(0, 0)){(acc, i) => acc.updated(i, acc(i) + 1)}
      sandwiches.foldLeft((true, arr)){case ((flag, acc), k) =>
        if (!flag) (false, acc)
        else if (acc(k) == 0) (false, acc)
        else (true, acc.updated(k, acc(k) - 1))
      }._2.sum
    }
}
```