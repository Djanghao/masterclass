# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/3245815/](https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/3245815/)

---

# Code
```
impl Solution {
    pub fn longest_subsequence_repeated_k(s: String, k: i32) -> String {
        fn check(s: &[u8], p: &str, k: i32) -> bool {
            let p = p.as_bytes();
            let mut i = 0;
            let mut j = 0;
            let mut k = k;
            while i < s.len() && k > 0 {
                j += (p[j] == s[i]) as usize;
                if j == p.len() {
                    k -= 1;
                    j = 0;
                }
                i += 1;
            }
            k == 0
        }
    
        fn generate(s: &[u8], chars: &str, cur: &str, best: &mut String, mask: i32, k: i32) {
            for (i, ch) in chars.bytes().enumerate() {
                if (mask & (1 << i)) == 0 {
                    let mut new_cur = cur.to_string();
                    new_cur.push(ch as char);
                    if check(s, &new_cur, k) {
                        if new_cur.len() > best.len() {
                            *best = new_cur.clone();
                        }
                        generate(s, chars, &new_cur, best, mask + (1 << i), k);
                    }
                }
            }
        }
    
        let s = s.as_bytes();
        let mut cnt = vec![0; 26];
        let mut chars = String::new();
        for &ch in s.iter() {
            cnt[(ch - b'a') as usize] += 1;
        }
        for i in (0..26).rev() {
            chars.push_str(&String::from_utf8(vec![b'a' + i as u8; cnt[i] / k as usize]).unwrap());
        }
        let mut best = String::new();
        generate(s, &chars, "", &mut best, 0, k);
        best
    }
}
```