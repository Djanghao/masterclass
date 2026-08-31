# very simple ruby, beats 100%

**Author:** cb001
**Votes:** 0
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/5636464/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/5636464/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Definition for a Node.
# class Node
#     attr_accessor :val, :prev, :next, :child
#     def initialize(val=nil, prev=nil, next_=nil, child=nil)
#         @val = val
#         @prev = prev
#         @next = next_
#         @child = child
#     end
# end

# @param {Node} root
# @return {Node}
def flatten(root)
    return nil unless root

    current_node = root
    next_node = current_node.next
    while current_node do
        if current_node.child
            child_root = current_node.child
            child_tail = get_tail(child_root)
            current_node.child = nil
            current_node.next = child_root
            child_root.prev = current_node
            current_node = child_root
            child_tail.next = next_node
            next_node.prev = child_tail if next_node
            next_node = child_root.next
            next
        end
        current_node = next_node
        next_node = next_node.next if next_node
    end
    root
end

def get_tail(root)
    current_node = root
    while current_node.next do
        current_node = current_node.next
    end
    current_node
end
```