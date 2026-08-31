# Fast 100% Rust

**Author:** 37ng
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/5540948/](https://leetcode.com/problems/linked-list-components/solutions/5540948/)

---

# Approach
Traverse the linked list, if the value is in `nums`, set the flag to true elsewise set it to false and `num++`. Use the flag one more time after traversal is done.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
use std::collections::HashSet;

impl Solution {
    pub fn num_components(head: Option<Box<ListNode>>, nums: Vec<i32>) -> i32 {
        let nums: HashSet<i32> = nums.into_iter().collect();
        let mut had_component = false;
        let mut num = 0;

        let mut curr = head.as_ref();
        while let Some(node) = curr {
            if !nums.contains(&node.val) {
                if had_component {
                    num += 1;
                }
                had_component = false;

            } else {
                had_component = true;
            }
            curr = node.next.as_ref();
        }

        if had_component {
            num += 1;
        }
        num
    }
}
```