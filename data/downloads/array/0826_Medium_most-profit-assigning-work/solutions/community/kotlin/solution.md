# just a variant

**Author:** igormsc
**Votes:** 3
**Link:** [https://leetcode.com/problems/most-profit-assigning-work/solutions/5329568/](https://leetcode.com/problems/most-profit-assigning-work/solutions/5329568/)

---

# Code
``` Kotlin []
class Solution {
    fun maxProfitAssignment(difficulty: IntArray, profit: IntArray, worker: IntArray): Int {
        val jobs = profit.foldIndexed(mutableListOf<Pair<Int, Int>>()) { i, r, p -> r.add(difficulty[i] to p); r }
        worker.sort()
        jobs.sortBy { it.first }
        var i = 0
        var best = 0
        val n = profit.size
        return worker.sumOf { a ->
                                    while (i < n && a >= jobs[i].first) best = maxOf(best, jobs[i++].second)
                                    best 
                }
    }
}
```
```Rust []
impl Solution {
    pub fn max_profit_assignment(difficulty: Vec<i32>, profit: Vec<i32>, worker: Vec<i32>) -> i32 {
        let n = profit.len();
        let mut jobs: Vec<(i32, i32)> = difficulty.into_iter().zip(profit).collect();
        let mut worker = worker;
        worker.sort_unstable();
        jobs.sort_unstable();
        let mut i = 0usize;
        let mut best = 0;
        worker.iter().fold(0, |r, a| {
                        while i < n && *a >= jobs[i].0 {
                            best = std::cmp::max(best, jobs[i].1);
                            i +=1;
                        }
                        r + best })
    }
}
```