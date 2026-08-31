# [Rust] 0ms, beats 100%, easy to understand.

**Author:** apostolovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5013925/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5013925/)

---

# Intuition
We traverse through input preorder and do next steps:
- if current node is smaller then top of the stack, we consider it as `LEFT` child, so we "visit" it, and put it to stack.
- once we encounter node bigger then the first on the stack, we pop all nodes smaller then that one (going back up to parents). Once we pop everything that is smaller, then we put that node to the stack (that is `RIGHT` node of last poped node from the stack).
- while poping from the stack, we keep track of maximum number in that subtree that we visited, so if later we encouter smaller element than that tracked maximum, we know preorder sequence is wrong, since that smaller number should be in the LEFT part of the already visited BFS.

# Code
```
use std::collections::VecDeque;

impl Solution {
    pub fn verify_preorder(preorder: Vec<i32>) -> bool {
        let mut lookup = VecDeque::new();
        let mut max_until_now = i32::MIN;
        lookup.push_back(preorder[0]);

        for node in preorder.iter().skip(1) {
            while !lookup.is_empty() && lookup.back().unwrap() < node {
                let back = lookup.pop_back().unwrap();
                max_until_now = max_until_now.max(back);
            }
            if *node < max_until_now {
                return false;
            }
            lookup.push_back(*node);
        }
        true
    }
}
```