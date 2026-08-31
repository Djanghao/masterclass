# ✅ [Rust] 26 ms, fastest (100%) one-pass solution (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2598845/](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2598845/)

---

This [**solution**](https://leetcode.com/submissions/detail/810097381/) employs a one-pass algorithm to update first-occurence positions of bits. It demonstrated **26 ms runtime (100.00%)** and used **3.5 MB memory (80.29%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn smallest_subarrays(nums: Vec<i32>) -> Vec<i32> 
    {
        let mut ret: Vec<i32> = vec![1;nums.len()];
        
        // [1] when performing OR operation on an array, 
        //     we care only about the first occurence of each bit,
        //     because all subsequent occurences do not change the result;
        //     thus, we should arrange a storage 'bit_idx' for the positions of 
        //     the first occurence of each bit; 
        let mut bit_idx: [i32;30] = [0;30];

        let mut max_pos : i32;
        let mut bit     : i32;
        
        // [2] for a one-pass solution, we iterate over 'nums' from the end;
        //     this allows us to dynamically update the first occurence of bits;
        //     terminal zeros are skipped, their respective minimal subarray size is 1
        for (pos, &n) in nums.iter().enumerate().rev().skip_while(|(_,n)| **n == 0)
        {
            // [3] for each bit, update the earliest/first position it was seen at;
            //     here we use an arithmetic way to update 'bit_idx',
            //     use of conditional statement is slower
            for b in 0..30
            {
                bit = (n >> b) & 1;
                bit_idx[b] = (1 - bit) * bit_idx[b] + bit * (pos as i32);
            }

            // [4] minimal subarray/window is the one that accounts for all bits
            //     that were seen at least once 
            max_pos = *bit_idx.iter().max().unwrap();
            ret[pos] = max_pos - pos as i32 + 1;
        }
        
        return ret;
    }
}
```