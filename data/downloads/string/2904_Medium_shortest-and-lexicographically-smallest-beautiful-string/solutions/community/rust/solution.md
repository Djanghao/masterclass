# Rust Sliding Windows

**Author:** hank20010209
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4180800/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4180800/)

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn count(s: &str, ch: char) -> usize {
        s.chars().filter(|&c| c == ch).count()
    }
    
    pub fn shortest_beautiful_substring(s: String, k: i32) -> String {
        if Solution::count(&s, '1') < k as usize {
            return String::from("");
        }
        
        let s_chars: Vec<char> = s.chars().collect();
        let mut ans: String = String::new();
        let mut sub_str: String = String::new();
        let mut count_1: i32 = 0;
        let mut left: usize = 0;
        
        for right in 0..s_chars.len() {
            count_1 += s_chars[right].to_digit(10).unwrap() as i32;
            while count_1 > k || s_chars[left] == '0' {
                count_1 -= s_chars[left].to_digit(10).unwrap() as i32;
                left += 1;
            }
            if count_1 == k {
                sub_str = s_chars[left..=right].iter().collect();
                if ans.is_empty() || sub_str.len() < ans.len() || (sub_str.len() == ans.len() && sub_str < ans) {
                    ans = sub_str;
                }
            }
        }
        ans
    }
}

```