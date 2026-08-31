# [Rust] Backtracking solution with comments (updated for the new test cases)

**Author:** keep_of_kalessin
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/1495552/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/1495552/)

---

Updated (2022-07) solution that passes the new test cases

```rust
use std::collections::HashSet;

pub fn can_partition_k_subsets(mut nums: Vec<i32>, mut k: i32) -> bool {
    assert!(nums.len() <= 16);
    let group_sum = match find_group_sum(&nums, k) {
        None => return false,
        Some(sum) => sum,
    };

    // As we have only up to 16 elements it's cheap to sort the array
    // That would allow us to easily check if it's not possible to
    // partition the array and also allow us to reduce the size of
    // the array, thus speeding up the backtracking later
    nums.sort_unstable_by(|a, b| a.cmp(b).reverse());

    // If the largest element is larger than the subset sum, then
    // it's not possible to partition the array
    if nums[0] > group_sum {
        return false;
    }

    // Remove the elements of the slice, that are equal to the
    // sub-set sum. That would speed up the backtracking later
    // because we would be working with a smaller array.
    let mut nums = nums.as_slice();
    while k > 0 && nums.len() > 0 && nums[0] == group_sum {
        k -= 1;
        nums = &nums[1..];
    }

    // If we hit the corner case, where all elements were of the same size
    // and equal to the target sub-set sum, then we can immediately tell
    // if it's possible to partition the array
    if k == 0 && nums.len() == 0 {
        return true;
    }

    if k as usize > nums.len() || k == 0 && nums.len() > 0 {
        return false;
    }

    let mut failures = HashSet::new();
    backtrack(nums, &mut failures, 0, group_sum, 0)
}

fn find_group_sum(nums: &[i32], groups: i32) -> Option<i32> {
    if nums.is_empty() || groups as usize > nums.len() {
        return None;
    }

    let sum = nums.iter().sum::<i32>();
    if sum % groups != 0 {
        return None;
    }

    Some(sum / groups)
}

fn backtrack(
    nums: &[i32],
    failures: &mut HashSet<u16>,
    mask: u16,
    target: i32,
    mut sum: i32,
) -> bool {
    if failures.contains(&mask) {
        return false;
    }

    if target == sum {
        if mask.count_ones() == nums.len() as u32 {
            return true;
        }

        sum = 0;
    }

    for idx in 0..nums.len() {
        // Skip the already used elements
        if (1u16 << idx) & mask != 0 {
            continue;
        }

        let next_sum = sum + nums[idx];

        if next_sum <= target {
            let next_mask = mask | (1 << idx);

            if backtrack(nums, failures, next_mask, target, next_sum) {
                return true;
            }
        }
    }

    failures.insert(mask);
    false
}
```