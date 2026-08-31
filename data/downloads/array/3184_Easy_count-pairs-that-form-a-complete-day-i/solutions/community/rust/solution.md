# Rust Straightforward Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5570277/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5570277/)

---

# Code
```
impl Solution {
    pub fn count_complete_day_pairs(hours: Vec<i32>) -> i32 {
        let mut counter: i32 = 0;

        for i in 0..hours.len() {
            for j in (i + 1)..hours.len() {
                if (hours[i] + hours[j]) % 24 == 0 {
                    counter += 1;
                }
            }
        }

        counter
    }
}
```