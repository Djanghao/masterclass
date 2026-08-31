# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5475662/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5475662/)

---

```scala
object Solution {
  def modifiedList(nums: Array[Int], head: ListNode): ListNode =
    lazy val aSet = nums.toSet
    def f(node: ListNode, acc: List[Int]): List[Int] =
      if(node == null) acc else f(node.next, node.x +: acc)
    f(head,Nil).filterNot(aSet.contains)
      .foldLeft(null:ListNode){case (prev,x) => new ListNode(x,prev)}
}
```