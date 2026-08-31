# [Rust] Binary search approach

**Author:** keep_of_kalessin
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/1425636/](https://leetcode.com/problems/sum-of-square-numbers/solutions/1425636/)

---

```
impl Solution {
    pub fn judge_square_sum(c: i32) -> bool {
        if c.count_ones() <= 1 {
            // Zero, and any power of two are valid solutions
            return true;
        }

        let limit = (c as f64).sqrt() as i32;

        for i in 0..limit {
            let a = i * i;
            let b = c - a;

            let mut lo = i;
            //let mut hi = limit;
            let mut hi = (b as f64).sqrt() as i32;


            while lo <= hi {
                let mid = lo + (hi - lo) / 2;
                let mids = mid * mid;

                if b == mids {
                    return true;
                }

                if b < mids {
                    hi = mid - 1;
                } else {
                    lo = mid + 1;
                }
            }
        }

        false
    }
}
```