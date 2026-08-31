# For a rustacean using Iterator and String methods, this one is just transcribing the problem

**Author:** jkoudys
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5747772/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5747772/)

---

# Intuition
Doesn't require any thought.

# Approach
I read the problem description and almost directly transposed it to code.

For each character c in s
```rust
s.chars()
```
(in a cyclic manner).
```rust
.cycle()
```

replace c with the kth character after c in the string
```rust
.skip(k as usize)
.take(s.len())
```


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```rust []
impl Solution {
    pub fn get_encrypted_string(s: String, k: i32) -> String {
        s.chars()
            .cycle()
            .skip(k as usize)
            .take(s.len())
            .collect()
    }
}
```