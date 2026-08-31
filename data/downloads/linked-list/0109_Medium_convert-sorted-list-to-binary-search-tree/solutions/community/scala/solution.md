# 7 lines scala recursion

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3283520/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3283520/)

---

# Code
```

object Solution {
  def sortedListToBST(head: ListNode): TreeNode = {
    def toList(head: ListNode, acc:List[Int]=List()): List[Int] =
      if(head==null) acc else toList(head.next, head.x +: acc)
    def toTreeNode(seq: Seq[Int]): TreeNode = {
      lazy val (t,d) = seq.splitAt(seq.size>>1)
      if(seq.isEmpty) null else new TreeNode(seq(seq.size>>1),toTreeNode(t),toTreeNode(d.tail))
    }
    toTreeNode(toList(head).reverse.toVector)
  }
}
```