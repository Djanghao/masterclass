# Rust - heap - Beats 100% - easy to understand

**Author:** ismaelpamplona
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/3952033/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/3952033/)

---

# Approach
- Heap

# Complexity
- Time complexity: $O(n log n)$
- Space complexity: $O(n)$

# Code
```rust
use std::cmp::Ordering;
use std::collections::BinaryHeap;

#[derive(Debug, PartialEq, PartialOrd)]
struct FloatWrapper(f64);

impl Ord for FloatWrapper {
    fn cmp(&self, other: &Self) -> Ordering {
        self.partial_cmp(other).unwrap()
    }
}
impl Eq for FloatWrapper {}

impl Solution {
    pub fn halve_array(nums: Vec<i32>) -> i32 {
        let mut sum = 0.0;
        let mut nums_f64 = vec![];
        for i in 0..nums.len() {
            sum += nums[i] as f64;
            nums_f64.push(FloatWrapper(nums[i] as f64));
        }
        let half = sum / 2.0;
        let mut operations = 0;
        let mut heap: BinaryHeap<FloatWrapper> = BinaryHeap::from(nums_f64);
        while sum > half {
            let max = heap.pop().unwrap().0;
            heap.push(FloatWrapper(max / 2.0));
            operations += 1;
            sum -= max / 2.0;
        }
        operations
    }
}
```