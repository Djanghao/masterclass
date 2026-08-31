# 33 ms beats 100% | sort_by_cached_key

**Author:** abdy
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5525691/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5525691/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
	pub fn sort_jumbled(mapping: Vec<i32>, mut nums: Vec<i32>) -> Vec<i32> {
		let map: &[i32; 10] = mapping.as_slice().try_into().unwrap();
		nums.sort_by_cached_key(|n| Self::map(*n, map));
		nums
	}

	fn map(mut n: i32, map: &[i32; 10]) -> i32 {
		let mut i = map[(n % 10) as usize];
        n /= 10;
		let mut pos = 10;
		while n > 0 {
			i += map[(n % 10) as usize] * pos;
			pos *= 10;
			n /= 10;
		}
		i
	}
}
```