# Rust Solution

**Author:** rchaser53
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-interval/solutions/2603264/](https://leetcode.com/problems/remove-interval/solutions/2603264/)

---

```
impl Solution {
    pub fn remove_interval(intervals: Vec<Vec<i32>>, to_be_removed: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = vec![];
        let from = to_be_removed[0];
        let to = to_be_removed[1];

        for arr in intervals {
            let a = arr[0];
            let b = arr[1];
            if b <= from || to <= a {
                result.push(arr);
            } else if from <= a && b <= to {
                continue
            } else if a < from && to < b {
                result.push(vec![a,from]);
                result.push(vec![to,b]);
            } else if a < from && from < b && b <= to {
                result.push(vec![a,from]);
            } else if from <= a  && a < to && to < b {
                result.push(vec![to, b]);
            }
        }
        result
    }
}
```