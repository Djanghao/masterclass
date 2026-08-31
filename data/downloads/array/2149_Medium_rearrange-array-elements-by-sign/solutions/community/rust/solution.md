# Rust Two Pointer Solution

**Author:** Spork1023
**Votes:** 4
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4723583/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4723583/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn rearrange_array(nums: Vec<i32>) -> Vec<i32> {
        let mut ans = vec![0; nums.len()];
        let mut pos = 0;
        let mut neg = 1;
        for n in nums {
            let i = if n > 0 {
                &mut pos
            } else {
                &mut neg
            };
            ans[*i] = n;
            *i += 2;
        }
        ans
    }
}
```