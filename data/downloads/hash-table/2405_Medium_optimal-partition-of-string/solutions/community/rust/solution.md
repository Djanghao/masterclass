# ✅ [Rust] 0 ms, two solutions (with detailed comments)

**Author:** iablokov
**Votes:** 3
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/2562947/](https://leetcode.com/problems/optimal-partition-of-string/solutions/2562947/)

---

This [solution](https://leetcode.com/submissions/detail/797212031/) employs a simple array to keep track of duplicate letters. It demonstrated **0 ms runtime (100.00%)** and used **2.3 MB memory (100.00%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn partition_string(s: String) -> i32 
    {
        // [1] use simple array to keep track of unique letters
        let mut letters = [false;26];
        
        // [2] count how many times we encountered duplicates
        s.bytes().map(|c| (c - b'a') as usize).filter(|&i| 
            {
                let f = letters[i];
                if f { letters.fill(false); }
                letters[i] = true;
                f
            }
        ).count() as i32 + 1
    }
}
```

There is also a slower [solution](https://leetcode.com/submissions/detail/797184265/) with a HashSet:
```
use std::collections::HashSet;

impl Solution 
{
    pub fn partition_string(s: String) -> i32 
    {
        // [1] use HashSet to keep track of unique letters
        let mut letters: HashSet<char> = HashSet::with_capacity(26);
        
        // [2] count how many times we had to clear HashSet (i.e., encountered duplicates)
        s.chars().filter(|c| 
            {
                let f = letters.contains(c);
                if f { letters.clear(); }
                letters.insert(*c);
                f
            }
        ).count() as i32 + 1
    }
}
```