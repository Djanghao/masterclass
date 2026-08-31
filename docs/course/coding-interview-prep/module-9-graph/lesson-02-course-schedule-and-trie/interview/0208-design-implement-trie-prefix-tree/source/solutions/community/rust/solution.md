# Rust 4 simple oneline functions using iterators, beats 78%

**Author:** astadnik
**Votes:** 14
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/3306859/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/3306859/)

---

# Code
```
use std::collections::HashMap;

#[derive(Default)]
struct Trie {
    children: HashMap<char, Trie>,
    is_leaf: bool,
}

impl Trie {
    fn new() -> Self {
        Trie::default()
    }

    fn insert(&mut self, word: String) {
        word.chars()
            .fold(self, |node, c| node.children.entry(c).or_default())
            .is_leaf = true;
    }

    fn get(&self, word: String) -> Option<&Trie> {
        word.chars().try_fold(self, |node, c| node.children.get(&c))
    }

    fn search(&self, word: String) -> bool {
        self.get(word).map_or(false, |node| node.is_leaf)
    }

    fn starts_with(&self, prefix: String) -> bool {
        self.get(prefix).is_some()
    }
}


```