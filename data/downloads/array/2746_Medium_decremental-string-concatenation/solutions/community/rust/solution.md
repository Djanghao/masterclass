# 1 st Rust Solution : [ 56 ms Beats 100.00% | Memory 5.35 MB Beats 100.00% ]

**Author:** K11E3R
**Votes:** 0
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/5456742/](https://leetcode.com/problems/decremental-string-concatenation/solutions/5456742/)

---

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn minimize_concatenated_length(words: Vec<String>) -> i32 {
        let mut memo: HashMap<(usize, char, char), i32> = HashMap::new();
        let n = words.len();
        
        fn dfs(i: usize, a: char, b: char, words: &Vec<String>, memo: &mut HashMap<(usize, char, char), i32>) -> i32 {
            if i >= words.len() {
                return 0;
            }
            if let Some(&result) = memo.get(&(i, a, b)) {
                return result;
            }
            let s = &words[i];
            let x = dfs(i + 1, a, s.chars().last().unwrap(), words, memo) - if s.chars().next().unwrap() == b { 1 } else { 0 };
            let y = dfs(i + 1, s.chars().next().unwrap(), b, words, memo) - if s.chars().last().unwrap() == a { 1 } else { 0 };
            let result = s.len() as i32 + x.min(y);
            memo.insert((i, a, b), result);
            result
        }
        
        let first_word = &words[0];
        let initial_result = first_word.len() as i32 + dfs(1, first_word.chars().next().unwrap(), first_word.chars().last().unwrap(), &words, &mut memo);
        
        initial_result
    }
}

```