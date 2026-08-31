# [Rust] One-pass, compress as we go

**Author:** tiedyedvortex
**Votes:** 5
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412109/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412109/)

---

# Intuition
Suppose we didn't have the first 0. Then we can imagine a list as some sequence of numbers, then a 0, then some sequence of numbers, then a zero, etc. ending with a 0.

So, we start off in a state like `curr_node -- next_node -- tail?` By using `Option::take` twice, we can cut and splice into `curr_node -- tail?` and `next_node`.

Then we can consider the value of `next_node`. If it's 0, then we know we're at a breakpoint; so that means we're done with `curr_node`, and can reset to begin with tail (if there is one) or return.

If `next_node.val` is not zero, that means we are still building up the section. So, we can add it to `curr_node.val`.

As it turns out, this works even if we don't ignore the first zero, on account of the 0+anything=anything. So if we sum a list like `0 -- 1 -- 2 -- 0` as `(0+1+2)+0` we get the same answer as `0+(1+2+)+0`.

# Approach
Mutate `head` in-place to avoid new heap allocations.

To keep track of our place, we need a `curr` pointer. This cannot be an owning pointer (because this would drop the list as we advance down it), but we do need to mutate the node through the reference, so it must be an `&mut ListNode`. Additionally, we need to update which node is current, so we need a mutable `&mut ListNode`, and we need to be able to set it to `None` to signal the end of the list, so it should be an `Option<&mut ListNode>`.

By pattern matching with `while let Some` we can have a finite iteration. But, if we just do `while let Some(node) = curr`, we get into borrow checker hell because we're not allowed to reassign `curr` while we are messing about with `curr.val`. To make things easier (at no performance cost) we can use `Option::take`, which sets `curr = None` temporarily while we reconstruct things.

# Complexity
- Time complexity: O(n), we read every node in the list once.

- Space complexity: O(1), we modify the original list in space

# Code
```
impl Solution {
    pub fn merge_nodes(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut curr: Option<&mut ListNode> = head.as_deref_mut();

        while let Some(curr_node) = curr.take() {
            // Cut out next_node from the list
            let Some(mut next_node) = curr_node.next.take() else { return head; };
            let tail = next_node.next.take();
            curr_node.next = tail;
            
            if next_node.val == 0 {
                // Breakpoint, advance curr to the first node after the 0
                curr = curr_node.next.as_deref_mut();
            } else {
                // Sum the value of curr_node and next_node and don't advance
                curr_node.val += next_node.val;
                curr = Some(curr_node);
            }
        }
        head
    }
}
```