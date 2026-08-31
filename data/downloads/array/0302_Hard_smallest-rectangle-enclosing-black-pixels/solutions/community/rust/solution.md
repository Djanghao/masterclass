# Rust

**Author:** gardin
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/1924192/](https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/1924192/)

---

```rust
fn min_area(image: Vec<Vec<char>>, x: i32, y: i32) -> i32 {
	let width = image[0].len();
	let height = image.len();

	let (x_min, y_min, x_max, y_max) = (0..width)
		.flat_map(|x| (0..height).map(move |y| (x, y)))
		.filter(|&(x, y)| image[y][x] == '1')
		.fold((i32::MAX, i32::MAX, i32::MIN, i32::MIN), |(x_min, y_min, x_max, y_max), (x, y)| {
			let (x, y) = (x as i32, y as i32);
			(x_min.min(x), y_min.min(y), x_max.max(x), y_max.max(y))
		});

	(x_max - x_min + 1) * (y_max - y_min + 1)
}
```