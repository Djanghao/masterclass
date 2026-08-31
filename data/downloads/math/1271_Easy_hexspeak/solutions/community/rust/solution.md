# Rust solution

**Author:** ibrohimkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/hexspeak/solutions/2334519/](https://leetcode.com/problems/hexspeak/solutions/2334519/)

---

```
pub fn to_hexspeak(num: String) -> String {
	let mut hex = format!("{:X}", num.parse::<i64>().unwrap())
		.chars()
		.collect::<Vec<_>>();

	for i in 0..hex.len() {
		if !hex[i].is_ascii_digit() { continue; }

		match hex[i] {
			'0' => hex[i] = 'O',
			'1' => hex[i] = 'I',
			_ => return String::from("ERROR"),
		}
	}

	hex.iter().collect()
}
```