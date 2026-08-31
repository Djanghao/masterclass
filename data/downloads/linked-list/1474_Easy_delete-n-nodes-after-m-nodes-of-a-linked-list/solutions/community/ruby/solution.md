# Ruby one approach

**Author:** surferbv
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/2838016/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/2838016/)

---

```
# 1474.delete_n_nodes_after_m_nodes_of_a_linked_list.rb
# https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/description/
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} m
# @param {Integer} n
# @return {ListNode}
=begin

    three while loops

    time: O(n)
        Because we traverse over the linked list only once. 

    space: O(1)

    note:
        Keep track of those pointers, nils, and offsets.  

=end
def delete_nodes(head, m, n)
    curr = head
    last = head

    while curr
        m_count = m
        n_count = n

        while curr && m_count != 0
            last = curr
            curr = curr.next
            m_count -= 1
        end

        while curr && n_count != 0
            curr = curr.next
            n_count -= 1
        end

        last.next = curr
    end

    return head
end
```