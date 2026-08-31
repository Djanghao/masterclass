# Ruby Simple Solution

**Author:** AliakseiTamarovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5746471/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5746471/)

---

# Code
```ruby []
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {Integer[]} nums
# @param {ListNode} head
# @return {ListNode}
def modified_list(nums, head)
    resutl = []
    nums = nums.tally

    curr = head
    until curr.nil?
      resutl.push(curr.val) if nums[curr.val].nil?
      curr = curr.next
    end

    resutl
end
```