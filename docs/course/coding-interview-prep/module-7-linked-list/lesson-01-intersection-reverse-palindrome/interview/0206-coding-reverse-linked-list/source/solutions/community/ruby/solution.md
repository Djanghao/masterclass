# Recursive Ruby solution

**Author:** evmorov
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/334967/](https://leetcode.com/problems/reverse-linked-list/solutions/334967/)

---

```
def reverse_list(head, prev = nil)
  return prev unless head

  next_node = head.next
  head.next = prev
  reverse_list(next_node, head)
end
```