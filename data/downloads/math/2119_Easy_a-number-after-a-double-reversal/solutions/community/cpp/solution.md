# Easy O(1) Time & Space complexity in C++

**Author:** keshav062
**Votes:** 8
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/3656517/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/3656517/)

---

# Intuition
If no. is divisible by 10 only then it will be false.

# Approach
Check if no. is divisible by 10

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool isSameAfterReversals(int num) {
        if(num==0)  return true;
        if(num%10==0)   return false;
        return true;
    }
};
```