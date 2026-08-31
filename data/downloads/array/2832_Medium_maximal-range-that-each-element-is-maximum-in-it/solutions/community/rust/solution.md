# Rust Monotonic Stack

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3953643/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3953643/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn maximum_length_of_ranges(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        
        let (mut left, mut sk) = (vec![0; n], Vec::<(i32, usize)>::new());
        for i in 0 .. n {
            while sk.is_empty() == false && sk[sk.len() - 1].0 <= nums[i] {
                sk.pop();
            }
            left[i] = if sk.is_empty() { 0 } else { sk[sk.len() - 1].1 + 1 };
            sk.push((nums[i], i)); 
        }

        let (mut right, mut sk) = (vec![0; n], Vec::<(i32, usize)>::new());
        for i in (0 .. n).rev() {
            while sk.is_empty() == false && sk[sk.len() - 1].0 <= nums[i] {
                sk.pop();
            }
            right[i] = if sk.is_empty() { n - 1 } else { sk[sk.len() - 1].1 - 1 };
            sk.push((nums[i], i)); 
        }

        let mut ret = vec![1; n];
        for i in 0 .. n { ret[i] += right[i] as i32 - left[i] as i32; }
        ret
    }
}
```