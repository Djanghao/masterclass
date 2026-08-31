# Rust solution using a fenwick tree.

**Author:** nodland
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/2326550/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/2326550/)

---

We can use a fenwick tree to efficiently track the number of *numbers less than n* by iterating through the array in reverse and adding 1 to the fenwick tree at element n + 1 for each n.
A fenwick tree is an efficient data structure for calculating and *tracking* prefix sums.
By treating each element in the array as an index into the fenwick tree, we can track the count of numbers smaller than any element.

```rust
pub fn count_smaller(nums: Vec<i32>) -> Vec<i32> {
```

We define some helper functions to easily scan through a fenwick tree.
```rust
        fn get_next(i: usize) -> usize {
            i + (i & i.overflowing_neg().0)
        }

        fn get_parent(i: usize) -> usize {
            i - (i & i.overflowing_neg().0)
        }
```

We then find the max and min of the array so we can offset the values to prevent wasted space.
```rust
        let max = nums.iter().max().unwrap();
        let min = nums.iter().min().unwrap();
```

Then, for each number in the reversed array, we scan through and let the fenwick tree be initialised with 0s with (max - min + 2) elements.
```rust
        // for each number,
        nums.iter()
            // ... in reverse
            .rev()
            // track numbers with a fenwick tree
            .scan(vec![0; (max - min + 2) as usize], |fenwick, n| {
```

We shadow n with the offset value for n and use that throughout.
```rust
                // offset n such that all values are strictly larger than 0
                let n = (n - min + 1) as usize;
```

We use the standard algorithm to add 1 to element n+1 in the fenwick tree (see the wikipedia article on fenwick trees).
```rust
                // add 1 to element n+1
                let mut i = n + 1;
                while i < fenwick.len() {
                    fenwick[i] += 1; // adding one
                    i = get_next(i);
                }
```

We also calculate the value of element n in the fenwick tree and yield that from the iterator by returning `Some(sum)`.
```rust
                // calculate the value for n
                let (mut sum, mut i) = (0, n);
                while i > 0 {
                    sum += fenwick[i];
                    i = get_parent(i);
                }

                // yield the sum
                Some(sum)
            })
```

Finally, we collect to a `Vec`, but because this resulting `Vec` is constructed in reverse, we iterate over this in reverse *again* and collect to the final `Vec`.
```rust
            // collect all the sums
            .collect::<Vec<i32>>()
            // then reverse the vector again
            .into_iter()
            .rev()
            .collect()
    }
	```