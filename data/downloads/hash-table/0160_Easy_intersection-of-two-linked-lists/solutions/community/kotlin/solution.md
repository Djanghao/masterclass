# Taking advantage of "Each value on each linked list is in the range [1, 10^9]"

**Author:** rakeshSeervi
**Votes:** 4
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/1093007/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/1093007/)

---

```
// kotlin
class Solution {
    fun getIntersectionNode(headA:ListNode?, headB:ListNode?):ListNode? {
        var a = headA
        var b = headB
        var ans: ListNode? = null
        
		// marking the nodes as visited
        while(a!=null){
            a.`val`*=-1
            a = a.next
        }
        
		// check if the node is visited
        while(b!=null){
            if(b.`val`<0){
                ans = b
                break
            }
            b = b.next
        }
        
        // reverting to original values
		a = headA
        while(a!=null){
            a.`val`*=-1
            a = a.next
        }
        
        return ans
    }
}
```