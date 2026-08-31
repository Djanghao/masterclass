# Rust solution

**Author:** ibrohimkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2832289/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2832289/)

---

```
pub fn maximum_groups(grades: Vec<i32>) -> i32 {
	let (mut i, mut len) = (0, grades.len());
	while i + 1 <= len {
		i += 1;
		len -= i;
	}

	i as _
}
```