# Rust solution

**Author:** ibrohimkhan
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2315426/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2315426/)

---

```
pub fn rearrange_characters(s: String, target: String) -> i32 {
	let mut array_of_s = [0; 26];
	for ch in s.chars() {
		array_of_s[(ch as u8 - b'a') as usize] += 1;
	}

	let mut array_of_target = [0; 26];
	for ch in target.chars() {
		array_of_target[(ch as u8 - b'a') as usize] += 1;
	}

	let mut result = i32::MAX;
	for i in 0..26 {
		if array_of_target[i] == 0 { continue; }
		result = result.min(array_of_s[i] / array_of_target[i]);
	}

	result
}
```