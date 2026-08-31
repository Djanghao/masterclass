# Rust Direct Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/5665442/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/5665442/)

---

# Code
```rust []
use std::collections::HashMap;

impl Solution {

    pub fn is_vowel_substring(s: &str) -> bool {
      let mut freq = HashMap::from([
        ('a', 0), 
        ('e', 0), 
        ('i', 0), 
        ('o', 0), 
        ('u', 0)
      ]);

      for c in s.chars() {
        if !freq.contains_key(&c) {
          return false
        }

        *freq.entry(c).or_insert(0) += 1
      }

      for (key, val) in freq.iter() {
        if val < &1 {
          return false
        }
      }

      true
    }

    pub fn count_vowel_substrings(word: String) -> i32 {
        let mut res: i32 = 0; 

        for i in 0..word.len() {
          for j in i..=word.len(){
            if Solution::is_vowel_substring(&word[i..j]) {
              res += 1
            }
          }
        }

        res
    }
}
```