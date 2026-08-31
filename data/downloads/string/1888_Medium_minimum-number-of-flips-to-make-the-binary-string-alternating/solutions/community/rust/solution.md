# rust 7 ms

**Author:** novice88
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/2299663/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/2299663/)

---

```rust

use std::cmp::min;
impl Solution {
    pub fn min_flips(mut s: String) -> i32 {
        let len = s.len();
        let mut chars = s.chars().collect::<Vec<char>>();
        let ch = ['0','1'];
        let mut cnt = 0;
        for i in 0..len {
            if chars[i] != ch[i%2] {
                cnt+=1;
            }
        }
        let mut ans = min(cnt,len as i32 - cnt);
        for i in 0..len {
            if chars[i] != ch[i%2] {
                cnt-=1;
            }
            if chars[i] != ch[(i+len)%2] {
                cnt+=1;
            }
            ans = ans.min(min(cnt,len as i32 - cnt));
        }
        return ans;
    }
}


```