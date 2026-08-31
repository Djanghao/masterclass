# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/1563281/](https://leetcode.com/problems/long-pressed-name/solutions/1563281/)

---

```
impl Solution {
    pub fn is_long_pressed_name(name: String, typed: String) -> bool {
        let nb = name.as_bytes();
        let mut i = 0;
        for &b in typed.as_bytes() {
            if i < name.len() && b == nb[i] {
                i += 1;
            } else if b != nb[i.saturating_sub(1)] {
                return false;
            }
        }
        i == name.len()
    }
}
```