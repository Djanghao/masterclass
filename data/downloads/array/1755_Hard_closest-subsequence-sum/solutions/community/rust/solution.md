# ✅ [JS/Rust] Meet-in-the-middle Approach w/ explanation 🔥

**Author:** ad0x99
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-subsequence-sum/solutions/5984826/](https://leetcode.com/problems/closest-subsequence-sum/solutions/5984826/)

---

**\uD83D\uDC4D If you found my solution to be beneficial, I would be most grateful if you would consider \u261D\uFE0FUPVOTING IT\u261D\uFE0F. This action would serve as a significant motivation for me to continue providing additional solutions in the future. \uD83D\uDE46\u200D\u2642\uFE0F**

---

# Meet-in-the-middle Approach

**Idea:**

1. Divide the array into 2 halves.
2. Generate all possible subset sums in both halves.
3. Assume the first half is the based comparison, finding the target value in the second half such that the `target = goal - firstHalfCurrentSum`. We want to find the closest value in the second half that less than or equal to `target`, because we want to minimize the total sum as minimum as possible.
4. Calculate the minimum difference.

**Implementation**

1. **Splitting the Problem - Meet in the Middle**: We divide the `nums` array into two halves:
    - 1.1: The `firstHalf` contains the first half of the array.
    - 1.2: The `secondHalf` contains the second half of the array.
    - 1.3: This is done to reduce the search space since calculating the subset sums of each half separately (2 subsets per half) is computationally feasible, whereas calculating all subsets for large arrays in one go (`2^n` - where `n` is the length of `nums`) would be very slow.

2. **Finding All Subset Sums for Each Half**: We use `findSubsetSums` function to generate all possible subset sums for a given range of indices within `nums`. It does this by:
    - 2.1: Iterating through each possible subset represented by a binary number where each bit represents the inclusion (1) or exclusion (0) of an element in the subset.
    - 2.2: Calculating the sum of the elements in each subset and storing these sums in an array.
    - 2.3: After running `findSubsetSums`, we have: the `firstHalfSums` stores all subset sums for the first half of the array, and the `secondHalfSums` stores all subset sums for the second half of the array, sorted in ascending order for efficient searching.

3. **Using Binary Search to Find Closest Sums**: The core of the algorithm is to find, for each sum in `firstHalfSums`, the subset sum in `secondHalfSums` that, when added to it, gets closest to goal. This is done by:
    - 3.1: Calculating the target for each `currentSum` in `firstHalfSums` as `goal - currentSum`.
    - 3.2: Using binary search (the `findClosesIndex` function) to quickly locate the closest sum to target in `secondHalfSums`.
    - 3.3: The `findClosesIndex` function performs a binary search to find the index of the element in `secondHalfSums` that is closest to target. By finding the index of the closest match (or closest below the target), it allows efficient selection of the closest possible subset sum.

4. **Calculating the Minimum Difference**: After finding the closest subset sum in `secondHalfSums` for each `currentSum` in `firstHalfSums`, we:
    - 4.1: Compute the absolute difference between goal and the sum of `currentSum` with this closest match.
    - 4.2: Update minDiff to hold the smallest of these differences.


# Complexity

- Time complexity: `O(2^n/2 + 2^n/2 + n/2 * 2^n/2 + n/2 * 2^n/2)` = `O(n * 2^n/2)`
    - Generating subsets: `O(2^n/2 + 2^n/2)`
    - Sorting: `O(n/2 * 2^n/2)`
    - Binary Search: `O(n/2 * 2^n/2)`

- Space complexity: `O(2^n/2)` due to storing all subset sums for each half.

# Code

```javascript []
const minAbsDifference = (nums, goal) => {
  const n = nums.length;
  const half = Math.floor(n / 2);

  // Base case for single-element array
  if (n === 1) {
    return Math.min(Math.abs(goal), Math.abs(nums[0] - goal));
  }

  // Split the array into 2 halves and generate all possible subset sum for each half of the array
  const firstHalfSums = findSubsetSums(nums, 0, half - 1);
  // Sort the right half's subset sums for binary search
  const secondHalfSums = findSubsetSums(nums, half, n - 1).sort(
    (a, b) => a - b
  );

  // Find the closest sum in the second half using lower bound - binary search
  let minDiff = Infinity;

  for (const currentSum of firstHalfSums) {
    const target = goal - currentSum;

    // Binary search to find the closest value to target
    const closestIndex = findClosesIndex(secondHalfSums, target);

    // Update the minimum difference using the closest values found
    if (closestIndex > 0) {
      minDiff = Math.min(
        minDiff,
        Math.abs(goal - (currentSum + secondHalfSums[closestIndex - 1]))
      );
    }

    minDiff = Math.min(
      minDiff,
      Math.abs(goal - (currentSum + secondHalfSums[closestIndex]))
    );
  }

  return minDiff;
};

// Generate all subset sums for a section of the array
const findSubsetSums = (array, start, end) => {
  const sums = [];
  const n = end - start + 1;

  // Iterate over 0 -> 2^n (total number of subsets possible for n elements)
  for (let i = 0; i < 1 << n; i++) {
    let currentSum = 0;

    for (let j = 0; j < n; j++) {
      // If the j-th bit in i is 1 (meaning the j-th element in the range should be included in the subset).
      if (i & (1 << j)) {
        currentSum += array[start + j];
      }
    }

    sums.push(currentSum);
  }

  return sums;
};

// Find the closest index to the target using binary search
const findClosesIndex = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
```
```rust []
impl Solution {
    pub fn min_abs_difference(nums: Vec<i32>, goal: i32) -> i32 {
        let n = nums.len();
        let half = n / 2;

        // Base case for single-element array
        if n == 1 {
            return (goal - nums[0]).abs().min(goal.abs());
        }

        // Split the array into 2 halves and generate all possible subset sum for each half of the array
        let first_half_sums = Self::find_subset_sums(&nums, 0, half - 1);
        let mut second_half_sums = Self::find_subset_sums(&nums, half, n - 1);

        // Sort the second half's subset sums for binary search
        second_half_sums.sort_unstable();

        // Find the closest sum in the second half using lower bound - binary search
        let mut min_diff = i32::MAX;

        for &current_sum in &first_half_sums {
            let target = goal - current_sum;

            // Binary search to find the closest value to target
            let closest_index = Self::find_closest_index(&second_half_sums, target);

            // Update the minimum difference using the closest values found
            if closest_index > 0 {
                min_diff =
                    min_diff.min((goal - (current_sum + second_half_sums[closest_index - 1])).abs())
            }

            min_diff = min_diff.min((goal - (current_sum + second_half_sums[closest_index])).abs())
        }

        min_diff
    }

    // Generate all subset sums for a section of the array
    fn find_subset_sums(array: &Vec<i32>, start: usize, end: usize) -> Vec<i32> {
        let n = end - start + 1;
        let mut sums = Vec::new();

        // Iterate over 0 -> 2^n (total number of subsets possible for n elements)
        for i in 0..(1 << n) {
            let mut current_sum = 0;

            for j in 0..n {
                // If the j-th bit in i is 1 (meaning the j-th element in the range should be included in the subset).
                if i & (1 << j) != 0 {
                    current_sum += array[start + j]
                }
            }

            sums.push(current_sum);
        }

        sums
    }

    // Find the closest index to the target using binary search
    fn find_closest_index(array: &Vec<i32>, target: i32) -> usize {
        let mut left = 0;
        let mut right = array.len() - 1;

        while left < right {
            let mid = (left + right) / 2;

            if array[mid] < target {
                left = mid + 1;
            } else {
                right = mid
            }
        }

        left
    }
}
```
