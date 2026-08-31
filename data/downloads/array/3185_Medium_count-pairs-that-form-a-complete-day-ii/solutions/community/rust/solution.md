# count remainders mod 24 with fold

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5401612/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5401612/)

---

```
impl Solution {
    pub fn count_complete_day_pairs(hours: Vec<i32>) -> i64 {
        hours.into_iter()
            .fold((0, vec![0; 24]), |(mut total, mut v),h| {
                let i = h.rem_euclid(24) as usize;
                let j = (24-i) % 24;
                total += v[i];
                v[j] += 1;
                (total, v)
            }).0
    }
}
```