# Rust solution

**Author:** ibrohimkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/2724883/](https://leetcode.com/problems/sort-features-by-popularity/solutions/2724883/)

---

```
pub fn sort_features(mut features: Vec<String>, responses: Vec<String>) -> Vec<String> {
	let mut freq_map = std::collections::HashMap::new();
	for feature in &features {
		freq_map.insert(feature.to_owned(), 0);
	}

	for response in &responses {
		let set = response
			.split_whitespace()
			.map(|item| item.to_string())
			.collect::<std::collections::HashSet<String>>();

		for feature in &features {
			if set.contains(feature) {
				freq_map.entry(feature.to_owned()).and_modify(|count| *count += 1);
			}
		}
	}

	features.sort_by(|a, b| freq_map.get(b).unwrap().cmp(freq_map.get(a).unwrap()));
	features
}
```