# 🦀 Rust solution

**Author:** kernelm0de
**Votes:** 2
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/639998/](https://leetcode.com/problems/day-of-the-year/solutions/639998/)

---

```
impl Solution {
    pub fn day_of_year(date: String) -> i32 {
        let mut days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let date_parts = date.split("-").map(|x| x.parse().unwrap()).collect::<Vec<i32>>();
        let year = date_parts[0];
        let month = date_parts[1];
        let day = date_parts[2];
        
		// Check for the leap year
        if (year % 400) == 0 || ((year % 4) == 0 && (year % 100) != 0) {
            days[1] = 29;
        }
        
        day + &days[..(month - 1) as usize].iter().sum::<i32>()
    }
}
```