# Efficient and clean solutions (TypeScript & Rust)

**Author:** alihaideralsawad
**Votes:** 4
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/3686317/](https://leetcode.com/problems/keyboard-row/solutions/3686317/)

---

# TypeScript
```
const kRows = [
  new Set("qwertyuiop"),
  new Set("asdfghjkl"),
  new Set("zxcvbnm")
];

function findWords(words: string[]): string[] {
  return words.filter((word) => {
    const chars = word.toLowerCase().split('');
    return kRows.some((row) => chars.every((c) => row.has(c)));
  });
}
```

# Rust
```
use std::collections::HashSet;

impl Solution {
    pub fn find_words(words: Vec<String>) -> Vec<String> {
        let rows: [HashSet<char>; 3] = [
            "qwertyuiop".chars().collect(),
            "asdfghjkl".chars().collect(),
            "zxcvbnm".chars().collect(),
        ];

        words
            .into_iter()
            .filter(|word| {
                let chars: HashSet<char> = word.to_lowercase().chars().collect();
                rows.iter().any(|row| chars.is_subset(row))
            })
            .collect()
    }
}
```