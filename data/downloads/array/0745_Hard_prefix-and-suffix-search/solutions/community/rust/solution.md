# Rust Trie solution

**Author:** sugyan
**Votes:** 5
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/1185417/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/1185417/)

---

```rust
#[derive(Default)]
struct Trie {
    index: i32,
    childlen: [Option<Box<Trie>>; 27],
}

struct WordFilter {
    trie: Trie,
}

impl WordFilter {

    fn new(words: Vec<String>) -> Self {
        let mut trie = Trie::default();
        for (i, word) in words.iter().enumerate() {
            let s = String::new() + &word + "{" + &word;
            for j in 0..word.len() {
                let mut node = &mut trie;
                for &b in &s.as_bytes()[j..] {
                    node = node.childlen[(b - b'a') as usize].get_or_insert_with(Default::default);
                    node.index = i as i32;
                }
            }
        }
        Self { trie }
    }
    
    fn f(&self, prefix: String, suffix: String) -> i32 {
        let mut node = &self.trie;
        let s = String::new() + &suffix + "{" + &prefix;
        for &b in s.as_bytes() {
            if let Some(n) = &node.childlen[(b - b'a') as usize] {
                node = n.as_ref();
            } else {
                return -1;
            }
        }
        node.index
    }
}
```