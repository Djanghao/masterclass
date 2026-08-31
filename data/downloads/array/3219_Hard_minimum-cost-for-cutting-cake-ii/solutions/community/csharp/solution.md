# c# cut from high cost to low cost

**Author:** Julian_Meng_Chang
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5496466/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5496466/)

---

# Intuition
1.Sorting 2 CUT ARRAYS to make the cut ordered from high to low  
2.LOOP cutting from high cost to low cost
3. for each cut , multiply the blocks in another direction


# Approach



# Complexity
- Time complexity:
 Sorting O(nlogn)

- Space complexity:
 O(1)

# Code
```
public class Solution {
    public long MinimumCost(int m, int n, int[] H, int[] V) {
        Array.Sort(H, (a,b)=>b-a);
        Array.Sort(V, (a,b)=>b-a);
        int hc = 0;
        int vc = 0;
        long result = 0;
        while(hc<m-1 || vc<n-1)
        {
            if(hc==m-1)
            {
                result += V[vc++] * m;
            }
            else if(vc==n-1)
            {                 
                result += H[hc++] * n; 
            }
            else
            {
                if(V[vc]>H[hc])
                {
                    result += V[vc++] * (hc+1);
                }
                else
                    result += H[hc++] * (vc+1);
            }
        }
        return result;
    }
}
```