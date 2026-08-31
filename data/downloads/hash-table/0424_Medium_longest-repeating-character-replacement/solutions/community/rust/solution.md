# [Rust] Sliding window, keep char counts

**Author:** venkatrag1
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/2764749/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/2764749/)

---

# Intuition
Maintain a sliding window such that the counts of characters other than most frequent character is less than or equal to k. Consider the length of this candidate for k replacements with the length of other sliding windows.

# Approach
Keep char counts for the sliding window, growing on the right in every iteration.
Maintain max frequency counter, updating it only when a new max is found.
When sliding window shrinks due to advancing left (since we cannot satisfy with k replacements), we don't need to update max frequency because we already know the max window result len achievable with replacements on top of current max frequency, hence a decrease in max frequency cannot lead to a larger window. So we wait for next window that has a max frequency counter greater that's greater than current max frequency, to check the update the max sliding window length.


# Complexity
- Time Complexity
O(N)

- Space Complexity
O(1) since auxillary space consists of array of size 26 corresponding to number of uppercase alphabets, plus accumulators


# Code 

```
use std::cmp::max;
const NUM_ALPHA : usize = 26;

impl Solution {
    pub fn character_replacement(s: String, k: i32) -> i32 {
        let mut counts : [usize;NUM_ALPHA] = [0;NUM_ALPHA];
        let s = s.chars().collect::<Vec<_>>();
        (0..s.len()).fold((0, 0, 0), |(res_len, mut maxf, mut l), r| {
            counts[(s[r] as u8 - b'A') as usize] += 1;
            maxf = max(maxf, counts[(s[r] as u8 - b'A') as usize]);
            if (r - l + 1 ) - maxf > k as usize {
                counts[(s[l] as u8 - b'A') as usize] -= 1;
                l += 1;
            }
            (max(res_len, r - l  + 1), maxf, l)
        }).0 as i32
    }
}
```