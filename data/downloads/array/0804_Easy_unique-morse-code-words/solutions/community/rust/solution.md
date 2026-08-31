# Rust: 0ms - Using Iterators & HashSet

**Author:** seandewar
**Votes:** 6
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/1122579/](https://leetcode.com/problems/unique-morse-code-words/solutions/1122579/)

---

```
use std::collections::HashSet;

impl Solution {
    pub fn unique_morse_representations(words: Vec<String>) -> i32 {
        static MORSE: [&str; 26] = [
            ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",
            "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
            "-.--", "--..",
        ];
		
        words
            .into_iter()
            .map(|w| {
                w.chars()
                    .map(|c| MORSE[c as usize - 'a' as usize])
                    .collect::<String>()
            })
            .collect::<HashSet<_>>()
            .len() as _
    }
}
```