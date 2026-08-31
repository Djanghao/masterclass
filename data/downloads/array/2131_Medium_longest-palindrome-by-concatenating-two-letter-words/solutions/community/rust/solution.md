# Rust Translation

**Author:** maraio
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/1709630/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/1709630/)

---

```
impl Solution {
    pub fn longest_palindrome(words: Vec<String>) -> i32 {
        let mut hist = vec![vec![0; 26];26];
        let mut ans = 0; 
        let a_code = 'a' as usize;
        
        for word in words.iter() {
            if let Some(i) = word.chars().nth(0) { if let Some(j) = word.chars().nth(1) {
                let i = i as usize - a_code; 
                let j = j as usize - a_code;
                match hist[j][i] {
                    cnt if cnt > 0 => {
                        ans += 4;
                        hist[j][i] -= 1;
                    },
                    _ => {
                        hist[i][j] += 1;
                    }
                }
            }}
        }
        
        for i in (0..26) {
             match hist[i][i] {
                cnt if cnt > 0 => { 
                    ans += 2; 
                    break;
                 },
                _ => (),
            }
        }
        ans 
    }
}
```