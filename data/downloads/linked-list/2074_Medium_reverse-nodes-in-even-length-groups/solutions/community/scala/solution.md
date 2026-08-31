# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/2666907/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/2666907/)

---

```

  implicit final class RichListNode(node: ListNode) {
    def length(acc: Int): Int = Option(node) match {
      case None => acc
      case Some(node) => node.next.length(acc + 1)
    }
    def iterator: Iterator[ListNode] = new Iterator[ListNode] {
      private var nextNode = node
      override def hasNext: Boolean = nextNode != null
      override def next(): ListNode = {
        val node = nextNode
        nextNode = nextNode.next
        node
      }
    }
    def reverse(head: ListNode, length: Int): ListNode = {
      val temps = new Array[Int](length)
      val it: Iterator[ListNode] = head.iterator
      for(i <- 0 until length) {
        temps(i) = it.next().x
      }
      val it1: Iterator[ListNode] = head.iterator
      for(i <- length - 1 to 0 by -1) {
        it1.next().x = temps(i)
      }
      head
    }
  }

  def reverseEvenLengthGroups(head: ListNode): ListNode = {   
      val length = head.length(0)
      val it: Iterator[ListNode] = head.iterator

      Stream.from(1).foldLeft(length, it.next, head)((acc, cur) =>{
      if(acc._1 > 0){
        if((cur min acc._1) % 2 == 0) acc._3.reverse(acc._2, cur min acc._1)
        var temp: ListNode = acc._2
        for(i <- 0 until cur){
          if(it.hasNext)
            temp = it.next
        }
        (acc._1 - cur, temp, acc._3)
      }
      else return acc._3
        })._3
    }
```