# all the pointers

**Author:** eyefodder
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/4501469/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/4501469/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This can be done by keeping track of the size of your current group, and a pointer to the node before it. 

# Approach
<!-- Describe your approach to solving the problem. -->
Each time we are at the end of a group (either because its last_group_size + 1 or its the end of the list), look to see if the group size is even.

If so, reverse that number of nodes, starting from the pointer at the beginning of the group

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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

def reverse_even_length_groups(head)
    # 0,1,2 length all return unchanged
    return head unless head && head.next && head.next.next
    group_cutoff_size = 2
    # starting at the beginning of group 2
    group_prev = head
    current_group_size = 1
    current = head.next
    prev = head
    # loop through the chain
    while current
      # we have reached the end of a group, either in the middle or reaching the end of the chain
      if (current_group_size == group_cutoff_size) || !current.next
        # if the size of the group is even
        if current_group_size % 2 == 0
          
          #after the reversal, the current node will be the one currently at the start of the group
          # and the prev node will be that current `next` node
          # example: 0-P1-GP1-GP2-GP3-GP4-0-0
          # group_prev = P1, current = GP4, prev = GP3
          # after reversing we will have  0-P1-GP4-GP3-GP2-GP1-0-0
          # so we want:
          # group_prev = GP1, current = GP1, prev = GP2

          current = group_prev.next
          prev = group_prev.next.next
          group_prev.next = reverse_first_n_nodes(group_prev.next, current_group_size)
          group_prev = current
        else
          group_prev = current
        end
        current_group_size = 1
        group_cutoff_size += 1
      else
        current_group_size += 1
      end
      prev = current
      current = current.next
    end
    head
end

# from a HEAD node, reverse the first n nodes in the chain
def reverse_first_n_nodes(head, n)
  prev = nil
  current = head
  while current && !n.zero?
    next_node = current.next
    current.next = prev
    prev = current
    current = next_node
    n -= 1
  end
  head.next = current
  return prev
end
```