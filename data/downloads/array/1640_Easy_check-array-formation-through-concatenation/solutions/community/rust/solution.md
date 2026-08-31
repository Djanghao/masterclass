# Rust: binary search (0 ms, 2 MB)

**Author:** artyom_andreev
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/925254/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/925254/)

---

```rust
pub fn can_form_array(arr: Vec<i32>, mut pieces: Vec<Vec<i32>>) -> bool {
	pieces.sort_by(|piece1, piece2| piece1[0].cmp(&piece2[0]));

	let mut i = 0;
	while i != arr.len() {
		let elem = arr[i];
		let piece = match pieces.binary_search_by(|piece| piece[0].cmp(&elem)) {
			Ok(pos) => &pieces[pos],
			Err(_) => return false,
		};

		for &piece_elem in piece.iter().skip(1) {
			if i == arr.len() - 1 {
				return false;
			}
			i += 1;
			if arr[i] != piece_elem {
				return false;
			}
		}

		i += 1;
	}

	true
}
```