# DP

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/5361802/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/5361802/)

---


# Code
```
public class Solution {
    public int MinSideJumps(int[] o) {
        int[,] a = new int[o.Length + 1, 3];
        for (int i = o.Length - 1; i >= 0; i--)
        {
            for (int k = 0; k < 3; k++)
            {
                if (o[i] - 1 == k)
                    a[i, k] = 10000000;
                else
                {
                    var o1 = a[i + 1, k];
                    var o2 = o[i] - 1 == (k + 1) % 3 ? 10000000 : 1 + a[i + 1, (k + 1) % 3]; 
                    var o3 = o[i] - 1 == (k + 2) % 3 ? 10000000 : 1 + a[i + 1, (k + 2) % 3];                  
                    a[i, k] = Math.Min(o1, Math.Min(o2, o3));
                }
            }
        }
        return a[0, 1];
    }
}
```