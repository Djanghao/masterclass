# Ruby simple O(m+n) time, O(1) space solution

**Author:** hoangphanbk10
**Votes:** 2
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/2162435/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/2162435/)

---

Taking advantage of the fact that the value on each node is positive.

```ruby
# invert all headA values: O(m)
current = headA
while current
  current.val = -current.val
  current = current.next
end
# find first element in headB that is inverted (that means it is in headA): O(n)
while headB
  break if headB.val < 0
  headB = headB.next
end
# Revert headA values: O(m)
while headA
  headA.val = -headA.val
  headA = headA.next
end

headB
```