# C# solution with explaination

**Author:** BinksWang
**Votes:** 5
**Link:** [https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/3195650/](https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/3195650/)

---

# Code
```
public class Solution 
{
    /* 
    Check last bit every time 
    When (left != right), there is at least an 1 and 0 
    Right shift left and right
    Keep doing those steps until (left = right), use a factor to record the iteration time.
    Find the bigest same part
    Left shift to get the result
    */
    public int RangeBitwiseAnd(int left, int right) 
    {
        var count = 0;

        while(left != right)
        {
            count++;
            left = left >> 1;
            right = right >> 1;
        }

        return left << count;
    }
}
```