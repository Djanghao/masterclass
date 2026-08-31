# Simple ruby solution using merge sort (Recursion)

**Author:** divyad25
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-list/solutions/409489/](https://leetcode.com/problems/sort-list/solutions/409489/)

---

```
def sort_list(head)
  return head if head.nil? || head.next.nil?
  a, b = split(head)
  a = sort_list(a)
  b = sort_list(b)
  merge(a, b)
end

def merge(a, b)
  head = curr = prev = ListNode.new(0)
  while(a && b)
    if a.val < b.val
      prev.next = a
      a = a.next
    else
      prev.next = b
      b = b.next
    end
    prev = prev.next
  end
  prev.next = a if a
  prev.next = b if b
  head.next
end

def split(head)
  prev = nil
  slow = fast = head
  while(fast && fast.next)
    prev = slow
    slow = slow.next
    fast = fast.next.next
  end
  prev.next = nil
  [head, slow]
end
```