# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/3208588/](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/3208588/)

---

# Code
```
impl Solution {
    pub fn min_characters(a: String, b: String) -> i32 {
        let m = a.len();
        let n = b.len();
        let mut c1 = vec![0; 26];
        let mut c2 = vec![0; 26];
        for c in a.chars() {
            c1[c as usize - 'a' as usize] += 1;
        }
        for c in b.chars() {
            c2[c as usize - 'a' as usize] += 1;
        }
        let mut res = m + n;
        for i in 0..26 {
            res = res.min(m + n - c1[i] - c2[i]);
            if i > 0 {
                c1[i] += c1[i - 1];
                c2[i] += c2[i - 1];
            }
            if i < 25 {
                res = res.min(m - c1[i] + c2[i]);
                res = res.min(n - c2[i] + c1[i]);
            }
        }
        res as i32
    }
}
```