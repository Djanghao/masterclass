# scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/reorder-list/solutions/4914979/](https://leetcode.com/problems/reorder-list/solutions/4914979/)

---

# Code
```
object Solution {
    def loop(i: Int, j: Int): LazyList[Int] = 
        if(i > j) LazyList.empty
        else if(i == j) i #:: LazyList.empty
        else i #:: j #:: loop(i + 1, j - 1)

    def reorderList(head: ListNode): Unit = {
        val arr = 
            Iterator.unfold(head)(node => if(node == null) None else Some((node, node.next))).toArray    

        // to avoid infinite loop
        arr.foreach(_.next = null)

        loop(0, arr.size - 1).tail.foldLeft(arr(0))((prev, i) => {
            prev.next = arr(i)
            arr(i)
        })
    }
}
```