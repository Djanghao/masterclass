# Ruby, Frequency Hash

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5441526/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5441526/)

---

# Code
```
def delete_duplicates_unsorted(head)
  def find_frequencies(current)
    frequency = Hash.new(0)
    while current
      frequency[current.val] += 1
      current = current.next
    end
    frequency
  end

  frequency = find_frequencies(head)

  dummy = ListNode.new(nil, head)
  previous = dummy
  current = dummy.next
  while current
    if frequency[current.val] > 1
      previous.next = current.next
    else
      previous = current
    end
    current = current.next
  end

  dummy.next
end
```