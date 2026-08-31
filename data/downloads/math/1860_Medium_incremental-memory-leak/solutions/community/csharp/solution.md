# pat on the back , 25 minutes

**Author:** MogtabaX
**Votes:** 0
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/4920588/](https://leetcode.com/problems/incremental-memory-leak/solutions/4920588/)

---

# Code
```
public class Solution {
    public int[] MemLeak(int memory1, int memory2) {
            int a = 0;
            int m1 = memory1;
            int m2 = memory2;
            int maxtime =0;
            int i = 1;
            int[] res = new int[] { a, m1, m2 };
            if (memory1 > memory2)
            {
                maxtime = memory1;
            }
            else if (memory1 < memory2)
            {
                maxtime = memory2;
            }
            else
            {
                maxtime = memory1;
            }
            for (i = 1; i < maxtime+1; ++i)
            {
                if (m1 > m2)
                {
                    if (i > m1)
                    {
                        break;
                    }
                    m1 = m1 - i;
                }
                else if (m2 > m1)
                {
                    if (i > m2)
                    {
                        break;
                    }
                    m2 = m2 - i;
                }
                else
                {
                    if (i > m1 || i>m2)
                    {
                        break;
                    }
                    m1 = m1 - i;
                }
               
            }
            res = new int[] { i, m1, m2 };
            return res;
    }
}
```