# [Rust 0ms 100%] Iterators + Set Logic

**Author:** shilangyu
**Votes:** 3
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/540567/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/540567/)

---

Getting `mins` and `maxs` with iterators and turning it into a `HashSet<i32>`. Then taking an intersection of both (=elements that appear in both sets)

```rust
use std::collections::HashSet;

impl Solution {
    pub fn lucky_numbers (matrix: Vec<Vec<i32>>) -> Vec<i32> {
        let mins: HashSet<_> = matrix.iter()
            .map(|row| *row.iter().min().unwrap()).collect();
        
        let maxs: HashSet<_> = (0..matrix[0].len())
            .map(|i| matrix.iter().map(|row| row[i]).max().unwrap()).collect();
        
        
        mins.intersection(&maxs).map(|&n| n).collect()
    }
}
```