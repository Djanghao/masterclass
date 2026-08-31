# Python / Rust - Prefix Sum

**Author:** nuclearoreo
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/753675/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/753675/)

---

-  **Python**

```python
class Solution:
    def minSumOfLengths(self, arr: List[int], target: int) -> int:
        s, lsize, res = 0, float('inf'), float('inf')
        prefixSum = { 0: -1 }
        
        for i, val in enumerate(arr):
            s += val
            prefixSum[s] = i
            
        s = 0
        for i, val in enumerate(arr):
            s += val
            
            if s - target in prefixSum:
                lsize = min(i - prefixSum[s - target], lsize)
            
            if s + target in prefixSum and lsize != float('inf'):
                rsize = prefixSum[s + target] - i
                res = min(res, rsize + lsize)
                
        return res if res != float('inf') else -1
```

- **Rust**

```rust
use std::collections::HashMap;

impl Solution {
    pub fn min_sum_of_lengths(arr: Vec<i32>, target: i32) -> i32 {
        let (mut sum, mut res, mut lsize) = (0, std::i32::MAX, std::i32::MAX);
        let mut prefixSum: HashMap<i32, i32> = HashMap::new();
        
        prefixSum.insert(0, -1);
        
        for (i, val) in arr.iter().enumerate() {
            sum += *val;
            prefixSum.insert(sum, i as i32);
        }
        
        sum = 0;
        for (i, val) in arr.iter().enumerate() {
            sum += *val;
            let index = i as i32;
            
            if prefixSum.contains_key(&(sum - target)) {
                lsize = lsize.min(index - *prefixSum.get(&(sum - target)).unwrap());
            }
            
            if prefixSum.contains_key(&(sum + target)) && lsize != std::i32::MAX {
                let rsize = *prefixSum.get(&(sum + target)).unwrap() - index;
                res = res.min(rsize + lsize);
            }
        }
        
        return if res == std::i32::MAX { -1 } else { res }
    }
}
```