# Rust: backtracking solution

**Author:** 16yuki0702
**Votes:** 13
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/925723/](https://leetcode.com/problems/generate-parentheses/solutions/925723/)

---

Runtime: 0 ms, faster than 100.00% of Rust online submissions for Generate Parentheses.
Memory Usage: 2.4 MB, less than 100.00% of Rust online submissions for Generate Parentheses.
```
impl Solution {
    pub fn generate_parenthesis(n: i32) -> Vec<String> {
        fn back_track(s: String, open: i32, close: i32) -> Vec<String> {
            let mut res = vec![];
            if open == 0 && close == 0 {
                return vec![s];
            }
            if open > 0 {
                res.append(&mut back_track(s.clone()+"(", open-1, close+1));
            }
            if close > 0 {
                res.append(&mut back_track(s.clone()+")", open, close-1));
            }
            res
        }
        back_track("".to_string(), n, 0)
    }
}
```