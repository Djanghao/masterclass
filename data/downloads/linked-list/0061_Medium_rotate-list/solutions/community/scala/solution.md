# Rotate List - Scala

**Author:** vijayjeyam
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotate-list/solutions/1839049/](https://leetcode.com/problems/rotate-list/solutions/1839049/)

---

```
object Solution {
	def rotateRight(head: ListNode, k: Int): ListNode = {
		if(head == null || k == 0) return head
		val (lastNode:ListNode,index:Int) = getLastNodeWithIndex(head)
		lastNode.next=head // Make it circular
		val node = moveRight(head,index - (k%index)-1) // rotate
		val res = node.next 
		node.next = null //  break the cycle
		res
	}
  def getLastNodeWithIndex(head: ListNode, index:Int = 0):(ListNode,Int) = head.next match {
      case null => (head,index+1)
      case others => getLastNodeWithIndex(others,index+1)
  }

  def moveRight(head: ListNode,i: Int): ListNode = i match {
     case 0 => head
     case _ => moveRight(head.next,i-1)
  }
  

  
}
```