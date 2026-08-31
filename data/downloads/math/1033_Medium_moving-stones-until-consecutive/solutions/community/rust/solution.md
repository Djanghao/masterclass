# Clean rust

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/5043358/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/5043358/)

---

# Complexity
- Time complexity:
$$O(1)$$ 

- Space complexity:
$$O(1)$$ 

# Code
```
impl Solution {
    pub fn num_moves_stones(a: i32, b: i32, c: i32) -> Vec<i32> {
        let mut nums = vec![a, b, c];
        nums.sort_unstable();
        let d1 = nums[1] - nums[0];
        let d2 = nums[2] - nums[1];
        vec![
            if d1 == 1 && d2 == 1 {0}
            else if d1 < 3 || d2 < 3 {1}
            else {2},
            d1 + d2 - 2
        ]
    }
}
```