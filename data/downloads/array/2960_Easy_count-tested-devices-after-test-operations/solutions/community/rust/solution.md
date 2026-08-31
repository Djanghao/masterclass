# one-liner, beats 100% at speed, 87% at memory, O(n) time, O(1) space, threshold, iteration

**Author:** SingSongZepf
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5813542/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/5813542/)

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
```rust []
impl Solution {
	pub fn count_tested_devices(battery_percentages: Vec<i32>) -> i32 {
		battery_percentages.into_iter().fold(0, |acc, x| {
			if x > acc {
				acc + 1
			} else {
				acc
			}
		})
	}
}
```