# Recursive Monostack Ruby solution with one pass

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/5865750/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/5865750/)

---

# Intuition
We were missing a recursive Ruby solution using monostack, so here it's. It's much shorter than the loop alternatives.

1. get to the tail of the list 
```
def next_larger_nodes(head, ans = [], monostack = [])
    return [] if head == nil

    ans = next_larger_nodes(head.next, ans, monostack)
```

2. maintain a monotonic decreasing stack
```
    while monostack.length > 0 && monostack[-1] <= head.val
        monostack.pop
    end
```

3. insert into the answer the first value that's larger than the current number or 0. The last item of the monostack is guaranted to be greater than the current element or inexistent.
```
    ans.unshift(monostack[-1] || 0)
    ans
end
```

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
# @param {ListNode} head
# @return {Integer[]}
def next_larger_nodes(head, ans = [], monostack = [])
    return [] if head == nil

    ans = next_larger_nodes(head.next, ans, monostack)

    while monostack.length > 0 && monostack[-1] <= head.val
        monostack.pop
    end
    ans.unshift(monostack[-1] || 0)
    monostack.push(head.val)
    ans
end


# monostack:
# 2 1 5 ->
# 5
# 5 1
# 5 2
```