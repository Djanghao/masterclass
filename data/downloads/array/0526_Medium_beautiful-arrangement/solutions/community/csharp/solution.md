# Bitmask, Mem O(1)

**Author:** 3S_AKB
**Votes:** 1
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/3867287/](https://leetcode.com/problems/beautiful-arrangement/solutions/3867287/)

---



# Code
```
public class Solution {
    
    int run(int i, int n, int a)
    {
        if (a == 0)
            return 1;
    
        int res = 0;
        for (int k = 1; k <= n; k++)
            if ((((1 << (k - 1)) & a) != 0) && (i % k == 0 || k % i == 0))
                res += run(i + 1, n, a - (1 << (k - 1)));

        return res;
    }

    public int CountArrangement(int n) {       
        return run(1, n, (1 << n) - 1);   
    }
}
```