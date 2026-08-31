# Rust Solution

**Author:** hyper-simplex
**Votes:** 0
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/4774667/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/4774667/)

---

# Approach
Use bit comparison and discard common ancestor path from the root of the tree.

# Complexity
- Time complexity:
$$O(q\\ log\\ n)$$

- Space complexity:
$$O(q)$$

# Code
```
impl Solution {
    pub fn cycle_length_queries(n: i32, queries: Vec<Vec<i32>>) -> Vec<i32> {
      queries.into_iter().map(|q|{
        let a = q[0];
        let b = q[1];
        let a_msb_pos = a.ilog2();
        let b_msb_pos = b.ilog2();
        let mut pos_a : i32 = a_msb_pos as i32 - 1;
        let mut pos_b : i32 = b_msb_pos as i32 - 1;
        //discard common prefix
        while pos_a >= 0 && pos_b >= 0 {
          let a_bit_set = (a & (1<<pos_a)) != 0;
          let b_bit_set = (b & (1<<pos_b)) != 0;
          if a_bit_set != b_bit_set {
            //hit position where bit set is different
            break;
          }
          pos_a -= 1;
          pos_b -= 1;
        }
        let cycle_length = pos_a + 1 + pos_b + 1 + 1;
        cycle_length
      }).collect()
    }
}
```