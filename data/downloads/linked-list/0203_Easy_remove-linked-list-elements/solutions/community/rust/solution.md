# Most intuitive rust for me

**Author:** ascrivener
**Votes:** 9
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/2327783/](https://leetcode.com/problems/remove-linked-list-elements/solutions/2327783/)

---

This style makes the most sense to me personally. We have to move head into a mutable variable first since we're gonna be modifying. Then we define a mutable refernence to the head which will be our walker.

In our loop, we match the walker. If None, the linked list is over so we break. If Some(node) and the value is val, then we modify what the walker is pointing to (by dereferencing) to be whatever is next. We can't do ``` *walker = node.next``` because node.next is behind a mutable reference (node is a &mut) and we can't move out of something we don't own. So we take it. Then if Some(node) and the value is not val, we modify the walker pointer to point to the next node.

At the end we return our head

```
impl Solution {
    pub fn remove_elements(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
        let mut head = head;
        let mut walker = &mut head;
        loop {
            match walker {
                None => break,
                Some(node) if node.val == val => {
                    *walker = node.next.take();
                },
                Some(node) => {
                    walker = &mut node.next;
                },
            }
        }
        head
    }
}
```