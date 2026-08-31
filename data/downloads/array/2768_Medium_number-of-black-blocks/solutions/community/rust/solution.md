# 🟢 Rust  | Fastest Solution ✅ | Beats 100% | O(n)

**Author:** Encapsulating
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-black-blocks/solutions/3840033/](https://leetcode.com/problems/number-of-black-blocks/solutions/3840033/)

---

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn count_black_blocks(m: i32, n: i32, coordinates: Vec<Vec<i32>>) -> Vec<i64> {
        let mut counts: Vec<i64> = vec![0; 5];
        let mut coords = HashMap::<i32, usize>::new();
        
        let botMargin = (m - 1) * (n - 2);
        for black in &coordinates {
            let top = black[1] == 0;
            let bot = black[1] == n - 1;
            let left = black[0] == 0;
            let right = black[0] == m - 1;
            
            
            if top {
                if left {
                    *coords.entry(0).or_insert(0) += 1;
                }
                else if right {
                    *coords.entry(m - 2).or_insert(0) += 1;
                }
                else {
                    let blockLeft = black[0] - 1;
                    *coords.entry(blockLeft).or_insert(0) += 1;
                    *coords.entry(blockLeft + 1).or_insert(0) += 1;
                }
            }
            else if bot {
                if left {
                    *coords.entry(botMargin).or_insert(0) += 1;
                }
                else if right {
                    *coords.entry(botMargin + m - 2).or_insert(0) += 1;
                }
                else {
                    let blockLeft = botMargin + black[0] - 1;
                    *coords.entry(blockLeft).or_insert(0) += 1;
                    *coords.entry(blockLeft + 1).or_insert(0) += 1;
                }
            }
            else{
                if left {
                    let blockLeft = (black[1] - 1) * (m - 1);
                    *coords.entry(blockLeft).or_insert(0) += 1;
                    *coords.entry(blockLeft + (m - 1)).or_insert(0) += 1;
                }
                else if right {
                    let blockLeft = (black[1] - 1) * (m - 1) + (m - 2);
                    *coords.entry(blockLeft).or_insert(0) += 1;
                    *coords.entry(blockLeft + (m - 1)).or_insert(0) += 1;
                }
                else{
                    let blockLeft = (black[1] - 1) * (m - 1) + (black[0] - 1);
                    *coords.entry(blockLeft).or_insert(0) += 1;
                    *coords.entry(blockLeft + 1).or_insert(0) += 1;
                    *coords.entry(blockLeft + (m - 1)).or_insert(0) += 1;
                    *coords.entry(blockLeft + (m - 1) + 1).or_insert(0) += 1;
                }
            }
                
        }
        
        let mut sum = 0;
        for i in coords {
            counts[i.1] += 1;
            sum += 1;
        }
        counts[0] = ((n - 1) as i64) * ((m - 1) as i64) - sum;
        
        counts
    }
}
```