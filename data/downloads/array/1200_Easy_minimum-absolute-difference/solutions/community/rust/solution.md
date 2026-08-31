# 💥 Runtime beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/5725349/](https://leetcode.com/problems/minimum-absolute-difference/solutions/5725349/)

---

# Intuition
To find pairs with the smallest difference in an array, it's easier if the array is sorted. Then, the smallest differences will be between consecutive elements.

# Approach
Sort the array to ensure consecutive elements have the smallest differences.

Scan through the sorted array to calculate the difference between each consecutive pair.

Track the minimum difference and collect all pairs that have this difference.

# Complexity
- Time complexity:
O(n log n) due to sorting the array.

- Space complexity:
O(n) for storing the result pairs.

# Code
```rust []
impl Solution {
    pub fn minimum_abs_difference(mut arr: Vec<i32>) -> Vec<Vec<i32>> {
        // Sort the array first
        arr.sort_unstable();

        // Initialize variables to track the minimum difference
        let mut min_diff = i32::MAX;
        let mut result = Vec::new();

        // Iterate over the sorted array to find the minimum difference
        for i in 1..arr.len() {
            let diff = arr[i] - arr[i - 1];
            if diff < min_diff {
                min_diff = diff;
                result.clear();
                result.push(vec![arr[i - 1], arr[i]]);
            } else if diff == min_diff {
                result.push(vec![arr[i - 1], arr[i]]);
            }
        }

        result
    }
}

```