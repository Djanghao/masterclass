# O(1) space dp O(n) time

**Author:** asherlau
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/5606450/](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/5606450/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn unique_letter_string(s: String) -> i32 {
        let n = s.len();
        let s = s.as_bytes();
        let mut dp = 0;
        let mut ans = 0;
        let mut last_seen:Vec<i32> = vec![-1; 26];
        let mut last_count = vec![0; 26];
        for i in 0..n{
            let c = (s[i] - b'A') as usize;
            let new_sub_str = i - last_seen[c] as usize;
            let duplicates_i = last_count[c];
            dp += new_sub_str;
            dp -= duplicates_i;

            last_seen[c] = i as i32;
            last_count[c] = new_sub_str;
            ans += dp;
        }
        return ans as i32;
        
    }
}
```