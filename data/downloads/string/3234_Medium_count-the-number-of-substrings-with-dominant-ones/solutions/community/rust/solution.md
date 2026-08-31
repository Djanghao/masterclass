# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546872/](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546872/)

---


```
impl Solution {
    pub fn number_of_substrings(s: String) -> i32 {
        let s = s.as_bytes();
        let mut res = 0;
        let mut z = 0;
        while z + z * z <= s.len() {
            let mut cnt = [0; 2];
            let mut p = 0;
            let mut i = 0;
            let mut j = 0;
            while i < s.len() {
                cnt[(s[i] == b'1') as usize] += 1;
                while cnt[0] > z {
                    cnt[(s[j] == b'1') as usize] -= 1;
                    j += 1;
                }
                if cnt[0] == z && cnt[1] > 0 && cnt[1] >= z * z {
                    p = p.max(j);
                    while p < i && s[p] == b'1' {
                        p += 1;
                    }
                    res += 1 + (p - j).min(cnt[1] - z * z);
                }
                i += 1;
            }
            z += 1;
        }
        res as i32
    }
}

```