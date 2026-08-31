# Rust 0ms | t=O(n) s=O(1) | Neat FSA using enum, match, fold

**Author:** igxactly
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1581451/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1581451/)

---


```rust
#![allow(unused)]

struct Solution {}

impl Solution {
    pub fn count_valid_words(sentense: String) -> i32 {
        sentense
            .split_whitespace()
            .filter(|s| is_word_valid(s))
            .count() as i32
    }
}

fn is_word_valid(s: &str) -> bool {
    let final_state = s
        .chars()
        .fold(State::Start, |state, c| state.do_transition(c));
    match final_state {
        State::Alpha1 | State::Alpha2 | State::Puctuation => true,
        _ => false,
    }
}

enum State {
    Start,
    Alpha1,
    Hypen,
    Alpha2,
    Puctuation,
    Failed,
}

impl State {
    fn do_transition(&self, c: char) -> State {
        match self {
            State::Start => match c {
                'a'..='z' => State::Alpha1,
                '!' | ',' | '.' => State::Puctuation,
                _ => State::Failed,
            },
            State::Alpha1 => match c {
                'a'..='z' => State::Alpha1,
                '-' => State::Hypen,
                '!' | ',' | '.' => State::Puctuation,
                _ => State::Failed,
            },
            State::Hypen => match c {
                'a'..='z' => State::Alpha2,
                _ => State::Failed,
            },
            State::Alpha2 => match c {
                'a'..='z' => State::Alpha2,
                '!' | ',' | '.' => State::Puctuation,
                _ => State::Failed,
            },
            State::Puctuation => match c {
                _ => State::Failed,
            },
            _ => State::Failed,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn count_valid_words_typical() {
        let s = String::from("cat and  dog");
        assert_eq!(3, Solution::count_valid_words(s));

        let s = String::from("!this  1-s b8d!");
        assert_eq!(0, Solution::count_valid_words(s));

        let s = String::from("alice and  bob are playing stone-game10");
        assert_eq!(5, Solution::count_valid_words(s));

        let s = String::from("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.");
        assert_eq!(6, Solution::count_valid_words(s));
    }
}
```