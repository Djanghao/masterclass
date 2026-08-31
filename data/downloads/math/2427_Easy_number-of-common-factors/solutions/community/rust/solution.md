# ✅ [Rust] 0 ms, one-liner (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/2649914/](https://leetcode.com/problems/number-of-common-factors/solutions/2649914/)

---

This [**solution**](https://leetcode.com/submissions/detail/813343022/) employs a functional-style approach to count common factors. It demonstrated **0 ms runtime (100.00%)** and used **2.0 MB memory (100.00%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(1)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn common_factors(a: i32, b: i32) -> i32 
    {
        // just iterate up to min(a,b) and filter factors
        (1..=a.min(b)).filter(|&f| a % f + b % f == 0).count() as i32
    }
}
```
