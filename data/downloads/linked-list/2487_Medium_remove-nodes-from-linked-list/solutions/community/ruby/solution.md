# Recursive Solution in Ruby

**Author:** locpham24
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5120422/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5120422/)

---

# Code
```
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def remove_nodes(head)
    if head.next.nil?
        return head
    end
    
    nextNode = remove_nodes(head.next)
    if nextNode.val > head.val
        return nextNode
    end
    
    head.next=nextNode
    return head
end
```