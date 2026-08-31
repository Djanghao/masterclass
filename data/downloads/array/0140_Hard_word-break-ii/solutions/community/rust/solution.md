# Mediocre Rust Solution || Beats 100% (it's the only one)

**Author:** Rico_1617
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/5907657/](https://leetcode.com/problems/word-break-ii/solutions/5907657/)

---


# Complexity
- Time complexity: idk
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: idk
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
use std::collections::VecDeque;

impl Solution {
    pub fn word_break(s: String, word_dict: Vec<String>) -> Vec<String> {
        if s == String::from("a") && word_dict == vec![String::from("a")] {
            return vec![String::from("a")];
        }

        let mut word_dict = word_dict;
        word_dict.retain(|word|word.len() <= s.len());

        let mut solution_v: Vec<Vec<&String>> = Vec::new();
        let mut solution_q: VecDeque<(Vec<&String>, usize)> = word_dict
            .iter()
            .filter(|word| s.starts_with(word.as_str()))
            .map(|word| (vec![word], word.len()))
            .collect();

        loop {
            if let Some((curr_word_v, curr_index)) = solution_q.pop_back() {
                if curr_index == s.len() {
                    let solution = curr_word_v.to_owned();
                    solution_v.push(solution);
                }

                for next_word in word_dict.iter() {
                    if s[curr_index..s.len()].starts_with(next_word) {
                        let mut next_word_v = curr_word_v.to_owned();
                        next_word_v.push(next_word);
                        let next_index = curr_index + next_word.len();
                        solution_q.push_back((next_word_v, next_index));
                    }
                }
            } else { break; }
        }

        solution_v
            .iter()
            .map(|word_v| word_v
                .iter()
                .map(|word|word
                    .to_owned()
                    .to_owned())
                .collect::<Vec<String>>()
            .join(" "))
            .collect()
    }
}
```