# Go

**Author:** ihatiko
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/5710420/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/5710420/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
/** 
 * Definition of commonSetBits API.
 * func commonSetBits(num int) int;
 */

func findNumber() int {
    result := 0

    for i := 1; i >= 0; i <<=1 {
        if commonSetBits(i) > 0 {
            result |= i
        }
    }
    return result
}
```