# Rust 0 ms

**Author:** JammyJ0
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/3498506/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/3498506/)

---


```
impl Solution {
    pub fn sum_of_three(num: i64) -> Vec<i64> {
        let mid = num / 3;
        match num % 3 {
            0 => vec![mid - 1, mid, mid + 1],
            _ => vec![]
        }
    }
}
```