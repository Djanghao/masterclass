# ✅ [Rust] 0 ms, two solutions: functional-style & loops  (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2557205/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2557205/)

---

This [solution](https://leetcode.com/submissions/detail/796181323/) employs a functional-style approach with two iterators and filters. It demonstrated **0 ms runtime (100%)** and used **2.1 MB memory (81.20%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn arithmetic_triplets(nums: Vec<i32>, diff: i32) -> i32 
    {
        // [1] scan elements of array
        (0..nums.len()-2)
        // [2] filter nums[i] which are starters for triples 
        //     (i.e. those nums[i] for which nums[i]+diff and nums[i]+diff*2 was found)
            .filter(|&i| 
                (i+1..nums.len())
                    // [3] filter elements which are either nums[i]+diff or nums[i]+diff*2
                    .filter(|&j| nums[j]-nums[i] == diff || nums[j]-nums[i] == diff*2)
                    // [4] count filtered elements  
                    .count() == 2)
            .count() as i32
    }
}
```

For clarity, I also proide an imperative-style [solution](https://leetcode.com/submissions/detail/796179411/) with expliit loops.
```
impl Solution 
{
    pub fn arithmetic_triplets(nums: Vec<i32>, diff: i32) -> i32 
    {
        let mut triplets: i32 = 0;
        let mut cnt: i32;
        
        // [1] scan elements of array
        for i in 0..nums.len()-2
        {
            cnt = 0;
            // [2] increase counter if diff or diff*2 is found
            for j in i+1..nums.len()
            {
                if nums[j] - nums[i] == diff || nums[j] - nums[i] == 2*diff
                {
                    cnt += 1;
            // [3] provided that array is strictly increasing, 
            //     cnt = 2 implies that perfect triple was found
                    if cnt == 2 {triplets += 1; break}
                }
            }
        }
        
        return triplets;
    }
}
```