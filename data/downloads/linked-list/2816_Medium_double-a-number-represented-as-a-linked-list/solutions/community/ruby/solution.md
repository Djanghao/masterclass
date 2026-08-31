# Single-linked list

**Author:** verdejo
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5128091/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5128091/)

---

# Intuition
Double each place value in reverse, keeping track of carry value. Reversal is a challenge given single linked list does not allow backward traversal.

# Approach
Use a stack for intuitive reversal.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

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

def double_it(head)
    stack = []
    while !head.nil?
        stack << head.val
        head = head.next
    end

    result_head = nil
    carry_over = 0
    node_val = stack.pop
    while !node_val.nil? do
        doubled_val = node_val * 2 + carry_over
        current_node_val = (doubled_val % 10)
        carry_over = doubled_val / 10
        result_head = ListNode.new(current_node_val, result_head)
        node_val = stack.pop
        if node_val.nil? && carry_over > 0
            result_head
            result_head = ListNode.new(carry_over, result_head)
        end
    end
    result_head
end 
```