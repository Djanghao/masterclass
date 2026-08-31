# Rust | Windows | With Comments

**Author:** wallicent
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2648800/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2648800/)

---

This is my unrevised submission for the 2022-10-02 Weekly Contest 313. Precompute the sums of windows of three for each row (tops and bottoms), and the middle element of windows of three (middles). Then loop over all possible "hourglasses" (one top, one middle and one bottom), and compute the max of the sums.

Comment: I am thinking now that the middles are just row[1..row.len()-1], but it was fast to do a copy-paste during the contest. And windows could have been sliding, i.e. adding one element and subtracting another. A bit messy, but nothing that couldn't be solved by `cargo fmt`. Otherwise happy with the functional-style solution.

```
impl Solution {
    pub fn max_sum(grid: Vec<Vec<i32>>) -> i32 {
        let ends: Vec<Vec<i32>> = grid.iter().map(|row| row.windows(3).map(|e| e.iter().sum()).collect()).collect();
        let middles: Vec<Vec<i32>> = grid.iter().map(|row| row.windows(3).map(|e| e[1]).collect()).collect();
        ends.iter().zip(middles.iter().skip(1)).zip(ends.iter().skip(2))
            .flat_map(|((top,middle), bottom)| 
            top.iter().zip(middle.iter()).zip(bottom.iter()).map(|((t,m), b)| *t + *m + *b)
        ).max().unwrap()
    }
}
```