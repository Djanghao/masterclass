# Scala Solution

**Author:** user9507L
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/2772323/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/2772323/)

---

Runtime: 816 ms, faster than 27.27% of Scala online submissions for Number of Valid Clock Times.
Memory Usage: 65.8 MB, less than 18.18% of Scala online submissions for Number of Valid Clock Times.

```
object Solution {
  def countTime(time: String): Int = {
    val Array(hr,mi) = time.split(":")
    numOfHourValues(hr)*numOfMinuteValues(mi)
  }

  def numOfHourValues(hr: String): Int = hr.toList match {
    case List('?','?') => 24
    case List('?',h) => if (h -'0' <=3) 3 else 2
    case List(h,'?') => if (h - '0' == 2) 4 else 10
    case _ => 1
  }

  def numOfMinuteValues(mi: String): Int = mi.toList match {
    case List('?','?') => 60
    case List('?',_) => 6
    case List(_,'?') => 10
    case _ => 1
  }


}
```