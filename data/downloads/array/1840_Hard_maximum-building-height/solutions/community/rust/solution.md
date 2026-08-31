# Simple 3 pass solutions, beats all

**Author:** supercmmetry
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-building-height/solutions/6019629/](https://leetcode.com/problems/maximum-building-height/solutions/6019629/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
use std::cmp::{min, max};

impl Solution {
    pub fn max_building(n: i32, mut arr: Vec<Vec<i32>>) -> i32 {
        arr.sort_unstable();
        arr.insert(0, vec![1, 0]);
        
        if arr.last().unwrap()[0] != n {
            arr.push(vec![n, n - 1]);
        }

        for x in arr.iter_mut() {
            x[1] = min(x[1], x[0] - 1);
        }

        let n: usize = arr.len();

        for i in 0..n-1 {
            arr[i + 1][1] = min(arr[i + 1][1], arr[i][1] + arr[i + 1][0] - arr[i][0]);
        }

        for i in (0..n-1).rev() {
            arr[i][1] = min(arr[i][1], arr[i + 1][1] + arr[i + 1][0] - arr[i][0]);
        }

        let mut output: i32 = 0;

        for i in 0..n-1 {
            let a: i32 = min(arr[i][1], arr[i + 1][1]);
            let b: i32 = max(arr[i][1], arr[i + 1][1]);
            let c: i32 = arr[i + 1][0] - arr[i][0];

            output = max(output, (a + b + c) / 2);
        }

        output
    }
}
```