# Iterators linear scan

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/3527771/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/3527771/)

---

# Intuition
When we're trying to place a group in the subarray, there's never a reason to take anything but the earliest instance we find, because that gives us the longest remaining array to check afterwards. 

If we can't find a position for group, then we just return false.

If we do find a position for group i starting at position j, then we start again at at position j+ groups[i].len() for group i+1 and repeat.

# Approach
Use try_fold to allow for an early exit if we ever fail to place a group.

# Complexity
- Time complexity: O(nums.len()). Once we check a value in num against a group, we never go back to it, either because we place that group and restart at a later point, or because we fail to find the group and exit the function.

- Space complexity: O(1), no allocations necessary.

# Code
```
impl Solution {
    pub fn can_choose(groups: Vec<Vec<i32>>, nums: Vec<i32>) -> bool {
        let n = groups.len();
        let m = nums.len();

        (0..n)
        .try_fold(
            0,
            |first_possible, i| {
                let group_len = groups[i].len();
                (first_possible..=m-group_len)
                .find_map(|j| {
                    nums[j..j+group_len]
                    .iter()
                    .zip(groups[i].iter())
                    .all(|(&a, &b)| a==b)
                    .then(|| j + group_len)
                })
        })
        .is_some()
    }
}


```