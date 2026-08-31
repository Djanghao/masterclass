# Simple O(n) solution

**Author:** user2755N
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5438077/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5438077/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
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
# @return {Integer[]}
def nodes_between_critical_points(head)
    prev = head
    curr = head.next
    min_dist = max_dist = -1
    curr_node_ind = 1
    last_critical_point = first_critical_point = nil

    while curr.next
        curr_node_ind += 1
        if (curr.val > prev.val && curr.val > curr.next.val) || (curr.val < prev.val && curr.val < curr.next.val)
            # critical point found
            if last_critical_point
                min_dist = if min_dist == -1
                    curr_node_ind - last_critical_point
                else
                    [min_dist, curr_node_ind - last_critical_point].min
                end                
            end
            if first_critical_point
                max_dist = curr_node_ind - first_critical_point
            else
                first_critical_point = curr_node_ind
            end
            last_critical_point = curr_node_ind
        end
        
        prev = curr
        curr = curr.next
    end

    [min_dist, max_dist]
end
```