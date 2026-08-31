# Ruby 1-line solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5764745/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5764745/)

---

# Code
```ruby []
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
def insert_greatest_common_divisors(head, step = head, nxt = nil)
  (step, step.next = nxt, ListNode.new(step.val.gcd(nxt.val), nxt) while nxt = step.next) or head    
end
```