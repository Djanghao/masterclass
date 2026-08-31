# [Rust] Solution

**Author:** u3ih
**Votes:** 1
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/1610553/](https://leetcode.com/problems/stream-of-characters/solutions/1610553/)

---

```
use std::collections::HashSet;

struct StreamChecker {
    data: Vec<String>,
    last_char: HashSet<char>,
    word_check: String
}

impl StreamChecker {
    fn new(words: Vec<String>) -> Self {
        let mut temp: HashSet<char> = HashSet::new();
        for word in &words {
            temp.insert(word.chars().nth(word.len()-1).unwrap());
        }
        Self {
            data: words,
            last_char: temp,
            word_check: String::new()
        }
    }
    
    fn query(&mut self, letter: char) -> bool {
        self.word_check.push(letter);
        if self.last_char.contains(&letter) {
            let len_word = self.word_check.len();
            for word in &self.data {
                if word.chars().nth(word.len()-1).unwrap() == letter {
                    let len = word.len();
                    if len > len_word {
                        continue;
                    }
                    let temp_word: String = self.word_check[(len_word-len)..len_word].to_string();
                    if *word == temp_word {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}