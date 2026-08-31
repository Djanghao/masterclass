# Rust recursive solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/1427546/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/1427546/)

---

```rust
impl Solution {
    pub fn is_valid_serialization(preorder: String) -> bool {
        let mut iter = preorder.split(',').map(|s| s != "#");
        Self::dfs(&mut iter) && iter.next().is_none()
    }
    fn dfs(iter: &mut impl std::iter::Iterator<Item = bool>) -> bool {
        if let Some(b) = iter.next() {
            if b {
                if !Self::dfs(iter) {
                    return false;
                }
                if !Self::dfs(iter) {
                    return false;
                }
            }
            true
        } else {
            false
        }
    }
}
```