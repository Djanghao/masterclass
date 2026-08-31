# C#, right shift

**Author:** chuletsva
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3957732/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3957732/)

---

```
public class Solution {
    public int[] EvenOddBit(int n)
    {
        var answer = new int[2];
        var count = 0;

        while (n != 0)
        {
            answer[count++ % 2] += n & 1;

            n >>= 1;
        }

        return answer;
    }
}
```