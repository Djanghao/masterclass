# Scala FP: short 1 pass tailrec

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5422275/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5422275/)

---

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
  @annotation.tailrec
  def nodesBetweenCriticalPoints(head: ListNode, prev: Int = 0, firstDist: Int = 0, lastDist: Int = 0, min: Int = Int.MaxValue, cps: Int = 0): Array[Int] = 
    if (head.next == null)
      if (cps < 2) Array(-1, -1) else Array(min, firstDist - lastDist)
    else if (prev != 0 && prev < head.x && head.next.x < head.x || prev > head.x && head.next.x > head.x)
      nodesBetweenCriticalPoints(head.next, head.x, if (cps == 0) 1 else firstDist + 1, 1, if (cps == 0) Int.MaxValue else min.min(lastDist), cps + 1)
    else
      nodesBetweenCriticalPoints(head.next, head.x, firstDist + 1, lastDist + 1, min, cps)
}
```