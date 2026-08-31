# Rust Solution

**Author:** TIM99999
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-suffix-queries/solutions/5266185/](https://leetcode.com/problems/longest-common-suffix-queries/solutions/5266185/)

---

# Intuition

# Approach

# Complexity
- Time complexity: O(n + m)

- Space complexity: O(n + m)

# Code
```
#[derive(Default, Debug)]
struct Trie {
    word: Option<usize>,
    children: [Option<Box<Trie>>; 26],
}

impl Solution {
    pub fn string_indices(words: Vec<String>, queries: Vec<String>) -> Vec<i32> {
        let mut root = Trie::default();
        let mut min = 0;

        for (i, word) in words.iter().enumerate() {
            let mut curr = &mut root;

            if word.len() < words[min].len() {
                min = i;
            }

            for c in word.chars().map(|x| x as usize - 'a' as usize).rev() {
                curr = curr.children[c].get_or_insert_with(Default::default);

                match curr.word.as_mut() {
                    Some(k) if word.len() < words[*k].len() => *k = i,
                    None => curr.word = Some(i),
                    _ => {},
                }
            }
        }

        let mut res = Vec::new();

        for q in queries.into_iter() { 
            let mut curr = &root;
            let mut i = min;

            for c in q.chars().map(|x| x as usize - 'a' as usize).rev() {
                let Some(next) = curr.children[c].as_ref() else {
                    break;
                };

                curr = next;
                i = curr.word.unwrap();
            }

            res.push(i as _);
        }

        res
    }
}
```