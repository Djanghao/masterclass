# beats 92% at speed, BFS method, 2 max flags, 2 current flags

**Author:** SingSongZepf
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/5169886/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/5169886/)

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
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;
impl Solution {
	pub fn max_level_sum(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
		let mut vqueue = VecDeque::new();
		vqueue.push_back((root, 1));

		let mut m = i32::MIN;
		let mut curr = 0;
		let mut m_level = 1;
		let mut curr_level = 1;

		while !vqueue.is_empty() {
			if let Some((n, level)) = vqueue.pop_front() {
				let nx = n.unwrap();
				if nx.borrow().left.is_some() {
					vqueue.push_back((nx.borrow().left.clone(), level+1));
				}
				if nx.borrow().right.is_some() {
					vqueue.push_back((nx.borrow().right.clone(), level+1));
				}
				if curr_level != level {
					if curr > m {
						m = curr;
						m_level = curr_level;
					}
					curr = 0;
					curr_level = level;
				}
				curr += nx.borrow().val;
			}
		}
		if curr > m {
			curr_level
		} else {
			m_level
		}
	}
}
```