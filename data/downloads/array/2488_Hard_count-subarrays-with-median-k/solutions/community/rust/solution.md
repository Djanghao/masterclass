# [Rust] O(n) with single hashmap

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-median-k/solutions/3593583/](https://leetcode.com/problems/count-subarrays-with-median-k/solutions/3593583/)

---

The problem uses an unusual definition of median, where the median of an even-length array is the lower middle number, not the average of the two middle numbers. 

Additionally, because all array elements are distinct, there is exactly one element with value k in the array.

This means that the median of a subarray can be k **only** if it contains the single position k_pos where nums[k_pos] == k.

So, we can imagine picking an index i <= k_pos, and an index j >= k_pos, and considering the range nums[i..=j]. This range results in a median of k only if the count of numbers which are greater than k equals the count of numbers less than k, OR the count of numbers greater than k is 1 more than the count of numbers less than k.

We can split this subarray nums[i..=j] in half, considering the range nums[i..=k_pos] and nums[k_pos..=j]. If we want the net total of count(nums > k) - count(nums < k) to equal 0 or 1 overall, then that means we need the left net count + right net count to be 0 or 1.

We can scan on the left side to build up a count of how many subarrays exist for some i <= k_pos where nums[i..=k_pos] has each net count. Once we have this, we can then start from k_pos and scan rightward to get the similar count, and then sum up the number of left side only arrays which have the correct inverse net count.


# Complexity
- Time complexity: O(n), we do one scan of nums to find k_pos, and then two half-scans to build up the left balances and final output.

- Space complexity: O(n) to store the hashmap of left balances.

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn count_subarrays(nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();

        let k_pos = if let Some(pos) = nums.iter().position(|&num| num == k) { pos } else {
            return 0;
        };

        let mut left_balances = HashMap::<i32, i32>::new();

        let mut running = 0;

        for i in (0..=k_pos).rev() {
            if nums[i] > k {
                running += 1;
            } else if nums[i] < k{
                running -= 1;
            }
            *left_balances.entry(running).or_default() += 1;
        }

        running = 0;
        let mut output = 0;
        for i in (k_pos..n) {
            if nums[i] > k {
                running += 1;
            } else if nums[i] < k{
                running -= 1;
            }
           output += left_balances.get(&(-running)).cloned().unwrap_or(0);
           output += left_balances.get(&(1-running)).cloned().unwrap_or(0);
        }
        output
    }
}
```