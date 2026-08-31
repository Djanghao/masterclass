# Rust 0ms

**Author:** jaoeding
**Votes:** 5
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1477678/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1477678/)

---

```
pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
	operations
		.iter()
		.fold(0, |acc, op| {
			if op.contains("+") { acc + 1 } else { acc - 1 }
		})
}
```