# Concise solution with comment and explain.

**Author:** sangkhuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/5696771/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/5696771/)

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
```rust []
use std::collections::BinaryHeap;
impl Solution {
    pub fn maximum_score(a: i32, b: i32, c: i32) -> i32 {
        use std::cmp;
        let mut piles = vec![a,b,c];
        // Step 1: Create a sorted vector of the pile sizes
        piles.sort();
        // Step 2: Calculate the maximum score
        // The maximum score is determined by the minimum of:
        // - The sum of the two smaller piles (piles[0] + piles[1])
        // - Half of the total number of stones (since each move removes 2 stones)
        // Now x <= y <= z
        // Case 1: x + y <= z
        // In that case, total score will be x + y
        // Case 2: x + y > z => y > z - x >= 0
        // Every turn, the total stones decrease by 2 and the score increases by 1
        // Best move occurs when total remainning stones >= 0.
        // Total taken stones = x + y + z - remainning <=  x + y + z 
        // 2.scores <= x + y + z  implies 
        // scores = floor((x+y+z)/2) 
        // 
        let max_score = cmp::min(piles[0] + piles[1], (piles[0] + piles[1] + piles[2]) / 2);
        max_score
    }
}
```