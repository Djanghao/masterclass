# Rust DFS & DP O(n*m*log(m))

**Author:** hucancode
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solutions/3647284/](https://leetcode.com/problems/make-array-strictly-increasing/solutions/3647284/)

---

# Intuition
Let's say we traverse `arr1` and encounter a abnormal positioning. How do we pick number from `arr2` to adjust that?
- We don't want to pick large number early because that's only put us into disavantage situation
- For each decision, we want to pick smallest number that do not break the `arr1`'s constraint (strictly increasing)
- To do so we must sort `arr2` and do binary search

# Approach
- DFS and find the lowest cost. That's the first thing come to my mind but sadly it's TLE
- DP, let $f(i,j)$ is the minimum possible of $arr1(j)$ if we only allowed to pick at most $i$ items from $arr2$

# Complexity
- Time complexity: $O(n\	imes m\	imes log(m))$
    - With DFS approach: $O(n\	imes m^2\	imes log(m))$
- Space complexity: $O(n\	imes m)$
    -  Can be further optimized to $O(n)$

# Code
DFS (TLE)
```rust
use std::cmp::min;
impl Solution {
    pub fn make_array_increasing(mut arr1: Vec<i32>, mut arr2: Vec<i32>) -> i32 {
        let n = arr1.len();
        arr2.sort();
        let mut ret = n+1;
        let mut q = Vec::new();
        q.push((0, arr1[0], 1));
        if arr2[0] < arr1[0] {
            q.push((1, arr2[0], 1));
        }
        while let Some((cost, top, i)) = q.pop() {
            if i == n {
                ret = min(ret, cost);
                continue;
            }
            let mut free_option = i32::MAX;
            if arr1[i] > top {
                q.push((cost, arr1[i], i+1));
                free_option = min(free_option, arr1[i]);
            }
            let j = arr2.partition_point(|&x| x <= top);
            if j >= arr2.len() || arr2[j] > free_option {
                continue;
            }
            q.push((cost+1, arr2[j], i+1));
        }
        if ret > n {
            return -1;
        }
        ret as i32
    }
}
```
DP (AC)
```rust
use std::cmp::min;
impl Solution {
    pub fn make_array_increasing(arr1: Vec<i32>, mut arr2: Vec<i32>) -> i32 {
        let n = arr1.len();
        arr2.sort();
        arr2.dedup();
        let m = arr2.len();
        // f[i][j] = can take at most i item from arr2, what is the minimum of arr1[j]
        // f[0] = cannot take anything from arr2, so f[0] = arr1
        let mut f = vec![vec![i32::MAX;n];m+1];
        for j in 0..n {
            if j == 0 || arr1[j] > f[0][j-1] {
                 f[0][j] = arr1[j]
            } else {
                break
            }
        }
        for i in 1..=m {
            f[i][0] = min(arr1[0], arr2[0]);
            for j in 1..n {
                let prev = f[i-1][j-1];
                let k = arr2.partition_point(|&x| x <= prev);
                if k < m {
                    f[i][j] = min(f[i][j], arr2[k]);
                }
                let prev = min(prev, f[i][j-1]);
                if arr1[j] > prev {
                    f[i][j] = min(f[i][j], arr1[j]);
                }
            }
        }
        //println!("{f:?}");
        f.iter()
            .position(|a| a[n-1] != i32::MAX)
            .map_or(-1, |x| x as i32)
    }
}
```