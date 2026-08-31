# Simple Rust Beats 100%

**Author:** PNT-SWS
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/6088403/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/6088403/)

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
```rust []
impl Solution {
    pub fn can_be_increasing(nums: Vec<i32>) -> bool {
        if nums.len() == 2 {
            return true;
        }    

        let mut p = 0 ;
        let mut f: i32 = 0;

        for i in 1..nums.len(){
            if nums[i] <= nums[i-1]{
                p+=1;
                if p == 1 {
                    f = i as i32;
                }

            }
        }
        if p == 0 {
            return true;
        }

        if p > 1 {
            return false;
        }

        if f - 2 >= 0 && nums[(f-2) as usize] < nums[f  as usize]{
            return true;
        }

        if f == 1 || f == ((nums.len() -1) as i32) {
            return true;
        }

        if f - 1 >= 0 && f + 1 < (nums.len()  as i32) && nums[(f-1)  as usize] < nums[(f+1)  as usize] {
            return true;
        }

        return false;
    }
}
```