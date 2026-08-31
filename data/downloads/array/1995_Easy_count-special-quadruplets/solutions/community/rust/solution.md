# sort is **unused

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/5052825/](https://leetcode.com/problems/count-special-quadruplets/solutions/5052825/)

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
  pub fn count_quadruplets(nums: Vec<i32>) -> i32 {
    let sz = nums.len();
    let mut sorted = nums.clone();
    sorted.sort();
    let mut res = 0;
    for i in 0..sz-3 {
      for j in i+1..sz-2 {
        for k in j+1..sz-1 {
          for l in k+1..sz {
            if nums[i]+nums[j]+nums[k] == nums[l] {
              res+=1;
            }
          }
        }
      }
    }
    res
  }
}
```