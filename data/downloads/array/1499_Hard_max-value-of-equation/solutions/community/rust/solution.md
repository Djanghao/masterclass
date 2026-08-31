# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-value-of-equation/solutions/3160057/](https://leetcode.com/problems/max-value-of-equation/solutions/3160057/)

---

# Code
```
impl Solution {
    pub fn find_max_value_of_equation(points: Vec<Vec<i32>>, k: i32) -> i32 {
        let mut p = std::collections::BinaryHeap::<(i32, i32)>::new();
        let mut ans = std::i32::MIN;
        for point in points.iter() {
            while !p.is_empty() && (point[0] - p.peek().unwrap().1) > k {
                p.pop();
            }
            if !p.is_empty() {
                ans = ans.max(point[0] + point[1] + p.peek().unwrap().0);
            }
            p.push((point[1] - point[0], point[0]));
        }
        ans
    }
}
```