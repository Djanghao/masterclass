# ✅ [Rust] 0 ms, linear scan (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/2570263/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/2570263/)

---

This [solution](https://leetcode.com/submissions/detail/798332889/) employs a simple loop to count the number of characters in the longest continuous increasing subsequence. It demonstrated **0 ms runtime (100.00%)** and used **2.0 MB memory (100.00%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn find_length_of_lcis(nums: Vec<i32>) -> i32 
    {
        let mut max_len : i32 = 0;
        let mut cur_len : i32 = 0;
        let mut prev    : i32 = -1_000_000_001;
        
        // [1] we keep track of current length 'cur_len' of subsequence
		//     and update 'max_len' every time the continuous sequence is broken
        for n in nums
        {
            if n > prev { cur_len += 1; }
            else        { max_len = max_len.max(cur_len); cur_len = 1; }
            prev = n;
        }
        
        // [2] update 'max_len' for the last continuous sequence
        max_len.max(cur_len)
    }
}
```