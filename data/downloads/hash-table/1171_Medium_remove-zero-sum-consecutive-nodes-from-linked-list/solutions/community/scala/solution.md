# 9 lines scala solution

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4866422/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4866422/)

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
```
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
  def removeZeroSumSublists(head: ListNode): ListNode = {
    def impl1(node:ListNode, sums: Set[Int] = Set(0), acc: List[(Int,Int)] = List(0->0)): List[(Int,Int)] = {
      lazy val xSum: Int = node.x + acc.headOption.map(_._2).getOrElse(0)
      lazy val (d:List[(Int,Int)],t:List[(Int,Int)]) = acc.span(_._2 != xSum)
      if(node == null) acc
      //else if(node.x==0) impl1(node.next, sums, acc)
      else if(sums.contains(xSum)) impl1(node.next, sums -- d.map(_._2), t)
      else impl1(node.next, sums + xSum, (node.x -> xSum) +: acc)
    }
    impl1(head).map(_._1).foldLeft(null:ListNode){case (node,i) => new ListNode(i,node)}.next
  }
}

```