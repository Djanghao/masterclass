# Efficient Scala solution

**Author:** tumakha
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/919544/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/919544/)

---

```scala
  def getDecimalValue(head: ListNode): Int =
    Iterator.unfold(head) {
      case null => None
      case node => Some(node.x, node.next)
    }.reduceLeft((result, value) => (result << 1) | value)
```
