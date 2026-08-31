# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/3246454/](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/3246454/)

---

# Code
```
impl Solution {
    pub fn smallest_subsequence(s: String, k: i32, letter: char, repetition: i32) -> String {
        let letter = letter as i32;
        let s = s.as_bytes().iter().map(|&c| c as i32).collect::<Vec<i32>>();
        let mut repetition = repetition;
        let mut extra = s.iter().filter(|&&c| c == letter).count() as i32 - repetition;
        let mut remove = s.len() as i32 - k;
        let mut mono = Vec::new();
        for &ch in s.iter() {
            while !mono.is_empty() && mono[mono.len() - 1] > ch && remove > 0 {
                let mono_back = mono[mono.len() - 1];
                if mono_back == letter && extra == 0 {
                    break;
                }
                extra -= i32::from(mono_back == letter);
                remove -= 1;
                mono.pop();
            }
            mono.push(ch);
        }
        let mut res = Vec::new();
        let mut i = 0;
        while res.len() < k as usize {
            if mono[i] != letter && res.len() + 0.max(repetition) as usize >= k as usize {
                i += 1;
                continue;
            }
            res.push(mono[i] as u8);
            repetition -= i32::from(mono[i] == letter);
            i += 1;
        }
        String::from_utf8(res).unwrap()
    }
}
```