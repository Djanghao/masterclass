# Walk and count

**Author:** tataruty
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5427656/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5427656/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

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
def merge_nodes(head)
b = head

    while head.next
    # p "new cicle, val = #{head.val}"
        first_zero = head if head.val == 0
        sum = 0
        head = head.next
        while head && head.val != 0
            sum += head.val
            head = head.next
            # p "sum = #{sum}"
        end
        # update next after first 0
        # p "next after 0 was = #{first_zero.next.val}, sum = #{sum}"
        first_zero.val = sum
        # point to next 0
        first_zero.next = head.next ? head : nil
        # p "new head = #{head.val}"

    end
    b
end
```