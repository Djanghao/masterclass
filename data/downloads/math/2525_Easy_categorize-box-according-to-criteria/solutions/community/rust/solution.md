# Rust solution

**Author:** JammyJ0
**Votes:** 1
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3046472/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3046472/)

---

# Code
```
impl Solution {
    pub fn categorize_box(length: i32, width: i32, height: i32, mass: i32) -> String {
        let (mut bulky, mut heavy) = (false, false);

        if length as u64 * width as u64 * height as u64 >= 1_000_000_000
            || length >= 10_000
            || width >= 10_000
            || height >= 10_000
        {
            bulky = true;
        }

        if mass >= 100 {
            heavy = true;
        }

        match (bulky, heavy) {
            (true, false) => "Bulky".to_owned(),
            (false, true) => "Heavy".to_owned(),
            (false, false) => "Neither".to_owned(),
            (true, true) => "Both".to_owned(),
        }
    }
}
```