# Use array to map letters

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/4122319/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/4122319/)

---

# Code
```
struct Trie {
    letters: [Option<Box<Trie>>; 26],
    term_count: i32,
    pref_count: i32
}

impl Trie {
    fn new() -> Self {
        Self { letters: Default::default(), term_count: 0, pref_count: 0 }
    }
    
    fn insert(&mut self, word: String) {
        let mut root = self;
        for (i, b) in word.bytes().map(|b| ((b - b'a') as usize, b)) {
            root.pref_count += 1;
            root = root.letters[i].get_or_insert_with(|| Box::new(Trie::new()))
        }
        root.pref_count += 1;
        root.term_count += 1;
    }

    fn get_last_node(&self, word: &str) -> Option<&Trie> {
        let mut root = self;
        for (i, b) in word.bytes().map(|b| ((b - b'a') as usize, b)) {
            root = root.letters[i].as_ref()?;
        }
        Some(root)
    }

    fn count_words_equal_to(&self, word: String) -> i32 {
        self.get_last_node(&word).map(|n| n.term_count).unwrap_or(0)
    }
    
    fn count_words_starting_with(&self, prefix: String) -> i32 {
        self.get_last_node(&prefix).map(|n| n.pref_count).unwrap_or(0)
    }
    
    fn erase(&mut self, word: String) {
        let mut root = self;
        for (i, b) in word.bytes().map(|b| ((b - b'a') as usize, b)) {
            root.pref_count -= 1;
            root = root.letters[i].as_mut().unwrap();
        }
        root.pref_count -= 1;
        root.term_count -= 1;
    }
}
```