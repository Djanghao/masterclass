# Rust. Diff with median. O(n) avg.

**Author:** SmartBro
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2218358/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2218358/)

---

The task is about finding the median value and then just counting the total absolute diff of median and every value in the array.
I think that code is self-descriptive.

```rust
impl Solution {
    pub fn min_moves2(mut nums: Vec<i32>) -> i32 {
        let mid = nums.len() / 2;
        
		// quickselect algorithm for finding a median
        nums.select_nth_unstable(mid);
        
        let median = nums[mid];
        
        nums.iter().fold(0i32, |moves, num| moves + (median - num).abs())
    }
}
```