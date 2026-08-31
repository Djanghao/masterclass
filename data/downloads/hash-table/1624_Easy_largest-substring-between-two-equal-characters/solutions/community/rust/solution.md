# Pure C | Rust | O(n) | Count with one array - O(1) space

**Author:** user8768G
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4483329/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4483329/)

---

As an input consists of lowercase letters only, we can use an array to track the first occurrences of each letter. So we just do one pass over an initial string and:
* 	if we encounter the first occurence of the letter - we update an array
* 	if we had already seen this letter - we check the distance from the first occurence and update the answer if needed.
# C

```
#define N 26

int maxLengthBetweenEqualCharacters(char* s) {

    int* firsts = (int*) malloc(N * sizeof(int));
    for (int i = 0; i < N; i++) firsts[i] = -1;

    int max = -1; 
    
    for (int i = 0; s[i] != '\\0'; i++) {
        int j = s[i] - 'a';
        if (firsts[j] >= 0) {
            int diff = i - firsts[j] - 1;
            if (diff > max) max = diff;
        } else firsts[j] = i;
    }

    return max;
}
```

# Rust

```
use std::cmp::{max};

impl Solution {
    pub fn max_length_between_equal_characters(s: String) -> i32 {
        
        let mut firsts = [None; 26];
        let mut max_len = -1;

        for (i, char) in s.chars().enumerate() {
            let i = i as i32;
            let j = (char as u8 - b'a') as usize;
            match firsts[j] {
                Some(first) => {
                    max_len = max(i - first, max_len);
                }
                None => {
                    firsts[j] = Some(i + 1);
                }
            }
        }

        max_len
    }
}
```

Rust approach here is absolutely the same as C one, but we make use of Option type instead of -1 in array.

* Time complexity O(n)
* Space complexity O(1)
