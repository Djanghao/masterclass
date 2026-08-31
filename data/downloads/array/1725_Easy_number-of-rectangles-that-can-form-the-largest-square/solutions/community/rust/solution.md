# Rust || beats 100% || 0ms

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/5271274/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/5271274/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
impl Solution {
    pub fn count_good_rectangles(rectangles: Vec<Vec<i32>>) -> i32 {
        let mut max_side = 0;
        let mut count = 0;
        for rect in rectangles.iter() {
            let mut side = std::cmp::min(rect[0], rect[1]);
            if max_side == side {
                count += 1;
            } else if side > max_side {
                max_side = side;
                count = 1;
            }
        }
        count
    }
}
```