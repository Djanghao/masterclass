# 20 ms | sort + BinaryHeap | 24 lines after rustfmt

**Author:** abdy
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5898151/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5898151/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
	pub fn smallest_chair(times: Vec<Vec<i32>>, tar: i32) -> i32 {
		let mut times: Vec<_> = (0..).zip(times).collect();
		times.sort_unstable_by_key(|(_, v)| v[0]);
		let mut avail = std::collections::BinaryHeap::<i32>::new();
		let mut reclaims = std::collections::BinaryHeap::<(i32, i32)>::new();
		let mut min = (i32::MIN..=0).rev();
		for (f, t) in times {
			while let Some(&(neg_t, chair)) = reclaims.peek() {
				if -neg_t > t[0] {
					break;
				}
				avail.push(-chair);
				reclaims.pop();
			}
			let cur = -avail.pop().or_else(|| min.next()).unwrap();
			if f == tar {
				return cur;
			}
			reclaims.push((-t[1], cur));
		}
		unreachable!()
	}
}
```