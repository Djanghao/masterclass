# Rust | Simple Solution

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/3659343/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/3659343/)

---

# Approach

Iterate through the string, and check if anything is equal to words in `words`. If yes, mark the position of charaters in that substring as "bold".

# Complexity
- Time complexity:
$$O(mnk)$$

- Space complexity:
$$O(m)$$

# Further Optimizations

A prefix tree can be used to match substrings against possible words efficiently. 

# Code
```
pub fn bold_mask(s: String, words: Vec<String>) -> Vec<bool> {
    let mut vec = vec![false; s.len()];

    for i in 0..s.len() {
        for word in &words {
            let i1 = i + word.len();
            if i1 > s.len() { continue; }

            if &s[i..i1] == word.as_str() {
                for j in i..i1 { vec[j] = true; }
            }
        }
    }

    vec
}

const tag_b_pre: [char; 3] = ['<', 'b', '>'];
const tag_b_post: [char; 4] = ['<', '/', 'b', '>'];

impl Solution {
    pub fn add_bold_tag(
        s: String, words: Vec<String>
    ) -> String {
        let mask_vec = bold_mask(s.clone(), words);

        let mut token_vec: Vec<char> = Vec::new();
        let mut b_prev = false;
        for (c, b) in s.chars().zip(mask_vec.into_iter()) {
            if b && !b_prev { token_vec.extend_from_slice(&tag_b_pre); }
            if !b && b_prev { token_vec.extend_from_slice(&tag_b_post); }

            token_vec.push(c);

            b_prev = b;
        }

        if b_prev { token_vec.extend_from_slice(&tag_b_post); }

        token_vec.into_iter().collect()
    }
}
```