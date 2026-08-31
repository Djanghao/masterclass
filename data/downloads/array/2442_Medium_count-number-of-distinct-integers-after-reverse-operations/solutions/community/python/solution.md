# ✅ [Python/Rust] fastest (100%) using hashset (with detailed comments)

**Author:** iablokov
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/2708246/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/2708246/)

---

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**

**Python.** This [**solution**](https://leetcode.com/submissions/detail/823487822/) employs a hashset to store unique values. It demonstrated **730 ms runtime (100.00%)** and used **47.6 MB memory (20.00%)**. Time complexity is linear: **O(N)**. Space complexity is linear: **O(N)**.
```
class Solution:
    def countDistinctIntegers(self, nums: List[int]) -> int:
	    # form a separate set of reverse numbers, then join with the original one
        return len(set(int(str(x)[::-1]) for n in nums).union(set(nums)))
```

**Rust.** This [**solution**](https://leetcode.com/submissions/detail/823497908/) employs a hashset to store unique values. It demonstrated **33 ms runtime (100.00%)** and used **4.6 MB memory (100.00%)**. Time complexity is linear: **O(N)**. Space complexity is linear: **O(N)**.
```
use std::collections::HashSet;

impl Solution 
{
    pub fn count_distinct_integers(nums: Vec<i32>) -> i32 
    {
        // [1] a helper function to reverse a number
        fn revnum(mut n: i32) -> i32
        {
            let mut rev : i32 = 0;
            while n > 0
            {
                rev *= 10;
                rev += (n%10);
                n   /= 10;
            }
            rev
        }
        
        // [2] first, generate a set of reverse numbers
        let mut rev_nums : HashSet<i32> = nums.iter().map(|&n| revnum(n)).collect();
        
        // [3] second, make a union with the original list
        rev_nums.extend(nums.iter());
        
        return rev_nums.len() as i32;
    }
}
```