# [Rust] Very simple recursive & Iterative | "Beats 100%"

**Author:** tmtappr
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5118687/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5118687/)

---

# Intuition
It's easier to deal with the borrow checker using a recursive approach to this problem. Multiple mutable references are allowed if they exist at different levels in the call stack for a recursive function.

A problem with this approach is the execution stack could be eaten up for very long lists; but this doesn't happen with the problem's test suite. The max number of nodes will be $10^5$.

A iterative version of the algorithm is also provided, which has a space-complexity of $O(1)$ auxiliary space.

# Approach
First recursion descends down the linked list to the end, then the default value `0` is returned, which will be lower than any preceeing value. 

The function returns and control returns to the caller. The caller checks its node's value against the returned value. If the returned value is lower or equal, nothing needs to be done. If it's higher, then the current node is overwritten by the next node in the list.

As the stack frames are popped, a decreasing series of nodes is retained.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$ This is counting each stack frame pushed onto the call stack during recursion.


# Code
``` rust
impl Solution {
    pub fn remove_nodes(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        Self::recurse(head.as_mut());
        head
    }
    fn recurse(node: Option<&mut Box<ListNode>>) -> i32 {
        if let Some(node) = node {
            if Self::recurse(node.next.as_mut()) > node.val {
                *node = node.next.take().unwrap();
            }
            node.val
       } else {
            0
       }
    }
}
```
# Iterative version
The iterative version uses the same idea, but does it with less memory, and is actually faster than the recursive version despite the two loops. Keep in mind that the recursive version also visits each node twice.

First the list is put in reverse order, then again it's reversed while retaining nodes that are greater than or equal to the previous node's value.
# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$
# Code
``` rust
impl Solution {
    pub fn remove_nodes(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut hrev = None;
        let mut last = 0;

        // Reverse the list and move to hrev.
        while let Some(mut node) = head {
            head = node.next.take();
            node.next = hrev;
            hrev = Some(node);
        }
        // Reverse hrev, moving nodes with values >= last value to head.
        while let Some(mut node) = hrev {
            hrev = node.next.take();
            if node.val >= last {
                node.next = head;
                last = node.val;
                head = Some(node);
            }
        }
        head
    }
}
```
