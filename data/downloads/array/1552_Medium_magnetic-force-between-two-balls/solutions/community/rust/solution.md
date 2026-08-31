# For Rust Geeks

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/3162144/](https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/3162144/)

---

# Complexity
- Time complexity: $$O(NlogK)$$ where `K = position.max - position.min`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn max_distance(mut position: Vec<i32>, m: i32) -> i32 {
        position.sort_unstable();
        let (mut left, mut right) = (0, position[position.len() - 1] - position[0]);
        while left < right {
            let mid = (left + right + 1) / 2;
            if Self::max_number_of_balls(&position, mid) >= m {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        left
    }

    // Finds the maximum number of balls that can be placed in baskets
    // under the condition that the minimum distance between any two balls
    // is min_distance
    fn max_number_of_balls(pos: &Vec<i32>, min_distance: i32) -> i32 {
        let (mut ans, mut prev) = (1, pos[0]);
        for i in 1..pos.len() {
            if pos[i] - prev >= min_distance { 
                ans += 1;
                prev = pos[i];
            }
        }
        ans
    }
}
```