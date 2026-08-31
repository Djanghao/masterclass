# beats 100% at speed, 100% at memory, O(n+n/m) time, O(m) space, (m is average length), hashmap

**Author:** SingSongZepf
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-common-word/solutions/5369746/](https://leetcode.com/problems/most-common-word/solutions/5369746/)

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

use std::collections::{
	HashMap,
	HashSet,
};
impl Solution {
	pub fn most_common_word(paragraph: String, banned: Vec<String>) -> String {
		let mut map = HashMap::new();
		let mut word = String::new();
		for c in paragraph.chars().chain(" ".chars()) {
			match c {
				' ' | '!' | '?' |',' | ';' | '.' | '\\'' => {
					if !word.is_empty() {
						*map.entry(word.to_lowercase()).or_insert(0) += 1;
						word.clear();
					}
				},
				_ => {
					word.push(c);
				}
			}
		}

		let set = banned.into_iter().collect::<HashSet<_>>();
		map.into_iter().filter(|(k, _)|!set.contains(k)).max_by_key(|(_, v)| *v).map(|(k, _)| k).unwrap()

	}
}

```