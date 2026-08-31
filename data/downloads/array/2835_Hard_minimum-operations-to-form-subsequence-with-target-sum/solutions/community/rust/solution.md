# Rust Solution (lower bits -> higher bits)

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3990798/](https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3990798/)

---

# Approach
The idea is to parse numbers as bit arrays. e.g., $$32 = 2^5 = [1,0,0,0,0,0]$$. 

Take the following as an example:

```
nums: [1, 32, 1]   => count: {0: 2, 5: 1}
target: 35         => [1,0,0,0,1,1]
``` 

At the `0-bit` position, consuming '1' from $$2$$ '1's in the count vector leads to no carry from the 0-bit to the 1-bit. As a result, the count vector remains as `{0: 1, 5: 1}`. 

When at the `1-bit`(i==1), we need to borrow '1' from higher bits. And the count vector becomes `{0: 1, 1: 1, 2: 1, 3: 1, 4: 1}`

Subsequently, at `5-bit`(i==5), it is impossible to match 32 from the target bit array.



# Complexity

- Time complexity:
    - `get_from_larger`: $$O(1)$$
    - `get_bit`: $$O(1)$$
    - therefore, the main function is also $$O(n)$$ to fill the `count` vector. 

# Code

```rust []
impl Solution {
    pub fn min_operations(nums: Vec<i32>, target: i32) -> i32 {
        let mut count = vec![0; 32];
        let mut ans = 0;
        let mut carry = 0;
        for &num in &nums {
            let bit = Self::get_bit(num).unwrap();
            count[bit] += 1;
        }
        for i in 0..31 {
            count[i] += carry;
            if ((target as usize >> i) & 1) == 1 {
                if count[i] == 0 {
                    if let Some(j) = Self::get_from_larger(&count, i + 1) {
                        for k in (i..j).rev() {
                            count[k + 1] -= 1;
                            count[k] += 2;
                        }
                        ans += (j - i) as i32;
                    } else {
                        // no way to reach this bit of target
                        return -1;
                    }
                }
                count[i] -= 1;
            }
            carry = count[i] >> 1;
        }
        ans
    }
    /// check if we can borrow bit from higher bits
    fn get_from_larger(count: &Vec<i32>, start: usize) -> Option<usize> {
        for i in start..31 {
            if count[i] != 0 {
                return Some(i);
            }
        }
        None
    }
    /// e.g., 32 -> 2^5 -> return 5
    fn get_bit(x: i32) -> Option<usize> {
        for i in 0..31 {
            if 1 << i == x {
                return Some(i);
            }
        }
        None
    }
}
```

```python []
from collections import Counter

class Solution:
    def min_operations(self, nums, target):
        count = [0] * 32
        ans = 0
        carry = 0
        nums_counter = Counter(nums)
        for num in nums:
            bit = self.get_bit(num)
            count[bit] += 1
        for i in range(31):
            count[i] += carry
            if (target >> i) & 1 == 1:
                if count[i] == 0:
                    j = self.get_from_larger(count, i + 1)
                    if j is not None:
                        for k in range(i, j):
                            count[k + 1] -= 1
                            count[k] += 2
                        ans += j - i
                    else:
                        return -1
                count[i] -= 1
            carry = count[i] >> 1
        return ans
    
    def get_from_larger(self, count, start):
        return [i for i in range(start, 31) if count[i]][-1]
    
    def get_bit(self, x):
        return [i for i in range(31) if 1 << i == x][-1]
```
