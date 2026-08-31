# Rust functional solutions

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/1256546/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/1256546/)

---

With ZIP

```
impl Solution {
    pub fn busy_student(start_time: Vec<i32>, end_time: Vec<i32>, query_time: i32) -> i32 {
        start_time
            .iter()
            .zip(end_time.iter())
            .filter(|(start, end)| **start <= query_time && **end >= query_time)
            .count() as i32
    }
}
```

Without ZIP (shorter and may be better)
```
impl Solution {
    pub fn busy_student(start_time: Vec<i32>, end_time: Vec<i32>, query_time: i32) -> i32 {
        start_time
            .iter()
            .enumerate()
            .filter(|(i, start)| **start <= query_time && end_time[*i] >= query_time)
            .count() as i32
    }
}
```