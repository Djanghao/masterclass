# Rust | Prefix Sum + Binary Search | With Comments

**Author:** wallicent
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2494252/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2494252/)

---

This is my unaltered submission to the 2022-08-28 Weekly Contest 308. We can take whichever numbers we want, as long as their sum is less than `queries[i]`. So we can sort `nums` (O(n log(n)) where n is the length of `nums`) and take as many numbers as we can while their sum is less that `queries[i]` (O(q * n) where q is the length of `queries`). Do do better, we can compute the prefix sums of the sorted `nums` (O(n)), and since the sums are themselves strictly increasing, we can perform binary searches to find the answers to the queries (O(q * log(n))).

Time: O(n log(n) + q log(n))
Space: O(n) for vector of prefix sums (could be computed in place for O(1))

Comment: My first contest submisson ever, which threw me off a bit since it was more difficult than typical LeetCode "easy" problems. I should focus more on solving the problem quickly and less on clean functional-style code, at least for contests.

```
impl Solution {
    pub fn answer_queries(mut nums: Vec<i32>, queries: Vec<i32>) -> Vec<i32> {
        nums.sort_unstable();
        let mut acc = 0;
        let sums = nums.into_iter().map(|num| { acc += num; acc }).collect::<Vec<i32>>();
        queries.into_iter().map(|q| match sums.binary_search(&q) {
            Ok(i) => i + 1,
            Err(i) => i,
        } as i32).collect::<Vec<_>>()
    }
}
```