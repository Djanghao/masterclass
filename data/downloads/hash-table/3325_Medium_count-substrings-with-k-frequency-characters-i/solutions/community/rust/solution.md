# two pointers

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5953248/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5953248/)

---

We just keep a tight sliding window that contains a string that has just one character $k$ times.

```rust []
impl Solution {
    pub fn number_of_substrings(s: String, k: i32) -> i32 {
        let s = s.chars().collect::<Vec<char>>();
        let mut total = 0;
        let mut i = 0;
        let mut a = vec![0; 26];
        let mut valid = 0;
        for &x in &s {
            a[x as usize - 'a' as usize] += 1;
            if a[x as usize - 'a' as usize] == k {valid += 1;}
            if valid == 0 {continue}
            
            while valid > 0 {
                let y = s[i];
                a[y as usize - 'a' as usize] -= 1;
                if a[y as usize - 'a' as usize] == k - 1 {
                    valid -= 1;
                }
                i += 1;
            }
            i -= 1;
            let y = s[i];
            a[y as usize - 'a' as usize] += 1;
            valid = 1;
            total += i as i32 + 1;
        }
        total
    }
}
```