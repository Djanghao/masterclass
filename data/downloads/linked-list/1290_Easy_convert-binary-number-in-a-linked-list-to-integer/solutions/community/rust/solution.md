# Rust: 0 ms 2 MB

**Author:** artyom_andreev
**Votes:** 6
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/919049/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/919049/)

---

```rust
pub fn get_decimal_value(head: Option<Box<ListNode>>) -> i32 {
	let mut num = 0;

	let mut curr = &head;
	while let Some(node) = curr {
		num <<= 1;
		num |= node.val;
		curr = &node.next;
	}

	num
}
```