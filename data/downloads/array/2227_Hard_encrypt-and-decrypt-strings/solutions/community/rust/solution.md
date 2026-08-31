# Rust solution

**Author:** io80686
**Votes:** 0
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/4018573/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/4018573/)

---

# Code
```
use std::collections::HashMap;

struct Encrypter {
    map: HashMap<char, String>,
    dictionary: HashMap<String, i32>,
}

impl Encrypter {
    fn new(keys: Vec<char>, values: Vec<String>, dictionary: Vec<String>) -> Self {
        let map: HashMap<char, String> = keys.into_iter().zip(values.into_iter()).collect();
        let mut ret = Self { map, dictionary: HashMap::new() };

        ret.dictionary = dictionary.into_iter().fold(HashMap::new(), |mut dict, word| {
            let word = ret.encrypt(word);
            if !word.is_empty() {
                dict.entry(word).and_modify(|e| *e += 1).or_insert(1);
            }
            dict
        });
        ret
    }

    fn encrypt(&self, word1: String) -> String {
        let mut ret = String::new();
        for c in word1.chars() {
            if let Some(s) = self.map.get(&c) {
                ret.push_str(s.as_str());
            } else {
                return String::new();
            }
        }
        ret
    }

    fn decrypt(&self, word2: String) -> i32 { self.dictionary.get(&word2).cloned().unwrap_or(0) }
}
```