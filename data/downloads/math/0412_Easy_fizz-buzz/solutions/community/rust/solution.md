# A syntactically graceful solution (not focused on performance)

**Author:** abiriadev
**Votes:** 19
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/3104139/](https://leetcode.com/problems/fizz-buzz/solutions/3104139/)

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
	pub fn fizz_buzz(n: i32) -> Vec<String> {
		(1..=n)
			.map(|n| match (n % 3, n % 5) {
				(0, 0) => "FizzBuzz".to_owned(),
				(0, _) => "Fizz".to_owned(),
				(_, 0) => "Buzz".to_owned(),
				_ => n.to_string(),
			})
			.collect()
	}
}
```