# 33ms | in place| stack | clean code | 24 lines after rustfmt

**Author:** abdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/5754913/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/5754913/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
	pub fn replace_non_coprimes(nums: Vec<i32>) -> Vec<i32> {
		let mut st = vec![];
		for mut n in nums {
			while let Some(&prv) = st.last() {
				match Self::gcd(prv, n) {
					gcd @ 2.. => {
						n *= prv / gcd;
						st.pop();
					}
					_ => break,
				}
			}
			st.push(n);
		}
		st
	}
	fn gcd(a: i32, b: i32) -> i32 {
		match b {
			0 => a,
			_ => Self::gcd(b, a % b),
		}
	}
}
```