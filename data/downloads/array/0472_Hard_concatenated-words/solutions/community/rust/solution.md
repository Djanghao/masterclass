# Rust Trie solution

**Author:** ydash
**Votes:** 1
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/3105376/](https://leetcode.com/problems/concatenated-words/solutions/3105376/)

---

# Intuition
Build trie from `words` and check each word if its concatenated word or not by using backtracking.

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn find_all_concatenated_words_in_a_dict(words: Vec<String>) -> Vec<String> {
        let mut trie = Trie::new();
        for w in words.iter() {
            trie.add(w);
        }
        fn back_tracking(rest: &[u8], count: i32, trie: &Trie) -> bool {
            if rest.is_empty() {
                count >= 2
            } else {
                for i in trie.find_term_indices(rest) {
                    if back_tracking(&rest[i + 1..], count + 1, trie) {
                        return true;
                    }
                }
                false
            }
        }
        words
            .into_iter()
            .filter(|s| back_tracking(s.as_bytes(), 0, &trie))
            .collect()
    }
}

struct Trie {
    children: HashMap<u8, Trie>,
    is_term: bool,
}

impl Trie {
    fn new() -> Self {
        Trie {
            children: HashMap::new(),
            is_term: false,
        }
    }

    fn add(&mut self, s: &str) {
        let mut current = self;
        for &b in s.as_bytes() {
            let child = current.children.entry(b).or_insert(Self::new());
            current = child;
        }
        current.is_term = true;
    }

    fn find_term_indices(&self, target: &[u8]) -> Vec<usize> {
        let mut indices = vec![];
        let mut current = self;
        for (i, b) in target.iter().enumerate() {
            match current.children.get(b) {
                Some(child) => {
                    if child.is_term {
                        indices.push(i);
                    }
                    current = child;
                }
                None => break,
            }
        }
        indices
    }
}
```