# Rust Trie solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/849356/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/849356/)

---

```rust
#[derive(Default)]
struct Trie {
    children: [Option<Box<Trie>>; 2],
}

impl Solution {
    pub fn find_maximum_xor(nums: Vec<i32>) -> i32 {
        let mut trie: Trie = Default::default();
        for &num in nums.iter() {
            let mut node = &mut trie;
            for i in (0..31).rev() {
                let bit = ((num >> i) & 1) as usize;
                node = node.children[bit].get_or_insert_with(Default::default);
            }
        }
        let mut answer = 0;
        for &num in nums.iter() {
            let mut max = 0;
            let mut node = &trie;
            for i in (0..31).rev() {
                let bit = ((num >> i) & 1) as usize;
                if let Some(n) = &node.children[1 - bit] {
                    max |= 1 << i;
                    node = n;
                } else {
                    node = &node.children[bit].as_ref().unwrap();
                }
            }
            answer = std::cmp::max(answer, max);
        }
        answer
    }
}
```