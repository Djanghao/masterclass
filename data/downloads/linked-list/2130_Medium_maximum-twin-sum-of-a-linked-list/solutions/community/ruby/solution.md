# Ruby T: O(n) S: O(n), faster than 100%

**Author:** hoangphanbk10
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/2424404/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/2424404/)

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
# @return {Integer}
def pair_sum(head)
  slow = fast = head
  stack = []
  
  while fast&.next
    stack << slow.val
    slow = slow.next
    fast = fast.next.next
  end

  max = 0
  while (val = stack.pop)
    max = [val + slow.val, max].max
    slow = slow.next
  end

  max
end