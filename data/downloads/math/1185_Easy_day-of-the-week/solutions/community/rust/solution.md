# rust Sakamoto's algorithm

**Author:** stevensonmt
**Votes:** 2
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/695276/](https://leetcode.com/problems/day-of-the-week/solutions/695276/)

---

```
impl Solution {
    pub fn day_of_the_week(day: i32, month: i32, year: i32) -> String {
        let year = year - (month < 3) as i32; // bool as i32 is false->0 || true->1
        DOTW[((year + year/4 - year/100 + year/400 + SHIFT[(month-1) as usize] + day) % 7) as usize].to_string()
    }
}

const SHIFT: [i32; 12] = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
const DOTW: [&str; 7] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

```