# Rust | Counting Transformations | With Comments

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/image-overlap/solutions/2748361/](https://leetcode.com/problems/image-overlap/solutions/2748361/)

---

Enumerate all combinations of position deltas (shifts) between non-zero elements in `img1` and `img2`, and record their frequencies. The result is the maximum frequency of deltas. The official solution is open to everyone, and really offers a better explanation. So let's focus on making a nice Rust solution. :) I like solutions that are understandable, yet efficient.

Implementation notes:
* A wonderful opportunity to make a lambda to factor out the enumeration of non-zero elements and recuce code duplication.
* We cache the results of the enumeration of `img2` in a vector so that we avoid having to recompute the enumeration in the inner loop.
* But for the outer loop, we use the iterator result of `enumerate_ones` directly, so that we don't have to allocate anyting on the heap for that iteration.
* For the histogram (`transform_freqs`), we use a statically allocated array on the stack, also this to save on heap allocations. Using an array as a map is a lot faster than using a hash map, so for a map this small (60\\*60), I prefer the array. `MAX_SIZE` is given in the contstraints.
* Note the order of the operations when indexing the histogram `entry` to adjust. `r1 - r2 + MAX_SIZE` is prone to underflow, while `MAX_SIZE + r1 - r2` is safe given the constraints.
* `let entry = &mut ...` to avoid having to re-index to perform the `max` operation (more legible, and in this case helping the compiler to optimize).

```
const MAX_SIZE: usize = 30;

impl Solution {
    pub fn largest_overlap(img1: Vec<Vec<i32>>, img2: Vec<Vec<i32>>) -> i32 {
        let enumerate_ones = |img: Vec<Vec<i32>>| img.into_iter().enumerate().flat_map(|(i, row)|
            row.into_iter().enumerate().filter_map(move |(j, val)| (val == 1).then(|| (i, j)))
		);
        let ones2 = enumerate_ones(img2).collect::<Vec<_>>();
        let mut transform_freqs = [[0; 2*MAX_SIZE]; 2*MAX_SIZE];
        let mut rez = 0;
        for (r1, c1) in enumerate_ones(img1) {
            for (r2, c2) in ones2.iter() {
                let entry = &mut transform_freqs[MAX_SIZE + r1 - r2][MAX_SIZE + c1 - c2];
                *entry += 1;
                rez = rez.max(*entry);
            }
        }
        rez
    }
}
```