# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/2663557/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/2663557/)

---

```
use std::collections::*;

impl Solution {
    pub fn delete_duplicates_unsorted(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut next = head;
        let mut arr = vec![];
        let mut map = HashMap::new();
        while let Some(node) = next {
            let mut temp = node;
            *map.entry(temp.val).or_insert(0) += 1;

            next = temp.next;
            temp.next = None;
            arr.push(temp);
        }

        let mut result = vec![];
        for node in arr {
            if let Some(&num) = map.get(&node.val) {
                if num == 1 {
                    result.push(node);
                }
            }
        }

        if let Some(mut next) = result.pop() {
            while let Some(mut node) = result.pop() {
                node.next = Some(next);
                next = node;
            }
          
           Some(next)
        } else {
            None
        }
    }
}
```