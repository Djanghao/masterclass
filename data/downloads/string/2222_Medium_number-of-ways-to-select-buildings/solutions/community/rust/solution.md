# Python/Go/Rust Linear time Solution with Detailed explanation

**Author:** amitbasuri123
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/4581023/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/4581023/)

---

# Intuition
The problem requires us to count the number of ways to select three buildings for inspection, such that no two consecutive buildings are of the same type. The key insight is that we only have two patterns to consider: "010" and "101". The solution needs to efficiently count the number of occurrences of these patterns.

# Approach
This approach uses a linear-time algorithm. We iterate through the string and keep track of the counts of '0's, '1's, '01's, and '10's. We use these counts to accumulate the total number of ways to form the required patterns. When a '0' is encountered, it can form a '010' pattern with the preceding '1's (tracked by `one_zero`), and similarly, a '1' can form a '101' pattern with the preceding '0's (tracked by `zero_one`). The key here is to update these counts as we traverse the string and use them to compute the total number of valid ways.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the string. This is because we are iterating through the string once.
- Space complexity: $$O(1)$$, since we are only using a fixed number of variables and not allocating any additional space proportional to the input size.

# Code
```python
class Solution:
    def numberOfWays(self, s: str) -> int:
        ways = 0
        one = zero = zero_one = one_zero = 0
        for c in s:
            if c == '0':
                zero += 1
                one_zero += one
                ways += zero_one
            else:
                one += 1    
                zero_one += zero 
                ways += one_zero
        return ways
```
```go
func numberOfWays(s string) int64 {
    ways, one, zero, zeroOne, oneZero := 0, 0, 0, 0, 0
    for _, c := range s {
        if c == '0' {
            zero++
            oneZero += one
            ways += zeroOne
        } else {
            one++
            zeroOne += zero
            ways += oneZero
        }
    }
    return int64(ways)
}
```
```rust
impl Solution {
    pub fn number_of_ways(s: String) -> i64 {
        let (mut ways, mut one, mut zero, mut zero_one, mut one_zero) = (0_i64, 0_i64, 0_i64, 0_i64, 0_i64);
        for c in s.chars() {
            match c {
                '0' => {
                    zero += 1;
                    one_zero += one;
                    ways += zero_one;
                },
                '1' => {
                    one += 1;
                    zero_one += zero;
                    ways += one_zero;
                },
                _ => {}
            }
        }

        ways
    }
}
```