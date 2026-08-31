# 0ms | O(n) time | O(1) space | The Easiest Solution Under Constraints

**Author:** uima
**Votes:** 2
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/4928210/](https://leetcode.com/problems/first-missing-positive/solutions/4928210/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Using sign of array as Set to mark numbers that have appeared.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

(Pass array 3 times)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
impl Solution {
    pub fn first_missing_positive(mut nums: Vec<i32>) -> i32 {
        let len = nums.len();

        // Making non-positive values positive and large than `len`
        for n in &mut nums {
            if *n <= 0 {
                *n = i32::MAX;
            }
        }

        // Using sign as Set
        for i in 0..len {
            let n = (nums[i].abs() - 1) as usize;
            if n >= len {
                continue;
            }
            nums[n] = -nums[n].abs();
        }

        // Find positive number with smallest index
        (nums.into_iter().position(|x| x > 0).unwrap_or(len) + 1) as i32
    }
}

```