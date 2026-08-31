# beats 100% at speed, 60% at memory, very simple algo

**Author:** SingSongZepf
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5190527/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5190527/)

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
	pub fn new_mod(num: i32, m: i32) -> i32 {
		let n = num % m;
		if n < 0 {
			n + m
		} else {
			n
		}
	}
	pub fn find_smallest_integer(nums: Vec<i32>, value: i32) -> i32 {
		let mut pool = vec![0; value as usize];
		for &num in &nums {
			pool[Self::new_mod(num, value) as usize] += 1;
		}
		let mut res = 0;
		loop {
			if pool[res % value as usize] > 0 {
				pool[res % value as usize] -= 1;
				res += 1;
			} else {
				break;
			}
		}
		res as i32
	}
}
```