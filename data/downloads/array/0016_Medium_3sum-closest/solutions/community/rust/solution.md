# ✅ [Rust] 33 ms, fastest (100%) two-pointers solution (with detailed comments)

**Author:** iablokov
**Votes:** 3
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/2675865/](https://leetcode.com/problems/3sum-closest/solutions/2675865/)

---

This [**solution**](https://leetcode.com/submissions/detail/817764364/) employs a two-pointers approach with sorting. It demonstrated **33 ms runtime (100.00%)** and used **2.2 MB memory (15.46%)**. Time complexity is quadratic: **O(N\\*N)**. Space complexity is constant: **O(1)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn three_sum_closest(mut nums: Vec<i32>, target: i32) -> i32 
    {
        // [1] sorting would allow us to use two pointers
        nums.sort_unstable();
        let mut best_diff: i32 = i32::MAX;
        
        // [2] use two pointers 'l' and 'r' that converge towards 
        //     one another for each first element 'i'
        for i in 0..nums.len()
        {
            let mut l = i + 1;
            let mut r = nums.len() - 1;
            let pre_diff = nums[i] - target;
            while l < r
            {
                let diff = pre_diff + nums[l] + nums[r];
                if diff.abs() < best_diff.abs() { best_diff = diff; }
                match diff.signum()
                {
                    1  => r -= 1,
                    -1 => l += 1,
                    0  => return target,
                    _  => unreachable!()
                }
            }
        }
        
        return target + best_diff;
    }
}
```
