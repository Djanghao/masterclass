# Rust solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/1954741/](https://leetcode.com/problems/valid-perfect-square/solutions/1954741/)

---

```
impl Solution {
    pub fn is_perfect_square(num: i32) -> bool {
        use std::cmp::Ordering;
        let (mut low, mut high) = (1, num);
        while low <= high {
            let mid = low + (high - low) / 2;
            match mid.checked_mul(mid) {
                Some(square) => match square.cmp(&num) {
                    Ordering::Equal => return true,
                    Ordering::Less => low = mid + 1,
                    Ordering::Greater => high = mid - 1,
                },
                None => high = mid - 1,
            }
        }
        false
    }
}
```