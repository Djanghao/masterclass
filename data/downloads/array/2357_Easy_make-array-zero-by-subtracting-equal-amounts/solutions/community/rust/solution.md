# ✅ [Rust] 0 ms, simple & fast (with detailed comments)

**Author:** iablokov
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2557703/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2557703/)

---

This [solution](https://leetcode.com/submissions/detail/796242277/) employs simple array transformations to extract the answer. It demonstrated **0 ms runtime (100%)** and used **2.1 MB memory (88.46%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn minimum_operations(mut nums: Vec<i32>) -> i32 
    {
        // [1] duplicate elements are irrelevant;
        //     to remove them, we first 'sort' the array in place and then use 'dedup'
        nums.sort();
        nums.dedup();
        
        // [2] now the array is sorted, thus, at i-th operation the maximum cumulative 
        //     substracted value from the rest of the elements would be nums[i];
        //     therefore, the minimum number of operations is the number of elements
        //     in nums (they are all unique now!) except 0
        nums.into_iter().filter(|&x| x != 0).count() as i32
    }
}
```