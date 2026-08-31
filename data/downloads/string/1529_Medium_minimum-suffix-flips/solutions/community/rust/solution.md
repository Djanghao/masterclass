# Rust - One Pass Solution

**Author:** nuclearoreo
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/761425/](https://leetcode.com/problems/minimum-suffix-flips/solutions/761425/)

---

```rust
impl Solution {
    pub fn min_flips(target: String) -> i32 {
        let (mut flips, mut bit) = (0, '0');
        
        for l in target.chars() {
            if l != bit {
                flips += 1;
                bit = if bit == '0' { '1' } else { '0' }
            }
        }
        
        return flips;
    }
}
```