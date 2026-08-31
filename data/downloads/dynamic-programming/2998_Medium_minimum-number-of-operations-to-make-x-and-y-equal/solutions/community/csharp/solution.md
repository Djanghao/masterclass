# Easy O(n) Top-Down-DP based Soln | 90% Efficient

**Author:** harsh007kumar
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4537347/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4537347/)

---

# Complexity
- Time & Space complexity:
O(x)

![image.png](./images/0.png)

# Code
```
public class Solution {
    // Time = Space = O(x)
    public int MinimumOperationsToMakeEqual(int x, int y) {
        int[] cache = new int[x+11];
        for(int i=0;i<cache.Length;i++) cache[i]=-1;
        return ReduceXtoY(x,y);

        // local helper func
        int ReduceXtoY(int xx, int yy)
        {
            // as its mentioned in the problem we only can make increament by 1 on x if its smaller, all other ways r to reduce
            if(xx<=yy) return yy-xx;
            if(cache[xx]!=-1) return cache[xx];
            // case 1, just reducing xx by 1 till we get yy
            int ans = xx-yy;
            // case 2, reduce xx till its perfectly divisble by 5 and 1 operation to divide it by 5
            ans = Math.Min(ans,1 + xx%5 + ReduceXtoY(xx/5,y));
            // case 3, increament xx till its perfectly divisble by 5 and 1 operation to divide it by 5
            ans = Math.Min(ans,1 + (5-xx%5) + ReduceXtoY((xx/5)+1,y));
            // case 4, reduce xx till its perfectly divisble by 11 and 1 operation to divide it by 11
            ans = Math.Min(ans,1 + xx%11 + ReduceXtoY(xx/11,y));
            // case 5, increament xx till its perfectly divisble by 11 and 1 operation to divide it by 11
            ans = Math.Min(ans,1 + (11-xx%11) + ReduceXtoY((xx/11)+1,y));
            return cache[xx]=ans;
        }
    }
}
```