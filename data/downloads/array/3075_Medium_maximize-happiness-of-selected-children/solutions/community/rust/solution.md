# [Rust] Small optimization: quickselect the top k rather than sorting all

**Author:** tiedyedvortex
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132414/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132414/)

---

# Intuition
If there were no penalty, we would select the k happiest children to maximize the score.

With the penalty...we still pick the k happiest children, because the penalty doesn't change based on which children we select.

# Approach
Instead of sorting all of happiness, we can sort the top k happiest children; when k is much smaller than n this is more efficient.

Rust has a builtin for `slice::select_nth_unstable(&mut self, i)` which partitions a slice so that elements (0..i) are less than or equal to element i, and elements (i+1..) are all greater than element i, returning a tuple of (&mut s[0..i], &mut s[i], &mut s[i+1..]) after the shuffle. This uses a pattern-defeating quicksort and is O(n) according to the docs.

We care about this last section, so we need to have i = (n-k-1) so that the lengths of elements in the tuple are (n-k-1, 1, k). However, in the event than k == n or k == n-1, this would cause a panic, so in that case we just sort the entire vec.

# Complexity
- Time complexity: O(n + k log k). The partition operation is O(n), and then we sort the top k. For small k this is essentially linear; for large k this is essentially log-linear.

- Space complexity: O(1) if we partition and sort happiness in-place.

# Code
```
use std::collections::BinaryHeap;
use std::cmp::Reverse;
impl Solution {
    pub fn maximum_happiness_sum(mut happiness: Vec<i32>, k: i32) -> i64 {
        let n = happiness.len();
        let k = k as usize;
        let top_k = if k + 1 < happiness.len() {
            happiness.select_nth_unstable(n - k - 1).2
        } else {
            happiness.as_mut_slice()
        };
        top_k.sort_unstable();

        (0..).zip(top_k.iter().copied().rev())
        .take_while(|&(penalty, unpenalized)| penalty < unpenalized)
        .take(k as usize)
        .map(|(penalty, unpenalized)| (unpenalized - penalty) as i64)
        .sum()
    }
}
```