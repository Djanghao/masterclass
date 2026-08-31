# Rust | Max-Min | With Comments

**Author:** wallicent
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2679110/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2679110/)

---

This is my unrevised submission for the 2022-10-09 Weekly Contest 314. Compute the differences between the timestamps, and find the largest difference. If two differences are equal, then choose the lowest employee ID. Using `then` with a reversed comparison to get the lowest ID here.

Comment: I wanted to do a functional solution, but I should have gone for an imperative, since this took significantly longer to put together.

```
impl Solution {
    pub fn hardest_worker(n: i32, logs: Vec<Vec<i32>>) -> i32 {
        logs.into_iter().scan(0, |t, log| {
            let rez = Some((log[0], log[1] - *t));
            *t = log[1];
            rez
        }).max_by(|w1, w2| w1.1.cmp(&w2.1).then(w2.0.cmp(&w1.0))).unwrap().0
    }
}
```