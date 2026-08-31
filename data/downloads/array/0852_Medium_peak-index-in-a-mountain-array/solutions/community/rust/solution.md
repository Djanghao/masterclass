# Rust | binary_search_by + unsafe

**Author:** tifv
**Votes:** 3
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3812093/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3812093/)

---

So, there is a `.binary_search_by` method for Rust slices, is it any good here? It gives only one isolated element to the comparator function, and we need to compare the element with the adjacent ones, so\u2026 not quite. But we can load adjacent elements with some unsafe code.

```
impl Solution {
    pub fn peak_index_in_mountain_array(arr: Vec<i32>) -> i32 {
        let n = arr.len();
        assert!(n >= 2);
        return arr[1..n-1].binary_search_by(
            |num_ref| {
                let [a, b, c] = unsafe {
                    // SAFETY: we have at least one element behind 
                    // and one element ahead of num_ref
                    *((num_ref as *const i32).offset(-1) as *const [i32; 3])
                };
                use std::cmp::Ordering::{Less, Equal, Greater};
                match (a < b, b > c) {
                    (true, true) => Equal,
                    (true, false) => Less,
                    (false, true) => Greater,
                    _ => panic!(),
                }
            }
        ).unwrap() as i32 + 1;
    }
}
```

P.S. One should know where to use `unsafe`, and this is not a good place. From the design viewpoint, it is better to safely reimplement the binary search, as other solutions show.