# Rust

**Author:** faalatawi
**Votes:** 4
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/978723/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/978723/)

---

```rust
fn min_partitions(n: String) -> i32 {
        n.chars()
            .max()
            .unwrap()
            .to_digit(10)
            .unwrap() as i32
}
```

Solution 2:
```rust
fn min_partitions(n: String) -> i32 {
     n.chars()
		.map(|c| c.to_digit(10).unwrap() as i32)
		.max()
		.unwrap()  
}
```