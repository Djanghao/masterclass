# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4643430/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4643430/)

---

# Code
```
impl Solution {
    pub fn count_of_pairs(n: i32, x: i32, y: i32) -> Vec<i32> {
        if x > y {
            return Solution::count_of_pairs(n, y, x);
        }
        let mut res = vec![0; n as usize];
        for i in 1..=n {
            for j in 1..i {
                let idx = i - j;
                let idx = idx.min((j - x).abs() + 1 + (i - y).abs());
                if idx >= 1 {
                    res[idx as usize - 1] += 2;
                }
            }
        }
        res
    }
}
```