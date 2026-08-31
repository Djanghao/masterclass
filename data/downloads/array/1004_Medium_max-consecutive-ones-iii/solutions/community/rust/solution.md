# Rust - solution

**Author:** harshitkumar
**Votes:** 3
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/2921367/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/2921367/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn longest_ones(nums: Vec<i32>, k: i32) -> i32 {
        let mut k = k;
        let arr_size = nums.len();
        let (mut start, mut end) = (0, 0);
        while end < arr_size {
            if nums[end] == 0 {
                k -= 1;
            }
            if k < 0 {
                if nums[start] == 0 {
                    k += 1;
                }
                start += 1;
            }
            end +=1;
        }

        (end - start) as i32
    }
}
```