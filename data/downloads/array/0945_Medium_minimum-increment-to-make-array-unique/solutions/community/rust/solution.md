# [Rust] Track carry state + Gauss summation, beats 100%

**Author:** tiedyedvortex
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5309909/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5309909/)

---

# Intuition/Approach
If we have two or more of the same number, we can leave one where it is, but have to advance the others. Call the amount that need to be shifted up the "carry".

If the next highest number is one higher, then we have to advance all of the carry by 1, and we don't reduce the carry.

If the next highest number is more than one higher, then we get a gap, and we can deposit some or all of the carry.

If the width of this gap is at least as much as the carry, then we need to advance one number 1, one number 2 times, etc. up to one number carry times. Afterwards, our carry is gone.

If the width is less than the carry, we can still deposit as much as we can, but then the remainder is kept as carry, and has to be advanced the full distance from the previous number to the next number.

Finally, when we are off the end of nums, we can deposit all of the remaining carry in the same way.

# Complexity
- Time complexity: O(n log n). Our time complexity is dominated by the sort; the remaining scan is O(n).

- Space complexity: O(1) because we use sort_unstable for in-place sorting, and use a fixed amount of memory otherwise.

# Code
```
impl Solution {
    pub fn min_increment_for_unique(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();

        let mut out = 0;
        let mut carry = 0;
        let mut prev = nums[0];
        for &num in &nums[1..] {
            if num == prev {
                carry += 1;
                continue;
            }

            let deposited = (num - prev - 1).min(carry);
            out += (deposited * (deposited + 1)) / 2;
            carry -= deposited;
            out += carry * (num - prev);
            prev = num;
        }
        if carry > 0 {
            out += (carry * (carry + 1)) / 2;
        }
        out
    }
}
```