# Rust 7ms 🔥 2.4Mb ☄️ Solution 🦀

**Author:** rony0000013
**Votes:** 4
**Link:** [https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285451/](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285451/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn count_palindromic_subsequence(s: String) -> i32 {
        let s = s.as_bytes();
        let (mut st, mut end) = ([-1; 26], [-1; 26]);
        for (i, c) in s.iter().enumerate() {
            if st[*c as usize - 'a' as usize] == -1 {st[*c as usize - 'a' as usize] = i as i32;}
            end[*c as usize - 'a' as usize] = i as i32;
        }
        let mut ans = 0;
        for i in 0..26 {
            if end[i] != -1 {
                let mut arr = [false; 26];
                for j in (st[i]+1)..end[i] {
                    if !arr[s[j as usize] as usize - 'a' as usize] {
                        arr[s[j as usize] as usize - 'a' as usize] = true;
                        ans += 1;
                    }
                }
            }
        }
        ans
    }
}
```