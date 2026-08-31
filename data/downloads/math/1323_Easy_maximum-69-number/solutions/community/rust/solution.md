# Rust solution

**Author:** ferhen
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/496368/](https://leetcode.com/problems/maximum-69-number/solutions/496368/)

---

```    
pub fn maximum69_number (num: i32) -> i32 {
	num.to_string().replacen("6", "9", 1).parse().unwrap()
}