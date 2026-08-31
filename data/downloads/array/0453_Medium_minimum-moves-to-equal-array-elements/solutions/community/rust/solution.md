# Rust nlog(n) baby

**Author:** duncpro
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/5945952/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/5945952/)

---

# Complexity
- Time complexity: $n\\log(n)$
- Space complexity: Constant baby

# Code
```rust []
impl Solution {
    pub fn min_moves(mut nums: Vec<i32>) -> i32 {
        nums.sort();

        let mut inc: i32 = 0;
        while nums.len() > 1 {
            let min = nums[0] + inc;
            let max = *nums.last().unwrap() + inc;
            inc += (max - min);
            nums.pop();
        }

        return inc;
    }
}
```