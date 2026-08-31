# Rust | Simple chunks correction

**Author:** garciparedes
**Votes:** 3
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/992817/](https://leetcode.com/problems/reformat-phone-number/solutions/992817/)

---

```
impl Solution {
    pub fn reformat_number(number: String) -> String {
        let digits: Vec<_> = number.chars().filter(|c| c.is_digit(10)).collect();
        
        let mut chunked: Vec<_> = digits.chunks(3).map(|group| group.to_vec()).collect();
        
        let n = chunked.len();
        if chunked[n - 1].len() == 1 {
            let tmp = chunked[n - 2].pop().unwrap();
            chunked[n -1].insert(0, tmp);
        }
        
        return chunked
            .into_iter()
            .map(|group| group.into_iter().collect::<String>())
            .collect::<Vec<_>>()
            .join("-");
    }
}
```