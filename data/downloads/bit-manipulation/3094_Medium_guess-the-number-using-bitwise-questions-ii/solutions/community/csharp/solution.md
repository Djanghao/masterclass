# Straightforward solution in linear time

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/5013387/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/5013387/)

---

When called with zero, CommonBits method returns number of zeroes in N without changing it. Having this information, call CommonBits again with bit mask where single bit is set to 1. If the corresponding bit in the N is the same then number of matches will increase, if it's different then it decreases. Use this information to set bit in the result number. Repeat for each possible bit position.

Time complexity: O(N)

# Code
```
/** 
 * Definition of commonBits API (defined in the parent class Problem).
 * int CommonBits(int num);
 */

public class Solution : Problem 
{
    public int FindNumber() 
    {
        var result = 0;

        for (var i = 0; i < 30; i++)
        {
            var zeroes = CommonBits(0);
            var mask = (1 << i);
            var same = CommonBits(mask);
            
            if (same > zeroes)
                result |= mask;
        }

        return result;    
    }
}

// 0000000111 --- 3
// 0000000001
// 0000000110

// 0000000110
// 0000000001
// 0000000111

```