# ✅ [Rust] 0 ms, just store two numbers (with detailed comments)

**Author:** iablokov
**Votes:** 10
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/2690737/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/2690737/)

---

This [**solution**](https://leetcode.com/submissions/detail/820173778/) employs a smart storage of an intermediate state, i.e., first & second numbers of a triplet in question. It demonstrated **0 ms runtime (100.00%)** and used **5.0 MB memory (73.08%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(1)**. Detailed comments are provided.

Please check the analogous solution in [**Python**](https://leetcode.com/problems/increasing-triplet-subsequence/discuss/2690605/Python-just-store-two-numbers-(with-detailed-comments)).

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn increasing_triplet(nums: Vec<i32>) -> bool 
    {
        if nums.len() < 3 { return false; }
        
        // [1] there exist a triple of increasing numbers if some
        //     number 'n' is greater than another number 'second'
        //     that itself is greater than yet another number 'first'
        
        let mut first  = i32::MAX;
        let mut second = i32::MAX;
        
        // [2] in the cycle, we iteratively update 'first' and 'second'
        //     numbers while waiting for the third one to appear
        for n in nums
        {
            if      n <= first  { first  = n; }
            else if n <= second { second = n; }
            else                { return true; }
        }
        
        return false;
    }
}
```
