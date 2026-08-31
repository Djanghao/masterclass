# Rust solution

**Author:** ibrohimkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/2117308/](https://leetcode.com/problems/sentence-similarity/solutions/2117308/)

---

```
pub fn are_sentences_similar(sentence1: Vec<String>, sentence2: Vec<String>, similar_pairs: Vec<Vec<String>>) -> bool {
	use std::collections::HashSet;

	if sentence1.len() != sentence2.len() {
		return false;
	}

	let mut set = HashSet::new();
	for pair in similar_pairs {
		if pair.is_empty() {
			continue;
		}

		let key = pair[0].to_owned() + ":" + pair[1].as_str();
		set.insert(key);
	}

	for index in 0..sentence1.len() {
		let word1 = sentence1[index].to_owned() + ":" + sentence2[index].to_owned().as_str();
		let word2 = sentence2[index].to_owned() + ":" + sentence1[index].to_owned().as_str();

		if !set.is_empty() && !set.contains(&word1) && !set.contains(&word2) && sentence1[index] != sentence2[index] {
			return false;
		}
	}

	true
}
```