# 1 ms | mono stack | in-place |  clean code | 16 lines after rustfmt

**Author:** abdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/5977093/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/5977093/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
	pub fn can_see_persons_count(mut heis: Vec<i32>) -> Vec<i32> {
		let mut st = vec![];
		for n in heis.iter_mut().rev() {
			let cur = *n;
			*n = 0;
			while st.last().map(|m| *m < cur) == Some(true) {
				st.pop();
				*n += 1;
			}
            *n += !st.is_empty() as i32;
			st.push(cur);
		}
		heis
	}
}
```