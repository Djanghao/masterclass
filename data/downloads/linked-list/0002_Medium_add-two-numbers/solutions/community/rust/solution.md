# Simple Rust solution <0ms, 2.1MB>

**Author:** Qba101
**Votes:** 57
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/469977/](https://leetcode.com/problems/add-two-numbers/solutions/469977/)

---

```rust
impl Solution {
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        match (l1, l2) {
            (None, None) => None,
            (Some(n), None) | (None, Some(n)) => Some(n), 
            (Some(n1), Some(n2)) => {
                let sum = n1.val + n2.val;
                if sum < 10 {
                    Some(Box::new(ListNode {
                        val: sum,
                        next: Solution::add_two_numbers(n1.next, n2.next)
                    }))
                } else {
                    let carry = Some(Box::new(ListNode::new(1)));
                    Some(Box::new(ListNode {
                        val: sum - 10,
                        next: Solution::add_two_numbers(Solution::add_two_numbers(carry, n1.next), n2.next)
                    }))
                }
            }
        }
    }
}
```
It may not be better. But the if sensence can be rephrased as follows.
```
let (rem, carry) = if sum < 10 {
	(sum, None)
} else {
	(sum - 10, Some(Box::new(ListNode::new(1))))
};
Some(Box::new(ListNode {
	val: rem,
	next: Solution::add_two_numbers(Solution::add_two_numbers(n1.next, carry), n2.next)
}))
```