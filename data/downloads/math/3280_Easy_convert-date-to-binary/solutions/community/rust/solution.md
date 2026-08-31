# Rust solution

**Author:** rtunik
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/6030433/](https://leetcode.com/problems/convert-date-to-binary/solutions/6030433/)

---

# Code
```rust []
impl Solution {
    pub fn convert_date_to_binary(date: String) -> String {
        let v: Vec<&str> = date.split('-').collect();
        
        let year = v[0].parse::<i32>().unwrap();
        let month = v[1].parse::<i32>().unwrap();
        let day = v[2].parse::<i32>().unwrap();
        
        
        format!("{year:b}-{month:b}-{day:b}")
    }
}
```