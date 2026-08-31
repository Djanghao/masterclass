# Rust | Backward Iteration | O(N)

**Author:** mek604
**Votes:** 1
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1071871/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1071871/)

---

```
pub fn find_buildings(heights: Vec<i32>) -> Vec<i32> {
	let mut v: Vec<i32> = vec![];
	let mut right_max: i32 = 0;   // since the building height is at least 1
	for i in (0..heights.len()).rev() {
		if heights[i] > right_max {
			v.push(i as i32);
			right_max = heights[i];
		}
	}
	v.reverse();
	v
}
```