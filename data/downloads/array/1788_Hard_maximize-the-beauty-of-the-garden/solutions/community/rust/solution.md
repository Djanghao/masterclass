# Rust | Greedy + Prefix Sum, no HashMap

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/3928753/](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/3928753/)

---

# Intuition

Given the boundary values, we can greedily maximize the beauty of a valid garden with that boundary value by choosing as many flowers as possible!! (why?)

# Approach

For each possible boundary value, find out the garden with as many flowers as possible. This can be done with... a hashmap, but **sorting** also works.

To find the maximum beauty for a garden beginning at `i` and ending at `j`, we can simply calculate the **sum of positive elements** in `flowers[i+1:j]`. To speed up this operation, a **prefix sum** array can be used.

# Complexity
- Time complexity:
$$O(n \\log n)$$ from sorting.

- Space complexity:
$$O(n)$$

# Code
```rust
pub fn to_pref_sum(vec: Vec<i32>) -> Vec<i32> {
    let mut ret = vec![0i32];
    
    let mut pref_sum = 0i32;
    for e in vec {
        if e > 0 { pref_sum += e; }
        ret.push(pref_sum);
    }

    ret
}

impl Solution {
    pub fn maximum_beauty(vec: Vec<i32>) -> i32 {
        let pref_vec = to_pref_sum(vec.clone());

        let mut idx_map = vec.into_iter()
            .enumerate()
            .map(|(i, e)| (e, i))
            .collect::<Vec<_>>();
        idx_map.sort_unstable();

        let mut ret = i32::MIN;

        let (mut ptr, mut ptr_next) = (usize::MIN, usize::MIN);
        while ptr_next < idx_map.len() {
            std::mem::swap(&mut ptr, &mut ptr_next);

            let (e, i_start) = idx_map[ptr];
            ptr_next = idx_map.partition_point(
                |&(_e, _)| _e <= e
            );
            if ptr + 1 >= ptr_next { continue; }

            let (_, i_end) = idx_map[ptr_next - 1];
            
            let mut _ret = e * 2;
            _ret += pref_vec[i_end];
            _ret -= pref_vec[i_start + 1];

            ret = ret.max(_ret);
        }

        ret
    }
}
```