# beats 80% at speed, 86% at memory, very simple algo

**Author:** SingSongZepf
**Votes:** 1
**Link:** [https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/5160571/](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/5160571/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
	pub fn max_width_of_vertical_area(mut points: Vec<Vec<i32>>) -> i32 {
		points.sort_unstable();
		points.windows(2).map(|w| w[1][0] - w[0][0]).max().unwrap_or(0)
	}
}
```