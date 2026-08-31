# Simple rust solution

**Author:** kakafire
**Votes:** 0
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/4802309/](https://leetcode.com/problems/pancake-sorting/solutions/4802309/)

---

We rely on the fact that the numbers are all in the range 1 .. arr.len():

Therefore, in an ordered array, the maximal element m is at index m - 1.

Now, we do a pair of flips to get the maximal element of arr into the last position.

We identify the index of the maximum element by search. We flip the array up to and including that source index (source of the maximal element).
This moves the maximum element to the leftmost position.

Then, we flip up to and including the destination index of m (which is m - 1), to its correct and final position.

We repeat these steps, treating the array as if it were one element shorter, and decrease the maximal element we want to move to the right, by one.

```rust
fn pancake_sort(mut a: Vec<i32>) -> Vec<i32> {
  let mut flips = vec![];
  for curr_max in (1..=a.len()).rev() {
    let src_index = a.iter().position(|&x| x == curr_max as i32).unwrap();
    let dst_index = curr_max - 1;
    a[..=src_index].reverse();
    a[..=dst_index].reverse();
    flips.push((src_index + 1) as i32);
    flips.push((dst_index + 1) as i32);
  }
  flips
}
```
