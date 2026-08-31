# Beats  100% solutions  with both in terms of Memory and Time 🔥

**Author:** aryan_me
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/4009573/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/4009573/)

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
# @return {ListNode[]}
def split_list_to_parts(head, k)
    length = 0
    temp_head = head
    ar = []
    while temp_head != nil
        length +=1
        temp_head = temp_head.next
    end
    temp_head = head
    # return [temp_head] if k == 1 
    return list(temp_head,k) if ((k >= length && length/k == 0)  ||  (k>=length && length%k == 0))
    remainder = length%k
    temp_head = head
    while temp_head!=nil
        capacity = (length/k)
        capacity +=1 if remainder > 0
        temp_head, slice = slice_list(temp_head, capacity)
        remainder -= 1 if remainder > 0
        ar << slice
    end
    ar
end

def slice_list node, capacity
    new_node = ListNode.new
    x = new_node
    count = 0
    while count < capacity
        x.val  = node.val
        if count == capacity - 1
            node = node.next
            break
        end
        n_node = ListNode.new(node.next&.val)
        node = node.next
        x.next = n_node
        x = x.next
        count = count+1
    end
    [node, new_node]
end

def list temp_head, k
    arr =[]
    k.times do |x|
        unless temp_head.nil?
            if k == 1
                arr << temp_head
            else 
                arr << ListNode.new(temp_head.val)
            end
            temp_head = temp_head.next
        else
            arr << nil
        end    
    end
    arr    
end
```