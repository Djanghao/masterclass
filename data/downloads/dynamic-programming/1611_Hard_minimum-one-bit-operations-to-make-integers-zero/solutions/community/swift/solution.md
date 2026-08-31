# 💡Swift - Optimal Solution - Bit Manipulation

**Author:** bernikovich
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344708/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344708/)

---

# Intuition
*Observation:
001 -> 000 = 1 operation,
010 -> 000 = 3 operations,
100 -> 000 = 7 operations.*
Essentially, it takes $$2^{i+1}+1$$ operations to efficiently remove the 1-bit at the current index. This formula is applicable only to numbers with a single 1-bit. It happens because for every i-th 1-bit, we first need to create $(i-1)$ 1-bit, remove $$i-th$$ 1-bit and remove $(i-1)$ 1-bit now (the cost of removing i-th bit and adding it is the same as this operations are reversible).
The cost is $$f(i) = 1 + 2 * f(i - 1)$$, where $$f(1) = 1$$.
This is also $$f(i) = 2^{i+1} - 1$$.
Additionally, I avoid exponentiation since we use this mask anyway.

# Solution
```
class Solution {
    func minimumOneBitOperations(_ n: Int) -> Int {
        var answer = 0
        var mask = 1
        while mask <= n {
            if n & mask != 0 {
                answer = (mask * 2 - 1) - answer
            }
            mask <<= 1
        }
        return answer
    }
}
```
# Complexity
- Time: $$O(logn)$$
- Space: $$O(1)$$