# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/3200167/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/3200167/)

---

# Code
```
impl Solution {
    pub fn maximum_gain(s: String, x: i32, y: i32) -> i32 {
        fn remove(s: &mut Vec<u8>, r: &[u8], x: i32) -> i32 {
            let mut i = 0;
            let mut ans = 0;
            for j in 0..s.len() {
                s[i] = s[j];
                i += 1;
                if i > 1 && s[i - 2] == r[0] && s[i - 1] == r[1] {
                    i -= 2;
                    ans += x;
                }
            }
            s.resize(i, 0);
            ans
        }
    
        let (mut x, mut y) = (x, y);
        let mut s = s.as_bytes().to_vec();
        let mut ans = 0;
        let mut a = "ab".as_bytes();
        let mut b = "ba".as_bytes();
        if x < y {
            std::mem::swap(&mut a, &mut b);
            std::mem::swap(&mut x, &mut y);
        }
        ans += remove(&mut s, a, x);
        ans += remove(&mut s, b, y);
        ans
    }
}
```