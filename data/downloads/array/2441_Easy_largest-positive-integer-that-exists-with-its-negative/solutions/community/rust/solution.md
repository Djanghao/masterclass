# ✅ [Python/Rust] fastest (100%) using two pointers, binary search (with detailed comments)

**Author:** iablokov
**Votes:** 11
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/2708093/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/2708093/)

---

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**

**Python.** This [**solution**](https://leetcode.com/submissions/detail/823480874/) employs sorting and a two-pointers approach. It demonstrated **127 ms runtime (100.00%)** and used **14.2 MB memory (33.33%)**. Time complexity is log-linear (due to sorting): **O(N\\*logN)**. Space complexity is constant (in-place operations): **O(1)**. 
```
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        
        # [1] two use two-pointers approach, we need
        #     to prepare the list by sorting
        nums.sort()
        
        # [2] move pointers towards each other to find
        #     largest positive integer with its negative
        i, j = 0, len(nums)-1
        while i < j:
            if nums[i] == - nums[j]:
                return nums[j]
            if abs(nums[i]) > abs(nums[j]):
                i += 1
            else:
                j -= 1
                
        return -1
```

**Rust.** This [**solution**](https://leetcode.com/submissions/detail/823474467/) employs sorting and binary search. It demonstrated **0 ms runtime (100.00%)** and used **2.0 MB memory (100.00%)**. Time complexity is log-linear (due to sorting): **O(N\\*logN)**. Space complexity is constant (in-place operations): **O(1)**. 
```
impl Solution 
{
    pub fn find_max_k(mut nums: Vec<i32>) -> i32 
    {
        // [1] to use binary search, we need
        //     to prepare the list by sorting
        nums.sort();
        
        // [2] now we can move from the right
        //     and make binary search queries
        for i in (0..nums.len()).rev()
        {
            match nums.binary_search(&(-nums[i]))
            {
                Ok(j) => return nums[i],
                _ => {}
            }
        }
        return -1;
    }
}
```