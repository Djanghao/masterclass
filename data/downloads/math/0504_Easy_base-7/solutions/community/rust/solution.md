# Rust solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/base-7/solutions/1829081/](https://leetcode.com/problems/base-7/solutions/1829081/)

---

```
impl Solution {
    pub fn convert_to_base7(mut num: i32) -> String {
        let (mut res, mut base) = (0, 1);
        while num != 0 {
            res += base * (num % 7);
            base *= 10;
            num /= 7;
        }
        res.to_string()
    }
}
```