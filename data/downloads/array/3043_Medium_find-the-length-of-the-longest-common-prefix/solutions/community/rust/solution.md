# Beginner-level  Rust  on Trie

**Author:** casualcow
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5826019/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5826019/)

---

# Intuition


# Approach


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
use std::collections::HashMap;

#[derive(Default, Debug)]
struct TrieNode {
    children: HashMap<char, TrieNode>,
}

#[derive(Default, Debug)]
pub struct Trie {
    root: TrieNode,
}
impl Trie {
    pub fn new() -> Self {
        Trie {
            root: TrieNode::default(),
        }
    }

    pub fn insert(&mut self, num: &i32) {
        let mut node = &mut self.root;
        let num_str = num.to_string();
        for digit in num_str.chars() {
            node = node.children.entry(digit).or_default();
        }
    }

    pub fn find_longest_prefix(&self, num: &i32) -> i32 {
        let mut node = &self.root;
        let num_str = num.to_string();
        let mut len = 0;
        for digit in num_str.chars() {
            match node.children.get(&digit) {
                Some(node2) => { 
                    node = node2;
                    len += 1;
                    },
                None => break,
            }
        }
        len
    }
}
impl Solution {
    pub fn longest_common_prefix(arr1: Vec<i32>, arr2: Vec<i32>) -> i32 {
        let mut trie = Trie::new();
        for num in arr1 {
            trie.insert(&num);
        }
        let mut ans = 0;
        for num in arr2 {
            ans = ans.max(trie.find_longest_prefix(&num))
        }
        ans
    }
}
```