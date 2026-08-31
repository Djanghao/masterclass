# Rust solution

**Author:** ibrohimkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/2528320/](https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/2528320/)

---

```
pub fn longest_common_subsequence(arrays: Vec<Vec<i32>>) -> Vec<i32> {
	let mut map = std::collections::HashMap::new();
	for array in &arrays {
		for &item in array {
			*map.entry(item).or_insert(0) += 1;
		}
	}

	let mut result = vec![];
	for (k, v) in map {
		if v == arrays.len() {
			result.push(k);
		}
	}

	result.sort();
	result
}
```