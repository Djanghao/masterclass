# Rust solution

**Author:** BigMih
**Votes:** 28
**Link:** [https://leetcode.com/problems/plus-one/solutions/1322882/](https://leetcode.com/problems/plus-one/solutions/1322882/)

---

```
impl Solution {
    pub fn plus_one(mut digits: Vec<i32>) -> Vec<i32> {
        for x in digits.iter_mut().rev() {
            match *x == 9 {
                true => *x = 0,
                false => {
                    *x += 1;
                    return digits;
                }
            }
        }
        digits.insert(0, 1);
        digits
    }
}
```