# Simple Kotlin solution

**Author:** antonbadretdinov
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/3589678/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/3589678/)

---

# Simple Kotlin solution


# Code:
```
class Solution {
    fun splitListToParts(head: ListNode?, k: Int): Array<ListNode?> {
        val res = Array<ListNode?>(k){null}

        if(head == null) return res

        if(k==1){
            res[0] = head
            return res
        }

        var size = 1
        var node = head
        while(node?.next != null){
            size++
            node = node.next
        }

        var currNode = ListNode(0)
        currNode?.next = head
        var resNode: ListNode? = null
        var step = 0
        for(i in 0 until k){
            resNode = currNode
            step = if(size%k > i) size/k + 1 else size/k
            repeat(step){
                currNode = currNode.next
            }
            res[i] = resNode?.next
            resNode?.next = null
        }      
        return res
    }
}
```