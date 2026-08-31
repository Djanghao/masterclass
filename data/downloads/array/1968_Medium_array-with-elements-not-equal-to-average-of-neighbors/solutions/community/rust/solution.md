# Solution by sorting and then mixing the array start with its end

**Author:** xTUVALUx
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5641421/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/5641421/)

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
    pub fn rearrange_array(mut nums: Vec<i32>) -> Vec<i32> {
        nums.sort();
        let mut out: Vec<i32> = Vec::new();
        for i in 0..nums.len() {
            if i % 2 == 0 {
                out.push(nums.remove(0));
            } else {
                out.push(nums.pop().unwrap());
            }
        }
        out
    }
}
```