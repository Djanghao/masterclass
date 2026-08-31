# [Rust] Beats 100% using Iterator trait solution

**Author:** luizgabriel
**Votes:** 1
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/5080842/](https://leetcode.com/problems/generalized-abbreviation/solutions/5080842/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Build an iterator which yields abbreviations from a given word.
We'll only need to mantain this state:
```rust
pub struct AbbreviationIterator {
    word: Vec<char>,
    current: usize,
    max: usize,
}
```

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(2^n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
pub struct AbbreviationIterator {
    word: Vec<char>,
    current: usize,
    max: usize,
}

impl AbbreviationIterator {
    pub fn new(word: &str) -> Self {
        let length = word.len();
        AbbreviationIterator {
            word: word.chars().collect(),
            current: 0,
            max: 1 << length,
        }
    }

    fn abbreviate(&self, num: usize) -> String {
        let mut result = String::new();
        let mut count = 0;
        for (i, &ch) in self.word.iter().enumerate() {
            if num & (1 << i) != 0 {
                count += 1;
            } else {
                if count > 0 {
                    result.push_str(&count.to_string());
                    count = 0;
                }
                result.push(ch);
            }
        }
        if count > 0 {
            result.push_str(&count.to_string());
        }
        result
    }
}

impl Iterator for AbbreviationIterator {
    type Item = String;

    fn next(&mut self) -> Option<Self::Item> {
        if self.current >= self.max {
            None
        } else {
            let result = self.abbreviate(self.current);
            self.current += 1;
            Some(result)
        }
    }
}

impl Solution {
    pub fn generate_abbreviations(word: String) -> Vec<String> {
        AbbreviationIterator::new(&word).collect()
    }
}
```