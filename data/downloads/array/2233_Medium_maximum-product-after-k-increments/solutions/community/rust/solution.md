# [Rust] Very efficient O(n log n) solution || No heap || No allocations

**Author:** Jan561
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/3198139/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/3198139/)

---

# Complexity
- Time complexity: $$O(n \\log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const BASE: usize = 10usize.pow(9) + 7;

impl Solution {
    pub fn maximum_product(mut nums: Vec<i32>, k: i32) -> i32 {
        nums.sort_unstable();

        let mut cur_index = 0;

        for _ in 0..k {
            while cur_index + 1 < nums.len() && nums[cur_index] == nums[cur_index + 1] {
                cur_index += 1;
            }

            nums[cur_index] += 1;

            if cur_index > 0 && nums[cur_index] > nums[cur_index - 1] {
                cur_index -= 1;
            }
        }

        let mut prod = 1usize;

        for e in nums {
            prod = (prod * e as usize) % BASE;
        }

        prod as i32
    }
}

```