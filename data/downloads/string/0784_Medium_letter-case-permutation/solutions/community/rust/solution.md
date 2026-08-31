# Rust BFS & DFS solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/1068088/](https://leetcode.com/problems/letter-case-permutation/solutions/1068088/)

---

#### BFS solution

```rust
use std::collections::VecDeque;

impl Solution {
    pub fn letter_case_permutation(s: String) -> Vec<String> {
        let mut vd = VecDeque::new();
        vd.push_back(s.clone());
        for (i, c) in s.chars().enumerate() {
            if c.is_ascii_alphabetic() {
                (0..vd.len()).for_each(|_| {
                    if let Some(front) = vd.pop_front() {
                        vd.push_back(
                            front[0..i].to_string()
                                + &c.to_ascii_uppercase().to_string()
                                + &front[i + 1..],
                        );
                        vd.push_back(
                            front[0..i].to_string()
                                + &c.to_ascii_lowercase().to_string()
                                + &front[i + 1..],
                        );
                    }
                });
            }
        }
        vd.into_iter().collect()
    }
}
```

#### DFS backtracking solution

```rust
impl Solution {
    pub fn letter_case_permutation(s: String) -> Vec<String> {
        let mut chars = s.chars().collect::<Vec<_>>();
        let mut answer = Vec::new();
        Self::dfs(&mut chars, &mut answer, 0);
        answer
    }
    fn dfs(chars: &mut [char], answer: &mut Vec<String>, i: usize) {
        if i == chars.len() {
            answer.push(chars.iter().collect());
        } else {
            Self::dfs(chars, answer, i + 1);
            if chars[i].is_alphabetic() {
                chars[i] = ((chars[i] as u8) ^ (1 << 5)) as char;
                Self::dfs(chars, answer, i + 1);
                chars[i] = ((chars[i] as u8) ^ (1 << 5)) as char;
            }
        }
    }
}
```