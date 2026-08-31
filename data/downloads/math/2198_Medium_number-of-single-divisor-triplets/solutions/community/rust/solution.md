# Rust/Python math + reading constrains. With explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/3921151/](https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/3921151/)

---

# Intuition
Looking at problem description one can see that `nums[i]` is `[1, 100]`, which suggests that you should somehow use it. You can calculate how many times each number has been seen and then use all the tripples of unique numbers. 

Now lets assume that all number are different. Then if numbers `v1, v2, v3` can be used (and their counts are `n1, n2, n3`), then you can use any of `n1` of `v1` same for other. So the answer is `n1 * n2 * n3`. But you can also combine them in 3! different orders.

One thing to consider is what to do if 2 numbers are the same (3 numbers can never be the same). So lets assume that `v3 = v2`. Then the answer will be `n1 * n2 * (n2 - 1) / 2`


# Complexity
Let $n$ be a total number of integers and $k$ be the number of unique numbers. Then

- Time complexity: $O(n + k^3)$
- Space complexity: $O(k)$

Here $k$ is at most 100.

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
  pub fn single_divisor_triplet(nums: Vec<i32>) -> i64 {
    let mut res = 0;
    let mut cnts: HashMap<i32, i64> = HashMap::new();
    for v in nums {
      *cnts.entry(v).or_default() += 1;
    }

    for (v1, n1) in &cnts {
      for (v2, n2) in &cnts {
        for (v3, n3) in &cnts {
          let s = v1 + v2 + v3;
          if s % v1 == 0 && s % v2 != 0 && s % v3 != 0 {
            if v3 == v2 {
              res += n2 * (n2 - 1) * n1;
            } else {
              res += n1 * n2 * n3;
            }
          }
        }
      }
    }

    return res * 3;
  }
}
```
```python []
class Solution:
  def singleDivisorTriplet(self, nums: List[int]) -> int:
    cnts, res =  Counter(nums), 0

    for v1, n1 in cnts.items():
      for v2, n2 in cnts.items():
        for v3, n3 in cnts.items():
          s = v1 + v2 + v3
          if s % v1 == 0 and s % v2 != 0 and s % v3 != 0: 
            if v3 == v2:
              res += n2 * (n2 - 1) * n1
            else:
              res += n1 * n2 * n3 
    
    return res * 3
```