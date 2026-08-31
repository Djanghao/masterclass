# Rust simple solution

**Author:** sugyan
**Votes:** 7
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/1346312/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/1346312/)

---

```rust
impl Solution {
    pub fn reverse_k_group(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let mut head = head;
        let mut node = &mut head;
        for _ in 0..k {
            if let Some(n) = node {
                node = &mut n.next;
            } else {
                return head;
            }
        }
        let mut ret = Self::reverse_k_group(node.take(), k);
        while let Some(h) = head.take() {
            ret = Some(Box::new(ListNode {
                val: h.val,
                next: ret,
            }));
            head = h.next;
        }
        ret
    }
}
```