# [Rust] Native binary search solution

**Author:** night-crawler
**Votes:** 3
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/2139411/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/2139411/)

---

```rust
use std::cmp::Ordering;

impl Solution {
    pub fn successful_pairs(spells: Vec<i32>, mut potions: Vec<i32>, success: i64) -> Vec<i32> {
        let num_potions = potions.len() as i32;
        potions.sort_unstable();

        let mut result = vec![0; spells.len()];

        for (i, spell) in spells.into_iter().enumerate() {
            let left = potions
                .binary_search_by(|&potion| match (potion as i64 * spell as i64).cmp(&success) {
                    Ordering::Less => Ordering::Less,
                    // treat equal element as greater so that the BS will always terminate with
                    // Error() containing the index of element that is greater or equal to one we
                    // searched for
                    Ordering::Equal => Ordering::Greater,
                    Ordering::Greater => Ordering::Greater,
                })
                .unwrap_err() as i32;

            result[i] = (num_potions - left) as i32;
        }

        result
    }
}
```

Binary search example:

```rust
#[test]
fn test6() {
	// 4 is missing
	let sample = vec![1, 2, 3, 5, 6, 7, 7];
	let left = sample
		.binary_search_by(|&potion| match potion.cmp(&4) {
			Ordering::Less => Ordering::Less,
			Ordering::Equal => Ordering::Greater,
			Ordering::Greater => Ordering::Greater,
		})
		.unwrap_err();
	assert_eq!(sample[left], 5);

	let left = sample
		.binary_search_by(|&potion| match potion.cmp(&3) {
			Ordering::Less => Ordering::Less,
			Ordering::Equal => Ordering::Greater,
			Ordering::Greater => Ordering::Greater,
		})
		.unwrap_err();
	assert_eq!(sample[left], 3);
}
```

Equivalent for:

```rust
impl Solution {
    pub fn successful_pairs(spells: Vec<i32>, mut potions: Vec<i32>, success: i64) -> Vec<i32> {
        let num_potions = potions.len();
        potions.sort_unstable();

        let mut result = vec![0; spells.len()];

        for (i, spell) in spells.into_iter().enumerate() {
            let mut left = 0;
            let mut right = num_potions;

            while left < right {
                let mid = left + (right - left) / 2;
                if spell as i64 * potions[mid] as i64 >= success {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }

            result[i] = (num_potions - left) as i32;
        }

        result
    }
}
```