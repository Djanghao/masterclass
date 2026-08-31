# Rust | Trie

**Author:** wallicent
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-squares/solutions/2736772/](https://leetcode.com/problems/word-squares/solutions/2736772/)

---

```
const N_LETTERS: usize = (b'z' - b'a' + 1) as usize;

#[derive(Default)]
struct TrieNode {
    children: [usize; N_LETTERS],
}

struct Trie {
    len: usize,
    nodes: Vec<TrieNode>,
}

impl Trie {
    fn new(len: usize) -> Self {
        Self { len, nodes: vec![TrieNode::default()] }
    }

    fn insert(&mut self, word: &String) {
        let mut i = 0;
        for c in word.bytes().map(|b| (b - b'a') as usize) {
            if self.nodes[i].children[c] == 0 {
                self.nodes[i].children[c] = self.nodes.len();
                self.nodes.push(TrieNode::default());
            }
            i = self.nodes[i].children[c];
        }
    }

    fn dfs(&self, i: usize, d: usize, curr: &mut [u8], mut rez: Vec<Vec<u8>>) -> Vec<Vec<u8>> {
        if d == curr.len() {
            rez.push(curr.to_vec());
        } else {
            for j in 0..N_LETTERS {
                if self.nodes[i].children[j] != 0 {
                    curr[d] = j as u8 + b'a';
                    rez = Self::dfs(&self, self.nodes[i].children[j], d + 1, curr, rez);
                }
            }
        }
        rez
    }

    fn get(&self, prefix: &[u8]) -> Vec<Vec<u8>> {
        let mut i = 0;
        for c in prefix.iter().map(|b| (b - b'a') as usize) {
            if self.nodes[i].children[c] == 0 {
                return vec![];
            }
            i = self.nodes[i].children[c];
        }
        let mut curr = vec![0; self.len];
        for i in 0..prefix.len() {
            curr[i] = prefix[i];
        }
        Self::dfs(&self, i, prefix.len(), &mut curr, vec![])
    }

}

impl Solution {
    fn dfs(trie: &Trie, d: usize, square: &mut [Vec<u8>], mut rez: Vec<Vec<String>>) -> Vec<Vec<String>> {
        if d == square.len() {
            rez.push(square.iter().map(|w| w.iter().map(|c| *c as char).collect::<String>()).collect::<Vec<_>>());
        } else {
            let prefix = (0..d).map(|r| square[r][d]).collect::<Vec<_>>();
            for word in trie.get(&prefix) {
                square[d] = word;
                rez = Self::dfs(trie, d + 1, square, rez);
            }
        }
        rez
    }

    pub fn word_squares(words: Vec<String>) -> Vec<Vec<String>> {
        let n = words[0].len();
        let trie = words.iter().fold(Trie::new(n), |mut trie, w| {
            trie.insert(w);
            trie
        });
        let mut square = vec![vec![0; n]; n];
        Self::dfs(&trie, 0, &mut square, vec![])
    }
}
```