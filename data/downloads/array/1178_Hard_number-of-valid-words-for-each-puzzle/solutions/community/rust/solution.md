# [Rust] Trie based solution - 80ms

**Author:** keep_of_kalessin
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1529703/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1529703/)

---


```rust
use std::collections::HashMap;

pub fn find_num_of_valid_words<W: AsRef<str>>(words: Vec<W>, puzzles: Vec<W>) -> Vec<i32> {
    let mut trie = Node::default();

    // Use a single, pre-allocated buffer in order to avoid wasting time in
    // (de)allocating temporary buffers
    let mut buffer = Vec::with_capacity(50);

    // Sort and deduplicate each word, then add it to the trie
    for word in words.iter().map(|w| w.as_ref()) {
        buffer.clear();
        buffer.extend_from_slice(word.as_bytes());
        buffer.sort_unstable();
        buffer.dedup();

        // Given that the max puzzle length is 7, if the word contains more
        // than 7 unique characters, then it cannot be a valid puzzle word
        if buffer.len() <= 7 {
            trie.insert(buffer.as_slice());
        }
    }

    // We can preallocate the result vector, because we know exactly
    // how many elements we need
    let mut result = Vec::with_capacity(puzzles.len());

    // We need to sort the puzzle input in order to reduce the number of
    // searches later
    for puzzle in puzzles.iter().map(|w| w.as_ref()) {
        buffer.clear();
        buffer.extend_from_slice(puzzle.as_bytes());
        buffer.sort_unstable();

        let first_char = puzzle.as_bytes()[0];
        let num_words = trie.matches(&buffer, first_char);
        result.push(num_words)
    }

    result
}

#[derive(Default)]
struct Node {
    nodes: HashMap<u8, Node>,

    // Track how many words end here. For instance after
    // sorting & deduplication any of "abc", "cba" and
    // "acb".. etc will end here, and we must count all
    // of them
    words: i32,
}

impl Node {
    pub fn insert<W: AsRef<[u8]>>(&mut self, word: W) {
        let word = word.as_ref();

        let mut node = self;
        for &ch in word.iter() {
            node = node.nodes.entry(ch).or_default();
        }
        node.words += 1;
    }

    pub fn matches<W: AsRef<[u8]>>(&self, word: W, mark: u8) -> i32 {
        let mut word = word.as_ref();
        dfs(self, mark, word)
    }
}

fn dfs(mut node: &Node, first: u8, word: &[u8]) -> i32 {
    let mut count = 0;

    // The current word contains the first character of the puzzle word, so we
    // need to add its word counter to the total count. If `first` != 0, then
    // the current word does not contain the first character of the puzzle, thus
    // we must ignore its word counter
    if first == 0 {
        count += node.words;
    }

    for (idx, ch) in word.iter().enumerate() {
        // Because the puzzle word is sorted, if the current character (i.e. `ch`)
        // is larger than the required first character, then we can `break` out of
        // the loop because it will not appear anywhere in the trie
        if first != 0 && *ch > first {
            break;
        }

        match node.nodes.get(ch) {
            None => continue,
            Some(n) => {
                // We need to use a local variable, because if `*ch == first`
                // for the current iteration of the loop, that will not be
                // true for the next iteration!
                let mut contains_first = first;
                if *ch == contains_first {
                    contains_first = 0;
                }

                // Given that we use sorted puzzles as input, we can safely
                // skip all processed characters (idx + 1), as they will be
                // "less" than the current character,thus they cannot appear
                // in the trie at that point, and thus we can greatly reduce
                // the number of search operations (`hashmap.get()`)
                count += dfs(n, contains_first, &word[idx + 1..]);
            }
        }
    }

    count
}
```

The implementation can be made faster by using a faster Hasher, because the default one is pretty slow