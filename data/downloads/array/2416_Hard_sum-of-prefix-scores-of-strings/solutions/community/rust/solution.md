# Rust Solution

**Author:** TIM99999
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5262047/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5262047/)

---

# Intuition

# Approach

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
#[derive(Default)]
struct Trie {
    cnt: usize,
    children: [Option<Box<Trie>>; 27],
}

impl Solution {
    pub fn sum_prefix_scores(words: Vec<String>) -> Vec<i32> {
        let mut root = Trie::default();

        for word in words.iter() {
            let mut curr = &mut root;
            
            for c in word.chars().map(|x| x as usize - 'a' as usize) {
                curr = curr.children[c].get_or_insert_with(Default::default);
                curr.cnt += 1;
            }
        }

        let mut res = vec![0; words.len()];

        for (i, word) in words.into_iter().enumerate() {
            let mut cnt = 0;
            let mut curr = &root;

            for c in word.chars().map(|x| x as usize - 'a' as usize) {
                curr = curr.children[c].as_ref().unwrap();
                cnt += curr.cnt;
            }

            res[i] = cnt as _;
        }

        res
    }
}
```