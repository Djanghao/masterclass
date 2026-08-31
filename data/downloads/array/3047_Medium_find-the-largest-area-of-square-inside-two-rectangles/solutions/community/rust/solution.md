# beats 100% at speed, 100% at memory, O(n^2/2) time, O(1) space intersection, max value

**Author:** SingSongZepf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/5296130/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/5296130/)

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
	pub fn largest_square_area(bottom_left: Vec<Vec<i32>>, top_right: Vec<Vec<i32>>) -> i64 {
		let intersect = |bl1: &Vec<i32>, tr1: &Vec<i32>, bl2: &Vec<i32>, tr2: &Vec<i32>, ml: i32| {
			if tr2[0] - bl2[0] <= ml || tr2[1] - bl2[1] <= ml {
				None // must smaller than current ml
			} else {
				let (bl1_x, bl1_y, tr1_x, tr1_y) = (bl1[0], bl1[1], tr1[0], tr1[1]);
				let (bl2_x, bl2_y, tr2_x, tr2_y) = (bl2[0], bl2[1], tr2[0], tr2[1]);
				if bl1_x >= tr2_x || bl2_x >= tr1_x || bl1_y >= tr2_y || bl2_y >= tr1_y {
					None // No intersection
				} else { // There is an intersection
					let width = tr1_x.min(tr2_x) - bl1_x.max(bl2_x);
					let height = tr1_y.min(tr2_y) - bl1_y.max(bl2_y);
					Some(width.min(height))
				}
			}
		};

		let mut ml = 0;

		bottom_left.iter().enumerate().zip(top_right.iter()).for_each(|((idx, bl1), tr1)| {
			if tr1[0] - bl1[0] <= ml || tr1[1] - bl1[1] <= ml {
			} else{
				bottom_left.iter().skip(idx+1).zip(top_right.iter().skip(idx+1)).for_each(|(bl2, tr2)| {
					if let Some(nml) = intersect(bl1, tr1, bl2, tr2, ml) {
						ml = nml.max(ml);
					}
				});
			}
		});

		ml as i64 * ml as i64
	}
}

```