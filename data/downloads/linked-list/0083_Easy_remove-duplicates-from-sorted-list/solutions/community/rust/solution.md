# My idiomatic solution. Rust.

**Author:** hhwyt1
**Votes:** 22
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/344741/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/344741/)

---

```
impl Solution {
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() {
            return None;
        }
        let mut h = head;
        let mut p1 = h.as_mut().unwrap();
        while let Some(p2) = p1.next.as_mut() {
            if p1.val == p2.val {
                p1.next = p2.next.take();
            } else {
                p1 = p1.next.as_mut().unwrap();
            }
        }
        h
    }
}
```