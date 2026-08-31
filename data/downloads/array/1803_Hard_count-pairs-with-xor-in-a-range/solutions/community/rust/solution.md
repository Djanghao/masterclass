# took 30s to write

**Author:** 1Capito1
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/4686402/](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/solutions/4686402/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn count_pairs(nums: Vec<i32>, low: i32, high: i32) -> i32 {
   let mut n_nice_pairs = 0;

    for i in 0..nums.len() {
        for j in i + 1..nums.len() {
            let xor_result = nums[i] ^ nums[j];

            if xor_result >= low && xor_result <= high {
                n_nice_pairs += 1;
            }
        }
    }
    return n_nice_pairs
    }
}
```