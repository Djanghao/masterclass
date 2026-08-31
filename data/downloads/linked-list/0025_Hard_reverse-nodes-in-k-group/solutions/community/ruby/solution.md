# Ruby solution using Recursion

**Author:** ksodha93
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/4215949/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/4215949/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Start swapping from last element in k positions. For each call, maintain a curr and prev by recursively calling the reverse_k_group function. Finally, perform a regular swapping of 2 nodes.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n/k) - for recursion call stack

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
# @param {Integer} k
# @return {ListNode}
def reverse_k_group(head, k)
    curr = head
    count = 0

    while count < k
        if !curr.nil?
            curr = curr.next
        else
            return head
        end
        count += 1
    end

    prev = reverse_k_group(curr, k)

    next_node = nil
    while count > 0
        next_node = head.next
        head.next = prev
        prev = head
        head = next_node

        count -= 1
    end
    prev
end
```