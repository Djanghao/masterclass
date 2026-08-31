# Rust Solution

**Author:** silradius
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/2087950/](https://leetcode.com/problems/apply-discount-to-prices/solutions/2087950/)

---

Well that's why i hate cpp.

```
impl Solution {
    pub fn discount_prices(sentence: String, discount: i32) -> String {
        let mut res = sentence.split(' ').fold(String::from(""), |acc, s| format!("{}{} ", acc,
            if s.chars().next() == Some('$') {
                if let Ok(price) = &s[1..].parse::<f64>() {
                    format!("${:.2}", price * (1.0 - (discount as f64) / 100.0))
                } else {
                    s.to_string()
                }
            } else {
                s.to_string()
            }
        ));
        
        res.pop();
        res
    }
}
```