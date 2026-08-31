# DFS Rust

**Author:** Altidias
**Votes:** 0
**Link:** [https://leetcode.com/problems/zuma-game/solutions/3305660/](https://leetcode.com/problems/zuma-game/solutions/3305660/)

---

Example rust solution ported from someone elses c++ code with a few changes

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn find_min_step(board: String, hand: String) -> i32 {
        let mut freq = vec![0; 26];
        for c in hand.chars() {
            freq[(c as u8 - b'A') as usize] += 1;
        }
        let mut cache = HashMap::new();
        dfs(board, &mut freq, &mut cache)
    }
}

fn dfs(board: String, freq: &mut Vec<usize>, cache: &mut HashMap<String, i32>) -> i32 {
    let key = format!("{}#{}", board, serialize(freq));
    if let Some(&cached) = cache.get(&key) {
        return cached;
    }
    let mut r = i32::MAX;
    if board.is_empty() {
        r = 0;
    } else {
        for i in 0..board.len() {
            for j in 0..freq.len() {
                let worth_trying = if (board.as_bytes()[i] - b'A') as usize == j {
                    true
                } else if i > 0 && board.as_bytes()[i] == board.as_bytes()[i - 1] && (board.as_bytes()[i] - b'A') as usize != j {
                    true
                } else {
                    false
                };

                if freq[j] > 0 && worth_trying {
                    freq[j] -= 1;
                    let mut new_board = board.clone();
                    new_board.insert(i, (j as u8 + b'A') as char);
                    let new_str = update_board(&new_board);
                    let steps = dfs(new_str, freq, cache);
                    if steps != -1 {
                        r = r.min(steps + 1);
                    }
                    freq[j] += 1;
                }
            }
        }
    }
    if r == i32::MAX {
        r = -1;
    }
    cache.insert(key, r);
    r
}

fn update_board(board: &str) -> String {
    let mut start = 0;
    let mut end = 0;
    let board_len = board.len();
    while start < board_len {
        while end < board_len && board.as_bytes()[start] == board.as_bytes()[end] {
            end += 1;
        }
        if end - start >= 3 {
            let new_board = format!("{}{}", &board[..start], &board[end..]);
            return update_board(&new_board);
        } else {
            start = end;
        }
    }
    board.to_string()
}

fn serialize(freq: &Vec<usize>) -> String {
    let mut key = String::new();
    for (i, &count) in freq.iter().enumerate() {
        if count > 0 {
            key.push((i as u8 + b'A') as char);
            key.push_str(&count.to_string());
        }
    }
    key
}
```