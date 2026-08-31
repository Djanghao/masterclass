# ✅ [Rust] 17 ms, fastest (100%) solution, symmetric iterators (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/2630666/](https://leetcode.com/problems/find-all-good-indices/solutions/2630666/)

---

This [**solution**](https://leetcode.com/submissions/detail/809785306/) employs symmetric (from left&right) iterators (using dynamic dispatch) to invalidate bad indices in two passes. It demonstrated **17 ms runtime (100.00%)** and used **3.5 MB memory (88.89%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    // [a] this function is used to check both conditions:
    // - non-increasing from the left
    // - non-increasing from the right (i.e., non-decreasing from the left)
    pub fn filter_indices(nums: &Vec<i32>, idx_status: &mut Vec<bool>, k: i32, rev: bool)
    {
        let mut prev_num = 100000;
        let mut counter = 0;
        
        // [b] normal and reverse iterators in Rust have different
        //     static types, thus, we use dynamic dispatch
        let it: Box<dyn Iterator<Item=(usize,&i32)>> = 
            if rev { Box::new(nums.iter().enumerate().rev()) }
            else   { Box::new(nums.iter().enumerate()) };
        
        // [c] iterate from either of ends and count length
        //     of good sequences in order to drop bad indices
        for (i, &n) in it
        {
            if counter < k { idx_status[i] = false; }
            
            if n <= prev_num { counter += 1; }
            else             { counter = 1; }
            
            prev_num = n;
        }
    }
    
    pub fn good_indices(nums: Vec<i32>, k: i32) -> Vec<i32> 
    {
        // [0] trivial case
        if k == 1 { return (1..nums.len() as i32 - 1).collect(); }
        
        // [1] initialize with all indices being good
        let mut idx_status = vec![true;nums.len()];
        
        // [2] first, filter 'good non-increasing' indices
        Solution::filter_indices(&nums, &mut idx_status, k, false);

        // [3] second, filter 'good non-decrasing' indices
        Solution::filter_indices(&nums, &mut idx_status, k, true);
        
        // [4] return only good indices
        idx_status.iter()
            .enumerate()
            .filter(|&x| *x.1)
            .map(|x| x.0 as i32)
            .collect()
    }
}
```