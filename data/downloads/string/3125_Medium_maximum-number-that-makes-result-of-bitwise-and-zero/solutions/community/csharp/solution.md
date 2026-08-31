# Bit manipulation

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5135320/](https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5135320/)

---

Basic idea is to think about numbers that nullify each bit of the input number. The lowest of those numbers will be one that nullifies the most significant bit. This number will have zero in the position of the most significant bit of the input number and 1s to the right.

# Code
```
public class Solution 
{
    public long MaxNumber(long n) 
    {
        int lastOne = 0;
        long copy = n;

        for (var i = 0; i < 60; i++)
        {
            if (copy % 2 == 1)
                lastOne = i;
                
            copy >>= 1;
        }

        long result = 0;

        for (var i = 0; i < lastOne; i++)
        {
            result <<= 1;
            result += 1;
        }

        return result;    
    }
}
```