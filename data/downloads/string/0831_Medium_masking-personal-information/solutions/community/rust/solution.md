# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/2934077/](https://leetcode.com/problems/masking-personal-information/solutions/2934077/)

---

# Code
```
impl Solution {
    pub fn mask_pii(s: String) -> String {
        if s.contains('@') {
            let s = s.to_lowercase();
            let mut name = s.split('@').next().unwrap().to_string();
            name.replace_range(1..name.len() - 1, "*****");
            name + "@" + s.split('@').last().unwrap()
        } else {
            let num = s.chars().filter(|c| c.is_ascii_digit()).collect::<String>();
            if num.len() == 10 {
                format!("***-***-{}", &num[6..])
            } else if num.len() == 11 {
                format!("+*-***-***-{}", &num[7..])
            } else if num.len() == 12 {
                format!("+**-***-***-{}", &num[8..])
            } else {
                format!("+***-***-***-{}", &num[9..])
            }
        }
    }
}
```