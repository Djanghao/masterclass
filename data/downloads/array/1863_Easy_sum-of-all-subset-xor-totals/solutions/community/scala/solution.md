# rust, golang, scala, python. O(n) \ O(1) one line solution explained

**Author:** nizhnik
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5183879/](https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5183879/)

---

# Intuition
## 1. Bit Reordering. 
Binary representation tells us that each number can be decomposed into sums of powers of two. So 
$$
x = x_0 * 1 + x_1 * 2 + x_2 * 4 + \\dots x_i * 2^i + \\dots x_{31} * 2^{31},\\\\ 

where\\ x_0, x_1, \\dots x_i = 0\\ or\\ 1
$$
Using such representation you can group these components according the their two-power factor, i,e.
$$
x + y = \\\\ (x_0 * 1 + x_1 * 2 + \\dots + x_i * 2^i + \\dots) + (y_0 * 1 + y_1 * 2 + y_2 * 4 + \\dots + y_i * 2^i + \\dots) = \\\\
(x_0+y_0) * 1 + (x_1+y_1)*2+ (x_2+y_2)*4+\\dots+(x_i+y_i)*2^i+\\dots
$$
In other words, we can ask rephrase task as _"how many xor-combinations have i-th bit set"_ and then multiply that count on corresponding power.

For this task we can consider each bit position separately.

## 2. How many combinations?
### 2.1 No numbers with this bit. 
If there's no numbers with this bit we can just forget about it, since no possible combination would create 1 at this position.

### 2.2 Exactly one number with this bit.
If there's exactly on number with i-th set we know, than there are exactly $2^{n - 1}$ combinations of other numbers all giving 0 when xor-ed. ($n$ - is length of `nums`) Considering all possible combinations exactly $2^{n-1}$ of all combinations will give 1 and $2^{n - 1}$ will give 0.

### 2.2 More than one bit with this bit.
Surprisingly we can prove that even if there more than one number have this bit set, exactly half of all possible $2^n$ combinations (i. e. $2^{n-1}$) will raise 1 xored and other half will produce 0.
Let's consider any of numbers having this bit one, of all possible $2^{n-1}$ combinations of other numbers lets say there are $k$ giving 1 xored and other $2^{n - 1} - k$ give 0. Combining those with possible inclusion and exclusion of this number with this bit set, we get $k$ 1-combinactions and $2^{n-1}$ 0-combinations when we exclude this numbers , and $2^{n-1} - k$ 1 combinations and $k$ 0-combinations when this number included.

So we get precisely $2^(n-1)$ 0-combinations and $2^(n-1)$ 1-combinations no matter how many of numbers with this bit set we have, as soon there is at least one of them.

### 2.3 All together
After realisation that we need just find which bits are set at at least one numbers, we can restore multiplication of each bit to the corresponding power of two, and then multiply it once more to $2^(n-1)$. Actually instead of searching for each bit, if there's at least one number have this bit set, we can just use the bit-or operation, determining at-least-once-set bits and having them already multiplyed to the correct power of two. Having this total bit-or we can just multiply it to the $2^(n-1)$ since every non-zero sum has this factor.
# Approach
So we can just walk along the numbers, calculate the bit-or of all of them using the built-in operation and mupliply the result to the $2^(n-1)$ which also can be represented as binary right-shift
# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

Rust
# Code
```rust
impl Solution {
    pub fn subset_xor_sum(nums: Vec<i32>) -> i32 {
        nums.iter().fold(0, |x, &y| x | y) * (1 << (nums.len() - 1))
    }
}
```

Scala
```scala
object Solution:
    def subsetXORSum(nums: Array[Int]): Int = 
        nums.reduce(_ | _) * (1 << (nums.size - 1))
```

Go
```go
func subsetXORSum(nums []int) (res int) {
    for _, num := range nums {
        res |= num
    }
    return res << (len(nums) - 1)
}
```

Python
```python3
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        return reduce((lambda x, y: x | y), nums) << (len(nums) - 1)
```