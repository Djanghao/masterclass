# Rust Solution

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/collecting-chocolates/solutions/3626945/](https://leetcode.com/problems/collecting-chocolates/solutions/3626945/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Simple double loop. 

A very nice problem. However, the description could/should be much better.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn min_cost(nums: Vec<i32>, x: i32) -> i64 {
        let mut nums = nums;
        let (n, mut ret) = (nums.len(), i64::MAX);

        for k in 0 .. n as i64 {
            let temp = nums.iter().map(|a| (*a) as i64).sum::<i64>();
            ret = ret.min(temp + k * x as i64);
            if k == n as i64 - 1 { break }

            let mut temp = vec![0; n];
            for i in 0 .. n {
                temp[i] = nums[i].min(nums[(i + 1) % n]);
            }
            nums = temp;
        } 

        ret
    }
}
```