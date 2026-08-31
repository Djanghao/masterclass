# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/3654991/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/3654991/)

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
    def maximumTime(time: String): String = {
      val hour = if (time(0) == '?' && time(1) == '?') "23"
                  else if (time(0) == '?' && time(1) <= '3') "2" + time(1)
                  else if (time(0) == '?' && time(1) > '3') "1" + time(1)
                  else if (time(1) == '?' && time(0) <= '1') time(0) + "9"
                  else if (time(1) == '?' && time(0) == '2') "23"
                  else time.take(2)
      val minute = if (time(3) == '?' && time(4) == '?') "59"
                    else if (time(3) == '?' && time(4) <= '9') "5" + time(4)
                    else if (time(4) == '?' && time(3) <= '5') time(3) + "9"
                    else time.takeRight(2)
      s"$hour:$minute"
    }
}
```