# RUST || Sliding windows

**Author:** SilverNg
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/5318272/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/5318272/)

---

# Intuition
Just sliding window and every time we extend the window to the right. check all news substring have created. At first, I did not realize that length of every forbiden string <= 10 so I get TLE
I suppose Trie would be the best solution.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$ 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$ 

# Code
```
use std::collections::HashSet;

impl Solution {
    pub fn longest_valid_substring(word: String, forbidden: Vec<String>) -> i32 {
        let mut i = 0i32;
        let mut j = 0i32;
        let size = word.len();

        let mut forbidden_hs = HashSet::new();

        for f in forbidden {
            forbidden_hs.insert(f);
        }

        let mut longest = 0;
        while j < size as i32 {
            let start = i.max(j - 9);

            for k in start..j + 1 {
                if forbidden_hs.contains(&word[k as usize..(j + 1) as usize]) {
                    i = k + 1;
                }
            }

            if j - i + 1 > longest {
                longest = j - i + 1
            }
            j += 1;
        }

        longest as i32
    }
}
```