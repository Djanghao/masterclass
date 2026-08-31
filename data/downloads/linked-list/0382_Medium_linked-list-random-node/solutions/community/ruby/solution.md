# 382. Linked List Random Node | O(n) , O(1)

**Author:** RISHI1220
**Votes:** 3
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/3278858/](https://leetcode.com/problems/linked-list-random-node/solutions/3278858/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Count the number of elements in the link list and keep a head pointer.
In get Random method get a random index from count and loop the list that amount of thime and return the value

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
class Solution
=begin
    :type head: ListNode
=end
    def initialize(head)
        # @array=[]
        @head=head
        @count=0
        while head
            # @array.push(head.val)
            @count+=1
            head=head.next
        end
        p @count
    end


=begin
    :rtype: Integer
=end
    def get_random()
        index=rand(@count)
        temp=@head
        index.times do
            temp=temp.next
        end
        temp.val
    end
end

# Your Solution object will be instantiated and called as such:
# obj = Solution.new(head)
# param_1 = obj.get_random()
```