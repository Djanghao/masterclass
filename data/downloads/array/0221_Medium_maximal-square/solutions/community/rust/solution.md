# dp | O(n) space | clean code | 17 lines after rustfmt

**Author:** abdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-square/solutions/6102469/](https://leetcode.com/problems/maximal-square/solutions/6102469/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(m n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
	pub fn maximal_square(mat: Vec<Vec<char>>) -> i32 {
		let mut ans = 0;
		let mut dp = vec![0; mat[0].len()];
		for row in mat {
			let (mut prv, mut cnt) = (0, 0);
			for (d, c) in dp.iter_mut().zip(row) {
				(*d, prv, cnt) = match c {
					'1' => (prv.min(*d).min(cnt) + 1, *d, cnt + 1),
					_ => (0, *d, 0),
				};
				ans = ans.max(*d);
			}
		}
		ans * ans
	}
}
```