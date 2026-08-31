# 146 ms

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3422913/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3422913/)

---

```rust
impl Solution {
    pub fn max_div_score(mut a: Vec<i32>, mut b: Vec<i32>) -> i32 {
        a.sort(); b.sort(); let az = a.len();
        let (mut r, mut m, mut s, mut p) = (0, -1, 0usize, 0);
        for d in b {
            if d == p { continue } else { p = d }
            while s < az && a[s] < d { s += 1 }
            if (az - s) as i32 <= m { break }
            let mut c = 0;
            for j in s..az {
                if a[j] % d == 0 { c += 1 }
            }
            if c > m { r = d; m = c }
        }
        r
    }
}
```