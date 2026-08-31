# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-repeating-integers/solutions/3187911/](https://leetcode.com/problems/distribute-repeating-integers/solutions/3187911/)

---

# Code
```
impl Solution {
    pub fn can_distribute(nums: Vec<i32>, quantity: Vec<i32>) -> bool {
        use std::collections::HashMap;

        fn backtrack(counts: &mut Vec<i32>, quantity: &Vec<i32>, index: usize) -> bool {
            if index == quantity.len() {
                return true;
            }
            for i in 0..counts.len() {
                if counts[i] >= quantity[index] {
                    let p = quantity[index];
                    counts[i] -= p;
                    if backtrack(counts, quantity, index + 1) {
                        return true;
                    }
                    counts[i] += p;
                }
            }
            false
        }

        let mut counts = HashMap::new();
        for n in nums.iter() {
            *counts.entry(*n).or_insert(0) += 1;
        }
        let mut counts = counts.values().copied().collect::<Vec<_>>();
        counts.sort_by(|a, b| b.cmp(a));
        let mut quantity = quantity;
        quantity.sort_by(|a, b| b.cmp(a));

        backtrack(&mut counts, &quantity, 0)
    }
}
```