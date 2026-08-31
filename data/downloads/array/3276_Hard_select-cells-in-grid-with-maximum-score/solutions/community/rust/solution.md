# 4ms dp solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5734189/](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5734189/)

---

![image.png](./images/0.png)

# Intuition
Sort the cells according to there value. Then for each value segments, update the dp array according to the result of previous segment to ensure the selected number not duplicate.

# Complexity
- Time complexity:
$$O(m\	imes n\	imes 2^m)$$

- Space complexity:
$$O(2^m)$$

# Code
```rust []
use std::cmp::Ordering;

#[derive(Debug, Eq, PartialEq, Clone)]
struct Cell{
    loc: (usize, usize),
    val: i32
}

impl Ord for Cell{
    fn cmp(&self, other: &Self)->Ordering{
        other.val.cmp(&self.val).then(self.loc.cmp(&other.loc))
    }
}

impl PartialOrd for Cell{
    fn partial_cmp(&self, other: &Self)->Option<Ordering>{
        Some(self.cmp(other))
    }
}

impl Solution {
    pub fn max_score(grid: Vec<Vec<i32>>) -> i32 {
        let (m, n) = (grid.len(), grid[0].len());
        let mut cells=Vec::new();
        for i in 0..m{
            for j in 0..n{
                cells.push(Cell{loc: (i, j), val: grid[i][j]});
            }
        }
        cells.sort_unstable();
        
        let mut i=0;
        let mut dp=vec![0; 1<<m];
        while i<cells.len(){
            let mut j=i;
            while j<cells.len()&&cells[i].val==cells[j].val{j+=1;}
            let mut tmp=dp.clone();
            for k in i..j{
                let c=&cells[k];
                for m in 0..dp.len(){
                    if m&1<<c.loc.0!=0{continue;}
                    tmp[m|1<<c.loc.0]=tmp[m|1<<c.loc.0].max(dp[m]+c.val);
                }
            }

            dp=tmp;
            i=j;
        }
        dp[dp.len()-1]
    }
}
```