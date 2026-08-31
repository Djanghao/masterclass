# [Rust] Simple greedy solution

**Author:** wizist
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/2614313/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/2614313/)

---

For any string with length > 1, check the number of moves required to make the string with equal leftmost and rightmost characters. Remove the leftmost and the rightmost characters. Repeat the procedure until the string length less than or equal to 1. The sum of all moves is the answer.

```rust
use std::collections::*;
 
impl Solution {
	pub fn min_moves_to_make_palindrome(s: String) -> i32 {
		let mut s = s.clone();
		let mut ans = 0;
		while s.len() > 1 {
			let i = s.rfind(s.chars().nth(0).unwrap()).unwrap();
			if i != 0 {
				ans += (s.len() - 1 - i) as i32;
				s = format!("{}{}", &s[1..i], &s[i + 1..]);
			} else {
				let i = s.find(s.chars().last().unwrap()).unwrap();
				ans += i as i32;
				s = format!("{}{}", &s[..i], &s[i + 1..(s.len() - 1)]);
			}
		}
		ans
	}
}
```