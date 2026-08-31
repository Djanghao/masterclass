# Ruby Solution

**Author:** swentling87
**Votes:** 5
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/269257/](https://leetcode.com/problems/palindrome-linked-list/solutions/269257/)

---

```
def is_palindrome(head)
    data = []
    current_node = head
    while !current_node.nil?
        data << current_node.val
        current_node = current_node.next
    end
    data == data.reverse
end
```