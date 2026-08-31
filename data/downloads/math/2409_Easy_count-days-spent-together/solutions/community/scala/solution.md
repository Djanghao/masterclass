# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/4399024/](https://leetcode.com/problems/count-days-spent-together/solutions/4399024/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countDaysTogether(arriveAlice: String, leaveAlice: String, arriveBob: String, leaveBob: String): Int = {
      val start = math.max(dateToDays(arriveAlice), dateToDays(arriveBob))
      val end = math.min(dateToDays(leaveAlice), dateToDays(leaveBob))
      if (start > end) 0 else end - start + 1
    }

    def daysInMonth(month: Int): Int = month match {
      case 2 => 28
      case m if List(4, 6, 9, 11).contains(m) => 30
      case _ => 31
    }

    def dateToDays(date: String): Int = {
      val Array(month, day) = date.split("-").map(_.toInt)
      (1 until month).map(daysInMonth).sum + day
    }
}
```