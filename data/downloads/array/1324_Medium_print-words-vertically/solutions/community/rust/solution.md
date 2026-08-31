# Rust | 0ms | 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/5389618/](https://leetcode.com/problems/print-words-vertically/solutions/5389618/)

---

# Complexity
- Time complexity: $$O(words * max\\_word\\_length)$$

- Space complexity: $$O(words * max\\_word\\_length)$$

# Code
```
impl Solution {
    pub fn print_vertically(s: String) -> Vec<String> {
        let mut words = s.split(" ").collect::<Vec<_>>();
        let max_len = words.iter().map(|w| w.len()).max().unwrap();
        let mut ans = vec![String::with_capacity(words.len()); max_len];
        for word in words.iter() {
            for i in 0..max_len {
                if i < word.len() {
                    ans[i].push_str(&word[i..i+1]);
                } else {
                    ans[i].push(' ');
                }
            }
        }
        for i in 0..max_len {
            ans[i] = String::from(ans[i].trim_end());
        }
        ans
    }
}
```