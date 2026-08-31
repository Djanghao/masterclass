# Rust | DFS & BFS, beats 100%

**Author:** zjxy
**Votes:** 0
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/5173029/](https://leetcode.com/problems/alien-dictionary/solutions/5173029/)

---

# DFS
```
use std::collections::{HashMap};
use std::cmp::min;
impl Solution {
    pub fn alien_order(words: Vec<String>) -> String {
        let mut rev_adj_list: HashMap<char, Vec<char>> = HashMap::new();

        for word in words.iter() {
            word.chars().for_each(|c| {
                rev_adj_list.entry(c).or_insert(vec![]);
            });
        }

        for i in 0..words.len() - 1 {
            let w_chars: Vec<char> = words[i].chars().collect();
            let w2_chars: Vec<char> = words[i + 1].chars().collect();

            // Check that word2 is not a prefix of word1.
            if w_chars.len() > w2_chars.len() && w_chars.starts_with(&w2_chars) {
                return String::new();
            }

            for j in 0..min(w_chars.len(), w2_chars.len()) {
                if w_chars[j] != w2_chars[j] {
                    rev_adj_list
                        .entry(w2_chars[j])
                        .and_modify(|adj| adj.push(w_chars[j]));
                    break;
                }
            }
        }

        let mut seen = HashMap::new();
        let mut order = String::new();

        // Step 2: DFS to build up the output list.
        for c in rev_adj_list.keys() {
            if !Self::dfs(*c, &rev_adj_list, &mut seen, &mut order) {
                return String::new();
            }
        }

        order
    }

    pub fn dfs(
        c: char,
        rev_adj_list: &HashMap<char, Vec<char>>,
        seen: &mut HashMap<char, bool>,
        output: &mut String,
    ) -> bool {
        if let Some(node) = seen.get(&c) {
            // If this node was false, a cycle was detected.
            return *node;
        }
        seen.insert(c, false);
        for next in rev_adj_list.get(&c).unwrap() {
            if !Self::dfs(*next, rev_adj_list, seen, output) {
                return false;
            }
        }
        seen.insert(c, true);
        output.push(c);
        true
    }
}
```

# BFS
```
use std::collections::{HashMap, VecDeque};
use std::cmp::min;
impl Solution {
    pub fn alien_order(words: Vec<String>) -> String {
        let mut rev_adj_list: HashMap<char, Vec<char>> = HashMap::new();
        let mut counts: HashMap<char, usize> = HashMap::new();
        for word in words.iter() {
            word.chars().for_each(|c| {
                rev_adj_list.entry(c).or_insert(vec![]);
                counts.insert(c, 0);
            });
        }

        for i in 0..words.len() - 1 {
            let w_chars: Vec<char> = words[i].chars().collect();
            let w2_chars: Vec<char> = words[i + 1].chars().collect();

            // Check that word2 is not a prefix of word1.
            if w_chars.len() > w2_chars.len() && w_chars.starts_with(&w2_chars) {
                return String::new();
            }

            for j in 0..min(w_chars.len(), w2_chars.len()) {
                if w_chars[j] != w2_chars[j] {
                    rev_adj_list
                        .entry(w_chars[j])
                        .and_modify(|adj| adj.push(w2_chars[j]));
                    counts.entry(w2_chars[j]).and_modify(|v| *v += 1);
                    break;
                }
            }
        }

        let mut order = String::new();
        let mut q = VecDeque::new();

        // Collect keys with 0 in-degrees
        let zero_in_degree: Vec<char> = counts
            .iter()
            .filter_map(|(&c, &count)| if count == 0 { Some(c) } else { None })
            .collect();

        // Step 2: Breadth-first search.
        for c in zero_in_degree {
            q.push_back(c);
        }

        while let Some(ch) = q.pop_front() {
            order.push(ch);

            for next in rev_adj_list.get(&ch).unwrap() {
                let v = counts.get_mut(next).unwrap();
                *v -= 1;
                if *v == 0 {
                    q.push_back(*next);
                }
            }
        }

        if order.len() < counts.len() {
            return String::new();
        }

        order
    }
}
```