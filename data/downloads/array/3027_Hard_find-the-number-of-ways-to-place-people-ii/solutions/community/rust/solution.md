# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4676313/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4676313/)

---


```
impl Solution {
    pub fn number_of_pairs(points: Vec<Vec<i32>>) -> i32 {
        let mut res = 0;
        let mut points = points;
        points.sort_unstable_by(|a, b| if a[0] == b[0] { b[1].cmp(&a[1]) } else { a[0].cmp(&b[0]) });
        let n = points.len();
        for i in 0..n {
            let mut y = std::i32::MIN;
            for j in i + 1..n {
                if points[i][1] >= points[j][1] && y < points[j][1] {
                    res += 1;
                    y = points[j][1];
                }
            }
        }
        res
    }
}

```