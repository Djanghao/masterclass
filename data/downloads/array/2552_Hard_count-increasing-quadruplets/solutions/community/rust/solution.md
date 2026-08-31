# Rust Answer

**Author:** MakotoD
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-increasing-quadruplets/solutions/3813132/](https://leetcode.com/problems/count-increasing-quadruplets/solutions/3813132/)

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn count_quadruplets(nums: Vec<i32>) -> i64 {
        let len = nums.len();
        let mut mat_ij = vec![vec![0;len];len+1];
        let mut mat_kl = vec![vec![0;len];len+1];
        for i in 0..len {
            for j in 0..len {
                mat_ij[i+1][j]=mat_ij[i][j]+if nums[i]<nums[j] {1} else {0};
                mat_kl[len-i-1][j]=mat_kl[len-i][j]+if nums[len-i-1]>nums[j] {1} else {0};
            }
        }
        let mut sum = 0;
        for i in 0..len-1 {
            for j in i+1..len {
                if nums[i]>nums[j] {sum+=(mat_ij[i+1][j]*mat_kl[j][i]) as i64;}
            }
        }
        sum
    }
}
```