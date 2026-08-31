# Rust | Filter | With Comments

**Author:** wallicent
**Votes:** 4
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2758403/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2758403/)

---

This is my unrevised submission for the 2022-10-30 Weekly Contest 317. Filter out the even numbers that are also evenly divisible by 3 and collect them in a vector to compute the average value.

Comments:
* I missed the small word *even* in the problem description since I was rushing. Five minutes penalty :(. Lesson learned.

```
impl Solution {
    pub fn average_value(nums: Vec<i32>) -> i32 {
        let div = nums.into_iter().filter(|n| *n % 2 == 0 && *n % 3 == 0).collect::<Vec<_>>();
        let n = div.len() as i32;
        if n == 0 { 0 } else { div.into_iter().sum::<i32>() / n }
    }
}
```