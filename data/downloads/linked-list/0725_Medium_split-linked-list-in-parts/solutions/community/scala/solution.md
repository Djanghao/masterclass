# [Scala] Functional solution using recursion & foldLeft

**Author:** cosminci
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/1493016/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/1493016/)

---

`copyList` returns the new part together with the head of the next part.

```
  def splitListToParts(head: ListNode, k: Int): Array[ListNode] = {
    def length(node: ListNode): Int = 
	  if (node == null) 0 else 1 + length(node.next)
	  
    def copyList(node: ListNode, size: Int): (ListNode, ListNode) =
      if (size == 0) (null, null)
      else if (size == 1) (new ListNode(node.x), node.next)
      else {
        val (next, nextHead) = copyList(node.next, size - 1)
        (new ListNode(node.x, next), nextHead)
      }

    val n = length(head)
    val partSizes = Seq.fill(n % k)(n / k + 1) ++ Seq.fill(k - n % k)(n / k)

    partSizes.foldLeft(Seq.empty[ListNode], head) {
      case ((lists, nextHead), partSize) =>
        val (newList, newNextHead) = copyList(nextHead, partSize)
        (lists :+ newList, newNextHead)
    }._1.toArray
  }
```