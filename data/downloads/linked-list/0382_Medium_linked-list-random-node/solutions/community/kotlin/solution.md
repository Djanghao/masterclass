# Kotlin Reservoir

**Author:** kotlinc
**Votes:** 3
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/3278425/](https://leetcode.com/problems/linked-list-random-node/solutions/3278425/)

---

```

class Solution
internal constructor(private val head: ListNode?) {

  fun getRandom(): Int {
    var cur = head
    var count = 0

    var res = -1
    while (cur != null) {
      count++
      if ((count.toDouble() * Math.random()).toInt() == 0) {
        res = cur.`val`
      }
      cur = cur.next
    }
    return res
  }

}

```