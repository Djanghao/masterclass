# Minimum Swaps to Arrange Couples

**Author:** thebestrustdevtoeverexistfrfr
**Votes:** 0
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/5715786/](https://leetcode.com/problems/couples-holding-hands/solutions/5715786/)

---

# Intuition
We need to arrange couples (numbers that differ by 1) next to each other with the fewest swaps.

# Approach
1. **Track Positions**: Use an array to keep track of where each person is in the row.
2. **Fix Pairs**: Go through the row in steps of two. For each pair, check if they are correctly paired. If not, find the correct position of the partner and swap them.
3. **Count Swaps**: Increase the swap count every time a swap is made.

# Complexity
- Time complexity: $$O(n)$$
  - Each element is processed in constant time.
- Space complexity: $$O(n)$$
  - Extra space is used for the positions array.

# Code
```rust []
impl Solution {
    pub fn min_swaps_couples(mut row: Vec<i32>) -> i32 {
        let mut pos = vec![0; row.len()];
        for (i, &p) in row.iter().enumerate() {
            pos[p as usize] = i;
        }
        
        let mut swaps = 0;
        for i in (0..row.len()).step_by(2) {
            let partner = row[i] ^ 1;
            if row[i + 1] != partner {
                let j = pos[partner as usize];
                row.swap(i + 1, j);
                pos[row[i + 1] as usize] = i + 1;
                pos[row[j] as usize] = j;
                swaps += 1;
            }
        }
        
        swaps
    }
}

```