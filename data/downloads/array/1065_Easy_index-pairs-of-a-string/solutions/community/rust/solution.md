# Rust solution

**Author:** ibrohimkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/2229979/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/2229979/)

---

```
pub fn index_pairs(text: String, words: Vec<String>) -> Vec<Vec<i32>> {
	let mut result = Vec::new();
	let len = text.len();

	for i in 0..len {
		for j in i..len + 1 {
			let word = &text[i..j];

			if words.contains(&word.to_string()) {
				result.push(vec![i as i32, (j - 1) as i32]);
			}
		}
	}

	result
}
```