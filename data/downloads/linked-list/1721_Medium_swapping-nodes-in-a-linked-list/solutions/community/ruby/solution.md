# [Ruby] O(n) time, O(1) space

**Author:** mistersky
**Votes:** 3
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1109053/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1109053/)

---

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
# @param {Integer} k
# @return {ListNode}
def swap_nodes(head, k)
  first_k, last_k, current = nil, nil, head
  
  (k-1).times{current = current.next}
  
  first_k = current
  last_k, current = head, current.next
  
  while current
    current, last_k = current.next, last_k.next
  end
  
  first_k.val, last_k.val = last_k.val, first_k.val
  
  head
end
```