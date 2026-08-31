# Rust solution

**Author:** ibrohimkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/bold-words-in-string/solutions/2813239/](https://leetcode.com/problems/bold-words-in-string/solutions/2813239/)

---

```
pub fn bold_words(words: Vec<String>, s: String) -> String {
	let mut bold = vec![false; s.len() + 1];

	for word in words {
		let word_len = word.len();
		for i in 0..=s.len() - word_len {
			if word == &s[i..i + word_len] {
				for j in i..i + word_len {
					bold[j] = true;
				}
			}
		}
	}

	let mut result = String::new();
	if bold[0] { result.push_str("<b>"); }

	for i in 0..bold.len() - 1 {
		result.push(s.chars().nth(i).unwrap());
		if bold[i] && !bold[i + 1] { result.push_str("</b>"); }
		if !bold[i] && bold[i + 1] { result.push_str("<b>"); }
	}

	result
}
```