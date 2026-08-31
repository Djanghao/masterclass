# Rust DP + BTreeMap solution annotated

**Author:** leodamsky
**Votes:** 1
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/1428754/](https://leetcode.com/problems/odd-even-jump/solutions/1428754/)

---

```
use std::collections::BTreeMap;

impl Solution {
    pub fn odd_even_jumps(arr: Vec<i32>) -> i32 {
        // arr can't be empty, so there will be at least 1 good count
        let mut good_count = 1;

        // vecs below allow us to jump from A to B only once i.e. cache for jumps
        // whether an odd jump from an index i can reach the end
        let mut odd = vec![false; arr.len()];
        // whether an even jump from an index i can reach the end
        let mut even = vec![false; arr.len()];
        *odd.last_mut().unwrap() = true;
        *even.last_mut().unwrap() = true;
        // map helps to efficiently decide where to jump next
        let mut map = BTreeMap::new();
        map.insert(*arr.last().unwrap(), arr.len() - 1);
        // traversing jumps in a reversed order
        // ensures the highest/lowest jump is valid
        // excluding the last jump, which is good by definition
        for i in (0..arr.len() - 1).rev() {
            let from = arr[i];
            // where to jump from an index i if it's an odd jump
            if let Some((_, jump_to_idx)) = map.range(from..).next() {
                odd[i] = even[*jump_to_idx];
            }
            // where to jump from an index i if it's an even jump
            if let Some((_, jump_to_idx)) = map.range(..=from).next_back() {
                even[i] = odd[*jump_to_idx];
            }
            // at this point we should know whether we can reach the end from an index i
            if odd[i] {
                good_count += 1;
            }
            map.insert(from, i);
        }

        good_count
    }
}
```