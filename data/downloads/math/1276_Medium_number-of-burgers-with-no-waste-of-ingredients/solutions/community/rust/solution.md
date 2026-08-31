# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/3089819/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/3089819/)

---

# Code
```
impl Solution {
    pub fn num_of_burgers(tomato_slices: i32, cheese_slices: i32) -> Vec<i32> {
        let (tomato_slices, cheese_slices) = (tomato_slices as i64, cheese_slices as i64);
        let (a, b) = (tomato_slices - 2 * cheese_slices, 4 * cheese_slices - tomato_slices);
        if a < 0 || b < 0 || a % 2 != 0 || b % 2 != 0 {
            return vec![];
        }
        vec![(a / 2) as i32, (b / 2) as i32]
    }
}
```