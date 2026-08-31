# ✅ [Rust] 11 ms, fastest (100%) one-liner + PROOF (with detailed comments)

**Author:** iablokov
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/2707159/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/2707159/)

---

This [**solution**](https://leetcode.com/submissions/detail/823174253/) employs averaging of prefix cumulative sum. It demonstrated **11 ms runtime (100.00%)** and used **3.3 MB memory (100.00%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(1)**. Detailed comments are provided.

Please check the analogous solution in [**Python**](https://leetcode.com/problems/minimize-maximum-of-array/discuss/2707345/Python-average-cumsum-%2B-PROOF-(with-detailed-comments)).

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn minimize_array_value(mut nums: Vec<i32>) -> i32 
    {
	    // here is the proof why it works...
		// [a] the flow of value is only to the left; 
        // [b] this eventually leads to a non-increasing list 'final';
        // [c] in the end, the element 'final[0]' will contain the answer;
        // [d] however, to detect this element without simulating the actual flow,
        //     we notice that, for each prefix, its average cumulative sum can
        //     not surpass the 0th element of the 'final' list (pigeonhole principle)
        // [e] the question is, will the ceiled value of the average prefix sum 
        //     ever be equal to the initial element of the resulting list (for some prefix)?
        // [f] yes, because if for ALL prefixes their average cumsum < 'final[0]'
        //     then it is simply not possible to transfer value from right to left
        //     such that it becomes 'final[0]' (can be proved by induction on prefixes)
        let mut sum: usize = 0;
        nums.into_iter()
            .enumerate()
            .map(|(i,n)| { sum += n as usize; (sum + i) / (i + 1) })
            .max().unwrap() as i32
    }
}
```
