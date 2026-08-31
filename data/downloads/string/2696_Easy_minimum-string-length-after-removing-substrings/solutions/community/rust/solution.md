# 0ms | rust | stack | clean code

**Author:** abdy
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5880908/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5880908/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
	pub fn min_length(s: String) -> i32 {
		let mut ans = vec![];
		for c in s.bytes() {
			match (ans.last(), c) {
				(Some(b'A'), b'B') | (Some(b'C'), b'D') => {
					ans.pop();
				}
				_ => ans.push(c),
			}
		}
		ans.len() as i32
	}
}
```