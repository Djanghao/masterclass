# Rust: Backtracking and Hashsets

**Author:** eD7zLLlnDS
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/5191652/](https://leetcode.com/problems/word-pattern-ii/solutions/5191652/)

---

# Intuition
Use backtracking to explore all possible mappings from pattern characters to substrings in `s`.

# Approach
1. Use a hashmap for character to substring mapping and a hashset to track used substrings.
2. Recursively attempt to map each character in the pattern to all possible substrings.
3. Ensure mappings are bijective by checking existing mappings and used substrings.
4. Backtrack if a mapping does not lead to a solution.

# Complexity
- Time complexity: 
  $$O(n^m)$$, where \\(n\\) is the length of `s` and \\(m\\) is the length of `pattern`.

- Space complexity: 
  $$O(m + n)$$


# Code
```
use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn word_pattern_match(pattern: String, s: String) -> bool {
        fn backtrack(pat: &str, s: &str, char_to_substr: &mut HashMap<char, String>, used_substrings: &mut HashSet<String>) -> bool {
            if pat.is_empty() {
                return s.is_empty();
            }
            if s.is_empty() {
                return false;
            }

            let current_char = pat.chars().next().unwrap();
            let remaining_pattern = &pat[1..];

            if let Some(mapped_substr) = char_to_substr.get(&current_char) {
                if s.starts_with(mapped_substr) {
                    return backtrack(remaining_pattern, &s[mapped_substr.len()..], char_to_substr, used_substrings);
                } else {
                    return false;
                }
            }
            for i in 1..=s.len() {
                let substr = s[..i].to_string();

                if used_substrings.contains(&substr) {
                    continue;
                }

                char_to_substr.insert(current_char, substr.clone());
                used_substrings.insert(substr.clone());

                if backtrack(remaining_pattern, &s[i..], char_to_substr, used_substrings) {
                    return true;
                }

                // Backtrack
                char_to_substr.remove(&current_char);
                used_substrings.remove(&substr);
            }

            false
        }

        let mut char_to_substr = HashMap::new();
        let mut used_substrings = HashSet::new();
        backtrack(&pattern, &s, &mut char_to_substr, &mut used_substrings)
    }
}

```