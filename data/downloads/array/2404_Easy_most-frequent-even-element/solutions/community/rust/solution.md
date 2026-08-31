# ✅ [Rust] 7ms, fastest (100%) solution with BTreeMap (with detailed comments)

**Author:** iablokov
**Votes:** 3
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/2562508/](https://leetcode.com/problems/most-frequent-even-element/solutions/2562508/)

---

This [solution](https://leetcode.com/submissions/detail/797131469/) employs a functional-style approach with BTreeMaps to compute frequencies of even numbers and deduce the most frequent of them. It demonstrated **7 ms runtime (100%)** and used **2.2 MB memory (100%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
use std::collections::BTreeMap;

impl Solution 
{
    pub fn most_frequent_even(nums: Vec<i32>) -> i32 
    {
        // [1] to compute frequencies, we use BTreeMap that maintains sorted keys
        let mut freq: BTreeMap<i32,i32> = BTreeMap::new();
        
        // [2] populate HashMap with frequencies of even numbers
        nums.into_iter().for_each(|r| if r % 2 == 0 { *freq.entry(r).or_default() += 1 });
        
        // [3] find maximum frequency among even numbers, or return -1
        freq.into_iter().rev().max_by_key(|&pair| pair.1).unwrap_or((-1,-1)).0   
    }
}
```