# [Rust] Sorting and sliding windows

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-ii/solutions/3520052/](https://leetcode.com/problems/smallest-range-ii/solutions/3520052/)

---

# Intuition
We can always choose to add k to every number in nums, preserving the old score. 

Otherwise, we want to split the list into "low numbers" and "high numbers", increase all the "low numbers" and decrease all the "high numbers". If we do this, the new maximum will be the highest of the new lows, or the highest of the new highs, and the new minimum will be the lowest of the new lows or the lowest of the new highs.

We check all possible splits (including no split) and take the best score we find.

# Approach
Sort the list, and iterate over it by windows of length 2 to find all split points. For each split, compute the new max, the new min, and the new score. Take the lowest of all of these split scores, or of the original score.

# Complexity
- Time complexity: O(n log n) to sort the list.

- Space complexity: O(1) if we sort in-place, O(n) if we have to clone nums first.
 
# Code
```
impl Solution {
    pub fn smallest_range_ii(mut nums: Vec<i32>, k: i32) -> i32 {
        nums.sort_unstable();
        let old_min = *nums.first().unwrap();
        let old_max = *nums.last().unwrap();

        nums
        .windows(2)
        .map(|window| {
            let new_max = (window[0]+k).max(old_max-k);
            let new_min = (window[1]-k).min(old_min+k);
            new_max-new_min
        })
        .min()
        .unwrap_or(0)
        .min(old_max - old_min)
    }
}
```