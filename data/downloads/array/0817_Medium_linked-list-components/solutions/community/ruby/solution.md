# Ruby Solution

**Author:** kishorecheruku
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/5185767/](https://leetcode.com/problems/linked-list-components/solutions/5185767/)

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
# @param {Integer[]} nums
# @return {Integer}
def num_components(head, nums)
    connected = false
    set = Set.new(nums)
    count = 0

    while !head.nil?
        if set.include? head.val
            connected = true
        elsif connected == true
            connected = false
            count += 1
        end
        head = head.next
    end

    count += 1 if connected

    count
end
```