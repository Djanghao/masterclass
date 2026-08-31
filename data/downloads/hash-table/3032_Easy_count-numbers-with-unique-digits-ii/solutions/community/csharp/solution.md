# Simple solution. "Memory size" winner

**Author:** YuB85
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5565425/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5565425/)

---

# Code
```
public class Solution {
    public int NumberCount(int a, int b) 
    {
        int x00 = default, x000 = default, tmp = default, res = default;
        bool b00 = false, b000 = false;
            
        for (int i = a; i <= b; i++)
        {
            tmp = i;
            b000 = false; 
            b00 = false;

            if (tmp > 987) { continue; }

            if (tmp > 99)
            {
                b000 = true;
                x000 = tmp / 100;
                tmp -= x000 * 100;
            }
            if (i > 9 || tmp > 9)
            {
                if (!b000) { b00 = true; }
                x00 = tmp / 10;
                tmp -= x00 * 10;
            }
            if (b000)
            {
                if (x000 != tmp && x00 != tmp && x000 != x00) { res++; continue; }
                continue;
            }
            if (b00)
            {
                if (x00 != tmp) { res++; continue; }
                continue;
            }
            if (!(b000 && b00)) { res++; continue; }
        }
        return res;        
    }
}
```