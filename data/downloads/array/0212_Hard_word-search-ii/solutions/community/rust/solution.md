# Rust Trie DFS solution

**Author:** sugyan
**Votes:** 5
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/712977/](https://leetcode.com/problems/word-search-ii/solutions/712977/)

---

```rust
use std::collections::HashSet;

#[derive(Default)]
struct Trie {
    children: [Option<Box<Trie>>; 26],
    word: Option<String>,
}

impl Solution {
    pub fn find_words(board: Vec<Vec<char>>, words: Vec<String>) -> Vec<String> {
        let mut trie: Trie = Default::default();
        for word in words.iter() {
            let mut node = &mut trie;
            for c in word.as_bytes() {
                node =
                    node.children[(c - b'a') as usize].get_or_insert(Box::new(Default::default()));
            }
            node.word = Some(word.clone());
        }
        let mut answer: HashSet<String> = HashSet::new();
        for i in 0..board.len() {
            for j in 0..board[0].len() {
                let mut visited: Vec<Vec<bool>> = vec![vec![false; board[0].len()]; board.len()];
                Solution::dfs(&board, (i, j), &trie, &mut visited, &mut answer);
            }
        }
        answer.into_iter().collect()
    }
    fn dfs(
        board: &[Vec<char>],
        pos: (usize, usize),
        trie: &Trie,
        visited: &mut Vec<Vec<bool>>,
        answer: &mut HashSet<String>,
    ) {
        if visited[pos.0][pos.1] {
            return;
        }
        visited[pos.0][pos.1] = true;
        let c = board[pos.0][pos.1];
        if let Some(node) = &trie.children[(c as u8 - b'a') as usize] {
            if let Some(word) = &node.word {
                answer.insert(word.clone());
            }
            if pos.0 > 0 {
                Solution::dfs(board, (pos.0 - 1, pos.1), node.as_ref(), visited, answer);
            }
            if pos.1 > 0 {
                Solution::dfs(board, (pos.0, pos.1 - 1), node.as_ref(), visited, answer);
            }
            if pos.0 < board.len() - 1 {
                Solution::dfs(board, (pos.0 + 1, pos.1), node.as_ref(), visited, answer);
            }
            if pos.1 < board[0].len() - 1 {
                Solution::dfs(board, (pos.0, pos.1 + 1), node.as_ref(), visited, answer);
            }
        }
        visited[pos.0][pos.1] = false;
    }
}
```

Updated:

```rust
#[derive(Default)]
struct Trie {
    children: [Option<Box<Trie>>; 26],
    is_end: bool,
}

impl Solution {
    pub fn find_words(board: Vec<Vec<char>>, words: Vec<String>) -> Vec<String> {
        let mut trie = Trie::default();
        for word in &words {
            let mut node = &mut trie;
            for u in word.bytes() {
                node = node.children[(u - b'a') as usize].get_or_insert(Default::default());
            }
            node.is_end = true;
        }
        let mut board = board;
        let mut answer = Vec::new();
        for i in 0..board.len() {
            for j in 0..board[0].len() {
                Self::backtrack(
                    &mut board,
                    &mut trie,
                    (i, j),
                    &mut String::new(),
                    &mut answer,
                );
            }
        }
        answer
    }
    fn backtrack(
        board: &mut Vec<Vec<char>>,
        trie: &mut Trie,
        pos: (usize, usize),
        s: &mut String,
        answer: &mut Vec<String>,
    ) {
        let c = board[pos.0][pos.1];
        if let Some(node) = &mut trie.children[(c as u8 - b'a') as usize] {
            s.push(c);
            if node.is_end {
                answer.push(s.clone());
                node.is_end = false;
            }
            board[pos.0][pos.1] = '*';
            for d in [0, 1, 0, !0, 0].windows(2) {
                let i = pos.0.wrapping_add(d[0]);
                let j = pos.1.wrapping_add(d[1]);
                if (0..board.len()).contains(&i)
                    && (0..board[0].len()).contains(&j)
                    && board[i][j] != '*'
                {
                    Self::backtrack(board, node, (i, j), s, answer);
                }
            }
            board[pos.0][pos.1] = c;
            s.pop();
        }
    }
}
```