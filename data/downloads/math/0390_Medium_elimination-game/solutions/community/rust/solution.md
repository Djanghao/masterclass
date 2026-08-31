# O(1) time solution

**Author:** xkatianx
**Votes:** 1
**Link:** [https://leetcode.com/problems/elimination-game/solutions/3325507/](https://leetcode.com/problems/elimination-game/solutions/3325507/)

---

# Code
```c []
int lastRemaining(int n){    
    float f = (float) n;
    int e = *(int *)&f >> 23;
    int h = 1 << e - 0x7f;
    int r = h - 1 & ~n & 0xaaaaaaaa;
    return h - r;
}
```
```rust []
impl Solution {
    pub fn last_remaining(n: i32) -> i32 {
        let mut t = n | n >> 1;
        t = t | t >> 2;
        t = t | t >> 4;
        t = t | t >> 8;
        t = t | t >> 16;
        (t + 1 >> 1) - (t & !n & 0x3aaaaaaa)
    }
}
```
# Intuition
Go find the formula.

# Approach
### Case 1: The input is $4x+0$ or $4x+1$.
After we remove numbers from left to right, the remaining numbers are $2, 4, ..., 4x$, and after we remove numbers from right to left, the remaining numbers are $2, 6, ..., 4x-2$.
If we add 2 and then divide by 4 to this list, we get $1, 2, ..., x$, which means `lastRemaining(4x+0) = lastRemaining(4x+1) = lastRemaining(x) * 4 - 2`.

### Case 2: The input is $4x+2$ or $4x+3$.
Likewise, we have $2, 4, ..., 4x+2$ and then $4, 8, ..., 4x$, so `lastRemaining(4x+2) = lastRemaining(4x+3) = lastRemaining(x) * 4`.

### Case 3: The input is $1$ or $2$ or $3$.

Note that we don't have enough numbers to go through the removing numbers from right to left part if we have less than 4 numbers, so we need $x > 0$ for the first two cases.
Here we can simply know that `lastRemaining(1) = 1` and `lastRemaining(2) = lastRemaining(3) = 2`.

---

Now we can easily build a recursive solution,
```python3 []
class Solution:
    def lastRemaining(self, n: int) -> int:
        return (n >> 1) + 1 if n < 4 else self.lastRemaining(n >> 2) * 4 - (~n & 2)
```
but let's unwrap the recursion and take $n = 100$ for example. (calculate from left to right)
$f(100) \\\\
= f(0b01'10'01'00) \\\\ 
= f(0b01'10'01) << 2 - 2 \\\\
= f(0b01'10) << 2 - 2 << 2 - 2 \\\\
= f(0b01) << 2 << 2 - 2 << 2 - 2 \\\\
= 1 << 2 << 2 - 2 << 2 - 2 \\\\
= (1 << 6) - (0 << 4) - (2 << 2) - (2 << 0) \\\\
= 0b01'00'00'00 - 0b00'00'00'00 - 0b00'00'10'00 - 0b00'00'00'10$
The first item is from the leftmost 1, the second item is from `0b**'1*'**'**` which is in case 2, and the third item is from `0b**'**'0*'**` and the forth item is from `0b'**'**'**'0*` which are both in case 1 and thus subtract something.

As a result, we can obtain the answer by the following steps.
1. Split 100 to its leftmost bit (0b01'00'00'00) and the rest (0b10'01'00)
2. Flip 0b10'01'00 to 0b01'10'11 and mask even bits -> 0b00'10'10
3. The answer is 0b01'00'00'00 - 0b00'10'10

The above C and Rust both implement this idea.