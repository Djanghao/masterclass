# Rust 2ms 🔥 2.12Mb ☄️  Solution 🦀

**Author:** rony0000013
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4864814/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4864814/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    pub fn remove_zero_sum_sublists(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut v = Vec::new();
        let mut s = HashSet::from([0]);
        let mut sum = 0;
        while let Some(n) = head {
            v.push(n.val);
            sum += n.val;
            if s.contains(&sum) {
                let val = sum;
                while let Some(x) = v.pop() {
                    s.remove(&sum);
                    sum -= x;
                    if sum == val {break;}
                }
            }
            s.insert(sum);
            head = n.next;
        }
        v.into_iter()
            .rev()
            .fold(
                None, |head, x| Some(Box::new(ListNode{val: x, next: head}))
            )
    }
}
```