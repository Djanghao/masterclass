# Rust backtracking solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/933066/](https://leetcode.com/problems/permutations-ii/solutions/933066/)

---

```rust
use std::collections::HashMap;

impl Solution {
    pub fn permute_unique(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut hm: HashMap<i32, usize> = HashMap::new();
        nums.iter()
            .for_each(|&num| *hm.entry(num).or_insert(0) += 1);
        let mut answer = Vec::new();
        let mut v = Vec::new();
        Solution::helper(&mut hm, &mut answer, &mut v);
        answer
    }
    fn helper(hm: &mut HashMap<i32, usize>, answer: &mut Vec<Vec<i32>>, v: &mut Vec<i32>) {
        let candidates: Vec<i32> = hm.iter().filter(|(_, &v)| v > 0).map(|(&k, _)| k).collect();
        if candidates.is_empty() {
            answer.push(v.clone());
        } else {
            for candidate in candidates.iter() {
                if let Some(val) = hm.get_mut(candidate) {
                    *val -= 1;
                }
                v.push(*candidate);
                Solution::helper(hm, answer, v);
                v.pop();
                if let Some(val) = hm.get_mut(candidate) {
                    *val += 1;
                }
            }
        }
    }
}
```