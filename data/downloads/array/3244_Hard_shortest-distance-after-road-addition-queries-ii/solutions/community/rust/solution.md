# ❤️❤️❤️❤️very easy try for refrence

**Author:** omsonekar4
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5599529/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/5599529/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::num::NonZeroU32;
//hi guys
impl Solution {
    pub fn shortest_distance_after_queries(n: i32, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let n = n as u32;
        let mut count = n - 1;
        let mut answer = Vec::with_capacity(queries.len());
        let mut nodes: Box<[Option<NonZeroU32>]> = (1..=n).map(NonZeroU32::new).collect();
        for query in queries {
            let [from, to] = query[..] else {
                unreachable!()
            };
            if let (Some(mut next), Some(_)) = (nodes[from as usize], nodes[to as usize]) {
                nodes[from as usize] = NonZeroU32::new(to as u32);
                while next.get() != to as u32 {
                    next = nodes[next.get() as usize].take().unwrap();
                    count -= 1;
                }
            }
            answer.push(count as i32);
        }
        answer
    }
}
```