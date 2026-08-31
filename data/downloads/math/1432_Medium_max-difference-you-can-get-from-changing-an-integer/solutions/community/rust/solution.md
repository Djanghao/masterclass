# Easy rust solution | beats 100%

**Author:** RustEnthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/4821973/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/4821973/)

---

# Code
```
impl Solution {
    pub fn max_diff(num: i32) -> i32 {
        let min_char_to_replace = |s: String| {
            let c0 = s.chars().nth(0).unwrap();
            for (i, c) in s.chars().enumerate() {
                if c != '1' && c != '0' && c != c0 {
                    return (c, "0");
                } else if c != '1' && c != '0' {
                    return (c, "1");
                }
            }
            (c0, "1")
        };
        let max_char_to_replace = |s: String| {
            for c in s.chars() {
                if c != '9' {
                    return (c, "9");
                }
            }
            ('9', "9")
        };
        let num_s = num.to_string();
        let replace_min = min_char_to_replace(num_s.clone());
        let replace_max = max_char_to_replace(num_s.clone());
        let max = num_s.clone().replace(replace_max.0, replace_max.1);
        let min = num_s.clone().replace(replace_min.0, replace_min.1);
        max.parse::<i32>().unwrap() - min.parse::<i32>().unwrap()
    }
}
```