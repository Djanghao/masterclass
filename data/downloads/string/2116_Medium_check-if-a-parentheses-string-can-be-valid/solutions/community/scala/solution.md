# Just simplify this question to "with some fixed ( or ), can I possibly fill other positions?"

**Author:** qiuqiushasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/1868370/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/1868370/)

---

```scala

  def canBeValid(s: String, locked: String): Boolean = {

    val len = s.length
    if (len % 2 == 1) return false

    var leftPossible = 0
    var rightMust    = 0
    (0 to len - 1).foreach(i => {
      if (locked.charAt(i) == '0') {
        leftPossible += 1
      } else {
        if (s.charAt(i) == '(') {
          leftPossible += 1
        } else {
          rightMust += 1
        }
      }
      if (leftPossible < rightMust) return false
    })
    var rightPossible = 0
    var leftMust      = 0
    (len - 1 to 0 by -1).foreach(i => {
      if (locked.charAt(i) == '0') {
        rightPossible += 1
      } else {
        if (s.charAt(i) == '(') {
          leftMust += 1
        } else {
          rightPossible += 1
        }
      }
      if (rightPossible < leftMust) return false
    })

    true
  }
```