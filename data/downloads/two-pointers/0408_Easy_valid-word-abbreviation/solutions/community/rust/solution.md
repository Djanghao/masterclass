# Rust solution

**Author:** ibrohimkhan
**Votes:** 3
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/2376775/](https://leetcode.com/problems/valid-word-abbreviation/solutions/2376775/)

---

```
pub fn valid_word_abbreviation(word: String, abbr: String) -> bool {
	let (mut number, mut position) = (0 as usize, 0 as usize);
	for ch in abbr.chars() {
		if ch.is_ascii_digit() {
			if ch == '0' && number == 0 { return false; }
			number = ch.to_digit(10).unwrap() as usize + number * 10;
		} else {
			position += number;
			number = 0;
			if position >= word.len() || word.chars().nth(position).unwrap() != ch {
				return false;
			} 

			position += 1;
		}
	}

	position + number == word.len()
}
```