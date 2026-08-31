# Rust solution

**Author:** ibrohimkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-transformation/solutions/2698706/](https://leetcode.com/problems/array-transformation/solutions/2698706/)

---

```
pub fn transform_array(mut arr: Vec<i32>) -> Vec<i32> {
	let mut changed = true;

	while changed {
		changed = false;
		let mut prev = arr[0];
		
		for i in 1..arr.len() - 1 {
			let curr = arr[i];
			let next = arr[i + 1];

			if prev < curr && curr > next {
				changed = true;
				arr[i] -= 1;
			}

			if prev > curr && curr < next {
				changed = true;
				arr[i] += 1;
			}

			prev = curr;
		}
	}

	arr
}
```