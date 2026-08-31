# rust solution

**Author:** FuNn1esT
**Votes:** 5
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/657154/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/657154/)

---

```rs
impl Solution {
    pub fn balanced_string_split(s: String) -> i32 {
        let mut left_count = 0;
        s.chars().fold(0, |all, x| {
            left_count += if x == 'L' { 1 } else { -1 };
            if left_count == 0 {
                return all + 1;
            }
            all
        })
    }
}
```