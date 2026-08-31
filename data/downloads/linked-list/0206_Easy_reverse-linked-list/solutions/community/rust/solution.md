# Rust 100%

**Author:** astroex
**Votes:** 36
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/1477639/](https://leetcode.com/problems/reverse-linked-list/solutions/1477639/)

---

```
impl Solution {
    pub fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let (mut prev, mut curr) = (None, head);
        while let Some(mut node) = curr  {
            curr = node.next;
      
            node.next = prev;
            
            prev = Some(node);
        }
        prev
    }
}
```