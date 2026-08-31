# [Rust] Trie solution

**Author:** keep_of_kalessin
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/1762758/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/1762758/)

---

```rust
use std::collections::HashMap;

#[derive(Debug, Clone, Default)]
struct Node {
    children: [Option<Box<Node>>; 2],
}

impl Node {
    pub fn insert(&mut self, n: i32) {
        do_insert(self, n, 31);
    }
}

fn do_insert(node: &mut Node, num: i32, bit: u32) {
    let b = ((num & (1 << bit)) != 0) as usize;
    if node.children[b].is_none() {
        node.children[b] = Some(Box::new(Node::default()));
    }

    if bit > 0 {
        do_insert(node.children[b].as_mut().unwrap(), num, bit - 1);
    }
}

pub fn maximize_xor(mut nums: Vec<i32>, mut queries: Vec<Vec<i32>>) -> Vec<i32> {
    // preserve the original indexes of the queries, because we need them to construct the result
    let mut result_indexes = HashMap::new();
    for (idx, query) in queries.iter().enumerate() {
        result_indexes
            .entry((query[0], query[1]))
            .or_insert(vec![])
            .push(idx);
    }

    // sort the nums and the queries, in order to be able to partially build the trie
    // using only the numbers lower than the current query limit
    nums.sort_unstable();
    queries.sort_unstable_by(|a, b| a[1].cmp(&b[1]));

    let mut result = vec![0; queries.len()];
    let mut trie = Node::default();

    // we have inserted all numbers with a lesser index into the trie 
    let mut next_idx = 0;
    
    // There are duplicate queries, so remember the last one in order to avoid 
    // recomputing the duplicates. We remember the last one, because they are sorted
    let mut last_query = None;
    
    for query in queries.iter() {
        // check if we have already processed this query and skip it if we did
        if Some(query) == last_query {
            continue;
        }
        last_query = Some(query);

        let val = query[0]; // the number to XOR with 
        let lim = query[1]; // do not xor with numbers greater than this

        // add all numbers less than `val` into the trie
        for idx in next_idx..nums.len() {
            let n = nums[idx];
            if n > lim {
                break;
            }

            trie.insert(n);
            next_idx = idx + 1;
        }

        // If next_idx is 0, then we do not have any values in the trie, 
        // which means that the result is -1. Otherwise, compute the result
        let mut xored = -1;
        if next_idx != 0 {
            let mut node = &trie;
            xored = 0;

            // find the maximum XOR value
            for bit in (0..32).rev() {
                let is_set = (val & (1 << bit)) != 0;
                // If the current bit is 1, then we need to look for 0 and vice-versa
                match &node.children[(is_set ^ true) as usize] {
                    None => {
                        // There is no node with value `(is_set ^ true) as usize` (i.e. the inverted value),
                        // which means that there must be a node with value `is_set as usize`
                        node = node.children[is_set as usize].as_ref().unwrap();
                    }

                    Some(child) => {
                        // the XOR of the current bit index is 1
                        xored |= 1 << bit;
                        node = child;
                    }
                }
            }
        }

        // There might be duplicate queries, so update all positions
        for &idx in result_indexes.get(&(val, lim)).unwrap() {
            result[idx] = xored;
        }
    }

    result
}
```