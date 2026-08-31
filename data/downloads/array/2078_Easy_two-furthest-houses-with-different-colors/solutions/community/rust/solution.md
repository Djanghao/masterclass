# quadratic check

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/5307834/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/5307834/)

---


```
impl Solution {
    pub fn max_distance(colors: Vec<i32>) -> i32 {
        let n = colors.len();
        let mut total = 0;
        for (i, &ci) in colors.iter().enumerate() {
            for j in i+total+1 ..n {
                if ci != colors[j] {
                    total = total.max(j-i);
                }
            }
        }
        total as _
    }
}
```