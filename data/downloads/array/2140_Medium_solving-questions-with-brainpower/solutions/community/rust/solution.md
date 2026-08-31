# Rust two dp solutions

**Author:** williamcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514490/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514490/)

---


```
impl Solution {
    pub fn most_points(questions: Vec<Vec<i32>>) -> i64 {
        let n = questions.len();
        let mut f = vec![0 as i64; n + 1];

        for i in (0..n).rev().step_by(1) {
            let (points, brainpower) = (questions[i][0] as i64, questions[i][1] as usize);
            let j = (i + brainpower + 1).min(n);

            f[i] = f[i + 1].max(f[j] + points);
        }

        f[0]
    }
}
```

```
impl Solution {
    pub fn most_points(questions: Vec<Vec<i32>>) -> i64 {
        let n = questions.len();
        let mut f = vec![0 as i64; n + 1];

        for i in 0..n {
            f[i + 1] = f[i + 1].max(f[i]);
            let (points, brainpower) = (questions[i][0] as i64, questions[i][1] as i64);
            let j = (i + brainpower as usize + 1).min(n);

            f[j] = f[j].max(f[i] + points);
        }

        f[n]
    }
}
```