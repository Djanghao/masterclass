# Rust | 0ms Faster than 100% | Recursive solution with backtracking | No cloning

**Author:** alex-graham
**Votes:** 18
**Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1658772/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1658772/)

---

I want to make a shout out to the online booklet [Learn Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) -- it's a good way to learn how to use Rust's built-in tools to massage code to satisfy the borrow chcker. It provides a nice exlaination for using `mem::replace`, when to use it, and `Option's` helpful `take()` function.


```
impl Solution {
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        remove_nth_from_end_recr(head, n).0
    }
}
    
fn remove_nth_from_end_recr(head: Option<Box<ListNode>>, n: i32) -> (Option<Box<ListNode>>, usize) {
    match head {
        None => (None, 1),
        Some(mut node) => {
            let (prev, num) = remove_nth_from_end_recr(node.next.take(), n);
            if n == num as i32 {
                (prev, num+1)
            } else {
                node.next = prev;
                (Some(node), num+1)
            }
        }
    }
}
```


```
Runtime: 0 ms, faster than 100.00% of Rust online submissions for Remove Nth Node From End of List.
Memory Usage: 2.1 MB, less than 37.35% of Rust online submissions for Remove Nth Node From End of List.
```
