# simple iterative solution using hashmap

**Author:** ifelsethenthat
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-frequency/solutions/4840850/](https://leetcode.com/problems/linked-list-frequency/solutions/4840850/)

---

- use a hash map to store the occurance of each node
- iterate over the hash values and create the new list



Time: $$O(n)$$
Space: $$O(n)$$



# Code
```
def frequencies_of_elements(head)
  h = Hash.new(0)
  
  while head
    h[head.val] += 1
    head = head.next
  end

  counts = h.values

  new_head = ListNode.new(counts[0])
  cursor = new_head
  counts[1..].each do |count|
    cursor.next = ListNode.new(count)
    cursor = cursor.next
  end

  new_head
end

```