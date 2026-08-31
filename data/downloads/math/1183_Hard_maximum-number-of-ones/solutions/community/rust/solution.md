# Heap

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ones/solutions/3982518/](https://leetcode.com/problems/maximum-number-of-ones/solutions/3982518/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key observation here is that in order for a sliding subsquare to maintain a constant count of 1s within a bigger rectangle, each 1 has to be positioned at `i|j, i|j + side_len, i|j + 2*side_len, ...` Given that, for each `i,j` coordinates of the square, we can calculate how many 1s can fit in the whole rectangle, then select top k

# Complexity
- Time complexity: $O(side\\_length^2*log(max\\_ones))$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(max\\_ones)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::{collections::BinaryHeap, cmp::Reverse};

impl Solution {
    pub fn maximum_number_of_ones(width: i32, height: i32, side_length: i32, max_ones: i32) -> i32 {
        let mut heap = BinaryHeap::new();
        for i in 0..side_length {
            for j in 0..side_length {
                heap.push(Reverse(((width - 1 - i) / side_length + 1) * ((height - 1 - j) / side_length + 1)));
                if heap.len() > max_ones as usize { heap.pop(); }
            }
        }
        heap.into_iter().map(|Reverse(ones)| ones).sum()
    }
}
```