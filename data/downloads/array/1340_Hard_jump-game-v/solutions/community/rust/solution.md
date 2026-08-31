# [RUST] TopDown DP

**Author:** keep_of_kalessin
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/2832948/](https://leetcode.com/problems/jump-game-v/solutions/2832948/)

---


```rust
pub fn max_jumps(arr: impl AsRef<[i32]>, d: i32) -> i32 {
    assert!(d >= 1);

    let arr = arr.as_ref();
    let mut cache = vec![-1; arr.len()];

    let mut max = 0;
    for from in 0..arr.len() {
        max = max.max(dfs(&arr, &mut cache, d as usize, from));
    }

    max
}

fn dfs(arr: &[i32], cache: &mut [i32], lim: usize, from: usize) -> i32 {
    // If we have already visited the current building, 
    // then we can return immediately
    if cache[from] >= 0 {
        return cache[from];
    }

    let mut visited = 0;

    // Iterate in reverse order because we cannot jump over buildings 
    // that are taller than the current building
    for idx in (from.saturating_sub(lim)..from).rev() {
        // Break if we encounter a building that is not shorter, 
        // because we cannot jump to/over it
        if arr[from] <= arr[idx] {
            break;
        }

        visited = visited.max(dfs(arr, cache, lim, idx));
    }

    for idx in from + 1..arr.len().min(from + lim + 1) {
        // Break if we encounter a building that is not shorter, 
        // because we cannot jump to/over it
        if arr[from] <= arr[idx] {
            break;
        }

        visited = visited.max(dfs(arr, cache, lim, idx));
    }

    // Add 1, in order to account for the current building
    visited += 1;

    // Remember the number of visited buildings from the current one
    cache[from] = visited;

    visited
}
```
