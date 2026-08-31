# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-binary-string/solutions/2912953/](https://leetcode.com/problems/special-binary-string/solutions/2912953/)

---

# Code
```
impl Solution {
    pub fn make_largest_special(s: String) -> String {
        let mut count = 0;
        let mut i = 0;
        let mut res = vec![];

        for (j, c) in s.chars().enumerate() {
            if c == '1' {
                count += 1;
            } else {
                count -= 1;
            }

            if count == 0 {
                res.push(format!("1{}0", Solution::make_largest_special(s[i + 1..j].to_string())));
                i = j + 1;
            }
        }

        res.sort_by(|a, b| b.cmp(a));
        res.join("")
    }
}
```