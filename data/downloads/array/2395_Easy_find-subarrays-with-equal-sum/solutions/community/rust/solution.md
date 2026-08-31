# ✅ [Rust] 0 ms, zip-any solution using HashSet (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2540492/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2540492/)

---

This [solution](https://leetcode.com/submissions/detail/793059284/) employs a zip-any functional-style approach with *HashSet* used to store sums of neighbours. It demonstrated **0 ms runtime (100%)** and used **2.1 MB memory (96.67%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
use std::collections::HashSet;

impl Solution {
    pub fn find_subarrays(nums: Vec<i32>) -> bool 
    {
        // [1] we store sums in a HashSet with preallocated capacity
        let mut sums: HashSet<i32> = HashSet::<i32>::with_capacity(nums.len());
        
        // [2] to compute sums of neighbours, we zip them into a tuple (left,right)
        nums[1..]
            .iter()
            .zip(nums.iter())
            .any(|(&left,&right)| !sums.insert(left+right))
        // [3] HashSet::insert returns whether or not the element was newly inserted;
        //     .any() - checks for at least one duplicate sum
    }
}
```