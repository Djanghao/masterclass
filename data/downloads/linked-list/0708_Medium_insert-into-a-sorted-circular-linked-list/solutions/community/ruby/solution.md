# 2 Pointer approach - Ruby solution with comments

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/4173430/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/4173430/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
2 Pointer approach. Maintain prev and curr and mark a flag to when we find position to add the new value in the list.
Different cases to handle:
Case 0: Empty list.
Case 1: Value of new node is in between minimal and maximal values in the list.
Case 2: Number if greater than maximal value or smaller than minimal value. The new node should be after tail node.
Case 3: If the list has all same values.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
# Definition for a Node.
# class Node
#     attr_accessor :val, :next
#     def initialize(val=nil, next_=nil)
#         @val = val
#         @next = next_
#     end
# end

# @param {Node} head
# @param {Integer} insertVal
# @return {Node}
def insert(head, insertVal)
	if head.nil? # Case 0: Empty list
        node = Node.new(insertVal)
        node.next = node
        return node
    end

    prev = head
    curr = head.next
    to_insert = false
    begin
        # Case 1: Value of new node is in between minimal and maximal values of the list.
        if prev.val <= insertVal && insertVal <= curr.val
            to_insert = true
        elsif prev.val > curr.val
        # Case 2: Number if greater than maximal value or smaller than minimal value.
        # The new node should be after tail node
            if insertVal >= prev.val || insertVal <= curr.val
                to_insert = true
            end
        end
        if to_insert == true
            prev.next = Node.new(insertVal, curr)
            return head
        end

        prev = curr
        curr = curr.next
    end while prev != head

    # Case 3: If the list has all same values.
    prev.next = Node.new(insertVal, curr)
    return head 
end
```