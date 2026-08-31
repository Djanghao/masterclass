# Sorting, BinaryHeap | 71ms, 12.04MB

**Author:** Imyr
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/5456824/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/5456824/)

---

# Complexity
`m = intervals.len(); n = queries.len();`
- Time complexity: $$O(m*log(m)+n*log(n))$$
- Space complexity: $$O(m+n)$$

# Code
```
use std::collections::BinaryHeap;
impl Solution {
    pub fn min_interval(mut intervals: Vec<Vec<i32>>, mut queries: Vec<i32>) -> Vec<i32> {
        let mut query_index: Vec<usize> = (0..queries.len()).collect();
        query_index.sort_unstable_by_key(|&i| queries[i]);
        queries.sort_unstable(); intervals.sort_unstable_by_key(|x| (-x[0], -x[1]));
        let mut heap = BinaryHeap::new();
        let mut result = Vec::with_capacity(queries.len());
        for q in queries {
            while intervals.last().is_some_and(|x| x[0]<=q) {
                let interval = intervals.pop().unwrap();
                heap.push((-(interval[1]-interval[0]+1), -interval[1], -interval[0]));
            }
            while heap.peek().is_some_and(|x| -x.1 < q) { heap.pop(); }
            if let Some(val) = heap.peek() { result.push(-val.0); }
            else { result.push(-1); }
        }
        let mut result = result.into_iter().enumerate().collect::<Vec<_>>();
        result.sort_unstable_by_key(|&(i, _)| query_index[i]);
        result.into_iter().map(|(_, x)| x).collect()
    }
}
```