# Rust | Linear time and no extra space (O(n + m) time and O(1) space)

**Author:** garciparedes
**Votes:** 11
**Link:** [https://leetcode.com/problems/merge-in-between-linked-lists/solutions/989246/](https://leetcode.com/problems/merge-in-between-linked-lists/solutions/989246/)

---

```
use std::mem;

impl Solution {
    pub fn merge_in_between(
        list1: Option<Box<ListNode>>, 
        a: i32, 
        b: i32,
        mut list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut head = list1.unwrap();
        
        let mut current = head.as_mut();
        for _ in 0..(a - 1) {
            current = current.next.as_mut().unwrap();
        }
		
        mem::swap(&mut current.next, &mut list2);
        
        while current.next.is_some() {
            current = current.next.as_mut().unwrap();
        }

        for _ in 0..(b - a + 1) {
            list2 = list2.unwrap().next;
        }
        current.next = list2;
        
        return Some(head);
    }
}
```
You can see more Leetcode solutions writen in Rust on: https://github.com/garciparedes/leetcode