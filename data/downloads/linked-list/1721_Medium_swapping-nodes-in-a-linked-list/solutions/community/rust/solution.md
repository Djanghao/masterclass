# Rust elegant trait iterators solution 48 lines, beats 83% runtime and memory, no extra memory

**Author:** astadnik
**Votes:** 4
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3526484/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3526484/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Cut the list into sublists:
* a = before n1
* n1
* b = between n1 and n2
* n2
* c = after n2

Then combine them as `[a, n2, b, n1, c]`.

# Approach
<!-- Describe your approach to solving the problem. -->
Use a trait for an elegant solution.


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::iter::successors;

// // Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//     pub val: i32,
//     pub next: Option<Box<ListNode>>,
// }
//
// impl ListNode {
//     #[inline]
//     fn new(val: i32) -> Self {
//         ListNode { next: None, val }
//     }
// }

trait ExtendedList {
    fn last(&mut self) -> &mut Self;
    fn join(self, b: Self) -> Self;
    fn cut_at(&mut self, k: usize) -> Self;
}

impl ExtendedList for Option<Box<ListNode>> {
    fn last(&mut self) -> &mut Self {
        if self.is_some() {
            self.as_mut().unwrap().next.last()
        } else {
            self
        }
    }
    fn join(mut self, other: Self) -> Self {
        *self.last() = other;
        self
    }
    fn cut_at(&mut self, k: usize) -> Self {
        if k > 0 {
            self.as_mut()?.next.cut_at(k - 1)
        } else {
            self.take()
        }
    }
}

impl Solution {
    pub fn swap_nodes(mut head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let n = successors(head.as_ref(), |node| node.next.as_ref()).count();

        if k == n as i32 + 1 - k {
            return head;
        }

        let (i1, i2) = (k as usize - 1, n - k as usize);
        let (i1, i2) = (i1.min(i2), i1.max(i2));

        let mut a = head;
        let mut n1 = a.cut_at(i1);
        let mut b = n1.cut_at(1);
        let mut n2 = b.cut_at(i2 - i1 - 1);
        let mut c = n2.cut_at(1);

        a.join(n2).join(b).join(n1).join(c)
    }
}


```